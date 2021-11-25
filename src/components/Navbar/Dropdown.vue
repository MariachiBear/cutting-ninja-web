<script setup lang="ts">
import { or } from '@vueuse/core';
import { siteBreakpoints } from '~/composables';
import { useUserStore } from '~/store/user';

const { t } = useI18n();

defineProps({
   isMenuOpen: { type: Boolean, required: false, default: false },
});

const { sm, md } = siteBreakpoints;

const isSmallScreen = or(sm, md);

const userState = useUserStore.getState();

const logout = async () => {
   await useUserStore.logout();
   location.reload();
};
</script>

<template>
   <div
      class="all-300 transform origin-top-right"
      :class="[
         isMenuOpen
            ? 'translate-0 scale-100 visible opacity-100'
            : '-translate-y-2 scale-95 invisible opacity-0',
      ]"
   >
      <div
         class="
            absolute
            bg-unbleached-sand
            colors-300
            dark:bg-rocket-metallic
            divide-y divide-warm-gray-400
            max-w-70
            min-w-50
            mt-1
            origin-top-right
            right-0
            rounded-sm
            shadow-2xl
         "
         aria-labelledby="headlessui-menu-button-1"
         role="menu"
      >
         <div class="px-4 py-3 text-theme colors-300">
            <p class="text-sm leading-5">{{ t('label.signed_in_as') }}</p>
            <p v-if="isSmallScreen" class="text-sm font-medium leading-5 truncate">
               {{ userState.user?.firstName }} {{ userState.user?.lastName }}
               <span class="text-sm">({{ userState.user?.email }})</span>
            </p>
            <p v-else class="text-sm font-medium leading-5 truncate">
               {{ userState.user?.email }}
            </p>
         </div>
         <div class="py-1 text-theme colors-300">
            <router-link
               to="/dashboard"
               tabindex="2"
               class="flex justify-between px-4 py-2 text-btn text-left text-sm w-full"
               role="menuitem"
               :title="t('button.dashboard')"
            >
               {{ t('button.dashboard') }} <ic-baseline-dashboard />
            </router-link>
            <a
               tabindex="0"
               class="flex items-center justify-between px-4 py-2 text-btn text-left text-sm w-full"
               role="menuitem"
            >
               {{ t('button.account_settings') }} <ic-baseline-settings />
            </a>
         </div>
         <div class="py-1 text-theme colors-300">
            <button
               tabindex="3"
               class="flex justify-between px-4 py-2 text-btn text-left text-sm w-full"
               role="menuitem"
               @click="logout"
            >
               {{ t('button.sign_out') }} <ic-baseline-log-out />
            </button>
         </div>
      </div>
   </div>
</template>
