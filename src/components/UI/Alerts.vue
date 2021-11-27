<script setup lang="ts">
import { useNotificationStore } from '~/store/notification';
import { useUIStore } from '~/store/ui';
import { useURLStore } from '~/store/url';
import { useUserStore } from '~/store/user';

const { t } = useI18n();

// UI Store
const uiState = useUIStore.getState();
const toggleSignModal = (value: boolean) => useUIStore.toggleValue('isSignModalOpen', value);
const toggleSignInInfo = (value: boolean) => useUIStore.toggleValue('isSignInInfoOpen', value);
const toggleUrlDeleteConfirm = (value: boolean) =>
   useUIStore.toggleValue('isUrlDeleteConfirmOpen', value);

// User Store
const isUserLoggedIn = useUserStore.isUserLoggedIn;

// URL Store
const urlState = useURLStore.getState();
const deleteUrl = async () => {
   if (urlState.activeUrl)
      await useURLStore.deleteUrl(urlState.activeUrl, isUserLoggedIn.value).then((result) => {
         if (result)
            useNotificationStore.showSuccessNotification(
               t('label.deleted_success', { url: urlState.activeUrl?.shortUrl })
            );
         else
            useNotificationStore.showErrorNotification(
               t('label.deleted_fail', { url: urlState.activeUrl?.shortUrl })
            );
      });
   toggleUrlDeleteConfirm(false);
};
</script>

<template>
   <Dialog
      v-if="!isUserLoggedIn"
      v-model="uiState.isSignModalOpen"
      :has-action-buttons="false"
      :toggle-function="toggleSignModal"
      is-persistent
   >
      <LoginTabs @logged="toggleSignModal(false)" @signedup="toggleSignModal(false)" />
   </Dialog>
   <Dialog
      v-model="uiState.isUrlDeleteConfirmOpen"
      :toggle-function="toggleUrlDeleteConfirm"
      is-persistent
      :title="t('label.delete')"
      @confirm="deleteUrl"
      @cancel="toggleUrlDeleteConfirm(false)"
   >
      <ConfirmDeleteDialog />
   </Dialog>
   <Dialog
      v-model="uiState.isSignInInfoOpen"
      :toggle-function="toggleSignInInfo"
      :title="t('label.sign_in_info_title')"
      :has-action-buttons="false"
   >
      <SignInInfoDialog />
   </Dialog>
</template>
