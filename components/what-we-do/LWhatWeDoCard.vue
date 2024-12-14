<script setup lang="ts">
interface Props {
  title: string;
  description: string;
  type?: string;
}

withDefaults(defineProps<Props>(), {
  title: "",
  description: "",
  type: "default",
});
</script>

<template>
  <div
    class="flex flex-col w-full pt-[42px] px-[34px] pb-[46px] gap-y-6 rounded-[30px]"
    :class="type === 'dark' ? 'dark-bg-gradient' : 'bg-[#F0F1F5]'"
  >
    <span class="font-bold text-[22px]">{{ $t(title) }}</span>
    <span :class="type === 'dark' ? 'text-white/80' : 'text-[#6A6A6A]'">{{
      $t(description)
    }}</span>
  </div>
</template>
