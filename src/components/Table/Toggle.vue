<script setup lang="ts">
import { useURLStore } from '~/store/url';
const urlState = useURLStore.getState();
const toggle = () => useURLStore.toggleIsTableVisible();
const isTableVisible = computed(() => urlState.storedUrls.length > 0 && urlState.isTableVisible);
</script>

<template>
   <button
      style="box-shadow: 0 -0.1em 0.3em rgb(0 0 0 / 0.2)"
      class="
         -translate-y-0 -translate-x-2.5
         !text-warm-gray-600
         absolute
         bg-warm-gray-100
         group-hover:-translate-y-10 group-hover:opacity-100
         opacity-0
         pb-3
         pt-1.5
         px-2
         right-0
         rounded-t-md
         text-xl
         top-0
         transform
         all-300
         z-0
      "
      :class="[urlState.storedUrls.length === 0 ? '!-translate-y-0 !opacity-0' : '']"
      :title="isTableVisible ? 'Show picture' : 'Show table'"
      @click="toggle"
   >
      <div class="flex flex-col relative">
         <ic-baseline-image
            class="absolute opacity-300"
            :class="[!isTableVisible ? 'opacity-0' : 'opacity-100']"
         />
         <ic-baseline-table-rows
            class="opacity-300"
            :class="[isTableVisible ? 'opacity-0' : 'opacity-100']"
         />
      </div>
   </button>
</template>
