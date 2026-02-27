const fs = require('fs');
const path = require('path');

const enPath = 'public/locales/en/translation.json';
const bnPath = 'public/locales/bn/translation.json';

try {
    function readJson(filePath) {
        const content = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(content.replace(/^\uFEFF/, ''));
    }

    const en = readJson(enPath);
    const bn = readJson(bnPath);

    function compareObjects(obj1, obj2, path = '') {
        let missing = [];
        for (const key in obj1) {
            const currentPath = path ? `${path}.${key}` : key;
            if (!obj2.hasOwnProperty(key)) {
                missing.push(currentPath);
            } else if (typeof obj1[key] === 'object' && obj1[key] !== null && !Array.isArray(obj1[key])) {
                if (typeof obj2[key] === 'object' && obj2[key] !== null && !Array.isArray(obj2[key])) {
                    missing = missing.concat(compareObjects(obj1[key], obj2[key], currentPath));
                }
            }
        }
        return missing;
    }

    const missingKeys = compareObjects(en, bn);
    console.log(JSON.stringify(missingKeys, null, 2));

} catch (e) {
    console.error('Error:', e.message);
}
