<script setup lang="ts">
import { useURLStore } from '~/store/url';

const url = ref<string>();
const isLoading = ref(false);

const isButtonDisabled = computed(() => !url.value);

const onSubmit = async () => {
   if (url.value) {
      isLoading.value = true;
      await useURLStore.shortUrl(url.value).then(() => useURLStore.toggleIsTableVisible(true));
      url.value = '';
      isLoading.value = false;
   }
};
</script>

<template>
   <form
      class="flex flex-col gap-5 items-center justify-between lg:flex-row w-full"
      @submit.prevent="onSubmit"
   >
      <Input v-model="url" class="flex-1 w-full relative" is-required type="url" />

      <button
         type="submit"
         :disabled="isButtonDisabled"
         class="
            all-300
            disabled:cursor-not-allowed disabled:opacity-40
            flex flex-row
            font-medium
            group
            items-center
            justify-center
            px-5
            py-2
            relative
            transition-opacity
         "
      >
         <span
            class="-skew-x-12 absolute all-300 inset-0 transform translate-x-0"
            :class="[
               isButtonDisabled
                  ? 'bg-gray-400 dark:bg-gray-600'
                  : 'bg-english-lavender dark:bg-mountbatten-pink dark:group-hover:bg-english-lavender group-hover:bg-mountbatten-pink group-hover:skew-x-12',
            ]"
         ></span>
         <span
            class="all-300 absolute inset-0 transform skew-x-12"
            :class="[
               isButtonDisabled
                  ? 'bg-gray-500 dark:bg-gray-500'
                  : 'bg-mountbatten-pink dark:bg-english-lavender dark:group-hover:bg-mountbatten-pink group-hover:bg-english-lavender group-hover:-skew-x-12',
            ]"
         ></span>

         <mdi-loading v-if="isLoading" class="relative text-warm-gray-50 animate-spin text-xl" />
         <span v-else class="relative text-warm-gray-50 text-2xl lg:text-base">
            Short that URL
         </span>
      </button>
   </form>
</template>
