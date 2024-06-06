// nuxt.config.js
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-icon',
    '@nuxtjs/google-fonts',
    '@nuxt/ui',
    '@hypernym/nuxt-anime',
    'maz-ui/nuxt',
    'nuxt-aos'
  ],
  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  }
});
