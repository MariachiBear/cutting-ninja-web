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
         bg-unbleached-silk
         dark:bg-jet
         min-h-screen
         w-1/1
         overflow-hidden
         flex flex-col
         justify-center
         items-center
         relative
      "
   >
      <Navbar />
      <section class="flex flex-col lg:flex-row justify-between w-11/12 md:gap-10">
         <div
            class="
               xl:w-6/12
               flex flex-col
               justify-center
               items-center
               lg:items-start
               sm:text-center
               lg:text-left lg:py-12
               xl:py-24
            "
         >
            <h1 class="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">
               Revolutionary way to build the web
            </h1>

            <p class="lg:w-4/5 xl:text-lg leading-relaxed mb-8 md:mb-12">
               This is a section of some simple filler text, also known as placeholder text. It
               shares some characteristics of a real written text but is random.
            </p>

            <ShortUrl />
         </div>

         <ImageTable />
      </section>
   </div>
</template>
