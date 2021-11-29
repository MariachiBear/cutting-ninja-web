<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
   <div
      class="
         bg-unbleached-sand
         dark:bg-rocket-metallic
         prose
         shadow-inner
         flex flex-col
         lg:flex-row
         justify-center
         items-center
         lg:gap-5 lg:px-5
      "
   >
      <ic-outline-warning-amber
         class="text-8xl text-red-700 dark:text-red-400 opacity-50 lg:w-1/7"
      />

      <div class="text-justify w-6/7">
         <p>
            {{ t('label.delete_question') }}
            <span class="font-medium underline">{{ t('label.delete_suggestion') }}</span>
         </p>
      </div>
   </div>
</template>
