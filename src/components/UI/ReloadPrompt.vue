<script setup lang="ts">
import { get, set, useCounter, useIntervalFn, whenever } from '@vueuse/core';
import { logicOr } from '@vueuse/math';
import { useRegisterSW } from 'virtual:pwa-register/vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const { count, dec } = useCounter(30);

const { pause } = useIntervalFn(dec, 1000);

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW();

const isOpen = logicOr(offlineReady, needRefresh);

const close = async () => {
   set(offlineReady, false);
   set(needRefresh, false);
};

whenever(
   () => get(count) === 0,
   () => {
      pause();
      if (get(offlineReady)) close();
      if (get(needRefresh)) updateServiceWorker(true);
   }
);
</script>

<template>
   <div
      id="reload_prompt"
      class="
         4k:bottom-4 4k:right-4
         4xl:bottom-3 4xl:right-3
         all-300
         bg-warm-gray-100
         bottom-0
         dark:bg-warm-gray-600
         fixed
         lg:bottom-2 lg:right-2 lg:w-1/4 lg:rounded lg:shadow-2xl
         right-0
         section-padding
         shadow-inner
         w-full
         z-9999
      "
      :class="[isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none']"
      role="alert"
   >
      <div class="relative py-2 px-4 text-theme colors-300">
         <span v-if="offlineReady" class="!font-medium">
            {{ t('label.offline_ready') }}
         </span>
         <span v-if="needRefresh" class="!font-medium">
            {{ t('label.new_content') }}
         </span>
      </div>
      <div
         class="px-4 py-2 flex justify-start items-start gap-1 items-center text-theme colors-300"
      >
         <span v-if="offlineReady" class="!font-medium"> {{ t('label.close_in') }}: </span>
         <span v-if="needRefresh" class="!font-medium"> {{ t('label.reload_in') }}: </span>

         <span class="!font-medium">
            <b>{{ count }}</b> {{ t('unit.second', count) }}
         </span>

         <div class="flex-grow"></div>

         <button v-if="offlineReady" class="hover:text-blue-500" @click="close()">
            {{ t('button.close') }}
         </button>
         <button v-if="needRefresh" class="hover:text-blue-500" @click="updateServiceWorker(true)">
            {{ t('button.reload_now') }}
         </button>
      </div>
   </div>
</template>
