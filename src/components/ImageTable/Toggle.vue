<script setup lang="ts">
import { useURLStore } from '~/store/url';
const { t } = useI18n();
const urlState = useURLStore.getState();
const isTableVisible = computed(() => urlState.storedUrls.length > 0 && urlState.isTableVisible);
const toggle = () => useURLStore.toggleIsTableVisible();
</script>

<template>
   <button
      style="box-shadow: 0.1em -0.1em 0.2em rgb(0 0 0 / 0.2)"
      class="-translate-x-2.5 !text-warm-gray-600 absolute all-300 bg-warm-gray-100 opacity-0 pb-3 pt-1.5 px-2 right-0 rounded-t-md text-xl top-0 transform z-0"
      :class="[
         urlState.storedUrls.length === 0
            ? '!translate-y-0 !opacity-0'
            : '!-translate-y-10 !opacity-100',
      ]"
      :title="t(`label.${isTableVisible ? 'show_picture' : 'show_table'}`)"
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
