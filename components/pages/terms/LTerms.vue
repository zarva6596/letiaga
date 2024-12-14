<script setup lang="ts">
import LNumberListParser from '@components/pages/terms/LNumberListParser.vue';
</script>

<template>
	<div class="pt-40 flex flex-col container">
		<h2 class="text-center text-4xl">{{ $t('privacy_policy.heading') }}</h2>
		<h3 class="text-center text-2xl">{{ $t('privacy_policy.subHeading') }}</h3>

		<p class="mt-8 indent-10">{{ $t('privacy_policy.annotation') }}</p>

		<LNumberListParser class="mt-8" />
	</div>
</template>
