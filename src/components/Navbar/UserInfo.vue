<script setup lang="ts">
import { or } from '@vueuse/core';
import { siteBreakpoints } from '~/composables';
import { useUserStore } from '~/store/user';

const { sm, md } = siteBreakpoints;

const isSmallScreen = or(sm, md);

const userState = useUserStore.getState();

const sourceImg = computed(
   () =>
      `https://source.boringavatars.com/bauhaus/120/${userState.user?.email}?colors=E8BAA2,B5838D,4e4b53,E5989B`
);
</script>
<template>
   <button class="flex flex-row items-center justify-center gap-2">
      <img
         :src="sourceImg"
         class="
            w-7
            h-7
            4k:w-100 4k:h-100
            4xl:w-10 4xl:h-10
            5xl:w-80 5xl:h-80
            bg-accent bg-opacity-20
            object-contain
            rounded-full
            shadow-md
         "
         alt="logo"
      />

      <span v-if="!isSmallScreen" class="max-w-100 truncate">
         {{ userState.user?.firstName }} {{ userState.user?.lastName }}
      </span>
   </button>
</template>
