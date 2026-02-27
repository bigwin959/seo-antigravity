import fs from 'fs';

const enPath = 'public/locales/en/translation.json';
const bnPath = 'public/locales/bn/translation.json';

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const bn = JSON.parse(fs.readFileSync(bnPath, 'utf8'));

console.log('EN Type:', typeof en.cricketExchangeVsSportsbook?.seo?.keywords);
console.log('EN Value:', JSON.stringify(en.cricketExchangeVsSportsbook?.seo?.keywords));

console.log('BN Type:', typeof bn.cricketExchangeVsSportsbook?.seo?.keywords);
console.log('BN Value:', JSON.stringify(bn.cricketExchangeVsSportsbook?.seo?.keywords));

console.log('EN BetTypes Type:', typeof en.cricketBetTypes?.seo?.keywords);
console.log('EN BetTypes Value:', JSON.stringify(en.cricketBetTypes?.seo?.keywords));
