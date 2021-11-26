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
const newShownPath = ref('');
const oldShownPath = ref('');
const path = computed(() => route.fullPath.replace('/', ''));
const pathIsNotHome = computed(() => path.value !== '');

tryOnMounted(async () => {
   oldShownPath.value = path.value;
   promiseTimeout(1).then(() => {
      isLineOpen.value = true;
      isPathOpen.value = true;
   });
   promiseTimeout(2400).then(() => (hasAnimationTimes.value = false));
});

watch(path, (newVal, oldVal) => {
   if (pathIsNotHome.value && oldVal !== '') {
      newShownPath.value = newVal;
      isChangingName.value = true;
   }
   if (oldVal === '') oldShownPath.value = newVal;

   hasAnimationTimes.value = true;
   hasLineDelay.value = !pathIsNotHome.value;
   hasPathDelay.value = pathIsNotHome.value;
   promiseTimeout(1300).then(() => {
      hasAnimationTimes.value = false;
      hasPathDelay.value = false;
      isChangingName.value = false;
      hasLineDelay.value = false;
      oldShownPath.value = newVal;
   });
});
</script>

<template>
   <div class="h-full flex flex-row items-center justify-start overflow-hidden relative w-auto">
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
         class="overflow-visible transform truncate w-full"
         :class="[
            isPathOpen && pathIsNotHome
               ? 'translate-x-0'
               : '-translate-x-full opacity-0 origin-left',
            hasAnimationTimes ? 'duration-1200 ease-in-out' : 'all-300',
            hasPathDelay ? 'delay-300' : '',
         ]"
      >
         <span
            class="absolute text-theme text-sm lg:text-lg overflow-visible truncate ml-4 transform"
            :class="[
               hasAnimationTimes ? 'duration-1200 ease-in-out' : 'duration-0',
               isChangingName ? 'translate-y-0' : '-translate-y-full',
            ]"
         >
            {{ t(`path.${newShownPath}`) }}
         </span>
         <span
            class="absolute text-theme text-sm lg:text-lg overflow-visible truncate ml-4 transform"
            :class="[
               hasAnimationTimes ? 'duration-1200 ease-in-out' : 'duration-0',
               isChangingName ? '!translate-y-full' : 'translate-y-0',
            ]"
         >
            {{ t(`path.${oldShownPath}`) }}
         </span>
         <span class="text-transparent text-sm lg:text-lg overflow-visible truncate ml-4">
            {{ t(`path.${newShownPath}`) }}{{ t(`path.${oldShownPath}`) }}
         </span>
      </div>
   </div>
</template>
