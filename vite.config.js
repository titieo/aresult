import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import WindiCSS from 'vite-plugin-windicss';
import path from 'path';
export default defineConfig({
  root: './src/',
  publicDir: 'assets',
  plugins: [
    WindiCSS(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  build: {
    outDir: path.join(__dirname, 'website'),
  },
  server: {
    open: true,
  },
});
