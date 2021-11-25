<script setup lang="ts">
import { or } from '@vueuse/core';
import { siteBreakpoints } from '~/composables';
const { sm, md } = siteBreakpoints;
const isSmallScreen = or(sm, md);
</script>

<template>
   <div
      id="hero"
      class="
         flex flex-col
         items-center
         justify-center
         min-h-screen
         h-full
         py-10
         w-full
         main-theme-bg
         colors-300
         z-10
      "
   >
      <section
         id="hero-content"
         class="flex flex-col gap-10 items-center justify-between lg:flex-row lg:w-11/12 my-10"
      >
         <HeroText />
         <HeroImageTable v-if="!isSmallScreen" />
      </section>
   </div>
</template>
