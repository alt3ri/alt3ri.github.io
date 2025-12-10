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
            class="w-full max-w-md bg-white rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105"
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
              <h2 class="text-xl font-bold text-gray-800">alteri</h2>
              <a href="mailto:me@alteri.moe" class="text-gray-600 dark:text-gray-400 mt-2 underline">
                me@alteri.moe
              </a>
              <p class="text-sm text-muted-foreground mt-4 max-w-sm mx-auto">
                I like Gacha games, Anime, and programming. I'm currently working on
                <a href="https://encore.moe" class="underline">encore.moe</a>
              </p>

              <div class="discord-status w-full mb-6">
                <DiscordPresence />
              </div>

              <div class="mt-8 space-y-4">
                <div class="w-full flex items-center justify-center">
                  <a
                    href="https://paypal.me/alteri203"
                    class="relative inline-block w-full px-6 py-3 font-medium group"
                  >
                    <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#ff5a16] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span class="absolute inset-0 w-full h-full bg-white border-2 border-[#ff5a16] group-hover:bg-[#ff5a16]"></span>
                    <span class="relative text-[#ff5a16] group-hover:text-white flex items-center justify-center space-x-2">Ko-fi</span>
                  </a>
                </div>
                <div class="w-full flex items-center justify-center">
                  <a
                    href="https://discord.com/users/902534396752588861"
                    class="relative inline-block w-full px-6 py-3 font-medium group"
                  >
                    <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#5865F2] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span class="absolute inset-0 w-full h-full bg-white border-2 border-[#5865F2] group-hover:bg-[#5865F2]"></span>
                    <span class="relative text-[#5865F2] group-hover:text-white flex items-center justify-center space-x-2">Discord</span>
                  </a>
                </div>
                <div class="w-full flex items-center justify-center">
                  <a
                    href="https://github.com/alt3ri"
                    class="relative inline-block w-full px-6 py-3 font-medium group"
                  >
                    <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-gray-900 dark:bg-gray-700 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span class="absolute inset-0 w-full h-full bg-white border-2 border-gray-900 group-hover:bg-gray-900"></span>
                    <span class="relative text-gray-900 group-hover:text-white flex items-center justify-center space-x-2">GitHub</span>
                  </a>
                </div>
                <div class="w-full flex items-center justify-center">
                  <a
                    href="https://twitter.com/alteria0"
                    class="relative inline-block w-full px-6 py-3 font-medium group"
                  >
                    <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                    <span class="relative text-black group-hover:text-white flex items-center justify-center space-x-2">Twitter (X)</span>
                  </a>
                </div>
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