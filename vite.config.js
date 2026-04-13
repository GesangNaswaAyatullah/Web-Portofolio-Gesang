import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Website.Portofolio.Gesang/',
  plugins: [
    tailwindcss(),
  ],
})