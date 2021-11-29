<template>
   <div
      class="all-300 backdrop-blur-2 backdrop-filter fixed flex h-full items-center justify-center left-0 origin-center overflow-hidden top-0 w-full z-9997"
      :class="[modelValue ? 'opacity-100 ' : 'pointer-events-none opacity-0']"
   >
      <div class="bg-black h-full w-full fixed opacity-70 dark:opacity-70" />

      <div
         ref="content"
         class="main-theme-bg overflow-x-hidden all-300 transform-gpu text-theme"
         :class="[
            isPersistent ? 'duration-150' : '',
            modelValue ? 'opacity-100' : 'scale-70 opacity-0',
            isFullScreen
               ? 'w-full h-full rounded-none overflow-y-hidden'
               : 'w-11/12 h-10/12 xl:w-2/3 xl:h-3/4 rounded overflow-y-auto',
            isShaking ? 'scale-102' : 'scale-100',
         ]"
      >
         <div class="top-0 right-0 absolute dark">
            <button @click="close">
               <mdi-close />
            </button>
         </div>
         <slot :key="modelValue" />
      </div>
   </div>
</template>

<script setup lang="ts">
import { get, onKeyUp, promiseTimeout, set } from '@vueuse/core';

const emits = defineEmits(['update:modelValue']);

const props = defineProps({
   isFullScreen: { type: Boolean, required: false, default: false },
   isPersistent: { type: Boolean, required: false, default: false },
   isCloseButtonWhite: { type: Boolean, required: false, default: false },
   modelValue: { type: Boolean, required: true },
});

const { modelValue } = useVModels(props, emits);

const content = ref<HTMLElement>();
const [isShaking, toggleIsShaking] = useToggle(false);

const close = () => set(modelValue, false);

onClickOutside(content, () => {
   set(modelValue, !!props.isPersistent && get(modelValue));
   if (props.isPersistent) {
      toggleIsShaking();
      promiseTimeout(200).then(() => toggleIsShaking());
   }
});

onKeyUp('Escape', close);

// For IE
onKeyUp('Esc', close);
</script>
