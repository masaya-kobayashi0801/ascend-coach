import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/ascend-coach/" : "/", // 必要に応じて base を変更
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()], // componentTagger() を削除
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
