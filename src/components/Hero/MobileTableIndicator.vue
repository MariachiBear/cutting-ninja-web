<script setup lang="ts">
const { t } = useI18n();
const goTo = () => document.getElementById('mobile-table')?.scrollIntoView({ behavior: 'smooth' });
</script>

<template>
   <button
      class="
         colors-300
         max-w-10/12
         opacity-50
         text-center
         absolute
         bottom-0
         text-theme
         flex flex-row
         items-center
         justify-center
         mb-10
      "
      @click="goTo"
   >
      <p class="w-full flex-grow text-left text-sm md:text-lg">
         {{ t('label.small_screen_url_msg') }} {{ t('label.dont_forget_them') }}
      </p>
      <ic-baseline-arrow-downward
         class="text-5xl md:text-6xl animated animate-shake-y animate-loop animate-duration-10000"
      />
   </button>
</template>
