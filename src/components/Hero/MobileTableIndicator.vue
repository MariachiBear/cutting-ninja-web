<script setup lang="ts">
const { t } = useI18n();
const goTo = () => document.getElementById('mobile-table')?.scrollIntoView({ behavior: 'smooth' });
</script>

<template>
   <button
      class="colors-300 max-w-7/12 opacity-60 text-center absolute bottom-0 text-theme flex flex-col items-center justify-center mb-10"
      @click="goTo"
   >
      <ic-baseline-arrow-downward
         class="text-5xl md:text-6xl animated animate-shake-y animate-loop animate-duration-10000 absolute opacity-20"
      />
      <span class="text-sm md:text-lg">{{ t('label.small_screen_url_msg') }}</span
      ><span class="text-sm md:text-lg">{{ t('label.dont_forget_them') }}</span>
   </button>
</template>
