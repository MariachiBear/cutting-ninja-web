<script setup lang="ts">
const phrases = [
   "There's no Wrong Way to Eat an URL Shortener",
   'Keep That URL Shortener Complexion',
   'URL Shortener as sure as the sun shines',
   'A Smooth-Running URL Shortener is a Relaxing Experience',
   'Everyone should believe in URL Shortener',
   'URL Shortener innovate your world',
   "There's Only One URL Shortener",
   'The URL Shortener Sign Means Happy Motoring',
   'Get the URL Shortener Habit',
   'URL Shortener moments',
   'Inspired by URL Shortener',
   'Everyone loves URL Shortener',
   '"I Scream, You Scream, We All Scream for URL Shortener"',
   'Prepare To Want URL Shortener',
   'Reach for the URL Shortener',
   '"Tense, Nervous, URL Shortener ?"',
   'URL Shortener shines through',
   'URL Shortener the wise choice',
   '"The Man From URL Shortener, he says \'Yes\'"',
   'Put URL Shortener in your pipe and smoke it!',
   'URL Shortener no one else is better',
   "Where's URL Shortener ?",
   'URL Shortener is so Bracing',
   'Doing It Right Before Your URL Shortener',
   'URL Shortener - what more could you want?',
   "You Can't Top an URL Shortener",
   'Review the facts URL Shortener is the best',
   '"URL Shortener, satisfies the need"',
   'URL Shortener gets me excited',
   '"URL Shortener, When there\'s nothing else"',
   'Make the Most of URL Shortener',
   "Let's URL Shortener !",
   'For That Deep Down Body URL Shortener',
   'URL Shortener after a long day',
   "URL Shortener - a class of it's own",
   "Let's Face The Music and URL Shortener",
   'I wish i was an URL Shortener',
   'URL Shortener Is Our Middle Name',
   'Be inspired by URL Shortener',
   'URL Shortener - It Does a Body Good',
   'Made by URL Shortener',
   'Make Fun of URL Shortener',
   'Grab Life by the URL Shortener',
   'Give the Dog an URL Shortener',
   'URL Shortener for hire',
   'More Than Just an URL Shortener',
   'Free for all URL Shortener',
   'URL Shortener is what the world was waiting for',
   'You Deserve A URL Shortener Today',
   'Let your URL Shortener flow',
   "\"It's fast, it's furious, it's URL Shortener \"",
   "It's Good To Talk URL Shortener",
   "Wouldn't You Like To Be A URL Shortener Too?",
   "Life's Pretty Straight Without URL Shortener",
   'Pleasing URL Shortener the World Over',
   "It's my URL Shortener !",
   'Vorsprung Durch URL Shortener',
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
      <h1 class="font-bold mb-8 md:mb-12 md:text-6xl sm:text-5xl text-4xl">
         {{ activePhrase }}
      </h1>

      <p class="leading-relaxed lg:w-4/5 mb-8 md:mb-12 xl:text-lg">
         It's easy to get tired of long URLs. It's a pain to have to write a link as long as a book.
         For this and more, shorten your URLs and everything will be better.
      </p>

      <ShortUrl />
   </div>
</template>
