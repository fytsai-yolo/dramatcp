import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE, withBase } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		// context.site is the bare domain; resolve it against the base path so the
		// feed's own channel <link> points at the site root, not the domain root.
		site: new URL(withBase('/'), context.site),
		items: posts.map((post) => ({
			...post.data,
			link: withBase(`blog/${post.id}/`),
		})),
	});
}
