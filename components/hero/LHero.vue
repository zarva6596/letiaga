<script setup lang="ts">
import heroDroneBg from "@images/hero-drone-bg.png";
import qrCode from "@images/qr-code.png";
import charityFundLogo from "@images/charity-fund-logo.svg";
import SendMoneyBtn from '@components/ui/button/SendMoneyBtn.vue';
import RequestAssistanceBtn from '@components/ui/button/RequestAssistanceBtn.vue';
</script>

<template>
  <div
    class="h-screen bg-[#F0F1F5] relative bg-hero bg-cover bg-center flex items-center justify-center"
  >
    <div class="flex flex-col w-[420px] gap-y-[66px] h-full justify-center">
      <div
        class="flex flex-col max-md:flex-1 justify-center max-md:pl-5 md:items-center items-start"
      >
        <img
          :src="charityFundLogo"
          class="max-md:w-[260px]"
          alt="charity-fund-logo"
        >

        <span
          class="text-[clamp(17px,3vw,20px)] w-[210px] md:w-[292px] md:text-center"
        >
	        {{ $t("hero.info") }}
        </span>
      </div>
      <div class="flex gap-3 max-md:flex-col px-5 pb-10">
	      <SendMoneyBtn size="l" class="w-full">
		      {{ $t("made_invest") }}
	      </SendMoneyBtn>

        <RequestAssistanceBtn size="l" class="w-full" variant="ghost"
          >{{ $t("hero.request_for_assistance") }}
        </RequestAssistanceBtn>
      </div>
    </div>

    <!--QR Code-->
    <div
      class="absolute hidden w-[205px] items-center left-[90px] bottom-[80px] md:flex flex-col gap-y-8"
    >
      <img :src="qrCode" alt="qr-code" >
      <span class="font-bold text-[22px]">{{
        $t("hero.scan_and_donate")
      }}</span>
    </div>

    <!--Image BG-->
    <img
      :src="heroDroneBg"
      alt="hero-drone"
      class="absolute right-0 max-w-[250px] md:max-w-[460px]"
    >
  </div>
</template>
