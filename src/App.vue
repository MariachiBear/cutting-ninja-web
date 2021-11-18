<script setup lang="ts">
import ReloadPrompt from './components/UI/ReloadPrompt.vue';
import { useURLStore } from './store/url';
import { useUserStore } from './store/user';
import AxiosInstance from '~/API/index';

const isReady = ref(false);

const userState = useUserStore.getState();

useHead({
   title: 'URL Shortener - RUBN/COND',
});

tryOnMounted(async () => {
   await useUserStore.init();
   await useURLStore.init();
   isReady.value = true;
   AxiosInstance.defaults.headers.common.Authorization = `Bearer ${userState.user?.accessToken}`;
});
</script>

<template>
   <router-view v-if="isReady" />
   <ReloadPrompt />
</template>
