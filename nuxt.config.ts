// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    ["@pinia/nuxt", { autoImports: ["defineStore"] }],
    [
      "nuxt-mail",
      {
        message: {
          to: "itzik.abramov1@gmail.com",
        },
        smtp: {
          service: "gmail",
          auth: {
            user: "itzik.abramov1@gmail.com",
            pass: "iplz xawa exwx mpqj",
          },
        },
      },
    ],
  ],
  css: ["~/assets/main.css"],
});
