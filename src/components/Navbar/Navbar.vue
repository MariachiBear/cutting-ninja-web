<script setup lang="ts">
import { isDark, toggleDark } from '~/composables';
import { useUserStore } from '~/store/user';

const isLoggedIn = useUserStore.isUserLoggedIn();

const isDarkDelayed = useDebounce(isDark, 150);
const [isLoginModalOpen, toggleIsLoginModalOpen] = useToggle(false);

const { t } = useI18n();
</script>

<template>
   <header
      class="
         absolute
         flex flex-row
         items-center
         justify-between
         left-0
         lg:p-4
         p-2
         top-0
         w-full
         z-40
      "
   >
      <router-link
         to="/"
         class="
            font-bold
            gap-1
            inline-flex
            gap-2
            items-center
            text-xl
            xl:text-3xl
            text-theme
            colors-300
         "
         :title="t('button.home')"
         aria-label="logo"
      >
         <img src="/assets/ninjahead.svg" class="w-8 h-8" />
         <!-- <mdi-ninja
            class="
               text-3xl
               md:text-5xl
               text-jet
               rounded-full
               colors-300
               dark:bg-warm-gray-100
               w-8
               h-8
            "
         /> -->
         Cutting Ninja
      </router-link>

      <nav class="flex flex-row gap-2 lg:gap-4 items-center justify-center">
         <UserInfo v-if="isLoggedIn" />

         <button
            class="flex flex-col icon-btn relative text-3xl xl:text-2xl text-theme"
            :title="t('button.toggle_dark')"
            @click="toggleDark()"
         >
            <ic-baseline-dark-mode
               class="animate-spin dark:animate-none opacity-300"
               :class="[!isDarkDelayed ? 'opacity-0' : 'opacity-100']"
            />
            <ic-baseline-light-mode
               class="absolute animate-none dark:animate-spin opacity-300"
               :class="[isDarkDelayed ? 'opacity-0' : 'opacity-100']"
            />
         </button>

         <button
            v-if="!isLoggedIn"
            class="flex flex-col icon-btn relative text-3xl xl:text-2xl text-theme"
            :title="t('button.sign_in')"
            @click="toggleIsLoginModalOpen()"
         >
            <ic-baseline-log-in />
         </button>
      </nav>
   </header>
   <Dialog v-if="!isLoggedIn" v-model="isLoginModalOpen" :has-action-buttons="false" is-persistent>
      <LoginTabs
         @logged="toggleIsLoginModalOpen(false)"
         @signedup="toggleIsLoginModalOpen(false)"
      />
   </Dialog>
</template>
