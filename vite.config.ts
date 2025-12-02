import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Critical for Vercel root domain deployment
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})