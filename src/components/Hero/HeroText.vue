<script setup lang="ts">
const { t } = useI18n();
const phrases = [
   'Get more from life with Cutting Ninja.',
   'Cutting Ninja inside you.',
   "It's time to think about Cutting Ninja.",
   'Cutting Ninja, satisfies the need.',
   "I'm Not Going to Pay A Lot For This Cutting Ninja.",
   'How Do You Eat Your Cutting Ninja?',
   "What's In Your Cutting Ninja?",
   "Cutting Ninja enjoy when no-one's around.",
   'Cutting Ninja rules.',
   'We Bring Cutting Ninja to Life.',
   "Mamma Mia, That'so Spicy Cutting Ninja!",
   'Cutting Ninja, just the best.',
   'Cutting Ninja, the fresh maker.',
   'Go To Work On A Cutting Ninja.',
   'I want more, I want Cutting Ninja.',
   'Saved by Cutting Ninja',
   'Cutting Ninja have another serving.',
   'If You Want To Get Ahead, Get A Cutting Ninja.',
   "Sweet as the Moment When the Cutting Ninja Went 'Pop'",
   "I'd walk a mile for Cutting Ninja.",
   'Simple, Impartial Cutting Ninja.',
   'I scream, You Scream, We All Scream for Cutting Ninja.',
   'I need Cutting Ninja right now.',
   'Get More From Cutting Ninja.',
   'Melts In Your Cutting Ninja, Not In Your Hand.',
   'Cutting Ninja as sure as the sun shines.',
   "There's Always Room For Cutting Ninja.",
   'Cutting Ninja opens the flood gates.',
   "Cutting Ninja, try it, you'll like it!",
   'Where the hell is Cutting Ninja?',
   'The one and only Cutting Ninja.',
   'The Cutting Ninja is Mightier than the Sword.',
   'All you require is Cutting Ninja.',
   'Just Like Cutting Ninja Used To Make.',
   'Cutting Ninja groove.',
   'The top pick... Cutting Ninja.',
   "Does the Hard Cutting Ninja, So You Don't Have To.",
   'You Can Do It When You Cutting Ninja It.',
   'With A Name Like Cutting Ninja, It Has To Be Good.',
   "Mama's got the Magic of Cutting Ninja.",
   'My Cutting Ninja.',
   'The original Cutting Ninja.',
   'Driven by Cutting Ninja.',
   "Don't live a Little, live a Cutting Ninja.",
   "I'd do anything for Cutting Ninja.",
   'One Cutting Ninja is better than two of something else.',
   "Cutting Ninja, it's a kind of magic.",
   'Cutting Ninja when only the best will do.',
   "If You've Got the Time, We've Got the Cutting Ninja.",
   'Cutting Ninja, one for all.',
];
const activePhrase = ref(phrases[Math.floor(Math.random() * phrases.length)]);
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
