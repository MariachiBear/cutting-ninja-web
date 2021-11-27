<script setup lang="ts">
import { useUserStore } from '~/store/user';
const { t } = useI18n();
const isUserLoggedIn = useUserStore.isUserLoggedIn;
</script>

<template>
   <thead>
      <tr
         class="
            all-300
            bg-mountbatten-pink
            dark:shadow-white
            lg:shadow-white lg:dark:shadow-black
            shadow
            sticky
            text-warm-gray-100
            top-0
            z-10
         "
      >
         <!-- Page name -->
         <th class="font-semibold px-6 py-3 text-center text-sm uppercase whitespace-nowrap">
            {{ t('label.page_name') }}
         </th>

         <!-- Short name -->
         <th
            v-if="isUserLoggedIn"
            class="font-semibold px-6 py-3 text-center text-sm uppercase whitespace-nowrap"
         >
            {{ t('label.short_name') }}
         </th>

         <!-- Expiration tile -->
         <th v-else class="font-semibold px-6 py-3 text-center text-sm uppercase whitespace-nowrap">
            {{ t('label.expiration_time') }}
         </th>

         <!-- Visits -->
         <th class="font-semibold px-6 py-3 text-center text-sm uppercase whitespace-nowrap">
            {{ t('label.visits') }}
         </th>

         <!-- Actions -->
         <th class="font-semibold px-6 py-3 text-center text-sm uppercase whitespace-nowrap">
            {{ t('label.actions') }}
         </th>
      </tr>
   </thead>
</template>
