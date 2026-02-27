const fs = require('fs');

const content = fs.readFileSync('public/locales/en/translation.json', 'utf8');
const lines = content.split('\n');

console.log("Matches:");
lines.forEach((line, index) => {
    if (line.includes('"promotions":')) {
        console.log(`Line ${index + 1}: ${line.trim()}`);
    }
});
