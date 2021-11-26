<script setup lang="ts">
import { or } from '@vueuse/core';
import { DateTime } from 'luxon';
import { siteBreakpoints } from '~/composables';
import { useURLStore } from '~/store/url';
import { useUserStore } from '~/store/user';

const { t } = useI18n();
const { sm, md } = siteBreakpoints;

const hoveredIndex = ref<number | null>(null);
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
      <transition-group
         leave-active-class="animated animate-fade-out-left animate-duration-500"
         enter-active-class="animated animate-fade-in-left animate-duration-500"
      >
         <tr
            v-for="(url, index) in urlsByDate"
            :key="url._id"
            class="divide-x colors-300 dark:even:bg-opacity-5 dark:even:bg-warm-gray-50 dark:even:hover:bg-opacity-10 dark:hover:bg-opacity-10 dark:hover:bg-warm-gray-50 even:bg-opacity-10 even:bg-warm-gray-900 even:hover:bg-opacity-20 hover:bg-opacity-20 hover:bg-warm-gray-900 lg:dark:even:bg-opacity-10 lg:dark:even:bg-warm-gray-900 lg:dark:even:hover:bg-opacity-20 lg:dark:hover:bg-opacity-20 lg:dark:hover:bg-warm-gray-900 lg:even:bg-opacity-5 lg:even:bg-warm-gray-50 lg:even:hover:bg-opacity-10 lg:hover:bg-opacity-10 lg:hover:bg-warm-gray-50"
            :class="[
               isSmallScreen
                  ? 'text-theme divide-warm-gray-400 dark:divide-warm-gray-600'
                  : 'text-theme-inverse divide-warm-gray-600 dark:divide-warm-gray-400',
            ]"
            @mouseover="hoveredIndex = index"
            @mouseleave="hoveredIndex = null"
         >
            <!-- Page name -->
            <td
               class="lg:text-xs max-w-80 px-3 py-2 text-left break-all text-sm long-url"
               :title="url.longUrl"
            >
               {{ url.longUrl }}
            </td>

            <!-- Short name -->
            <td v-if="isUserLoggedIn" class="lg:text-xs px-3 text-center text-sm">
               {{ url.shortUrl }}
            </td>

            <!-- Expiration tile -->
            <td v-else class="lg:text-xs px-3 text-center text-sm">
               <div class="flex flex-row items-center justify-center gap-1 group">
                  {{ t('label.still_valid') }}
                  <span class="font-semibold">{{ getValidDays(url.createdAt) }}</span>
                  {{ t('unit.day', getValidDays(url.createdAt)) }}
                  <QuestionButton :is-shown="hoveredIndex === index" />
               </div>
            </td>

            <!-- Visits -->
            <td class="lg:text-xs overflow-hidden px-3 relative text-center text-sm">
               <span :class="[isUserLoggedIn ? '' : 'filter blur-sm font-black']">
                  {{ url.visits }}
               </span>
               <NoVisitsButton :is-shown="hoveredIndex === index" />
            </td>

            <!-- Actions -->
            <td class="overflow-hidden relative text-center">
               <UrlTableActions :url="url" />
            </td>
         </tr>
      </transition-group>
   </tbody>
</template>
