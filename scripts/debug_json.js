import fs from 'fs';
const en = JSON.parse(fs.readFileSync('public/locales/en/translation.json', 'utf8'));
console.log('Top level keys:', Object.keys(en));
if (en.providers) {
    console.log('providers type:', typeof en.providers);
    if (typeof en.providers === 'object') {
        console.log('providers keys:', Object.keys(en.providers));
    }
} else {
    console.log('en.providers does not exist');
}
if (en.nav) {
    console.log('nav keys:', Object.keys(en.nav));
}
