<script setup lang="ts">
import { useNotificationStore } from '~/store/notification';
import { useURLStore } from '~/store/url';
import { useUserStore } from '~/store/user';

const { t } = useI18n();

const emit = defineEmits(['logged']);

const email = ref('');
const password = ref('');
const isLoading = ref(false);

const login = async () => {
   isLoading.value = true;
   await useUserStore.login(email.value, password.value).then(async (result) => {
      if (result) {
         await useURLStore.updateStoredUrl();
         isLoading.value = false;
         emit('logged');
         useNotificationStore.showSuccessNotification(t('label.signed_in_success'));
      }
   });
};

const emailValidation = (value: string): boolean | string => {
   const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return pattern.test(value) || t('label.invalid_email');
};

const requiredValidation = (value: string): boolean | string => !!value || t('label.is_required');
</script>

<template>
   <div class="container mx-auto">
      <div class="text-center">
         <h1 class="mb-2 text-3xl font-semibold text-gray-700 dark:text-gray-200">
            {{ t('button.sign_in') }}
         </h1>
         <p class="text-gray-500 dark:text-gray-400">{{ t('label.to_access') }}</p>
      </div>
      <form action="" class="p-5 flex flex-col" @submit.prevent="login">
         <Input
            v-model="email"
            :label="t('label.email_address')"
            type="email"
            is-required
            placeholder="email@example.com"
            :validation-functions="{ requiredValidation, emailValidation }"
         />
         <Input
            v-model="password"
            :label="t('label.password')"
            type="password"
            is-required
            :placeholder="t('label.password_placeholder')"
            :validation-functions="{ requiredValidation }"
         />

         <div class="flex flex-row justify-center mt-5">
            <LoginButton> {{ t('button.sign_in') }} </LoginButton>
         </div>
      </form>
   </div>
</template>
