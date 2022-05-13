import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    svelte(),
    ViteWebfontDownload()
  ]
})
