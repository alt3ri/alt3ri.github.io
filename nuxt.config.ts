// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    build: {
      cssMinify: 'lightningcss',
      sourcemap: false,
    },
  },
  alias: {
    '~/': './',
    '@/': './'
  },
  typescript: {
    strict: true,
    typeCheck: true
  },
  colorMode: {
    classSuffix: '',
    fallback: 'light',
    preference: 'system'
  },
  modules: [
    'motion-v/nuxt',
    '@nuxtjs/color-mode'
  ],
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, height=device-height, initial-scale=1' },
        { "charset": "utf-8"},
      ],
      script: [
        {
          src: './live2d.min.js'
        },
        {
          src: './live2dcubismcore.min.js'
        }
      ]
    }
  },
  ssr: false,
})
