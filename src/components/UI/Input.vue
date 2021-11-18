<script setup lang="ts">
import { set, tryOnMounted, useVModels } from '@vueuse/core';
import { nanoid } from 'nanoid';
import { ref, watch } from 'vue';

const emit = defineEmits(['clear', 'update:modelValue', 'validate']);

const props = defineProps({
   hasSmallIcons: { type: Boolean, required: false, default: false },
   isClearable: { type: Boolean, required: false, default: false },
   isDisabled: { type: Boolean, required: false, default: false },
   isRequired: { type: Boolean, required: false, default: false },
   label: { type: String, required: false },
   modelValue: { type: String, required: false, default: '' },
   placeholder: { type: String, required: false, default: '' },
   type: { type: String, required: false, default: 'text' },
   validationFunctions: { type: Object, required: false },
});

const { modelValue } = useVModels(props, emit);

const calculatedType = ref('');
const errMsg = ref('');
const isValid = ref(true);
const inputId = ref(nanoid());

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
   return '　';
};

// const toggleCalculatedType = () =>
//    set(calculatedType, get(calculatedType) === 'password' ? 'text' : 'password');

const clear = () => {
   set(modelValue, '');
   emit('clear');
};

// @ts-expect-error
const setValue = (event: Event) => set(modelValue, event.target?.value);

tryOnMounted(() => set(calculatedType, props.type));

watch(modelValue, (inputValue) => (errMsg.value = validateInput(inputValue)));

watch(isValid, (validValue) => emit('validate', validValue));
</script>

<template>
   <div class="flex flex-col items-start justify-center relative my-5">
      <label
         v-if="label"
         :for="inputId"
         class="
            absolute
            top-0
            left-0
            transform
            -translate-y-full
            font-semibold
            mb-1
            text-sm text-gray-600
            dark:text-gray-400
         "
      >
         {{ label }}
      </label>
      <input
         :id="inputId"
         :name="label"
         :value="modelValue"
         :disabled="isDisabled"
         :required="isRequired"
         :type="calculatedType"
         :placeholder="placeholder"
         class="
            colors-300
            bg-gray-100
            dark:bg-rocket-metallic2
            p-2
            placeholder-gray-400
            rounded-sm
            shadow
            text-theme
            w-full
            z-10
            relative
         "
         @input="setValue"
      />

      <span
         v-if="modelValue"
         class="
            absolute
            right-0
            z-20
            text-xl
            bg-gray-100
            cursor-pointer
            dark:bg-rocket-metallic2
            flex flex-col
            p-2
            rounded-r-sm
         "
         @click="clear"
      >
         <ic-baseline-close />
      </span>
      <small
         class="
            absolute
            all-300
            transform
            translate-y-full
            right-0
            bottom-0
            text-red-600
            dark:text-red-400
            z-0
         "
         :class="[isValid ? 'opacity-100 pointer-events-none' : 'opacity-100 pointer-events-auto']"
      >
         {{ errMsg }}
      </small>
   </div>
</template>
