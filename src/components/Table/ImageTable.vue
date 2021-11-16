<script setup lang="ts">
import { useURLStore } from '~/store/url';
const urlState = useURLStore.getState();
const toggle = () => useURLStore.toggleIsTableVisible();
const isTableVisible = computed(() => urlState.storedUrls.length > 0 && urlState.isTableVisible);
</script>

<template>
   <div
      style="aspect-ratio: 16/9"
      class="
         bg-gray-100
         h-full
         hidden
         lg:flex lg:max-h-1/2
         overflow-visible
         relative
         rounded-lg
         shadow-2xl
         w-full
         xl:max-w-6/12
         flex flex-col
         justify-center
         items-center
         group
      "
   >
      <mdi-loading class="animate-spin absolute text-8xl z-10" />
      <button
         style="box-shadow: 0 -0.1em 0.2em rgb(0 0 0 / 0.15)"
         class="
            absolute
            bg-white
            px-2
            pt-1.5
            pb-3
            right-0
            text-xl
            top-0
            transition-all
            duration-500
            transform
            -translate-y-10 -translate-x-5
            z-0
            rounded-t-md
            !outline-none
            hover:opacity-100
            !text-warm-gray-500
            group-hover:-translate-y-10 group-hover:opacity-90
            -translate-y-0
            opacity-0
         "
         :class="[urlState.storedUrls.length === 0 ? '!-translate-y-0 !opacity-0' : '']"
         @click="toggle"
      >
         <mdi-image v-if="isTableVisible" />
         <mdi-view-list v-else />
      </button>

      <img
         src="https://source.unsplash.com/collection/97219782/1600x900"
         loading="lazy"
         alt="Photo by Fakurian Design"
         class="
            w-full
            h-full
            object-cover object-center
            overflow-hidden
            z-20
            rounded-lg
            filter
            contrast-75
            saturate-70
         "
         style="box-shadow: 0 -0.2em 0.3em rgb(0 0 0 / 0.2)"
      />

      <div
         class="
            absolute
            bg-jet
            dark:bg-unbleached-silk
            duration-500
            ease-in-out
            flex flex-col
            h-full
            items-center
            justify-center
            overflow-hidden
            transition-opacity
            rounded-lg
            w-full
            z-30
         "
         :class="[isTableVisible ? 'opacity-100' : 'opacity-0']"
      >
         <StoredUrls />
      </div>
   </div>
</template>
