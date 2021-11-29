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
      <ic-outline-info class="text-8xl text-blue-700 dark:text-blue-400 opacity-60 lg:w-1/7" />

      <div class="text-justify w-6/7">
         <p>{{ t('sign_in_info.main') }}</p>
         <ul>
            <li>{{ t('sign_in_info.advantages_a') }}</li>
            <li>{{ t('sign_in_info.advantages_b') }}</li>
         </ul>
         <p>{{ t('sign_in_info.complement') }}</p>
         <p>{{ t('sign_in_info.suggestion') }}</p>
      </div>
   </div>
</template>
