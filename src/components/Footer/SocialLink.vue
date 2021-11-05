<script setup lang="ts">
defineProps({
  href: { type: String, required: false, default: '#' },
})
</script>

<template>
  <a :href="href" target="_blank" class=" text-xl">
    <slot />
  </a>
</template>
