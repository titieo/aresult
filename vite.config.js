import legacy from '@vitejs/plugin-legacy';
import path from 'path';
import { defineConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss';

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
