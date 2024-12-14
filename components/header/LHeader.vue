<script setup lang="ts">
import logo from "@images/logo.svg";
import LNavMenu from "@components/header/LNavMenu.vue";
import LRightActions from "@components/header/LRightActions.vue";
import LMobileMenu from "@components/header/LMobileMenu.vue";
</script>

<template>
  <div
    class="md:px-[70px] z-10 bg-[#F0F1F5] max-md:h-16 fixed top-0 left-0 w-full md:py-5 pl-5 pr-3 flex justify-between items-center"
  >
    <nuxt-link to="/">
	    <img width="142" height="50" :src="logo" alt="logo" >
    </nuxt-link>

    <l-nav-menu class="max-md:hidden" />

    <l-right-actions class="max-md:hidden" />

    <l-mobile-menu />
  </div>
</template>
