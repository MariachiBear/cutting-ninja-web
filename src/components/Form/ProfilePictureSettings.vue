<script setup lang="ts">
import { useUserStore } from '~/store/user';
const userState = useUserStore.getState();

const [isGravatar, toggleIsGravatar] = useToggle(userState.user?.useGravatar);
const gravatarLink = import.meta.env.VITE_GRAVATAR_URL;
const boringAvatarsLink = import.meta.env.VITE_BORING_AVATARS_URL;

watch(isGravatar, (newValue) => {
   useUserStore.updateUser({ useGravatar: newValue });
});
</script>

<template>
   <div class="flex flex-col items-center justify-center space-y-5">
      <ProfilePicture is-from-settings :is-gravatar="isGravatar" />

      <div class="flex items-center justify-center w-full mb-12 text-theme text-sm">
         <a
            class="mr-3 text-btn border-0 border-b-1 border-dashed border-b-blue-300"
            target="_blank"
            :href="boringAvatarsLink"
         >
            Boring Avatars
         </a>

         <label for="toggleB" class="flex items-center cursor-pointer">
            <!-- toggle -->
            <div class="relative">
               <!-- input -->
               <input
                  type="checkbox"
                  id="toggleB"
                  class="sr-only transform"
                  v-model="isGravatar"
                  @input="() => toggleIsGravatar()"
               />
               <!-- line -->
               <div
                  class="block bg-rocket-metallic dark:bg-old-lavender w-14 h-8 rounded-full colors-300"
               ></div>
               <!-- dot -->
               <div
                  class="absolute left-1 top-1 bg-pastel-pink w-6 h-6 rounded-full transition-all transform duration-150 ease-out"
                  :class="[isGravatar ? 'translate-x-full' : '']"
               ></div>
            </div>
         </label>
         <a
            class="ml-3 text-btn border-0 border-b-1 border-dashed border-b-blue-300"
            target="_blank"
            :href="gravatarLink"
         >
            Gravatar
         </a>
      </div>
   </div>
</template>
