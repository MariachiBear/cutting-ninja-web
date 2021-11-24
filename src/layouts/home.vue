<script setup lang="ts">
const { t } = useI18n();
useHead({
   title: `URL Shortener | ${t('button.home')}`,
});
</script>

<template>
   <main class="select-none overflow-hidden">
      <router-view />
      <Footer />
      <Notification />
   </main>
</template>
