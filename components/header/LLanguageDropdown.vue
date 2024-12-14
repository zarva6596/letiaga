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
const selectedLanguageFlag = computed(
  () => languages.find((language) => language.name === locale.value)?.flag,
);
const { locale, setLocale } = useI18n();
const isOpen = ref(false);

const cookieLang = useCookie("lang");

const setLangCookie = (lang: string | null | undefined) => {
  setLocale(lang || "ua");
  cookieLang.value = lang || "ua";
	isOpen.value = false;
};

setLangCookie(cookieLang.value);
</script>

<template>
  <div class="relative cursor-pointer">
    <div
      class="rounded-lg border-2 uppercase hover:border-[#E4E5EC] py-[7px] px-3 flex items-center gap-x-0.5"
      :class="isOpen ? 'rounded-b-none border-[#E4E5EC]' : 'border-transparent'"
      @click="isOpen = !isOpen"
    >
      <span class="text-2xl">{{ selectedLanguageFlag }}</span>
      {{ locale }}
      <nuxt-icon
        name="chevron-down"
        class="transition-all"
        :class="isOpen ? '-rotate-180' : 'text-[#6F696A]'"
      />
    </div>

    <div
      v-if="isOpen"
      class="absolute translate-y-full bottom-0 left-0 flex flex-col bg-white w-full rounded-b-lg border-2 border-t-0 border-[#E4E5EC]"
    >
      <template v-for="language in languages" :key="language.name">
        <div
          class="flex justify-center items-center bg-black/[.02] group h-[50px] px-3 gap-x-0.5"
          @click="setLangCookie(language.name)"
        >
          <span class="text-2xl">{{ language.flag }}</span>
          <span class="group-hover:underline uppercase">{{
            language.name
          }}</span>
        </div>

        <div class="w-full last-of-type:hidden border-b-2 border-[#E4E5EC]" />
      </template>
    </div>
  </div>
</template>
