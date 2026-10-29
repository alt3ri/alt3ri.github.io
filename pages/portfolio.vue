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

    <div class="relative min-h-screen flex items-start justify-center px-4 sm:px-8 py-12" style="z-index: 10;">
      <div class="w-full max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

          <!-- Column 1 -->
          <div class="space-y-6">
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
                  <NuxtLink
                    to="/"
                    class="text-xs tracking-wider mt-1 inline-block"
                    style="color: var(--text-muted); border-bottom: 1px solid var(--border-color);"
                  >
                    ← home
                  </NuxtLink>
                </div>
              </div>

              <div class="mt-4 text-sm leading-relaxed" style="color: var(--text-body);">
                {{ headline }}
              </div>
            </div>

            <div class="retro-card fade-in fade-in-delay-2">
              <div class="text-xs uppercase tracking-widest mb-3 flex items-center gap-2" style="color: var(--text-muted);">
                <img src="/icons/material/readme.svg" alt="" class="w-3.5 h-3.5 opacity-70" />
                // about
              </div>
              <div class="space-y-3 text-sm leading-relaxed" style="color: var(--text-body);">
                <p v-for="(para, i) in aboutParagraphs" :key="i">{{ para }}</p>
              </div>
              <p class="mt-3 text-xs" style="color: var(--text-muted);">
                Figures are self-reported Google Analytics, 2026 YTD.
              </p>
            </div>

            <div class="retro-card fade-in fade-in-delay-5">
              <div class="text-xs uppercase tracking-widest mb-3 flex items-center gap-2" style="color: var(--text-muted);">
                <img src="/icons/material/markdown.svg" alt="" class="w-3.5 h-3.5 opacity-70" />
                // education
              </div>
              <p class="text-sm" style="color: var(--text-heading);">FPT University</p>
            </div>

            <div class="retro-card fade-in fade-in-delay-5">
              <div class="text-xs uppercase tracking-widest mb-3 flex items-center gap-2" style="color: var(--text-muted);">
                <img src="/icons/material/lock.svg" alt="" class="w-3.5 h-3.5 opacity-70" />
                // links
              </div>
              <div class="space-y-2">
                <a
                  v-for="link in links"
                  :key="link.href"
                  :href="link.href"
                  :target="link.external ? '_blank' : undefined"
                  :rel="link.external ? 'noopener' : undefined"
                  class="social-link"
                >
                  <span class="inline-flex items-center gap-2">
                    <img :src="`/icons/material/${link.icon}.svg`" alt="" class="w-3.5 h-3.5" />
                    {{ link.label }}
                  </span>
                </a>
              </div>
            </div>
          </div>

          <!-- Columns 2-3 -->
          <div class="lg:col-span-2 space-y-6">
            <div>
              <div class="text-xs uppercase tracking-widest mb-3 flex items-center gap-2" style="color: var(--text-muted);">
                <img src="/icons/material/console.svg" alt="" class="w-3.5 h-3.5 opacity-70" />
                // projects
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  v-for="project in projects"
                  :key="project.title"
                  class="retro-card fade-in fade-in-delay-3"
                >
                  <div class="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 class="text-sm font-semibold flex items-center gap-2" style="color: var(--text-heading);">
                      <img
                        v-if="techIcon(project.tech[0] ?? '')"
                        :src="techIcon(project.tech[0] ?? '')"
                        alt=""
                        class="w-4 h-4"
                      />
                      {{ project.title }}
                    </h3>
                    <a
                      v-if="project.url"
                      :href="project.url"
                      target="_blank"
                      rel="noopener"
                      class="text-xs"
                      style="color: var(--text-link-hover); border-bottom: 1px solid var(--border-color);"
                    >
                      {{ project.url.replace('https://', '') }}
                    </a>
                    <span v-else class="text-xs" style="color: var(--text-muted);">private</span>
                  </div>
                  <p class="mt-2 text-sm leading-relaxed" style="color: var(--text-body);">
                    {{ project.summary }}
                  </p>
                  <div class="mt-2 flex flex-wrap gap-2">
                    <span
                      v-for="t in project.tech"
                      :key="t"
                      class="text-xs px-2 py-0.5 inline-flex items-center gap-1.5"
                      style="border: 1px solid var(--border-color); color: var(--text-muted);"
                    >
                      <img v-if="techIcon(t)" :src="techIcon(t)" alt="" class="w-3.5 h-3.5" />
                      {{ t }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="retro-card fade-in fade-in-delay-4">
                <div class="text-xs uppercase tracking-widest mb-3 flex items-center gap-2" style="color: var(--text-muted);">
                  <img src="/icons/material/document.svg" alt="" class="w-3.5 h-3.5 opacity-70" />
                  // experience
                </div>
                <div v-for="job in experience" :key="job.role">
                  <h3 class="text-sm font-semibold" style="color: var(--text-heading);">
                    {{ job.role }}
                  </h3>
                  <p class="text-xs mb-2" style="color: var(--text-muted);">{{ job.org }}</p>
                  <ul class="list-disc pl-5 space-y-1 text-sm leading-relaxed" style="color: var(--text-body);">
                    <li v-for="b in job.bullets" :key="b">{{ b }}</li>
                  </ul>
                </div>
              </div>

              <div class="retro-card fade-in fade-in-delay-4">
                <div class="text-xs uppercase tracking-widest mb-3 flex items-center gap-2" style="color: var(--text-muted);">
                  <img src="/icons/material/git.svg" alt="" class="w-3.5 h-3.5 opacity-70" />
                  // open source
                </div>
                <p class="text-sm leading-relaxed" style="color: var(--text-body);">
                  {{ openSource }}
                </p>
              </div>
            </div>

            <div class="retro-card fade-in fade-in-delay-5">
              <div class="text-xs uppercase tracking-widest mb-3 flex items-center gap-2" style="color: var(--text-muted);">
                <img src="/icons/material/settings.svg" alt="" class="w-3.5 h-3.5 opacity-70" />
                // skills
              </div>
              <div v-for="group in skills" :key="group.label" class="mb-4 last:mb-0">
                <div class="text-xs mb-2" style="color: var(--text-muted);">{{ group.label }}</div>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="s in group.items"
                    :key="s"
                    class="text-xs px-2 py-1 inline-flex items-center gap-1.5"
                    style="border: 1px solid var(--border-color); color: var(--text-body);"
                  >
                    <img v-if="techIcon(s)" :src="techIcon(s)" alt="" class="w-3.5 h-3.5" />
                    {{ s }}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import Live2D from '~/components/Live2D.vue'

interface Project {
  title: string
  url?: string
  summary: string
  tech: string[]
}

interface Job {
  role: string
  org: string
  bullets: string[]
}

interface SkillGroup {
  label: string
  items: string[]
}

interface LinkItem {
  label: string
  href: string
  external: boolean
  icon: string
}

// Matched with startsWith against the lowercased tag, so 'Nuxt 4', 'Vue 3.5', 'JUnit 5', 'Tauri 2' all match.
const TECH_ICON_RULES: [string, string][] = [
  ['typescript', 'typescript'],
  ['nuxt', 'vue'],
  ['vue', 'vue'],
  ['pinia', 'vue'],
  ['vite', 'vue'],
  ['node.js', 'nodejs'],
  ['nitro', 'nodejs'],
  ['pm2', 'nodejs'],
  ['discord.js', 'nodejs'],
  ['node:test', 'nodejs'],
  ['npm', 'nodejs'],
  ['rust', 'rust'],
  ['tauri', 'rust'],
  ['tokio', 'rust'],
  ['java', 'java'],
  ['gradle', 'java'],
  ['junit', 'java'],
  ['jdbc', 'java'],
  ['python', 'python'],
  ['docker', 'docker'],
  ['postgresql', 'database'],
  ['drizzle', 'database'],
  ['prisma', 'database'],
  ['redis', 'database'],
  ['bullmq', 'database'],
  ['git', 'git'],
  ['github actions', 'git'],
  ['tailwind', 'css'],
  ['openapi', 'json'],
  ['mit', 'license'],
  ['three.js', 'javascript'],
  ['pixijs', 'javascript'],
]

function techIcon(name: string): string | undefined {
  const tag = name.toLowerCase()
  const hit = TECH_ICON_RULES.find(([key]) => tag.startsWith(key))
  return hit ? `/icons/material/${hit[1]}.svg` : undefined
}

const headline = 'Full-Stack Developer (TypeScript/Nuxt) | Built a solo web platform serving 252K users/yr | Node.js · PostgreSQL · Docker'

const aboutParagraphs: string[] = [
  'FPT University graduate. I build web platforms end to end, usually alone: the SSR frontend, the API behind it, the data pipeline that feeds it, and the bot or tooling around it.',
  'My main project is encore.moe, an unofficial community reference site available in 13 languages. This year it has served about 252,000 users and 3.7 million page views, with around 193,000 sessions from organic search. Behind it are a Nuxt SSR site, a Nitro data API with a byte-budgeted in-memory cache, and a Discord bot that updates through webhooks whenever a new data version ships.',
  'I have also delivered paid freelance work, including a booking system for a hospitality business and a migration from MongoDB to PostgreSQL. I write TypeScript, Vue/Nuxt and Node.js daily, with Java and Rust on the side. I am looking for junior full-stack or backend roles and internships.',
]

const projects: Project[] = [
  {
    title: 'Multilingual Game-Data Platform (unofficial fan project)',
    url: 'https://encore.moe',
    summary: 'Solo-built Nuxt SSR site in 13 languages with a TypeScript Nitro data API, byte-budgeted caching and file-watch invalidation, so new data goes live without a redeploy. A Discord bot is updated through webhooks.',
    tech: ['TypeScript', 'Nuxt 4', 'Vue 3', 'Nitro', 'Pinia', 'Tailwind', 'three.js', 'PixiJS', 'discord.js', 'PM2', 'OpenAPI'],
  },
  {
    title: 'comico.moe: Reading Platform (Nuxt 4 + PostgreSQL)',
    url: 'https://comico.moe',
    summary: 'Reading and catalogue platform with 149 API routes, role-based access via better-auth, BullMQ/Redis background jobs, S3 image processing and seven locales. About 165 automated test files.',
    tech: ['Nuxt 4', 'Vue 3.5', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Redis', 'BullMQ', 'AWS S3 SDK', 'Docker', 'Vitest'],
  },
  {
    title: 'AreTwo: Cloudflare R2 Desktop Client (open source)',
    url: 'https://github.com/alt3ri/AreTwo',
    summary: 'Windows desktop client for browsing and managing Cloudflare R2 buckets. Credentials stay in the Rust backend and are sealed with Windows DPAPI; releases ship through a tag-triggered GitHub Actions workflow with pinned action SHAs.',
    tech: ['Rust', 'Tauri 2', 'tokio', 'Vue 3', 'Vite', 'TypeScript', 'GitHub Actions', 'MIT'],
  },
  {
    title: 'Game Server Plugin Suite (Java)',
    summary: 'Multi-module Gradle plugin suite for a multiplayer game server: about 417 Java source files, PostgreSQL persistence through HikariCP with versioned SQL migrations, async I/O with CompletableFuture, and 166 JUnit 5 test files.',
    tech: ['Java', 'Gradle', 'PostgreSQL', 'JDBC / HikariCP', 'JUnit 5', 'Python', 'Node.js'],
  },
  {
    title: 'Binary Protocol Stack Port (TypeScript)',
    summary: 'Ported a UDP-based networking stack to strict TypeScript: a custom KCP-over-UDP transport and schema-driven protobuf code generation. CI regenerates protobuf code and fails on drift, then runs type-checking, tests and build.',
    tech: ['TypeScript', 'Node.js', 'protobufjs', 'UDP / KCP', 'GitHub Actions', 'node:test'],
  },
]

const openSource = '12 merged pull requests to a large open-source Java server project (2022): admin commands and stat-system refactor.'

const experience: Job[] = [
  {
    role: 'Freelance Full-Stack Developer',
    org: 'Self-employed',
    bullets: [
      'Built a booking platform for a hospitality business: room booking, restaurant reservations, a shop, coupons, reviews and a gallery, with an admin dashboard.',
      'Migrated the data layer from MongoDB to PostgreSQL with Prisma (about 20 models), and upgraded password storage to scrypt with transparent rehashing on login.',
      'Integrated PayPal and SePay payments with separate sandbox and live modes, plus logging for webhooks and outgoing email.',
      'Stack: Nuxt 4, Vue 3, TypeScript, Prisma, PostgreSQL, Zod, PrimeVue.',
    ],
  },
]

const skills: SkillGroup[] = [
  {
    label: 'Core',
    items: ['TypeScript', 'Vue.js', 'Nuxt', 'Node.js', 'REST APIs', 'PostgreSQL', 'Full-Stack Development', 'Internationalization (i18n)', 'Caching', 'Git'],
  },
  {
    label: 'Secondary',
    items: ['Java', 'Rust', 'Tauri', 'Drizzle ORM', 'Prisma', 'Redis', 'BullMQ', 'Docker', 'GitHub Actions', 'Vitest', 'JUnit', 'Payment Integration (PayPal)', 'Discord Bots', 'Protocol Buffers', 'Tailwind CSS'],
  },
  {
    label: 'Supporting',
    items: ['Python (scripting)', 'Three.js / PixiJS', 'OpenAPI', 'AI-assisted Development (Claude Code / Codex)'],
  },
]

const links: LinkItem[] = [
  { label: 'GitHub', href: 'https://github.com/alt3ri', external: true, icon: 'git' },
  { label: 'AreTwo repo', href: 'https://github.com/alt3ri/AreTwo', external: true, icon: 'rust' },
  { label: 'encore.moe', href: 'https://encore.moe', external: true, icon: 'vue' },
  { label: 'comico.moe', href: 'https://comico.moe', external: true, icon: 'vue' },
  { label: 'Email', href: 'mailto:me@alteri.moe', external: false, icon: 'document' },
]

useSeoMeta({
  title: 'portfolio · alteri',
  ogTitle: 'portfolio · alteri',
  description: 'Projects, experience and skills of alteri: full-stack TypeScript, Nuxt and Node.js.',
  ogDescription: 'Projects, experience and skills of alteri: full-stack TypeScript, Nuxt and Node.js.',
  ogImage: 'https://avatars.githubusercontent.com/u/95161279?v=4',
  twitterCard: 'summary_large_image',
})
</script>
