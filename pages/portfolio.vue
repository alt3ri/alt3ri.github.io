<template>
  <ClientOnly>
    <PixelGradient />

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

              <div class="mt-4">
                <p class="text-sm" style="color: var(--text-body);">Full-Stack Developer</p>
                <div class="mt-2 flex items-center justify-center gap-2">
                  <img
                    v-for="h in headerIcons"
                    :key="h.icon"
                    :src="`/icons/material/${h.icon}.svg`"
                    :title="h.label"
                    :aria-label="h.label"
                    class="w-5 h-5"
                  />
                </div>
              </div>
            </div>

            <div class="retro-card fade-in fade-in-delay-2">
              <div class="text-xs uppercase tracking-widest mb-3 flex items-center gap-2" style="color: var(--text-muted);">
                <img src="/icons/material/readme.svg" alt="" class="w-3.5 h-3.5 opacity-70" />
                // about
              </div>
              <p class="text-sm leading-relaxed" style="color: var(--text-body);">
                Building web platforms end to end. Open to junior roles.
              </p>
              <div class="mt-2 grid grid-cols-2 gap-2">
                <div
                  v-for="stat in stats"
                  :key="stat.label"
                  class="px-2 py-2 text-center"
                  style="border: 1px solid var(--border-color);"
                >
                  <div class="text-xl font-bold" style="color: var(--text-heading);">{{ stat.value }}</div>
                  <div class="mt-0.5 text-xs" style="color: var(--text-muted);">{{ stat.label }}</div>
                </div>
              </div>
              <p class="mt-3 text-xs text-center" style="color: var(--text-muted);">
                encore.moe · self-reported Google Analytics · 2026 YTD
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
              <div class="retro-card fade-in fade-in-delay-3 text-xs uppercase tracking-widest mb-6 flex items-center gap-2" style="color: var(--text-muted); padding: 10px 24px;">
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
                    <h3 class="text-sm font-semibold" style="color: var(--text-heading);">
                      <a
                        v-if="project.titleUrl"
                        :href="project.titleUrl"
                        target="_blank"
                        rel="noopener"
                        style="color: var(--text-link-hover); border-bottom: 1px solid var(--border-color);"
                      >{{ project.title }}</a>
                      <template v-else>{{ project.title }}</template>
                    </h3>
                    <a
                      v-if="project.link"
                      :href="project.link.href"
                      target="_blank"
                      rel="noopener"
                      class="text-xs"
                      style="color: var(--text-link-hover); border-bottom: 1px solid var(--border-color);"
                    >
                      {{ project.link.label }}
                    </a>
                    <span v-else-if="!project.titleUrl" class="text-xs" style="color: var(--text-muted);">private</span>
                  </div>
                  <p class="mt-2 text-sm leading-relaxed" style="color: var(--text-body);">
                    {{ project.summary }}
                  </p>
                  <div class="mt-2 flex flex-wrap gap-2">
                    <img
                      v-for="icon in projectIcons(project.tech)"
                      :key="icon.src"
                      :src="icon.src"
                      :title="icon.label"
                      :aria-label="icon.label"
                      class="w-5 h-5"
                    />
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
                  <p class="text-sm leading-relaxed" style="color: var(--text-body);">
                    {{ job.summary }}
                  </p>
                  <div class="mt-2 flex flex-wrap gap-2">
                    <img
                      v-for="icon in projectIcons(job.stack)"
                      :key="icon.src"
                      :src="icon.src"
                      :title="icon.label"
                      :aria-label="icon.label"
                      class="w-5 h-5"
                    />
                  </div>
                </div>
              </div>

              <div class="retro-card fade-in fade-in-delay-4">
                <div class="text-xs uppercase tracking-widest mb-3 flex items-center gap-2" style="color: var(--text-muted);">
                  <img src="/icons/material/git.svg" alt="" class="w-3.5 h-3.5 opacity-70" />
                  // open source
                </div>
                <p class="text-2xl font-bold" style="color: var(--text-heading);">12 merged PRs</p>
                <p class="mt-1 text-xs" style="color: var(--text-muted);">
                  large open-source Java server project · 2022
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
                <div class="flex flex-wrap gap-3">
                  <div
                    v-for="s in group.items"
                    :key="s"
                    class="px-2.5 py-2 inline-flex flex-col items-center gap-1"
                    style="border: 1px solid var(--border-color);"
                  >
                    <img
                      v-if="techIcon(s)"
                      :src="techIcon(s)"
                      :alt="s"
                      :title="s"
                      class="w-6 h-6"
                    />
                    <span class="text-xs" style="color: var(--text-body);">{{ s }}</span>
                  </div>
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

interface Project {
  title: string
  titleUrl?: string
  link?: { label: string, href: string }
  summary: string
  tech: string[]
}

interface Job {
  role: string
  org: string
  summary: string
  stack: string[]
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
  ['nuxt', 'nuxt'],
  ['vue', 'vue'],
  ['pinia', 'vue'],
  ['vitest', 'vitest'],
  ['vite', 'vite'],
  ['node:test', 'test-ts'],
  ['node.js', 'nodejs'],
  ['nitro', 'nuxt'],
  ['pm2', 'pm2-ecosystem'],
  ['discord.js', 'nodejs'],
  ['npm', 'npm'],
  ['rust', 'rust'],
  ['tauri', 'tauri'],
  ['tokio', 'rust'],
  ['java', 'java'],
  ['gradle', 'gradle'],
  ['junit', 'java'],
  ['jdbc', 'java'],
  ['python', 'python'],
  ['docker', 'docker'],
  ['postgresql', 'database'],
  ['drizzle', 'drizzle'],
  ['prisma', 'prisma'],
  ['redis', 'database'],
  ['bullmq', 'folder-queue'],
  ['aws', 'folder-aws'],
  ['github actions', 'github-actions-workflow'],
  ['git', 'git'],
  ['tailwind', 'tailwindcss'],
  ['openapi', 'openapi'],
  ['protobuf', 'proto'],
  ['protocol buffers', 'proto'],
  ['mit', 'license'],
  ['three.js', 'javascript'],
  ['pixijs', 'javascript'],
]

function techIcon(name: string): string | undefined {
  const tag = name.toLowerCase()
  const hit = TECH_ICON_RULES.find(([key]) => tag.startsWith(key))
  return hit ? `/icons/material/${hit[1]}.svg` : undefined
}

// Dedupe by icon file; label lists the tags sharing it, e.g. 'Node.js, discord.js'.
function projectIcons(tech: string[]): { src: string, label: string }[] {
  const groups = new Map<string, string[]>()
  for (const tag of tech) {
    const src = techIcon(tag)
    if (!src) continue
    const tags = groups.get(src) ?? []
    tags.push(tag)
    groups.set(src, tags)
  }
  return [...groups.entries()].map(([src, tags]) => ({ src, label: tags.join(', ') }))
}

const headerIcons: { label: string, icon: string }[] = [
  { label: 'Nuxt', icon: 'nuxt' },
  { label: 'TypeScript', icon: 'typescript' },
  { label: 'Node.js', icon: 'nodejs' },
  { label: 'PostgreSQL', icon: 'database' },
  { label: 'Docker', icon: 'docker' },
]

const stats = [
  { value: '252K', label: 'users' },
  { value: '3.7M', label: 'page views' },
  { value: '193K', label: 'organic sessions' },
  { value: '13', label: 'languages' },
]

const projects: Project[] = [
  {
    title: 'encore.moe',
    titleUrl: 'https://encore.moe',
    summary: 'Multilingual game-data platform. Unofficial fan project.',
    tech: ['Nuxt 4', 'TypeScript', 'Vue 3', 'Nitro', 'Pinia', 'Tailwind', 'three.js', 'PixiJS', 'discord.js', 'PM2', 'OpenAPI'],
  },
  {
    title: 'comico.moe',
    titleUrl: 'https://comico.moe',
    summary: 'Reading platform. 149 API routes, about 165 test files.',
    tech: ['Nuxt 4', 'Vue 3.5', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Redis', 'BullMQ', 'AWS S3 SDK', 'Docker', 'Vitest'],
  },
  {
    title: 'AreTwo',
    link: { label: 'GitHub', href: 'https://github.com/alt3ri/AreTwo' },
    summary: 'Open-source Cloudflare R2 desktop client for Windows.',
    tech: ['Rust', 'Tauri 2', 'tokio', 'Vue 3', 'Vite', 'TypeScript', 'GitHub Actions', 'MIT'],
  },
  {
    title: 'Game Server Plugin Suite',
    summary: 'Multi-module Java plugins. 166 JUnit test files.',
    tech: ['Java', 'Gradle', 'PostgreSQL', 'JDBC / HikariCP', 'JUnit 5', 'Python', 'Node.js'],
  },
  {
    title: 'Binary Protocol Stack Port',
    summary: 'KCP-over-UDP transport and protobuf codegen in strict TypeScript.',
    tech: ['TypeScript', 'Node.js', 'protobufjs', 'UDP / KCP', 'GitHub Actions', 'node:test'],
  },
]

const experience: Job[] = [
  {
    role: 'Freelance Full-Stack Developer',
    org: 'Self-employed',
    summary: 'Hospitality booking platform with payments and a MongoDB to PostgreSQL migration.',
    stack: ['Nuxt', 'Vue', 'TypeScript', 'Prisma', 'PostgreSQL'],
  },
]

const skills: SkillGroup[] = [
  {
    label: 'Core',
    items: ['TypeScript', 'Vue.js', 'Nuxt', 'Node.js', 'REST APIs', 'PostgreSQL', 'Full-Stack', 'Git'],
  },
  {
    label: 'Secondary',
    items: ['Java', 'Rust', 'Tauri', 'Drizzle', 'Prisma', 'Redis', 'BullMQ', 'Docker', 'GitHub Actions', 'Vitest', 'JUnit', 'PayPal', 'Discord', 'Protobuf', 'Tailwind'],
  },
  {
    label: 'Supporting',
    items: ['Python', 'Three.js', 'OpenAPI', 'AI-assisted'],
  },
]

const links: LinkItem[] = [
  { label: 'GitHub', href: 'https://github.com/alt3ri', external: true, icon: 'folder-github' },
  { label: 'AreTwo repo', href: 'https://github.com/alt3ri/AreTwo', external: true, icon: 'tauri' },
  { label: 'encore.moe', href: 'https://encore.moe', external: true, icon: 'nuxt' },
  { label: 'comico.moe', href: 'https://comico.moe', external: true, icon: 'nuxt' },
  { label: 'Email', href: 'mailto:me@alteri.moe', external: false, icon: 'email' },
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
