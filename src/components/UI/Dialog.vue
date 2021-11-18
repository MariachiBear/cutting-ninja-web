<template>
   <div
      class="
         all-300
         backdrop-blur-sm
         filter
         fixed
         flex
         h-full
         items-center
         justify-center
         left-0
         origin-center
         overflow-hidden
         top-0
         w-full
      "
      :class="[modelValue ? 'opacity-100 z-9999' : 'pointer-events-none opacity-0 -z-10']"
   >
      <div class="bg-black h-full w-full fixed opacity-70 dark:opacity-70" @click="clickOutside" />

      <div
         class="
            all-300
            main-theme-bg
            max-h-11/12
            min-h-1/12 min-w-11/12
            overflow-x-hidden overflow-y-auto
            rounded
            text-theme
            transform
            xl:min-h-1/4 xl:min-w-1/4
         "
         :class="[
            modelValue ? 'scale-100' : 'scale-50',
            isShaking ? 'animated animate-duration-200 animate-shake-x' : '',
         ]"
      >
         <section class="p-2 mb-2 flex flex-row justify-between items-center">
            <h3 v-if="title" class="text-lg font-semibold">{{ title }}</h3>
            <div class="flex-grow" />
            <button class="hover:text-red-700 colors-300" @click="close">
               <ic-baseline-close />
            </button>
         </section>
         <slot :key="modelValue" />
         <section v-if="hasActionButtons" class="p-2 mt-2 flex flex-row justify-end gap-2">
            <button
               class="
                  colors-300
                  dark:hover:bg-opacity-20
                  dark:hover:bg-red-900
                  dark:hover:text-red-400
                  dark:text-red-600
                  font-medium
                  hover:bg-red-100 hover:text-red-600
                  px-5
                  py-2
                  rounded-sm
                  text-red-500 text-sm
               "
            >
               Cancel
            </button>
            <button
               class="
                  bg-green-400
                  colors-300
                  dark:bg-green-700 dark:hover:bg-green-800
                  font-medium
                  hover:bg-green-500
                  md:w-auto
                  px-5
                  py-2
                  rounded-sm
                  text-current text-center text-white text-sm
                  w-full
               "
            >
               Confirm
            </button>
         </section>
      </div>
   </div>
</template>

<script setup lang="ts">
import { onKeyUp, promiseTimeout, set } from '@vueuse/core';

const emits = defineEmits(['update:modelValue']);

const props = defineProps({
   isFullScreen: { type: Boolean, required: false, default: false },
   isPersistent: { type: Boolean, required: false, default: false },
   isCloseButtonWhite: { type: Boolean, required: false, default: false },
   modelValue: { type: Boolean, required: true },
   hasActionButtons: { type: Boolean, required: false, default: true },
   title: { type: String, required: false, default: '' },
});

const { modelValue } = useVModels(props, emits);

const [isShaking, toggleIsShaking] = useToggle(false);

const close = () => set(modelValue, false);

const clickOutside = () => {
   if (props.isPersistent) {
      toggleIsShaking();
      promiseTimeout(200).then(() => toggleIsShaking());
   } else {
      set(modelValue, false);
   }
};

onKeyUp('Escape', close);

// For IE
onKeyUp('Esc', close);
</script>
