import colors from 'windicss/colors';
import { defineConfig } from 'windicss/helpers';
import typography from 'windicss/plugin/typography';

const extendedColors = {
   jet: '#3D3A41',
   'unbleached-silk': '#F8D9C9',
   apricot: '#FFCDB2',
   'desert-sand': '#E8BAA2',
   'english-lavender': '#B5838D',
   melon: '#FFB4A2',
   'old-lavender': '#6D6875',
   'pastel-pink': '#E5989B',
   'rocket-metallic': '#4E4B53',
   'mountbatten-pink': '#917681',
   'unbleached-sand': '#FAE8DF',
};

const range = (size: number, startAt = 1) => Array.from(Array(size).keys()).map((i) => i + startAt);

const safeClassesColors = () => {
   const colorsNames = Object.keys(extendedColors);
   const bgClasses = colorsNames.map((color) => `bg-${color}`);
   const textClasses = colorsNames.map((color) => `text-${color}`);
   const borderClasses = colorsNames.map((color) => `border-${color}`);
   const fillClasses = colorsNames.map((color) => `fill-${color}`);

   return [...bgClasses, ...textClasses, ...borderClasses, ...fillClasses];
};

const safeDarkClassesColors = () => {
   const colorClasses = safeClassesColors();
   return colorClasses.map((color) => `dark:${color}`);
};

export default defineConfig({
   darkMode: 'class',
   // https://windicss.org/posts/v30.html#attributify-mode
   attributify: true,
   safelist: [
      ...safeClassesColors(),
      ...safeDarkClassesColors(),
      range(100).map((i) => `max-w-${i}/100`),
      range(100).map((i) => `max-h-${i}/100`),
      range(100).map((i) => `min-w-${i}/100`),
      range(100).map((i) => `min-h-${i}/100`),
      range(100).map((i) => `w-${i}/100`),
      range(100).map((i) => `h-${i}/100`),
      range(1000).map((i) => `w-${i}`),
      range(1000).map((i) => `h-${i}`),
      range(1000).map((i) => `z-${i}`),
      range(4000).map((i) => `w-${i}px`),
      range(4000).map((i) => `h-${i}px`),
   ],
   plugins: [typography()],

   theme: {
      extend: {
         colors: extendedColors,
         typography: {
            DEFAULT: {
               css: {
                  maxWidth: '65ch',
                  color: 'inherit',
                  a: {
                     color: 'inherit',
                     opacity: 0.75,
                     fontWeight: '500',
                     textDecoration: 'underline',
                     '&:hover': {
                        opacity: 1,
                        color: colors.teal[600],
                     },
                  },
                  b: { color: 'inherit' },
                  strong: { color: 'inherit' },
                  em: { color: 'inherit' },
                  h1: { color: 'inherit' },
                  h2: { color: 'inherit' },
                  h3: { color: 'inherit' },
                  h4: { color: 'inherit' },
                  code: { color: 'inherit' },
               },
            },
         },
      },
   },
});
