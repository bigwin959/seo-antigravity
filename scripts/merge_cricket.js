
import fs from 'fs';
import path from 'path';

function deepMerge(target, source) {
    for (const key in source) {
        if (source[key] instanceof Object && key in target) {
            Object.assign(source[key], deepMerge(target[key], source[key]));
        }
    }
    Object.assign(target || {}, source);
    return target;
}

const enPath = path.join('public', 'locales', 'en', 'translation.json');
const bnPath = path.join('public', 'locales', 'bn', 'translation.json');
const newContentPath = 'en_cricket_how_to_bet.json';

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const bn = JSON.parse(fs.readFileSync(bnPath, 'utf8'));
const newContent = JSON.parse(fs.readFileSync(newContentPath, 'utf8'));

// Merge into EN
deepMerge(en, newContent);
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
console.log('Updated EN translations.');

// Merge into BN (English values as placeholders)
deepMerge(bn, newContent);
fs.writeFileSync(bnPath, JSON.stringify(bn, null, 2));
console.log('Updated BN translations (placeholders).');
