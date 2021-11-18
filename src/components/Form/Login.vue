<template>
   <div class="flex items-center all-300">
      <div class="container mx-auto">
         <div class="mx-auto">
            <div class="text-center">
               <h1 class="my-2 text-3xl font-semibold text-gray-700 dark:text-gray-200">Sign in</h1>
               <p class="text-gray-500 dark:text-gray-400">to access your account</p>
            </div>
            <form action="" class="p-5 pb-4">
               <div class="mb-4">
                  <label
                     for="login_email"
                     class="block font-semibold mb-1 text-sm text-gray-600 dark:text-gray-400"
                  >
                     Email Address
                  </label>
                  <input
                     id="login_email"
                     type="email"
                     name="login_email"
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
                        for="login_password"
                        class="text-sm font-semibold text-gray-600 dark:text-gray-400"
                     >
                        Password
                     </label>
                     <!-- <a href="#!" class="text-xs text-gray-500 font-medium text-btn">
                        Forgot password?
                     </a> -->
                  </div>
                  <input
                     id="login_password"
                     type="password"
                     name="login_password"
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
                        flex flex-row
                        font-semibold
                        group
                        hover:pl-10 hover:pr-6
                        items-center
                        justify-center
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
                        Sign in
                     </span>
                  </button>
               </div>
            </form>
         </div>
      </div>
   </div>
</template>
