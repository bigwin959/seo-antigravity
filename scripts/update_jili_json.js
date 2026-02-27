import fs from 'fs';
import path from 'path';

const enPath = path.resolve('public/locales/en/translation.json');
const bnPath = path.resolve('public/locales/bn/translation.json');

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const bn = JSON.parse(fs.readFileSync(bnPath, 'utf8'));

const ensurePath = (obj, path) => {
    let current = obj;
    path.split('.').forEach(key => {
        if (!current[key]) current[key] = {};
        current = current[key];
    });
};

ensurePath(en, 'providers.jili');
ensurePath(bn, 'providers.jili');

const jiliContentEn = {
    seo: {
        title: "JILI Games on BIGWIN959 | Slots, Features & Player Guide (2025)",
        description: "JILI games on BIGWIN959. Learn about popular JILI slots, bonus-style games, features, and why JILI is favored by Bangladesh & Myanmar players.",
        keywords: ["JILI Games", "online slots", "BIGWIN959", "boxing king", "Lucky Goldbricks", "casino guide", "Bangladesh", "Myanmar"],
        schema: {
            headline: "JILI Games on BIGWIN959 – Slots, Features & Player Guide",
            description: "Explore popular JILI games, understand bonus mechanics, and learn why JILI is favored by BD/MM players."
        }
    },
    hero: {
        badge: "Asia's Leading Slot Provider",
        title: "JILI Games on <span class=\"text-brand\">BIGWIN959</span> <br /> <span class=\"text-2xl md:text-3xl text-gray-300 font-bold block mt-4\">Slots, Features & Player Guide</span>",
        subtitle: "Explore popular JILI games, understand bonus mechanics, and learn why JILI is favored by BD/MM players.",
        cta: { play: "Play JILI Games Now" }
    },
    intro: {
        title: "Who Is JILI?",
        desc: "JILI is an Asia-focused digital game provider known for creating online slots, bonus-style games, and casual interactive games with cinematic excellence.",
        foundation: {
            title: "Global Foundation",
            foundedLabel: "Market Focus:",
            hqLabel: "Regional Presence:",
            licensesLabel: "Certification:",
            specLabel: "Core Specialization:",
            specValue: "Simplistic yet high-engagement slot mechanics",
            desc: "JILI focuses on providing stable, easy-to-understand games that cater to the unique preferences of South and Southeast Asian players."
        },
        philosophy: {
            title: "JILI Game Philosophy",
            points: [
                { label: "Stability First", value: "Optimized for smooth play on all mobile networks." },
                { label: "Visual Clarity", value: "Clean interfaces that make winning easy to track." },
                { label: "Cultural Soul", value: "Themes inspired by local Asian legends and festivals." }
            ]
        },
        features: ["Reliable Platform", "High Frequency Bonuses", "Smooth Animation", "Diverse Themes"]
    },
    innovation: {
        title: "JILI INNOVATION",
        subtitle: "Pushing the boundaries of casual slot gaming with unique features and engaging mechanics.",
        features: {
            title: "Key Popularity Factors",
            items: [
                { label: "Intuitive", value: "Easy-to-learn mechanics for all players." },
                { label: "Bonus-Rich", value: "Frequent mini-games and reward cycles." }
            ]
        },
        mechanics: {
            title: "How JILI Games Work",
            steps: [
                { title: "Choose Your Game", desc: "Select from a wide range of slots and casual games." },
                { title: "Set Your Bet", desc: "Bet sizes starting from 1 BDT/MMK." },
                { title: "Trigger Bonuses", desc: "Look for special symbols to open mini-games." }
            ]
        }
    },
    whyPopular: {
        items: [
            { title: "Intuitive Gameplay", desc: "Easy to understand, even for beginners." },
            { title: "Bonus-Focused", desc: "Games revolve around bricks, gold, or boxes." },
            { title: "Balanced Risk", desc: "Less extreme than high-volatility slots." },
            { title: "Friendly Bets", desc: "Suitable for local BD/MM budget ranges." },
            { title: "Mobile Smooth", desc: "Works well on mid-range Android phones." }
        ]
    },
    portfolio: {
        title: "JILI Legendary Slots Portfolio",
        subtitle: "Explore the games that made JILI a household name on BIGWIN959. Each title is crafted for maximum engagement.",
        labels: { rtp: "Volatility", maxWin: "Feature Style", features: "Key Highlights" },
        playNow: "Play Now",
        games: [
            {
                title: "Boxing King", category: "Classic Slot", rtp: "Medium", maxWin: "Free Spins",
                features: ["Traditional Theme", "Wild Multipliers"],
                description: "A festive slot that captures the essence of classic gaming with modern payout potential.",
                popularity: "★★★★★",
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767708310/jili-boxing%20king.jpg"
            },
            {
                title: "Lucky Goldbricks", category: "Bonus Style", rtp: "Low-Medium", maxWin: "Multiplier Bricks",
                features: ["Instant Win", "Simple Interface"],
                description: "Break the gold bricks to reveal massive prizes. This game is a favorite in Myanmar.",
                popularity: "★★★★★",
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767708312/jili-Lucky%20Goldbricks.png"
            },
            {
                title: "Super Ace", category: "High Action", rtp: "High", maxWin: "Card Reveal",
                features: ["Cascading Reels", "Increasing Multiplier"],
                description: "A card-themed slot that offers non-stop action and huge consecutive wins.",
                popularity: "★★★★☆",
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767708312/jili-Super%20Ace.jpg"
            },
            {
                title: "Dragon Treasure", category: "Adventure", rtp: "Medium", maxWin: "Chest Open",
                features: ["Pick-em Bonus", "Stunning Graphics"],
                description: "Unlock the dragon's hoard by choosing the right treasure chests.",
                popularity: "★★★★★",
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767708311/jili-Dragon%20Treasure.png"
            }
        ]
    },
    comparison: {
        title: "JILI vs Other Providers",
        subtitle: "How JILI compares to the world's leading slot brands in the local market.",
        header: { feature: "Feature" },
        rows: [
            { feature: "Simplicity", jili: "High (Clean UI)", pragmatic: "Medium", jdb: "Medium" },
            { feature: "Bonus Frequency", jili: "Very Frequent", pragmatic: "Medium-Low", jdb: "High" },
            { feature: "Min Bet (BD)", jili: "1 BDT", pragmatic: "10-20 BDT", jdb: "5 BDT" },
            { feature: "Theme Focus", jili: "Asian Casual", pragmatic: "Western Classic", jdb: "Asian Myth" },
            { feature: "Mobile Speed", jili: "Instant Load", pragmatic: "Heavy Graphics", jdb: "Fast" }
        ]
    },
    tech: {
        title: "JILI Advanced Technology",
        subtitle: "Secure, fair, and optimized for the Asian mobile landscape.",
        fairness: {
            title: "Certified Fairness",
            points: [
                { label: "RNG", desc: "Random Number Generation certified by international labs." },
                { label: "GLI", desc: "Gaming Laboratories International compliant." },
                { label: "Audit", desc: "Regular audits ensure fair outcomes for all." }
            ]
        },
        infra: {
            title: "Stable Infrastructure",
            points: [
                { label: "Mobile First", desc: "Built for Android and iOS mobile browsers." },
                { label: "Low Latency", desc: "Fast response times even on 3G networks." },
                { label: "Data Save", desc: "Efficient data usage for regional players." }
            ]
        },
        importance: {
            title: "Why Safety Matters",
            trust: {
                title: "Player Trust",
                points: ["Encrypted transactions", "Secure player accounts", "Private data protection"]
            },
            benefits: {
                title: "Gaming Experience",
                points: ["No lag during spins", "Instant bet updates", "Smooth withdrawal sync"]
            }
        }
    },
    mobile: {
        title: "Mobile-First Gaming",
        subtitle: "JILI games are designed exclusively for mobile browsing efficiency.",
        features: [
            { title: "One-Hand Play", desc: "Optimized for vertical screen gaming." },
            { title: "Instant Load", desc: "Minimal asset loading for fast execution." },
            { title: "Low Battery", desc: "Efficient rendering saves your device life." }
        ],
        advantages: {
            tech: {
                title: "Technical Edge",
                points: [
                    { label: "Engine", value: "HTML5 Hybrid" },
                    { label: "Network", value: "Low Bandwidth" }
                ]
            },
            ux: {
                title: "User Experience",
                points: [
                    { label: "Interface", value: "Clean & Simple" },
                    { label: "Haptic", value: "Vibration Alerts" }
                ]
            }
        }
    },
    gettingStarted: {
        title: "Ready to Start?",
        subtitle: "Begin your JILI adventure today.",
        steps: [
            "Log in to your BIGWIN959 account.",
            "Select JILI under the Slots provider list.",
            "Choose a game and set your preferred bet.",
            "Spin and enjoy the bonus features."
        ],
        disclaimer: {
            label: "Pro Tip:",
            text: "Search for 'Boxing King' for a great introductory experience."
        }
    },
    responsible: {
        title: "Responsible Play",
        tips: ["Set daily budget limits.", "Stop after a win.", "Avoid chasing losses."],
        disclaimer: "JILI games are for entertainment. Set limits and play within your means."
    },
    faq: {
        title: "Frequently Asked Questions - JILI on BIGWIN959",
        items: [
            { q: "Is JILI legal and licensed?", a: "Yes, JILI is a fully licensed game provider with certifications from multiple gaming authorities. They supply games to top platforms like BIGWIN959 that operate under proper gaming licenses." },
            { q: "Can I win big on JILI games?", a: "Absolutely! Games like Super Ace, Lucky Goldbricks, and Dragon Treasure offer high multipliers and substantial winning potential. Some games feature max wins of 5,000x or more." },
            { q: "What makes JILI different from other providers?", a: "JILI specializes in Asian-themed games with intuitive mechanics, frequent bonus features, and mobile-optimized gameplay. Their games are designed specifically for the preferences of BD and MM players." },
            { q: "Are JILI games available on mobile?", a: "Yes, all JILI games are fully optimized for mobile devices. They work smoothly on Android and iOS smartphones and tablets, even on mid-range devices with 3G/4G connections." },
            { q: "Which JILI game is best for beginners?", a: "Boxing King and Lucky Goldbricks are excellent for beginners. They have straightforward mechanics, medium volatility, and clear bonus features that are easy to understand." },
            { q: "What is the RTP of JILI games?", a: "JILI games typically have RTPs ranging from 95% to 97%, which is competitive in the industry. The exact RTP varies by game, with most falling in the 96-96.5% range." },
            { q: "Do JILI games have bonus features?", a: "Yes, JILI games are known for their frequent bonus features including free spins, multipliers, mini-games, and special symbol mechanics. Many games have multiple bonus rounds." },
            { q: "How do I find JILI games on BIGWIN959?", a: "Log into BIGWIN959, navigate to the Slots section, and use the provider filter to select 'JILI'. You can also search for specific game names like 'Super Ace' or 'Boxing King'." }
        ]
    },
    cta: {
        title: "Ready to Play JILI?",
        button: "Start JILI Quest"
    }
};

en.providers.jili = jiliContentEn;

// Full Bengali Translation
const bnContent = JSON.parse(JSON.stringify(jiliContentEn));

// SEO
bnContent.seo.title = "BIGWIN959-এ JILI গেমস | স্লট, ফিচার এবং প্লেয়ার গাইড (২০২৫)";
bnContent.seo.description = "BIGWIN959-এ জিলি গেমস। জনপ্রিয় জিলি স্লট, বোনাস-স্টাইল গেম, ফিচার এবং কেন বাংলাদেশি ও মিয়ানমারের খেলোয়াড়দের কাছে জিলি প্রিয় তা জানুন।";
bnContent.seo.keywords = ["JILI গেমস", "অনলাইন স্লট", "BIGWIN959", "বক্সিং কিং", "লাকি গোল্ডব্রিকস", "ক্যাসিনো গাইড", "বাংলাদেশ", "মায়ানমার"];
bnContent.seo.schema.headline = "BIGWIN959-এ JILI গেমস – স্লট এবং ফিচার গাইড";
bnContent.seo.schema.description = "জনপ্রিয় জিলি গেমগুলি অন্বেষণ করুন, বোনাস মেকানিক্স বুঝুন এবং কেন বিডি/এমএম খেলোয়াড়রা জিলি পছন্দ করে তা জানুন।";

// Hero
bnContent.hero.badge = "এশিয়ার শীর্ষ স্লট প্রোভাইডার";
bnContent.hero.title = "BIGWIN959-এ <span class=\"text-brand\">JILI</span> গেমস <br /> <span class=\"text-2xl md:text-3xl text-gray-300 font-bold block mt-4\">স্লট, ফিচার এবং প্লেয়ার গাইড</span>";
bnContent.hero.subtitle = "জনপ্রিয় জিলি গেমগুলি অন্বেষণ করুন, বোনাস মেকানিক্স বুঝুন এবং কেন বিডি/এমএম খেলোয়াড়রা জিলি পছন্দ করে তা জানুন।";
bnContent.hero.cta.play = "এখন জিলি গেম খেলুন";

// Intro
bnContent.intro.title = "জিলি (JILI) কে?";
bnContent.intro.desc = "জিলি হল এশিয়া-কেন্দ্রিক একটি ডিজিটাল গেম প্রোভাইডার যা অসাধারণ সিনেমাটিক মানের অনলাইন স্লট, বোনাস-স্টাইল গেম এবং ক্যাজুয়াল ইন্টারেক্টিভ গেম তৈরির জন্য পরিচিত।";
bnContent.intro.foundation = {
    title: "গ্লোবাল ফাউন্ডেশন",
    foundedLabel: "মার্কেট ফোকাস:",
    hqLabel: "আঞ্চলিক উপস্থিতি:",
    licensesLabel: "সার্টিফিকেশন:",
    specLabel: "মূল বিশেষত্ব:",
    specValue: "সহজ কিন্তু উচ্চ-এনগেজমেন্ট স্লট মেকানিক্স",
    desc: "জিলি দক্ষিণ ও দক্ষিণ-পূর্ব এশীয় খেলোয়াড়দের অনন্য পছন্দ পূরণ করে এমন স্থিতিশীল, সহজে বোঝা যায় এমন গেম প্রদানের উপর ফোকাস করে।"
};
bnContent.intro.philosophy = {
    title: "জিলি গেম ফিলোসফি",
    points: [
        { label: "স্থিতিশীলতা প্রথম", value: "সব মোবাইল নেটওয়ার্কে মসৃণ খেলার জন্য অপ্টিমাইজড।" },
        { label: "ভিজ্যুয়াল স্পষ্টতা", value: "পরিষ্কার ইন্টারফেস যা জয় ট্র্যাক করা সহজ করে।" },
        { label: "সাংস্কৃতিক আত্মা", value: "স্থানীয় এশীয় কিংবদন্তি এবং উৎসব দ্বারা অনুপ্রাণিত থিম।" }
    ]
};
bnContent.intro.features = ["নির্ভরযোগ্য প্ল্যাটফর্ম", "উচ্চ ঘনঘন বোনাস", "মসৃণ অ্যানিমেশন", "বিচিত্র থিম"];

// Innovation
bnContent.innovation.title = "JILI ইনোভেশন";
bnContent.innovation.subtitle = "অনন্য বৈশিষ্ট্য এবং আকর্ষক মেকানিক্সের সাথে ক্যাজুয়াল স্লট গেমের সীমা ঠেলে দিচ্ছে।";
bnContent.innovation.features.title = "জনপ্রিয়তার মূল কারণ";
bnContent.innovation.features.items = [
    { label: "ইন্টিউইটিভ", value: "সব খেলোয়াড়ের জন্য শেখা সহজ মেকানিক্স।" },
    { label: "বোনাস-রিচ", value: "ঘনঘন মিনি-গেম এবং রিওয়ার্ড সাইকেল।" }
];
bnContent.innovation.mechanics.title = "জিলি গেম কীভাবে কাজ করে";
bnContent.innovation.mechanics.steps = [
    { title: "আপনার গেম বেছে নিন", desc: "স্লট এবং ক্যাজুয়াল গেমের বিশাল পরিসর থেকে নির্বাচন করুন।" },
    { title: "আপনার বেট সেট করুন", desc: "১ টাকা থেকে শুরু হওয়া বেট সাইজ।" },
    { title: "বোনাস ট্রিগার করুন", desc: "মিনি-গেম খুলতে বিশেষ সিম্বল খুঁজুন।" }
];

// Why Popular
bnContent.whyPopular.items = [
    { title: "সহজ গেমপ্লে", desc: "বোঝা সহজ, এমনকি নতুনদের জন্যও।" },
    { title: "বোনাস-ফোকাসড", desc: "গেমগুলি ইট, স্বর্ণ বা বাক্সের চারপাশে আবর্তিত হয়।" },
    { title: "ভারসাম্যপূর্ণ ঝুঁকি", desc: "উচ্চ-অস্থিরতা স্লটের চেয়ে কম চরম।" },
    { title: "বাজেট-বান্ধব বেট", desc: "স্থানীয় খেলোয়াড়দের বাজেটের জন্য উপযুক্ত।" },
    { title: "মোবাইল স্মুথ", desc: "মিড-রেঞ্জ অ্যান্ড্রয়েড ফোনে ভাল কাজ করে।" }
];

// Portfolio
bnContent.portfolio.title = "JILI কিংবদন্তি স্লট পোর্টফোলিও";
bnContent.portfolio.subtitle = "BIGWIN959-এ জিলিকে জনপ্রিয় করা গেমগুলি অন্বেষণ করুন। প্রতিটি শিরোনাম সর্বোচ্চ এনগেজমেন্টের জন্য তৈরি।";
bnContent.portfolio.labels = { rtp: "ভোলাটিলিটি", maxWin: "ফিচার স্টাইল", features: "মূল হাইলাইট" };
bnContent.portfolio.playNow = "এখন খেলুন";
bnContent.portfolio.games = [
    {
        title: "Boxing King", category: "ক্লাসিক স্লট", rtp: "মাঝারি", maxWin: "ফ্রি স্পিন",
        features: ["ট্রেডিশনাল থিম", "ওয়াইল্ড মাল্টিপ্লায়ার"],
        description: "একটি উৎসবমুখর স্লট যা আধুনিক পেআউট সম্ভাবনার সাথে ক্লাসিক গেমিংয়ের সারাংশ ধরে রাখে।",
        popularity: "★★★★★",
        img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767708310/jili-boxing%20king.jpg"
    },
    {
        title: "Lucky Goldbricks", category: "বোনাস স্টাইল", rtp: "লো-মিডিয়াম", maxWin: "মাল্টিপ্লায়ার ব্রিকস",
        features: ["ইনস্ট্যান্ট উইন", "সহজ ইন্টারফেস"],
        description: "বিশাল পুরস্কার প্রকাশ করতে সোনার ইট ভাঙুন। এটি মায়ানমারে খুব জনপ্রিয়।",
        popularity: "★★★★★",
        img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767708312/jili-Lucky%20Goldbricks.png"
    },
    {
        title: "Super Ace", category: "হাই অ্যাকশন", rtp: "উচ্চ", maxWin: "কার্ড রিভিল",
        features: ["ক্যাসকেডিং রিল", "ইনক্রিজিং মাল্টিপ্লায়ার"],
        description: "একটি কার্ড-থিমযুক্ত স্লট যা নন-স্টপ অ্যাকশন এবং বিশাল ধারাবাহিক জয়ের অফার দেয়।",
        popularity: "★★★★☆",
        img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767708312/jili-Super%20Ace.jpg"
    },
    {
        title: "Dragon Treasure", category: "অ্যাডভেঞ্চার", rtp: "মাঝারি", maxWin: "চেস্ট ওপেন",
        features: ["পিক-েম বোনাস", "অত্যাশ্চর্য গ্রাফিক্স"],
        description: "সঠিক ট্রেজার চেস্ট বেছে নিয়ে ড্রাগনের ভান্ডার আনলক করুন।",
        popularity: "★★★★★",
        img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767708311/jili-Dragon%20Treasure.png"
    }
];

// Comparison
bnContent.comparison.title = "JILI বনাম অন্যান্য প্রোভাইডার";
bnContent.comparison.subtitle = "স্থানীয় বাজারে বিশ্বের শীর্ষ স্লট ব্র্যান্ডগুলির সাথে জিলি কীভাবে তুলনা করে।";
bnContent.comparison.header.feature = "বৈশিষ্ট্য";
bnContent.comparison.rows = [
    { feature: "সরলতা", jili: "উচ্চ (পরিষ্কার UI)", pragmatic: "মাঝারি", jdb: "মাঝারি" },
    { feature: "বোনাস ফ্রিকোয়েন্সি", jili: "খুব ঘনঘন", pragmatic: "মাঝারি-কম", jdb: "উচ্চ" },
    { feature: "মিনিমাম বেট (BD)", jili: "১ টাকা", pragmatic: "১০-২০ টাকা", jdb: "৫ টাকা" },
    { feature: "থিম ফোকাস", jili: "এশিয়ান ক্যাজুয়াল", pragmatic: "ওয়েস্টার্ন ক্লাসিক", jdb: "এশিয়ান মিথ" },
    { feature: "মোবাইল স্পিড", jili: "ইনস্ট্যান্ট লোড", pragmatic: "হেভি গ্রাফিক্স", jdb: "দ্রুত" }
];

// Tech
bnContent.tech.title = "JILI উন্নত প্রযুক্তি";
bnContent.tech.subtitle = "নিরাপদ, ন্যায্য এবং এশিয়ান মোবাইল ল্যান্ডস্কেপের জন্য অপ্টিমাইজ করা।";
bnContent.tech.fairness.title = "সার্টিফাইড ফেয়ারনেস";
bnContent.tech.fairness.points = [
    { label: "RNG", desc: "আন্তর্জাতিক ল্যাব দ্বারা আরএনজি সার্টিফাইড।" },
    { label: "GLI", desc: "গেমিং ল্যাবরেটরিজ ইন্টারন্যাশনাল কমপ্লায়েন্ট।" },
    { label: "অডিট", desc: "সবার জন্য ন্যায্য ফলাফল নিশ্চিত করতে নিয়মিত অডিট।" }
];
bnContent.tech.infra.title = "স্থিতিশীল অবকাঠামো";
bnContent.tech.infra.points = [
    { label: "মোবাইল ফার্স্ট", desc: "অ্যান্ড্রয়েড এবং আইওএস মোবাইল ব্রাউজারের জন্য তৈরি।" },
    { label: "লো ল্যাটেন্সি", desc: "৩জি নেটওয়ার্কগুলোতেও দ্রুত প্রতিক্রিয়া।" },
    { label: "ডেটা সেভ", desc: "আঞ্চলিক খেলোয়াড়দের জন্য দক্ষ ডেটা ব্যবহার।" }
];
bnContent.tech.importance.title = "কেন নিরাপত্তা গুরুত্বপূর্ণ";
bnContent.tech.importance.trust.title = "খেলোয়াড়ের বিশ্বাস";
bnContent.tech.importance.trust.points = ["এনক্রিপ্ট করা লেনদেন", "নিরাপদ প্লেয়ার অ্যাকাউন্ট", "ব্যক্তিগত ডেটা সুরক্ষা"];
bnContent.tech.importance.benefits.title = "গেমিং অভিজ্ঞতা";
bnContent.tech.importance.benefits.points = ["স্পিন চলাকালীন কোন ল্যাগ নেই", "তাৎক্ষণিক বেট আপডেট", "মসৃণ উত্তোলন সিঙ্ক"];

// Mobile
bnContent.mobile.title = "মোবাইল-ফার্স্ট গেমিং";
bnContent.mobile.subtitle = "জিলি গেমগুলি একচেটিয়াভাবে মোবাইল ব্রাউজিং দক্ষতার জন্য ডিজাইন করা হয়েছে।";
bnContent.mobile.features = [
    { title: "এক হাতে খেলা", desc: "উল্লম্ব স্ক্রিন গেমিংয়ের জন্য অপ্টিমাইজড।" },
    { title: "ইনস্ট্যান্ট লোড", desc: "দ্রুত এক্সিকিউশনের জন্য ন্যূনতম অ্যাসেট লোডিং।" },
    { title: "লো ব্যাটারি", desc: "দক্ষ রেন্ডারিং আপনার ডিভাইসের লাইফ বাঁচায়।" }
];
bnContent.mobile.advantages.tech.title = "প্রযুক্তিগত সুবিধা";
bnContent.mobile.advantages.tech.points = [
    { label: "ইঞ্জিন", value: "HTML5 হাইব্রিড" },
    { label: "নেটওয়ার্ক", value: "লো ব্যান্ডউইথ" }
];
bnContent.mobile.advantages.ux.title = "ব্যবহারকারীর অভিজ্ঞতা";
bnContent.mobile.advantages.ux.points = [
    { label: "ইন্টারফেস", value: "পরিষ্কার এবং সহজ" },
    { label: "হ্যাপটিক", value: "ভাইব্রেশন অ্যালার্ট" }
];

// Getting Started
bnContent.gettingStarted.title = "শুরু করতে প্রস্তুত?";
bnContent.gettingStarted.subtitle = "আজই আপনার জিলি অ্যাডভেঞ্চার শুরু করুন।";
bnContent.gettingStarted.steps = [
    "আপনার BIGWIN959 অ্যাকাউন্টে লগ ইন করুন।",
    "স্লট প্রোভাইডার তালিকার অধীনে JILI নির্বাচন করুন।",
    "একটি গেম চয়ন করুন এবং আপনার পছন্দের বেট সেট করুন।",
    "স্পিন করুন এবং বোনাস ফিচার উপভোগ করুন।"
];
bnContent.gettingStarted.disclaimer.label = "প্রো টিপ:";
bnContent.gettingStarted.disclaimer.text = "'বক্সিং কিং' গেমটি দিয়ে শুরু করা একটি দুর্দান্ত অভিজ্ঞতা হতে পারে।";

// Responsible
bnContent.responsible.title = "দায়িত্বশীল খেলা";
bnContent.responsible.tips = ["দৈনিক বাজেটের সীমা সেট করুন।", "জেতার পর থামুন।", "ক্ষতি পূরণ করার চেষ্টা এড়িয়ে চলুন।"];
bnContent.responsible.disclaimer = "জিলি গেমগুলি বিনোদনের জন্য। সীমা সেট করুন এবং আপনার সাধ্যের মধ্যে খেলুন।";

// FAQ
bnContent.faq.title = "সচরাচর জিজ্ঞাসিত প্রশ্ন - BIGWIN959-এ JILI";
bnContent.faq.items[0].q = "জিলি কি বৈধ এবং লাইসেন্সপ্রাপ্ত?"; bnContent.faq.items[0].a = "হ্যাঁ, জিলি একাধিক গেমিং কর্তৃপক্ষের সার্টিফিকেশন সহ একটি সম্পূর্ণ লাইসেন্সপ্রাপ্ত গেম প্রোভাইডার। তারা BIGWIN959-এর মতো শীর্ষ প্ল্যাটফর্মে গেম সরবরাহ করে যা যথাযথ লাইসেন্সের অধীনে কাজ করে।";
bnContent.faq.items[1].q = "আমি কি জিলি গেমসে বড় জিততে পারি?"; bnContent.faq.items[1].a = "অবশ্যই! সুপার এস, লাকি গোল্ডব্রিকস এবং ড্রাগন ট্রেজারের মতো গেমগুলি উচ্চ মাল্টিপ্লায়ার এবং উল্লেখযোগ্য জয়ের সম্ভাবনা অফার করে। কিছু গেম ৫,০০০ গুণ বা তার বেশি ম্যাক্স উইন ফিচার করে।";
bnContent.faq.items[2].q = "অন্যান্য প্রোভাইডারদের থেকে জিলি আলাদা কেন?"; bnContent.faq.items[2].a = "জিলি এশিয়ান-থিমযুক্ত গেমগুলিতে বিশেষজ্ঞ, যার সহজ মেকানিক্স, ঘনঘন বোনাস ফিচার এবং মোবাইল-অপ্টিমাইজড গেমপ্লে রয়েছে। তাদের গেমগুলি বিশেষভাবে বিডি এবং এমএম খেলোয়াড়দের পছন্দের জন্য ডিজাইন করা হয়েছে।";
bnContent.faq.items[3].q = "জিলি গেমস কি মোবাইলে উপলব্ধ?"; bnContent.faq.items[3].a = "হ্যাঁ, সমস্ত জিলি গেম মোবাইল ডিভাইসের জন্য সম্পূর্ণ অপ্টিমাইজ করা। এগুলি অ্যান্ড্রয়েড এবং আইওএস স্মার্টফোন এবং ট্যাবলেটে মসৃণভাবে কাজ করে, এমনকি ৩জি/৪জি সংযোগ সহ মিড-রেঞ্জ ডিভাইসেও।";
bnContent.faq.items[4].q = "নতুনদের জন্য কোন জিলি গেমটি সেরা?"; bnContent.faq.items[4].a = "বক্সিং কিং এবং লাকি গোল্ডব্রিকস নতুনদের জন্য চমৎকার। এগুলির সহজ মেকানিক্স, মাঝারি অস্থিরতা এবং পরিষ্কার বোনাস ফিচার রয়েছে যা বোঝা সহজ।";
bnContent.faq.items[5].q = "জিলি গেমসের RTP কত?"; bnContent.faq.items[5].a = "জিলি গেমগুলির RTP সাধারণত ৯৫% থেকে ৯৭% এর মধ্যে থাকে, যা ইন্ডাস্ট্রিতে প্রতিযোগিতামূলক। গেম অনুসারে সঠিক RTP পরিবর্তিত হয়, বেশিরভাগই ৯৬-৯৬.৫% রেঞ্জে থাকে।";
bnContent.faq.items[6].q = "জিলি গেমসে কি বোনাস ফিচার আছে?"; bnContent.faq.items[6].a = "হ্যাঁ, জিলি গেমগুলি তাদের ঘনঘন বোনাস ফিচারের জন্য পরিচিত যার মধ্যে রয়েছে ফ্রি স্পিন, মাল্টিপ্লায়ার, মিনি-গেম এবং বিশেষ সিম্বল মেকানিক্স। অনেক গেমেই একাধিক বোনাস রাউন্ড থাকে।";
bnContent.faq.items[7].q = "BIGWIN959-এ আমি কীভাবে জিলি গেম খুঁজব?"; bnContent.faq.items[7].a = "BIGWIN959-এ লগ ইন করুন, স্লট বিভাগে যান এবং 'JILI' নির্বাচন করতে প্রোভাইডার ফিল্টার ব্যবহার করুন। আপনি 'সুপার এস' বা 'বক্সিং কিং'-এর মতো নির্দিষ্ট গেমের নাম দিয়েও অনুসন্ধান করতে পারেন।";

// CTA
bnContent.cta.title = "JILI খেলতে প্রস্তুত?";
bnContent.cta.button = "জিলি কোয়েস্ট শুরু করুন";

bn.providers.jili = bnContent;

fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
fs.writeFileSync(bnPath, JSON.stringify(bn, null, 2));

console.log('Updated JILI keys with COMPARISON TABLE.');
