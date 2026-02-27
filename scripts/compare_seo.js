import fs from 'fs';
import path from 'path';

const enPath = 'public/locales/en/translation.json';
const bnPath = 'public/locales/bn/translation.json';
const reportPath = 'seo_report_utf8.txt';

try {
    const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
    const bnData = JSON.parse(fs.readFileSync(bnPath, 'utf8'));

    function findSeoObjects(obj, path = '') {
        let results = [];
        if (typeof obj !== 'object' || obj === null) return results;

        for (const key in obj) {
            const currentPath = path ? `${path}.${key}` : key;
            if (key === 'seo') {
                results.push({ path: currentPath, data: obj[key] });
            } else {
                results = results.concat(findSeoObjects(obj[key], currentPath));
            }
        }
        return results;
    }

    const enSeo = findSeoObjects(enData);

    let report = `Found ${enSeo.length} SEO objects in English file.\n`;
    let untranslatedCount = 0;
    let missingCount = 0;
    let translatedCount = 0;

    enSeo.forEach(item => {
        const keyPath = item.path;
        const keys = keyPath.split('.');
        let currentBn = bnData;
        let found = true;
        for (const key of keys) {
            if (currentBn && currentBn[key]) {
                currentBn = currentBn[key];
            } else {
                found = false;
                break;
            }
        }

        if (!found) {
            report += `[MISSING] ${keyPath} is missing in Bengali file.\n`;
            missingCount++;
            return;
        }

        const enTitle = item.data.title || '';
        const bnTitle = currentBn.title || '';
        const enDesc = item.data.description || '';
        const bnDesc = currentBn.description || '';
        const enKeywords = JSON.stringify(item.data.keywords || []);
        const bnKeywords = JSON.stringify(currentBn.keywords || []);

        let issues = [];

        if (enTitle && enTitle === bnTitle) {
            if (enTitle.length > 15) issues.push('Title is identical');
        }

        if (enDesc && enDesc === bnDesc) {
            if (enDesc.length > 10) issues.push('Description is identical');
        }

        if (enKeywords && enKeywords === bnKeywords && item.data.keywords && item.data.keywords.length > 0) {
            issues.push('Keywords are identical');
        }

        if (issues.length > 0) {
            report += `[UNTRANSLATED] ${keyPath}: ${issues.join(', ')}\n`;
            untranslatedCount++;
        } else {
            translatedCount++;
        }
    });

    report += '--------------------------------------------------\n';
    report += `Total SEO blocks: ${enSeo.length}\n`;
    report += `Missing in Bengali: ${missingCount}\n`;
    report += `Potentially Untranslated (Identical): ${untranslatedCount}\n`;
    report += `Appearing Translated: ${translatedCount}\n`;

    fs.writeFileSync(reportPath, report, 'utf8');
    console.log('Report written to ' + reportPath);

} catch (err) {
    console.error('Error:', err.message);
}
