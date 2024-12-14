<script setup lang="ts">
import { useRoute } from '#imports';

const menu = ["what_we_do", "personalized_drone", "reporting"];
const anchors = ref([]);
const route = useRoute();

defineEmits(["toggle-link"]);

function scrollToSection(anchor: HTMLAnchorElement, e: Event) {
	e.preventDefault();

	if (route.path !== '/') {
		const anchorId = anchor?.href?.split('#')?.at(1)
		navigateTo(`/#${anchorId}`)
	}

	setTimeout(() => {
		const target = document.getElementById(
			(anchor.getAttribute("href") || "").slice(1),
		);

		const elementPosition = target?.offsetTop;

		if (!elementPosition) return;

		const offsetPosition = elementPosition - 120;

		window?.scrollTo({
			behavior: "smooth",
			top: offsetPosition,
		});
	}, 100)
}

function setAnchors() {
	anchors.value.forEach((anchor: Element) => {
		anchor.addEventListener("click", (e) => scrollToSection(anchor, e));
	});
}

onMounted(setAnchors);
</script>

<template>
  <div class="flex items-center max-md:flex-col max-md:font-bold gap-[42px]">
    <a
      v-for="item in menu"
      ref="anchors"
      :key="item"
      :href="`#${item}`"
      @click="$emit('toggle-link')"
    >
	    {{ $t(`menu.${item}`) }}
    </a>
  </div>
</template>
