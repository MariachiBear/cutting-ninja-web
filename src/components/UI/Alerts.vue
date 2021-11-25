<script setup lang="ts">
import { useNotificationStore } from '~/store/notification';
import { useUIStore } from '~/store/ui';
import { useURLStore } from '~/store/url';
import { useUserStore } from '~/store/user';

const { t } = useI18n();

// UI Store
const uiState = useUIStore.getState();
const toggleSignModal = (value: boolean) => useUIStore.toggleValue('isSignModalOpen', value);
const toggleUrlDeleteConfirmOpen = (value: boolean) =>
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
   toggleUrlDeleteConfirmOpen(false);
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
      :toggle-function="toggleUrlDeleteConfirmOpen"
      is-persistent
      :title="t('label.delete')"
      @confirm="deleteUrl"
      @cancel="toggleUrlDeleteConfirmOpen(false)"
   >
      <div class="flex flex-row justify-center items-center gap-5 px-5">
         <ic-outline-warning-amber class="text-8xl" />

         <div class="text-justify">
            <p>
               {{ t('label.delete_question') }}
               <span class="font-medium">{{ t('label.delete_suggestion') }}</span>
            </p>
         </div>
      </div>
   </Dialog>
</template>
