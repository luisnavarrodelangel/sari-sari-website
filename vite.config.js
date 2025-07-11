import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
const repo = process.env.REPO || 'sari-sari-website'; // Default to your current repo

export default defineConfig({
  plugins: [vue(), vueDevTools()],
  base: `/${repo}/`, // Sets the correct base path dynamically
  // resolve: {
  //   alias: {
  //     '@': fileURLToPath(new URL('./src', import.meta.url)),
  //   },
  // },
  server: {
    historyApiFallback: true, // Enable fallback for development
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // Ensure single-page app behavior
      },
    },
  },
});