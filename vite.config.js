import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import WindiCSS from 'vite-plugin-windicss';
import path from 'path';
import { minifyHtml, injectHtml } from 'vite-plugin-html';
import pkg from './package.json';
export default defineConfig({
  root: './src/',
  publicDir: 'assets',
  plugins: [
    minifyHtml(),
    injectHtml({
      data: {
        version: pkg.version,
      },
    }),
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
