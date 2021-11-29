<script setup lang="ts">
import { useUserStore } from '~/store/user';
import { useUIStore } from '~/store/ui';
const { t } = useI18n();
const isUserLoggedIn = useUserStore.isUserLoggedIn;
const isExpirationHelpShown = ref(false);
const isVisitsHelpShown = ref(false);
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
            <span
               class="border-0 border-b-1 border-dashed border-b-blue-300 relative cursor-pointer"
               @click="useUIStore.toggleValue('isSignInInfoOpen', true)"
               @mouseover="isExpirationHelpShown = true"
               @mouseleave="isExpirationHelpShown = false"
            >
               {{ t('label.expiration_time') }}
               <QuestionButton v-model="isExpirationHelpShown" />
            </span>
         </th>

         <!-- Visits -->
         <th class="font-semibold px-6 py-3 text-center text-sm uppercase whitespace-nowrap">
            <span
               :class="
                  isUserLoggedIn
                     ? ''
                     : 'border-0 border-b-1 border-dashed border-b-blue-300 relative cursor-pointer'
               "
               @click="useUIStore.toggleValue('isSignInInfoOpen', !isUserLoggedIn)"
               @mouseover="isVisitsHelpShown = true"
               @mouseleave="isVisitsHelpShown = false"
            >
               {{ t('label.visits') }}
               <QuestionButton v-if="!isUserLoggedIn" v-model="isVisitsHelpShown" />
            </span>
         </th>

         <!-- Actions -->
         <th class="font-semibold px-6 py-3 text-center text-sm uppercase whitespace-nowrap">
            {{ t('label.actions') }}
         </th>
      </tr>
   </thead>
</template>
