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

ensurePath(en, 'providers.jdb');
ensurePath(bn, 'providers.jdb');

const content = {
    seo: {
        title: "JDB Games on BIGWIN959 | Slots, Features & Complete Player Guide (2025)",
        description: "JDB slot games on BIGWIN959. Learn about popular JDB slots, features, volatility, and why JDB is trusted by Bangladesh & Myanmar players.",
        keywords: ["JDB", "JDB Slots", "BIGWIN959", "Online Slots", "Bangladesh", "Myanmar"],
        schema: {
            headline: "JDB Games on BIGWIN959 – Official Slot Provider Guide",
            description: "Learn about JDB slot games, gameplay features, volatility style, and why JDB is a top choice for BD & MM players."
        }
    },
    hero: {
        title: "JDB Games on <span class=\"text-brand\">BIGWIN959</span> <br /> <span class=\"text-2xl md:text-3xl text-gray-300 font-bold block mt-4\">Official Slot Provider Guide</span>",
        subtitle: "Learn about JDB slot games, gameplay features, volatility style, and why JDB is a top choice for BD & MM players.",
        cta: { play: "Play JDB Games on BIGWIN959" }
    },
    intro: {
        title: "Who Is JDB (Just Do the Best)?",
        p1: "JDB is a professional game development company focused on online slot games, fishing/shooting games, and bonus-driven arcade-style titles.",
        p2: "According to publicly available information and official descriptions, JDB emphasizes:",
        features: ["High-quality graphics", "Modern mechanics", "Asian-inspired themes", "Stable performance"],
        p3: "JDB games are designed to feel premium but approachable, making them suitable for both casual players and experienced slot users."
    },
    whyPopular: {
        title: "Why JDB Games Are Popular with BD & MM Players",
        items: [
            { title: "Premium Visuals", desc: "Smooth animations and modern symbol design." },
            { title: "Balanced Play", desc: "Not too simple, not overly complex." },
            { title: "Strong Bonuses", desc: "Free spins, multipliers, and explosions." },
            { title: "Thematic Variety", desc: "Fortune, dragons, gems, and adventure." },
            { title: "Mobile Reliable", desc: "Works well even on mid-range devices." }
        ]
    },
    topGames: {
        title: "Popular JDB Slot Games",
        items: [
            { title: "Boom Legend", type: "Slot", features: "Modern design, Multiplier potential", img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767689373/JDB-Section-Boom-Legend.jpg" },
            { title: "Lucky Lion", type: "Slot", features: "Classic fortune theme, Free spins", img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767689375/JDB-Section-Lucky-Lion.jpg" },
            { title: "Golden Empire", type: "Slot", features: "Ancient theme, High volatility", img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767689375/JDB-Section-Golden-Empire.jpg" },
            { title: "Fishing Games", type: "Arcade", features: "Fast action, Skill-style feel", img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767689374/JDB-Section-Fishing-Games.jpg" }
        ]
    },
    portfolio: {
        title: "JDB Premium Slots Portfolio",
        subtitle: "Explore the most played titles from JDB. Each game is designed for high-performance and spectacular visuals.",
        labels: { rtp: "Volatility", maxWin: "Jackpot Type", features: "Bonus Feature" },
        playNow: "Play Now",
        games: [
            {
                title: "Boom Legend", category: "Modern Slot", rtp: "High", maxWin: "Multiplier",
                features: ["Exploding Reels", "Free Spins", "Wild Multipliers"],
                description: "A fast-paced slot with modern mechanics and huge win potential through its unique explosion feature.",
                popularity: "★★★★★",
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767689373/JDB-Section-Boom-Legend.jpg"
            },
            {
                title: "Lucky Lion", category: "Classic Fortune", rtp: "Medium", maxWin: "Bonus Tier",
                features: ["Fortune Symbols", "Instant Wins", "Clear UI"],
                description: "A fan favorite in Bangladesh for its clear rules and exciting bonus rounds themed around Asian luck.",
                popularity: "★★★★★",
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767689375/JDB-Section-Lucky-Lion.jpg"
            },
            {
                title: "Golden Empire", category: "Ancient History", rtp: "Medium-High", maxWin: "Imperial Win",
                features: ["Locked Wilds", "Increasing Multipliers", "HD Graphics"],
                description: "Experience the wealth of the Golden Empire. Features deep graphics and immersive soundscapes.",
                popularity: "★★★★☆",
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767689375/JDB-Section-Golden-Empire.jpg"
            },
            {
                title: "Fishing Games", category: "Arcade / Shooting", rtp: "Variable", maxWin: "Skill Reward",
                features: ["Interactive Play", "Boss Fights", "Ammo Upgrades"],
                description: "A unique arcade experience where your aim translates into rewards. High-speed action and social features.",
                popularity: "★★★★★",
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767689374/JDB-Section-Fishing-Games.jpg"
            }
        ]
    },
    features: {
        title: "Key Gameplay Features of JDB Slots",
        items: [
            { title: "1. Strong Bonus Rounds", desc: "Most JDB slots include free spins, random multipliers, and scatter-triggered features with visual explosion effects." },
            { title: "2. Medium-to-High Volatility", desc: "JDB games often balance frequent small wins with occasional high-value bonus rounds, appealing to experienced players." },
            { title: "3. Premium Graphics", desc: "JDB invests heavily in smooth animations, high-resolution symbols, and modern user interfaces." },
            { title: "4. Mobile-First Optimization", desc: "Designed to run smoothly on Android phones, mobile browsers, and tablets without lag." }
        ]
    },
    profile: {
        title: "JDB Slot Provider Profile",
        feature: "Feature",
        details: "Details",
        items: [
            { label: "Provider", value: "JDB (Just Do the Best)" },
            { label: "Game Types", value: "Slots, Fishing, Bonus Games" },
            { label: "Gameplay Style", value: "Balanced, Bonus-focused" },
            { label: "Volatility", value: "Medium to High (varies by game)" },
            { label: "Mobile Support", value: "Full (Android & Browser)" },
            { label: "Target Players", value: "Casual & Experienced slot players" }
        ]
    },
    howToFind: {
        title: "How to Play JDB Games on BIGWIN959",
        steps: [
            "Visit BIGWIN959.vip and log in.",
            "Go to 'Slots', 'Casino', or 'Game Lobby'.",
            "Use the 'Provider' filter and select 'JDB'.",
            "Or use the search bar for games like 'Boom Legend'.",
            "Choose a game, set your bet, and tap Spin."
        ],
        note: "All JDB game results are generated by RNG (Random Number Generator) systems."
    },
    comparison: {
        title: "JDB Compared with Other Popular Providers",
        columns: { provider: "Provider", style: "Gameplay Style", risk: "Risk Level", bestFor: "Best For" },
        rows: [
            { provider: "JDB", style: "Premium, balanced", risk: "Medium–High", bestFor: "Players who like polished slots" },
            { provider: "JILI", style: "Simple, casual", risk: "Low–Medium", bestFor: "Beginners & casual users" },
            { provider: "Pragmatic Play", style: "High multipliers", risk: "Medium–High", bestFor: "Big-win seekers" }
        ]
    },
    responsible: {
        title: "Responsible Play Tips for JDB Slots",
        tips: ["Set a clear entertainment budget", "Avoid increasing bets after losses", "Take regular breaks", "Don’t play when emotional"],
        disclaimer: "Remember: no slot guarantees profit. JDB games are entertainment products and always involve risk."
    },
    faq: {
        title: "FAQ – JDB Games on BIGWIN959",
        items: [
            { q: "Are JDB games fair?", a: "Yes. JDB uses RNG technology to ensure random outcomes." },
            { q: "Which JDB game is good for beginners?", a: "Boom Legend and Lucky Lion are easier to understand." },
            { q: "Can JDB games guarantee profit?", a: "No. All results are based on chance. There are no “sure-win” methods." },
            { q: "Can I play JDB games on mobile?", a: "Yes. JDB games are fully optimized for mobile devices." },
            { q: "Is this page the official JDB website?", a: "No. This is an independent information guide. To play JDB games, visit BIGWIN959.vip." }
        ]
    },
    cta: {
        title: "Explore JDB Games Responsibly",
        button: "Play JDB Games on BIGWIN959"
    }
};

en.providers.jdb = content;

// Translate keys for Bengali
const bnContent = JSON.parse(JSON.stringify(content));
bnContent.seo.title = "BIGWIN959-এ JDB গেমস | স্লটস, বৈশিষ্ট্য এবং সম্পূর্ণ প্লেয়ার গাইড (২০২৫)";
bnContent.seo.description = "BIGWIN959-এ JDB স্লট গেমস। জনপ্রিয় JDB স্লট, বৈশিষ্ট্য, অস্থিরতা এবং কেন JDB বিডি ও এমএম খেলোয়াড়দের দ্বারা বিশ্বস্ত সে সম্পর্কে জানুন।";
bnContent.seo.keywords = ["JDB", "JDB স্লটস", "BIGWIN959", "অনলাইন স্লটস", "বাংলাদেশ", "মায়ানমার"];
bnContent.seo.schema.headline = "BIGWIN959-এ JDB গেমস – অফিসিয়াল স্লট প্রোভাইডার গাইড";
bnContent.seo.schema.description = "JDB স্লট গেমস, গেমপ্লে বৈশিষ্ট্য, অস্থিরতা শৈলী এবং কেন JDB বিডি ও এমএম খেলোয়াড়দের জন্য সেরা পছন্দ সে সম্পর্কে জানুন।";
bnContent.hero.title = "BIGWIN959-এ <span class=\"text-brand\">JDB গেমস</span> <br /> <span class=\"text-2xl md:text-3xl text-gray-300 font-bold block mt-4\">অফিসিয়াল স্লট প্রোভাইডার গাইড</span>";
bnContent.hero.subtitle = "JDB স্লট গেমস, গেমপ্লে বৈশিষ্ট্য, অস্থিরতা শৈলী এবং কেন JDB বিডি ও এমএম খেলোয়াড়দের জন্য সেরা পছন্দ সে সম্পর্কে জানুন।";
bnContent.hero.cta.play = "BIGWIN959-এ JDB গেমস খেলুন";
bnContent.intro.title = "JDB (Just Do the Best) কারা?";
bnContent.intro.p1 = "JDB একটি পেশাদার গেম ডেভেলপমেন্ট কোম্পানি যা অনলাইন স্লট গেম, ফিশিং/শুটিং গেম এবং বোনাস-চালিত আর্কেড-স্টাইলের শিরোনামগুলিতে মনোনিবেশ করে।";
bnContent.intro.p2 = "পাবলিকলি উপলব্ধ তথ্য এবং অফিসিয়াল বর্ণনা অনুসারে, JDB জোর দেয়:";
bnContent.intro.features = ["উচ্চ-মানের গ্রাফিক্স", "আধুনিক মেকানিক্স", "এশিয়ান-অনুপ্রাণিত থিম", "স্থিতিশীল পারফরম্যান্স"];
bnContent.intro.p3 = "JDB গেমগুলি প্রিমিয়াম কিন্তু সহজলভ্য মনে করার জন্য ডিজাইন করা হয়েছে, যা নৈমিত্তিক খেলোয়াড় এবং অভিজ্ঞ স্লট ব্যবহারকারী উভয়ের জন্যই উপযুক্ত।";
bnContent.whyPopular.title = "কেন JDB গেমস বিডি ও এমএম খেলোয়াড়দের কাছে জনপ্রিয়";
bnContent.whyPopular.items[0].title = "প্রিমিয়াম ভিজ্যুয়াল"; bnContent.whyPopular.items[0].desc = "মসৃণ অ্যানিমেশন এবং আধুনিক সিম্বল ডিজাইন।";
bnContent.whyPopular.items[1].title = "ভারসাম্যপূর্ণ খেলা"; bnContent.whyPopular.items[1].desc = "খুব সাধারণ নয়, আবার অতিরিক্ত জটিলও নয়।";
bnContent.whyPopular.items[2].title = "শক্তিশালী বোনাস"; bnContent.whyPopular.items[2].desc = "ফ্রি স্পিন, মাল্টিপ্লায়ার এবং এক্সপ্লোশন।";
bnContent.whyPopular.items[3].title = "থিম্যাটিক বৈচিত্র্য"; bnContent.whyPopular.items[3].desc = "ভাগ্য, ড্রাগন, রত্ন এবং অ্যাডভেঞ্চার।";
bnContent.whyPopular.items[4].title = "মোবাইল নির্ভরযোগ্য"; bnContent.whyPopular.items[4].desc = "মিড-রেঞ্জ ডিভাইসেও ভালো কাজ করে।";
bnContent.topGames.title = "জনপ্রিয় JDB স্লট গেমস";
// Keeping game names in English mostly
bnContent.topGames.items[0].features = "আধুনিক ডিজাইন, মাল্টিপ্লায়ার সম্ভাবনা";
bnContent.topGames.items[1].features = "ক্লাসিক ফরচুন থিম, ফ্রি স্পিন";
bnContent.topGames.items[2].features = "প্রাচীন থিম, উচ্চ অস্থিরতা";
bnContent.topGames.items[3].features = "দ্রুত অ্যাকশন, স্কিল-স্টাইল অনুভূতি";
bnContent.features.title = "JDB স্লটের মূল গেমপ্লে বৈশিষ্ট্য";
bnContent.features.items[0].title = "১. শক্তিশালী বোনাস রাউন্ড"; bnContent.features.items[0].desc = "বেশিরভাগ JDB স্লটে ফ্রি স্পিন, র্যান্ডম মাল্টিপ্লায়ার এবং ভিজ্যুয়াল এক্সপ্লোশন ইফেক্ট সহ স্ক্যাটার-ট্রিগারড বৈশিষ্ট্য থাকে।";
bnContent.features.items[1].title = "২. মাঝারি-থেকে-উচ্চ অস্থিরতা"; bnContent.features.items[1].desc = "JDB গেমগুলি প্রায়শই মাঝে মাঝে উচ্চ-মানের বোনাস রাউন্ডের সাথে ঘন ঘন ছোট জয়ের ভারসাম্য বজায় রাখে, যা অভিজ্ঞ খেলোয়াড়দের কাছে আবেদন করে।";
bnContent.features.items[2].title = "৩. প্রিমিয়াম গ্রাফিক্স"; bnContent.features.items[2].desc = "JDB মসৃণ অ্যানিমেশন, হাই-রেজোলিউশন সিম্বল এবং আধুনিক ইউজার ইন্টারফেসে প্রচুর বিনিয়োগ করে।";
bnContent.features.items[3].title = "৪. মোবাইল-ফার্স্ট অপ্টিমাইজেশন"; bnContent.features.items[3].desc = "ল্যাগ ছাড়াই অ্যান্ড্রয়েড ফোন, মোবাইল ব্রাউজার এবং ট্যাবলেটে মসৃণভাবে চলার জন্য ডিজাইন করা হয়েছে।";
bnContent.profile.title = "JDB স্লট প্রোভাইডার প্রোফাইল";
bnContent.profile.feature = "বৈশিষ্ট্য";
bnContent.profile.details = "বিবরণ";
bnContent.profile.items[0].label = "প্রোভাইডার"; bnContent.profile.items[0].value = "JDB (Just Do the Best)";
bnContent.profile.items[1].label = "গেমের ধরণ"; bnContent.profile.items[1].value = "স্লটস, ফিশিং, বোনাস গেমস";
bnContent.profile.items[2].label = "গেমপ্লে স্টাইল"; bnContent.profile.items[2].value = "ভারসাম্যপূর্ণ, বোনাস-ফোকাসড";
bnContent.profile.items[3].label = "অস্থিরতা"; bnContent.profile.items[3].value = "মাঝারি থেকে উচ্চ (গেম অনুযায়ী পরিবর্তিত হয়)";
bnContent.profile.items[4].label = "মোবাইল সাপোর্ট"; bnContent.profile.items[4].value = "পূর্ণ (অ্যান্ড্রয়েড ও ব্রাউজার)";
bnContent.profile.items[5].label = "টার্গেট প্লেয়ার"; bnContent.profile.items[5].value = "নৈমিত্তিক ও অভিজ্ঞ স্লট খেলোয়াড়";
bnContent.howToFind.title = "কিভাবে BIGWIN959-এ JDB গেমস খেলবেন";
bnContent.howToFind.steps = [
    "BIGWIN959.vip ভিজিট করুন এবং লগ ইন করুন।",
    "'স্লটস', 'ক্যাসিনো', বা 'গেম লবি'-তে যান।",
    "'প্রোভাইডার' ফিল্টার ব্যবহার করুন এবং 'JDB' নির্বাচন করুন।",
    "অথবা 'Boom Legend'-এর মতো গেমের জন্য সার্চ বার ব্যবহার করুন।",
    "একটি গেম চয়ন করুন, আপনার বাজি সেট করুন এবং স্পিন ট্যাপ করুন।"
];

bnContent.portfolio.title = "JDB প্রিমিয়াম স্লটস পোর্টফোলিও";
bnContent.portfolio.subtitle = "JDB থেকে সবচেয়ে বেশি খেলা টাইটেলগুলি অন্বেষণ করুন। প্রতিটি গেম উচ্চ-পারফরম্যান্স এবং চমৎকার ভিজ্যুয়ালের জন্য ডিজাইন করা হয়েছে।";
bnContent.portfolio.labels = { rtp: "অস্থিরতা", maxWin: "জ্যাকপট ধরণ", features: "বোনাস সুবিধা" };
bnContent.portfolio.playNow = "এখনই খেলুন";
bnContent.portfolio.games[0].category = "আধুনিক স্লট"; bnContent.portfolio.games[0].description = "এর অনন্য এক্সপ্লোশন বৈশিষ্ট্যের মাধ্যমে আধুনিক মেকানিক্স এবং বিশাল জয়ের সম্ভাবনা সহ একটি দ্রুত গতির স্লট।";
bnContent.portfolio.games[1].category = "ক্লাসিক ফরচুন"; bnContent.portfolio.games[1].description = "এশিয়ান ভাগ্যের থিমযুক্ত এবং রোমাঞ্চকর বোনাস রাউন্ডের জন্য বাংলাদেশে একটি প্রিয় গেম।";
bnContent.portfolio.games[2].category = "প্রাচীন ইতিহাস"; bnContent.portfolio.games[2].description = "গোল্ডেন এম্পায়ারের ধন-সম্পদ অনুভব করুন। এতে গভীর গ্রাফিক্স এবং মগ্ন সাউন্ডস্কেপ রয়েছে।";
bnContent.portfolio.games[3].category = "আর্কিড / শুটিং"; bnContent.portfolio.games[3].description = "একটি অনন্য আর্কেড অভিজ্ঞতা যেখানে আপনার লক্ষ্য পুরস্কারে রূপান্তরিত হয়। উচ্চ গতির অ্যাকশন এবং সামাজিক বৈশিষ্ট্য।";
bnContent.howToFind.note = "সমস্ত JDB গেমের ফলাফল RNG (র্যান্ডম নম্বর জেনারেটর) সিস্টেম দ্বারা তৈরি করা হয়।";
bnContent.comparison.title = "অন্যান্য জনপ্রিয় প্রোভাইডারদের সাথে JDB-র তুলনা";
bnContent.comparison.columns.provider = "প্রোভাইডার";
bnContent.comparison.columns.style = "গেমপ্লে স্টাইল";
bnContent.comparison.columns.risk = "ঝুঁকির মাত্রা";
bnContent.comparison.columns.bestFor = "যাদের জন্য সেরা";
bnContent.comparison.rows[0].provider = "JDB"; bnContent.comparison.rows[0].style = "প্রিমিয়াম, ভারসাম্যপূর্ণ"; bnContent.comparison.rows[0].risk = "মাঝারি–উচ্চ"; bnContent.comparison.rows[0].bestFor = "যারা পলিশড স্লট পছন্দ করেন";
bnContent.comparison.rows[1].provider = "JILI"; bnContent.comparison.rows[1].style = "সহজ, নৈমিত্তিক"; bnContent.comparison.rows[1].risk = "কম–মাঝারি"; bnContent.comparison.rows[1].bestFor = "নতুন এবং নৈমিত্তিক ব্যবহারকারী";
bnContent.comparison.rows[2].provider = "Pragmatic Play"; bnContent.comparison.rows[2].style = "উচ্চ মাল্টিপ্লায়ার"; bnContent.comparison.rows[2].risk = "মাঝারি–উচ্চ"; bnContent.comparison.rows[2].bestFor = "বড় জয়ের সন্ধানকারী";
bnContent.responsible.title = "JDB স্লটের জন্য দায়িত্বশীল খেলার টিপস";
bnContent.responsible.tips = ["একটি পরিষ্কার বিনোদন বাজেট সেট করুন", "ক্ষতির পরে বাজি বাড়ানো এড়িয়ে চলুন", "নিয়মিত বিরতি নিন", "আবেগপ্রবণ হলে খেলবেন না"];
bnContent.responsible.disclaimer = "মনে রাখবেন: কোনো স্লট মুনাফার নিশ্চয়তা দেয় না। JDB গেমস বিনোদন পণ্য এবং সর্বদা ঝুঁকি জড়িত।";
bnContent.faq.title = "FAQ – BIGWIN959-এ JDB গেমস";
bnContent.faq.items[0].q = "JDB গেমস কি ন্যায্য?"; bnContent.faq.items[0].a = "হ্যাঁ। JDB র্যান্ডম ফলাফল নিশ্চিত করতে RNG প্রযুক্তি ব্যবহার করে।";
bnContent.faq.items[1].q = "নতুনদের জন্য কোন JDB গেমটি ভালো?"; bnContent.faq.items[1].a = "Boom Legend এবং Lucky Lion বোঝা সহজ।";
bnContent.faq.items[2].q = "JDB গেমস কি মুনাফার নিশ্চয়তা দিতে পারে?"; bnContent.faq.items[2].a = "না। সমস্ত ফলাফল সুযোগের উপর ভিত্তি করে। কোনো 'নিশ্চিত জয়ের' পদ্ধতি নেই।";
bnContent.faq.items[3].q = "আমি কি মোবাইলে JDB গেমস খেলতে পারি?"; bnContent.faq.items[3].a = "হ্যাঁ। JDB গেমস মোবাইল ডিভাইসের জন্য সম্পূর্ণরূপে অপ্টিমাইজ করা।";
bnContent.faq.items[4].q = "এই পেজটি কি অফিসিয়াল JDB ওয়েবসাইট?"; bnContent.faq.items[4].a = "না। এটি একটি স্বাধীন তথ্য গাইড। JDB গেমস খেলতে, BIGWIN959.vip ভিজিট করুন।";
bnContent.cta.title = "দায়িত্বের সাথে JDB গেমস অন্বেষণ করুন";
bnContent.cta.button = "BIGWIN959-এ JDB গেমস খেলুন";

bn.providers.jdb = bnContent;

// Breadcrumbs
ensurePath(en, 'breadcrumbs');
en.breadcrumbs.jdb = "JDB";
ensurePath(bn, 'breadcrumbs');
bn.breadcrumbs.jdb = "JDB";

fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
fs.writeFileSync(bnPath, JSON.stringify(bn, null, 2));

console.log('Updated JDB keys.');
