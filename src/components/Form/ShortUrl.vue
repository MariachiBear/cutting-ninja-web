<script setup lang="ts">
import { useURLStore } from '~/store/url';

const url = ref<string>();

const isButtonDisabled = computed(() => !url.value);

const onSubmit = () => {
   if (url.value) {
      useURLStore.shortUrl(url.value);
      url.value = '';
   }
};
</script>

<template>
   <form class="w-full flex flex-col gap-5 lg:flex-row justify-between" @submit.prevent="onSubmit">
      <input
         v-model="url"
         placeholder="https://github.com/url-shortener-front"
         class="
            shadow-lg
            w-full
            flex-1
            bg-warm-gray-50
            text-warm-gray-800
            placeholder-gray-500
            rounded
            outline-none
            px-3
            py-2
         "
      />

      <button
         :disabled="isButtonDisabled"
         href="#_"
         class="
            relative
            px-5
            py-2
            font-medium
            group
            !outline-none
            transition-opacity
            duration-200
            disabled:cursor-not-allowed disabled:opacity-50
         "
      >
         <span
            class="
               absolute
               inset-0
               w-full
               h-full
               transition-all
               duration-400
               ease-out
               transform
               translate-x-0
               -skew-x-12
            "
            :class="[
               isButtonDisabled
                  ? 'bg-gray-400 dark:bg-gray-600'
                  : 'bg-english-lavender dark:bg-mountbatten-pink dark:group-hover:bg-english-lavender group-hover:bg-mountbatten-pink group-hover:skew-x-12',
            ]"
         ></span>
         <span
            class="
               absolute
               inset-0
               w-full
               h-full
               transition-all
               duration-400
               ease-out
               transform
               skew-x-12
            "
            :class="[
               isButtonDisabled
                  ? 'bg-gray-500 dark:bg-gray-500'
                  : 'bg-mountbatten-pink dark:bg-english-lavender dark:group-hover:bg-mountbatten-pink group-hover:bg-english-lavender group-hover:-skew-x-12',
            ]"
         ></span>

         <span class="relative text-warm-gray-50 dark:text-warm-gray-200 dark:duration-200">
            Short that URL
         </span>
      </button>
   </form>
</template>
