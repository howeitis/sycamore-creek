import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ isPreview }) => ({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/', // Absolute path set per deployment target via env var
  // `vite preview` should behave like Vercel: serve dist/<route>/index.html
  // for /<route> and never fall back to the home page. The dev server keeps
  // the SPA fallback because nothing is prerendered there.
  appType: isPreview ? 'mpa' : 'spa',
}))
