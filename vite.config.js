import { fileURLToPath, URL } from "node:url";
import path from "path";
import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("src", import.meta.url)),
      vue: "vue/dist/vue.esm.js",
    },
  },
  build: {
    sourcemap: false,
    outDir: "dist",
    rollupOptions: {
      output: {
        // 静态资源分类打包
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },
  },
  plugins: [
    createVuePlugin(),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), "src/assets/svgs")],
      // Specify symbolId format
      symbolId: "icon-[name]",
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import '@/style/index.scss';",
        // sassOptions: { outputStyle: "expanded" }, // 解决dart-sass导致的偶发性乱码
      },
    },
  },
});
