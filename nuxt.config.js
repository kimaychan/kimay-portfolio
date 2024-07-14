export default defineNuxtConfig({
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',

  devtools: { enabled: true },

  head: {
    title: 'kimay-portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: ['~/assets/scss/main.scss', '~/assets/scss/icons.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_settings.scss" as *;'
        }
      }
    }
  },

  compatibilityDate: '2024-07-14'
})