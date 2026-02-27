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

ensurePath(en, 'providers.pgSoft');
ensurePath(bn, 'providers.pgSoft');

const pgSoftContentEn = {
    seo: {
        title: "PG Soft (PG) Games on BIGWIN959 | Mobile-First Slots Guide (2025)",
        description: "PG Soft (PG) games on BIGWIN959. Complete guide to mobile-first slots, cinematic graphics, and innovative features for BD & MM players.",
        keywords: ["PG Soft", "PG Games", "mobile slots", "BIGWIN959", "Mahjong Ways", "Fortune Ox"],
        schema: {
            headline: "PG Soft (PG) Games on BIGWIN959",
            description: "Premium Mobile-First Slot Developer with Cinematic Excellence"
        }
    },
    hero: {
        badge: "Cinematic Gaming Excellence",
        title: "PG Soft (PG) Games <br /> on <span class=\"text-brand\">BIGWIN959</span>",
        subtitle: "Premium Mobile-First Slots with Cinematic Graphics & Innovative Features (2025)",
        cta: { play: "Play PG Soft Games Now" }
    },
    intro: {
        title: "About PG Soft: Redefining Mobile Gaming",
        desc: "PG Soft (Pocket Games Soft) is a world-class mobile game developer that has revolutionized the slot gaming industry with their mobile-first approach and cinematic quality games.",
        excellence: {
            title: "Company Excellence",
            foundedLabel: "Founded:",
            hqLabel: "Headquarters:",
            licensesLabel: "Licenses:",
            specLabel: "Specialization:",
            specValue: "Mobile-first slot games with cinematic quality",
            desc: "PG Soft has established itself as a premium developer by focusing exclusively on mobile gaming from day one. Their games are designed to deliver console-quality experiences on smartphones."
        },
        innovation: {
            title: "Innovation Leadership",
            points: [
                { label: "Mobile-First Philosophy:", value: "Every game is designed primarily for mobile devices, ensuring optimal touch-screen experiences." },
                { label: "Cinematic Quality:", value: "Games feature movie-quality graphics and animations that rival AAA video games." },
                { label: "Cultural Soul:", value: "Games are designed with Asian markets in mind, incorporating local themes and mechanics." }
            ]
        }
    },
    mobileFirst: {
        title: "Mobile-First Gaming Revolution",
        subtitle: "PG Soft didn't just adapt to mobile gaming—they pioneered it. Every aspect of their games is designed specifically for the mobile experience.",
        advantage: {
            title: "The Mobile-First Advantage",
            points: [
                { label: "Touch-Optimized Design:", value: "Every button and menu is designed for finger navigation and comfortable gameplay." },
                { label: "Portrait Mode Excellence:", value: "Games work perfectly in vertical orientation, allowing easy one-handed play." },
                { label: "Battery Optimization:", value: "Advanced rendering techniques minimize battery drain while maintaining visual quality." }
            ]
        },
        tech: {
            title: "Technical Innovation",
            points: [
                { label: "Adaptive Graphics:", value: "Games automatically adjust visual quality based on device capabilities for smooth performance." },
                { label: "Instant Loading:", value: "Optimized asset compression allows games to load in under 3 seconds." },
                { label: "Data Efficiency:", value: "Designed to run smoothly even on slower 3G/4G networks." }
            ]
        },
        benefits: {
            title: "Mobile Gaming Benefits",
            items: [
                { title: "Perfect for Commuting", desc: "Designed for quick gaming sessions during travel or breaks with easy pause functionality." },
                { title: "Network Optimized", desc: "Efficient data usage ensure smooth gameplay on common networks." },
                { title: "Device Friendly", desc: "Runs smoothly on both premium and budget smartphones." }
            ]
        }
    },
    games: {
        title: "Popular PG Soft Games",
        subtitle: "Discover PG Soft's most celebrated titles, each offering unique themes and exceptional mobile gaming experiences.",
        labels: { rtp: "RTP", maxWin: "Max Win", features: "Key Features" },
        playNow: "Play Now",
        list: [
            {
                title: "Mahjong Ways", category: "Asian Culture", rtp: "96.92%", maxWin: "5,000x",
                description: "Experience traditional Mahjong in slot form with cascading reels and authentic Asian aesthetics.",
                popularity: "★★★★★",
                features: ["Cascading Reels", "Free Spins", "Multipliers", "Mahjong Symbols"],
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767702970/PG-MajongWays.png"
            },
            {
                title: "Fortune Ox", category: "Chinese Zodiac", rtp: "96.75%", maxWin: "2,500x",
                description: "Celebrate the Year of the Ox with lucky symbols and fortune-bringing gameplay mechanics.",
                popularity: "★★★★★",
                features: ["Symbol Transformation", "Respins", "Lucky Symbols", "Zodiac Theme"],
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767702969/PG-FortuneOX.png"
            },
            {
                title: "Wild Bandito", category: "Western Adventure", rtp: "96.61%", maxWin: "5,000x",
                description: "Join the Wild West adventure with bandito wilds and explosive bonus features.",
                popularity: "★★★★☆",
                features: ["Wild Feature", "Free Spins", "Multipliers", "Western Theme"],
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767702978/PG-WildBandito.jpg"
            },
            {
                title: "Treasures of Aztec", category: "Ancient Civilization", rtp: "96.71%", maxWin: "5,000x",
                description: "Uncover ancient Aztec treasures with expanding symbols and exciting bonus rounds.",
                popularity: "★★★★☆",
                features: ["Expanding Symbols", "Free Spins", "Ancient Treasures", "Mysterious Powers"],
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767702976/PG-Treasures%20of%20Aztec.jpg"
            },
            {
                title: "Prosperity Lion", category: "Chinese Fortune", rtp: "96.75%", maxWin: "2,888x",
                description: "Celebrate Chinese prosperity traditions with lion dance animations and fortune symbols.",
                popularity: "★★★★☆",
                features: ["Lion Dance", "Fortune Symbols", "Prosperity Bonuses", "Cultural Authenticity"],
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767702972/PG-ProsperityLion.jpg"
            },
            {
                title: "Ninja vs Samurai", category: "Japanese Culture", rtp: "96.64%", maxWin: "5,000x",
                description: "Epic battles between ninjas and samurais with skill-based bonus features.",
                popularity: "★★★★☆",
                features: ["Battle Mechanics", "Skill Element", "Japanese Theme", "Warrior Bonuses"],
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767702971/PG-Ninja%20vs%20Samurai.jpg"
            },
            {
                title: "Dragon Hatch", category: "Fantasy Adventure", rtp: "96.88%", maxWin: "5,000x",
                description: "Hatch and nurture dragons in this innovative cluster-pay slot with epic battles.",
                popularity: "★★★★☆",
                features: ["Cluster Pay", "Dragon Collection", "Level Progression", "Epic Battles"],
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767702965/PG-DragonHatch.png"
            },
            {
                title: "Candy Burst", category: "Sweet Adventure", rtp: "96.52%", maxWin: "5,000x",
                description: "Sweet cluster-pay action with cascading wins and delightful candy-themed visuals.",
                popularity: "★★★★☆",
                features: ["Cluster Pay", "Cascading Wins", "Sweet Bonuses", "Colorful Graphics"],
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767702963/PG-CandyBurst.png"
            },
            {
                title: "Butterfly Blossom", category: "Nature's Beauty", rtp: "96.55%", maxWin: "5,000x",
                description: "Experience nature's beauty with transforming butterfly symbols and blossom features.",
                popularity: "★★★☆☆",
                features: ["Transformation Symbols", "Nature Bonuses", "Beautiful Graphics", "Peaceful Theme"],
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767702962/PG-Butterfly%20Blossom.jpg"
            }
        ]
    },
    features: {
        title: "Cinematic Graphics & Features",
        subtitle: "PG Soft sets the industry standard for visual excellence and innovative game mechanics.",
        visual: {
            title: "Visual Excellence",
            points: [
                { label: "3D Rendering:", desc: "State-of-the-art 3D graphics that bring characters and environments to life." },
                { label: "Dynamic Animation:", desc: "Fluid animations that make every spin and win feel impactful." }
            ]
        },
        innovative: {
            title: "Innovative Mechanics",
            points: [
                { label: "Skill Elements:", desc: "Many games incorporate skill-based choices that affect bonus outcomes." },
                { label: "Progression Systems:", desc: "Unlockable features and levels that keep the gameplay fresh." }
            ]
        },
        badges: [
            { title: "Award Winning", desc: "Recognized globally for innovation in mobile gaming." },
            { title: "Player Centric", desc: "Designed with the player's entertainment as the top priority." },
            { title: "Global Reach", desc: "Certified and enjoyed in dozens of countries worldwide." }
        ]
    },
    marketFocus: {
        title: "Asian Market Focus",
        subtitle: "PG Soft understands the unique preferences of Asian players, especially in Bangladesh and Myanmar.",
        cultural: {
            title: "Cultural Relevance",
            points: [
                { label: "Local Themes:", desc: "Themes based on Asian mythology, festivals, and traditions." },
                { label: "Authentic Assets:", desc: "Historically accurate symbols and soundtracks." }
            ]
        },
        adaptation: {
            title: "Regional Adaptation",
            points: [
                { label: "Language Support:", desc: "Full localization for regional languages." },
                { label: "Payment Integration:", desc: "Optimized for local payment systems used in Asia." }
            ]
        }
    },
    gettingStarted: {
        title: "Join the PG Revolution",
        subtitle: "Start your cinematic slot journey with PG Soft on BIGWIN959.",
        steps: [
            "Open your BIGWIN959 mobile account.",
            "Visit the 'Slots' lobby and select PG Soft brand.",
            "Choose a game like Mahjong Ways 2 to start.",
            "Adjust your bet size and hit the spin button."
        ],
        proTip: { label: "Pro Tip:", text: "PG Soft games work best in portrait orientation for the most immersive experience." }
    },
    faq: {
        title: "Frequently Asked Questions - PG Soft on BIGWIN959",
        items: [
            { q: "Are PG Soft games optimized for low-end phones?", a: "Yes, PG Soft games feature adaptive graphics that automatically scale based on your device's capabilities. Whether you have a flagship or budget smartphone, the games will run smoothly with optimized performance." },
            { q: "What is the best PG Soft game for beginners?", a: "Mahjong Ways and Fortune Ox are highly recommended for beginners due to their engaging themes, clear mechanics, and medium volatility. These games offer a good balance of entertainment and winning potential." },
            { q: "Can I play PG Soft games on BIGWIN959 for free?", a: "Yes, most PG Soft games on BIGWIN959 offer a demo mode where you can play for free without risking real money. This is perfect for learning game mechanics before playing with real stakes." },
            { q: "What makes PG Soft different from other slot providers?", a: "PG Soft is unique for its mobile-first approach, cinematic 3D graphics, and culturally authentic Asian themes. Every game is designed primarily for mobile devices, ensuring the best touch-screen experience." },
            { q: "Are PG Soft games fair and certified?", a: "Absolutely. All PG Soft games use certified Random Number Generators (RNG) and are tested by independent gaming laboratories. They hold multiple international gaming licenses ensuring fair play." },
            { q: "What is the average RTP of PG Soft games?", a: "PG Soft games typically have RTPs ranging from 96.5% to 97%, which is above industry average. Games like Mahjong Ways (96.92%) and Dragon Hatch (96.88%) offer excellent return-to-player percentages." },
            { q: "Do PG Soft games work on both Android and iOS?", a: "Yes, PG Soft games are built with HTML5 technology and work seamlessly on both Android and iOS devices, as well as tablets and desktop browsers without requiring any downloads." },
            { q: "How often does PG Soft release new games?", a: "PG Soft releases new games regularly, typically 2-3 new titles per month. Each release features innovative mechanics, stunning graphics, and unique themes to keep the gaming experience fresh." }
        ]
    },
    whyChoose: {
        title: "Why Choose PG Soft on BIGWIN959?",
        subtitle: "Discover what makes PG Soft the preferred choice for mobile slot gaming in Bangladesh and Myanmar.",
        reasons: [
            { title: "Mobile-First Design", desc: "Every game is designed primarily for mobile devices, ensuring perfect touch controls and optimal performance on smartphones." },
            { title: "Cinematic Quality", desc: "Movie-quality 3D graphics and animations that rival AAA video games, creating an immersive gaming experience." },
            { title: "Asian Themes", desc: "Authentic cultural themes featuring Asian mythology, festivals, and traditions that resonate with local players." },
            { title: "High RTP Games", desc: "Industry-leading return-to-player percentages averaging 96%+, giving players better winning chances." },
            { title: "Innovative Features", desc: "Unique game mechanics like cluster pays, cascading reels, and skill-based bonuses for engaging gameplay." },
            { title: "Network Optimized", desc: "Games load quickly and run smoothly even on 3G/4G networks, perfect for Bangladesh and Myanmar connectivity." }
        ]
    },
    responsible: {
        title: "Responsible Gaming with PG Soft",
        subtitle: "Enjoy PG Soft games responsibly and stay in control of your gaming experience.",
        tips: [
            "Set daily, weekly, or monthly deposit limits before you start playing.",
            "Only bet amounts you can comfortably afford to lose.",
            "Take regular breaks every 30-45 minutes to avoid fatigue.",
            "Never chase losses - if you're on a losing streak, take a break.",
            "Use the demo mode to learn games before playing with real money.",
            "Set win and loss limits for each gaming session."
        ],
        disclaimer: "PG Soft games are for entertainment purposes only. Gambling should never be seen as a way to make money. Please gamble responsibly and seek help if you feel you may have a gambling problem.",
        helpline: "If you need support, contact BIGWIN959's responsible gaming team."
    },
    cta: {
        title: "Ready to Experience Cinematic Gaming?",
        subtitle: "Join thousands of players enjoying PG Soft's premium mobile slots on BIGWIN959.",
        button: "Play PG Soft Games Now",
        features: [
            "9+ Premium Mobile Slots",
            "96%+ Average RTP",
            "Instant Play - No Download",
            "Demo Mode Available"
        ]
    }
};

en.providers.pgSoft = pgSoftContentEn;

// Full Bengali Translation
const bnContent = JSON.parse(JSON.stringify(pgSoftContentEn));

// SEO
bnContent.seo.title = "BIGWIN959-এ PG Soft (PG) গেমস | মোবাইল-ফার্স্ট স্লট গাইড (২০২৫)";
bnContent.seo.description = "BIGWIN959-এ PG Soft (PG) গেমস। মোবাইল-ফার্স্ট স্লট, সিনেমাটিক গ্রাফিক্স এবং উদ্ভাবনী ফিচারের সম্পূর্ণ গাইড।";
bnContent.seo.schema.headline = "BIGWIN959-এ PG Soft (PG) গেমস";
bnContent.seo.schema.description = "সিনেমাটিক এক্সিলেন্স সহ প্রিমিয়াম মোবাইল-ফার্স্ট স্লট ডেভেলপার";
bnContent.seo.keywords = ["PG Soft", "PG গেমস", "মোবাইল স্লট", "BIGWIN959", "মাহজং ওয়েজ", "ফরচুন অক্স"];

// Hero
bnContent.hero.badge = "সিনেমাটিক গেমিং এক্সিলেন্স";
bnContent.hero.title = "BIGWIN959-এ <span class=\"text-brand\">PG Soft (PG)</span> গেমস";
bnContent.hero.subtitle = "প্রিমিয়াম মোবাইল-ফার্স্ট স্লট সহ সিনেমাটিক গ্রাফিক্স এবং উদ্ভাবনী ফিচার (২০২৫)";
bnContent.hero.cta.play = "এখনই PG Soft গেমস খেলুন";

// Intro
bnContent.intro.title = "PG Soft সম্পর্কে: মোবাইল গেমিংয়ের নতুন সংজ্ঞা";
bnContent.intro.desc = "PG Soft (Pocket Games Soft) হল একটি বিশ্বমানের মোবাইল গেম ডেভেলপার যা তাদের মোবাইল-ফার্স্ট দৃষ্টিভঙ্গি এবং সিনেমাটিক মানের গেমগুলির মাধ্যমে স্লট গেমিং শিল্পে বিপ্লব ঘটিয়েছে।";
bnContent.intro.excellence.title = "কোম্পানির শ্রেষ্ঠত্ব";
bnContent.intro.excellence.foundedLabel = "প্রতিষ্ঠিত:";
bnContent.intro.excellence.hqLabel = "সদর দপ্তর:";
bnContent.intro.excellence.licensesLabel = "লাইসেন্স:";
bnContent.intro.excellence.specLabel = "বিশেষত্ব:";
bnContent.intro.excellence.specValue = "সিনেমাটিক মানের মোবাইল-ফার্স্ট স্লট গেমস";
bnContent.intro.excellence.desc = "PG Soft প্রথম দিন থেকেই মোবাইল গেমিংয়ে ফোকাস করে নিজেকে একটি প্রিমিয়াম ডেভেলপার হিসেবে প্রতিষ্ঠিত করেছে। তাদের গেমগুলি স্মার্টফোনে কনসোল-মানের অভিজ্ঞতা প্রদানের জন্য ডিজাইন করা হয়েছে।";

bnContent.intro.innovation.title = "উদ্ভাবনে নেতৃত্ব";
bnContent.intro.innovation.points = [
    { label: "মোবাইল-ফার্স্ট দর্শন:", value: "প্রতিটি গেম প্রাথমিকভাবে মোবাইল ডিভাইসের জন্য ডিজাইন করা হয়, যা সর্বোত্তম টাচ-স্ক্রিন অভিজ্ঞতা নিশ্চিত করে।" },
    { label: "সিনেমাটিক গুণমান:", value: "গেমগুলিতে মুভি-মানের গ্রাফিক্স এবং অ্যানিমেশন রয়েছে যা AAA ভিডিও গেমের প্রতিদ্বন্দ্বী।" },
    { label: "সাংস্কৃতিক প্রাণ:", value: "এশিয়ান বাজারের কথা মাথায় রেখে গেমগুলি ডিজাইন করা হয়, যেখানে স্থানীয় থিম এবং মেকানিক্স অন্তর্ভুক্ত থাকে।" }
];

// Mobile First
bnContent.mobileFirst.title = "মোবাইল গেমিং বিপ্লব";
bnContent.mobileFirst.subtitle = "PG Soft শুধু মোবাইল গেমিং-এর সাথে মানিয়ে নেয়নি—তারা এর পথপ্রদর্শক। তাদের গেমের প্রতিটি দিক বিশেষভাবে মোবাইল অভিজ্ঞতার জন্য ডিজাইন করা হয়েছে।";
bnContent.mobileFirst.advantage.title = "মোবাইল-ফার্স্ট সুবিধা";
bnContent.mobileFirst.advantage.points = [
    { label: "টাচ-অপ্টিমাইজড ডিজাইন:", value: "প্রতিটি বোতাম এবং মেনু আঙুলের নেভিগেশন এবং আরামদায়ক গেমপ্লের জন্য ডিজাইন করা হয়েছে।" },
    { label: "পোর্ট্রেট মোড এক্সিলেন্স:", value: "গেমগুলি উল্লম্ব ওরিয়েন্টেশনে নিখুঁতভাবে কাজ করে, যা এক হাতে খেলার সুবিধা দেয়।" },
    { label: "ব্যাটারি অপ্টিমাইজেশন:", value: "উন্নত রেন্ডারিং কৌশলগুলি ভিজ্যুয়াল মান বজায় রেখে ব্যাটারি খরচ কমায়।" }
];
bnContent.mobileFirst.tech.title = "প্রযুক্তিগত উদ্ভাবন";
bnContent.mobileFirst.tech.points = [
    { label: "অ্যাডাপটিভ গ্রাফিক্স:", value: "মসৃণ পারফরম্যান্সের জন্য গেমগুলি ডিভাইসের ক্ষমতার উপর ভিত্তি করে স্বয়ংক্রিয়ভাবে ভিজ্যুয়াল মান সামঞ্জস্য করে।" },
    { label: "তাত্ক্ষণিক লোডিং:", value: "অপ্টিমাইজড অ্যাসেট কমপ্রেশন গেমগুলিকে ৩ সেকেন্ডের মধ্যে লোড করতে দেয়।" },
    { label: "ডেটা দক্ষতা:", value: "ধীর ৩জি/৪জি নেটওয়ার্কগুলোতেও মসৃণভাবে চলার জন্য ডিজাইন করা হয়েছে।" }
];
bnContent.mobileFirst.benefits.title = "মোবাইল গেমিং সুবিধা";
bnContent.mobileFirst.benefits.items = [
    { title: "যাত্রাপথের জন্য উপযুক্ত", desc: "ভ্রমণ বা বিরতির সময় সহজ পজ ফাংশনালিটি সহ দ্রুত গেমিং সেশনের জন্য ডিজাইন করা হয়েছে।" },
    { title: "নেটওয়ার্ক অপ্টিমাইজড", desc: "সাধারণ নেটওয়ার্কগুলোতে মসৃণ গেমপ্লে নিশ্চিত করতে দক্ষ ডেটা ব্যবহার।" },
    { title: "ডিভাইস ফ্রেন্ডলি", desc: "প্রিমিয়াম এবং বাজেট উভয় স্মার্টফোনেই মসৃণভাবে চলে।" }
];

// Games (Portfolio)
bnContent.games.title = "জনপ্রিয় PG Soft গেমস";
bnContent.games.subtitle = "PG Soft-এর সবচেয়ে বিখ্যাত গেমগুলি আবিষ্কার করুন, যার প্রতিটি অনন্য থিম এবং অসাধারণ মোবাইল গেমিং অভিজ্ঞতা প্রদান করে।";
bnContent.games.labels = { rtp: "RTP", maxWin: "ম্যাক্স উইন", features: "মূল বৈশিষ্ট্য" };
bnContent.games.playNow = "এখন খেলুন";
bnContent.games.list = [
    {
        title: "Mahjong Ways", category: "এশিয়ান সংস্কৃতি", rtp: "৯৬.৯২%", maxWin: "৫,০০০x",
        description: "ক্যাসকেডিং রিল এবং প্রামাণিক এশিয়ান নান্দনিকতা সহ স্লট ফর্মে ঐতিহ্যবাহী মাহজং অভিজ্ঞতা নিন।",
        popularity: "★★★★★",
        features: ["ক্যাসকেডিং রিল", "ফ্রি স্পিন", "মাল্টিপ্লায়ার", "মাহজং সিম্বল"],
        img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767702970/PG-MajongWays.png"
    },
    {
        title: "Fortune Ox", category: "চাইনিজ জোডিয়াক", rtp: "৯৬.৭৫%", maxWin: "২,৫০০x",
        description: "লাকি সিম্বল এবং ভাগ্য-আনয়নকারী গেমপ্লে মেকানিক্সের সাথে অক্স ইয়ার উদযাপন করুন।",
        popularity: "★★★★★",
        features: ["সিম্বল ট্রান্সফর্মেশন", "রিস্পিন", "লাকি সিম্বল", "জোডিয়াক থিম"],
        img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767702969/PG-FortuneOX.png"
    },
    {
        title: "Wild Bandito", category: "ওয়েস্টার্ন অ্যাডভেঞ্চার", rtp: "৯৬.৬১%", maxWin: "৫,০০০x",
        description: "ব্যান্ডিতো ওয়াইল্ডস এবং বিস্ফোরক বোনাস ফিচার নিয়ে ওয়াইল্ড ওয়েস্ট অ্যাডভেঞ্চারে যোগ দিন।",
        popularity: "★★★★☆",
        features: ["ওয়াইল্ড ফিচার", "ফ্রি স্পিন", "মাল্টিপ্লায়ার", "ওয়েস্টার্ন থিম"],
        img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767702978/PG-WildBandito.jpg"
    },
    {
        title: "Treasures of Aztec", category: "প্রাচীন সভ্যতা", rtp: "৯৬.৭১%", maxWin: "৫,০০০x",
        description: "এক্সপ্যান্ডিং সিম্বল এবং উত্তেজনাপূর্ণ বোনাস রাউন্ডের সাথে প্রাচীন অ্যাজটেক ধন উন্মোচন করুন।",
        popularity: "★★★★☆",
        features: ["এক্সপ্যান্ডিং সিম্বল", "ফ্রি স্পিন", "প্রাচীন ট্রেজার", "রহস্যময় শক্তি"],
        img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767702976/PG-Treasures%20of%20Aztec.jpg"
    },
    {
        title: "Prosperity Lion", category: "চাইনিজ ফরচুন", rtp: "৯৬.৭৫%", maxWin: "২,৮৮৮x",
        description: "লায়ন্স ড্যান্স অ্যানিমেশন এবং ফরচুন সিম্বল সহ চাইনিজ সমৃদ্ধির ঐতিহ্য উদযাপন করুন।",
        popularity: "★★★★☆",
        features: ["লায়ন ড্যান্স", "ফরচুন সিম্বল", "প্রসপারিটি বোনাস", "সাংস্কৃতিক সত্যতা"],
        img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767702972/PG-ProsperityLion.jpg"
    },
    {
        title: "Ninja vs Samurai", category: "জাপানি সংস্কৃতি", rtp: "৯৬.৬৪%", maxWin: "৫,০০০x",
        description: "নিনজা এবং সামুরাইদের মধ্যে দক্ষতা-ভিত্তিক বোনাস ফীচার সহ মহাকাব্যিক যুদ্ধ।",
        popularity: "★★★★☆",
        features: ["ব্যাটেল মেকানিক্স", "স্কিল এলিমেন্ট", "জাপানি থিম", "ওয়ারিয়র বোনাস"],
        img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767702971/PG-Ninja%20vs%20Samurai.jpg"
    },
    {
        title: "Dragon Hatch", category: "ফ্যান্টাসি অ্যাডভেঞ্চার", rtp: "৯৬.৮৮%", maxWin: "৫,০০০x",
        description: "এই উদ্ভাবনী ক্লাস্টার-পে স্লটে ড্রাগন লালন-পালন করুন এবং মহাকাব্যিক যুদ্ধের অভিজ্ঞতা নিন।",
        popularity: "★★★★☆",
        features: ["ক্লাস্টার পে", "ড্রাগন কালেকশন", "লেভেল প্রগ্রেশন", "এপিক ব্যাটল"],
        img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767702965/PG-DragonHatch.png"
    },
    {
        title: "Candy Burst", category: "সুইট অ্যাডভেঞ্চার", rtp: "৯৬.৫২%", maxWin: "৫,০০০x",
        description: "ক্যাসকেডিং উইন এবং সুন্দর ক্যান্ডি-থিমড ভিজ্যুয়াল সহ মিষ্টি ক্লাস্টার-পে অ্যাকশন।",
        popularity: "★★★★☆",
        features: ["ক্লাস্টার পে", "ক্যাসকেডিং উইন", "সুইট বোনাস", "কালারফুল গ্রাফিক্স"],
        img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767702963/PG-CandyBurst.png"
    },
    {
        title: "Butterfly Blossom", category: "প্রকৃতির সৌন্দর্য", rtp: "৯৬.৫৫%", maxWin: "৫,০০০x",
        description: "রূপান্তরকারী বাটারফ্লাই সিম্বল এবং ব্লসম ফিচারের সাথে প্রকৃতির সৌন্দর্য উপভোগ করুন।",
        popularity: "★★★☆☆",
        features: ["ট্রান্সফরমেশন সিম্বল", "নেচার বোনাস", "সুন্দর গ্রাফিক্স", "শান্তিময় থিম"],
        img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767702962/PG-Butterfly%20Blossom.jpg"
    }
];

// Features
bnContent.features.title = "সিনেমাটিক গ্রাফিক্স ও ফিচার";
bnContent.features.subtitle = "PG Soft ভিজ্যুয়াল এক্সিলেন্স এবং ইনোভেটিভ গেম মেকানিক্সের ক্ষেত্রে শিল্প মান নির্ধারণ করে।";
bnContent.features.visual.title = "ভিজ্যুয়াল এক্সিলেন্স";
bnContent.features.visual.points = [
    { label: "৩ডি রেন্ডারিং:", desc: "অত্যাধুনিক ৩ডি গ্রাফিক্স যা চরিত্র এবং পরিবেশকে জীবন্ত করে তোলে।" },
    { label: "ডায়নামিক অ্যানিমেশন:", desc: "ফ্লুইড অ্যানিমেশন যা প্রতিটি স্পিন এবং জয়কে আকর্ষণীয় করে তোলে।" }
];
bnContent.features.innovative.title = "উদ্ভাবনী মেকানিক্স";
bnContent.features.innovative.points = [
    { label: "স্কিল এলিমেন্ট:", desc: "অনেক গেমে দক্ষতা-ভিত্তিক পছন্দ অন্তর্ভুক্ত থাকে যা বোনাস ফলাফলকে প্রভাবিত করে।" },
    { label: "প্রগ্রেশন সিস্টেম:", desc: "আনলকযোগ্য ফিচার এবং লেভেল যা গেমপ্লেকে সতেজ রাখে।" }
];
bnContent.features.badges = [
    { title: "পুরস্কার বিজয়ী", desc: "মোবাইল গেমিংয়ে উদ্ভাবনের জন্য বিশ্বব্যাপী স্বীকৃত।" },
    { title: "খেলোয়াড় কেন্দ্রিক", desc: "খেলোয়াড়ের বিনোদনকে সর্বোচ্চ অগ্রাধিকার দিয়ে ডিজাইন করা।" },
    { title: "গ্লোবাল রিচ", desc: "বিশ্বব্যাপী ডজন ডজন দেশে সার্টিফাইড এবং উপভোগ্য।" }
];

// Market Focus
bnContent.marketFocus.title = "এশিয়ান মার্কেট ফোকাস";
bnContent.marketFocus.subtitle = "PG Soft এশিয়ান খেলোয়াড়দের, বিশেষ করে বাংলাদেশ ও মিয়ানমারের খেলোয়াড়দের অনন্য পছন্দগুলি বোঝে।";
bnContent.marketFocus.cultural.title = "সাংস্কৃতিক প্রাসঙ্গিকতা";
bnContent.marketFocus.cultural.points = [
    { label: "লোকাল থিম:", desc: "এশিয়ান পুরাণ, উৎসব এবং ঐতিহ্যের উপর ভিত্তি করে থিম।" },
    { label: "অথেন্টিক অ্যাসেট:", desc: "ঐতিহাসিকভাবে সঠিক চিহ্ন এবং সাউন্ডট্র্যাক।" }
];
bnContent.marketFocus.adaptation.title = "আঞ্চলিক অভিযোজন";
bnContent.marketFocus.adaptation.points = [
    { label: "ভাষা সহায়তা:", desc: "আঞ্চলিক ভাষার জন্য সম্পূর্ণ লোকালাইজেশন।" },
    { label: "পেমেন্ট ইন্টিগ্রেশন:", desc: "এশিয়ায় ব্যবহৃত স্থানীয় পেমেন্ট সিস্টেমের জন্য অপ্টিমাইজড।" }
];

// Getting Started
bnContent.gettingStarted.title = "PG বিপ্লবে যোগ দিন";
bnContent.gettingStarted.subtitle = "BIGWIN959-এ PG Soft-এর সাথে আপনার সিনেমাটিক স্লট যাত্রা শুরু করুন।";
bnContent.gettingStarted.steps = [
    "আপনার BIGWIN959 মোবাইল অ্যাকাউন্ট খুলুন।",
    "'স্লটস' লবিতে যান এবং PG Soft ব্র্যান্ড নির্বাচন করুন।",
    "শুরু করার জন্য মাহজং ওয়েজ ২-এর মতো একটি গেম বেছে নিন।",
    "আপনার বেট সাইজ ঠিক করুন এবং স্পিন বোতামে চাপ দিন।"
];
bnContent.gettingStarted.proTip.label = "প্রো টিপ:";
bnContent.gettingStarted.proTip.text = "সবচেয়ে ইমারসিভ অভিজ্ঞতার জন্য PG Soft গেমগুলি পোর্ট্রেট ওরিয়েন্টেশনে সবচেয়ে ভালো কাজ করে।";

// FAQ
bnContent.faq.title = "সচরাচর জিজ্ঞাসিত প্রশ্ন - PG Soft";
bnContent.faq.items = [
    { q: "PG Soft গেমগুলি কি লো-এন্ড ফোনে অপ্টিমাইজড?", a: "হ্যাঁ, PG Soft গেমগুলিতে অ্যাডাপটিভ গ্রাফিক্স রয়েছে যা আপনার ডিভাইসের ক্ষমতার উপর ভিত্তি করে স্বয়ংক্রিয়ভাবে স্কেল হয়। আপনার ফ্ল্যাগশিপ বা বাজেট স্মার্টফোন যাই থাকুক না কেন, গেমগুলি মসৃণভাবে চলবে।" },
    { q: "নতুনদের জন্য সেরা PG Soft গেম কোনটি?", a: "মাহজং ওয়েজ এবং ফরচুন অক্স নতুনদের জন্য অত্যন্ত সুপারিশ করা হয় কারণ তাদের আকর্ষণীয় থিম, পরিষ্কার মেকানিক্স এবং মাঝারি অস্থিরতা। এই গেমগুলো বিনোদন এবং জয়ের সম্ভাবনার ভালো ভারসাম্য বজায় রাখে।" },
    { q: "আমি কি বিনে পয়সায় BIGWIN959-এ PG Soft খেলতে পারি?", a: "হ্যাঁ, BIGWIN959-এর বেশিরভাগ PG Soft গেমে ডেমো মোড রয়েছে যেখানে আপনি আসল টাকা ঝুঁকি না নিয়ে বিনামূল্যে খেলতে পারেন। আসল স্টেক দিয়ে খেলার আগে গেম মেকানিক্স শেখার জন্য এটি উপযুক্ত।" },
    { q: "অন্যান্য স্লট প্রোভাইডারদের থেকে PG Soft কেন আলাদা?", a: "PG Soft তাদের মোবাইল-ফার্স্ট দৃষ্টিভঙ্গি, সিনেমাটিক ৩ডি গ্রাফিক্স এবং সাংস্কৃতিকভাবে খাঁটি এশিয়ান থিমের জন্য অনন্য। প্রতিটি গেম মূলত মোবাইল ডিভাইসের জন্য ডিজাইন করা হয়েছে।" },
    { q: "PG Soft গেমগুলি কি ন্যায্য এবং সার্টিফাইড?", a: "অবশ্যই। সমস্ত PG Soft গেম সার্টিফাইড আরএনজি (RNG) ব্যবহার করে এবং স্বাধীন গেমিং ল্যাবরেটরি দ্বারা পরীক্ষিত। ন্যায্য খেলা নিশ্চিত করতে তাদের একাধিক আন্তর্জাতিক গেমিং লাইসেন্স রয়েছে।" },
    { q: "PG Soft গেমের গড় RTP কত?", a: "PG Soft গেমগুলির RTP সাধারণত ৯৬.৫% থেকে ৯৭% এর মধ্যে থাকে, যা শিল্পের গড়ের উপরে। মাহজং ওয়েজ (৯৬.৯২%) এবং ড্রাগন হ্যাচ (৯৬.৮৮%) এর মতো গেমগুলি চমৎকার রিটার্ন-টু-প্লেয়ার শতাংশ অফার করে।" },
    { q: "PG Soft গেম কি অ্যান্ড্রয়েড এবং আইওএস উভয় ক্ষেত্রেই কাজ করে?", a: "হ্যাঁ, PG Soft গেমগুলি HTML5 প্রযুক্তি দিয়ে তৈরি এবং অ্যান্ড্রয়েড ও আইওএস উভয় ডিভাইস, পাশাপাশি ট্যাবলেট এবং ডেস্কটপ ব্রাউজারে কোনও ডাউনলোড ছাড়াই নির্বিঘ্নে কাজ করে।" },
    { q: "PG Soft কত ঘন ঘন নতুন গেম রিলিজ করে?", a: "PG Soft নিয়মিত নতুন গেম রিলিজ করে, সাধারণত মাসে ২-৩টি নতুন টাইটেল। প্রতিটি রিলিজ গেমিং অভিজ্ঞতা সতেজ রাখতে উদ্ভাবনী মেকানিক্স, অত্যাশ্চর্য গ্রাফিক্স এবং অনন্য থিম নিয়ে আসে।" }
];

// Why Choose
bnContent.whyChoose.title = "কেন BIGWIN959-এ PG Soft বেছে নেবেন?";
bnContent.whyChoose.subtitle = "জানুন কেন PG Soft বাংলাদেশ ও মিয়ানমারে মোবাইল স্লট গেমিংয়ের জন্য পছন্দের পছন্দ।";
bnContent.whyChoose.reasons = [
    { title: "মোবাইল-ফার্স্ট ডিজাইন", desc: "প্রতিটি গেম মূলত মোবাইল ডিভাইসের জন্য ডিজাইন করা হয়েছে, যা স্মার্টফোনে নিখুঁত টাচ কন্ট্রোল এবং অপ্টিমাল পারফরম্যান্স নিশ্চিত করে।" },
    { title: "সিনেমাটিক গুণমান", desc: "মুভি-মানের ৩ডি গ্রাফিক্স এবং অ্যানিমেশন যা AAA ভিডিও গেমের প্রতিদ্বন্দ্বী এবং একটি ইমারসিভ গেমিং অভিজ্ঞতা তৈরি করে।" },
    { title: "এশিয়ান থিম", desc: "এশিয়ান পুরাণ, উৎসব এবং ঐতিহ্যের খাঁটি সাংস্কৃতিক থিম যা স্থানীয় খেলোয়াড়দের সাথে সংযোগ স্থাপন করে।" },
    { title: "উচ্চ RTP গেমস", desc: "শিল্প-নেতৃস্থানীয় রিটার্ন-টু-প্লেয়ার শতাংশ গড়ে ৯৬%+, যা খেলোয়াড়দের জয়ের ভালো সুযোগ দেয়।" },
    { title: "উদ্ভাবনী ফিচার", desc: "আকর্ষণীয় গেমপ্লের জন্য ক্লাস্টার পে, ক্যাসকেডিং রিল এবং স্কিল-বেসড বোনাসের মতো অনন্য গেম মেকানিক্স।" },
    { title: "নেটওয়ার্ক অপ্টিমাইজড", desc: "গেমগুলি দ্রুত লোড হয় এবং ৩জি/৪জি নেটওয়ার্কগুলোতেও মসৃণভাবে চলে, যা বাংলাদেশ ও মিয়ানমারের কানেক্টিভিটির জন্য উপযুক্ত।" }
];

// Responsible
bnContent.responsible.title = "PG Soft-এর সাথে দায়িত্বশীল গেমিং";
bnContent.responsible.subtitle = "দায়িত্বের সাথে PG Soft গেম উপভোগ করুন এবং আপনার গেমিং অভিজ্ঞতার নিয়ন্ত্রণে থাকুন।";
bnContent.responsible.disclaimer = "PG Soft গেম শুধুমাত্র বিনোদনের জন্য। জুয়াকে কখনই অর্থ উপার্জনের উপায় হিসেবে দেখা উচিত নয়। অনুগ্রহ করে দায়িত্বের সাথে জুয়া খেলুন।";
bnContent.responsible.tips = [
    "খেলা শুরু করার আগে দৈনিক বা সাপ্তাহিক জমার সীমা নির্ধারণ করুন।",
    "শুধুমাত্র সেই পরিমাণ বাজি ধরুন যা আপনি হারানোর সামর্থ্য রাখেন।",
    "প্রতি ৩০-৪৫ মিনিট পর পর নিয়মিত বিরতি নিন।",
    "ক্ষতির পেছনে ছুটবেন না - যদি আপনি হেরে যান, বিরতি নিন।",
    "আসল টাকায় খেলার আগে ডেমো মোড ব্যবহার করুন।"
];

// CTA
bnContent.cta.title = "সিনেমাটিক গেমিং অভিজ্ঞতার জন্য প্রস্তুত?";
bnContent.cta.subtitle = "BIGWIN959-এ PG Soft-এর প্রিমিয়াম মোবাইল স্লট উপভোগ করা হাজার হাজার খেলোয়াড়দের সাথে যোগ দিন।";
bnContent.cta.button = "এখনই PG Soft গেমস খেলুন";
bnContent.cta.features = ["৯+ প্রিমিয়াম মোবাইল স্লট", "৯৬%+ গড় RTP", "ইনস্ট্যান্ট প্লে", "ডেমো মোড উপলব্ধ"];

bn.providers.pgSoft = bnContent;

fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
fs.writeFileSync(bnPath, JSON.stringify(bn, null, 2));

console.log('Updated PG Soft keys with ALL SECTIONS.');
