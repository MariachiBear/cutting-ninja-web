<script setup lang="ts">
import { isDark, toggleDark } from '~/composables';

const isDarkDelayed = useDebounce(isDark, 200);

const { t } = useI18n();
</script>

<template>
   <header class="w-full flex justify-between items-center p-4 md:p-8 absolute left-0 top-0">
      <a
         href="/"
         class="inline-flex items-center text-black-800 text-xl xl:text-3xl font-bold gap-1"
         aria-label="logo"
      >
         <mdi-knife class="text-english-lavender text-3xl md:text-5xl" />
         URL Shortener
      </a>

      <nav class="flex gap-3 md:gap-6">
         <button
            class="icon-btn !outline-none text-xl xl:text-2xl relative"
            :title="t('button.toggle_dark')"
            @click="toggleDark()"
         >
            <mdi-weather-night
               v-if="isDarkDelayed"
               class="animate-spin dark:animate-none transition-opacity duration-300"
               :class="[!isDark ? 'opacity-0' : 'opacity-100']"
            />
            <mdi-white-balance-sunny
               v-else
               class="animate-none dark:animate-spin transition-opacity duration-300"
               :class="[isDark ? 'opacity-0' : 'opacity-100']"
            />
         </button>
         <button
            class="icon-btn !outline-none text-xl xl:text-2xl"
            :title="t('button.toggle_dark')"
            @click="toggleDark()"
         >
            <mdi-logout-variant
               v-if="isDarkDelayed"
               class="transition-opacity duration-600"
               :class="[!isDark ? 'opacity-0' : 'opacity-100']"
            />
            <mdi-login-variant
               v-else
               class="transition-opacity duration-600"
               :class="[isDark ? 'opacity-0' : 'opacity-100']"
            />
         </button>
      </nav>
   </header>
</template>
