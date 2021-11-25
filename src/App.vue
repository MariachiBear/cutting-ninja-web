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
   <router-view v-if="isReady" />
   <ReloadPrompt />
</template>
