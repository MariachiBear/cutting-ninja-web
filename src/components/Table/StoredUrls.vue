<script setup lang="ts">
import { useURLStore } from '~/store/url';

const urlState = useURLStore.getState();
const deleteUrl = (url: IURL) => useURLStore.deleteUrl(url);
const { text, copy, copied } = useClipboard();

useIntervalFn(() => useURLStore.updateStoredUrl(), 1000 * 60);

whenever(copied, () => console.log(text.value, 'copied'));
</script>

<template>
   <div class="break-words flex flex-col h-full relative transition-colors w-full">
      <div class="flex flex-col justify-center h-11">
         <h3 class="w-full px-2 font-semibold text-base dark:text-warm-gray-800 text-warm-gray-300">
            Your URL's
         </h3>
      </div>

      <div class="block w-full overflow-x-auto h-full">
         <table
            class="
               items-center
               bg-transparent
               w-full
               border-collapse
               dark:text-warm-gray-800
               text-warm-gray-300
            "
         >
            <thead>
               <tr>
                  <th
                     class="
                        border border-solid border-warm-gray-300 border-l-0 border-r-0
                        dark:border-warm-gray-700
                        font-semibold
                        px-6
                        py-3
                        text-center text-xs
                        uppercase
                     "
                  >
                     Page name
                  </th>
                  <th
                     class="
                        px-6
                        align-middle
                        border border-solid border-warm-gray-300
                        dark:border-warm-gray-700
                        py-3
                        text-xs
                        uppercase
                        border-l-0 border-r-0
                        whitespace-nowrap
                        font-semibold
                        text-center
                     "
                  >
                     Short name
                  </th>
                  <th
                     class="
                        px-6
                        align-middle
                        border border-solid border-warm-gray-300
                        dark:border-warm-gray-700
                        py-3
                        text-xs
                        uppercase
                        border-l-0 border-r-0
                        whitespace-nowrap
                        font-semibold
                        text-center
                     "
                  >
                     Visits
                  </th>

                  <th
                     class="
                        px-6
                        align-middle
                        border border-solid border-warm-gray-300
                        dark:border-warm-gray-700
                        py-3
                        text-xs
                        uppercase
                        border-l-0 border-r-0
                        whitespace-nowrap
                        font-semibold
                        text-center
                     "
                  >
                     Actions
                  </th>
               </tr>
            </thead>

            <tbody>
               <tr
                  v-for="(url, index) in urlState.storedUrls"
                  :key="index"
                  class="
                     border border-solid border-t-0 border-l-0 border-r-0 border-warm-gray-300
                     dark:border-warm-gray-700
                  "
               >
                  <th
                     class="px-6 text-xs whitespace-nowrap truncate max-w-60 text-left"
                     :title="url.longUrl"
                  >
                     {{ url.longUrl }}
                  </th>

                  <td class="px-6 text-xs whitespace-nowrap text-center">
                     {{ url.shortUrl }}
                  </td>
                  <td class="px-6 text-xs whitespace-nowrap text-center filter blur-sm">
                     {{ url.visits }}
                  </td>
                  <td class="px-6 py-2 text-lg flex flex-row justify-center gap-1">
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
                        class="
                           !outline-none
                           text-red-400
                           dark:text-red-400
                           align-middle
                           flex flex-row
                           items-center
                        "
                        @click="deleteUrl(url)"
                     >
                        <mdi-delete />
                     </button>
                     <button
                        class="
                           !outline-none
                           text-warm-gray-300
                           dark:text-warm-gray-700
                           align-middle
                           flex flex-row
                           items-center
                        "
                        @click="copy(`https://rubn.xyz/${url.shortUrl}`)"
                     >
                        <mdi-content-copy />
                     </button>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
</template>
