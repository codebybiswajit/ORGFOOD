import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dns from "node:dns";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // root: path.resolve(__dirname, 'src'),
  plugins: [react()],
  base: "/",
  server: {
    proxy: {
      "/api": "http://localhost:3000/",
    },
    port: 4000,
  },
});
