<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
   <div
      class="
         bg-unbleached-sand
         colors-300
         dark:bg-rocket-metallic
         lg:p-12
         p-4 p-10
         shadow-inner
         text-theme
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
                  all-300
                  flex flex-wrap
                  gap-x-4 gap-y-2
                  justify-center
                  md:gap-6 md:justify-start
               "
            >
               <a class="text-btn" target="_blank" href="https://nnjct.pw/DiSUi">
                  {{ t('label.blog') }}
               </a>
               <a class="text-btn" target="_blank" href="https://nnjct.pw/tp-Ph">
                  {{ t('label.about') }}
               </a>
               <a class="text-btn" target="_blank" href="mailto:contact@nnjct.pw">
                  {{ t('label.contact') }}
               </a>
               <a class="text-btn" target="_blank" href="https://nnjct.pw/adfYv">
                  {{ t('label.source_code') }}
               </a>
            </nav>

            <div class="flex gap-4">
               <a
                  target="_blank"
                  class="icon-btn text-xl"
                  title="Twitter"
                  href="https://nnjct.pw/yzFOO"
               >
                  <mdi-twitter />
               </a>
               <a
                  target="_blank"
                  class="icon-btn text-xl"
                  title="Linked In"
                  href="https://nnjct.pw/VvY6B"
               >
                  <mdi-linkedin />
               </a>
               <a
                  target="_blank"
                  class="icon-btn text-xl"
                  title="Github"
                  href="https://nnjct.pw/6sa6L"
               >
                  <mdi-github />
               </a>
               <a
                  target="_blank"
                  class="icon-btn text-xl"
                  title="Gitlab"
                  href="https://nnjct.pw/FnNhb"
               >
                  <mdi-gitlab />
               </a>
            </div>
         </div>
      </footer>
   </div>
</template>
