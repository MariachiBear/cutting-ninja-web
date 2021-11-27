<script setup lang="ts">
import { set, useVModels } from '@vueuse/core';
import { nanoid } from 'nanoid';
import { ref, watch } from 'vue';

const emit = defineEmits(['clear', 'update:modelValue', 'validate']);

const props = defineProps({
   isClearable: { type: Boolean, required: false, default: true },
   isDisabled: { type: Boolean, required: false, default: false },
   isRequired: { type: Boolean, required: false, default: false },
   label: { type: String, required: false },
   modelValue: { type: String, required: false, default: '' },
   placeholder: { type: String, required: false },
   type: { type: String, required: false, default: 'text' },
   validationFunctions: {
      type: Object as () => Record<string, (arg: string) => boolean | string>,
      required: false,
   },
});

const errMsg = ref('');
const inputId = ref(nanoid());
const isValid = ref(true);

const { modelValue } = useVModels(props, emit);
const errMsgDelayed = debouncedRef(errMsg, 150);

const validateInput = (inputValue: string) => {
   if (props.validationFunctions) {
      const functions = Object.keys(props.validationFunctions);

      for (const key of functions) {
         const validationFn = props.validationFunctions[key] as Function;

         const result = validationFn(inputValue);

         set(isValid, typeof result === 'boolean');

         if (typeof result === 'string') {
            return result;
         }
      }
   }
   return '';
};

const clear = () => {
   set(modelValue, '');
   emit('clear');
};

// @ts-expect-error // Correct target type
const setValue = (event: Event) => set(modelValue, event.target?.value);

watch(modelValue, (inputValue) => (errMsg.value = validateInput(inputValue)));

watch(isValid, (validValue) => emit('validate', validValue));
</script>

<template>
   <div
      class="flex flex-col items-start justify-center relative my-5"
      :class="[isDisabled ? 'opacity-50' : '']"
   >
      <label
         v-if="label"
         :for="inputId"
         class="-translate-y-full absolute colors-300 dark:text-warm-gray-400 font-semibold left-0 mb-1 text-sm text-warm-gray-600 top-0 transform z-0"
      >
         {{ label }}
      </label>
      <input
         :id="inputId"
         :name="label"
         :value="modelValue"
         :disabled="isDisabled"
         :required="isRequired"
         :type="type"
         :placeholder="placeholder"
         class="disabled:cursor-not-allowed bg-gray-100 colors-300 dark:bg-rocket-metallic2 p-2 placeholder-gray-400 relative rounded-sm shadow text-theme w-full z-10"
         @input="setValue"
      />

      <span
         v-if="modelValue && isClearable"
         class="absolute bg-gray-100 colors-300 cursor-pointer dark:bg-rocket-metallic2 flex flex-col p-2 right-0 rounded-r-sm text-theme text-xl z-20"
         @click="clear"
      >
         <ic-baseline-close />
      </span>
      <small
         class="absolute all-300 bottom-0 dark:text-red-400 right-0 text-red-600 transform z-0 font-medium"
         :class="[
            isValid
               ? 'opacity-100 pointer-events-none translate-y-0'
               : 'opacity-100 pointer-events-auto translate-y-full',
         ]"
      >
         {{ errMsgDelayed }}
      </small>
   </div>
</template>
