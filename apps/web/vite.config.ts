import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter()],
  resolve: {
    alias: {
      "~": path.resolve(import.meta.dirname, "./app"),
      "@": path.resolve(import.meta.dirname, "./app"),
      "@db": path.resolve(import.meta.dirname, "./api/db"),
    },
    dedupe: ["react", "react-dom"],
  },
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
  optimizeDeps: {
    exclude: ["mongodb", "better-auth", "express", "@repo/shared"],
  },
  ssr: {
    external: ["mongodb", "express"],
  },
});

