import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');
const src = join(root, 'src');
const failures = [];
const warnings = [];
const today = '2026-07-16';
const essentialVpn = [
  'vpn-basics',
  'vpn-for-public-wifi',
  'vpn-privacy-limits',
  'choosing-a-vpn',
  'vpn-protocols-explained',
  'vpn-and-dns-leaks',
  'vpn-kill-switch-guide',
  'free-vpn-risks',
  'vpn-on-mobile',
  'vpn-for-travel',
  'vpn-for-remote-work',
  'vpn-vs-tor',
];

const walk = (dir, filter = () => true) => {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((name) => {
    const file = join(dir, name);
    const stat = statSync(file);
    if (stat.isDirectory()) return walk(file, filter);
    return filter(file) ? [file] : [];
  });
};

const read = (file) => readFileSync(file, 'utf8');
const stripTags = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
const words = (text) => stripTags(text).split(/\s+/).filter(Boolean);
const articleBody = (html) => html.match(/<div class="hc-prose">([\s\S]*?)<\/div>\s*<aside/)?.[1] ?? html;
const fail = (message) => failures.push(message);
const warn = (message) => warnings.push(message);

const sourceFiles = walk(src, (file) => /\.(astro|ts|js|mjs)$/.test(file));
const sourceText = sourceFiles.map((file) => read(file)).join('\n');

for (const bad of ['HexaCyber ', 'HexaCyber<', 'HexaCyber/', 'HexaCyber.']) {
  if (sourceText.includes(bad)) fail(`Old brand spelling found in source: ${bad.trim()}`);
}
for (const bad of ['lorem ipsum', 'TODO:', 'starter policy']) {
  if (sourceText.toLowerCase().includes(bad)) fail(`Placeholder-like text found in source: ${bad}`);
}
if (!sourceText.includes('hexacybertprivate@gmail.com')) fail('Public contact email is missing from source.');
if (!existsSync(join(root, 'public', 'CNAME')) || read(join(root, 'public', 'CNAME')).trim() !== 'hexacybert.xyz') {
  fail('public/CNAME must contain exactly hexacybert.xyz.');
}

for (const match of sourceText.matchAll(/\b(20\d{2}-\d{2}-\d{2})\b/g)) {
  if (match[1] > today) fail(`Future date found in source: ${match[1]}`);
}

if (!existsSync(dist)) {
  warn('dist/ does not exist yet; run npm run build before the full HTML/link audit.');
} else {
  const htmlFiles = walk(dist, (file) => file.endsWith('.html'));
  const allHtml = htmlFiles.map((file) => read(file)).join('\n');
  const frHtml = htmlFiles
    .filter((file) => relative(dist, file).replaceAll('\\', '/').startsWith('fr/'))
    .map((file) => read(file))
    .join('\n');
  const visibleFrText = stripTags(frHtml);

  for (const hiddenLang of ['/de/', '/it/', '/pt/', '/nl/']) {
    if (existsSync(join(dist, hiddenLang.slice(1)))) fail(`Hidden language directory is published: ${hiddenLang}`);
    if (allHtml.includes(`href="${hiddenLang}`) || allHtml.includes(`>${hiddenLang.slice(1, -1)}<`)) {
      fail(`Hidden language appears in generated HTML: ${hiddenLang}`);
    }
  }

  for (const bad of ['http://localhost', 'HexaCyber ']) {
    if (allHtml.includes(bad)) fail(`Generated HTML contains forbidden or untranslated text: ${bad}`);
  }
  for (const bad of ['Cybersecurite', 'Vie privee', 'A propos', 'Publie', 'Mis a jour', 'Apercu']) {
    if (visibleFrText.includes(bad)) fail(`French HTML contains forbidden or untranslated text: ${bad}`);
  }

  if (!allHtml.includes('window.location.replace') || !allHtml.includes('/fr/')) {
    fail('Root redirect must include immediate JavaScript location.replace("/fr/").');
  }
  if (!allHtml.includes('https://hexacybert.xyz/fr/')) fail('Canonical root target /fr/ is missing.');

  const sourceCounts = new Map();
  const paragraphMap = new Map();
  const articleTexts = [];
  for (const file of htmlFiles.filter((file) => essentialVpn.some((slug) => file.endsWith(join('fr', 'articles', slug, 'index.html'))))) {
    const html = read(file);
    const rel = relative(dist, file).replaceAll('\\', '/');
    const body = articleBody(html);
    const text = stripTags(body);
    articleTexts.push([rel, new Set(text.toLowerCase().split(/[^a-zà-ÿ0-9]+/).filter((word) => word.length > 3))]);

    const sources = (html.match(/<section id="sources">[\s\S]*?<\/section>/)?.[0].match(/<li>/g) ?? []).length;
    sourceCounts.set(rel, sources);

    for (const paragraph of html.matchAll(/<p>([\s\S]*?)<\/p>/g)) {
      const clean = stripTags(paragraph[1]).toLowerCase();
      if (clean.split(/\s+/).length <= 24) continue;
      const seen = paragraphMap.get(clean);
      if (seen && seen !== rel) fail(`Duplicate long paragraph in ${seen} and ${rel}`);
      paragraphMap.set(clean, rel);
    }
  }

  for (const slug of essentialVpn) {
    const file = join(dist, 'fr', 'articles', slug, 'index.html');
    if (!existsSync(file)) {
      fail(`Essential French VPN article is missing: ${slug}`);
      continue;
    }
    const html = read(file);
    const count = words(articleBody(html)).length;
    const rel = `fr/articles/${slug}/index.html`;
    if (count < 800) fail(`French VPN article ${slug} has ${count} words; expected at least 800.`);
    if ((sourceCounts.get(rel) ?? 0) < 3) fail(`French VPN article ${slug} has fewer than 3 sources.`);
  }

  for (let i = 0; i < articleTexts.length; i += 1) {
    for (let j = i + 1; j < articleTexts.length; j += 1) {
      const [aName, a] = articleTexts[i];
      const [bName, b] = articleTexts[j];
      const intersection = [...a].filter((item) => b.has(item)).length;
      const union = new Set([...a, ...b]).size;
      if (union > 0 && intersection / union > 0.97) fail(`Excessive article similarity: ${aName} and ${bName}`);
    }
  }

  const internalLinks = [...allHtml.matchAll(/\s(?:href|src)="(\/[^"#?]+)(?:[#?][^"]*)?"/g)].map((match) => match[1]);
  for (const href of new Set(internalLinks)) {
    if (href.startsWith('//')) continue;
    const target = join(dist, href.replace(/^\//, ''));
    const ok = existsSync(target) || existsSync(`${target}.html`) || existsSync(join(target, 'index.html'));
    if (!ok) fail(`Internal link target missing: ${href}`);
  }

  const sitemap = existsSync(join(dist, 'sitemap-index.xml')) ? read(join(dist, 'sitemap-index.xml')) : '';
  if (sitemap && !sitemap.includes('hexacybert.xyz')) fail('Sitemap does not use the production domain.');
}

if (warnings.length) {
  console.warn(warnings.map((message) => `WARN: ${message}`).join('\n'));
}
if (failures.length) {
  console.error(failures.map((message) => `FAIL: ${message}`).join('\n'));
  process.exit(1);
}
console.log('Content audit passed.');
