<script setup lang="ts">
import { promiseTimeout } from '@vueuse/core';
const { t } = useI18n();
const route = useRoute();

const isLineOpen = ref(false);
const isPathOpen = ref(false);
const hasAnimationTimes = ref(true);
const hasLineDelay = ref(false);
const hasPathDelay = ref(false);
const isChangingName = ref(false);
const newShownPath = ref('/');
const oldShownPath = ref('/');
const path = computed(() => route.path);
const pathIsNotHome = computed(() => path.value !== '/');

tryOnMounted(async () => {
   oldShownPath.value = path.value;
   promiseTimeout(1).then(() => {
      isLineOpen.value = true;
      isPathOpen.value = true;
   });
   promiseTimeout(2000).then(() => (hasAnimationTimes.value = false));
});

watch(path, (newVal, oldVal) => {
   if (pathIsNotHome.value && oldVal !== '/') {
      newShownPath.value = newVal;
      isChangingName.value = true;
   }
   if (oldVal === '/') oldShownPath.value = newVal;

   hasAnimationTimes.value = true;
   hasLineDelay.value = !pathIsNotHome.value;
   hasPathDelay.value = pathIsNotHome.value;
   promiseTimeout(1100).then(() => {
      hasPathDelay.value = false;
      isChangingName.value = false;
      hasLineDelay.value = false;
      oldShownPath.value = newVal;
      promiseTimeout(200).then(() => (hasAnimationTimes.value = false));
   });
});
</script>

<template>
   <div
      class="h-8 flex flex-row flex-grow items-center justify-start overflow-hidden relative w-auto"
   >
      <div class="pl-2 z-10 main-theme-bg colors-300 absolute">
         <div
            class="dark:border-r-warm-gray-100 border-r-warm-gray-700 border-r-1"
            :class="[
               isLineOpen && pathIsNotHome ? 'h-7 lg:h-9' : 'h-0 opacity-0 origin-center',
               hasAnimationTimes ? 'duration-1200 ease-in-out' : 'all-300',
               hasLineDelay ? 'delay-300' : '',
            ]"
         />
      </div>
      <div
         class="overflow-visible transform h-full flex items-center text-xs lg:text-lg"
         :class="[
            isPathOpen && pathIsNotHome
               ? 'translate-x-0'
               : '-translate-x-full opacity-0 origin-left',
            hasAnimationTimes ? 'duration-1200 ease-in-out' : 'all-300',
            hasPathDelay ? 'delay-300' : '',
         ]"
      >
         <span
            class="absolute text-theme overflow-visible ml-4 transform"
            :class="[
               hasAnimationTimes && isChangingName ? 'duration-1000 ease-in-out' : '',
               isChangingName ? 'translate-y-0 ' : '-translate-y-full opacity-0',
               !isChangingName && !hasAnimationTimes ? 'duration-300' : '',
            ]"
         >
            {{ t(`path.${newShownPath}`) }}
         </span>
         <span
            class="absolute text-theme overflow-visible ml-4 transform"
            :class="[
               hasAnimationTimes && isChangingName ? 'duration-1000 ease-in-out' : '',
               isChangingName ? '!translate-y-full opacity-0' : 'translate-y-0',
               !isChangingName && !hasAnimationTimes ? 'duration-300' : '',
            ]"
         >
            {{ t(`path.${oldShownPath}`) }}
         </span>
         <span class="text-transparent whitespace-nowrap">
            {{ t(`path.${newShownPath}`) }}{{ t(`path.${oldShownPath}`) }}
         </span>
      </div>
   </div>
</template>
