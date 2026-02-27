import fs from 'fs';
try {
    const data = fs.readFileSync('public/locales/en/translation.json', 'utf8');
    const en = JSON.parse(data);
    console.log('JSON is valid.');
    console.log('Keys count:', Object.keys(en).length);
} catch (e) {
    console.error('JSON is INVALID:', e.message);
    console.log('Attempting to find corruption...');
    // Try to find where it breaks
}
