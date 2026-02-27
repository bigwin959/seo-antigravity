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

ensurePath(en, 'providers.pragmaticPlay');
ensurePath(bn, 'providers.pragmaticPlay');

const content = {
    seo: {
        title: "Pragmatic Play Slots on BIGWIN959 | Games & Features (2025)",
        description: "Pragmatic Play slots on BIGWIN959. Learn about top PP games, features, volatility, and how to play Pragmatic Play slots on mobile in Bangladesh & Myanmar.",
        keywords: ["Pragmatic Play", "online slots", "BIGWIN959", "Sweet Bonanza", "Gates of Olympus", "casino guide", "Bangladesh", "Myanmar"],
        schema: {
            headline: "Pragmatic Play Games on BIGWIN959",
            description: "Discover top Pragmatic Play slots, key game features, volatility styles, and beginner tips for BD & MM players."
        }
    },
    hero: {
        badge: "Official Provider Guide",
        title: "Pragmatic Play Games <br /> on <span class=\"text-brand\">BIGWIN959</span>",
        subtitle: "Discover top Pragmatic Play slots, key game features, volatility styles, and beginner tips for BD & MM players.",
        cta: { play: "Play Pragmatic Play Games" },
        official: "Official Platform: BIGWIN959.vip"
    },
    intro: {
        title: "Pragmatic Play: Gaming Legend \u003cbr /\u003e\u003cspan class=\"text-brand\"\u003eUnmatched Variety\u003c/span\u003e",
        desc: "Pragmatic Play is one of the most recognized names in the online gaming industry. They're known for creating games that combine beautiful graphics, innovative mechanics, and reliable performance.",
        foundation: {
            title: "Provider Profile",
            foundedLabel: "Focus:",
            hqLabel: "Global Presence:",
            licensesLabel: "Licenses:",
            specLabel: "Preferred Games:",
            specValue: "Multi-award winning slots, live casino, and bingo solutions.",
            desc: "The key to Pragmatic Play's success is their 'player-first' mindset. They regularly release new games that meet the needs and preferences of modern players."
        },
        philosophy: {
            title: "PP Design Philosophy",
            points: [
                { label: "Innovative Mechanics:", value: "Pioneering new styles like Tumble mechanics and 'Anywhere Pay' systems." },
                { label: "Mobile Optimization:", value: "Games are engineered to run flawlessly on any screen size and mobile browser." },
                { label: "High Engagement:", value: "Gameplay designed to ensure lasting entertainment and excitement." }
            ]
        },
        p1: "Pragmatic Play is an international digital content provider supplying online slots, live casino, and virtual games to licensed platforms worldwide.",
        p2: "According to public information, they focus on:",
        focus: { items: ['High-quality design', 'Reliable game engines', 'Mobile-first dev', 'Regular updates'] }
    },
    innovation: {
        title: "New Horizons in Slot Gaming",
        subtitle: "Pragmatic Play has revolutionized slot gaming with 'Tumble' features and massive multipliers.",
        features: {
            title: "Unique Features",
            items: [
                { label: "Tumble Feature", value: "Winning symbols are removed to make room for new symbols, allowing multiple wins in a single spin." },
                { label: "Random Multipliers", value: "Games like Gates of Olympus can award random multipliers up to 500x." },
                { label: "Drops & Wins", value: "The world's largest slot promotion network offering thousands of prizes daily." },
                { label: "Interactive Bonuses", value: "Bonus rounds with player choices that affect outcomes." }
            ]
        },
        mechanics: {
            title: "Pragmatic Gameplay Loop",
            steps: [
                { title: "Spin and Tumble", desc: "Continuous symbol drops after each win through tumble mechanics." },
                { title: "Trigger Bonus", desc: "Collect scatter symbols to unlock free spins or special bonus games." },
                { title: "Multiplier Blast", desc: "Take advantage of increasing or massive random multipliers in bonus rounds." }
            ]
        }
    },
    whyChoose: {
        title: "Why BD & MM Players Choose Pragmatic Play",
        items: [
            { title: "Flexible Bets", desc: "Suitable for low, medium, and higher stakes." },
            { title: "Themes", desc: "Candy, mythology, animals, and fruit styles." },
            { title: "Features", desc: "Free spins, multipliers, tumble mechanics." },
            { title: "Mobile Ready", desc: "Optimized for Android phones & browsers." }
        ]
    },
    topGames: {
        title: "Top Pragmatic Play Slots on BIGWIN959",
        playBtn: "Play Demo / Real",
        items: [
            { title: "Sweet Bonanza", features: "Candy theme, Tumble wins", vol: "High Volatility", img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000517/Sweet-Bonanza.png" },
            { title: "Gates of Olympus", features: "Zeus, Random Multipliers", vol: "High Volatility", img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000499/Gates-of-Olympus.png" },
            { title: "Starlight Princess", features: "Anime style, Tumbles", vol: "High Volatility", img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000516/Starlight-Princess.png" },
            { title: "Sugar Rush", features: "Sticky Multipliers, Grid", vol: "High Volatility", img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000517/Sugar-Rush.png" },
            { title: "The Dog House", features: "Sticky Wilds, Cartoon", vol: "High Volatility", img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000518/The-Dog-House.png" },
            { title: "Big Bass Bonanza", features: "Fishing, Free Spins", vol: "Medium Volatility", img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000488/Big-Bass-Bonanza.png" },
        ]
    },
    features: {
        title: "Key Features of Pragmatic Play Slots",
        list: [
            { title: "Free Spins", desc: "Most PP slots include scatter-triggered free spins with enhanced mechanics like sticky symbols or extra multipliers." },
            { title: "Tumble / Cascading Reels", desc: "Winning symbols disappear and new ones fall, allowing multiple wins in a single spin." },
            { title: "Multipliers", desc: "Random or fixed multipliers appear in games like Gates of Olympus, significantly increasing payout potential." },
            { title: "Bonus Buy", desc: "Some versions allow direct purchase of bonus rounds. <span class=\"text-red-400\">High risk - caution advised.</span>" }
        ]
    },
    profile: {
        title: "Pragmatic Play Game Profile",
        feature: "Feature",
        details: "Details",
        items: [
            { label: "Provider", value: "Pragmatic Play" },
            { label: "Game Type", value: "Slots, Live Casino, Virtual Games" },
            { label: "Volatility", value: "Medium to High" },
            { label: "Mobile Support", value: "Full (Android & Browser)" },
            { label: "Mechanics", value: "Free spins, Multipliers, Tumble wins" }
        ]
    },
    howToFind: {
        title: "How to Find Pragmatic Play Games",
        steps: [
            "Visit BIGWIN959.vip and log in.",
            "Open the 'Slots' or 'Casino' section.",
            "Use the 'Provider' filter and select 'Pragmatic Play'.",
            "Or use the search bar for specific titles like 'Sweet Bonanza'.",
            "Select your bet size and start playing."
        ]
    },
    responsible: {
        title: "Responsible Playing Tips",
        desc: "Pragmatic Play games use RNG (Random Number Generator) technology. Outcomes are random. Always set a budget, avoid chasing losses, and treat wins as luck.",
        tips: ["18+ Only", "Play Responsibly"]
    },
    faq: {
        title: "Frequently Asked Questions - Pragmatic Play on BIGWIN959",
        items: [
            {
                q: "Are Pragmatic Play games fair?",
                a: "Yes, all Pragmatic Play games use certified RNG (Random Number Generator) systems that are regularly tested by independent gaming laboratories like GLI and BMM. They hold licenses from 20+ jurisdictions ensuring fair play."
            },
            {
                q: "Which Pragmatic Play game is best for beginners?",
                a: "Sweet Bonanza and Big Bass Bonanza are excellent for beginners. They have straightforward mechanics, medium to high volatility, and engaging themes that are easy to understand."
            },
            {
                q: "Can I play Pragmatic Play games on mobile?",
                a: "Yes, all Pragmatic Play slots on BIGWIN959 are fully optimized for mobile devices. They work seamlessly on Android and iOS smartphones and tablets through your browser."
            },
            {
                q: "What is the RTP of Pragmatic Play slots?",
                a: "Pragmatic Play slots typically have RTPs between 96% and 96.5%, which is industry standard. Gates of Olympus and Starlight Princess both have 96.50% RTP, while Sweet Bonanza has 96.48%."
            },
            {
                q: "What is the Drops & Wins promotion?",
                a: "Drops & Wins is Pragmatic Play's flagship promotion offering daily prize drops and tournaments. Players can win random cash prizes while playing their favorite Pragmatic Play games on BIGWIN959."
            },
            {
                q: "Can I buy bonus features in Pragmatic Play games?",
                a: "Some Pragmatic Play games offer a 'Bonus Buy' feature that lets you purchase direct access to free spins rounds. However, this is high risk and costs significantly more than the base bet."
            },
            {
                q: "What are tumble/cascade mechanics?",
                a: "Tumble mechanics (also called cascading reels) remove winning symbols and drop new ones into their place, allowing multiple wins from a single spin. This feature is popular in games like Gates of Olympus and Sugar Rush."
            },
            {
                q: "How do I find Pragmatic Play games on BIGWIN959?",
                a: "Log into BIGWIN959, go to the Slots section, and use the provider filter to select 'Pragmatic Play'. You can also search for specific game names like 'Gates of Olympus' or 'Sweet Bonanza'."
            }
        ]
    },
    portfolio: {
        title: "Pragmatic Play Legendary Portfolio",
        subtitle: "Experience the world's most popular slot games. High volatility, massive multipliers, and stunning graphics.",
        labels: { rtp: "RTP", maxWin: "Max Payout", playNow: "Play Now" },
        games: [
            {
                title: "Gates of Olympus", category: "High Volatility Slot", rtp: "96.50%", maxWin: "5,000x",
                features: ["Tumble Feature", "Multiplier Orbs", "Ante Bet"],
                description: "The God of Thunder awards multipliers up to 500x. Symbols pay anywhere on the screen in this Cluster Pays masterpiece.",
                popularity: "★★★★★",
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000499/Gates-of-Olympus.png"
            },
            {
                title: "Sweet Bonanza", category: "Casual Slot", rtp: "96.48%", maxWin: "21,100x",
                features: ["Free Spins", "Multiplier Bombs", "Buy Bonus"],
                description: "Candies, fruits, and huge winnings. Watch out for the Rainbow Bomb that can multiply your wins by up to 100x.",
                popularity: "★★★★★",
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000517/Sweet-Bonanza.png"
            },
            {
                title: "Starlight Princess", category: "High Volatility Slot", rtp: "96.50%", maxWin: "5,000x",
                features: ["Pay Anywhere", "Multiplier Hearts", "Free Spins"],
                description: "Meet the Princess in the clouds. Multiplier symbols up to 500x can drop during tumbles for sky-high payouts.",
                popularity: "★★★★★",
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000516/Starlight-Princess.png"
            },
            {
                title: "Sugar Rush", category: "Tumble Slot", rtp: "96.50%", maxWin: "5,000x",
                features: ["Multiplier Spots", "Free Spins", "Sticky Spots"],
                description: "Every win leaves a mark. Hit the same spot again to double the multiplier, building up to massive 128x spots.",
                popularity: "★★★★★",
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000517/Sugar-Rush.png"
            }
        ]
    },
    tech: {
        title: "Pragmatic's Powerful Technology",
        subtitle: "Security, fairness, and speed – Pragmatic Play has built their infrastructure on these three pillars.",
        fairness: {
            title: "Fairness and Compliance",
            points: [
                { label: "20+ Jurisdictions", desc: "Licensed and regulated by over 20 licensing authorities worldwide." },
                { label: "Certified RNG", desc: "Every game round is rigorously tested by independent testing labs (such as GLI)." },
                { label: "Player Protection", desc: "Responsible gaming tools and protection systems built directly into the game engine." }
            ]
        },
        infra: {
            title: "Technical Infrastructure",
            points: [
                { label: "Single API Integration", desc: "A powerful backend that seamlessly manages thousands of games through a single API." },
                { label: "Adaptive Stream", desc: "4K streaming for live casino games that automatically adjusts to your internet speed." },
                { label: "Real-Time Analytics", desc: "Software monitors player behavior and game performance in real-time." }
            ]
        },
        importance: {
            title: "Why Players Trust Us",
            trust: {
                title: "Player Trust",
                points: [
                    "Trusted brand image",
                    "Transparent game rules",
                    "Verifiable payouts"
                ]
            },
            benefits: {
                title: "Player Benefits",
                points: [
                    "Massive win potential",
                    "Uninterrupted gaming sessions",
                    "Best mobile experience"
                ]
            }
        }
    },
    mobile: {
        title: "Mobile-First Gaming Innovation",
        subtitle: "Pragmatic Play ensures that wherever you are, your gaming experience is the best.",
        features: [
            { title: "Lightweight Design", desc: "Games are specially optimized to save mobile data and load quickly." },
            { title: "Unique Touch Interface", desc: "Custom-built controllers for smartphones and tablets that are extremely intuitive." },
            { title: "Saving State Mode", desc: "If a call comes in or the network drops, the game pauses right there and keeps your winnings safe." }
        ],
        advantages: {
            tech: {
                title: "Technical Features",
                points: [
                    { label: "Technology:", value: "HTML5 / JavaScript" },
                    { label: "Compatibility:", value: "Android, iOS, iPad" },
                    { label: "Loading Speed:", value: "Under 3 seconds" }
                ]
            },
            ux: {
                title: "User Benefits",
                points: [
                    { label: "One-handed play:", value: "Thumb-optimized controls" },
                    { label: "Auto-Play:", value: "Mobile-friendly automatic spins" },
                    { label: "Notifications:", value: "Drops and Win alerts" }
                ]
            }
        }
    },
    gettingStarted: {
        title: "Start Your Pragmatic Play Journey",
        subtitle: "Follow these simple steps to play the most popular games.",
        steps: [
            "Visit BIGWIN959.vip and log into your account.",
            "Go to the 'Slots' or 'Live Casino' section.",
            "Type 'Pragmatic Play' in the search bar or click the provider logo.",
            "Select your favorite game (e.g., Gates of Olympus).",
            "Set your bet amount and start spinning the reels!"
        ],
        disclaimer: {
            label: "Warning:",
            text: "Pragmatic Play games are exciting and offer high winning potential, so always stay within your budget."
        }
    },
    cta: {
        title: "Explore Pragmatic Play Games Responsibly",
        button: "Play on BIGWIN959"
    }
};

// Update keys
en.providers.pragmaticPlay = content;

// Translate keys for Bengali
const bnContent = JSON.parse(JSON.stringify(content));
// Basic Bengali translations (placeholders or simple translations)
bnContent.seo.title = "BIGWIN959-এ প্রাগম্যাটিক প্লে স্লটস | গেম এবং বৈশিষ্ট্য (২০২৫)";
bnContent.seo.description = "BIGWIN959-এ প্রাগম্যাটিক প্লে স্লটস। বিডি এবং এমএম খেলোয়াড়দের জন্য শীর্ষ পিপি গেম, বৈশিষ্ট্য, অস্থিরতা এবং মোবাইলে কীভাবে খেলবেন সে সম্পর্কে জানুন।";
bnContent.seo.keywords = ["প্রাগম্যাটিক প্লে", "অনলাইন স্লট", "BIGWIN959", "সুইট বোনানজা", "গেটস অফ অলিম্পাস", "ক্যাসিনো গাইড", "বাংলাদেশ", "মায়ানমার"];
bnContent.seo.schema.headline = "BIGWIN959-এ প্রাগম্যাটিক প্লে গেম";
bnContent.seo.schema.description = "বিডি এবং এমএম খেলোয়াড়দের জন্য শীর্ষ প্রাগম্যাটিক প্লে স্লট, মূল গেম বৈশিষ্ট্য এবং নতুনদের জন্য টিপস আবিষ্কার করুন।";
bnContent.hero.badge = "অফিসিয়াল প্রোভাইডার গাইড";
bnContent.hero.title = "BIGWIN959-এ <br /> প্রাগম্যাটিক প্লে গেম";
bnContent.hero.subtitle = "বিডি এবং এমএম খেলোয়াড়দের জন্য শীর্ষ প্রাগম্যাটিক প্লে স্লট, মূল গেম বৈশিষ্ট্য এবং নতুনদের জন্য টিপস আবিষ্কার করুন।";
bnContent.hero.cta.play = "প্রাগম্যাটিক প্লে গেম খেলুন";
bnContent.hero.official = "অফিসিয়াল প্ল্যাটফর্ম: BIGWIN959.vip";
bnContent.intro.title = "প্রাগম্যাটিক প্লে: গেমিং কিংবদন্তি <br /><span class=\"text-brand\">অতুলনীয় বৈচিত্র্য</span>";
bnContent.intro.desc = "অনলাইন গেমিং শিল্পে প্রাগম্যাটিক প্লে অন্যতম স্বীকৃত নাম। তারা এমন গেম তৈরির জন্য পরিচিত যা সুন্দর গ্রাফিক্স, উদ্ভাবনী মেকানিক্স এবং নির্ভরযোগ্য পারফরম্যান্সকে একত্রিত করে।";

bnContent.intro.foundation = {
    title: "প্রোভাইডার প্রোফাইল",
    foundedLabel: "ফোকাস:",
    hqLabel: "বৈশ্বিক উপস্থিতি:",
    licensesLabel: "লাইসেন্স:",
    specLabel: "জনপ্রিয় গেম:",
    specValue: "বহু-পুরস্কার বিজয়ী স্লট, লাইভ ক্যাসিনো এবং বিঙ্গো সমাধান।",
    desc: "প্রাগম্যাটিক প্লে-এর সাফল্যের চাবিকাঠি হল তাদের 'প্লেয়ার-ফার্স্ট' মানসিকতা। তারা নিয়মিত নতুন গেম প্রকাশ করে যা আধুনিক খেলোয়াড়দের চাহিদা এবং পছন্দ পূরণ করে।"
};

bnContent.intro.philosophy = {
    title: "পিপি ডিজাইন ফিলোসফি",
    points: [
        { label: "উদ্ভাবনী মেকানিক্স:", value: "টাম্বল মেকানিক্স এবং 'এনিহোয়ার পে' সিস্টেমের মতো নতুন স্টাইলের প্রবর্তক।" },
        { label: "মোবাইল অপ্টিমাইজেশন:", value: "যেকোনো স্ক্রিন সাইজ এবং মোবাইল ব্রাউজারে নিঁখুতভাবে চলার জন্য গেমগুলি তৈরি করা হয়েছে।" },
        { label: "উচ্চ এনগেজমেন্ট:", value: "দীর্ঘস্থায়ী বিনোদন এবং উত্তেজনা নিশ্চিত করার জন্য ডিজাইন করা গেমপ্লে।" }
    ]
};

bnContent.intro.p1 = "প্রাগম্যাটিক প্লে হল একটি আন্তর্জাতিক ডিজিটাল কন্টেন্ট প্রদানকারী যা বিশ্বব্যাপী লাইসেন্সপ্রাপ্ত প্ল্যাটফর্মে অনলাইন স্লট, লাইভ ক্যাসিনো এবং ভার্চুয়াল গেম সরবরাহ করে।";
bnContent.intro.p2 = "পাবলিক তথ্য অনুযায়ী, তারা ফোকাস করে:";
bnContent.intro.focus.items = ["উচ্চ মানের ডিজাইন", "নির্ভরযোগ্য গেম ইঞ্জিন", "মোবাইল-ফার্স্ট ডেভেলপমেন্ট", "নিয়মিত আপডেট"];
bnContent.whyChoose.title = "কেন বিডি এবং এমএম খেলোয়াড়রা প্রাগম্যাটিক প্লে বেছে নেয়";
bnContent.whyChoose.items[0].title = "ফ্লেক্সিবল বেট"; bnContent.whyChoose.items[0].desc = "কম, মাঝারি এবং উচ্চ স্টেক বা বাজির জন্য উপযুক্ত।";
bnContent.whyChoose.items[1].title = "থিম"; bnContent.whyChoose.items[1].desc = "ক্যান্ডি, পুরাণ, প্রাণী এবং ফলের স্টাইল।";
bnContent.whyChoose.items[2].title = "বৈশিষ্ট্য"; bnContent.whyChoose.items[2].desc = "ফ্রি স্পিন, মাল্টিপ্লায়ার, টাম্বল মেকানিক্স।";
bnContent.whyChoose.items[3].title = "মোবাইল রেডি"; bnContent.whyChoose.items[3].desc = "অ্যান্ড্রয়েড ফোন এবং ব্রাউজারের জন্য অপ্টিমাইজ করা।";
bnContent.topGames.title = "BIGWIN959-এ শীর্ষ প্রাগম্যাটিক প্লে স্লট";
bnContent.topGames.playBtn = "ডেমো / রিয়েল খেলুন";
bnContent.topGames.items.forEach(game => { game.vol = game.vol.replace("Volatility", "ভোলাটিলিটি"); });
bnContent.features.title = "প্রাগম্যাটিক প্লে স্লটের মূল বৈশিষ্ট্য";
bnContent.features.list[0].title = "ফ্রি স্পিন"; bnContent.features.list[0].desc = "বেশিরভাগ পিপি স্লটে স্টিকি সিম্বল বা অতিরিক্ত মাল্টিপ্লায়ারের মতো উন্নত মেকানিক্স সহ স্ক্যাটার-ট্রিগারযুক্ত ফ্রি স্পিন রয়েছে।";
bnContent.features.list[1].title = "টাম্বল / ক্যাসকেডিং রিল"; bnContent.features.list[1].desc = "জয়ী সিম্বলগুলি অদৃশ্য হয়ে যায় এবং নতুনগুলি পড়ে, একক স্পিনে একাধিক জয়ের অনুমতি দেয়।";
bnContent.features.list[2].title = "মাল্টিপ্লায়ার"; bnContent.features.list[2].desc = "গেটস অফ অলিম্পাসের মতো গেমগুলিতে র্যান্ডম বা ফিক্সড মাল্টিপ্লায়ার প্রদর্শিত হয়, যা পেআউট সম্ভাবনা উল্লেখযোগ্যভাবে বৃদ্ধি করে।";
bnContent.features.list[3].title = "বোনাস বাই"; bnContent.features.list[3].desc = "কিছু সংস্করণ বোনাস রাউন্ড সরাসরি কেনার অনুমতি দেয়। <span class=\"text-red-400\">উচ্চ ঝুঁকি - সতর্কতার পরামর্শ দেওয়া হয়।</span>";
bnContent.profile.title = "প্রাগম্যাটিক প্লে গেম প্রোফাইল";
bnContent.profile.feature = "বৈশিষ্ট্য";
bnContent.profile.details = "বিবরণ";
bnContent.profile.items.forEach(item => {
    if (item.label === "Provider") item.value = "প্রাগম্যাটিক প্লে";
    if (item.label === "Game Type") item.value = "স্লট, লাইভ ক্যাসিনো, ভার্চুয়াল গেম";
    if (item.label === "Volatility") item.value = "মাঝারি থেকে উচ্চ";
    if (item.label === "Mobile Support") item.value = "সম্পূর্ণ (অ্যান্ড্রয়েড এবং ব্রাউজার)";
    if (item.label === "Mechanics") item.value = "ফ্রি স্পিন, মাল্টিপ্লায়ার, টাম্বল উইনস";
});
bnContent.howToFind.title = "কীভাবে প্রাগম্যাটিক প্লে গেম খুঁজবেন";
bnContent.howToFind.steps = [
    "BIGWIN959.vip এ যান এবং লগ ইন করুন।",
    "'স্লট' বা 'ক্যাসিনো' বিভাগ খুলুন।",
    "'প্রোভাইডার' ফিল্টার ব্যবহার করুন এবং 'প্রাগম্যাটিক প্লে' নির্বাচন করুন।",
    "অথবা 'সুইট বোনানজা'-এর মতো নির্দিষ্ট শিরোনামের জন্য সার্চ বার ব্যবহার করুন।",
    "আপনার বাজির আকার নির্বাচন করুন এবং খেলা শুরু করুন।"
];
bnContent.responsible.title = "দায়িত্বশীল খেলার টিপস";
bnContent.responsible.desc = "প্রাগম্যাটিক প্লে গেমগুলি আরএনজি (র্যান্ডম নম্বর জেনারেটর) প্রযুক্তি ব্যবহার করে। ফলাফল র্যান্ডম। সর্বদা একটি বাজেট সেট করুন, ক্ষতি পূরণ করার চেষ্টা এড়িয়ে চলুন এবং জয়কে ভাগ্য হিসেবে বিবেচনা করুন।";
bnContent.responsible.tips = ["১৮+ শুধুমাত্র", "দায়িত্বের সাথে খেলুন"];
bnContent.faq.title = "FAQ – BIGWIN959-এ প্রাগম্যাটিক প্লে";
bnContent.faq.items[0].q = "প্রাগম্যাটিক প্লে গেম কি ন্যায্য?"; bnContent.faq.items[0].a = "হ্যাঁ, পিপি গেমগুলি র্যান্ডম ফলাফল তৈরি করতে ডিজাইন করা সার্টিফাইড আরএনজি সিস্টেম ব্যবহার করে।";
bnContent.faq.items[1].q = "কোন পিপি গেমটি নতুনদের জন্য সেরা?"; bnContent.faq.items[1].a = "সুইট বোনানজা এবং দ্য ডগ হাউস খুব জনপ্রিয় এবং বোঝা সহজ।";
bnContent.faq.items[2].q = "আমি কি মোবাইলে খেলতে পারি?"; bnContent.faq.items[2].a = "হ্যাঁ, BIGWIN959-এ সমস্ত প্রাগম্যাটিক প্লে স্লট মোবাইল ডিভাইসের জন্য সম্পূর্ণ অপ্টিমাইজ করা।";
bnContent.faq.items[3].q = "এটি কি অফিসিয়াল সাইট?"; bnContent.faq.items[3].a = "না, এটি একটি স্বাধীন গাইড। অফিসিয়াল প্ল্যাটফর্ম: BIGWIN959.vip";

bnContent.portfolio = {
    title: "প্রাগম্যাটিক প্লে কিংবদন্তি পোর্টফোলিও",
    subtitle: "বিশ্বের সবচেয়ে জনপ্রিয় স্লট গেমগুলির অভিজ্ঞতা নিন। উচ্চ অস্থিরতা, বিশাল মাল্টিপ্লায়ার এবং অত্যাশ্চর্য গ্রাফিক্স।",
    labels: { rtp: "RTP", maxWin: "সর্বোচ্চ পেআউট", playNow: "এখনই খেলুন" },
    games: [
        {
            title: "Gates of Olympus", category: "উচ্চ অস্থিরতা স্লট", rtp: "96.50%", maxWin: "5,000x",
            features: ["টাম্বল ফিচার", "মাল্টিপ্লায়ার অরব", "অ্যান্টে বেট"],
            description: "গড অফ থান্ডার ৫০০ গুণ পর্যন্ত মাল্টিপ্লায়ার প্রদান করে। এই ক্লাস্টার পে মাস্টারপিসে প্রতীকগুলি স্ক্রিনের যেকোনো জায়গায় অর্থ প্রদান করে।",
            popularity: "★★★★★",
            img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000499/Gates-of-Olympus.png"
        },
        {
            title: "Sweet Bonanza", category: "ক্যাজুয়াল স্লট", rtp: "96.48%", maxWin: "21,100x",
            features: ["ফ্রি স্পিন", "মাল্টিপ্লায়ার বোম্ব", "বাই বোনাস"],
            description: "ক্যান্ডি, ফল এবং বিশাল জয়। রেইনবো বোম্বের দিকে নজর রাখুন যা আপনার জয়কে ১০০ গুণ পর্যন্ত বাড়িয়ে দিতে পারে।",
            popularity: "★★★★★",
            img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000517/Sweet-Bonanza.png"
        },
        {
            title: "Starlight Princess", category: "উচ্চ অস্থিরতা স্লট", rtp: "96.50%", maxWin: "5,000x",
            features: ["যেকোনো জায়গায় পে", "মাল্টিপ্লায়ার হার্ট", "ফ্রি স্পিন"],
            description: "মেঘের মধ্যে রাজকুমারীর সাথে দেখা করুন। আকাশচুম্বী পেআউটের জন্য টাম্বল চলাকালীন ৫০০ গুণ পর্যন্ত মাল্টিপ্লায়ার হার্ট ড্রপ হতে পারে।",
            popularity: "★★★★★",
            img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000516/Starlight-Princess.png"
        },
        {
            title: "Sugar Rush", category: "টাম্বল স্লট", rtp: "96.50%", maxWin: "5,000x",
            features: ["মাল্টিপ্লায়ার স্পট", "ফ্রি স্পিন", "স্টিকি স্পট"],
            description: "প্রতিটি জয় একটি চিহ্ন রেখে যায়। মাল্টিপ্লায়ার দ্বিগুণ করতে আবার একই জায়গায় হিট করুন, যা ১২৮ গুণ পর্যন্ত বৃদ্ধি পায়।",
            popularity: "★★★★★",
            img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000517/Sugar-Rush.png"
        }
    ]
};

bnContent.cta.title = "দায়িত্বের সাথে প্রাগম্যাটিক প্লে গেম এক্সপ্লোর করুন";
bnContent.cta.button = "BIGWIN959-এ খেলুন";


// Innovation
bnContent.innovation = {
    title: "স্লট গেমিংয়ে নতুন দিগন্ত",
    subtitle: "প্রাগম্যাটিক প্লে 'টাম্বল' বৈশিষ্ট্য এবং বিশাল মাল্টিপ্লায়ারের সাথে স্লট গেমিংয়ে বিপ্লব ঘটিয়েছে।",
    features: {
        title: "অনন্য বৈশিষ্ট্য",
        items: [
            { label: "টাম্বল ফিচার", value: "নতুন প্রতীকের জন্য জায়গা করতে বিজয়ী প্রতীকগুলি সরানো হয়, যা একক স্পিনে একাধিক জয়ের অনুমতি দেয়।" },
            { label: "র্যান্ডম মাল্টিপ্লায়ার", value: "গেটস অফ অলিম্পাসের মতো গেমগুলি ৫০০ গুণ পর্যন্ত র্যান্ডম মাল্টিপ্লায়ার দিতে পারে।" },
            { label: "ড্রপস এবং উইনস", value: "বিশ্বের বৃহত্তম স্লট প্রমোশন নেটওয়ার্ক যা প্রতিদিন হাজার হাজার পুরস্কার প্রদান করে।" },
            { label: "ইন্টারঅ্যাক্টিভ বোনাস", value: "খেলোয়াড়ের পছন্দের সাথে বোনাস রাউন্ড যা ফলাফলকে প্রভাবিত করে।" }
        ]
    },
    mechanics: {
        title: "প্রাগম্যাটিক গেমপ্লে লুপ",
        steps: [
            { title: "স্পিন এবং টাম্বল", desc: "টাম্বল মেকানিক্সের মাধ্যমে প্রতিটি জয়ের পরে অবিচ্ছিন্ন প্রতীক ড্রপ।" },
            { title: "ট্রিগার বোনাস", desc: "ফ্রি স্পিন বা বিশেষ বোনাস গেম আনলক করতে স্ক্যাটার প্রতীক সংগ্রহ করুন।" },
            { title: "মাল্টিপ্লায়ার ব্লাস্ট", desc: "বোনাস রাউন্ডে ক্রমবর্ধমান বা বিশাল র্যান্ডম মাল্টিপ্লায়ারের সুবিধা নিন।" }
        ]
    }
};

// Tech
bnContent.tech = {
    title: "প্রাগম্যাটিকের শক্তিশালী প্রযুক্তি",
    subtitle: "নিরাপত্তা, ন্যায্যতা এবং গতি – প্রাগম্যাটিক প্লে এই তিনটি স্তম্ভের উপর তাদের অবকাঠামো তৈরি করেছে।",
    fairness: {
        title: "ন্যায্যতা এবং সম্মতি",
        points: [
            { label: "২০+ এখতিয়ার", desc: "বিশ্বব্যাপী ২০টিরও বেশি লাইসেন্সিং কর্তৃপক্ষ দ্বারা লাইসেন্সপ্রাপ্ত এবং নিয়ন্ত্রিত।" },
            { label: "সার্টিফাইড আরএনজি", desc: "প্রতিটি গেম রাউন্ড স্বাধীন টেস্টিং ল্যাব (যেমন GLI) দ্বারা কঠোরভাবে পরীক্ষা করা হয়।" },
            { label: "খেলোয়াড় সুরক্ষা", desc: "গেম ইঞ্জিনে সরাসরি তৈরি দায়িত্বশীল গেমিং টুলস এবং সুরক্ষা ব্যবস্থা।" }
        ]
    },
    infra: {
        title: "প্রযুক্তিগত অবকাঠামো",
        points: [
            { label: "একক এপিআই ইন্টিগ্রেশন", desc: "একটি শক্তিশালী ব্যাকএন্ড যা নির্বিঘ্নে একটি একক API-এর মাধ্যমে হাজার হাজার গেম পরিচালনা করে।" },
            { label: "অ্যাডাপটিভ স্ট্রিম", desc: "লাইভ ক্যাসিনো গেমগুলির জন্য 4K স্ট্রিমিং যা স্বয়ংক্রিয়ভাবে আপনার ইন্টারনেটের গতির সাথে সামঞ্জস্য করে।" },
            { label: "রিয়েল-টাইম অ্যানালিটিক্স", desc: "সফ্টওয়্যার রিয়েল-টাইমে খেলোয়াড়ের আচরণ এবং গেমের পারফরম্যান্স মনিটর করে।" }
        ]
    },
    importance: {
        title: "কেন খেলোয়াড়রা আমাদের বিশ্বাস করে",
        trust: {
            title: "খেলোয়াড়ের বিশ্বাস",
            points: ["বিশ্বস্ত ব্র্যান্ড ইমেজ", "স্বচ্ছ গেমের নিয়ম", "যাচাইযোগ্য পেআউট"]
        },
        benefits: {
            title: "খেলোয়াড়ের সুবিধা",
            points: ["বিশাল জয়ের সম্ভাবনা", "নিরবচ্ছিন্ন গেমিং সেশন", "সেরা মোবাইল অভিজ্ঞতা"]
        }
    }
};

// Mobile
bnContent.mobile = {
    title: "মোবাইল-ফার্স্ট গেমিং ইনোভেশন",
    subtitle: "প্রাগম্যাটিক প্লে নিশ্চিত করে যে আপনি যেখানেই থাকুন না কেন, আপনার গেমিং অভিজ্ঞতা সেরা হবে।",
    features: [
        { title: "লাইটওয়েট ডিজাইন", desc: "গেমগুলি মোবাইল ডেটা বাঁচাতে এবং দ্রুত লোড করার জন্য বিশেষভাবে অপ্টিমাইজ করা হয়েছে।" },
        { title: "অনন্য টাচ ইন্টারফেস", desc: "স্মার্টফোন এবং ট্যাবলেটের জন্য কাস্টম-নির্মিত কন্ট্রোলার যা অত্যন্ত সহজবোধ্য।" },
        { title: "সেভিং স্টেট মোড", desc: "যদি কোনো কল আসে বা নেটওয়ার্ক ড্রপ করে, গেমটি ঠিক সেখানেই থামে এবং আপনার জয় নিরাপদ রাখে।" }
    ],
    advantages: {
        tech: {
            title: "প্রযুক্তিগত বৈশিষ্ট্য",
            points: [
                { label: "প্রযুক্তি:", value: "HTML5 / জাভাস্ক্রিপ্ট" },
                { label: "সামঞ্জস্যতা:", value: "অ্যান্ড্রয়েড, আইওএস, আইপ্যাড" },
                { label: "লোডিং স্পিড:", value: "৩ সেকেন্ডের নিচে" }
            ]
        },
        ux: {
            title: "ব্যবহারকারীর সুবিধা",
            points: [
                { label: "এক হাতে খেলা:", value: "বৃদ্ধাঙ্গুলি-অপ্টিমাইজড কন্ট্রোল" },
                { label: "অটো-প্লে:", value: "মোবাইল-বান্ধব স্বয়ংক্রিয় স্পিন" },
                { label: "নোটিফিকেশন:", value: "ড্রপস এবং উইন অ্যালার্ট" }
            ]
        }
    }
};

// Getting Started
bnContent.gettingStarted = {
    title: "আপনার প্রাগম্যাটিক প্লে যাত্রা শুরু করুন",
    subtitle: "সবচেয়ে জনপ্রিয় গেমগুলি খেলতে এই সহজ ধাপগুলি অনুসরণ করুন।",
    steps: [
        "BIGWIN959.vip-এ যান এবং আপনার অ্যাকাউন্টে লগ ইন করুন।",
        "'স্লট' বা 'লাইভ ক্যাসিনো' বিভাগে যান।",
        "সার্চ বারে 'প্রাগম্যাটিক প্লে' টাইপ করুন বা প্রোভাইডার লোগোতে ক্লিক করুন।",
        "আপনার পছন্দের গেমটি নির্বাচন করুন (যেমন, গেটস অফ অলিম্পাস)।",
        "আপনার পছন্দের বাজির পরিমাণ সেট করুন এবং রিল স্পিন করা শুরু করুন!"
    ],
    disclaimer: {
        label: "সতর্কতা:",
        text: "প্রাগম্যাটিক প্লে গেমগুলি উত্তেজনাপূর্ণ এবং উচ্চ জয়ের সম্ভাবনা প্রদান করে, তাই সর্বদা আপনার বাজেটের মধ্যে থাকুন।"
    }
};

// FAQ (Remaining items)
bnContent.faq.items[4].q = "Drops & Wins প্রমোশন কি?"; bnContent.faq.items[4].a = "Drops & Wins হল প্রাগম্যাটিক প্লে-এর ফ্ল্যাগশিপ প্রমোশন যা প্রতিদিনের প্রাইজ ড্রপ এবং টুর্নামেন্ট অফার করে। খেলোয়াড়রা BIGWIN959-এ তাদের প্রিয় প্রাগম্যাটিক প্লে গেম খেলার সময় র্যান্ডম নগদ পুরস্কার জিততে পারে।";
bnContent.faq.items[5].q = "আমি কি গেমগুলিতে বোনাস ফিচার কিনতে পারি?"; bnContent.faq.items[5].a = "কিছু প্রাগম্যাটিক প্লে গেম 'বোনাস বাই' ফিচার অফার করে যা আপনাকে সরাসরি ফ্রি স্পিন রাউন্ড কেনার অনুমতি দেয়। তবে, এটি উচ্চ ঝুঁকিপূর্ণ এবং বেস বেটের চেয়ে অনেক বেশি খরচ হয়।";
bnContent.faq.items[6].q = "টাম্বল/ক্যাসকেড মেকানিক্স কি?"; bnContent.faq.items[6].a = "টাম্বল মেকানিক্স (যাকে ক্যাসকেডিং রিলও বলা হয়) বিজয়ী প্রতীকগুলি সরিয়ে দেয় এবং তাদের জায়গায় নতুনগুলি ফেলে, যা একটি স্পিন থেকে একাধিক জয়ের অনুমতি দেয়। এই বৈশিষ্ট্যটি গেটস অফ অলিম্পাস এবং সুগার রাশের মতো গেমগুলিতে জনপ্রিয়।";
bnContent.faq.items[7].q = "BIGWIN959-এ আমি কীভাবে প্রাগম্যাটিক প্লে গেম খুঁজব?"; bnContent.faq.items[7].a = "BIGWIN959-এ লগ ইন করুন, স্লট বিভাগে যান এবং 'প্রাগম্যাটিক প্লে' নির্বাচন করতে প্রোভাইডার ফিল্টার ব্যবহার করুন। আপনি 'গেটস অফ অলিম্পাস' বা 'সুইট বোনানজা'-এর মতো নির্দিষ্ট গেমের নাম দিয়েও অনুসন্ধান করতে পারেন।";

bn.providers.pragmaticPlay = bnContent;

// Breadcrumbs
ensurePath(en, 'breadcrumbs');
en.breadcrumbs.pragmaticPlay = "Pragmatic Play";
ensurePath(bn, 'breadcrumbs');
bn.breadcrumbs.pragmaticPlay = "প্রাগম্যাটিক প্লে";

fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
fs.writeFileSync(bnPath, JSON.stringify(bn, null, 2));

console.log('Updated Pragmatic Play keys.');
