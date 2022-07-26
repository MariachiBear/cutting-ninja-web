<script setup lang="ts">
import { logicOr } from '@vueuse/math';
import { siteBreakpoints } from '~/composables';
import { useURLStore } from '~/store/url';
import { useUserStore } from '~/store/user';

const isUserLoggedIn = useUserStore.isUserLoggedIn;

const { sm, md } = siteBreakpoints;
const { resume } = useIntervalFn(() => useURLStore.updateStoredUrl(), 1000 * 30, {
   immediate: isUserLoggedIn.value,
});

const isSmallScreen = logicOr(sm, md);

whenever(isUserLoggedIn, resume);

tryOnMounted(() => {
   if (isUserLoggedIn.value) useURLStore.updateStoredUrl();
});
</script>

<template>
   <div
      class="w-full h-full colors-300 overflow-auto z-10"
      :class="[isSmallScreen ? 'main-theme-bg' : 'main-theme-bg-inverse']"
   >
      <table class="min-w-screen-md w-full lg:min-w-full">
         <UrlTableHead />
         <UrlTableBody />
      </table>
   </div>
</template>
