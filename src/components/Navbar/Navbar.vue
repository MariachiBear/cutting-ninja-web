<script setup lang="ts">
import { or } from '@vueuse/core';
import { siteBreakpoints } from '~/composables';
import { useUIStore } from '~/store/ui';
import { useUserStore } from '~/store/user';

const { sm, md } = siteBreakpoints;
const isSmallScreen = or(sm, md);
const isLoggedIn = useUserStore.isUserLoggedIn;
</script>

<template>
   <header
      class="flex flex-row items-center justify-between left-0 px-4 py-4 lg:py-2 top-0 w-full absolute z-20"
   >
      <Logo />
      <PathName />

      <section class="flex flex-row flex-shrink-0 gap-2 lg:gap-4 items-center justify-center">
         <UserInfo v-if="isLoggedIn && !isSmallScreen" />
         <DarkToggle v-if="!(isLoggedIn && isSmallScreen)" />
         <SignInButton v-if="!isLoggedIn" />
         <ic-baseline-density-medium
            v-if="isLoggedIn && isSmallScreen"
            class="text-xl text-theme colors-300"
            @click="useUIStore.toggleValue('isMobileMenuOpen', true)"
         />
      </section>
   </header>
</template>
