<script setup lang="ts">

</script>

<template>
  <form class="w-full flex flex-col space-y-3 lg:space-y-0 lg:space-x-3 lg:flex-row justify-between">
    <input placeholder="https://github.com/url-shortener-front" class="shadow-lg w-full flex-1 bg-warm-gray-50 text-warm-gray-800 placeholder-gray-500 rounded outline-none transition duration-100 px-3 py-2" />

    <button class="relative px-5 py-2 font-medium text-white group flex-shrink">
      <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-english-lavender group-hover:bg-mountbatten-pink group-hover:skew-x-12"></span>
      <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-mountbatten-pink group-hover:bg-english-lavender group-hover:-skew-x-12"></span>
      <span class="relative">Short that URL</span>
    </button>
  </form>
</template>
