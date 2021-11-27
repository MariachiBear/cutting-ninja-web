<script setup lang="ts">
import { or } from '@vueuse/core';
import { siteBreakpoints } from '~/composables';
import { useURLStore } from '~/store/url';
const { sm, md } = siteBreakpoints;
const isSmallScreen = or(sm, md);
const urlState = useURLStore.getState();
</script>

<template>
   <div
      id="hero"
      class="flex relative flex-col items-center justify-center min-h-screen h-full py-10 w-full main-theme-bg colors-300 z-10"
   >
      <section
         id="hero-content"
         class="flex flex-col gap-10 items-center justify-between lg:flex-row lg:w-11/12 mt-20 mb-50"
      >
         <HeroText />
         <HeroImageTable v-if="!isSmallScreen" />
      </section>
      <MobileTableIndicator v-if="isSmallScreen && urlState.storedUrls.length > 0" />
   </div>
</template>
