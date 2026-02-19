import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/', // Absolute path set per deployment target via env var
  build: {
    // defaults are fine for SPA
  },
})
