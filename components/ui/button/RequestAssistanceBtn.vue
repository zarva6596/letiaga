<script setup lang="ts">
import type { PrimitiveProps } from 'radix-vue';
import type { HTMLAttributes } from 'vue';
import { type ButtonVariants } from ".";

interface Props extends PrimitiveProps {
	variant?: ButtonVariants["variant"];
	size?: ButtonVariants["size"];
	class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();
</script>

<template>
	<nuxt-link to="https://t.me/zarva6596" target="_blank">
		<Button v-bind="props">
			<slot />
		</Button>
	</nuxt-link>
</template>
