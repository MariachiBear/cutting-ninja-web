<script setup lang="ts">
import { or, promiseTimeout } from '@vueuse/core';
import { siteBreakpoints } from '~/composables';
import { useNotificationStore } from '~/store/notification';
import { useURLStore } from '~/store/url';
import { useUIStore } from '~/store/ui';

const props = defineProps({
   url: { type: Object as () => IURL, required: true },
});

const baseURL = String(import.meta.env.VITE_API_BASE_URL);
const urlString = `${baseURL}${props.url.shortUrl}`;

const { t } = useI18n();
const { sm, md } = siteBreakpoints;
const { text: copiedText, copy, copied: isCopied } = useClipboard({ copiedDuring: 0 });

const isSmallScreen = or(sm, md);

const openLink = () => {
   window.open(urlString, '_blank')?.focus();
   promiseTimeout(1).then(() => useURLStore.updateStoredUrl());
};

whenever(isCopied, () =>
   useNotificationStore.showSuccessNotification(
      t('label.copied_success', { url: copiedText.value })
   )
);
</script>

<template>
   <div class="flex flex-row gap-1 justify-center lg:text-lg px-3 py-1 text-xl">
      <button
         class="
            colors-300
            dark:hover:bg-white dark:hover:bg-opacity-10 dark:text-red-400
            flex flex-row
            hover:bg-black hover:bg-opacity-10
            items-center
            lg:dark:hover:bg-black
            lg:dark:hover:bg-opacity-10
            lg:dark:text-red-500
            lg:hover:bg-opacity-10
            lg:hover:bg-white
            lg:text-red-400
            p-1
            rounded-sm
            text-red-500
         "
         :title="t('label.delete')"
         @click="
            useURLStore.setActiveUrl(url);
            useUIStore.toggleValue('isUrlDeleteConfirmOpen', true);
         "
      >
         <ic-baseline-delete />
      </button>
      <button
         class="
            colors-300
            dark:hover:bg-white dark:hover:bg-opacity-10 dark:text-blue-400
            flex flex-row
            hover:bg-black hover:bg-opacity-10
            items-center
            lg:dark:hover:bg-black
            lg:dark:hover:bg-opacity-10
            lg:dark:text-blue-500
            lg:hover:bg-opacity-10
            lg:hover:bg-white
            lg:text-blue-400
            p-1
            rounded-sm
            text-blue-500
         "
         :title="t('label.go_to')"
         @click="openLink()"
      >
         <ic-baseline-open-in-new />
      </button>
      <button
         class="
            colors-300
            dark:hover:bg-white dark:hover:bg-opacity-10
            flex flex-row
            hover:bg-black hover:bg-opacity-10
            items-center
            lg:dark:hover:bg-black
            lg:dark:hover:bg-opacity-10
            lg:hover:bg-opacity-10
            lg:hover:bg-white
            p-1
         "
         :class="[isSmallScreen ? 'text-theme' : 'text-theme-inverse']"
         :title="t('label.copy')"
         @click="
            useURLStore.setActiveUrl(url);
            copy(urlString);
         "
      >
         <ic-baseline-content-copy />
      </button>
   </div>
</template>
