// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },

  modules: [
    '@vueuse/nuxt',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: [
    '~/assets/css/main.css',
    '@/assets/scss/global.scss',
  ],

  runtimeConfig: {
    apiKey: '',
    apiBaseUrl: '',
    public: {
      imgBaseUrl: ''
    }
  },



  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_vars.scss" as *;',
        },
      },
    },
  },
})