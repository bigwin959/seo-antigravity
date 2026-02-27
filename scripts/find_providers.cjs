const fs = require('fs');
const content = fs.readFileSync('public/locales/en/translation.json', 'utf8');
const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('"providers": {')) {
        console.log(`Found "providers": { at line ${i + 1}`);
    }
}
