const fs = require('fs');
const path = require('path');

// Read the translation structure
const translationData = JSON.parse(fs.readFileSync('./bet365_review_translation.json', 'utf8'));

// Paths to translation files
const enPath = './public/locales/en/translation.json';
const bnPath = './public/locales/bn/translation.json';

// Read existing translations
const enTranslation = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const bnTranslation = JSON.parse(fs.readFileSync(bnPath, 'utf8'));

// Add bet365Review to both translations
enTranslation.bet365Review = translationData.en;
bnTranslation.bet365Review = translationData.bn;

// Write back to files
fs.writeFileSync(enPath, JSON.stringify(enTranslation, null, 2), 'utf8');
fs.writeFileSync(bnPath, JSON.stringify(bnTranslation, null, 2), 'utf8');

console.log('✅ Successfully added Bet365 Review translations to both EN and BN files!');
