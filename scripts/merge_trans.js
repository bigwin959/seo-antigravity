import fs from 'fs';
import path from 'path';

const enMainPath = 'public/locales/en/translation.json';
const enSourcePath = 'en_live_casino_guide.json';
const bnMainPath = 'public/locales/bn/translation.json';
const bnSourcePath = 'bn_live_casino_guide.json';

function processMerge(mainPath, sourcePath) {
    const mainData = JSON.parse(fs.readFileSync(mainPath, 'utf8'));
    const sourceData = JSON.parse(fs.readFileSync(sourcePath, 'utf8'));

    if (sourceData.liveCasinoGuide) {
        if (!mainData.liveCasinoGuide) mainData.liveCasinoGuide = {};

        // Deep merge logic for specific objects
        const merge = (target, source) => {
            for (const key of Object.keys(source)) {
                if (source[key] instanceof Object && !Array.isArray(source[key]) && target[key]) {
                    merge(target[key], source[key]);
                } else {
                    target[key] = source[key];
                }
            }
        };

        merge(mainData.liveCasinoGuide, sourceData.liveCasinoGuide);
    }

    fs.writeFileSync(mainPath, JSON.stringify(mainData, null, 4), 'utf8');
    console.log(`Merged ${sourcePath} into ${mainPath}`);
}

try {
    processMerge(enMainPath, enSourcePath);
    processMerge(bnMainPath, bnSourcePath);
} catch (err) {
    console.error(err);
    process.exit(1);
}
