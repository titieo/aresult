import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import WindiCSS from 'vite-plugin-windicss';
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';
import path from 'path';
import { minifyHtml, injectHtml } from 'vite-plugin-html';
import pkg from './package.json';
import { VitePWA } from 'vite-plugin-pwa';
import { svelte } from '@sveltejs/vite-plugin-svelte';
export default defineConfig({
  //   root: './src/'
  publicDir: 'assets',
  plugins: [
    createSvgSpritePlugin({}),
    svelte(),
    minifyHtml(),
    injectHtml({
      data: {
        version: pkg.version,
        bugs: `${pkg.bugs}/new`,
        author: pkg.author.name || pkg.author,
        license: pkg.license,
      },
    }),
    WindiCSS({ transformCSS: 'pre' }),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    VitePWA(),
  ],
  build: {
    outDir: path.join(__dirname, 'website'),
  },
  server: {
    open: true,
  },
});
