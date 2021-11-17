<template>
   <div
      class="
         bg-unbleached-sand
         dark:bg-rocket-metallic
         text-theme
         p-4 p-10
         lg:p-12
         shadow-inner
         colors-300
      "
   >
      <footer class="max-w-screen-2xl px-4 md:px-8 mx-auto">
         <div
            class="
               border-t border-b border-warm-gray-400
               flex flex-col
               gap-5
               items-center
               justify-between
               md:flex-row
               py-6
            "
         >
            <nav
               class="
                  flex flex-wrap
                  justify-center
                  md:justify-start
                  gap-x-4 gap-y-2
                  md:gap-6
                  all-300
               "
            >
               <a class="text-btn">Blog</a>
               <a class="text-btn">About</a>
               <a class="text-btn">Contact</a>
               <a class="text-btn">Source Code</a>
            </nav>

            <div class="flex gap-4">
               <a target="_blank" class="icon-btn text-xl">
                  <mdi-twitter />
               </a>
               <a target="_blank" class="icon-btn text-xl">
                  <mdi-linkedin />
               </a>
               <a target="_blank" class="icon-btn text-xl">
                  <mdi-github />
               </a>
               <a target="_blank" class="icon-btn text-xl">
                  <mdi-gitlab />
               </a>
            </div>
         </div>
      </footer>
   </div>
</template>
