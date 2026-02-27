import fs from 'fs';

const en = JSON.parse(fs.readFileSync('public/locales/en/translation.json', 'utf8'));
const bn = JSON.parse(fs.readFileSync('public/locales/bn/translation.json', 'utf8'));

const p12_en = en.promos?.promo12?.howToJoin?.steps;
const p12_bn = bn.promos?.promo12?.howToJoin?.steps;

console.log('Promo12 EN steps length:', p12_en ? p12_en.length : 'Missing');
console.log('Promo12 BN steps length:', p12_bn ? p12_bn.length : 'Missing');

if (p12_en && p12_bn) {
    if (p12_en.length !== p12_bn.length) {
        console.log('Discrepancy found!');
        console.log('EN:', p12_en);
        console.log('BN:', p12_bn);
    } else {
        console.log('Lengths match.');
    }
}
