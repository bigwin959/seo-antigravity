import fs from 'fs';
import path from 'path';

const enPath = path.resolve('public/locales/en/translation.json');
const bnPath = path.resolve('public/locales/bn/translation.json');

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const bn = JSON.parse(fs.readFileSync(bnPath, 'utf8'));

const ensurePath = (obj, path) => {
    let current = obj;
    path.split('.').forEach(key => {
        if (!current[key]) current[key] = {};
        current = current[key];
    });
};

// 1. SA Gaming
ensurePath(en, 'providers.saGaming.seo');
ensurePath(bn, 'providers.saGaming.seo');
const saKeywords = ["SA Gaming", "Asian live casino", "Dragon Tiger", "Baccarat", "Sic Bo", "live dealer", "Asian games", "SA Gaming provider"];
if (!en.providers.saGaming.seo.keywords) en.providers.saGaming.seo.keywords = saKeywords;
if (!bn.providers.saGaming.seo.keywords) bn.providers.saGaming.seo.keywords = saKeywords;

// 2. SBO Sports
ensurePath(en, 'providers.sboSports.seo');
ensurePath(bn, 'providers.sboSports.seo');
const sboKeywords = ["SBO Sports", "SBOBET", "Asian handicap", "sports betting", "live betting", "football betting", "SBO sportsbook"];
if (!en.providers.sboSports.seo.keywords) en.providers.sboSports.seo.keywords = sboKeywords;
if (!bn.providers.sboSports.seo.keywords) bn.providers.sboSports.seo.keywords = sboKeywords;

// 3. Sexy Gaming
ensurePath(en, 'sexyGaming.seo');
ensurePath(bn, 'sexyGaming.seo');
const sexyKeywords = ["Sexy Gaming", "AE Sexy", "live casino", "Baccarat", "attractive dealers", "premium live casino", "Asian live games"];
if (!en.sexyGaming.seo.keywords) en.sexyGaming.seo.keywords = sexyKeywords;
if (!bn.sexyGaming.seo.keywords) bn.sexyGaming.seo.keywords = sexyKeywords;

// 4. Breadcrumbs
ensurePath(en, 'breadcrumbs');
ensurePath(bn, 'breadcrumbs');
en.breadcrumbs.saGaming = "SA Gaming";
en.breadcrumbs.sboSports = "SBO Sports";
en.breadcrumbs.sexyGaming = "Sexy Gaming";

bn.breadcrumbs.saGaming = "এসএ গেমিং";
bn.breadcrumbs.sboSports = "এসবিও স্পোর্টস";
bn.breadcrumbs.sexyGaming = "সেক্সি গেমিং";

fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
fs.writeFileSync(bnPath, JSON.stringify(bn, null, 2));

console.log('Updated remaining provider keys.');
