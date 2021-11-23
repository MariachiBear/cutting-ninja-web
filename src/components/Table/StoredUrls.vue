<script setup lang="ts">
import { or } from '@vueuse/core';
import { DateTime } from 'luxon';
import { siteBreakpoints } from '~/composables';
import { useNotificationStore } from '~/store/notification';
import { useURLStore } from '~/store/url';
import { useUserStore } from '~/store/user';

const isLoggedIn = useUserStore.isUserLoggedIn();

const { sm, md } = siteBreakpoints;
const { text, copy, copied } = useClipboard();

const isSmallScreen = or(sm, md);
const urlState = useURLStore.getState();
const baseURL = String(import.meta.env.VITE_API_BASE_URL);

const { pause, resume } = useIntervalFn(() => useURLStore.updateStoredUrl(), 1000 * 10);

const activeIndex = ref<number | null>(null);
const [isConfirmOpen, toggleIsConfirmOpen] = useToggle(false);

const getValidDates = (createdAt: string) => {
   const today = DateTime.now().startOf('day');
   const creationDay = DateTime.fromISO(createdAt).startOf('day');
   const duration = today.diff(creationDay, 'days');

   const validDates = Number(import.meta.env.VITE_VALIDITY_DAYS) - duration.days;

   return validDates;
};

const deleteUrl = (url: IURL) =>
   useURLStore.deleteUrl(url, isLoggedIn.value).then(() => {
      toggleIsConfirmOpen(false);
      activeIndex.value = null;
   });

tryOnMounted(() => {
   if (isLoggedIn.value) {
      resume();
   } else {
      pause();
   }
});

whenever(isLoggedIn, resume);

// eslint-disable-next-line no-console
whenever(copied, () =>
   useNotificationStore.showSuccessNotification(`${text.value} copied successfully`)
);
</script>

<template>
   <div
      class="w-full h-full overflow-auto block w-full overflow-x-auto colors-300"
      :class="[isSmallScreen ? 'main-theme-bg' : 'main-theme-bg-inverse']"
   >
      <table class="table-auto border-collapse w-full">
         <thead>
            <tr
               class="
                  all-300
                  bg-mountbatten-pink
                  dark:shadow-white
                  lg:shadow-white lg:dark:shadow-black
                  shadow
                  sticky
                  text-theme
                  top-0
                  z-50
               "
               :class="[isSmallScreen ? 'text-theme-inverse' : 'text-theme']"
            >
               <th class="font-semibold px-6 py-3 text-center text-sm uppercase whitespace-nowrap">
                  Page name
               </th>
               <th
                  v-if="isLoggedIn"
                  class="font-semibold px-6 py-3 text-center text-sm uppercase whitespace-nowrap"
               >
                  Short name
               </th>
               <th
                  v-else
                  class="font-semibold px-6 py-3 text-center text-sm uppercase whitespace-nowrap"
               >
                  Expiration time
               </th>
               <th class="font-semibold px-6 py-3 text-center text-sm uppercase whitespace-nowrap">
                  Visits
               </th>
               <th class="font-semibold px-6 py-3 text-center text-sm uppercase whitespace-nowrap">
                  Actions
               </th>
            </tr>
         </thead>

         <tbody
            class="divide-y-1"
            :class="[
               isSmallScreen
                  ? 'divide-warm-gray-400 dark:divide-warm-gray-600'
                  : 'divide-warm-gray-600 dark:divide-warm-gray-400',
            ]"
         >
            <tr
               v-for="(url, index) in urlState.storedUrls"
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
               :class="[isSmallScreen ? 'text-theme ' : 'text-theme-inverse ']"
            >
               <td
                  class="max-w-50 px-3 text-left text-sm lg:text-xs truncate whitespace-nowrap"
                  :title="url.longUrl"
               >
                  {{ url.longUrl }}
               </td>

               <td v-if="isLoggedIn" class="px-3 text-center text-sm lg:text-xs whitespace-nowrap">
                  {{ url.shortUrl }}
               </td>

               <td v-else class="px-3 text-center text-sm lg:text-xs whitespace-nowrap">
                  Still valid
                  <span class="font-semibold textstro">{{ getValidDates(url.createdAt) }}</span>
                  days
               </td>

               <td
                  class="
                     lg:text-xs
                     overflow-hidden
                     px-3
                     relative
                     text-center text-sm
                     whitespace-nowrap
                  "
               >
                  <span class="font-semibold" :class="[isLoggedIn ? '' : 'blur-sm filter']">
                     {{ url.visits }}
                  </span>
               </td>

               <td class="text-center whitespace-nowrap relative overflow-hidden">
                  <div
                     class="
                        absolute
                        all-300
                        bg-english-lavender
                        flex flex-col
                        h-full
                        items-center
                        justify-between
                        lg:flex-row lg:gap-1 lg:p-2
                        p-1
                        text-theme
                        transform
                        w-full
                     "
                     :class="[
                        isConfirmOpen && activeIndex === index
                           ? 'translate-x-0'
                           : 'translate-x-full ',
                     ]"
                  >
                     <span class="text-xs font-semibold lg:flex-grow text-left"
                        >Delete this URL?</span
                     >

                     <div class="flex flex-row justify-around w-full items-center">
                        <ic-baseline-check class="cursor-pointer" @click="deleteUrl(url)" />
                        <ic-baseline-close
                           class="cursor-pointer"
                           @click="
                              toggleIsConfirmOpen(false);
                              activeIndex = null;
                           "
                        />
                     </div>
                  </div>
                  <div class="flex flex-row gap-1 justify-center px-3 py-2 text-xl lg:text-lg">
                     <button
                        class="
                           text-red-400
                           dark:text-red-400
                           align-middle
                           flex flex-row
                           items-center
                        "
                        title="Delete URL"
                        @click="
                           activeIndex = index;
                           toggleIsConfirmOpen(true);
                        "
                     >
                        <ic-baseline-delete />
                     </button>
                     <a
                        :href="`${baseURL}${url.shortUrl}`"
                        target="_blank"
                        class="
                           text-blue-500
                           lg:text-blue-400
                           dark:text-blue-400
                           lg:dark:text-blue-500
                           align-middle
                           flex flex-row
                           items-center
                           colors-300
                        "
                        title="Go to page"
                     >
                        <ic-baseline-open-in-new />
                     </a>
                     <button
                        class="align-middle all-300 flex flex-row items-center"
                        :class="[isSmallScreen ? 'text-theme' : 'text-theme-inverse']"
                        title="Copy URL"
                        @click="copy(`https://rubn.xyz/${url.shortUrl}`)"
                     >
                        <ic-baseline-content-copy />
                     </button>
                  </div>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
</template>
