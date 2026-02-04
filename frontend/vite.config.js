import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// VITE_API_BASE_URL=http://localhost:5000/

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
