import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
    lib:{
      entry:path.resolve(__dirname,'./packages/index.js'),
      name:'hl-xx-ui',
      fileName: (format) => `hl-xx-ui.${format}.js`  // 打包生成的文件名
    },
    rollupOptions:{
      external:['vue'],
      output:{
        globals:{
          vue:'Vue'
        }
      }
    }
  }
})

