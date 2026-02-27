import fs from 'fs';
const en = JSON.parse(fs.readFileSync('public/locales/en/translation.json', 'utf8'));

let results = [];
function findKey(obj, targetKey, path = '') {
    for (let key in obj) {
        let currentPath = path ? `${path}.${key}` : key;
        if (key === targetKey) {
            results.push(`Found "${targetKey}" at: ${currentPath}`);
        }
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            findKey(obj[key], targetKey, currentPath);
        }
    }
}

findKey(en, 'jili');
findKey(en, 'pragmaticPlay');
findKey(en, 'providers');

fs.writeFileSync('debug_results.txt', results.join('\n'), 'utf8');
