<script setup lang="ts">
const props = defineProps({ modelValue: { type: Boolean, required: false, default: false } });
const emit = defineEmits(['update:modelValue']);

const { modelValue } = useVModels(props, emit);
</script>

<template>
   <ic-baseline-question-mark
      style="aspect-ratio: 1"
      class="all-300 text-blue-300 transform absolute top-0 right-0 transform"
      :class="[
         modelValue ? 'translate-x-full scale-115 opacity-100' : 'translate-x-0 scale-50 opacity-0',
      ]"
   />
</template>
