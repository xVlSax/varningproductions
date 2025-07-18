import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        punk: ['Staatliches', 'sans-serif'],
        fest: ['FestPunk', 'sans-serif'],
        defused: ['Defused', 'sans-serif'],
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
