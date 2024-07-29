import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from "path";
const pathResolve = (dir) => resolve(__dirname, ".", dir);
console.log(pathResolve, "111");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    host:'localhost',
    port: 8080,
  },
  resolve:{
    alias:[{find: "@", replacement: pathResolve("src") }],
  }
})
