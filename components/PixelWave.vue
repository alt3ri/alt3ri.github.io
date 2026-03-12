<template>
  <Teleport v-if="fullScreen" to="body">
    <div class="fixed inset-0 w-screen h-screen pointer-events-none" :style="{ zIndex }">
      <svg style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true">
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
    <div v-if="$slots.default" class="relative w-full h-full">
      <slot />
    </div>
    <svg style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true">
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
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  fullScreen:     { type: Boolean, default: false },
  zIndex:         { type: Number, default: 2 },
  width:          { type: String, default: '100%' },
  height:         { type: String, default: '100%' },
  pixelSize:      { type: Number, default: 10 },
  gridColor:      { type: String, default: 'rgba(255,255,255,0.25)' },
  bandWidth:      { type: Number, default: 40 },
  idleMinMs:      { type: Number, default: 2000 },
  idleMaxMs:      { type: Number, default: 5000 },
  waveDurationMs: { type: Number, default: 3000 },
})

const filterId  = `pw-${Math.random().toString(36).slice(2, 8)}`
const samplePos = computed(() => Math.floor(props.pixelSize / 2))
const dilateR   = computed(() => Math.ceil(props.pixelSize / 2))

const maskCSS  = ref('')
const isActive = ref(false)

const gridBg = computed(() => {
  const ps = props.pixelSize
  const c  = props.gridColor
  return [
    `repeating-linear-gradient(0deg,${c} 0px,${c} 1px,transparent 1px,transparent ${ps}px)`,
    `repeating-linear-gradient(90deg,${c} 0px,${c} 1px,transparent 1px,transparent ${ps}px)`,
  ].join(',')
})

const waveStyle = computed(() => {
  if (!isActive.value) return { opacity: 0 }
  return {
    backdropFilter:       `url(#${filterId})`,
    WebkitBackdropFilter: `url(#${filterId})`,
    backgroundImage:      gridBg.value,
    maskImage:            maskCSS.value,
    WebkitMaskImage:      maskCSS.value,
  }
})

let animId     = null
let timeoutId  = null
let waveActive = false
let waveStart  = 0

function tick(ts) {
  const progress = Math.min((ts - waveStart) / props.waveDurationMs, 1)

  const bw    = props.bandWidth
  const total = 200 + bw * 2
  const center   = -bw + progress * total
  const leading  = center + bw / 2
  const trailing = center - bw / 2
  const fade     = bw * 0.3

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

onMounted(scheduleNext)

onUnmounted(() => {
  cancelAnimationFrame(animId)
  clearTimeout(timeoutId)
})
</script>
