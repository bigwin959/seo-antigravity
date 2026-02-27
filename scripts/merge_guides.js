import fs from 'fs';
import path from 'path';

const enPath = path.join(process.cwd(), 'public', 'locales', 'en', 'translation.json');
const bnPath = path.join(process.cwd(), 'public', 'locales', 'bn', 'translation.json');

const filesToMergeEn = [
    'en_bkash_deposit.json',
    'en_kbzpay_deposit.json',
    'en_about_page.json',
    'en_deposit_guide.json',
    'en_first_deposit_bonus.json'
];

const filesToMergeBn = [
    'bn_bkash_deposit.json',
    'bn_kbzpay_deposit.json',
    'bn_about_page.json',
    'bn_deposit_guide.json',
    'bn_first_deposit_bonus.json'
];

function deepMerge(target, source) {
    for (const key in source) {
        if (source[key] instanceof Object && key in target) {
            Object.assign(source[key], deepMerge(target[key], source[key]));
        }
    }
    Object.assign(target || {}, source);
    return target;
}

// Merge English
let enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
filesToMergeEn.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
        const fileContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        enData = deepMerge(enData, fileContent);
        console.log(`Merged ${file} into English`);
    }
});
fs.writeFileSync(enPath, JSON.stringify(enData, null, 2));

// Merge Bengali
let bnData = JSON.parse(fs.readFileSync(bnPath, 'utf8'));
filesToMergeBn.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
        const fileContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        bnData = deepMerge(bnData, fileContent);
        console.log(`Merged ${file} into Bengali`);
    }
});
fs.writeFileSync(bnPath, JSON.stringify(bnData, null, 2));

console.log('All guides merged successfully!');
