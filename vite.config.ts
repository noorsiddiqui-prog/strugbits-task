import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), libInjectCss()],
  resolve: {
    alias: {
      "@": "/src",
      components: "/src/components",
      assets: "/src/assets",
      features: "/src/features",
    },
  },
});
