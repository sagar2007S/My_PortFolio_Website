import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
<<<<<<< HEAD

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
=======
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
       tailwindcss(),
  ],
>>>>>>> 9fc7285bb19f73ba22a69e77e3be173836693507
})
