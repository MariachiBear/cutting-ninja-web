<script setup lang="ts">

// const { t, availableLocales, locale } = useI18n()

// const toggleLocales = () => {
//   // change to some real logic
//   const locales = availableLocales
//   locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
// }
</script>

<!-- <template>
  <nav class="text-xl mt-6">
    <router-link class="icon-btn mx-2" to="/" :title="t('button.home')">
      <carbon-campsite />
    </router-link>

    <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
      <carbon-moon v-if="isDark" />
      <carbon-sun v-else />
    </button>

    <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales">
      <carbon-language />
    </a>

    <router-link class="icon-btn mx-2" to="/about" :title="t('button.about')">
      <carbon-dicom-overlay />
    </router-link>

    <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank" title="GitHub">
      <carbon-logo-github />
    </a>
  </nav>
</template> -->

<template>
  <div class="bg-warm-gray-50 dark:bg-rocket-metallic text-warm-gray-800 dark:text-warm-gray-300 p-4 sm:p-10 lg:p-12 ">
    <footer class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      <div class="flex flex-col gap-5 md:flex-row justify-between items-center border-t border-b py-6 border-warm-gray-300 dark:border-warm-gray-400">
        <nav class="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 md:gap-6">
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
