const fs = require('fs');
const content = fs.readFileSync('public/locales/bn/translation.json', 'utf8');
const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('"saGaming": {')) {
        console.log(`Found "saGaming": { at line ${i + 1}`);
    }
}
