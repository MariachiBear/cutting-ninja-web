<script setup lang="ts">
import { useURLStore } from '~/store/url';

const urlState = useURLStore.getState();
const deleteUrl = (url: IURL) => useURLStore.deleteUrl(url);
const { text, copy, copied } = useClipboard();

useIntervalFn(() => useURLStore.updateStoredUrl(), 1000 * 60);

whenever(copied, () => console.log(text.value, 'copied'));
</script>

<template>
   <div class="w-full h-full overflow-auto">
      <table class="w-full h-full relative">
         <thead>
            <tr
               class="
                  all-300
                  dark:shadow-white
                  lg:shadow-white lg:dark:shadow-black
                  main-theme-bg-inverse
                  shadow
                  sticky
                  text-theme-inverse
                  top-0
                  z-50
               "
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
                  border border-solid border-t-0 border-l-0 border-r-0 border-warm-gray-600
                  colors-300
                  dark:border-warm-gray-300
                  lg:border-warm-gray-300 lg:dark:border-warm-gray-600
                  main-theme-bg-inverse
                  text-theme-inverse
               "
            >
               <th
                  class="max-w-50 px-3 text-left text-xs truncate whitespace-nowrap"
                  :title="url.longUrl"
               >
                  {{ url.longUrl }}
               </th>

               <td class="px-3 text-center text-xs whitespace-nowrap">
                  {{ url.shortUrl }}
               </td>
               <td class="blur-sm filter px-3 text-center text-xs whitespace-nowrap">
                  {{ url.visits }}
               </td>
               <td class="flex flex-row gap-1 justify-center px-3 py-2 text-lg">
                  <a
                     :href="`https://rubn.xyz/${url.shortUrl}`"
                     target="_blank"
                     class="
                        text-blue-400
                        dark:text-blue-400
                        align-middle
                        flex flex-row
                        items-center
                     "
                  >
                     <mdi-link-variant />
                  </a>
                  <button
                     class="text-red-400 dark:text-red-400 align-middle flex flex-row items-center"
                     @click="deleteUrl(url)"
                  >
                     <mdi-delete />
                  </button>
                  <button
                     class="align-middle all-300 text-theme-inverse flex flex-row items-center"
                     @click="copy(`https://rubn.xyz/${url.shortUrl}`)"
                  >
                     <mdi-content-copy />
                  </button>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
</template>
