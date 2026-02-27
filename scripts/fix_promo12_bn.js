import fs from 'fs';
import path from 'path';

const bnPath = path.resolve('public/locales/bn/translation.json');
const bn = JSON.parse(fs.readFileSync(bnPath, 'utf8'));

const steps = bn.promos.promo12.howToJoin.steps;

// Define the missing step
const missingStep = {
    "step": "5",
    "title": "পারফরম্যান্স ট্র্যাক ও অপটিমাইজ করুন",
    "desc": "ড্যাশবোর্ডে ক্লিক, রেজিস্ট্রেশন এবং আয় মনিটর করুন এবং ভালো ফলের জন্য ক্যাম্পেইন অপটিমাইজ করুন।"
};

// Insert missing step at index 4 (position 5)
steps.splice(4, 0, missingStep);

// Update step 6 (was step 5)
if (steps[5]) {
    steps[5].step = "6";
}

// Renumbering just in case
steps.forEach((s, i) => {
    s.step = (i + 1).toString();
});

bn.promos.promo12.howToJoin.steps = steps;

fs.writeFileSync(bnPath, JSON.stringify(bn, null, 2));
console.log('Updated BN promo12 steps.');
