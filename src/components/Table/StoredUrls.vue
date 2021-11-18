<script setup lang="ts">
import { or } from '@vueuse/core';
import { siteBreakpoints } from '~/composables';
import { useURLStore } from '~/store/url';
import { useUserStore } from '~/store/user';

const isLoggedIn = useUserStore.isUserLoggedIn();

const { sm, md } = siteBreakpoints;
const { text, copy, copied } = useClipboard();

const isSmallScreen = or(sm, md);
const urlState = useURLStore.getState();
const baseURL = String(import.meta.env.VITE_API_BASE_URL);

const deleteUrl = (url: IURL) => useURLStore.deleteUrl(url);

const { pause, resume } = useIntervalFn(() => useURLStore.updateStoredUrl(), 1000 * 30, {
   immediate: false,
});

whenever(() => isLoggedIn.value, resume);

whenever(() => !isLoggedIn.value, pause);

whenever(copied, () => console.log(text.value, 'copied'));
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
                  dark:shadow-white
                  lg:shadow-white lg:dark:shadow-black
                  bg-mountbatten-pink
                  shadow
                  sticky
                  text-theme
                  top-0
                  z-50
               "
               :class="[isSmallScreen ? 'text-theme-inverse' : 'text-theme']"
            >
               <th class="font-semibold px-6 py-3 text-center text-xs uppercase whitespace-nowrap">
                  Page name
               </th>
               <th class="font-semibold px-6 py-3 text-center text-xs uppercase whitespace-nowrap">
                  Short name
               </th>
               <th class="font-semibold px-6 py-3 text-center text-xs uppercase whitespace-nowrap">
                  Visits
               </th>
               <th class="font-semibold px-6 py-3 text-center text-xs uppercase whitespace-nowrap">
                  Actions
               </th>
            </tr>
         </thead>

         <tbody>
            <tr
               v-for="(url, index) in urlState.storedUrls"
               :key="index"
               class="
                  border border-solid border-t-0 border-l-0 border-r-0
                  colors-300
                  dark:hover:bg-white dark:hover:bg-opacity-10
                  hover:bg-black hover:bg-opacity-10
                  lg:hover:bg-white
                  lg:hover:bg-opacity-10
                  lg:dark:hover:bg-black
                  lg:dark:hover:bg-opacity-10
               "
               :class="[
                  isSmallScreen
                     ? 'text-theme border-warm-gray-400 dark:border-warm-gray-600'
                     : 'text-theme-inverse border-warm-gray-600 dark:border-warm-gray-400',
               ]"
            >
               <td
                  class="max-w-50 px-3 text-left text-xs truncate whitespace-nowrap font-semibold"
                  :title="url.longUrl"
               >
                  {{ url.longUrl }}
               </td>

               <td class="px-3 text-center text-xs whitespace-nowrap">
                  {{ url.shortUrl }}
               </td>
               <td class="px-3 text-center text-xs whitespace-nowrap relative">
                  <span
                     v-if="!isLoggedIn"
                     class="
                        opacity-300
                        absolute
                        p-1
                        lg:dark:bg-light-blue-400 lg:bg-light-blue-800
                        dark:bg-light-blue-700
                        bg-light-blue-300
                        rounded-sm
                        z-10
                        font-medium
                        opacity-0
                        hover:opacity-100
                     "
                     :class="[isSmallScreen ? 'text-theme' : 'text-theme-inverse']"
                     style="top: 50%; left: 50%; transform: translate(-50%, -50%)"
                  >
                     Log in to see this
                  </span>
                  <span class="font-semibold" :class="[isLoggedIn ? '' : 'blur-sm filter']">{{
                     url.visits
                  }}</span>
               </td>
               <td class="px-3 text-center whitespace-nowrap">
                  <div class="flex flex-row gap-1 justify-center px-3 py-2 text-lg">
                     <a
                        :href="`${baseURL}${url.shortUrl}`"
                        target="_blank"
                        class="
                           text-blue-400
                           dark:text-blue-400
                           align-middle
                           flex flex-row
                           items-center
                        "
                        title="Go to page"
                     >
                        <ic-baseline-open-in-new />
                     </a>
                     <button
                        class="
                           text-red-400
                           dark:text-red-400
                           align-middle
                           flex flex-row
                           items-center
                        "
                        title="Delete URL"
                        @click="deleteUrl(url)"
                     >
                        <ic-baseline-delete />
                     </button>
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
