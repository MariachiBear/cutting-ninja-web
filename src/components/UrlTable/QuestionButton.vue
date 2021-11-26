<script setup lang="ts">
defineProps({ isShown: { type: Boolean, required: true, default: false } });
</script>

<template>
   <button
      class="flex justify-center items-center rounded-full lg:hover:bg-blue-400 lg:hover:bg-opacity-20 lg:dark:hover:bg-blue-500 lg:dark:hover:bg-opacity-20 hover:bg-blue-500 hover:bg-opacity-20 dark:hover:bg-blue-400 dark:hover:bg-opacity-20 all-300"
   >
      <ic-baseline-question-mark
         style="aspect-ratio: 1"
         class="all-300 lg:text-blue-400 lg:dark:text-blue-500 text-blue-500 dark:text-blue-400 transform hover:rotate-20 p-1"
         :class="isShown ? 'w-6 h-6' : 'w-0 h-0'"
      />
   </button>
</template>
