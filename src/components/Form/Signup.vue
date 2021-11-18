<script setup lang="ts">
const email = ref('');

const sourceImg = computed(
   () =>
      `https://source.boringavatars.com/bauhaus/120/${email.value}?colors=E8BAA2,B5838D,4e4b53,E5989B`
);
</script>

<template>
   <div class="flex items-center all-300">
      <div class="container mx-auto">
         <div class="mx-auto">
            <div class="flex flex-col justify-center items-center">
               <img
                  :src="sourceImg"
                  class="
                     2xl:w-50 2xl:h-50
                     3xl:w-60 3xl:h-60
                     4k:w-100 4k:h-100
                     4xl:w-65 4xl:h-65
                     5xl:w-80 5xl:h-80
                     bg-accent bg-opacity-20
                     h-30
                     lg:w-40 lg:h-40
                     md:w-35 md:h-35
                     object-contain
                     rounded-full
                     shadow-md
                     w-30
                  "
                  alt="logo"
               />
               <h1 class="my-2 text-3xl font-semibold text-gray-700 dark:text-gray-200">Sign up</h1>
            </div>
            <form action="" class="p-5 pb-4">
               <div class="mb-4">
                  <label
                     for="first_name"
                     class="block font-semibold mb-1 text-sm text-gray-600 dark:text-gray-400"
                  >
                     First Name
                  </label>
                  <input
                     id="first_name"
                     type="text"
                     name="first_name"
                     placeholder="Jhon"
                     class="
                        bg-gray-100
                        dark:bg-rocket-metallic
                        flex-1
                        p-2
                        placeholder-gray-400
                        rounded-sm
                        shadow
                        text-theme
                        w-full
                     "
                  />
               </div>
               <div class="mb-4">
                  <label
                     for="last_name"
                     class="block font-semibold mb-1 text-sm text-gray-600 dark:text-gray-400"
                  >
                     Last Name
                  </label>
                  <input
                     id="last_name"
                     type="text"
                     name="last_name"
                     placeholder="Doe"
                     class="
                        bg-gray-100
                        dark:bg-rocket-metallic
                        flex-1
                        p-2
                        placeholder-gray-400
                        rounded-sm
                        shadow
                        text-theme
                        w-full
                     "
                  />
               </div>
               <div class="mb-4">
                  <label
                     for="signup_email"
                     class="block font-semibold mb-1 text-sm text-gray-600 dark:text-gray-400"
                  >
                     Email Address
                  </label>
                  <input
                     id="signup_email"
                     v-model="email"
                     type="email"
                     name="signup_email"
                     placeholder="example@email.com"
                     class="
                        bg-gray-100
                        dark:bg-rocket-metallic
                        flex-1
                        p-2
                        placeholder-gray-400
                        rounded-sm
                        shadow
                        text-theme
                        w-full
                     "
                  />
               </div>
               <div class="mb-4">
                  <div class="flex justify-between items-end mb-1">
                     <label
                        for="signup_password"
                        class="text-sm font-semibold text-gray-600 dark:text-gray-400"
                     >
                        Password
                     </label>
                     <!-- <a href="#!" class="text-xs text-gray-500 font-medium text-btn">
                        Forgot password?
                     </a> -->
                  </div>
                  <input
                     id="signup_password"
                     type="password"
                     name="signup_password"
                     placeholder="An amazing password, like 'password'"
                     class="
                        bg-gray-100
                        dark:bg-rocket-metallic
                        flex-1
                        p-2
                        placeholder-gray-400
                        rounded-sm
                        shadow
                        text-theme
                        w-full
                     "
                  />
               </div>
               <div class="flex flex-row justify-center">
                  <button
                     class="
                        bg-gray-50
                        dark:bg-rocket-metallic
                        duration-150
                        ease-in-out
                        font-semibold
                        group
                        hover:pl-10 hover:pr-6
                        inline-flex
                        items-center
                        justify-start
                        overflow-hidden
                        pl-4
                        pr-12
                        py-2.5
                        relative
                        rounded
                        text-english-lavender
                        transition-all
                     "
                  >
                     <span
                        class="
                           absolute
                           bg-english-lavender
                           bottom-0
                           duration-150
                           ease-in-out
                           group-hover:h-full
                           h-1
                           left-0
                           transition-all
                           w-full
                        "
                     ></span>
                     <span
                        class="
                           absolute
                           duration-200
                           ease-out
                           group-hover:translate-x-12
                           pr-4
                           right-0
                           transform
                           flex
                        "
                     >
                        <mdi-arrow-right class="text-english-lavender" />
                     </span>
                     <span
                        class="
                           -translate-x-12
                           absolute
                           duration-200
                           ease-out
                           group-hover:translate-x-0
                           left-0
                           pl-2.5
                           transform
                           flex
                        "
                     >
                        <mdi-arrow-right class="text-gray-50" />
                     </span>
                     <span
                        class="
                           duration-200
                           ease-in-out
                           group-hover:text-white
                           relative
                           text-left
                           transition-colors
                           w-full
                        "
                     >
                        Sign up
                     </span>
                  </button>
               </div>
            </form>
         </div>
      </div>
   </div>
</template>
