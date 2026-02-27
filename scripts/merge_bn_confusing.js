import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const translationPath = path.join(__dirname, 'public', 'locales', 'bn', 'translation.json');
const newContentPath = path.join(__dirname, 'bn_cricket_confusing_situations.json');

const translation = JSON.parse(fs.readFileSync(translationPath, 'utf8'));
const newContent = JSON.parse(fs.readFileSync(newContentPath, 'utf8'));

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

const updatedTranslation = deepMerge(translation, newContent);

fs.writeFileSync(translationPath, JSON.stringify(updatedTranslation, null, 2), 'utf8');
console.log('Successfully merged Bengali translations for Cricket Confusing Situations.');
