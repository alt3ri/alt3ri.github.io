<template>
  <div class="fixed inset-0 w-screen h-screen pointer-events-none" style="z-index: 0;" aria-hidden="true">
    <canvas ref="canvas" class="absolute inset-0 w-full h-full" />
    <PixelWave class="absolute inset-0" :wave="false" />
  </div>
</template>

<script setup lang="ts">
const canvas = ref<HTMLCanvasElement>()

onMounted(async () => {
  if (!canvas.value) return
  const { default: Gradient } = await import('@bedard/gradient')
  new Gradient(canvas.value, {
    colors: ['#ffffff', '#9c9c9c', '#4f4f4f', '#000000'],
    seed: Math.random(),
  })
})
</script>
