<script setup lang="ts">
const { t } = useI18n();
const phrases = [
   "There's no Wrong Way to Eat a Cutting Ninja",
   'Keep That Cutting Ninja Complexion',
   'Cutting Ninja as sure as the sun shines',
   'A Smooth-Running Cutting Ninja is a Relaxing Experience',
   'Everyone should believe in Cutting Ninja',
   'Cutting Ninja innovate your world',
   "There's Only One Cutting Ninja",
   'The Cutting Ninja Sign Means Happy Motoring',
   'Get the Cutting Ninja Habit',
   'Cutting Ninja moments',
   'Inspired by Cutting Ninja',
   'Everyone loves Cutting Ninja',
   '"I Scream, You Scream, We All Scream for Cutting Ninja"',
   'Prepare To Want Cutting Ninja',
   'Reach for the Cutting Ninja',
   '"Tense, Nervous, Cutting Ninja ?"',
   'Cutting Ninja shines through',
   'Cutting Ninja the wise choice',
   '"The Man From Cutting Ninja, he says \'Yes\'"',
   'Put Cutting Ninja in your pipe and smoke it!',
   'Cutting Ninja no one else is better',
   "Where's Cutting Ninja ?",
   'Cutting Ninja is so Bracing',
   'Doing It Right Before Your Cutting Ninja',
   'Cutting Ninja - what more could you want?',
   "You Can't Top a Cutting Ninja",
   'Review the facts Cutting Ninja is the best',
   '"Cutting Ninja, satisfies the need"',
   'Cutting Ninja gets me excited',
   '"Cutting Ninja, When there\'s nothing else"',
   'Make the Most of Cutting Ninja',
   "Let's Cutting Ninja !",
   'For That Deep Down Body Cutting Ninja',
   'Cutting Ninja after a long day',
   "Cutting Ninja - a class of it's own",
   "Let's Face The Music and Cutting Ninja",
   'I wish i was a Cutting Ninja',
   'Cutting Ninja Is Our Middle Name',
   'Be inspired by Cutting Ninja',
   'Cutting Ninja - It Does a Body Good',
   'Made by Cutting Ninja',
   'Make Fun of Cutting Ninja',
   'Grab Life by the Cutting Ninja',
   'Give the Dog a Cutting Ninja',
   'Cutting Ninja for hire',
   'More Than Just a Cutting Ninja',
   'Free for all Cutting Ninja',
   'Cutting Ninja is what the world was waiting for',
   'You Deserve A Cutting Ninja Today',
   'Let your Cutting Ninja flow',
   "\"It's fast, it's furious, it's Cutting Ninja \"",
   "It's Good To Talk Cutting Ninja",
   "Wouldn't You Like To Be A Cutting Ninja Too?",
   "Life's Pretty Straight Without Cutting Ninja",
   'Pleasing Cutting Ninja the World Over',
   "It's my Cutting Ninja !",
   'Vorsprung Durch Cutting Ninja',
];

const activePhrase = ref('');

tryOnMounted(() => {
   activePhrase.value = phrases[Math.floor(Math.random() * phrases.length)];
});
</script>

<template>
   <div
      class="
         text-theme
         colors-300
         flex flex-col
         items-center
         justify-center
         lg:items-start lg:text-left lg:py-12 lg:w-6/12
         text-center
         w-11/12
         xl:py-24
      "
   >
      <h1 class="font-bold mb-8 md:mb-12 md:text-5xl lg:text-4xl sm:text-5xl text-4xl">
         {{ activePhrase }}
      </h1>

      <p class="leading-relaxed lg:w-9/10 mb-8 md:mb-12 xl:text-lg">
         {{ t('label.main_phrase') }}
      </p>

      <ShortUrl />
   </div>
</template>
