<script setup lang="ts">
import LLanguageDropdown from "@components/header/LLanguageDropdown.vue";
import SendMoneyBtn from '@components/ui/button/SendMoneyBtn.vue';
</script>

<template>
  <div class="flex items-center gap-x-3">
	  <SendMoneyBtn>
		  {{ $t("made_invest") }}
	  </SendMoneyBtn>

    <l-language-dropdown />
  </div>
</template>
