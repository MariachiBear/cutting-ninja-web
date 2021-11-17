<script setup lang="ts">
import { useURLStore } from '~/store/url';
const urlState = useURLStore.getState();
</script>

<template>
   <Hero />
   <StoredUrls
      v-if="urlState.storedUrls.length > 0"
      class="lg:hidden max-h-screen w-full h-100 shadow-inner main-theme-bg"
   />
</template>

<route lang="yaml">
meta:
   layout: home
</route>
