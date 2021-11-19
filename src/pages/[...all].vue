<template>
   <div class="py-6 sm:py-0 h-full">
      <div class="max-w-screen-xl px-4 md:px-8 mx-auto h-full">
         <div class="grid sm:grid-cols-2 gap-8 sm:gap-12 h-full">
            <!-- image - start -->
            <div
               class="
                  h-80
                  md:h-auto
                  bg-gray-100
                  overflow-hidden
                  shadow-lg
                  sm:shadow-none
                  rounded-lg
                  sm:rounded-none
                  h-full
               "
            >
               <img
                  src="https://source.unsplash.com/1920x1080/?lost"
                  loading="lazy"
                  alt="Photo by Jeremy Cai"
                  class="w-full h-full object-cover object-center"
               />
            </div>
            <!-- image - end -->

            <!-- content - start -->
            <div
               class="
                  flex flex-col
                  justify-center
                  items-center
                  sm:items-start
                  md:py-24
                  lg:py-32
                  xl:py-64
               "
            >
               <p class="text-english-lavender text-sm md:text-base font-semibold uppercase mb-4">
                  Error 404
               </p>
               <h1
                  class="text-gray-800 text-2xl md:text-3xl font-bold text-center sm:text-left mb-2"
               >
                  Page not found
               </h1>

               <p class="text-gray-500 md:text-lg text-center sm:text-left mb-8">
                  The page you’re looking for doesn’t exist.
               </p>

               <a
                  href="/"
                  class="
                     relative
                     px-5
                     py-3
                     overflow-hidden
                     font-medium
                     text-gray-600
                     bg-gray-100
                     rounded-md
                     shadow-inner
                     group
                  "
               >
                  <span
                     class="
                        absolute
                        top-0
                        left-0
                        w-0
                        h-0
                        transition-all
                        duration-200
                        border-t-2 border-english-lavender
                        group-hover:w-full
                        ease
                     "
                  ></span>
                  <span
                     class="
                        absolute
                        bottom-0
                        right-0
                        w-0
                        h-0
                        transition-all
                        duration-200
                        border-b-2 border-english-lavender
                        group-hover:w-full
                        ease
                     "
                  ></span>
                  <span
                     class="
                        absolute
                        top-0
                        left-0
                        w-full
                        h-0
                        transition-all
                        duration-300
                        delay-200
                        bg-english-lavender
                        group-hover:h-full
                        ease
                     "
                  ></span>
                  <span
                     class="
                        absolute
                        bottom-0
                        left-0
                        w-full
                        h-0
                        transition-all
                        duration-300
                        delay-200
                        bg-english-lavender
                        group-hover:h-full
                        ease
                     "
                  ></span>
                  <span
                     class="
                        absolute
                        inset-0
                        w-full
                        h-full
                        duration-300
                        delay-300
                        bg-english-lavender
                        opacity-0
                        group-hover:opacity-100
                     "
                  ></span>
                  <span
                     class="
                        relative
                        transition-colors
                        duration-300
                        delay-200
                        group-hover:text-white
                        ease
                     "
                  >
                     Go home
                  </span>
               </a>
            </div>
            <!-- content - end -->
         </div>
      </div>
   </div>
</template>

<route lang="yaml">
meta:
   layout: 404
</route>
