import fs from 'fs';
import path from 'path';

const enPath = path.resolve('public/locales/en/translation.json');
const bnPath = path.resolve('public/locales/bn/translation.json');

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const bn = JSON.parse(fs.readFileSync(bnPath, 'utf8'));

// Helper to ensure path exists
const ensurePath = (obj, path) => {
    let current = obj;
    path.split('.').forEach(key => {
        if (!current[key]) current[key] = {};
        current = current[key];
    });
};

// 1. Evolution Gaming
ensurePath(en, 'providers.evolution.seo');
ensurePath(bn, 'providers.evolution.seo');

const evoKeywords = [
    "Evolution Gaming", "live casino", "Lightning Roulette", "Crazy Time", "live dealer", "game shows", "Evolution games"
];
if (!en.providers.evolution.seo.keywords) en.providers.evolution.seo.keywords = evoKeywords;
if (!bn.providers.evolution.seo.keywords) bn.providers.evolution.seo.keywords = evoKeywords;


// 2. Exchange Sports
ensurePath(en, 'providers.exchangeSports.seo');
ensurePath(bn, 'providers.exchangeSports.seo');

const exchangeKeywords = [
    "Exchange Sports", "betting exchange", "back and lay", "sports trading", "high odds", "cricket exchange"
];
if (!en.providers.exchangeSports.seo.keywords) en.providers.exchangeSports.seo.keywords = exchangeKeywords;
if (!bn.providers.exchangeSports.seo.keywords) bn.providers.exchangeSports.seo.keywords = exchangeKeywords;


// 3. IBC Sports
ensurePath(en, 'providers.ibcSports.seo');
ensurePath(bn, 'providers.ibcSports.seo');

const ibcKeywords = [
    "IBC Sports", "sportsbook", "live betting", "football betting", "asian handicap", "mix parlay"
];
if (!en.providers.ibcSports.seo.keywords) en.providers.ibcSports.seo.keywords = ibcKeywords;
if (!bn.providers.ibcSports.seo.keywords) bn.providers.ibcSports.seo.keywords = ibcKeywords;


// 4. Breadcrumbs
ensurePath(en, 'breadcrumbs');
ensurePath(bn, 'breadcrumbs');

en.breadcrumbs.guides = en.breadcrumbs.guides || "Guides";
en.breadcrumbs.liveCasino = en.breadcrumbs.liveCasino || "Live Casino";
en.breadcrumbs.evolution = en.breadcrumbs.evolution || "Evolution Gaming";
en.breadcrumbs.exchangeSports = en.breadcrumbs.exchangeSports || "Exchange Sports";
en.breadcrumbs.ibcSports = en.breadcrumbs.ibcSports || "IBC Sports";

bn.breadcrumbs.guides = bn.breadcrumbs.guides || "গাইডস";
bn.breadcrumbs.liveCasino = bn.breadcrumbs.liveCasino || "লাইভ ক্যাসিনো";
bn.breadcrumbs.evolution = bn.breadcrumbs.evolution || "ইভোলিউশন গেমিং";
bn.breadcrumbs.exchangeSports = bn.breadcrumbs.exchangeSports || "এক্সচেঞ্জ স্পোর্টস";
bn.breadcrumbs.ibcSports = bn.breadcrumbs.ibcSports || "আইবিসি স্পোর্টস";


fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
fs.writeFileSync(bnPath, JSON.stringify(bn, null, 2));

console.log('Updated provider keys in EN and BN.');
