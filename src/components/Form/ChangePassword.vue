<script setup lang="ts">
import { useNotificationStore } from '~/store/notification';
import { useUserStore } from '~/store/user';

const { t } = useI18n();

const emit = defineEmits(['passwordChanged']);

const userState = useUserStore.getState();

const currentPassword = ref('');
const newPassword = ref('');
const verifNewPassword = ref('');
const arePasswordsIdentical = computed(() => newPassword.value === currentPassword.value);
const areNewPasswordsIdentical = computed(() => newPassword.value === verifNewPassword.value);

const changePassword = async () => {
   if (!areNewPasswordsIdentical.value) {
      useNotificationStore.showErrorNotification(t('label.is_not_identical'));
      return;
   }

   if (arePasswordsIdentical.value) {
      useNotificationStore.showErrorNotification(t('label.is_old_identical'));
      return;
   }

   const email = String(userState.user?.email);
   const loginResponse = await useUserStore.login(email, currentPassword.value, true);

   if (loginResponse) {
      await useUserStore
         .updateUserPassword(newPassword.value)
         .then(() => {
            useNotificationStore.showSuccessNotification(t('label.password_changed'));
            emit('passwordChanged');
         })
         .catch(() => useNotificationStore.showErrorNotification(t('label.password_length')));
   } else {
      useNotificationStore.showErrorNotification(t('label.wrong_password'));
   }
};

const requiredValidation = (value: string): boolean | string => !!value || t('label.is_required');
</script>

<template>
   <div class="container mx-auto w-full lg:w-1/2">
      <div class="text-center">
         <h1 class="mb-2 text-2xl font-semibold text-gray-700 dark:text-gray-200 colors-300">
            {{ t('label.change_password') }}
         </h1>
      </div>

      <form action="" class="p-5 flex flex-col" @submit.prevent="changePassword">
         <Input
            v-model="currentPassword"
            :label="t('label.current_password')"
            type="password"
            is-required
            :validation-functions="{ requiredValidation }"
         />

         <Input
            v-model="newPassword"
            :label="t('label.new_password')"
            type="password"
            is-required
            :validation-functions="{ requiredValidation }"
         />

         <Input
            v-model="verifNewPassword"
            :label="t('label.verif_new_password')"
            type="password"
            is-required
            :validation-functions="{ requiredValidation }"
         />

         <div class="flex flex-row justify-end mt-5">
            <FormButton> {{ t('button.apply') }} </FormButton>
         </div>
      </form>
   </div>
</template>
