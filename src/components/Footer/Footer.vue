<script setup lang="ts">
const { t } = useI18n();
const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;
const twitterLink = import.meta.env.VITE_TWITTER_LINK;
const githubLink = import.meta.env.VITE_GITHUB_LINK;
const gitlabLink = import.meta.env.VITE_GITLAB_LINK;
const linkedinLink = import.meta.env.VITE_LINKEDIN_LINK;
const blogLink = import.meta.env.VITE_BLOG_LINK;
const aboutLink = import.meta.env.VITE_ABOUT_LINK;
const sourceCodeLink = import.meta.env.VITE_SOURCE_CODE_LINK;
</script>

<template>
   <div
      class="bg-unbleached-sand colors-300 dark:bg-rocket-metallic lg:p-12 p-4 p-10 shadow-inner text-theme"
   >
      <footer class="max-w-screen-2xl px-4 md:px-8 mx-auto">
         <div
            class="border-t border-b border-warm-gray-400 flex flex-col gap-5 items-center justify-between md:flex-row py-6"
         >
            <nav
               class="all-300 flex flex-wrap gap-x-4 gap-y-2 justify-center md:gap-6 md:justify-start"
            >
               <a class="text-btn" target="_blank" :href="blogLink">
                  {{ t('label.blog') }}
               </a>
               <a class="text-btn" target="_blank" :href="aboutLink">
                  {{ t('label.about') }}
               </a>
               <a class="text-btn" target="_blank" :href="`mailto:${contactEmail}`">
                  {{ t('label.contact') }}
               </a>
               <a class="text-btn" target="_blank" :href="sourceCodeLink">
                  {{ t('label.source_code') }}
               </a>
            </nav>

            <div class="flex gap-4">
               <a target="_blank" class="icon-btn text-xl" title="Twitter" :href="twitterLink">
                  <mdi-twitter />
               </a>
               <a target="_blank" class="icon-btn text-xl" title="Linked In" :href="linkedinLink">
                  <mdi-linkedin />
               </a>
               <a target="_blank" class="icon-btn text-xl" title="Github" :href="githubLink">
                  <mdi-github />
               </a>
               <a target="_blank" class="icon-btn text-xl" title="Gitlab" :href="gitlabLink">
                  <mdi-gitlab />
               </a>
            </div>
         </div>
      </footer>
   </div>
</template>
