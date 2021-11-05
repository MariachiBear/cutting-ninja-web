<template>
   <form class="w-full flex flex-col gap-5 lg:flex-row justify-between">
      <input
         placeholder="https://github.com/url-shortener-front"
         class="
            shadow-lg
            w-full
            flex-1
            bg-warm-gray-50
            text-warm-gray-800
            placeholder-gray-500
            rounded
            outline-none
            px-3
            py-2
         "
      />

      <button href="#_" class="relative px-5 py-2 font-medium group !outline-none">
         <span
            class="
               dark:hidden
               absolute
               inset-0
               w-full
               h-full
               transition-all
               duration-400
               ease-out
               transform
               translate-x-0
               -skew-x-12
               bg-english-lavender
               group-hover:bg-mountbatten-pink group-hover:skew-x-12
            "
         ></span>
         <span
            class="
               dark:hidden
               absolute
               inset-0
               w-full
               h-full
               transition-all
               duration-400
               ease-out
               transform
               skew-x-12
               bg-mountbatten-pink
               group-hover:bg-english-lavender group-hover:-skew-x-12
            "
         ></span>

         <span
            class="
               hidden
               dark:block
               absolute
               inset-0
               w-full
               h-full
               transition-all
               duration-400
               ease-out
               transform
               skew-x-12
               bg-mountbatten-pink
               group-hover:bg-english-lavender group-hover:-skew-x-12
            "
         ></span>
         <span
            class="
               hidden
               dark:block
               absolute
               inset-0
               w-full
               h-full
               transition-all
               duration-400
               ease-out
               transform
               translate-x-0
               -skew-x-12
               bg-english-lavender
               group-hover:bg-mountbatten-pink group-hover:skew-x-12
            "
         ></span>

         <span
            class="
               relative
               text-warm-gray-50
               dark:text-warm-gray-700 dark:group-hover:text-warm-gray-50 dark:duration-200
            "
            >Short that URL</span
         >
      </button>
   </form>
</template>
