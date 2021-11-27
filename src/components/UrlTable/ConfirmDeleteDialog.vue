<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
   <div
      class="bg-unbleached-sand dark:bg-rocket-metallic shadow-inner flex flex-row justify-center items-center gap-5 px-5"
   >
      <ic-outline-warning-amber class="text-8xl text-english-lavender w-1/7" />

      <div class="text-justify w-6/7">
         <p>
            {{ t('label.delete_question') }}
            <span class="font-medium">{{ t('label.delete_suggestion') }}</span>
         </p>
      </div>
   </div>
</template>
