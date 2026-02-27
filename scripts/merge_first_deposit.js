import fs from 'fs';
import path from 'path';

const enBonusPath = './en_first_deposit_bonus.json';
const bnBonusPath = './bn_first_deposit_bonus.json';
const enMainPath = './public/locales/en/translation.json';
const bnMainPath = './public/locales/bn/translation.json';

function mergeJson(target, source) {
    for (const key in source) {
        if (source[key] instanceof Object && key in target) {
            mergeJson(target[key], source[key]);
        } else {
            target[key] = source[key];
        }
    }
}

// Merge English
const enBonus = JSON.parse(fs.readFileSync(enBonusPath, 'utf8'));
const enMain = JSON.parse(fs.readFileSync(enMainPath, 'utf8'));
mergeJson(enMain, enBonus);
fs.writeFileSync(enMainPath, JSON.stringify(enMain, null, 4));
console.log('Merged English First Deposit Bonus translations.');

// Merge Bengali
const bnBonus = JSON.parse(fs.readFileSync(bnBonusPath, 'utf8'));
const bnMain = JSON.parse(fs.readFileSync(bnMainPath, 'utf8'));
mergeJson(bnMain, bnBonus);
fs.writeFileSync(bnMainPath, JSON.stringify(bnMain, null, 4));
console.log('Merged Bengali First Deposit Bonus translations.');
