<script setup lang="ts">
import { onKeyUp, promiseTimeout } from '@vueuse/core';

const { t } = useI18n();

const emit = defineEmits(['update:modelValue', 'cancel', 'confirm']);

const props = defineProps({
   hasActionButtons: { type: Boolean, required: false, default: true },
   isPersistent: { type: Boolean, required: false, default: false },
   modelValue: { type: Boolean, required: true },
   title: { type: String, required: false, default: '' },
   toggleFunction: { type: Function, required: true },
});

const { modelValue } = useVModels(props, emit);

const [isShaking, toggleIsShaking] = useToggle(false);

const close = () => props.toggleFunction(false);

const clickOutside = () => {
   if (props.isPersistent) {
      toggleIsShaking();
      promiseTimeout(200).then(() => toggleIsShaking());
   } else {
      props.toggleFunction(false);
   }
};

onKeyUp('Escape', close);
// For IE
onKeyUp('Esc', close);
</script>

<template>
   <div
      class="all-300 backdrop-blur-sm filter fixed flex h-full items-center justify-center left-0 origin-center overflow-hidden top-0 w-full"
      :class="[modelValue ? 'opacity-100 z-9998' : 'pointer-events-none opacity-0 -z-10']"
   >
      <div class="bg-black h-full w-full fixed opacity-70 dark:opacity-70" @click="clickOutside" />

      <div
         class="all-300 flex flex-col lg:max-w-1/3 main-theme-bg max-h-11/12 max-w-11/12 min-h-1/12 min-w-11/12 overflow-x-hidden overflow-y-auto rounded text-theme transform xl:min-h-1/6 xl:min-w-1/4"
         :class="[
            modelValue ? 'scale-100' : 'scale-50',
            isShaking ? 'animated animate-duration-200 animate-shake-x' : '',
         ]"
      >
         <section
            class="flex flex-row justify-between items-center"
            :class="title ? ' mb-2 p-2' : ''"
         >
            <h3 v-if="title" class="text-lg font-semibold">{{ title }}</h3>
            <div v-else class="flex-grow" />
            <button
               class="hover:text-red-700 colors-300 flex flex-col justify-center items-center"
               :class="title ? '' : 'absolute top-0 right-0 p-1 z-10'"
               @click="close"
            >
               <ic-baseline-close />
            </button>
         </section>

         <section class="flex-grow">
            <slot :key="modelValue" />
         </section>

         <section v-if="hasActionButtons" class="p-2 mt-2 flex flex-row justify-end gap-2">
            <button
               class="colors-300 dark:hover:bg-opacity-10 dark:hover:bg-red-400 dark:text-red-400 font-medium hover:bg-red-700 hover:bg-opacity-10 px-5 py-2 rounded-sm text-red-700 text-sm"
               @click="emit('cancel')"
            >
               {{ t('label.cancel') }}
            </button>
            <button
               class="bg-green-600 colors-300 dark:bg-green-600 dark:hover:bg-green-700 font-medium hover:bg-green-700 px-5 py-2 rounded-sm text-current text-center text-white text-sm w-auto"
               @click="emit('confirm')"
            >
               {{ t('label.confirm') }}
            </button>
         </section>
      </div>
   </div>
</template>
