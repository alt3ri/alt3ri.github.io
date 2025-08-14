<template>
  <canvas
    id="live2d-canvas"
    ref="canvas"
    style="
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 2;
    "
  />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as PIXI from 'pixi.js';
import { Live2DModel } from 'pixi-live2d-display';

//@ts-ignore
window.PIXI = PIXI;

const canvas = ref<HTMLCanvasElement>();

onMounted(async () => {
  if (!canvas.value) return;

  const app = new PIXI.Application({
    view: canvas.value,
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundAlpha: 0,
    autoDensity: true,
    resolution: window.devicePixelRatio || 1,
  });

  const model = await Live2DModel.from(
    './Resources/Kurumi_410428/bust_10428_new.model3.json'
  );

  app.stage.addChild(model);

  model.x = window.innerWidth / 2;
  model.y = window.innerHeight / 2;
  model.scale.set(1);      // adjust to taste
  model.anchor.set(0.69, 0.46);

  window.addEventListener('resize', () => {
    app.renderer.resize(window.innerWidth, window.innerHeight);
    model.x = window.innerWidth / 2;
    model.y = window.innerHeight / 2;
  });
});
</script>