
import fs from 'fs';

const enPath = 'public/locales/en/translation.json';
const bnPath = 'public/locales/bn/translation.json';

const enKeywords = ["live casino guide", "live dealer games", "baccarat rules", "blackjack strategy", "roulette guide", "evolution gaming", "sa gaming"];
const bnKeywords = ["লাইভ ক্যাসিনো গাইড", "লাইভ ডিলার গেমস", "ব্যাকারেট নিয়ম", "ব্ল্যাকজ্যাক কৌশল", "রুলেট গাইড", "ইভোলিউশন গেমিং", "এসএ গেমিং"];

function addKeywords(path, keywords) {
    try {
        const data = JSON.parse(fs.readFileSync(path, 'utf8'));
        if (data.liveCasinoGuide && data.liveCasinoGuide.seo) {
            data.liveCasinoGuide.seo.keywords = keywords;
            fs.writeFileSync(path, JSON.stringify(data, null, 4), 'utf8');
            console.log(`Successfully added keywords to ${path}`);
        } else {
            console.error(`Error: liveCasinoGuide.seo not found in ${path}`);
        }
    } catch (e) {
        console.error(`Error processing ${path}:`, e.message);
    }
}

addKeywords(enPath, enKeywords);
addKeywords(bnPath, bnKeywords);
