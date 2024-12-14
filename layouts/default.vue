<template>
	<div class="font-vinnytsia-sans flex flex-col gap-y-20 md:gap-y-[220px] min-h-screen justify-between">
		<l-header />

		<slot />

		<div class="flex flex-col gap-y-20 md:gap-y-[220px] pb-[60px] md:px-[70px]">
			<l-footer class="max-md:px-5" />
		</div>
	</div>
</template>

<script setup lang="ts">
import LHeader from "@components/header/LHeader.vue";
import LFooter from "@components/footer/LFooter.vue";
</script>
