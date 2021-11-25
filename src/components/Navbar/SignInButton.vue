<script setup lang="ts">
import { useUserStore } from '~/store/user';
import { useUIStore } from '~/store/ui';

const { t } = useI18n();
</script>

<template>
   <button
      v-if="!useUserStore.isUserLoggedIn.value"
      class="flex flex-col icon-btn relative text-3xl xl:text-2xl text-theme"
      :title="t('button.sign_in')"
      @click="useUIStore.toggleValue('isSignModalOpen', true)"
   >
      <ic-baseline-log-in />
   </button>
</template>
