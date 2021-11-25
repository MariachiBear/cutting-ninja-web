<script setup lang="ts">
import { or } from '@vueuse/core';
import { useURLStore } from '~/store/url';
import { siteBreakpoints } from '~/composables';

const { sm, md } = siteBreakpoints;
const isSmallScreen = or(sm, md);
const urlState = useURLStore.getState();
</script>

<template>
   <Hero />
   <StoredUrls
      v-if="urlState.storedUrls.length > 0 && isSmallScreen"
      class="lg:hidden max-h-screen w-full h-100 shadow-inner"
   />
</template>

<route lang="yaml">
meta:
   layout: home
   requiresAuth: false
</route>
