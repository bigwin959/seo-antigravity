import fs from 'fs';
import path from 'path';

const enPath = path.resolve('public/locales/en/translation.json');
const bnPath = path.resolve('public/locales/bn/translation.json');

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const bn = JSON.parse(fs.readFileSync(bnPath, 'utf8'));

// Helper to safely access nested keys
const joy = (obj, path) => path.split('.').reduce((o, i) => o ? o[i] : undefined, obj);

console.log("--- BASE KEYS ---");
console.log("en.providers.saGaming:", !!joy(en, 'providers.saGaming'));
console.log("en.providers.sboSports:", !!joy(en, 'providers.sboSports'));
console.log("en.sexyGaming:", !!joy(en, 'sexyGaming'));
console.log("en.providers.sexyGaming:", !!joy(en, 'providers.sexyGaming'));

console.log("\n--- KEYWORDS ---");
console.log("en.providers.saGaming.seo.keywords:", joy(en, 'providers.saGaming.seo.keywords'));
console.log("en.providers.sboSports.seo.keywords:", joy(en, 'providers.sboSports.seo.keywords'));
console.log("en.sexyGaming.seo.keywords:", joy(en, 'sexyGaming.seo.keywords'));

console.log("\n--- BREADCRUMBS ---");
console.log("en.breadcrumbs:", en.breadcrumbs);
