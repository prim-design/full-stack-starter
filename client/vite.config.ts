import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const API_URL = `${env.VITE_API_URL ?? "http://localhost:3001"}`;
  const PORT = `${env.VITE_PORT ?? "5173"}`;

  return {
    plugins: [react(), TanStackRouterVite()],
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
        "@hooks": "/src/hooks",
        "@services": "/src/services",
        "@providers": "/src/providers",
        "@utils": "/src/utils",
      },
    },
    server: {
      open: true,
      port: parseInt(PORT),
      proxy: {
        "/api": {
          target: API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace("/api", ""),
        },
      },
    },
  };
});
