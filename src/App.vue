<script setup lang="ts">
import ReloadPrompt from './components/UI/ReloadPrompt.vue';
import { useNotificationStore } from './store/notification';
import { useUIStore } from './store/ui';
import { useURLStore } from './store/url';

const isReady = ref(false);

tryOnMounted(() => {
   const mainPromises = [useURLStore.init, useUIStore.init, useNotificationStore.init];
   const secondaryPromises = [useUIStore.reset, useNotificationStore.reset];

   Promise.all(mainPromises).then(() =>
      Promise.all(secondaryPromises).then(() => (isReady.value = true))
   );
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
