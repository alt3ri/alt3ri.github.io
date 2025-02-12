<template>
  <ClientOnly>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
    <video 
        autoplay 
        loop 
        muted 
        playsinline
        poster="/assets/img/116561327.gif"
        class="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/video/srkterror.mp4" type="video/mp4" />
      </video>
    <CardContainer>
    <CardBody
        class="group/card relative size-auto rounded-xl p-6 sm:w-[30rem]"
      >
    <div class="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105">

      <div class="relative">
        <div class="h-32 rounded-t-xl flex items-center justify-center overflow-hidden">
          <img type="image/gif" src="https://cdn.discordapp.com/attachments/813739185587355652/1338569028578316489/aagiphy.gif?ex=67ae320d&is=67ace08d&hm=5fa0a6cce7dd16e469af768fc1240839e235ee50e1b95f994aaf88395de532ca&">
        </div>
        
        <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            src="https://avatars.githubusercontent.com/u/95161279?v=4"
            alt="Profile"
            class="w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
          />
        </div>
      </div>

      <div class="pt-12 pb-8 px-6 text-center">
        <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200">alteri</h2>
        <a class="text-gray-600 dark:text-gray-400 mt-2 underline" href="mailto:me@alteri.moe">me@alteri.moe</a>
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-4 max-w-sm mx-auto">
          I like Gacha games, Anime, and programming. I'm currently working on <a class="underline" href="https://encore.moe">encore.moe</a>
        </p>

        <div class="discord-status w-full mb-6">
          <DiscordPresence />
        </div>

        <div class="mt-8 space-y-4">
          <button class="w-full px-6 py-3 bg-[#DE3163] text-white rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-[#811331]">
            <a href="https://encore.moe/en">encore.moe</a>
          </button>

          <button class="w-full px-6 py-3 bg-[#003087] text-white rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-[#001f6c]">
            <a href="https://paypal.me/alteri203">PayPal.me</a>
          </button>

          <button class="w-full px-6 py-3 bg-[#5865F2] text-white rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-[#4752c4]">
            <a href="https://discord.com/users/902534396752588861">Discord</a>
          </button>

          <button class="w-full px-6 py-3 bg-gray-900 text-white rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600">
           <a href="https://github.com/alt3ri">GitHub</a>
          </button>

          <button class="w-full px-6 py-3 bg-black text-white rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-gray-900">
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
//import Vortex from "~/components/Vortex.vue"
import CardContainer from "~/components/CardContainer.vue";
import CardBody from "~/components/CardBody.vue";
import DiscordPresence from "~/components/DiscordPresence.vue"

useSeoMeta({
  title: "Hello!",
  ogTitle: "Hello!",
  description: "just a page about me",
  ogDescription: "just a page about me",
  ogImage: "https://avatars.githubusercontent.com/u/95161279?v=4",
  twitterCard: "summary_large_image",
});

</script>