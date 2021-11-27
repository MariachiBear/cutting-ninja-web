<script setup lang="ts">
import { isDark, toggleDark } from '~/composables';
const { t } = useI18n();
const isDarkDelayed = useDebounce(isDark, 150);
</script>

<template>
   <button
      class="flex flex-col icon-btn relative text-3xl xl:text-2xl text-theme"
      :title="t('button.toggle_dark')"
      @click="toggleDark()"
   >
      <ic-baseline-dark-mode
         class="animate-spin dark:animate-none opacity-300"
         :class="[!isDarkDelayed ? 'opacity-0' : 'opacity-100 ']"
      />
      <ic-baseline-light-mode
         class="absolute animate-none dark:animate-spin opacity-300"
         :class="[isDarkDelayed ? 'opacity-0' : 'opacity-100']"
      />
   </button>
</template>
