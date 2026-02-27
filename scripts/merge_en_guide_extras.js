import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newTranslationsPath = path.join(__dirname, 'en_cricket_guide_extras.json');
const mainTranslationsPath = path.join(__dirname, 'public/locales/en/translation.json');

const newTranslations = JSON.parse(fs.readFileSync(newTranslationsPath, 'utf8'));
const mainTranslations = JSON.parse(fs.readFileSync(mainTranslationsPath, 'utf8'));

// Deep merge function
function deepMerge(target, source) {
    for (const key in source) {
        if (source[key] instanceof Object && key in target) {
            Object.assign(source[key], deepMerge(target[key], source[key]));
        }
    }
    Object.assign(target || {}, source);
    return target;
}

// Merge the new translations into the main translation object
deepMerge(mainTranslations, newTranslations);

fs.writeFileSync(mainTranslationsPath, JSON.stringify(mainTranslations, null, 2));

console.log('Successfully merged English extras for cricketGuide into public/locales/en/translation.json');
