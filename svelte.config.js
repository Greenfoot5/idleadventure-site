import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = {
	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [vitePreprocess(),
		mdsvex({
			// The default mdsvex extension is .svx; this overrides that.
			extensions: ['.md'],
			layout: {
				_: join(__dirname, '/src/routes/post.svelte'),
			},
			smartypants: {
				ellipses: false,
				dashes: false,
			}
		})],
	kit: {
		adapter: adapter(),
		prerender : {
			handleHttpError: "warn",
			entries: [
				// Add any hidden news posts here
			]
		}
	},
};

export default config;
