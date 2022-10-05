import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from './config/unocss'
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Unocss()
  ],
  build: {
    minify: false, //代码混淆
    lib: {
      entry: './src/entry.ts',
      name: 'SmartyUI',
      fileName: 'smarty-ui', //包名文件，默认是package.json的name
      // formats: ['es', 'umd', 'iife'] //打包多格式文件
    },
    cssCodeSplit: false, //css是否分开打包，false则为一个style.css
    rollupOptions: {
      external: ['vue', 'vue-router'], //提取为外部依赖，不打包进去
      output: {
        globals: {
          vue: 'Vue' //umd,iife模式下为外部依赖提供全局变量
        }
      }
    }
  }
})