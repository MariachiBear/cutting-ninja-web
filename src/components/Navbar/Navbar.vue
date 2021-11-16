<script setup lang="ts">
import { isDark, toggleDark } from '~/composables';

const email = ref('');

const sourceImg = computed(
   () =>
      `https://source.boringavatars.com/bauhaus/120/${email.value}?colors=E8BAA2,B5838D,4e4b53,E5989B`
);

// watch(email, (newValue) => {
//    sourceImg.value = `https://source.boringavatars.com/bauhaus/120/${newValue}?colors=F8D9C9,B5838D,3D3A41,E5989B`;
// });

const isDarkDelayed = useDebounce(isDark, 150);
const [isLoginModalOpen, toggleIsLoginModalOpen] = useToggle(false);

const { t } = useI18n();
</script>

<template>
   <header
      class="
         absolute
         colors-300
         flex flex-row
         items-center
         justify-between
         left-0
         lg:p-4
         p-2
         text-theme
         top-0
         w-full
      "
   >
      <a
         href="/"
         class="font-bold gap-1 inline-flex items-center text-xl xl:text-3xl"
         aria-label="logo"
      >
         <mdi-knife class="md:text-5xl text-english-lavender text-3xl" />
         URL Shortener
      </a>

      <nav class="flex flex-row gap-2 lg:gap-4">
         <button
            class="flex flex-col icon-btn relative text-xl xl:text-2xl"
            :title="t('button.toggle_dark')"
            @click="toggleDark()"
         >
            <mdi-weather-night
               class="animate-spin dark:animate-none opacity-300"
               :class="[!isDarkDelayed ? 'opacity-0' : 'opacity-100']"
            />
            <mdi-white-balance-sunny
               class="absolute animate-none dark:animate-spin opacity-300"
               :class="[isDarkDelayed ? 'opacity-0' : 'opacity-100']"
            />
         </button>
         <button
            class="flex flex-col icon-btn relative text-xl xl:text-2xl"
            :title="t('button.toggle_dark')"
            @click="toggleIsLoginModalOpen()"
         >
            <mdi-logout-variant
               class="opacity-300"
               :class="[!isDark ? 'opacity-0' : 'opacity-100']"
            />
            <mdi-login-variant
               class="absolute opacity-300"
               :class="[isDark ? 'opacity-0' : 'opacity-100']"
            />
         </button>
      </nav>
   </header>
   <Dialog v-model="isLoginModalOpen">
      <img
         :src="sourceImg"
         class="
            2xl:w-50 2xl:h-50
            3xl:w-60 3xl:h-60
            4k:w-100 4k:h-100
            4xl:w-65 4xl:h-65
            5xl:w-80 5xl:h-80
            bg-accent bg-opacity-20
            h-30
            lg:w-40 lg:h-40
            md:w-35 md:h-35
            object-contain
            rounded-full
            shadow-md
            w-30
         "
         alt="logo"
      />
      <input v-model="email" type="text" />
   </Dialog>
</template>
