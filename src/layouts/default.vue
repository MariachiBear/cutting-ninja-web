<script setup lang="ts">
// User Store
const { t } = useI18n();
useHead({
   title: `Cutting Ninja | ${t('button.home')}`,
});
</script>

<template>
   <Navbar />
   <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
         <component :is="Component" :key="route" />
      </transition>
   </router-view>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
   /* @apply transition-all duration-300 ease-in-out; */
   transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
   /* @apply opacity-0; */
   opacity: 0;
}
.fade-leave-from,
.fade-enter-to {
   /* @apply opacity-100; */
   opacity: 1;
}
</style>
