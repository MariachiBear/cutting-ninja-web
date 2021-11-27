<script setup lang="ts">
import { useUserStore } from '~/store/user';
const emit = defineEmits(['signedup']);

const { t } = useI18n();

const email = ref('');
const password = ref('');
const firstName = ref('');
const lastName = ref('');
const isLoading = ref(false);

const signup = async () => {
   isLoading.value = true;
   await useUserStore
      .signup(email.value, password.value, firstName.value, lastName.value)
      .then((result) => {
         if (result) {
            isLoading.value = false;
            emit('signedup');
         }
      });
};

const emailValidation = (value: string): boolean | string => {
   const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return pattern.test(value) || 'Invalid email';
};

const requiredValidation = (value: string): boolean | string => !!value || 'Is required';

const minCharacters = (value: string): boolean | string =>
   value.length >= 10 || `Need at least ${10 - value.length} more characters`;

const sourceImg = computed(
   () =>
      `https://source.boringavatars.com/bauhaus/120/${email.value}?colors=E8BAA2,B5838D,4e4b53,E5989B`
);
</script>

<template>
   <div class="container mx-auto">
      <div class="mx-auto">
         <div class="flex flex-col justify-center items-center">
            <img
               :src="sourceImg"
               class="2xl:w-50 2xl:h-50 3xl:w-60 3xl:h-60 4k:w-100 4k:h-100 4xl:w-65 4xl:h-65 5xl:w-80 5xl:h-80 bg-accent bg-opacity-20 h-30 lg:w-40 lg:h-40 md:w-35 md:h-35 object-contain rounded-full shadow-md w-30"
               alt="logo"
            />
            <h1 class="my-2 text-3xl font-semibold text-gray-700 dark:text-gray-200">
               {{ t('button.sign_up') }}
            </h1>
         </div>
         <form action="" class="p-5 pb-4 flex flex-col" @submit.prevent="signup">
            <Input
               v-model="firstName"
               :label="t('label.first_name')"
               is-required
               placeholder="John"
               :validation-functions="{ requiredValidation }"
            />
            <Input
               v-model="lastName"
               :label="t('label.last_name')"
               is-required
               placeholder="Doe"
               :validation-functions="{ requiredValidation }"
            />
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
               :validation-functions="{ requiredValidation, minCharacters }"
            />
            <div class="flex flex-row justify-center mt-5">
               <LoginButton>{{ t('button.sign_up') }}</LoginButton>
            </div>
         </form>
      </div>
   </div>
</template>
