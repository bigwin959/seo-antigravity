const fs = require('fs');
const path = require('path');

const enPath = path.join(__dirname, 'public', 'locales', 'en', 'translation.json');
const bnPath = path.join(__dirname, 'public', 'locales', 'bn', 'translation.json');

const bngEn = {
    "seo": {
        "title": "BNG (Booongo) Games on BIGWIN959 | HTML5 Slots Guide (2025)",
        "description": "BNG (Booongo) games on BIGWIN959. Learn about Booongo's innovative HTML5 slots, unique mechanics, mobile optimization, and popular titles for BD & MM players.",
        "keywords": [
            "BNG Games",
            "Booongo",
            "online slots",
            "BIGWIN959",
            "HTML5 slots",
            "Bangladesh",
            "Myanmar"
        ],
        "schema": {
            "headline": "BNG (Booongo) Games on BIGWIN959",
            "description": "Complete HTML5 Slot Provider Guide with Innovative Mechanics"
        }
    },
    "hero": {
        "title": "BNG (Booongo) Games <br /> on <span class=\"text-brand\">BIGWIN959</span>",
        "subtitle": "Innovative HTML5 Slots with Unique Mechanics & Stunning Graphics (2025)",
        "cta": {
            "play": "Play BNG Games on BIGWIN959"
        }
    },
    "intro": {
        "title": "About BNG (Booongo Gaming)",
        "p1": "Booongo is a leading HTML5 game development studio founded in 2015, specializing in creating innovative slot games with unique mechanics and exceptional visual quality.",
        "p2": "The company focuses on:",
        "features": [
            "Innovative game mechanics",
            "Exceptional visual quality",
            "Global accessibility",
            "Mobile-first design"
        ]
    },
    "categories": {
        "title": "BNG Game Categories",
        "items": [
            {
                "title": "Hold and Win",
                "desc": "Signature mechanics featuring respins and jackpot opportunities."
            },
            {
                "title": "Megaways",
                "desc": "Dynamic reel structures with thousands of ways to win."
            },
            {
                "title": "Classic Slots",
                "desc": "Modern takes on traditional fruit and lucky number themes."
            }
        ]
    },
    "trust": {
        "title": "Why Players Choose BNG",
        "items": [
            {
                "title": "Fairness Certified",
                "desc": "RNG systems are audited by independent labs like QUINEL."
            },
            {
                "title": "Stunning Visuals",
                "desc": "High-definition graphics and smooth animations."
            },
            {
                "title": "Mobile Excellence",
                "desc": "Perfectly optimized for mobile browsers and apps."
            },
            {
                "title": "Local Popularity",
                "desc": "Strong themes that resonate with Asian players."
            }
        ]
    },
    "faq": {
        "title": "FAQ – BNG Games on BIGWIN959",
        "items": [
            {
                "q": "Are BNG games fair?",
                "a": "Yes. BNG games use certified RNG technology to ensure random and fair outcomes."
            },
            {
                "q": "What is 'Hold and Win'?",
                "a": "It is a popular bonus feature where certain symbols stick to the reels, giving players more chances to win big prizes."
            },
            {
                "q": "Can I play BNG games on mobile?",
                "a": "Yes. BNG games are fully optimized for mobile devices and browsers."
            }
        ]
    },
    "cta": {
        "title": "Experience BNG Innovation",
        "button": "Play BNG Games Now"
    }
};

const btGamingEn = {
    "seo": {
        "title": "BT Gaming Slots on BIGWIN959 | Innovative Mechanics (2025)",
        "description": "BT Gaming slots on BIGWIN959. Complete guide to BT Gaming's unique slot mechanics, engaging themes, and premium gameplay for BD & MM players.",
        "keywords": [
            "BT Gaming",
            "online slots",
            "BIGWIN959",
            "slot mechanics",
            "Bangladesh",
            "Myanmar"
        ],
        "schema": {
            "headline": "BT Gaming Slots on BIGWIN959",
            "description": "Innovative Slot Developer with Unique Mechanics and Creative Themes"
        }
    },
    "hero": {
        "title": "BT Gaming Slots <br /> on <span class=\"text-brand\">BIGWIN959</span>",
        "subtitle": "Unique Mechanics, Creative Themes & Engaging Gameplay Experiences (2025)",
        "cta": {
            "play": "Play BT Gaming Slots"
        }
    },
    "intro": {
        "title": "About BT Gaming: Innovation in Slot Development",
        "p1": "BT Gaming is an innovative slot development studio that focuses on creating unique gaming experiences through creative mechanics, engaging themes, and player-centric design philosophy.",
        "features": [
            "Innovation Focus",
            "Player Engagement",
            "Quality Assurance",
            "Mobile Optimization"
        ]
    },
    "mechanics": {
        "title": "Signature Features & Mechanics",
        "items": [
            {
                "title": "Multi-Level Bonus Systems",
                "desc": "Progressive features where players advance through different levels for enhanced rewards."
            },
            {
                "title": "Interactive Elements",
                "desc": "Player choices that affect gameplay, creating a more engaging experience."
            },
            {
                "title": "Adaptive Volatility",
                "desc": "Systems that adjust volatility based on player behavior and preferences."
            }
        ]
    },
    "faq": {
        "title": "FAQ – BT Gaming Slots on BIGWIN959",
        "items": [
            {
                "q": "What makes BT Gaming unique?",
                "a": "Their focus on multi-level bonus systems and interactive gameplay elements sets them apart from traditional providers."
            },
            {
                "q": "Are BT Gaming slots safe?",
                "a": "Yes. They use certified RNG systems and undergo rigorous quality assurance testing."
            },
            {
                "q": "How do I find BT Gaming slots on BIGWIN959?",
                "a": "Use the provider filter in the slots section and select 'BT Gaming'."
            }
        ]
    },
    "cta": {
        "title": "Discover BT Gaming Excellence",
        "button": "Play BT Gaming Slots Now"
    }
};

const breadcrumbsExtEn = {
    "bng": "BNG (Booongo)",
    "bt": "BT Gaming"
};

const breadcrumbsExtBn = {
    "bng": "বিএনজি (বুঙ্গো)",
    "bt": "বিটি গেমিং"
};

function updateJson(filePath, newProviders, breadcrumbsExt) {
    const content = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(content);

    if (!json.providers) json.providers = {};

    // Add new providers
    Object.keys(newProviders).forEach(key => {
        json.providers[key] = newProviders[key];
    });

    // Add breadcrumbs
    if (!json.breadcrumbs) json.breadcrumbs = {};
    Object.keys(breadcrumbsExt).forEach(key => {
        json.breadcrumbs[key] = breadcrumbsExt[key];
    });

    fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf8');
    console.log(`Updated ${filePath}`);
}

// BNG Bengali (simplified translation for now, but better than none)
const bngBn = JSON.parse(JSON.stringify(bngEn)); // Deep copy
bngBn.seo.title = "BIGWIN959 এ BNG (বুঙ্গো) গেম | HTML5 স্লটস গাইড (২০২৫)";
bngBn.seo.description = "BIGWIN959 এ BNG (বুঙ্গো) গেম। বুঙ্গোর উদ্ভাবনী HTML5 স্লটস, অনন্য মেকানিক্স, মোবাইল অপ্টিমাইজেশন এবং জনপ্রিয় টাইটেল সম্পর্কে জানুন।";
bngBn.hero.title = "BIGWIN959 এ <br /> <span class=\"text-brand\">BNG (বুঙ্গো) গেম</span>";
bngBn.hero.subtitle = "অনন্য মেকানিক্স এবং অত্যাশ্চর্য গ্রাফিক্স সহ উদ্ভাবনী HTML5 স্লটস (২০২৫)";
bngBn.hero.cta.play = "BIGWIN959 এ BNG গেম খেলুন";
bngBn.intro.title = "BNG (বুনগো গেমিং) সম্পর্কে";
bngBn.intro.p1 = "বুনগো হল ২০১৫ সালে প্রতিষ্ঠিত একটি শীর্ষস্থানীয় HTML5 গেম ডেভেলপমেন্ট স্টুডিও, যা অনন্য মেকানিক্স এবং ব্যতিক্রমী ভিজ্যুয়াল গুণমান সহ উদ্ভাবনী স্লট গেম তৈরিতে বিশেষজ্ঞ।";
bngBn.cta.button = "এখনই BNG গেম খেলুন";

// BT Gaming Bengali
const btGamingBn = JSON.parse(JSON.stringify(btGamingEn));
btGamingBn.seo.title = "BIGWIN959 এ বিটি গেমিং স্লটস | উদ্ভাবনী মেকানিক্স (২০২৫)";
btGamingBn.seo.description = "BIGWIN959 এ বিটি গেমিং স্লটস। বিটি গেমিংয়ের অনন্য স্লট মেকানিক্স এবং প্রিমিয়াম গেমিং অভিজ্ঞতার সম্পূর্ণ গাইড।";
btGamingBn.hero.title = "BIGWIN959 এ <br /> <span class=\"text-brand\">বিটি গেমিং স্লটস</span>";
btGamingBn.hero.subtitle = "অনন্য মেকানিক্স, সৃজনশীল থিম এবং আকর্ষণীয় গেমিং অভিজ্ঞতা (২০২৫)";
btGamingBn.hero.cta.play = "বিটি গেমিং স্লট খেলুন";
btGamingBn.intro.title = "বিটি গেমিং সম্পর্কে: স্লট ডেভেলপমেন্টে উদ্ভাবন";
btGamingBn.cta.button = "এখনই বিটি গেমিং স্লট খেলুন";

updateJson(enPath, { bng: bngEn, btGaming: btGamingEn }, breadcrumbsExtEn);
updateJson(bnPath, { bng: bngBn, btGaming: btGamingBn }, breadcrumbsExtBn);
