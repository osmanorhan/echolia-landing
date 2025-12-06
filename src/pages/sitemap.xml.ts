import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const origin = site?.origin ?? 'https://echolia.com';

  const staticPaths = [
    '/',
    '/download/',
    '/blog/',
    '/about/',
    '/changelog/',
    '/privacy/',
    '/terms/',
    '/docs/',
    '/sync/'
  ];

  const blogPosts = (await getCollection('blog'))
    .filter((post) => !post.data.draft)
    .map((post) => `/blog/${post.slug}/`);

  const allPaths = Array.from(new Set([...staticPaths, ...blogPosts]));

  const urls = allPaths
    .map((path) => {
      const loc = new URL(path, origin).toString();
      return `<url><loc>${loc}</loc></url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};

