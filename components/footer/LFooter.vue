<script setup lang="ts">
import LFooterQrCode from "@components/footer/LFooterQrCode.vue";
import LFooterCharity from "@components/footer/LFooterCharity.vue";
import LFooterContacts from "@components/footer/LFooterContacts.vue";
import LFooterPrivacy from "@components/footer/LFooterPrivacy.vue";
</script>

<template>
  <div class="flex max-md:flex-col max-md:pt-16 gap-6 md:h-[428px]">
    <l-footer-qr-code />

    <l-footer-charity />

    <div class="flex h-full w-full flex-col gap-y-6">
      <l-footer-contacts />

      <l-footer-privacy />
    </div>
  </div>
</template>

<style scoped></style>
