<script setup lang="ts">
import { useNotificationStore } from '~/store/notification';
import { useUserStore } from '~/store/user';

const { t } = useI18n();

const userState = useUserStore.getState();

const firstName = ref(userState.user?.firstName);
const lastName = ref(userState.user?.lastName);
const email = ref(userState.user?.email);

const updateUser = async () => {
   const userNewInfo: IUserUpdate = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value === userState.user?.email ? undefined : email.value,
   };

   const result = await useUserStore.updateUser(userNewInfo);

   switch (result) {
      case 409:
         useNotificationStore.showErrorNotification(t('label.signed_up_fail_409'));
         break;
      default:
         useNotificationStore.showSuccessNotification(t('label.update_success'));
         break;
   }
};

const requiredValidation = (value: string): boolean | string => !!value || t('label.is_required');
const emailValidation = (value: string): boolean | string => {
   const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return pattern.test(value) || t('label.invalid_email');
};
</script>

<template>
   <div class="container mx-auto w-full lg:w-1/2">
      <div class="text-center">
         <h1 class="mb-2 text-3xl font-semibold text-gray-700 dark:text-gray-200">
            {{ t('label.update_info') }}
         </h1>
      </div>

      <form action="" class="p-5 flex flex-col" @submit.prevent="updateUser">
         <Input
            v-model="firstName"
            :label="t('label.first_name')"
            type="text"
            is-required
            :validation-functions="{ requiredValidation }"
         />

         <Input
            v-model="lastName"
            :label="t('label.last_name')"
            type="text"
            required
            :validation-functions="{ requiredValidation }"
         />

         <Input
            v-model="email"
            :label="t('label.email')"
            type="email"
            required
            :validation-functions="{ requiredValidation, emailValidation }"
         />

         <div class="flex flex-row justify-end mt-5">
            <FormButton> {{ t('button.apply') }} </FormButton>
         </div>
      </form>
   </div>
</template>
