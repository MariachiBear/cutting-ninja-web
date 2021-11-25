<script setup lang="ts">
import ReloadPrompt from './components/UI/ReloadPrompt.vue';
import { useNotificationStore } from './store/notification';
import { useURLStore } from './store/url';

const isReady = ref(false);

tryOnMounted(async () => {
   await useURLStore.init();
   isReady.value = true;
   await useNotificationStore.init().then(async () => await useNotificationStore.reset());
});
</script>

<template>
   <main v-if="isReady" class="select-none overflow-hidden z-10">
      <router-view />
   </main>
   <Notification />
   <ReloadPrompt />
   <Alerts />
</template>
