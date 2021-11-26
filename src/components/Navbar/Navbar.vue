<script setup lang="ts">
import { useUserStore } from '~/store/user';
</script>

<template>
   <header class="flex flex-row items-center justify-between left-0 p-4 top-0 w-full absolute z-20">
      <Logo />
      <PathName />
      <div class="flex-grow" />
      <section class="flex flex-row gap-2 lg:gap-4 items-center justify-center">
         <UserInfo v-if="useUserStore.isUserLoggedIn.value" />
         <DarkToggle />
         <SignInButton />
      </section>
   </header>
</template>
