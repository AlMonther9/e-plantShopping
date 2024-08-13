// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/shoppingreact/",
  build: {
    outDir: 'dist', // Ensure this matches the output directory
  },
  plugins: [react()],
});
