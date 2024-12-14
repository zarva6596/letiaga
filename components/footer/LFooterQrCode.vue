<script setup lang="ts">
import footerQrCode from "@images/footer-qr-code.png";
</script>

<template>
  <div
    class="bg-[#F0F1F5] hidden h-full rounded-[30px] w-full md:flex flex-col gap-y-8 items-center justify-center"
  >
    <img :src="footerQrCode" alt="footer-qr-code" class="w-[145px]" >
    <span class="font-bold text-[22px]">{{ $t("hero.scan_and_donate") }}</span>
  </div>
</template>
