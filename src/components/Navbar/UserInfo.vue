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
</script>

<template>
   <div class="flex items-center justify-center">
      <div ref="userInfo" class="lg:relative inline-block text-left" @click="toggleIsMenuOpen()">
         <button class="flex flex-row items-center justify-center gap-2 relative">
            <span v-if="!isSmallScreen" class="max-w-100 truncate text-theme colors-300">
               {{ userState.user?.firstName }} {{ userState.user?.lastName }}
            </span>
            <ProfilePicture />
         </button>
         <Dropdown :is-menu-open="isMenuOpen" />
      </div>
   </div>
</template>
