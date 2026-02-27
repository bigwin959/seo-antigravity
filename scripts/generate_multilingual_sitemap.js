import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
const content = fs.readFileSync(sitemapPath, 'utf8');

// Simple regex based parser for the current sitemap
const urlRegex = /<url>([\s\S]*?)<\/url>/g;
const urls = [];
let match;

while ((match = urlRegex.exec(content)) !== null) {
    const urlContent = match[1];
    const locMatch = urlContent.match(/<loc>(.*?)<\/loc>/);
    const lastmodMatch = urlContent.match(/<lastmod>(.*?)<\/lastmod>/);
    const changefreqMatch = urlContent.match(/<changefreq>(.*?)<\/changefreq>/);
    const priorityMatch = urlContent.match(/<priority>(.*?)<\/priority>/);

    if (locMatch) {
        // Skip URLs that already have ?lang= to avoid recursion/duplicates
        if (locMatch[1].includes('?lang=')) continue;

        urls.push({
            loc: locMatch[1].trim(),
            lastmod: lastmodMatch ? lastmodMatch[1] : null,
            changefreq: changefreqMatch ? changefreqMatch[1] : null,
            priority: priorityMatch ? priorityMatch[1] : null
        });
    }
}

let newSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

urls.forEach(url => {
    const separator = url.loc.includes('?') ? '&amp;' : '?';

    // English Version (Base)
    newSitemap += `  <url>\n`;
    newSitemap += `    <loc>${url.loc}</loc>\n`;
    if (url.lastmod) newSitemap += `    <lastmod>${url.lastmod}</lastmod>\n`;
    if (url.changefreq) newSitemap += `    <changefreq>${url.changefreq}</changefreq>\n`;
    if (url.priority) newSitemap += `    <priority>${url.priority}</priority>\n`;
    newSitemap += `    <xhtml:link rel="alternate" hreflang="en" href="${url.loc}${separator}lang=en"/>\n`;
    newSitemap += `    <xhtml:link rel="alternate" hreflang="bn" href="${url.loc}${separator}lang=bn"/>\n`;
    newSitemap += `    <xhtml:link rel="alternate" hreflang="x-default" href="${url.loc}"/>\n`;
    newSitemap += `  </url>\n`;

    // Bengali Version (Explicit link)
    newSitemap += `  <url>\n`;
    newSitemap += `    <loc>${url.loc}${separator}lang=bn</loc>\n`;
    if (url.lastmod) newSitemap += `    <lastmod>${url.lastmod}</lastmod>\n`;
    if (url.changefreq) newSitemap += `    <changefreq>${url.changefreq}</changefreq>\n`;
    if (url.priority) newSitemap += `    <priority>${url.priority}</priority>\n`;
    newSitemap += `    <xhtml:link rel="alternate" hreflang="en" href="${url.loc}${separator}lang=en"/>\n`;
    newSitemap += `    <xhtml:link rel="alternate" hreflang="bn" href="${url.loc}${separator}lang=bn"/>\n`;
    newSitemap += `    <xhtml:link rel="alternate" hreflang="x-default" href="${url.loc}"/>\n`;
    newSitemap += `  </url>\n`;
});

newSitemap += `</urlset>`;

fs.writeFileSync(sitemapPath, newSitemap);
console.log('Sitemap finalized with English and Bengali support.');
