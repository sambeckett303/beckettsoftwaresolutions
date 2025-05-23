// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: {
      name: 'bounce'
    }
  },
  ssr: true,
  modules: ["@nuxt/image"],
  css: ['@/assets/css/variables.css'],
})