<script setup lang="ts">
import UrlImage from '../ImageTable/UrlImage.vue';
import { useURLStore } from '~/store/url';
const urlState = useURLStore.getState();
const isImgLoaded = ref(false);
const isTableVisible = computed(() => urlState.storedUrls.length > 0 && urlState.isTableVisible);
</script>

<template>
   <div
      style="aspect-ratio: 16/9"
      class="bg-warm-gray-700 bg-opacity-80 flex flex-col group h-full items-center justify-center lg:max-h-1/2 lg:rounded-sm lg:shadow-2xl lg:max-w-6/12 overflow-visible relative rounded-sm w-full z-10"
   >
      <Toggle v-if="isImgLoaded" />

      <mdi-loading class="animate-spin absolute text-7xl z-10 text-warm-gray-100" />

      <UrlImage
         class="z-20"
         style="box-shadow: 0.2em -0.2em 0.3em rgb(0 0 0 / 0.3)"
         @load="isImgLoaded = true"
      />

      <UrlTable
         class="all-300 lg:rounded-sm z-30"
         :class="[
            isTableVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
         ]"
      />
   </div>
</template>
