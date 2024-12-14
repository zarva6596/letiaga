<script setup lang="ts">
import personalizedDrone from "@images/personalized-drone.svg";
import personalizedBlur from "@images/personalized-blur-bg.svg";
import SendMoneyBtn from '@components/ui/button/SendMoneyBtn.vue';
</script>

<template>
  <div id="personalized_drone" class="md:pt-24">
    <div
      class="relative bg-[#303030] md:py-[84.5px] py-[66px] md:rounded-[30px] md:pl-[60px] px-5"
    >
      <div class="max-w-[590px] flex flex-col md:gap-y-[66px] gap-y-[46px]">
        <div class="flex flex-col gap-y-9 text-white">
          <div class="md:gap-y-3.5 gap-y-9 font-bold flex flex-col">
            <h2>
              {{ $t("personalized_drone.my_drone") }}
            </h2>
            <img
              class="w-[350px] md:hidden"
              alt="personalized-drone"
              :src="personalizedDrone"
            >
            <span class="text-[22px]">
              {{ $t("personalized_drone.how_it_works") }}
            </span>
          </div>

          <div class="gap-y-2.5 flex flex-col">
            <ol class="list-decimal pl-5 flex flex-col gap-y-[18px]">
              <li>
                {{ $t("personalized_drone.donate") }}
              </li>
              <li>
                {{ $t("personalized_drone.confirmation") }}
              </li>
              <li>{{ $t("personalized_drone.successful_application") }}</li>
            </ol>

            <ul class="list-disc pl-10">
              <li>{{ $t("personalized_drone.hit_video") }}</li>
              <li>{{ $t("personalized_drone.branded_poster") }}</li>
            </ul>
          </div>
        </div>

        <SendMoneyBtn class="md:w-fit" variant="ghost" size="l">
          {{ $t("personalized_drone.buy") }}
	      </SendMoneyBtn>
      </div>

      <img
        class="absolute max-md:hidden bottom-0 z-[1] right-0"
        alt="personalized-drone"
        :src="personalizedDrone"
      >
      <img
        class="absolute max-md:hidden bottom-[90px] w-[554px] right-[220px]"
        alt="personalized-drone"
        :src="personalizedBlur"
      >
    </div>
  </div>
</template>
