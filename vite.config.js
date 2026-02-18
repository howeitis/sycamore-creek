import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Use relative paths for universal deployment (Netlify + GitHub Pages)
  build: {
    // defaults are fine for SPA
  },
})
