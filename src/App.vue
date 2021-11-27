<script setup lang="ts">
import ReloadPrompt from './components/UI/ReloadPrompt.vue';

import { useURLStore } from './store/url';

tryOnMounted(async () => {
   await useURLStore.init();
});
</script>

<template>
   <main class="overflow-hidden z-10 relative">
      <router-view />
   </main>
   <Notification />
   <ReloadPrompt />
   <Alerts />
</template>
