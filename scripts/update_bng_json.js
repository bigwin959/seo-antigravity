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

ensurePath(en, 'providers.bng');
ensurePath(bn, 'providers.bng');

const bngContentEn = {
    seo: {
        title: "BNG (Booongo) Games on BIGWIN959 | Slots & Hold and Win Guide (2025)",
        description: "Booongo (BNG) games on BIGWIN959. Discover popular Hold and Win slots, high-definition graphics, and innovative jackpot mechanics for BD & MM players.",
        keywords: ["Booongo", "BNG Games", "Hold and Win", "BIGWIN959", "Sun of Egypt", "Dragon Pearls"],
        schema: {
            headline: "BNG (Booongo) Games on BIGWIN959",
            description: "Premium Slot Developer Specialized in Hold and Win Jackpots"
        }
    },
    hero: {
        badge: "Hold and Win Specialists",
        title: "BNG Games on <span class=\"text-brand\">BIGWIN959</span> <br /> <span class=\"text-2xl md:text-3xl text-gray-300 font-bold block mt-4\">Hold and Win & Jackpots</span>",
        subtitle: "Experience legendary Hold and Win mechanics and HD graphics from Booongo (BNG) Gaming.",
        cta: { play: "Play BNG Games Now" }
    },
    intro: {
        title: "About Booongo (BNG)",
        desc: "Booongo, often known as BNG or 3 Oaks Gaming, is a top-tier provider of HD video slots, world-renowned for their 'Hold and Win' mechanic which has become a staple in the gaming industry.",
        foundation: {
            title: "Global Excellence",
            foundedLabel: "Brand Identity:",
            hqLabel: "Market Scope:",
            licensesLabel: "Reliability:",
            specLabel: "Core Expertise:",
            specValue: "Multilayered Hold and Win jackpot systems",
            desc: "BNG focuses on creating high-performance slots that work seamlessly across global markets, with a heavy emphasis on mathematics and player retention."
        },
        philosophy: {
            title: "BNG Gaming Philosophy",
            points: [
                { label: "Math-Centric", value: "Focus on balanced volatility and satisfying payout cycles." },
                { label: "HD Performance", value: "Stunning 2D/3D graphics that remain lightweight." },
                { label: "Jackpot Focus", value: "Bringing the thrill of progressive-style wins to every slot." }
            ]
        },
        features: ["Hold and Win Mechanic", "HD Visuals", "Balanced Volatility", "Multi-Currency Support"]
    },
    innovation: {
        title: "BNG INNOVATION",
        subtitle: "Leading the industry with the most engaging jackpot mechanics in the mobile era.",
        features: {
            title: "Competitive Edge",
            items: [
                { label: "Feature Buy", value: "Skip straight to the hold and win bonuses." },
                { label: "Dynamic Jackpots", value: "Mini, Minor, Major, and Grand jackpot opportunities." }
            ]
        },
        mechanics: {
            title: "BNG Gameplay Flow",
            steps: [
                { title: "Spin for Coins", desc: "Look for special coin or sun symbols during base play." },
                { title: "Trigger Hold & Win", desc: "Collect 6+ symbols to enter the bonus streak mode." },
                { title: "Fill the Board", desc: "Lock symbols in place to win jackpots or 1000x+ rewards." }
            ]
        }
    },
    portfolio: {
        title: "BNG Legendary Portfolio",
        subtitle: "The most popular BNG titles on BIGWIN959, featuring the iconic Sun of Egypt series and more.",
        labels: { rtp: "RTP", maxWin: "Max Win", features: "Key Features" },
        playNow: "Play Now",
        games: [
            {
                title: "Sun of Egypt 3", category: "Egyptian Gold", rtp: "95.6%", maxWin: "10,000x",
                features: ["Royal Hold & Win", "Super Bonus"],
                description: "The third installment of the legendary series, offering massive jackpots and improved graphics.",
                popularity: "★★★★★",
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000523/Sun-of-Egypt-3.png"
            },
            {
                title: "Dragon Pearls", category: "Asian Gold", rtp: "95.0%", maxWin: "2,000x",
                features: ["Pearl Collect", "Jackpot Spins"],
                description: "Experience the magic of the Orient with this pearl-collecting slot that started the revolution.",
                popularity: "★★★★★",
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000494/Dragon-Pearls.png"
            },
            {
                title: "15 Dragon Pearls", category: "Premium Slot", rtp: "95.7%", maxWin: "5,000x",
                features: ["Grand Jackpot", "Retriggers"],
                description: "An upgraded version with more pearls, bigger wins, and a massive Grand Jackpot for lucky players.",
                popularity: "★★★★★",
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000486/15-Dragon-Pearls.png"
            },
            {
                title: "Hit the Gold!", category: "Mining Luck", rtp: "95.9%", maxWin: "2,000x+",
                features: ["Nugget Wins", "Free Games"],
                description: "Dig for gold in this high-energy mining slot with the classic BNG jackpot mechanics.",
                popularity: "★★★★☆",
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000501/Hit-the-Gold.png"
            }
        ]
    },
    tech: {
        title: "BNG Technology",
        subtitle: "High-definition assets optimized for fast loading and secure gameplay.",
        fairness: {
            title: "Audited Fairness",
            points: [
                { label: "RNG", desc: "Independently tested and verified RNG systems." },
                { label: "QUINEL", desc: "Certified by Quinel M. Ltd for global compliance." },
                { label: "iTech", desc: "Platform integrity verified by iTech Labs." }
            ]
        },
        infra: {
            title: "Gaming Infrastructure",
            points: [
                { label: "HD Graphics", desc: "Crystal clear resolution on all mobile screen sizes." },
                { label: "API speed", desc: "Rapid server response for instant betting actions." },
                { label: "Secure", desc: "SSL-encrypted game sessions for player safety." }
            ]
        },
        importance: {
            title: "Why Stability Matters",
            trust: {
                title: "Player Security",
                points: ["Encrypted hash data", "Verified payout logic", "Identity protection"]
            },
            benefits: {
                title: "Premium Experience",
                points: ["Zero lag animation", "Clear win feedback", "Stable bonus rounds"]
            }
        }
    },
    mobile: {
        title: "BNG Mobile Era",
        subtitle: "Booongo games are built specifically for the modern mobile gamer.",
        features: [
            { title: "Responsive UI", desc: "Layouts that adapt perfectly to your phone's screen." },
            { title: "Data Efficient", desc: "Plays smoothly even on limited mobile data plans." },
            { title: "One-Tap Play", desc: "Optimized controls for smartphone ergonomics." }
        ],
        advantages: {
            tech: {
                title: "Technical Assets",
                points: [
                    { label: "Format", value: "HTML5 / JS" },
                    { label: "Load Time", value: "< 5 Seconds" }
                ]
            },
            ux: {
                title: "User Experience",
                points: [
                    { label: "Visuals", value: "OLED Optimized" },
                    { label: "Navigation", value: "Swipe Features" }
                ]
            }
        }
    },
    gettingStarted: {
        title: "Start Your BNG Quest",
        subtitle: "Join BIGWIN959 and chase the Sun of Egypt jackpots.",
        steps: [
            "Log in to your BIGWIN959 profile.",
            "Find the BNG/3 Oaks provider in the menu.",
            "Select Sun of Egypt 3 or Dragon Pearls.",
            "Spin and wait for those shiny coins to drop!"
        ],
        disclaimer: {
            label: "Pro Tip:",
            text: "Focus on games with 'Hold and Win' badges for the best jackpot chances."
        }
    },
    faq: {
        title: "FAQ",
        items: [
            { q: "What is Hold and Win?", a: "It's a bonus feature where certain symbols stay locked while you gain respins." },
            { q: "Are BNG games fair?", a: "Absolutely. BNG is an audited provider used globally." }
        ]
    },
    trust: {
        title: "BNG Trust Factors",
        items: [
            { title: "Global Licensing", desc: "Meets international standards for gambling software." },
            { title: "RNG Verified", desc: "Total randomness in every spin guaranteed." },
            { title: "HD Security", desc: "Sophisticated anti-tamper measures." },
            { title: "Fast Sync", desc: "Real-time balance updates and win payouts." }
        ]
    },
    cta: {
        title: "Chase the Jackpots?",
        button: "Play BNG Now"
    }
};

en.providers.bng = bngContentEn;

// Simple Bengali clone/translation
const bnContent = JSON.parse(JSON.stringify(bngContentEn));
bnContent.hero.title = "BIGWIN959-এ <span class=\"text-brand\">BNG (Booongo)</span> গেমস";
bnContent.cta.button = "BNG গেম খেলুন";

bn.providers.bng = bnContent;

fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
fs.writeFileSync(bnPath, JSON.stringify(bn, null, 2));

console.log('Updated BNG keys with CORRECT NESTING.');
