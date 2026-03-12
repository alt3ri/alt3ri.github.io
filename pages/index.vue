<template>
  <ClientOnly>
    <div class="fixed inset-0 w-screen h-screen overflow-hidden" style="z-index: 0; transform: scaleX(-1);">
      <video
        autoplay
        muted
        loop
        playsinline
        class="absolute inset-0 w-full h-full object-cover"
        style="filter: brightness(0.4);"
      >
        <source
          src="~/assets/video/main_effect_10428_250814210322_837528_60.webm"
          type="video/webm"
        />
      </video>
    </div>

    <div class="fixed inset-0 w-screen h-screen pointer-events-none" style="z-index: 1; transform: scaleX(-1); filter: brightness(0.4);">
      <Live2D class="absolute inset-0" />
    </div>

    <PixelWave full-screen :z-index="2" />

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
            >encore.moe</a>
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
import Live2D from '~/components/Live2D.vue'

useSeoMeta({
  title: 'alteri',
  ogTitle: 'alteri',
  description: 'just a page about me',
  ogDescription: 'just a page about me',
  ogImage: 'https://avatars.githubusercontent.com/u/95161279?v=4',
  twitterCard: 'summary_large_image',
})
</script>

<style>
:root {
  --bg-primary: #111111;
  --bg-card: #1a1a1a;
  --bg-card-hover: #1f1f1f;
  --border-color: #333333;
  --border-hover: #555555;
  --text-heading: #ffffff;
  --text-body: #949494;
  --text-muted: #666666;
  --text-link: #b0b0b0;
  --text-link-hover: #ffffff;
  --accent: #888888;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  background-color: var(--bg-primary);
  color: var(--text-body);
  font-family: 'Space Mono', monospace;
  font-size: 14px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

body::after {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  background: repeating-linear-gradient(0deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.03) 2px,
      rgba(0, 0, 0, 0.03) 4px);
}

::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg-primary); }
::-webkit-scrollbar-thumb { background: var(--border-color); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--border-hover); }

::selection {
  background: rgba(255, 255, 255, 0.15);
  color: var(--text-heading);
}

a {
  color: var(--text-link);
  text-decoration: none;
  transition: color 0.2s ease, border-color 0.2s ease;
}
a:hover { color: var(--text-link-hover); }

.retro-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  padding: 24px;
  transition: border-color 0.3s ease, background-color 0.3s ease;
}
.retro-card:hover {
  border-color: var(--border-hover);
  background: var(--bg-card-hover);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border: 1px solid var(--border-color);
  color: var(--text-body);
  font-family: 'Space Mono', monospace;
  font-size: 13px;
  transition: all 0.2s ease;
  text-decoration: none;
}
.social-link:hover {
  border-color: var(--text-heading);
  color: var(--text-heading);
  background: rgba(255, 255, 255, 0.03);
}
.social-link::after {
  content: '→';
  opacity: 0;
  transform: translateX(-8px);
  transition: all 0.2s ease;
}
.social-link:hover::after {
  opacity: 1;
  transform: translateX(0);
}

.profile-img {
  border: 2px solid var(--border-color);
  filter: contrast(1.05);
  transition: border-color 0.3s ease, filter 0.3s ease;
}
.profile-img:hover {
  border-color: var(--text-heading);
  filter: contrast(1.1) brightness(1.05);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
  animation: pulse-dot 2s ease-in-out infinite;
}
@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}
.fade-in { animation: fadeInUp 0.6s ease forwards; opacity: 0; }
.fade-in-delay-1 { animation-delay: 0.1s; }
.fade-in-delay-2 { animation-delay: 0.2s; }
.fade-in-delay-3 { animation-delay: 0.3s; }
.fade-in-delay-4 { animation-delay: 0.4s; }
.fade-in-delay-5 { animation-delay: 0.5s; }

.profile-column { margin-left: 0; }
@media (min-width: 640px) { .profile-column { margin-left: 15%; } }
@media (min-width: 1024px) { .profile-column { margin-left: 10%; } }
@media (min-width: 1280px) { .profile-column { margin-left: 15%; } }
</style>