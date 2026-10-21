import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Allow Cloudflare quick-tunnel hostnames for temporary demos
    allowedHosts: ['.trycloudflare.com'],
  },
})
