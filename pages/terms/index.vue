<template>
	<div class="font-vinnytsia-sans flex flex-col gap-y-20 md:gap-y-[220px]">
		<l-privacy-policy />
	</div>
</template>

<script setup lang="ts">
import LPrivacyPolicy from '@components/pages/terms/LTerms.vue';

const { t } = useI18n();

useHead({
	title: () => t("pageTitle"),
});
</script>
<style>

.nuxt-icon svg {
	margin-bottom: 0;
}
</style>
