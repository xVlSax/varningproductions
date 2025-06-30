// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
//   theme: {
//     extend: {
//       fontFamily: {
//         punk: ['"Staatliches"', 'sans-serif'],
//         FestPunk: ['"FestPunk"', 'sans-serif'],
//       },
//       animation: {
//         'fade-in': 'fadeIn 1.5s ease-out forwards',
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0' },
//           '100%': { opacity: '1' },
//         },
//       },
//     },
//   },
//   plugins: [],
// }
// tailwind.config.js
import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        punk: ['"Staatliches"', 'sans-serif'],
        FestPunk: ['"FestPunk"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
})
