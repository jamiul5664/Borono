import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'next-image-middleware',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // If request is for Next.js image optimizer, redirect/serve the underlying static image
          if (req.url.startsWith('/_next/image')) {
            try {
              const urlObj = new URL(req.url, 'http://localhost');
              const target = urlObj.searchParams.get('url');
              if (target) {
                req.url = target;
              }
            } catch (err) {
              // ignore parse errors
            }
          }
          next();
        });
      }
    }
  ],
  server: {
    port: 3000,
    open: false,
    host: true
  }
});
