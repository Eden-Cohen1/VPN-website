// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
  ],
  css: ["~/assets/main.css"],
});
