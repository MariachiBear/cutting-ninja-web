<script setup lang="ts">
const { t } = useI18n();

useHead({
   title: `Cutting Ninja | ${t('button.dashboard')}`,
});
</script>

<template>
   <main class="select-none overflow-hidden">
      <Navbar />
      <router-view />
      <Notification />
   </main>
</template>
