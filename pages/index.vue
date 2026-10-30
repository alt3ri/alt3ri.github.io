<template>
  <ClientOnly>
    <PixelGradient />

    <div class="relative min-h-screen flex items-center justify-center sm:justify-start p-4 sm:p-8" style="z-index: 10;">
      <div class="profile-column w-full max-w-md space-y-6">

        <div class="retro-card text-center fade-in fade-in-delay-1">
          <div class="flex flex-col items-center gap-4">
            <img
              src="https://avatars.githubusercontent.com/u/95161279?v=4"
              alt="alteri"
              class="w-20 h-20 rounded-full profile-img"
            />
            <div>
              <h1 class="text-2xl font-bold tracking-tight" style="color: var(--text-heading);">
                alteri
              </h1>
              <a
                href="mailto:me@alteri.moe"
                class="text-xs tracking-wider mt-1 inline-block"
                style="color: var(--text-muted); border-bottom: 1px solid var(--border-color);"
              >
                me@alteri.moe
              </a>
            </div>
          </div>

          <div class="mt-4 text-sm leading-relaxed" style="color: var(--text-body);">
            I like Gacha games, Anime, and programming. <br />
            Currently working on
            <a
              href="https://encore.moe"
              style="color: var(--text-link-hover); border-bottom: 1px solid var(--border-color);"
              class="hover:!border-white"
            >encore.moe</a> and <a
              href="https://comico.moe"
              style="color: var(--text-link-hover); border-bottom: 1px solid var(--border-color);"
              class="hover:!border-white"
            >comico.moe</a>
          </div>
        </div>

        <div class="retro-card fade-in fade-in-delay-2">
          <div class="text-xs uppercase tracking-widest mb-3" style="color: var(--text-muted);">
            // discord
          </div>
          <DiscordPresence />
        </div>

        <div class="retro-card fade-in fade-in-delay-3">
          <div class="text-xs uppercase tracking-widest mb-3" style="color: var(--text-muted);">
            // links
          </div>
          <div class="space-y-2">
            <NuxtLink to="/portfolio" class="social-link">
              <span>Portfolio</span>
            </NuxtLink>
            <a
              href="https://ko-fi.com/alteri"
              target="_blank"
              rel="noopener"
              class="social-link"
            >
              <span>Ko-fi</span>
            </a>
            <a
              href="https://discord.com/users/902534396752588861"
              target="_blank"
              rel="noopener"
              class="social-link"
            >
              <span>Discord</span>
            </a>
            <a
              href="https://github.com/alt3ri"
              target="_blank"
              rel="noopener"
              class="social-link"
            >
              <span>GitHub</span>
            </a>
            <a
              href="https://twitter.com/alteria0"
              target="_blank"
              rel="noopener"
              class="social-link"
            >
              <span>Twitter (X)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import DiscordPresence from '~/components/DiscordPresence.vue'

useSeoMeta({
  title: 'alteri',
  ogTitle: 'alteri',
  description: 'just a page about me',
  ogDescription: 'just a page about me',
  ogImage: 'https://avatars.githubusercontent.com/u/95161279?v=4',
  twitterCard: 'summary_large_image',
})
</script>

