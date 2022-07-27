<template>
   <button
      class="relative bg-gray-50 inline-flex duration-150 items-center px-6 hover:pr-10 hover:pl-2 py-1 overflow-hidden font-semibold text-english-lavender border-2 border-english-lavender rounded hover:text-gray-50 group transition-all"
   >
      <span
         class="absolute left-0 block w-full h-0 transition-all bg-english-lavender opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-150 ease-out"
      ></span>
      <span
         class="absolute right-0 flex items-center justify-start text-xl duration-200 transform translate-x-full group-hover:-translate-x-2 ease-out"
      >
         <mdi-check class="text-gray-50" />
      </span>
      <span class="relative">
         <slot />
      </span>
   </button>
</template>
