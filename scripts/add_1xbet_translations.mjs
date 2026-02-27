import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the 1xBet review translations
const reviewTranslations = JSON.parse(
    fs.readFileSync(path.join(__dirname, '1xbet_review_translation.json'), 'utf8')
);

// Read existing translation files
const enPath = path.join(__dirname, 'public', 'locales', 'en', 'translation.json');
const bnPath = path.join(__dirname, 'public', 'locales', 'bn', 'translation.json');

const enTranslations = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const bnTranslations = JSON.parse(fs.readFileSync(bnPath, 'utf8'));

// Add 1xBet review translations
enTranslations['1xbetReview'] = reviewTranslations.en;
bnTranslations['1xbetReview'] = reviewTranslations.bn;

// Write back to files
fs.writeFileSync(enPath, JSON.stringify(enTranslations, null, 2));
fs.writeFileSync(bnPath, JSON.stringify(bnTranslations, null, 2));

console.log('✅ Successfully added 1xBet Review translations to both EN and BN files!');
