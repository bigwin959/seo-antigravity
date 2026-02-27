const fs = require('fs');
const content = fs.readFileSync('public/locales/en/translation.json', 'utf8');
const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('"jdb": {')) {
        console.log(`Found "jdb": { at line ${i + 1}`);
    }
}
