<template>
  <Teleport v-if="fullScreen" to="body">
    <div class="fixed inset-0 h-screen w-screen pointer-events-none" :style="{ zIndex }">
      <svg style="position: absolute; width: 0; height: 0; overflow: hidden" aria-hidden="true">
        <defs>
          <filter :id="filterId" x="0" y="0" width="1" height="1" primitiveUnits="userSpaceOnUse">
            <feFlood :x="samplePos" :y="samplePos" width="1" height="1" />
            <feComposite :width="pixelSize" :height="pixelSize" />
            <feTile result="a" />
            <feComposite in="SourceGraphic" in2="a" operator="in" />
            <feMorphology operator="dilate" :radius="dilateR" />
          </filter>
        </defs>
      </svg>
      <div class="absolute inset-0" :style="waveStyle" />
    </div>
  </Teleport>

  <div v-else class="relative overflow-hidden" :style="{ width, height }">
    <div
      v-if="$slots.default"
      class="relative h-full w-full"
      :style="pixelateContent ? contentStyle : undefined"
    >
      <slot />
    </div>
    <svg style="position: absolute; width: 0; height: 0; overflow: hidden" aria-hidden="true">
      <defs>
        <filter :id="filterId" x="0" y="0" width="1" height="1" primitiveUnits="userSpaceOnUse">
          <feFlood :x="samplePos" :y="samplePos" width="1" height="1" />
          <feComposite :width="pixelSize" :height="pixelSize" />
          <feTile result="a" />
          <feComposite in="SourceGraphic" in2="a" operator="in" />
          <feMorphology operator="dilate" :radius="dilateR" />
        </filter>
      </defs>
    </svg>
    <div
      v-if="!pixelateContent || !$slots.default"
      class="absolute inset-0"
      :style="waveStyle"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = withDefaults(
  defineProps<{
    fullScreen?: boolean
    wave?: boolean
    zIndex?: number
    width?: string
    height?: string
    pixelSize?: number
    grid?: number
    gridColor?: string
    bandWidth?: number
    /**
     * When true, pixelate the slot content itself (not the background).
     * Useful for pixelating icons/text inside the component.
     */
    pixelateContent?: boolean
    idleMinMs?: number
    idleMaxMs?: number
    waveDurationMs?: number
  }>(),
  {
    fullScreen: false,
    wave: true,
    zIndex: 2,
    width: '100%',
    height: '100%',
    pixelSize: 10,
    grid: 0,
    gridColor: 'rgba(255,255,255,0.25)',
    bandWidth: 40,
    pixelateContent: true,
    idleMinMs: 2000,
    idleMaxMs: 5000,
    waveDurationMs: 3000
  }
)

const filterId = `pw-${Math.random().toString(36).slice(2, 8)}`
const samplePos = computed(() => Math.floor(props.pixelSize / 2))
const dilateR = computed(() => Math.ceil(props.pixelSize / 2))

const maskCSS = ref('')
const isActive = ref(false)

const gridBg = computed(() => {
  const g = props.grid ?? 0
  if (g <= 0) return ''
  const c = props.gridColor
  return [
    `repeating-linear-gradient(0deg,${c} 0px,${c} 0px,transparent 1px,transparent ${g}px)`,
    `repeating-linear-gradient(90deg,${c} 0px,${c} 0px,transparent 1px,transparent ${g}px)`
  ].join(',')
})

const fullPixelMask = 'linear-gradient(white 0%, white 100%)'

const waveStyle = computed(() => {
  const base = {
    backdropFilter: `url(#${filterId})`,
    WebkitBackdropFilter: `url(#${filterId})`,
    ...(props.grid && props.grid > 0 ? { backgroundImage: gridBg.value } : {})
  }
  if (!props.wave) {
    return {
      ...base,
      maskImage: fullPixelMask,
      WebkitMaskImage: fullPixelMask
    }
  }
  if (!isActive.value) return { opacity: 0 }
  return {
    ...base,
    maskImage: maskCSS.value,
    WebkitMaskImage: maskCSS.value
  }
})

const contentStyle = computed(() => {
  const url = `url(#${filterId})`
  return {
    filter: url,
    WebkitFilter: url
  }
})

const pixelateContent = computed(() => props.pixelateContent)

let animId: number | null = null
let timeoutId: ReturnType<typeof setTimeout> | null = null
let waveActive = false
let waveStart = 0

function tick(ts: number) {
  const progress = Math.min((ts - waveStart) / props.waveDurationMs, 1)

  const bw = props.bandWidth
  const total = 200 + bw * 2
  const center = -bw + progress * total
  const leading = center + bw / 2
  const trailing = center - bw / 2
  const fade = bw * 0.3

  maskCSS.value =
    `linear-gradient(135deg,` +
    `transparent ${trailing - fade}%,white ${trailing}%,` +
    `white ${leading}%,transparent ${leading + fade}%)`

  if (progress < 1) {
    animId = requestAnimationFrame(tick)
  } else {
    isActive.value = false
    waveActive = false
    scheduleNext()
  }
}

function triggerWave() {
  if (waveActive) return
  waveActive = true
  isActive.value = true
  waveStart = performance.now()
  animId = requestAnimationFrame(tick)
}

function scheduleNext() {
  const delay = props.idleMinMs + Math.random() * (props.idleMaxMs - props.idleMinMs)
  timeoutId = setTimeout(triggerWave, delay)
}

onMounted(() => {
  if (props.wave) scheduleNext()
})

onUnmounted(() => {
  if (animId != null) cancelAnimationFrame(animId)
  if (timeoutId != null) clearTimeout(timeoutId)
})
</script>
