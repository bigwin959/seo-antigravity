import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://bigwinofficial.com';
const TODAY = new Date().toISOString().split('T')[0];

// Define all routes manually to ensure nothing is missed from App.tsx
// Priority: 1.0 (Home), 0.9 (Main Sections), 0.8 (Sub-sections), 0.7 (Blogs/Guides)
const routes = [
    // Core Pages
    { path: '/', priority: '1.0', changefreq: 'daily' },
    { path: '/about', priority: '0.8', changefreq: 'monthly' },
    { path: '/contact', priority: '0.7', changefreq: 'monthly' },
    { path: '/app-download', priority: '0.9', changefreq: 'weekly' },
    { path: '/is-bigwin959-legit', priority: '0.9', changefreq: 'monthly' },
    { path: '/affiliate', priority: '0.7', changefreq: 'monthly' },

    // Comparisons (High Value SEO)
    { path: '/comparisons', priority: '0.9', changefreq: 'weekly' },
    { path: '/comparisons/bet365-bangladesh-review', priority: '1.0', changefreq: 'weekly' },
    { path: '/comparisons/1xbet-bangladesh-review', priority: '1.0', changefreq: 'weekly' },

    // Bonuses
    { path: '/bonuses', priority: '0.9', changefreq: 'weekly' },
    { path: '/bonuses/today', priority: '0.9', changefreq: 'daily' },
    { path: '/bonuses/first-deposit', priority: '0.8', changefreq: 'weekly' },
    { path: '/bonuses/daily', priority: '0.8', changefreq: 'weekly' },
    { path: '/bonuses/vip', priority: '0.8', changefreq: 'monthly' },

    // Guides
    { path: '/guides', priority: '0.8', changefreq: 'weekly' },
    { path: '/guides/registration', priority: '0.8', changefreq: 'monthly' },
    { path: '/guides/deposit', priority: '0.9', changefreq: 'monthly' },
    { path: '/guides/bkash-deposit', priority: '0.9', changefreq: 'monthly' },
    { path: '/guides/kbzpay-deposit', priority: '0.9', changefreq: 'monthly' },
    { path: '/guides/withdrawal', priority: '0.9', changefreq: 'monthly' },
    { path: '/guides/cricket', priority: '0.9', changefreq: 'weekly' },
    { path: '/guides/cricket/how-to-bet', priority: '0.8', changefreq: 'monthly' },
    { path: '/guides/cricket/bet-types', priority: '0.8', changefreq: 'monthly' },
    { path: '/guides/cricket/exchange-vs-sportsbook', priority: '0.8', changefreq: 'monthly' },
    { path: '/guides/cricket/settlement-rules', priority: '0.8', changefreq: 'monthly' },
    { path: '/guides/cricket/confusing-situations', priority: '0.8', changefreq: 'monthly' },
    { path: '/guides/cricket/faq', priority: '0.8', changefreq: 'monthly' },
    { path: '/guides/sports-betting', priority: '0.8', changefreq: 'monthly' },
    { path: '/guides/live-casino', priority: '0.8', changefreq: 'monthly' },
    { path: '/guides/aviator-game', priority: '0.9', changefreq: 'weekly' },

    // Providers
    { path: '/providers', priority: '0.8', changefreq: 'monthly' },
    { path: '/providers/pragmatic', priority: '0.7', changefreq: 'monthly' },
    { path: '/providers/jili', priority: '0.7', changefreq: 'monthly' },
    { path: '/providers/jdb', priority: '0.7', changefreq: 'monthly' },
    { path: '/providers/fc', priority: '0.7', changefreq: 'monthly' },
    { path: '/providers/bng', priority: '0.7', changefreq: 'monthly' },
    { path: '/providers/spribe', priority: '0.7', changefreq: 'monthly' },
    { path: '/providers/bt', priority: '0.7', changefreq: 'monthly' },
    { path: '/providers/pgsoft', priority: '0.7', changefreq: 'monthly' },
    { path: '/providers/exchange-sports', priority: '0.7', changefreq: 'monthly' },
    { path: '/providers/ibc-sports', priority: '0.7', changefreq: 'monthly' },
    { path: '/providers/sbo-sports', priority: '0.7', changefreq: 'monthly' },
    { path: '/providers/evolution-gaming', priority: '0.7', changefreq: 'monthly' },
    { path: '/providers/sa-gaming', priority: '0.7', changefreq: 'monthly' },
    { path: '/providers/sexy-gaming', priority: '0.7', changefreq: 'monthly' },

    // Top Games
    { path: '/top-slot-games', priority: '0.8', changefreq: 'weekly' },

    // Blogs
    { path: '/blog', priority: '0.8', changefreq: 'weekly' },
    { path: '/blog/online-gaming-bangladesh-local-payments', priority: '0.7', changefreq: 'monthly' },
    { path: '/blog/beginners-guide-bd-mm-2025', priority: '0.7', changefreq: 'monthly' },
    { path: '/blog/myanmar-kbzpay-wavepay-guide', priority: '0.7', changefreq: 'monthly' },
    { path: '/blog/rtp-volatility-slots-explained', priority: '0.7', changefreq: 'monthly' },
    { path: '/blog/aviator-myths-facts-responsible-tips', priority: '0.7', changefreq: 'monthly' },
    { path: '/blog/cricket-betting-tips-beginners-honest', priority: '0.7', changefreq: 'monthly' },
    { path: '/blog/app-vs-browser-comparison', priority: '0.7', changefreq: 'monthly' },
    { path: '/blog/payment-troubleshooting-delays', priority: '0.7', changefreq: 'monthly' },
    { path: '/blog/10-common-mistakes-avoid', priority: '0.7', changefreq: 'monthly' },
    { path: '/blog/safety-checklist-online-gaming', priority: '0.7', changefreq: 'monthly' },
    { path: '/blog/bkash-vs-nagad-betting-payment-comparison', priority: '0.7', changefreq: 'monthly' }
];

const generateSitemap = () => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

    routes.forEach(route => {
        xml += `  <url>
    <loc>${DOMAIN}${route.path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>
`;
    });

    xml += `</urlset>`;

    const outputPath = path.join(__dirname, '../public', 'sitemap.xml');
    fs.writeFileSync(outputPath, xml);
    console.log(`✅ Sitemap generated at ${outputPath} with ${routes.length} URLs`);
};

generateSitemap();
