/** @type {import('@sveltejs/kit').HandleFetch} */
export async function handleFetch({ request, fetch }) {
	const base = process.env.NODE_ENV === 'production' ? '/svelte--using-external-script' : '';
	if (request.url.startsWith('/')) {
		request = new Request(request.url.replace('/', base), request);
	}
	return fetch(request);
}
