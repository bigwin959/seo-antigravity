import fs from 'fs';
const en = JSON.parse(fs.readFileSync('public/locales/en/translation.json', 'utf8'));
const providers = en.providers;
if (providers && providers.pragmaticPlay) {
    console.log('Found pragmaticPlay in providers');
    // Write out the first few keys of pragmaticPlay
    console.log(Object.keys(providers.pragmaticPlay).slice(0, 5));
} else {
    console.log('pragmaticPlay NOT found in providers');
}
