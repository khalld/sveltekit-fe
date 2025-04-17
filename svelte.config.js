import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html',
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		prerender: {
			// use relative URLs similar to an anchor tag <a href="/test/1"></a>
			// do not include group layout folders in the path such as /(group)/test/1
			// aggiungi qui tutte le pagine da renderizzare.
			entries: ['/', '/happybd', '/happybd/1', '/happybd/2', '/happybd/3', '/happybd/4', '/happybd/5', '/happybd/6', '/happybd/7', '/happybd/8','/happybd/9', '/happybd/present', '/happybd/present/secret']
		},
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	}
};

export default config;