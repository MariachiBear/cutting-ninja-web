<script setup lang="ts">
import { promiseTimeout } from '@vueuse/core';

const emit = defineEmits(['update:modelValue', 'animation-end']);

const props = defineProps({
   modelValue: { type: Boolean, required: false, default: false },
   isFromLoading: { type: Boolean, required: false, default: false },
});

const { modelValue } = useVModels(props, emit);

const { t } = useI18n();
const showStar = ref(false);
const showTrace = ref(false);
const hasDelay = ref(true);

const startAnimation = () => {
   promiseTimeout(1200).then(() => {
      showStar.value = false;
      promiseTimeout(400).then(() => {
         showTrace.value = true;
         promiseTimeout(200).then(() => {
            hasDelay.value = false;
            promiseTimeout(400).then(() => emit('animation-end'));
         });
      });
   });
};

const resetAnimation = () => {
   showStar.value = false;
   showTrace.value = false;
   hasDelay.value = true;
};

const { pause } = useIntervalFn(() => {
   resetAnimation();
   showStar.value = true;
   startAnimation();
}, 1000 * 60 * 10);

whenever(modelValue, () => startAnimation());

tryOnMounted(() => {
   showStar.value = true;
   if (props.isFromLoading) pause();
   else promiseTimeout(500).then(() => startAnimation());
});
</script>

<template>
   <router-link
      to="/"
      class="transition-colors flex-shrink-0 ease-in-out font-semibold gap-2 inline-flex items-center justify-start text-theme text-md md:text-lg lg:text-2xl relative"
      :title="t('button.home')"
      aria-label="logo"
   >
      <NinjaHead class="w-8 h-8 z-10" />
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
         <h1 class="opacity-0">{{ t('label.app_name') }}</h1>

         <div
            class="absolute top-0 transform transition-transform duration-300 ease-in-out h-1/2 !overflow-hidden w-full origin-left"
            :class="hasDelay ? '-rotate-0' : '-rotate-1 -translate-y-1/8'"
         >
            <span class="absolute top-0">{{ t('label.app_name') }}</span>
         </div>
         <div
            class="absolute bottom-0 transform transition-transform duration-300 ease-in-out h-1/2 !overflow-hidden w-full origin-left"
            :class="hasDelay ? 'rotate-0' : 'rotate-2 translate-y-1/8'"
         >
            <span class="absolute bottom-0">{{ t('label.app_name') }}</span>
         </div>
      </div>
      <div
         class="absolute border-t-1 lg:border-t-2 dark:border-white border-cool-gray-400 transform all-300 z-0"
         :class="[showTrace ? 'w-full' : 'w-0', hasDelay ? '' : 'opacity-0']"
      />
      <div
         class="absolute border-t-1 lg:border-t-2 dark:border-t-jet border-t-unbleached-silk transform all-300 z-0"
         :class="[showTrace ? 'w-full' : 'w-0', hasDelay ? 'delay-100' : '']"
      />
   </router-link>
</template>
