const fs = require('fs');
const content = fs.readFileSync('public/locales/bn/translation.json', 'utf8');
const data = JSON.parse(content);
if (data.providers) {
    for (const key in data.providers) {
        const title = data.providers[key].hero ? data.providers[key].hero.title : null;
        if (title && title.includes('<')) {
            console.log(`Key: providers.${key}.hero.title HAS HTML: ${title}`);
        }
    }
}
