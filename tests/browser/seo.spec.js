const { test, expect } = require('./fixtures');
const site = 'https://savekewriversideprimaryschool.org/';

for (const [file, type] of [['sitemap.xml', 'application/xml'], ['robots.txt', 'text/plain']]) {
  test(`${file} is served by GET and HEAD with the correct MIME type`, async ({ request }) => {
    const get = await request.get('/' + file);
    expect(get.status()).toBe(200);
    expect(get.headers()['content-type']).toBe(type + '; charset=utf-8');
    const text = await get.text();
    expect(text).toContain(site + (file === 'robots.txt' ? 'sitemap.xml' : 'proposal.html'));
    const head = await request.head('/' + file);
    expect(head.status()).toBe(200);
    expect(head.headers()['content-type']).toBe(get.headers()['content-type']);
    expect(await head.body()).toHaveLength(0);
  });
}

test('sitemap destinations resolve to indexable self-canonical pages', async ({ request }) => {
  const sitemap = await request.get('/sitemap.xml');
  const urls = [...(await sitemap.text()).matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
  expect(urls).toHaveLength(10);
  expect(new Set(urls).size).toBe(10);
  for (const url of urls) {
    const path = new URL(url).pathname;
    const response = await request.get(path);
    expect(response.status(), path).toBe(200);
    const head = (await response.text()).split('</head>')[0];
    expect(head).toContain(`<link rel="canonical" href="${url}">`);
    expect(head).not.toMatch(/name="(?:robots|googlebot)" content="[^\"]*noindex/);
    expect(head).toContain('Independent parent-led campaign.');
  }
});
