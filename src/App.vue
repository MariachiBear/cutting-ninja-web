<script setup lang="ts">
import ReloadPrompt from './components/UI/ReloadPrompt.vue';
import { useURLStore } from './store/url';
import { useUserStore } from './store/user';
import AxiosInstance from '~/API/index';

const isReady = ref(false);

const userState = useUserStore.getState();

const isLoggedIn = useUserStore.isUserLoggedIn();

useHead({
   title: 'URL Shortener - RUBN/COND',
});

tryOnMounted(async () => {
   await useUserStore.init();
   await useURLStore.init();
   isReady.value = true;
   AxiosInstance.defaults.headers.common.Authorization = `Bearer ${userState.user?.accessToken}`;
   if (isLoggedIn.value) {
      await useUserStore.checkLogin();
   }
});
</script>

<template>
   <router-view v-if="isReady" />
   <ReloadPrompt />
</template>
