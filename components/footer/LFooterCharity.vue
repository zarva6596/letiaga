<script setup lang="ts">
import footerDrone from "@images/footer-drone.svg";
</script>

<template>
  <div
    class="w-full relative max-md:h-[405px] flex flex-col justify-end text-xl px-[34px] py-[25px] rounded-[30px] dark-bg-gradient h-full"
  >
    <img
      :src="footerDrone"
      alt="footer-drone"
      class="absolute self-center -top-16"
    >
    <div>{{ $t("footer.charity_fund") }}</div>
    <div>{{ $t("footer.edropu") }}</div>
  </div>
</template>
