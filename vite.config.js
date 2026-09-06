import { fileURLToPath, URL } from 'node:url'
import process from 'node:process'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue({
      // Keep scoped CSS IDs identical for the static renderer and browser bundle.
      features: { componentIdGenerator: 'filepath' },
      template: { compilerOptions: { comments: false } },
    }),
    ...(process.env.NODE_ENV === 'development' ? [vueDevTools()] : []),
  ],
  build: { manifest: true },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
