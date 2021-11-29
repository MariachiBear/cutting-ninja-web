<script setup lang="ts">
import { useUIStore } from '~/store/ui';

const { t } = useI18n();
</script>

<template>
   <button
      class="flex flex-col icon-btn relative text-3xl xl:text-2xl text-theme"
      :title="t('button.sign_in')"
      @click="useUIStore.toggleValue('isSignModalOpen', true)"
   >
      <ic-baseline-log-in />
   </button>
</template>
