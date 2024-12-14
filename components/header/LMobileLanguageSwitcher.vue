<script setup lang="ts">
const languages = [
  {
    flag: "🇺🇦",
    name: "ua",
  },
  {
    flag: "🇬🇧",
    name: "eu",
  },
];
const { locale, setLocale } = useI18n();
const cookieLang = useCookie("lang");

const setLangCookie = (lang: string | null | undefined) => {
  setLocale(lang || "ua");
  cookieLang.value = lang || "ua";
};

setLangCookie(cookieLang.value);
</script>

<template>
  <div class="absolute bottom-10 flex">
    <div
      v-for="language in languages"
      :key="language.name"
      class="rounded-md uppercase py-[7px] w-[107px] h-[50px] justify-center group px-3 flex items-center gap-x-0.5"
      :class="locale === language.name ? 'bg-gray-200' : 'bg-white'"
      @click="setLangCookie(language.name)"
    >
      <span class="text-2xl leading-none">{{ language.flag }}</span>
      <span class="group-hover:underline">{{ language.name }}</span>
    </div>
  </div>
</template>
