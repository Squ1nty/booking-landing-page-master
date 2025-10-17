import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? 'bookmark-landing-page-master' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})