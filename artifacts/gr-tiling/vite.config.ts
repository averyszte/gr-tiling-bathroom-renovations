import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const rawPort = process.env.PORT;
const port = rawPort ? Number(rawPort) : 3000;

const basePath = process.env.BASE_PATH ?? "/";

// Vite plugin: load the compiled CSS asynchronously so it no longer
// blocks the initial render. Safe for React SPAs — the CSS (~20KB)
// loads in ~285ms, well before React finishes executing (~2,000ms),
// so there is no unstyled flash. The noscript fallback covers users
// with JS disabled.
const asyncCssPlugin = {
  name: "async-css",
  apply: "build" as const,
  transformIndexHtml(html: string) {
    return html.replace(
      /<link rel="stylesheet" crossorigin href="([^"]+\.css)">/g,
      (_match: string, href: string) =>
        `<link rel="preload" as="style" crossorigin href="${href}" onload="this.onload=null;this.rel='stylesheet'">` +
        `<noscript><link rel="stylesheet" crossorigin href="${href}"></noscript>`,
    );
  },
};

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
    asyncCssPlugin,
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // React core — changes rarely, cached across most deployments
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/") ||
            id.includes("node_modules/scheduler/")
          ) {
            return "vendor-react";
          }
          // Radix UI primitives
          if (id.includes("node_modules/@radix-ui")) {
            return "vendor-radix";
          }
          // Lucide icon set
          if (id.includes("node_modules/lucide-react")) {
            return "vendor-icons";
          }
          // Everything else in node_modules
          if (id.includes("node_modules")) {
            return "vendor-misc";
          }
        },
      },
    },
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
