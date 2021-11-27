<script setup lang="ts">
import { useUserStore } from '~/store/user';
</script>

<template>
   <header
      class="flex flex-row items-center justify-between left-0 px-4 py-4 lg:py-2 top-0 w-full absolute z-20"
   >
      <Logo />
      <PathName />

      <section class="flex flex-row flex-shrink-0 gap-2 lg:gap-4 items-center justify-center">
         <UserInfo v-if="useUserStore.isUserLoggedIn.value" />
         <DarkToggle />
         <SignInButton />
      </section>
   </header>
</template>
