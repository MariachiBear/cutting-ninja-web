<script setup lang="ts">
import { logicOr } from '@vueuse/math';
import { isDark, siteBreakpoints, toggleDark } from '~/composables';
import { useUserStore } from '~/store/user';

const { t } = useI18n();

const emit = defineEmits(['update:modelValue', 'cancel', 'confirm']);

const props = defineProps({
   modelValue: { type: Boolean, required: true },
   toggleFunction: { type: Function, required: true },
});
const isDarkDelayed = useDebounce(isDark, 150);

const { modelValue } = useVModels(props, emit);

const route = useRoute();

const { sm, md } = siteBreakpoints;

const isSmallScreen = logicOr(sm, md);

const userState = useUserStore.getState();

watch(
   () => route.path,
   () => props.toggleFunction(false)
);

const logout = async () => await useUserStore.logout().then(() => location.reload());
</script>

<template>
   <div
      class="fixed top-0 left-0 w-screen h-screen flex flex-col justify-end items-center all-300 backdrop-blur-2 backdrop-filter overflow-hidden"
      :class="[modelValue ? 'opacity-100 z-9998' : 'pointer-events-none opacity-0 -z-10']"
   >
      <div
         class="absolute top-0 left-0 bg-black bg-opacity-50 w-screen h-screen z-0"
         @click="props.toggleFunction(false)"
      />
      <div
         class="bg-unbleached-sand all-300 dark:bg-rocket-metallic divide-y divide-warm-gray-400 w-full mt-1 origin-bottom right-0 z-10 rounded-sm shadow-2xl rounded-t-lg transform"
         aria-labelledby="headlessui-menu-button-1"
         :class="[modelValue ? 'translate-y-0' : 'translate-y-full']"
         role="menu"
      >
         <div class="px-4 py-3 text-theme flex flex-row justify-between items-center">
            <div class="colors-300">
               <p class="text-sm leading-5">{{ t('label.signed_in_as') }}</p>
               <p v-if="isSmallScreen" class="text-sm font-medium leading-5 truncate">
                  {{ userState.user?.firstName }} {{ userState.user?.lastName }}
                  <span class="text-sm">({{ userState.user?.email }})</span>
               </p>
               <p v-else class="text-sm font-medium leading-5 truncate">
                  {{ userState.user?.email }}
               </p>
            </div>
            <button
               class="flex justify-between text-btn text-left text-sm colors-300 text-red-400"
               role="menuitem"
               @click="logout"
            >
               <ic-baseline-log-out />
            </button>
         </div>
         <div class="py-1 text-theme">
            <router-link
               to="/dashboard"
               class="flex justify-between px-4 py-2 text-btn text-left text-sm w-full colors-300"
               role="menuitem"
               :title="t('button.dashboard')"
            >
               {{ t('button.dashboard') }} <ic-baseline-dashboard />
            </router-link>
            <router-link
               to="/settings"
               class="flex items-center justify-between px-4 py-2 text-btn text-left text-sm w-full colors-300"
               role="menuitem"
               :title="t('button.account_settings')"
            >
               {{ t('button.account_settings') }} <ic-baseline-settings />
            </router-link>
         </div>
         <div class="py-1 text-theme colors-300">
            <button
               class="flex items-center justify-between px-4 py-2 text-btn text-left text-sm w-full colors-300"
               :title="t('button.toggle_dark')"
               @click="toggleDark()"
            >
               {{ t('button.toggle_dark') }}
               <div class="relative flex flex-col">
                  <ic-baseline-dark-mode
                     class="animate-spin dark:animate-none opacity-300"
                     :class="[!isDarkDelayed ? 'opacity-0' : 'opacity-100 ']"
                  />
                  <ic-baseline-light-mode
                     class="absolute animate-none dark:animate-spin opacity-300"
                     :class="[isDarkDelayed ? 'opacity-0' : 'opacity-100']"
                  />
               </div>
            </button>
         </div>
      </div>
   </div>
</template>
