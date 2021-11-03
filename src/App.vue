<script setup lang="ts">import { useUserStore } from './store/user'

const isReady = ref(false)

useHead({
  title: 'URL Shortener - RUBN/COND',
})

tryOnMounted(async() => {
  await useUserStore.init()
  isReady.value = true
})

</script>

<template>
  <router-view v-if="isReady" />
</template>
