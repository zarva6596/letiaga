<script setup lang="ts">
import LNavMenu from "@components/header/LNavMenu.vue";
import LMobileLanguageSwitcher from "@components/header/LMobileLanguageSwitcher.vue";
import SendMoneyBtn from '@components/ui/button/SendMoneyBtn.vue';

const isExpanded = ref(false);
</script>

<template>
  <div class="flex items-center md:hidden gap-x-2.5">
	  <SendMoneyBtn class="capitalize">
		  {{ $t("support") }}
	  </SendMoneyBtn>

    <div
      class="w-12 h-12 flex items-center justify-center"
      @click="isExpanded = true"
    >
      <nuxt-icon class="text-2xl" name="menu" />
    </div>

    <div
      class="fixed w-screen duration-500 h-screen transition-all bg-white z-50 flex flex-col gap-y-4 top-0 left-0"
      :class="isExpanded ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="relative w-full h-full flex justify-center items-center">
        <span
          class="absolute top-4 right-4 text-[30px]"
          @click="isExpanded = false"
        >
	        X
        </span>
        <l-nav-menu @toggle-link="isExpanded = false" />

        <l-mobile-language-switcher />
      </div>
    </div>
  </div>
</template>
