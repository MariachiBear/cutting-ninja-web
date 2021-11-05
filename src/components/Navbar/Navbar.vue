<script setup lang="ts">
import { isDark, toggleDark } from '~/composables';

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
            class="icon-btn !outline-none text-xl xl:text-2xl"
            :title="t('button.toggle_dark')"
            @click="toggleDark()"
         >
            <carbon-moon v-if="isDark" />
            <carbon-sun v-else />
         </button>
         <button
            class="icon-btn !outline-none text-xl xl:text-2xl"
            :title="t('button.toggle_dark')"
            @click="toggleDark()"
         >
            <mdi-logout-variant v-if="isDark" />
            <mdi-login-variant v-else />
         </button>
      </nav>
   </header>
</template>
