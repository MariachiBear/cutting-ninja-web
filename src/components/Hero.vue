<script setup lang="ts">
import User from '~/API/repositories/user';
import { useURLStore } from '~/store/url';

const userRepository = new User();
const urlState = useURLStore.getState();
const toggle = () => useURLStore.toogleIsTableVisible();

const isTableVisible = computed(() => urlState.storedUrls.length > 0 && urlState.isTableVisible);

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

         <div
            class="
               w-1280px
               h-720px
               xl:max-w-6/12
               lg:max-h-full
               bg-gray-100
               overflow-hidden
               shadow-2xl
               rounded-lg
               hidden
               lg:flex
               relative
            "
         >
            <div
               class="
                  absolute
                  bg-white
                  cursor-pointer
                  duration-300
                  flex flex-col
                  hover:opacity-100
                  justify-center
                  opacity-20
                  p-1
                  right-0
                  rounded-bl-md
                  text-2xl
                  top-0
                  transition-opacity
                  z-50
               "
               @click="toggle"
            >
               <mdi-table-eye-off v-if="isTableVisible" />
               <mdi-table-eye v-else />
            </div>

            <img
               src="https://source.unsplash.com/collection/190727/1280x720"
               loading="lazy"
               alt="Photo by Fakurian Design"
               class="w-full h-full object-cover object-center overflow-hidden"
            />

            <div
               class="
                  w-full
                  h-full
                  bg-jet
                  dark:bg-unbleached-silk
                  absolute
                  flex flex-col
                  justify-center
                  items-center
                  overflow-hidden
                  transition-opacity
                  duration-500
                  ease-in-out
               "
               :class="[isTableVisible ? 'opacity-100' : 'opacity-0']"
            >
               <StoredUrls />
            </div>
         </div>
         <!-- image - end -->
      </section>
   </div>
</template>
