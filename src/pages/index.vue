<script setup lang="ts">
import { logicOr } from '@vueuse/math';
import { siteBreakpoints } from '~/composables';
import { useURLStore } from '~/store/url';

const { sm, md } = siteBreakpoints;
const isSmallScreen = logicOr(sm, md);
const urlState = useURLStore.getState();
</script>

<template>
   <div id="wrapper">
      <Hero />
      <UrlTable
         v-if="urlState.storedUrls.length > 0 && isSmallScreen"
         id="mobile-table"
         class="max-h-screen w-full h-100"
      />
      <Footer />
   </div>
</template>

<route lang="yaml">
meta:
   layout: default
   requiresAuth: false
</route>
