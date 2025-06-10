import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins:
    [
      vue(),
      legacy({
        targets: ['defaults', 'not IE 11']
      })
    ],
  // 别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  // 服务器配置
  server: {
    port: 2025,
    host: '0.0.0.0'
  }
})
