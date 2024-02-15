import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        secure: false,
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      '/src': path.resolve(__dirname, 'client/src'),
    },
  },
  build: {
    rollupOptions: {
      external: ['react-bootstrap'],
    },
  },
});
