import fs from 'fs';
import path from 'path';

const filePaths = [
    'public/locales/en/translation.json',
    'public/locales/bn/translation.json'
];

filePaths.forEach(filePath => {
    const fullPath = path.resolve(filePath);
    const content = JSON.parse(fs.readFileSync(fullPath, 'utf8'));

    // Fix CricketExchangeVsSportsbook Keywords
    if (content.cricketExchangeVsSportsbook?.seo?.keywords && typeof content.cricketExchangeVsSportsbook.seo.keywords === 'string') {
        const keywords = content.cricketExchangeVsSportsbook.seo.keywords.split(',').map(s => s.trim());
        content.cricketExchangeVsSportsbook.seo.keywords = keywords;
        console.log(`Updated ${filePath}: converted cricketExchangeVsSportsbook keywords to array.`);
    }

    fs.writeFileSync(fullPath, JSON.stringify(content, null, 2));
});
