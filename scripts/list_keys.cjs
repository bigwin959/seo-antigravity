const fs = require('fs');

try {
    const content = fs.readFileSync('public/locales/en/translation.json', 'utf8');
    const en = JSON.parse(content.replace(/^\uFEFF/, ''));
    console.log(JSON.stringify(Object.keys(en), null, 2));
} catch (e) {
    console.error(e);
}
