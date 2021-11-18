<script setup lang="ts">
import { useURLStore } from '~/store/url';
import { useUserStore } from '~/store/user';

const emit = defineEmits(['logged']);

const email = ref('');
const password = ref('');
const isLoading = ref(false);

const login = async () => {
   isLoading.value = true;
   await useUserStore.login(email.value, password.value);
   await useURLStore.updateStoredUrl();
   isLoading.value = false;
   emit('logged');
};

const emailValidation = (value: string): boolean | string => {
   const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return pattern.test(value) || 'Invalid email';
};

const requiredValidation = (value: string): boolean | string => !!value || 'Is required';
</script>

<template>
   <div class="container mx-auto">
      <div class="text-center">
         <h1 class="mb-2 text-3xl font-semibold text-gray-700 dark:text-gray-200">Sign in</h1>
         <p class="text-gray-500 dark:text-gray-400">to access your account</p>
      </div>
      <form action="" class="p-5 flex flex-col gap-1" @submit.prevent="login">
         <Input
            v-model="email"
            label="Email address"
            type="email"
            is-required
            placeholder="email@example.com"
            :validation-functions="{ requiredValidation, emailValidation }"
         />
         <Input
            v-model="password"
            label="Password"
            type="password"
            is-required
            placeholder="An amazing password, like 'password'"
            :validation-functions="{ requiredValidation }"
         />

         <div class="flex flex-row justify-center">
            <LoginButton> Sign in </LoginButton>
         </div>
      </form>
   </div>
</template>
