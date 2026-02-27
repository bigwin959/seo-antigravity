const fs = require('fs');
const content = fs.readFileSync('public/locales/bn/translation.json', 'utf8');
const data = JSON.parse(content);
const targets = [];
if (data.providers) {
    for (const key in data.providers) {
        const title = data.providers[key].hero ? data.providers[key].hero.title : null;
        if (title && title.includes('<')) {
            targets.push(key);
        }
    }
}
console.log(JSON.stringify(targets));
