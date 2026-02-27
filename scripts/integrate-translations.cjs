#!/usr/bin/env node

/**
 * Translation File Integration Script
 * 
 * This script helps integrate translation JSON files into the main translation files.
 * 
 * Usage:
 *   node integrate-translations.js en_pagename.json bn_pagename.json
 * 
 * What it does:
 *   1. Reads the provided translation files
 *   2. Validates JSON syntax
 *   3. Merges into public/locales/en/translation.json and public/locales/bn/translation.json
 *   4. Creates backups before modifying
 */

const fs = require('fs');
const path = require('path');

// ANSI color codes for terminal output
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

function validateJSON(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const parsed = JSON.parse(content);
        log(`✓ Valid JSON: ${path.basename(filePath)}`, 'green');
        return parsed;
    } catch (error) {
        log(`✗ Invalid JSON in ${path.basename(filePath)}: ${error.message}`, 'red');
        return null;
    }
}

function createBackup(filePath) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupPath = filePath.replace('.json', `.backup.${timestamp}.json`);
    fs.copyFileSync(filePath, backupPath);
    log(`✓ Backup created: ${path.basename(backupPath)}`, 'cyan');
    return backupPath;
}

function mergeTranslations(mainFilePath, newTranslations) {
    // Read existing translations
    const existing = JSON.parse(fs.readFileSync(mainFilePath, 'utf8'));

    // Merge new translations
    const merged = { ...existing, ...newTranslations };

    // Write back with pretty formatting
    fs.writeFileSync(mainFilePath, JSON.stringify(merged, null, 4), 'utf8');

    log(`✓ Merged into: ${path.basename(mainFilePath)}`, 'green');
}

function main() {
    const args = process.argv.slice(2);

    if (args.length !== 2) {
        log('Usage: node integrate-translations.js en_pagename.json bn_pagename.json', 'yellow');
        log('Example: node integrate-translations.js en_cricket_guide.json bn_cricket_guide.json', 'cyan');
        process.exit(1);
    }

    const [enFile, bnFile] = args;

    log('\n🌐 Translation Integration Script', 'blue');
    log('================================\n', 'blue');

    // Validate input files exist
    if (!fs.existsSync(enFile)) {
        log(`✗ File not found: ${enFile}`, 'red');
        process.exit(1);
    }

    if (!fs.existsSync(bnFile)) {
        log(`✗ File not found: ${bnFile}`, 'red');
        process.exit(1);
    }

    // Validate JSON
    log('Step 1: Validating JSON files...', 'yellow');
    const enTranslations = validateJSON(enFile);
    const bnTranslations = validateJSON(bnFile);

    if (!enTranslations || !bnTranslations) {
        log('\n✗ Validation failed. Please fix JSON errors and try again.', 'red');
        process.exit(1);
    }

    // Check if keys match
    const enKeys = Object.keys(enTranslations);
    const bnKeys = Object.keys(bnTranslations);

    if (JSON.stringify(enKeys) !== JSON.stringify(bnKeys)) {
        log('\n⚠ Warning: Key mismatch between English and Bengali files', 'yellow');
        log(`English keys: ${enKeys.join(', ')}`, 'cyan');
        log(`Bengali keys: ${bnKeys.join(', ')}`, 'cyan');
    }

    // Define main translation file paths
    const enMainPath = path.join(__dirname, 'public', 'locales', 'en', 'translation.json');
    const bnMainPath = path.join(__dirname, 'public', 'locales', 'bn', 'translation.json');

    // Create backups
    log('\nStep 2: Creating backups...', 'yellow');
    createBackup(enMainPath);
    createBackup(bnMainPath);

    // Merge translations
    log('\nStep 3: Merging translations...', 'yellow');
    mergeTranslations(enMainPath, enTranslations);
    mergeTranslations(bnMainPath, bnTranslations);

    log('\n✓ Integration complete!', 'green');
    log('\nNext steps:', 'cyan');
    log('1. Test the website to ensure translations appear correctly', 'cyan');
    log('2. Check for any missing translations', 'cyan');
    log('3. If everything looks good, you can delete the backup files', 'cyan');
    log('\nBackup files are kept in case you need to rollback.\n', 'yellow');
}

main();
