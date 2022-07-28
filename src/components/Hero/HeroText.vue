<script setup lang="ts">
const { t } = useI18n();

const activePhrase = ref(t(`phrases.${Math.floor(Math.random() * 49)}`, { name: 'Cutting Ninja' }));
</script>

<template>
   <div
      id="hero-text"
      class="flex flex-col gap-10 items-center justify-around lg:items-start lg:text-left lg:max-w-6/12 lg:text-left max-w-11/12 text-center w-full 2xl:gap-15"
   >
      <h1 class="2xl:text-5xl colors-300 font-bold lg:text-4xl md:text-5xl text-4xl text-theme">
         {{ activePhrase }}
      </h1>

      <p class="colors-300 text-theme leading-relaxed lg:w-9/10 xl:text-lg">
         {{ t('label.main_phrase') }}
      </p>

      <ShortUrl />
   </div>
</template>
