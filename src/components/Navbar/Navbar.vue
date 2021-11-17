<script setup lang="ts">
import { isDark, toggleDark } from '~/composables';

const isDarkDelayed = useDebounce(isDark, 150);
const [isLoginModalOpen, toggleIsLoginModalOpen] = useToggle(false);

const { t } = useI18n();
</script>

<template>
   <header
      class="
         absolute
         colors-300
         flex flex-row
         items-center
         justify-between
         left-0
         lg:p-4
         p-2
         text-theme
         top-0
         w-full
      "
   >
      <a
         href="/"
         class="font-bold gap-1 inline-flex items-center text-xl xl:text-3xl"
         aria-label="logo"
      >
         <mdi-knife class="md:text-5xl text-english-lavender text-3xl" />
         URL Shortener
      </a>

      <nav class="flex flex-row gap-2 lg:gap-4">
         <button
            class="flex flex-col icon-btn relative text-xl xl:text-2xl"
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
            class="flex flex-col icon-btn relative text-xl xl:text-2xl"
            :title="t('button.toggle_dark')"
            @click="toggleIsLoginModalOpen()"
         >
            <ic-baseline-logout
               class="opacity-300"
               :class="[!isDark ? 'opacity-0' : 'opacity-100']"
            />
            <ic-baseline-login
               class="absolute opacity-300"
               :class="[isDark ? 'opacity-0' : 'opacity-100']"
            />
         </button>
      </nav>
   </header>
   <Dialog v-model="isLoginModalOpen" :has-action-buttons="false" is-persistent>
      <LoginTabs />
   </Dialog>
</template>
