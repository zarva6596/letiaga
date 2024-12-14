<script setup lang="ts">
import dronePic from "@images/drone-pic.svg";
import LWhatWeDoCard from "@components/what-we-do/LWhatWeDoCard.vue";

const cards = [
  {
    title: "what_we_do.card1.title",
    description: "what_we_do.card1.description",
  },
  {
    title: "what_we_do.card2.title",
    description: "what_we_do.card2.description",
    type: "dark",
  },
  {
    title: "what_we_do.card3.title",
    description: "what_we_do.card3.description",
  },
  {
    title: "what_we_do.card4.title",
    description: "what_we_do.card4.description",
  },
];
</script>

<template>
  <div id="what_we_do" class="relative">
    <div class="flex flex-col gap-y-20">
      <div class="flex flex-col md:gap-y-5 gap-y-3 font-bold md:text-center">
        <span
          class="lowercase text-[clamp(22px,5vw,28px)] leading-none text-[#E4E5EC]"
          >{{ $t("hero.title") }}</span
        >
        <h2>{{ $t("what_we_do.title") }}</h2>
      </div>

      <div class="flex max-md:flex-col gap-6">
        <l-what-we-do-card v-for="(card, i) in cards" :key="i" v-bind="card" />
      </div>
    </div>

    <img
      :src="dronePic"
      alt="drone-pic"
      class="absolute md:top-0 top-4 max-md:w-[115px] right-0"
    >
  </div>
</template>
