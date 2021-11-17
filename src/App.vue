<script setup lang="ts">
import ReloadPrompt from './components/UI/ReloadPrompt.vue';
import { useURLStore } from './store/url';
import { useUserStore } from './store/user';

const isReady = ref(false);

useHead({
   title: 'URL Shortener - RUBN/COND',
});

tryOnMounted(async () => {
   await useUserStore.init();
   await useURLStore.init();
   isReady.value = true;
});
</script>

<template>
   <router-view v-if="isReady" />
   <ReloadPrompt />
</template>
