<script setup lang="ts">
import LReportingCard from "@components/reporting/LReportingCard.vue";

const { t } = useI18n();
const cards = computed(() => [
  {
    title: t("reporting.total_invest"),
    value: t("currency", { amount: "632 543" }),
  },
  {
    title: t("reporting.drones_transferred"),
    value: t("units", { units: "58" }),
    type: "dark",
  },
]);
</script>

<template>
  <div id="reporting" class="gap-y-[30px] flex flex-col">
    <div class="flex justify-between items-end">
      <h2>{{ $t("menu.reporting") }}</h2>
	    <nuxt-link
		    to="https://docs.google.com/spreadsheets/d/1ufpgfZZiltkQC5wRZ7A4au1C_dszqyEnpEHA2O28e5w/edit?gid=0#gid=0"
		    target="_blank"
	    >
		    <Button
			    variant="link"
			    size="s"
		    >
			    {{ $t("reporting.all_reporting") }}
		    </Button>
	    </nuxt-link>
    </div>

    <div class="flex max-md:flex-col gap-6">
      <l-reporting-card v-for="(card, i) in cards" :key="i" v-bind="card" />
    </div>
  </div>
</template>
