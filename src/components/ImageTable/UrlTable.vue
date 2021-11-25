<script setup lang="ts">
import { or } from '@vueuse/core';
import { siteBreakpoints } from '~/composables';
import { useURLStore } from '~/store/url';
import { useUserStore } from '~/store/user';

const isUserLoggedIn = useUserStore.isUserLoggedIn;

const { sm, md } = siteBreakpoints;
const { resume } = useIntervalFn(() => useURLStore.updateStoredUrl(), 1000 * 10, {
   immediate: isUserLoggedIn.value,
});

const isSmallScreen = or(sm, md);

whenever(isUserLoggedIn, resume);
</script>

<template>
   <div
      class="w-full h-full colors-300 overflow-auto"
      :class="[isSmallScreen ? 'main-theme-bg' : 'main-theme-bg-inverse']"
   >
      <table class="w-full">
         <UrlTableHead />
         <UrlTableBody />
      </table>
   </div>
</template>
