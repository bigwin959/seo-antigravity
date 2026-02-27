const fs = require('fs');
const content = fs.readFileSync('public/locales/bn/translation.json', 'utf8');
const data = JSON.parse(content);
const keys = Object.keys(data.providers || {});
console.log('Provider keys:', keys);
if (data.providers) {
    for (const key of keys) {
        if (data.providers[key].hero) {
            console.log(`${key}: ${data.providers[key].hero.title}`);
        }
    }
}
