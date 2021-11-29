<script setup lang="ts">
import ReloadPrompt from './components/UI/ReloadPrompt.vue';
import { useURLStore } from './store/url';

const isReady = ref(false);
const isLoadingVisible = ref(true);

tryOnMounted(async () => {
   await useURLStore.init();
   isReady.value = true;
});
</script>

<template>
   <div
      class="fixed top-0 left-0 h-screen w-screen main-theme-bg flex justify-center items-center all-300"
      :class="
         isLoadingVisible
            ? 'opacity-100 pointer-events-auto z-10000'
            : 'opacity-0 pointer-events-none -z-10'
      "
   >
      <Logo
         v-model="isReady"
         is-from-loading
         class="transform scale-200 lg:scale-400"
         @animation-end="isLoadingVisible = false"
      />
   </div>
   <main class="overflow-hidden z-10 relative">
      <router-view />
   </main>
   <Notification />
   <ReloadPrompt />
   <Alerts />
</template>
