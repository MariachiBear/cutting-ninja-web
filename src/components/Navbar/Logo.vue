<script setup lang="ts">
import { promiseTimeout } from '@vueuse/core';

const { t } = useI18n();
const showStar = ref(false);
const showTrace = ref(false);
const hasDelay = ref(true);

tryOnMounted(() => {
   promiseTimeout(500).then(() => (showStar.value = !showTrace.value));
});

whenever(showStar, () =>
   promiseTimeout(1200).then(() => {
      showStar.value = false;
      promiseTimeout(400).then(() => {
         showTrace.value = true;
         promiseTimeout(200).then(() => {
            hasDelay.value = false;
         });
      });
   })
);
</script>

<template>
   <router-link
      to="/"
      class="transition-colors flex-shrink-0 ease-in-out font-semibold gap-2 inline-flex items-center justify-start text-theme text-md md:text-lg lg:text-2xl relative"
      :title="t('button.home')"
      aria-label="logo"
      @mouseover="showStar = !showTrace"
   >
      <img src="/assets/ninjahead.svg" class="w-8 h-8 z-10" />
      <div
         class="transform translate-x-5 translate-y-3 rounded-full absolute flex flex-col justify-center items-center all-300 text-sm"
         :class="showStar ? 'scale-110 z-0' : 'scale-0 z-0'"
      >
         <mdi-shuriken
            class="transform dark:text-white text-cool-gray-600 transition-all duration-1000 animate-spin animate-duration-3000"
            :class="showStar ? 'opacity-100' : 'opacity-0'"
         />
      </div>
      <div class="relative h-full">
         <h1 class="opacity-0">Cutting Ninja</h1>

         <div
            class="absolute top-0 transform transition-transform duration-300 ease-in-out h-1/2 !overflow-hidden w-full"
            :class="hasDelay ? '' : 'origin-left -rotate-1  '"
         >
            <span class="absolute top-0">Cutting Ninja</span>
         </div>
         <div
            class="absolute bottom-0 transform transition-transform duration-300 ease-in-out h-1/2 !overflow-hidden w-full"
            :class="hasDelay ? '' : 'origin-left rotate-2 '"
         >
            <span class="absolute bottom-0">Cutting Ninja</span>
         </div>
      </div>
      <div
         class="absolute border-t-1 lg:border-t-2 dark:border-white border-cool-gray-300 transform all-300 z-0"
         :class="showTrace ? 'w-full' : 'w-0'"
      ></div>
      <div
         class="absolute border-t-1 lg:border-t-2 dark:border-t-jet border-t-unbleached-silk transform all-300 z-0"
         :class="[showTrace ? 'w-full' : 'w-0', hasDelay ? 'delay-100' : '']"
      ></div>
   </router-link>
</template>
