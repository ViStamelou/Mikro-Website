import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/mikro-website/', // Set the base path for GitHub Pages
  css: {
    modules: {
      localsConvention: 'camelCase',
    }
  }
})
