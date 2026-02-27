import fs from 'fs';

const en = JSON.parse(fs.readFileSync('public/locales/en/translation.json', 'utf8'));
const bn = JSON.parse(fs.readFileSync('public/locales/bn/translation.json', 'utf8'));

const keysToCheck = ['cricketExchangeVsSportsbook', 'cricketBetTypes'];

keysToCheck.forEach(key => {
    console.log(`Checking ${key}...`);
    if (!en[key]) {
        console.log(`❌ ${key} missing in EN`);
        return;
    }
    if (!bn[key]) {
        console.log(`❌ ${key} missing in BN`);
        return;
    }

    // Check strict equality of first deep value to see if it was just copied
    // This is a naive check but helpful. 
    // Better: Helper function to traverse and count identical strings

    let totalStrings = 0;
    let identicalStrings = 0;

    function compare(objEn, objBn, path) {
        for (const k in objEn) {
            if (typeof objEn[k] === 'string') {
                totalStrings++;
                if (objEn[k] === objBn[k]) {
                    // Ignore short strings or keys that might be identical (numbers, proper nouns)
                    if (objEn[k].length > 10) {
                        identicalStrings++;
                        // console.log(`Identical at ${path}.${k}: ${objEn[k].substring(0, 20)}...`);
                    }
                }
            } else if (typeof objEn[k] === 'object' && objEn[k] !== null) {
                if (objBn[k]) {
                    compare(objEn[k], objBn[k], `${path}.${k}`);
                } else {
                    console.log(`❌ Missing object at ${path}.${k} in BN`);
                }
            }
        }
    }

    compare(en[key], bn[key], key);

    console.log(`Results for ${key}:`);
    console.log(`  Total Strings: ${totalStrings}`);
    console.log(`  Identical Strings (>10 chars): ${identicalStrings}`);
    if (identicalStrings / totalStrings > 0.5) {
        console.log(`  ⚠️  Likely untranslated (High identical ratio)`);
    } else {
        console.log(`  ✅ Likely translated`);
    }
    console.log('---');
});
