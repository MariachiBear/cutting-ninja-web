<script setup lang="ts">
import { or } from '@vueuse/core';
import { DateTime } from 'luxon';
import { siteBreakpoints } from '~/composables';
import { useURLStore } from '~/store/url';
import { useUserStore } from '~/store/user';

const { t } = useI18n();
const { sm, md } = siteBreakpoints;

const isSmallScreen = or(sm, md);
const urlsByDate = useURLStore.urlsByDate;
const isUserLoggedIn = useUserStore.isUserLoggedIn;

const getValidDays = (createdAt: string) => {
   const today = DateTime.now().startOf('day');
   const creationDay = DateTime.fromISO(createdAt).startOf('day');
   const duration = today.diff(creationDay, 'days');
   const validDates = Number(import.meta.env.VITE_VALIDITY_DAYS) - duration.days;
   return validDates;
};
</script>

<template>
   <tbody
      class="divide-y-1"
      :class="[
         isSmallScreen
            ? 'divide-warm-gray-400 dark:divide-warm-gray-600'
            : 'divide-warm-gray-600 dark:divide-warm-gray-400',
      ]"
   >
      <tr
         v-for="(url, index) in urlsByDate"
         :key="index"
         class="
            colors-300
            dark:hover:bg-white dark:hover:bg-opacity-10
            hover:bg-black hover:bg-opacity-10
            lg:dark:hover:bg-black
            lg:dark:hover:bg-opacity-10
            lg:hover:bg-opacity-10
            lg:hover:bg-white
         "
         :class="[isSmallScreen ? 'text-theme' : 'text-theme-inverse']"
      >
         <!-- Page name -->
         <td class="lg:text-xs max-w-50 px-3 text-left text-sm truncate" :title="url.longUrl">
            {{ url.longUrl }}
         </td>

         <!-- Short name -->
         <td v-if="isUserLoggedIn" class="lg:text-xs px-3 text-center text-sm">
            {{ url.shortUrl }}
         </td>

         <!-- Expiration tile -->
         <td v-else class="lg:text-xs px-3 text-center text-sm">
            {{ t('label.still_valid') }}
            <span class="font-semibold">{{ getValidDays(url.createdAt) }}</span>
            {{ t('unit.day', getValidDays(url.createdAt)) }}
         </td>

         <!-- Visits -->
         <td class="lg:text-xs overflow-hidden px-3 relative text-center text-sm">
            <span :class="[isUserLoggedIn ? '' : 'filter blur-sm font-black']">
               {{ url.visits }}
            </span>
            <NoVisitsButton />
         </td>

         <!-- Actions -->
         <td class="overflow-hidden relative text-center">
            <UrlTableActions :url="url" />
         </td>
      </tr>
   </tbody>
</template>
