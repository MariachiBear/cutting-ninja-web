<script setup lang="ts">
import { useUserStore } from '~/store/user';
import { useUIStore } from '~/store/ui';
const { t } = useI18n();
const isUserLoggedIn = useUserStore.isUserLoggedIn;
</script>

<template>
   <button
      v-if="!isUserLoggedIn"
      class="
         -translate-x-1/2 -translate-y-4/2
         group-hover:-translate-y-1/2
         absolute
         all-300
         bg-warm-gray-50
         text-warm-gray-700
         flex
         group-hover:opacity-100
         items-center
         justify-center
         left-1/2
         opacity-100
         p-1
         rounded-md
         shadow-md
         top-1/2
         transform
         w-full
      "
      @click="useUIStore.toggleValue('isSignModalOpen', true)"
   >
      {{ t('button.sign_in') }}
   </button>
</template>
