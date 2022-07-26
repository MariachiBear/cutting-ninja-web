<script setup lang="ts">
import { logicOr } from '@vueuse/math';
import { siteBreakpoints } from '~/composables';
import { useUserStore } from '~/store/user';

const { sm, md } = siteBreakpoints;

const isSmallScreen = logicOr(sm, md);

const userState = useUserStore.getState();

const [isMenuOpen, toggleIsMenuOpen] = useToggle(false);

const userInfo = ref();

onClickOutside(userInfo, () => toggleIsMenuOpen(false));

const sourceImg = computed(
   () =>
      `https://source.boringavatars.com/bauhaus/120/${userState.user?.email}?colors=E8BAA2,B5838D,4e4b53,E5989B`
);
</script>

<template>
   <div class="flex items-center justify-center">
      <div ref="userInfo" class="lg:relative inline-block text-left" @click="toggleIsMenuOpen()">
         <button class="flex flex-row items-center justify-center gap-2 relative">
            <span v-if="!isSmallScreen" class="max-w-100 truncate text-theme colors-300">
               {{ userState.user?.firstName }} {{ userState.user?.lastName }}
            </span>
            <img
               :src="sourceImg"
               class="lg:h-7 lg:w-7 4k:w-100 4k:h-100 4xl:w-10 4xl:h-10 5xl:w-80 5xl:h-80 bg-accent bg-opacity-20 h-8 object-contain rounded-full shadow-md w-8"
               alt="user"
            />
         </button>
         <Dropdown :is-menu-open="isMenuOpen" />
      </div>
   </div>
</template>
