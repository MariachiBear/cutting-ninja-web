<script setup lang="ts">
import { useUserStore } from '~/store/user';
const { t } = useI18n();
</script>

<template>
   <header class="flex flex-row items-center justify-between left-0 p-4 top-0 w-full absolute z-10">
      <router-link
         to="/"
         class="
            colors-300
            font-semibold
            gap-2
            inline-flex
            items-center
            text-theme text-xl
            lg:text-2xl
         "
         :title="t('button.home')"
         aria-label="logo"
      >
         <img src="/assets/ninjahead.svg" class="w-8 h-8" />
         Cutting Ninja
      </router-link>

      <section class="flex flex-row gap-2 lg:gap-4 items-center justify-center">
         <UserInfo v-if="useUserStore.isUserLoggedIn.value" />
         <DarkToggle />
         <SignInButton />
      </section>
   </header>
</template>
