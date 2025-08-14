<template>
  <ClientOnly>
    <div
      class="fixed inset-0 w-screen h-screen -z-10 overflow-hidden"
      style="transform: scaleX(-1);"
    >

      <video
        autoplay
        muted
        loop
        playsinline
        class="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="~/assets/video/main_effect_10428_250814210322_837528_60.webm"
          type="video/webm"
        />
      </video>

      <Live2D class="absolute inset-0 pointer-events-none" />
    </div>

    <div class="relative z-10 min-h-screen flex items-center justify-center p-4">
      <CardContainer>
        <CardBody
          class="group/card relative size-auto rounded-xl p-6 sm:w-[30rem]"
        >
          <div
            class="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105"
          >
            <div class="relative">
              <div class="h-32 rounded-t-xl flex items-center justify-center overflow-hidden">
                <img src="/assets/img/doroDance.gif" />
              </div>
              <div class="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img
                  src="https://avatars.githubusercontent.com/u/95161279?v=4"
                  alt="Profile"
                  class="w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
                />
              </div>
            </div>

            <div class="pt-12 pb-8 px-6 text-center">
              <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200">alteri</h2>
              <a href="mailto:me@alteri.moe" class="text-gray-600 dark:text-gray-400 mt-2 underline">
                me@alteri.moe
              </a>
              <p class="text-sm text-gray-500 dark:text-gray-400 mt-4 max-w-sm mx-auto">
                I like Gacha games, Anime, and programming. I'm currently working on
                <a href="https://encore.moe" class="underline">encore.moe</a>
              </p>

              <div class="discord-status w-full mb-6">
                <DiscordPresence />
              </div>

              <div class="mt-8 space-y-4">
                <button
                  class="w-full px-6 py-3 bg-[#003087] text-white rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-[#001f6c]"
                >
                  <a href="https://paypal.me/alteri203">PayPal.me</a>
                </button>
                <button
                  class="w-full px-6 py-3 bg-[#5865F2] text-white rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-[#4752c4]"
                >
                  <a href="https://discord.com/users/902534396752588861">Discord</a>
                </button>
                <button
                  class="w-full px-6 py-3 bg-gray-900 text-white rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
                >
                  <a href="https://github.com/alt3ri">GitHub</a>
                </button>
                <button
                  class="w-full px-6 py-3 bg-black text-white rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-gray-900"
                >
                  <a href="https://twitter.com/alteria0">Twitter (X)</a>
                </button>
              </div>
            </div>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import CardContainer from '~/components/CardContainer.vue'
import CardBody from '~/components/CardBody.vue'
import DiscordPresence from '~/components/DiscordPresence.vue'
import Live2D from '~/components/Live2D.vue'

useSeoMeta({
  title: 'Hello!',
  ogTitle: 'Hello!',
  description: 'just a page about me',
  ogDescription: 'just a page about me',
  ogImage: 'https://avatars.githubusercontent.com/u/95161279?v=4',
  twitterCard: 'summary_large_image',
})
</script>