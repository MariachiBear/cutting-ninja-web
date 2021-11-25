<script setup lang="ts">
import { useUserStore } from '~/store/user';
const { t } = useI18n();
</script>

<template>
   <header class="flex flex-row items-center justify-between left-0 p-4 top-0 w-full absolute z-20">
      <router-link
         to="/"
         class="
            colors-300
            font-semibold
            gap-2
            inline-flex
            items-center
            justify-start
            text-theme text-xl
            lg:text-3xl
            relative
            group
         "
         :title="t('button.home')"
         aria-label="logo"
      >
         <img src="/assets/ninjahead.svg" class="w-8 h-8 z-10" />
         Cutting Ninja
         <div
            class="absolute border-t-2 border-white transform w-0 group-hover:w-full all-300 z-0"
         ></div>
         <div
            class="
               absolute
               border-t-3
               dark:border-t-jet
               border-t-unbleached-silk
               transform
               w-0
               delay-75
               group-hover:w-full
               all-300
               z-0
            "
         ></div>
      </router-link>

      <section class="flex flex-row gap-2 lg:gap-4 items-center justify-center">
         <UserInfo v-if="useUserStore.isUserLoggedIn.value" />
         <DarkToggle />
         <SignInButton />
      </section>
   </header>
</template>
