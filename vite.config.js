// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Ghulaman-e-Siddiqui-Akbar-International/', // ← this must match your repo name
  plugins: [react()],
  worker: {
    format: 'es', // Support ES module workers
  },
  optimizeDeps: {
    include: ['pdfjs-dist'], // Pre-bundle pdfjs-dist
  },
});