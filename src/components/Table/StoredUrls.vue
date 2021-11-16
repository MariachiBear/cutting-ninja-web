<script setup lang="ts">
import { useURLStore } from '~/store/url';

const urlState = useURLStore.getState();

// useIntervalFn(() => useURLStore.updateStoredUrl(), 1000);
</script>

<template>
   <div
      class="
         break-words
         dark:text-warm-gray-800
         duration-50
         ease-in-out
         flex flex-col
         h-full
         relative
         text-warm-gray-300
         transition-colors
         w-full
      "
   >
      <div class="flex flex-col justify-center h-11">
         <h3 class="w-full px-2 font-semibold text-base">Your URL's</h3>
      </div>

      <div class="block w-full overflow-x-auto h-full">
         <table class="items-center bg-transparent w-full border-collapse">
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
                  <td class="px-6 py-2 text-lg flex flex-row justify-center">
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
                     <a
                        :href="`https://rubn.xyz/${url.shortUrl}`"
                        target="_blank"
                        class="
                           text-red-400
                           dark:text-red-400
                           align-middle
                           flex flex-row
                           items-center
                        "
                     >
                        <mdi-delete />
                     </a>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
</template>
