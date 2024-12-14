<script setup lang="ts">
interface Props {
  title: string;
  value: string;
  type?: string;
}

withDefaults(defineProps<Props>(), {
  title: "",
  value: "",
  type: "default",
});
</script>

<template>
  <div
    class="flex w-full flex-col rounded-[30px] md:px-[70px] px-9 py-[30px] gap-y-5"
    :class="type === 'dark' ? 'dark-bg-gradient' : 'bg-[#F0F1F5]'"
  >
    <span>{{ title }}</span>
    <span class="md:text-7xl text-4xl font-bold">{{ value }}</span>
  </div>
</template>
