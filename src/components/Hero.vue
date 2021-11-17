<script setup lang="ts">
import User from '~/API/repositories/user';

const userRepository = new User();

tryOnMounted(async () => {
   await userRepository.signIn({
      email: 'rubencondemag96@gmail.com',
      password: '587d5c5ddb',
   });
});
</script>

<template>
   <div
      class="
         flex flex-col
         items-center
         justify-center
         main-theme-bg
         min-h-screen
         relative
         w-full
         colors-300
      "
   >
      <Navbar />
      <section
         class="flex flex-col gap-15 items-center justify-between lg:flex-row lg:w-11/12 mt-10"
      >
         <HeroText />
         <ImageTable class="hidden lg:flex" />
      </section>
   </div>
</template>
