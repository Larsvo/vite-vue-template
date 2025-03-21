import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
            `
            @use "@/assets/Styles/01-base/variables" as *;
            @use "@/assets/Styles/01-base/mixins" as *;
        `
      }
    }
  },
  build: {
    cssCodeSplit: false
  },
})
