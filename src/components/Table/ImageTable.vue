<script setup lang="ts">
import { useURLStore } from '~/store/url';

const urlState = useURLStore.getState();
const isTableVisible = computed(() => urlState.storedUrls.length > 0 && urlState.isTableVisible);
</script>

<template>
   <div
      style="aspect-ratio: 16/9"
      class="
         bg-warm-gray-700 bg-opacity-80
         flex flex-col
         group
         h-full
         items-center
         justify-center
         lg:max-h-1/2 lg:rounded-sm lg:shadow-2xl
         overflow-visible
         relative
         rounded-sm
         w-full
         xl:max-w-6/12
      "
   >
      <Toggle />

      <mdi-loading class="animate-spin absolute text-7xl z-10 text-warm-gray-100" />

      <img
         src="https://source.unsplash.com/1600x900/daily"
         alt="Photo of the day"
         class="
            contrast-75
            filter
            lg:rounded-sm
            object-cover object-center
            overflow-hidden
            saturate-70
            z-20
         "
      />

      <div
         class="absolute all-300 h-full items-center lg:rounded-sm overflow-hidden w-full z-30"
         :class="[
            isTableVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
         ]"
      >
         <StoredUrls />
      </div>
   </div>
</template>
