import fs from 'fs';

const en = JSON.parse(fs.readFileSync('./public/locales/en/translation.json', 'utf8'));
const bn = JSON.parse(fs.readFileSync('./public/locales/bn/translation.json', 'utf8'));

const deepCompare = (obj1, obj2, path = '') => {
    if (!obj1 || !obj2) return;

    // Check keys present in EN but missing in BN
    Object.keys(obj1).forEach(key => {
        const newPath = path ? `${path}.${key}` : key;
        if (obj2[key] === undefined) {
            console.log(`MISSING in BN: ${newPath}`);
        } else if (Array.isArray(obj1[key])) {
            if (!Array.isArray(obj2[key])) {
                console.log(`TYPE MISMATCH: ${newPath} (EN: Array, BN: ${typeof obj2[key]})`);
            } else if (obj1[key].length !== obj2[key].length) {
                console.log(`LENGTH MISMATCH: ${newPath} (EN: ${obj1[key].length}, BN: ${obj2[key].length})`);
            } else {
                // Deep compare array items if they are objects
                obj1[key].forEach((item, index) => {
                    if (typeof item === 'object' && item !== null) {
                        deepCompare(item, obj2[key][index], `${newPath}[${index}]`);
                    }
                });
            }
        } else if (typeof obj1[key] === 'object' && obj1[key] !== null) {
            if (typeof obj2[key] !== 'object' || obj2[key] === null) {
                console.log(`TYPE MISMATCH: ${newPath} (EN: Object, BN: ${typeof obj2[key]})`);
            } else {
                deepCompare(obj1[key], obj2[key], newPath);
            }
        }
    });
};

console.log('--- Checking Promo Translations (1-12) ---');
for (let i = 1; i <= 12; i++) {
    const key = `promo${i}`;
    console.log(`Checking ${key}...`);
    if (en[key]) {
        if (!bn[key]) {
            console.log(`CRITICAL: ${key} is missing in BN entirely!`);
        } else {
            deepCompare(en[key], bn[key], key);
        }
    } else {
        console.log(`SKIP: ${key} not in EN`);
    }
}
console.log('--- Check Complete ---');
