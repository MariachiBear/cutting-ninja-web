<script setup lang="ts">
import { useUIStore } from '~/store/ui';
import { useUserStore } from '~/store/user';

const uiState = useUIStore.getState();
const toggleSignModal = (value: boolean) => useUIStore.toggleValue('isSignModalOpen', value);
</script>

<template>
   <Dialog
      v-if="!useUserStore.isUserLoggedIn.value"
      v-model="uiState.isSignModalOpen"
      :has-action-buttons="false"
      :toggle-function="toggleSignModal"
      is-persistent
   >
      <LoginTabs @logged="toggleSignModal(false)" @signedup="toggleSignModal(false)" />
   </Dialog>
</template>
