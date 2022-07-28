<script setup lang="ts">
import { promiseTimeout } from '@vueuse/core';

const [showChangePassword, toggleChangePassword] = useToggle(true);
const resetChangePasswordComponent = async () => {
   toggleChangePassword(false);
   await promiseTimeout(1);
   toggleChangePassword(true);
};
</script>

<template>
   <div id="wrapper">
      <div
         class="flex relative flex-col items-center justify-center min-h-screen h-full py-10 w-full main-theme-bg colors-300 z-10"
      >
         <section
            class="flex flex-col gap-10 items-center justify-between lg:flex-row lg:w-11/12 mt-20 mb-50 lg:mt-0 lg:mb-0"
         >
            <div id="profile-image-settings" class="w-full lg:w-3/10 xl:w-1/5 h-full">
               <ProfilePictureSettings />
            </div>
            <div
               id="other-settings"
               class="flex flex-col lg:flex-row w-full lg:w-7/10 xl:w-4/5 h-full items-start gap-10"
            >
               <ChangeUserInformation />
               <ChangePassword
                  v-if="showChangePassword"
                  @password-changed="resetChangePasswordComponent"
               />
            </div>
         </section>
      </div>
      <Footer />
   </div>
</template>

<route lang="yaml">
meta:
   layout: default
   requiresAuth: true
</route>
