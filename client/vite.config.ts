import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Avoid Windows/OneDrive/AV locking issues in node_modules/.vite
  cacheDir: path.join(process.env.LOCALAPPDATA ?? process.cwd(), 'giash-vite-cache'),
  server: {
    port: 3000,
  },
})