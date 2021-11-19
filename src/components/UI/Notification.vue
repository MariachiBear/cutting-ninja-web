<template>
   <div
      class="
         all-300
         bg-english-lavender
         bottom-0
         fixed
         flex flex-row
         justify-between
         items-center items-center
         justify-center
         left-0
         lg:bottom-5 lg:rounded-r-sm lg:w-1/5
         mx-auto
         overflow-hidden
         px-2
         transform
         shadow-2xl
         w-full
         z-9999
         h-12
      "
      :class="[
         notificationState.isOpen
            ? 'translate-y-0 lg:translate-x-0 pointer-events-auto'
            : 'translate-y-full lg:translate-y-0 lg:-translate-x-full pointer-events-none',
      ]"
   >
      <p class="!font-medium text-warm-gray-800 text-sm">
         {{ notificationState.message }}
      </p>
      <ic-outline-check-box v-if="notificationState.type === 'success'" class="text-2xl" />
      <ic-outline-dangerous v-if="notificationState.type === 'error'" class="text-2xl" />
      <ic-outline-info v-if="notificationState.type === 'info'" class="text-2xl" />
      <ic-outline-warning-amber v-if="notificationState.type === 'warning'" class="text-2xl" />
   </div>
</template>

<script setup lang="ts">
import { useNotificationStore } from '~/store/notification';

const notificationState = useNotificationStore.getState();
</script>
