<script setup lang="ts">
// https://github.com/vueuse/head

// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'URL Shortener - RUBN/COND',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
  ],
})

</script>

<template>
  <router-view />
</template>
