<template>
	<div>
		<l-hero />

		<div class="mt-20 md:mt-[220px] flex flex-col gap-y-20 md:gap-y-[220px] pb-[60px] md:px-[70px]">
			<l-reporting class="max-md:px-5" />

			<l-what-we-do class="max-md:px-5" />

			<l-personalized-drone />
		</div>
	</div>
</template>

<script setup lang="ts">
import LReporting from "@components/reporting/LReporting.vue";
import LHero from "@components/hero/LHero.vue";
import LWhatWeDo from "@components/what-we-do/LWhatWeDo.vue";
import LPersonalizedDrone from "@components/personalized-drone/LPersonalizedDrone.vue";

const { t } = useI18n();

useHead({
	title: () => t("pageTitle"),
});

definePageMeta({
	layout: 'default',
})
</script>
<style>
.nuxt-icon svg {
	margin-bottom: 0;
}
</style>
