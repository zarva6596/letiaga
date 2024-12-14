// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "url";

export default defineNuxtConfig({
  devtools: { enabled: false },
  alias: {
    "@components": fileURLToPath(new URL("./components", import.meta.url)),
    "@images": fileURLToPath(new URL("./assets/images", import.meta.url)),
    "@lib/utils": fileURLToPath(new URL("./lib/utils", import.meta.url)),
    "@locales": fileURLToPath(new URL("./locales", import.meta.url)),
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        baseUrl: ".",
      },
    },
  },
  css: ["./assets/css/main.css"],
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "nuxt-icons",
    "@nuxt/eslint",
  ],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  app: {
    head: {},
  },
});
