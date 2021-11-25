<script setup lang="ts">
// User Store
const { t } = useI18n();
useHead({
   title: `Cutting Ninja | ${t('button.home')}`,
});
</script>

<template>
   <Navbar />
   <router-view />
   <Footer />
</template>
