import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: [vitePreprocess(),
		mdsvex({
			// The default mdsvex extension is .svx; this overrides that.
			extensions: ['.md'],
			layout: {
				_: 'src/routes/post.svelte',
			},
			smartypants: {
				ellipses: false,
				dashes: false,
			}
		})],
	kit: { adapter: adapter() },
	extensions: ['.svelte', '.svx']
};

export default config;
