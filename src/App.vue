<script setup lang="ts">
import ReloadPrompt from './components/UI/ReloadPrompt.vue';

import { useURLStore } from './store/url';

const isReady = ref(false);

tryOnMounted(async () => {
   await useURLStore.init();
   isReady.value = true;
});
</script>

<template>
   <main v-if="isReady" class="overflow-hidden z-10 relative">
      <router-view />
   </main>
   <Notification />
   <ReloadPrompt />
   <Alerts />
</template>
