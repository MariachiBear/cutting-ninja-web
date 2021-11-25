<script setup lang="ts">
const emit = defineEmits(['load']);
</script>

<template>
   <div class="w-full h-full overflow-hidden absolute">
      <img
         src="https://source.unsplash.com/collection/317099/1600x900"
         alt="Photo"
         class="
            all-300
            contrast-75
            filter
            group-hover:scale-105
            lg:rounded-sm
            object-cover object-center
            overflow-hidden
            saturate-70
            transform
         "
         @load="emit('load')"
      />
   </div>
</template>
