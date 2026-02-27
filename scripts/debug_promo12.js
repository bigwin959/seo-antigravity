import fs from 'fs';

const en = JSON.parse(fs.readFileSync('public/locales/en/translation.json', 'utf8'));
const bn = JSON.parse(fs.readFileSync('public/locales/bn/translation.json', 'utf8'));

fs.writeFileSync('promo12_debug.json', JSON.stringify({
    en: en.promos.promo12.howToJoin.steps,
    bn: bn.promos.promo12.howToJoin.steps
}, null, 2));
