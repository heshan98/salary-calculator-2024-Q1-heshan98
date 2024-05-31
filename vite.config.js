import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/salary-calculator-2024-Q1-heshan98/', 
  build: {
    outDir: 'dist', 
  },
  plugins: [react()],
})