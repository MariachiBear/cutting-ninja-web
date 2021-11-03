import colors from 'windicss/colors'
import { defineConfig } from 'windicss/helpers'
import typography from 'windicss/plugin/typography'

const extendedColors = {
  'jet': '#3d3a41',
  'unbleached-silk': '#f8d9c9',
  'apricot': '#FFCDB2',
  'desert-sand': '#E8BAA2',
  'english-lavender': '#B5838D',
  'melon': '#FFB4A2',
  'old-lavender': '#6D6875',
  'pastel-pink': '#E5989B',
  'rocket-metallic': '#7A7682',
  'mountbatten-pink': '#917681',
}

export default defineConfig({
  darkMode: 'class',
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: true,

  plugins: [
    typography(),
  ],

  theme: {
    extend: {
      colors: extendedColors,
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              'color': 'inherit',
              'opacity': 0.75,
              'fontWeight': '500',
              'textDecoration': 'underline',
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
})
