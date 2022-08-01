<script setup lang="ts">
const { t } = useI18n();
useHead({
   title: `${t('label.app_name')} | ${t('label.page_not_found')}`,
});
</script>

<template>
   <main class="h-screen max-h-screen overflow-hidden">
      <router-view />
   </main>
</template>
