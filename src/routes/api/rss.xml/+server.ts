// IMPORTANT: update all these property values in src/lib/config.js
import { siteTitle, siteDescription, siteURL, siteLink } from '$lib/config'
import posts from '$lib/ts/posts';

export const prerender = true;

export const GET = async () => {
    const data = posts;

    const body = render(data)
    const headers = {
        'Cache-Control': `max-age=0, s-max-age=${600}`,
        'Content-Type': 'application/xml',
    }
    return new Response(
        body,
        {
            status: 200,
            headers,
        }
    )
};


//Be sure to review and replace any applicable content below!
const render = (/** @type {any[]} */ posts: any[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${siteTitle}</title>
<description>${siteDescription}</description>
<link>${siteLink}</link>
<atom:link href="https://${siteURL}/api/rss.xml" rel="self" type="application/rss+xml"/>
${posts
    .map(
        (post) => `<item>
<guid isPermaLink="true">https://${siteURL}/news/${post.slug}</guid>
<title>${post.title.replace("&", "&amp;")}</title>
<link>https://${siteURL}/news/${post.slug}</link>
<description>${post.excerpt}</description>
<pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>`
    )
    .join('')}
</channel>
</rss>
`;
