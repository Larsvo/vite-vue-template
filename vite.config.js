import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath, URL} from "url";
import svgLoader from "vite-svg-loader";
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    svgLoader(),
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
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    cssCodeSplit: false
  },
  
})
