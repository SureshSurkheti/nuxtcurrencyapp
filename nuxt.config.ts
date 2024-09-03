// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt',],

  runtimeConfig: {
    api: process.env.apiKey,
    secretKey: '123',
    public: {
      publicKey: '456',
    }
  }
})