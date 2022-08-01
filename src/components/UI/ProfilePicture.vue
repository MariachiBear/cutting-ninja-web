<script setup lang="ts">
import md5 from 'md5';
import { useUserStore } from '~/store/user';

const userState = useUserStore.getState();

const props = defineProps({
   isFromSettings: { type: Boolean, required: false, default: false },
});

const sourceImg = computed(() => {
   if (userState.user?.useGravatar)
      return `${import.meta.env.VITE_GRAVATAR_BASE_URL}${md5(String(userState.user?.email))}?s=${
         props.isFromSettings ? '300' : '80'
      }`;
   else
      return `${import.meta.env.VITE_BORING_AVATARS_BASE_URL}${
         userState.user?.email
      }?colors=E8BAA2,B5838D,4e4b53,E5989B`;
});
</script>

<template>
   <img
      :src="sourceImg"
      class="bg-accent bg-opacity-20 object-cover rounded-full shadow-md"
      :class="[
         props.isFromSettings
            ? 'h-40 w-40 lg:h-60 lg:w-60 4k:w-100 4k:h-100 4xl:w-10 4xl:h-10 5xl:w-80 5xl:h-80'
            : 'lg:h-7 lg:w-7 4k:w-100 4k:h-100 4xl:w-10 4xl:h-10 5xl:w-80 5xl:h-80',
      ]"
      alt="user"
   />
</template>
