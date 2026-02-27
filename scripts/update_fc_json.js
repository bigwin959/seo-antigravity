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

ensurePath(en, 'providers.fc');
ensurePath(bn, 'providers.fc');

const fcContentEn = {
    seo: {
        title: "FC Gaming (Fa Chai) on BIGWIN959 | Slots & Fishing (2025)",
        description: "Fa Chai (FC) Gaming on BIGWIN959. Explore high-quality slots, fishing games, and unique Asian-themed titles with high speed performance.",
        keywords: ["FC Gaming", "Fa Chai", "BIGWIN959", "fishing games", "online slots", "Asian slots"],
        schema: {
            headline: "FC Gaming (Fa Chai) on BIGWIN959 – Slots & Fishing",
            description: "A comprehensive guide to Fa Chai Gaming on BIGWIN959. Discover top games and features."
        }
    },
    hero: {
        badge: "Leading Asian Game Innovator",
        title: "FC Gaming on <span class=\"text-brand\">BIGWIN959</span> <br /> <span class=\"text-2xl md:text-3xl text-gray-300 font-bold block mt-4\">Slots & Fishing Games</span>",
        subtitle: "Experience high-quality slots, fishing games, and unique Asian-themed titles from one of Asia's top providers.",
        cta: { play: "Explore FC Gaming Now" }
    },
    intro: {
        title: "Fa Chai (FC) Gaming Excellence",
        desc: "Fa Chai, often known as FC Gaming, is a premier provider of high-quality casino content, specializing in slots, fishing games, and arcade-style entertainment for the Asian market.",
        foundation: {
            title: "Performance Excellence",
            foundedLabel: "Market Status:",
            hqLabel: "Operational Focus:",
            licensesLabel: "Reliability:",
            specLabel: "Core Expertise:",
            specValue: "High-speed arcade and fishing game mechanics",
            desc: "FC Gaming is built on a foundation of speed and excitement, delivering games that load instantly and play smoothly across all devices."
        },
        philosophy: {
            title: "Fa Chai Core Philosophy",
            points: [
                { label: "Player Prosperity", value: "Namesake 'Fa Chai' means to get rich—reflecting big win potential." },
                { label: "Arcade Spirit", value: "Fast-paced action that goes beyond traditional slots." },
                { label: "Technical Precision", value: "Lightweight games optimized for mobile data efficiency." }
            ]
        },
        features: ["Ultra-Fast Loading", "Unique Fishing Mechanics", "High RTP Slots", "Mobile-Optimized UI"]
    },
    innovation: {
        title: "FC INNOVATION",
        subtitle: "Redefining the arcade experience with modern digital mechanics and stunning visual effects.",
        features: {
            title: "Distinctive Advantages",
            items: [
                { label: "Fishing Mastery", value: "Multiplayer fishing games with specialized weapon systems." },
                { label: "Visual Clarity", value: "High-definition assets that scale perfectly on mobile." }
            ]
        },
        mechanics: {
            title: "The FC Gaming Flow",
            steps: [
                { title: "Select Mode", desc: "Choose between classic slots or interactive fishing." },
                { title: "Target & Shoot", desc: "In fishing games, use skill to target high-value creatures." },
                { title: "Collect Winnings", desc: "Instant payout processing on every game." }
            ]
        }
    },
    portfolio: {
        title: "FC Gaming Legendary Slots",
        subtitle: "Explore the games that made Fa Chai a household name on BIGWIN959. Each title is crafted for maximum engagement.",
        labels: { rtp: "RTP", maxWin: "Max Win", features: "Key Highlights" },
        playNow: "Play Now",
        games: [
            {
                title: "Star Hunter", category: "Fishing Game", rtp: "97.0%", maxWin: "500x",
                features: ["Skill-based Shooting", "Multiplayer Action"],
                description: "The crown jewel of FC fishing games. Use precision to hunt space creatures and win big rewards.",
                popularity: "★★★★★",
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767708509/FC-StarHunter.png"
            },
            {
                title: "Monkey King", category: "Arcade Slot", rtp: "96.5%", maxWin: "1000x",
                features: ["Bonus Battle", "Sticky Wilds"],
                description: "Join the legendary Monkey King in this action-packed slot featuring epic battles and massive rewards.",
                popularity: "★★★★★",
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767708309/FC-Monkey%20King.jpg"
            },
            {
                title: "Golden Fortune", category: "Classic Slot", rtp: "96.8%", maxWin: "2000x",
                features: ["Lucky Respins", "Gold Symbols"],
                description: "A prosperous slot game celebrating wealth and fortune. Spin for golden riches!",
                popularity: "★★★★☆",
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767708308/FC-Golden%20Fortune.png"
            },
            {
                title: "Super Elements", category: "Sci-Fi Arcade", rtp: "97.0%", maxWin: "5000x",
                features: ["Elemental Combos", "Cascade Wins"],
                description: "Harness the power of the elements in this futuristic game offering unique combo mechanics.",
                popularity: "★★★★★",
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767708510/FC-SuperElements.png"
            }
        ]
    },
    tech: {
        title: "FC Gaming Technology",
        subtitle: "Built for speed and fairness, FC technology ensures a premium gaming environment.",
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
        title: "Mobile-First Excellence",
        subtitle: "FC games are designed from the ground up to provide a premium experience on mobile devices.",
        features: [
            { title: "One-Hand Play", desc: "Optimized UI for comfortable portrait gaming." },
            { title: "Fast Loading", desc: "Quick asset delivery for instant action." },
            { title: "Low Data", desc: "Efficient protocols that save your mobile data." }
        ],
        advantages: {
            tech: {
                title: "Technical Assets",
                points: [
                    { label: "Engine", value: "Proprietary HTML5" },
                    { label: "Resolution", value: "HD Adaptive" }
                ]
            },
            ux: {
                title: "User Experience",
                points: [
                    { label: "Touch", value: "Haptic Feedback" },
                    { label: "Interface", value: "Minimalist HUD" }
                ]
            }
        }
    },
    gettingStarted: {
        title: "Ready to Play FC?",
        subtitle: "Join BIGWIN959 today and explore the vast world of Fa Chai games.",
        steps: [
            "Visit BIGWIN959 and register your account.",
            "Navigate to the 'Fishing' or 'Slots' section.",
            "Search for 'FC' or use the provider filter.",
            "Choose your favorite game and start spinning!"
        ],
        disclaimer: {
            label: "Safety First",
            text: "Always play responsibly and set limits for your gaming sessions."
        }
    },
    faq: {
        title: "Frequently Asked Questions - FC Gaming",
        items: [
            { q: "Is FC Gaming legal?", a: "Yes, FC is a fully licensed provider used by top platforms like BIGWIN959." },
            { q: "What are fishing games?", a: "They are skill-based arcade games where you shoot fish for rewards. Star Hunter is a prime example." },
            { q: "Can I play FC games on mobile?", a: "Absolutely. FC games are designed 'Mobile-First' and work perfectly on all smartphones." },
            { q: "Which game is best for beginners?", a: "Golden Fortune is great for its simplicity, while Monkey King offers exciting action." },
            { q: "What is the RTP of FC games?", a: "RTP generally ranges from 96% to 97%, ensuring fair play and good returns." },
            { q: "Do FC games have bonuses?", a: "Yes, most slots feature Free Spins, Multipliers, and unique Bonus Games." },
            { q: "How do I start playing?", a: "Log in to BIGWIN959, go to 'Providers', select 'FC', and choose a game." },
            { q: "Are the games fair?", a: "Yes, all games utilize certified RNG technology for random and fair outcomes." }
        ]
    },
    responsible: {
        title: "Responsible Play",
        tips: ["Set daily budget limits.", "Stop after a big win.", "Never chase losses."],
        disclaimer: "FC games are for entertainment. Set limits and play within your means."
    },
    cta: {
        title: "Ready for Victory?",
        button: "Play FC Now"
    }
};

en.providers.fc = fcContentEn;

// Full Bengali Translation
const bnContent = JSON.parse(JSON.stringify(fcContentEn));

// SEO
bnContent.seo.title = "BIGWIN959-এ FC গেমিং (Fa Chai) | স্লট ও ফিশিং গেমস (২০২৫)";
bnContent.seo.description = "BIGWIN959-এ ফা চাউ (FC) গেমিং। উচ্চ মানের স্লট, ফিশিং গেম এবং এশিয়ান থিমযুক্ত অনন্য গেমগুলি অন্বেষণ করুন।";
bnContent.seo.keywords = ["FC গেমিং", "ফা চাউ", "BIGWIN959", "ফিশিং গেমস", "অনলাইন স্লট", "এশিয়ান স্লট"];
bnContent.seo.schema.headline = "BIGWIN959-এ FC গেমিং – স্লট এবং ফিশিং গাইড";
bnContent.seo.schema.description = "BIGWIN959-এ ফা চাউ গেমিং সম্পর্কে বিস্তারিত। সেরা গেম এবং বৈশিষ্ট্যগুলি জানুন।";

// Hero
bnContent.hero.badge = "লিডিং এশিয়ান গেম ইনোভেটর";
bnContent.hero.title = "BIGWIN959-এ <span class=\"text-brand\">FC গেমিং</span> <br /> <span class=\"text-2xl md:text-3xl text-gray-300 font-bold block mt-4\">স্লট এবং ফিশিং গেমস</span>";
bnContent.hero.subtitle = "এশিয়ার অন্যতম সেরা প্রোভাইডারের কাছ থেকে উচ্চ মানের স্লট, ফিশিং গেম এবং অনন্য এশিয়ান থিমযুক্ত গেমের অভিজ্ঞতা নিন।";
bnContent.hero.cta.play = "এখনই FC গেমিং এক্সপ্লোর করুন";

// Intro
bnContent.intro.title = "ফা চাউ (FC) গেমিং এক্সিলেন্স";
bnContent.intro.desc = "ফা চাউ, যা সাধারণত FC গেমিং নামে পরিচিত, এশিয়ান বাজারের জন্য উচ্চ মানের স্লট, ফিশিং গেম এবং আর্কেড-স্টাইল বিনোদনের একটি প্রধান প্রদানকারী।";
bnContent.intro.foundation.title = "পারফরম্যান্স এক্সিলেন্স";
bnContent.intro.foundation.foundedLabel = "মার্কেট স্ট্যাটাস:";
bnContent.intro.foundation.hqLabel = "অপারেশনাল ফোকাস:";
bnContent.intro.foundation.licensesLabel = "নির্ভরযোগ্যতা:";
bnContent.intro.foundation.specLabel = "মূল দক্ষতা:";
bnContent.intro.foundation.specValue = "উচ্চ-গতির আর্কেড এবং ফিশিং গেম মেকানিক্স";
bnContent.intro.foundation.desc = "FC গেমিং গতি এবং উত্তেজনার ভিত্তিতে তৈরি, এমন গেম সরবরাহ করে যা তাত্ক্ষণিকভাবে লোড হয় এবং সমস্ত ডিভাইসে মসৃণভাবে চলে।";

bnContent.intro.philosophy.title = "ফা চাউ মূল দর্শন";
bnContent.intro.philosophy.points = [
    { label: "খেলোয়াড়ের সমৃদ্ধি", value: "'ফা চাউ' নামের অর্থ ধনী হওয়া—যা বড় জয়ের সম্ভাবনার প্রতিফলন।" },
    { label: "আর্কেড স্পিরিট", value: "দ্রুত গতির অ্যাকশন যা ঐতিহ্যবাহী স্লটের বাইরে যায়।" },
    { label: "প্রযুক্তিগত নির্ভুলতা", value: "মোবাইল ডেটা দক্ষতার জন্য অপ্টিমাইজ করা হালকা গেম।" }
];
bnContent.intro.features = ["আল্ট্রা-ফাস্ট লোডিং", "অনন্য ফিশিং মেকানিক্স", "উচ্চ RTP স্লট", "মোবাইল-অপ্টিমাইজড UI"];

// Innovation
bnContent.innovation.title = "FC ইনোভেশন";
bnContent.innovation.subtitle = "আধুনিক ডিজিটাল মেকানিক্স এবং অত্যাশ্চর্য ভিজ্যুয়াল ইফেক্টের সাথে আর্কেড অভিজ্ঞতাকে নতুনভাবে সংজ্ঞায়িত করছে।";
bnContent.innovation.features.title = "স্বতন্ত্র সুবিধা";
bnContent.innovation.features.items = [
    { label: "ফিশিং মাস্টারি", value: "বিশেষ অস্ত্র সিস্টেম সহ মাল্টিপ্লেয়ার ফিশিং গেম।" },
    { label: "ভিজ্যুয়াল ক্লারিটি", value: "হাই-ডেফিনিশন অ্যাসেট যা মোবাইলে নিখুঁতভাবে স্কেল করে।" }
];
bnContent.innovation.mechanics.title = "FC গেমিং প্রবাহ";
bnContent.innovation.mechanics.steps = [
    { title: "মোড নির্বাচন করুন", desc: "ক্লাসিক স্লট বা ইন্টারেক্টিভ ফিশিংয়ের মধ্যে বেছে নিন।" },
    { title: "লক্ষ্য এবং শুট", desc: "ফিশিং গেমে, উচ্চ মূল্যের প্রাণী শিকার করতে দক্ষতা ব্যবহার করুন।" },
    { title: "উইনিং সংগ্রহ করুন", desc: "প্রতিটি গেমে তাত্ক্ষণিক পেআউট প্রসেসিং।" }
];

// Portfolio
bnContent.portfolio.title = "FC গেমিং কিংবদন্তি স্লট";
bnContent.portfolio.subtitle = "BIGWIN959-এ ফা চাউ-কে জনপ্রিয় করা গেমগুলি অন্বেষণ করুন। প্রতিটি শিরোনাম সর্বোচ্চ এনগেজমেন্টের জন্য তৈরি।";
bnContent.portfolio.labels = { rtp: "RTP", maxWin: "ম্যাক্স উইন", features: "মূল হাইলাইট" };
bnContent.portfolio.playNow = "এখন খেলুন";
bnContent.portfolio.games = [
    {
        title: "Star Hunter", category: "ফিশিং গেম", rtp: "৯৭.০%", maxWin: "৫০০x",
        features: ["স্কিল-বেসড শুটিং", "মাল্টিপ্লেয়ার অ্যাকশন"],
        description: "FC ফিশিং গেমের রত্ন। মহাকাশের প্রাণী শিকার করতে এবং বড় পুরস্কার জিততে নির্ভুলতা ব্যবহার করুন।",
        popularity: "★★★★★",
        img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767708509/FC-StarHunter.png"
    },
    {
        title: "Monkey King", category: "আর্কেড স্লট", rtp: "৯৬.৫%", maxWin: "১০০০x",
        features: ["বোনাস ব্যাটল", "স্টিকি ওয়াইল্ডস"],
        description: "মহাকাব্যিক যুদ্ধ এবং বিশাল পুরস্কার সহ এই অ্যাকশন-প্যাকড স্লটে কিংবদন্তি মাঙ্কি কিংয়ের সাথে যোগ দিন।",
        popularity: "★★★★★",
        img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767708309/FC-Monkey%20King.jpg"
    },
    {
        title: "Golden Fortune", category: "ক্লাসিক স্লট", rtp: "৯৬.৮%", maxWin: "২০০০x",
        features: ["লাকি রিস্পিন", "গোল্ড সিম্বল"],
        description: "সম্পদ এবং ভাগ্য উদযাপনকারী একটি সমৃদ্ধ স্লট গেম। সোনার ধন জিততে স্পিন করুন!",
        popularity: "★★★★☆",
        img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767708308/FC-Golden%20Fortune.png"
    },
    {
        title: "Super Elements", category: "সাই-ফাই আর্কেড", rtp: "৯৭.০%", maxWin: "৫০০০x",
        features: ["এলিমেন্টাল কম্বো", "ক্যাসকেড উইন"],
        description: "অনন্য কম্বো মেকানিক্স অফার করা এই ফিউচারিস্টিক গেমে উপাদানগুলির শক্তি কাজে লাগান।",
        popularity: "★★★★★",
        img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767708510/FC-SuperElements.png"
    }
];

// Tech
bnContent.tech.title = "FC গেমিং প্রযুক্তি";
bnContent.tech.subtitle = "গতি এবং ন্যায্যতার জন্য তৈরি, FC প্রযুক্তি একটি প্রিমিয়াম গেমিং পরিবেশ নিশ্চিত করে।";
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
bnContent.mobile.title = "মোবাইল-ফার্স্ট এক্সিলেন্স";
bnContent.mobile.subtitle = "FC গেমগুলি শুরু থেকেই মোবাইল ডিভাইসে প্রিমিয়াম অভিজ্ঞতা প্রদানের জন্য ডিজাইন করা হয়েছে।";
bnContent.mobile.features = [
    { title: "এক হাতে খেলা", desc: "আরামদায়ক পোর্ট্রেট গেমিংয়ের জন্য অপ্টিমাইজড UI।" },
    { title: "ফাস্ট লোডিং", desc: "তাত্ক্ষণিক অ্যাকশনের জন্য দ্রুত অ্যাসেট ডেলিভারি।" }
];

// FAQ
bnContent.faq.title = "সচরাচর জিজ্ঞাসিত প্রশ্ন - FC গেমিং";
bnContent.faq.items = [
    { q: "FC গেমিং কি বৈধ?", a: "হ্যাঁ, FC একটি সম্পূর্ণ লাইসেন্সপ্রাপ্ত প্রোভাইডার যা BIGWIN959-এর মতো শীর্ষ প্ল্যাটফর্ম দ্বারা ব্যবহৃত হয়।" },
    { q: "ফিশিং গেম কী?", a: "এগুলি দক্ষতা-ভিত্তিক আর্কেড গেম যেখানে আপনি পুরস্কারের জন্য মাছ শিকার করেন। স্টার হান্টার এর একটি প্রধান উদাহরণ।" },
    { q: "আমি কি মোবাইলে FC গেম খেলতে পারি?", a: "অবশ্যই। FC গেমগুলি 'মোবাইল-ফার্স্ট' ডিজাইনে তৈরি এবং সমস্ত স্মার্টফোনে নিখুঁতভাবে কাজ করে।" },
    { q: "নতুনদের জন্য কোন গেমটি সেরা?", a: "গোল্ডেন ফরচুন তার সরলতার জন্য দুর্দান্ত, এবং মাঙ্কি কিং উত্তেজনাপূর্ণ অ্যাকশন অফার করে।" },
    { q: "FC গেমসের RTP কত?", a: "RTP সাধারণত ৯৬% থেকে ৯৭% এর মধ্যে থাকে, যা ন্যায্য খেলা এবং ভাল রিটার্ন নিশ্চিত করে।" },
    { q: "FC গেমসে কি বোনাস আছে?", a: "হ্যাঁ, বেশিরভাগ স্লটে ফ্রি স্পিন, মাল্টিপ্লায়ার এবং অনন্য বোনাস গেম রয়েছে।" },
    { q: "আমি কিভাবে খেলা শুরু করব?", a: "BIGWIN959-এ লগ ইন করুন, 'প্রোভাইডার'-এ যান, 'FC' নির্বাচন করুন এবং একটি গেম বেছে নিন।" },
    { q: "গেমগুলি কি ন্যায্য?", a: "হ্যাঁ, সমস্ত গেম র্যান্ডম এবং ন্যায্য ফলাফলের জন্য সার্টিফাইড RNG প্রযুক্তি ব্যবহার করে।" }
];

bn.providers.fc = bnContent;

fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
fs.writeFileSync(bnPath, JSON.stringify(bn, null, 2));

console.log('Updated FC keys with CORRECT NESTING.');
