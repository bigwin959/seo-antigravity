import fs from 'fs';
import path from 'path';

const enPath = path.resolve('public/locales/en/translation.json');
const bnPath = path.resolve('public/locales/bn/translation.json');

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const bn = JSON.parse(fs.readFileSync(bnPath, 'utf8'));

// Evolution Keywords
const keywords = [
    "Evolution Gaming",
    "live casino",
    "Lightning Roulette",
    "Crazy Time",
    "live dealer",
    "game shows",
    "Evolution games"
];

// Ensure valid objects
if (!en.providers) en.providers = {};
if (!en.providers.evolution) en.providers.evolution = {};
if (!en.providers.evolution.seo) en.providers.evolution.seo = {};

if (!bn.providers) bn.providers = {};
if (!bn.providers.evolution) bn.providers.evolution = {};
if (!bn.providers.evolution.seo) bn.providers.evolution.seo = {};

// Add Keywords if missing
if (!en.providers.evolution.seo.keywords) {
    en.providers.evolution.seo.keywords = keywords;
}
if (!bn.providers.evolution.seo.keywords) {
    bn.providers.evolution.seo.keywords = keywords; // Ideally translated, but English fallback is okay for now
}

// Breadcrumbs
if (!en.breadcrumbs) en.breadcrumbs = {};
if (!bn.breadcrumbs) bn.breadcrumbs = {};

en.breadcrumbs.guides = en.breadcrumbs.guides || "Guides";
en.breadcrumbs.liveCasino = en.breadcrumbs.liveCasino || "Live Casino";
en.breadcrumbs.evolution = en.breadcrumbs.evolution || "Evolution Gaming";

bn.breadcrumbs.guides = bn.breadcrumbs.guides || "গাইডস"; // Guides
bn.breadcrumbs.liveCasino = bn.breadcrumbs.liveCasino || "লাইভ ক্যাসিনো"; // Live Casino
bn.breadcrumbs.evolution = bn.breadcrumbs.evolution || "ইভোলিউশন গেমিং"; // Evolution Gaming

fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
fs.writeFileSync(bnPath, JSON.stringify(bn, null, 2));

console.log('Updated Evolution keys in EN and BN.');
