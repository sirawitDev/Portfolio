// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['@pinia/nuxt', '@nuxtjs/google-fonts',],
  googleFonts: {
    families: {
      Sarabun: [400, 500, 600, 700],
      Inter: [400, 500, 600, 700],
      Kanit: [400, 500, 600, 700],
      Prompt: [400, 500, 600, 700],
    },
    display: 'swap',
  },
})