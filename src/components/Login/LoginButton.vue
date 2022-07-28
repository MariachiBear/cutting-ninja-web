<template>
   <button
      class="bg-gray-50 dark:bg-rocket-metallic duration-150 ease-in-out flex flex-row font-semibold group hover:pl-10 hover:pr-6 items-center justify-center overflow-hidden pl-4 pr-12 py-2 relative rounded text-english-lavender transition-all"
   >
      <span
         class="absolute bg-english-lavender bottom-0 duration-150 ease-in-out group-hover:h-full h-1 left-0 transition-all w-full"
      ></span>
      <span
         class="absolute duration-200 ease-out group-hover:translate-x-12 pr-4 right-0 transform flex text-xl"
      >
         <mdi-arrow-right class="text-english-lavender" />
      </span>
      <span
         class="-translate-x-12 absolute duration-200 ease-out group-hover:translate-x-0 left-0 pl-2.5 transform flex text-xl"
      >
         <mdi-arrow-right class="text-gray-50" />
      </span>
      <span
         class="duration-200 ease-in-out group-hover:text-white relative text-left transition-colors w-full"
      >
         <slot />
      </span>
   </button>
</template>
