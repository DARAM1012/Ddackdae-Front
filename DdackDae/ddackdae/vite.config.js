// vite.config.js
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      // '/api' 로 오는 요청은 모두 백엔드(34.47.87.26 또는 localhost:8080)로 포워딩
      '/api': {
        target: 'http://34.47.87.26',   // 또는 로컬 테스트라면 'http://localhost:8080'
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '/api')
      },
    }
  }
})
