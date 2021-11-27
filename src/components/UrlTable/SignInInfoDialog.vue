<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
   <div
      class="bg-unbleached-sand dark:bg-rocket-metallic prose shadow-inner flex flex-row justify-center items-center gap-5 px-5"
   >
      <ic-outline-info class="text-8xl text-blue-600 dark:text-blue-400 opacity-80 w-1/7" />

      <div class="text-justify w-6/7">
         <p>{{ t('label.sign_in_info_main') }}</p>
         <p>{{ t('label.sign_in_info_suggestion') }}</p>
      </div>
   </div>
</template>
