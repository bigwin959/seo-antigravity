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

ensurePath(en, 'providers.spribe');
ensurePath(bn, 'providers.spribe');

const content = {
    seo: {
        title: "Spribe (SPB) Games on BIGWIN959 | Aviator & Turbo Games Guide (2025)",
        description: "Spribe (SPB) games on BIGWIN959. Complete guide to Aviator, turbo games, crash mechanics, and next-generation social gaming for BD & MM players.",
        keywords: ["Spribe", "Aviator", "Turbo Games", "BIGWIN959", "Crash Game", "Bangladesh", "Myanmar"],
        schema: {
            headline: "Spribe (SPB) Games on BIGWIN959",
            description: "Pioneer of Next-Generation Turbo Games and Crash Mechanics"
        }
    },
    hero: {
        badge: "Next-Generation Gaming Pioneer",
        title: "Spribe (SPB) Games <br /> on <span class=\"text-brand\">BIGWIN959</span>",
        subtitle: "Pioneer of Turbo Games, Crash Mechanics & Social Gaming Innovation (2025)",
        cta: { play: "Play Spribe Games on BIGWIN959" }
    },
    intro: {
        title: "About Spribe: Revolutionizing Online Gaming",
        desc: "Spribe is a pioneering game development studio that has revolutionized the iGaming industry with innovative turbo games and crash mechanics, most famously with their global hit Aviator.",
        foundation: {
            title: "Company Foundation",
            foundedLabel: "Founded:",
            hqLabel: "Headquarters:",
            licensesLabel: "Licenses:",
            specLabel: "Specialization:",
            specValue: "Next-generation turbo games and crash mechanics",
            desc: "Despite being a relatively young company, Spribe has quickly established itself as an industry leader by focusing on innovative game mechanics that appeal to modern players, particularly millennials and Gen Z who seek fast-paced, social gaming experiences."
        },
        philosophy: {
            title: "Innovation Philosophy",
            points: [
                { label: "Next-Gen Focus:", value: "Spribe doesn't create traditional slots. Instead, they pioneer entirely new game categories that blend skill, timing, and social interaction." },
                { label: "Player-Centric Design:", value: "Every game is designed around modern player preferences for quick sessions, transparent mechanics, and social features." },
                { label: "Technology Leadership:", value: "Advanced use of HTML5, real-time multiplayer technology, and provably fair algorithms that players can verify." }
            ]
        }
    },
    aviator: {
        title: "Aviator: The Global Gaming Phenomenon",
        subtitle: "Aviator isn't just a game—it's a cultural phenomenon that has redefined what online gaming can be, combining simplicity with excitement in ways never seen before.",
        revolution: {
            title: "The Aviator Revolution",
            points: [
                { label: "Launch Impact:", value: "Released in 2019, Aviator quickly became one of the most played games globally, generating billions of rounds and creating a new game category." },
                { label: "Cultural Phenomenon:", value: "Aviator has transcended gaming to become a social experience, with players sharing strategies, celebrating wins, and forming communities around the game." },
                { label: "Global Reach:", value: "Available in over 100 countries with localized versions, Aviator has become particularly popular in Asia, Africa, and Latin America." }
            ]
        },
        dominance: {
            title: "Why Aviator Dominates",
            points: [
                { label: "Simplicity:", value: "Anyone can understand the game in seconds—watch the plane fly and cash out before it crashes." },
                { label: "Transparency:", value: "Provably fair algorithm means players can verify every round's fairness using cryptographic methods." },
                { label: "Social Element:", value: "Real-time chat, live statistics, and seeing other players' bets creates a community experience." },
                { label: "Mobile Perfect:", value: "Designed for mobile-first gameplay with touch-optimized controls and portrait mode support." }
            ]
        },
        mechanics: {
            title: "Aviator Game Mechanics Explained",
            steps: [
                { title: "The Flight", desc: "A plane takes off and flies higher, with a multiplier that increases from 1.00x upward. The longer it flies, the higher the multiplier." },
                { title: "Cash Out Decision", desc: "Players must decide when to cash out before the plane crashes. Cash out too late, and you lose your bet." },
                { title: "Multiplier Wins", desc: "If you cash out before the crash, you win your bet multiplied by the cash-out multiplier. Risk vs. reward in pure form." }
            ]
        }
    },
    portfolio: {
        title: "Complete Spribe Game Portfolio",
        subtitle: "Beyond Aviator, Spribe has created an impressive portfolio of innovative games that push the boundaries of online gaming.",
        labels: { rtp: "RTP", maxWin: "Max Win", features: "Key Features" },
        playNow: "Play Now",
        games: [
            {
                title: "Aviator", category: "Crash Game", rtp: "97.00%", maxWin: "∞ (No Limit)",
                features: ["Provably Fair", "Real-time Multiplayer", "Auto Cash-out", "Live Chat"],
                description: "The original and most popular crash game. Watch the plane fly and cash out before it crashes for massive multipliers.",
                popularity: "★★★★★",
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767708313/Spribe-Aviator.png"
            },
            {
                title: "Mines", category: "Turbo Game", rtp: "97.00%", maxWin: "10,000x",
                features: ["Grid Selection", "Risk Control", "Instant Results", "Provably Fair"],
                description: "Navigate a minefield by selecting safe tiles. Each safe tile increases your multiplier, but hit a mine and lose everything.",
                popularity: "★★★★☆",
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767708315/Spribe-Mines.jpg"
            },
            {
                title: "Goal", category: "Sports Turbo", rtp: "97.00%", maxWin: "1,000x",
                features: ["Football Theme", "Penalty Mechanics", "Quick Rounds", "Sports Betting Feel"],
                description: "Football-themed turbo game where you predict penalty outcomes with increasing multipliers for consecutive correct predictions.",
                popularity: "★★★★☆",
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767708314/Spribe-Goal.jpg"
            },
            {
                title: "Dice", category: "Classic Turbo", rtp: "99.00%", maxWin: "990x",
                features: ["Customizable Risk", "Instant Play", "High RTP", "Simple Mechanics"],
                description: "Roll dice and predict outcomes with customizable risk levels. Simple concept with deep strategic possibilities.",
                popularity: "★★★☆☆",
                img: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767708314/Spribe-Dice.jpg"
            }
        ]
    },
    turbo: {
        title: "Turbo Games: The Future of Online Gaming",
        subtitle: "Spribe pioneered the turbo games category, creating fast-paced, skill-based games that appeal to modern players seeking instant gratification and social interaction.",
        what: {
            title: "What Are Turbo Games?",
            points: [
                { label: "Definition:", desc: "Turbo games are fast-paced, skill-influenced games that combine elements of traditional gambling with video game mechanics. They typically feature short rounds (10-30 seconds), transparent algorithms, and social features." },
                { label: "Key Characteristics:", desc: "Instant results, provably fair mechanics, social interaction, mobile-optimized design, and skill-based elements that give players some control over outcomes." },
                { label: "Target Audience:", desc: "Designed for millennials and Gen Z players who prefer quick, engaging experiences over traditional lengthy slot sessions." }
            ]
        },
        benefits: [
            { title: "Speed & Efficiency", desc: "Rounds complete in seconds, not minutes. Perfect for mobile gaming sessions and players with limited time." },
            { title: "Social Gaming", desc: "Real-time chat, leaderboards, and shared experiences create community around individual games." },
            { title: "Provably Fair", desc: "Cryptographic algorithms allow players to verify the fairness of every single game round." }
        ]
    },
    tech: {
        title: "Advanced Technology & Provably Fair Gaming",
        subtitle: "Spribe leads the industry in transparency and fairness, using cutting-edge technology to ensure every game is verifiable and trustworthy.",
        fairness: {
            title: "Provably Fair Algorithm",
            points: [
                { label: "How It Works:", desc: "Before each round, the game generates a server seed (hidden) and accepts a client seed (visible). These seeds, combined with a nonce, create the game outcome using cryptographic hashing." },
                { label: "Player Verification:", desc: "After each round, players receive the server seed and can verify that the outcome was predetermined and not manipulated based on their betting behavior." },
                { label: "Transparency:", desc: "This system ensures that neither the operator nor the player can predict or manipulate game outcomes, creating true fairness." }
            ]
        },
        infra: {
            title: "Technical Infrastructure",
            points: [
                { label: "Real-time Technology:", desc: "Advanced WebSocket connections enable instant communication between players and servers, crucial for crash games where timing is everything." },
                { label: "Scalability:", desc: "Cloud-based infrastructure handles millions of concurrent players without lag or downtime, ensuring smooth gameplay during peak hours." },
                { label: "Security:", desc: "Bank-level encryption protects all data transmission, while advanced fraud detection systems monitor for suspicious activity." }
            ]
        },
        importance: {
            title: "Why Provably Fair Matters for BD/MM Players",
            trust: {
                title: "Trust & Transparency",
                points: ["Verify every game result independently", "No hidden algorithms or manipulation possible", "Mathematical proof of fairness available"]
            },
            benefits: {
                title: "Player Benefits",
                points: ["Confidence in game integrity", "Educational understanding of RNG", "Protection against unfair practices"]
            }
        }
    },
    mobile: {
        title: "Mobile-First Gaming Experience",
        subtitle: "Spribe games are designed mobile-first, recognizing that most players in Bangladesh and Myanmar primarily game on their smartphones.",
        features: [
            { title: "Touch Optimized", desc: "Large, responsive buttons and intuitive gestures make gameplay smooth and natural on touchscreens." },
            { title: "Low Bandwidth", desc: "Optimized for 3G/4G networks common in BD/MM, ensuring smooth gameplay even on slower connections." },
            { title: "Battery Efficient", desc: "Optimized rendering and processing minimize battery drain during extended gaming sessions." }
        ],
        advantages: {
            title: "Mobile Gaming Advantages",
            tech: {
                title: "Technical Features",
                points: [
                    { label: "Portrait Mode:", value: "Games work perfectly in vertical orientation" },
                    { label: "Instant Loading:", value: "Games start in under 3 seconds" },
                    { label: "Offline Capability:", value: "Some features work without internet" },
                    { label: "Auto-Resume:", value: "Games resume exactly where you left off" }
                ]
            },
            ux: {
                title: "User Experience",
                points: [
                    { label: "One-Handed Play:", value: "All controls accessible with thumb" },
                    { label: "Haptic Feedback:", value: "Vibration enhances game experience" },
                    { label: "Notification Support:", value: "Alerts for bonuses and events" },
                    { label: "Social Integration:", value: "Easy sharing and chat features" }
                ]
            }
        }
    },
    gettingStarted: {
        title: "Start Playing Spribe Games",
        subtitle: "Join millions of players worldwide experiencing the next generation of online gaming with Spribe's innovative turbo games.",
        steps: [
            "Visit BIGWIN959 official platform and ensure you're logged into your account",
            "Navigate to 'Turbo Games' or search for 'Spribe' in the games section",
            "Start with Aviator to experience the most popular crash game globally",
            "Learn the basic mechanics: watch, decide, cash out before the crash",
            "Try demo mode first to understand timing and risk management",
            "Explore other Spribe games like Mines, Plinko, and Goal for variety",
            "Join the community chat to learn strategies from experienced players",
            "Use responsible gaming tools to set limits and play safely"
        ],
        disclaimer: { label: "Important:", text: "Spribe games involve skill and timing, but outcomes are still based on RNG. Always play responsibly and within your means." }
    },
    cta: { button: "Play Spribe Games Now" }
};

en.providers.spribe = content;

// Translate keys for Bengali
const bnContent = JSON.parse(JSON.stringify(content));
bnContent.seo.title = "BIGWIN959-এ Spribe (SPB) গেমস | এভিয়েটর এবং টার্বো গেমস গাইড (২০২৫)";
bnContent.seo.description = "BIGWIN959-এ Spribe (SPB) গেমস। এভিয়েটর, টার্বো গেমস, ক্র্যাশ মেকানিক্স এবং বিডি ও এমএম খেলোয়াড়দের জন্য নেক্সট-জেনারেশন সোশ্যাল গেমিংয়ের সম্পূর্ণ গাইড।";
bnContent.seo.keywords = ["Spribe", "এভিয়েটর", "টার্বো গেমস", "BIGWIN959", "ক্র্যাশ গেম", "বাংলাদেশ", "মায়ানমার"];
bnContent.seo.schema.headline = "BIGWIN959-এ Spribe (SPB) গেমস";
bnContent.seo.schema.description = "নেক্সট-জেনারেশন টার্বো গেমস এবং ক্র্যাশ মেকানিক্সের পথপ্রদর্শক";
bnContent.hero.badge = "নেক্সট-জেনারেশন গেমিং পাইওনিয়ার";
bnContent.hero.title = "BIGWIN959-এ <br /> Spribe (SPB) গেমস";
bnContent.hero.subtitle = "টার্বো গেমস, ক্র্যাশ মেকানিক্স এবং সোশ্যাল গেমিং উদ্ভাবনের পথপ্রদর্শক (২০২৫)";
bnContent.hero.cta.play = "BIGWIN959-এ Spribe গেমস খেলুন";
bnContent.intro.title = "Spribe সম্পর্কে: অনলাইন গেমিংয়ে বিপ্লব";
bnContent.intro.desc = "Spribe একটি অগ্রগামী গেম ডেভেলপমেন্ট স্টুডিও যা উদ্ভাবনী টার্বো গেম এবং ক্র্যাশ মেকানিক্সের মাধ্যমে iGaming শিল্পে বিপ্লব ঘটিয়েছে, যা তাদের বিশ্বব্যাপী হিট গেম Aviator-এর জন্য বিখ্যাত।";
bnContent.intro.foundation.title = "কোম্পানির ভিত্তি";
bnContent.intro.foundation.foundedLabel = "প্রতিষ্ঠিত:";
bnContent.intro.foundation.hqLabel = "সদর দপ্তর:";
bnContent.intro.foundation.licensesLabel = "লাইসেন্স:";
bnContent.intro.foundation.specLabel = "বিশেষত্ব:";
bnContent.intro.foundation.specValue = "নেক্সট-জেনারেশন টার্বো গেমস এবং ক্র্যাশ মেকানিক্স";
bnContent.intro.foundation.desc = "তুলনামূলকভাবে নতুন কোম্পানি হওয়া সত্ত্বেও, Spribe উদ্ভাবনী গেম মেকানিক্সের উপর ফোকাস করে দ্রুত শিল্প নেতা হিসেবে নিজেকে প্রতিষ্ঠিত করেছে, যা আধুনিক খেলোয়াড়দের, বিশেষ করে সহস্রাব্দ এবং জেনারেশন জেড-এর কাছে আবেদন করে যারা দ্রুত, সামাজিক গেমিং অভিজ্ঞতা চায়।";
bnContent.intro.philosophy.title = "উদ্ভাবন দর্শন";
bnContent.intro.philosophy.points[0].label = "নেক্সট-জেন ফোকাস:"; bnContent.intro.philosophy.points[0].value = "Spribe ঐতিহ্যবাহী স্লট তৈরি করে না। পরিবর্তে, তারা সম্পূর্ণ নতুন গেম ক্যাটাগরি প্রবর্তন করে যা দক্ষতা, টাইমিং এবং সামাজিক মিথস্ক্রিয়াকে মিশ্রিত করে।";
bnContent.intro.philosophy.points[1].label = "প্লেয়ার-কেন্দ্রিক ডিজাইন:"; bnContent.intro.philosophy.points[1].value = "প্রতিটি গেম আধুনিক প্লেয়ারদের দ্রুত সেশন, স্বচ্ছ মেকানিক্স এবং সামাজিক বৈশিষ্ট্যের পছন্দের উপর ভিত্তি করে ডিজাইন করা হয়।";
bnContent.intro.philosophy.points[2].label = "প্রযুক্তিগত নেতৃত্ব:"; bnContent.intro.philosophy.points[2].value = "HTML5, রিয়েল-টাইম মাল্টিপ্লেয়ার প্রযুক্তি এবং প্রোভেন ফেয়ার অ্যালগরিদমের উন্নত ব্যবহার যা খেলোয়াড়রা যাচাই করতে পারে।";
bnContent.aviator.title = "Aviator: গ্লোবাল গেমিং ফেনোমেনন";
bnContent.aviator.subtitle = "Aviator শুধুমাত্র একটি গেম নয়—এটি একটি সাংস্কৃতিক ঘটনা যা অনলাইন গেমিং কী হতে পারে তা নতুনভাবে সংজ্ঞায়িত করেছে, উত্তেজনা এবং সরলতার সংমিশ্রণ ঘটিয়েছে যা আগে কখনও দেখা যায়নি।";
bnContent.aviator.revolution.title = "Aviator বিপ্লব";
bnContent.aviator.revolution.points[0].label = "লঞ্চ ইমপ্যাক্ট:"; bnContent.aviator.revolution.points[0].value = "২০১৯ সালে প্রকাশিত, Aviator দ্রুত বিশ্বব্যাপী সবচেয়ে বেশি খেলা গেমগুলির মধ্যে একটি হয়ে ওঠে, বিলিয়ন রাউন্ড তৈরি করে এবং একটি নতুন গেম ক্যাটাগরি তৈরি করে।";
bnContent.aviator.revolution.points[1].label = "সাংস্কৃতিক ঘটনা:"; bnContent.aviator.revolution.points[1].value = "Aviator গেমিং ছাড়িয়ে একটি সামাজিক অভিজ্ঞতায় পরিণত হয়েছে, যেখানে খেলোয়াড়রা কৌশল শেয়ার করে, জয় উদযাপন করে এবং গেমটিকে কেন্দ্র করে কমিউনিটি তৈরি করে।";
bnContent.aviator.revolution.points[2].label = "গ্লোবাল রিচ:"; bnContent.aviator.revolution.points[2].value = "১০০টিরও বেশি দেশে স্থানীয় সংস্করণ সহ উপলব্ধ, Aviator এশিয়া, আফ্রিকা এবং ল্যাটিন আমেরিকায় বিশেষভাবে জনপ্রিয় হয়ে উঠেছে।";
bnContent.aviator.dominance.title = "কেন Aviator আধিপত্য বিস্তার করে";
bnContent.aviator.dominance.points[0].label = "সরলতা:"; bnContent.aviator.dominance.points[0].value = "সেকেন্ডের মধ্যে যে কেউ গেমটি বুঝতে পারে—প্লেন উড়তে দেখুন এবং ক্র্যাশ হওয়ার আগেই ক্যাশ আউট করুন।";
bnContent.aviator.dominance.points[1].label = "স্বচ্ছতা:"; bnContent.aviator.dominance.points[1].value = "প্রোভেন ফেয়ার অ্যালগরিদম মানে খেলোয়াড়রা ক্রিপ্টোগ্রাফিক পদ্ধতি ব্যবহার করে প্রতিটি রাউন্ডের ন্যায্যতা যাচাই করতে পারে।";
bnContent.aviator.dominance.points[2].label = "সামাজিক উপাদান:"; bnContent.aviator.dominance.points[2].value = "রিয়েল-টাইম চ্যাট, লাইভ পরিসংখ্যান এবং অন্যান্য খেলোয়াড়দের বাজি দেখা একটি কমিউনিটি অভিজ্ঞতা তৈরি করে।";
bnContent.aviator.dominance.points[3].label = "মোবাইল পারফেক্ট:"; bnContent.aviator.dominance.points[3].value = "টাচ-অপ্টিমাইজড কন্ট্রোল এবং পোর্ট্রেট মোড সাপোর্ট সহ মোবাইল-ফার্স্ট গেমপ্লের জন্য ডিজাইন করা হয়েছে।";
bnContent.aviator.mechanics.title = "Aviator গেম মেকানিক্স ব্যাখ্যা";
bnContent.aviator.mechanics.steps[0].title = "ফ্লাইট"; bnContent.aviator.mechanics.steps[0].desc = "একটি প্লেন উড্ডয়ন করে এবং উঁচুতে ওড়ে, যার মাল্টিপ্লায়ার 1.00x থেকে বাড়তে থাকে। যত বেশিক্ষণ ওড়ে, মাল্টিপ্লায়ার তত বেশি হয়।";
bnContent.aviator.mechanics.steps[1].title = "ক্যাশ আউট সিদ্ধান্ত"; bnContent.aviator.mechanics.steps[1].desc = "খেলোয়াড়দের প্লেন ক্র্যাশ হওয়ার আগেই কখন ক্যাশ আউট করতে হবে তা সিদ্ধান্ত নিতে হবে। খুব দেরিতে ক্যাশ আউট করলে, আপনার বাজি হারাবেন।";
bnContent.aviator.mechanics.steps[2].title = "মাল্টিপ্লায়ার জয়"; bnContent.aviator.mechanics.steps[2].desc = "যদি আপনি ক্র্যাশ হওয়ার আগে ক্যাশ আউট করেন, আপনি ক্যাশ-আউট মাল্টিপ্লায়ার দ্বারা গুণিত আপনার বাজি জিতবেন। ঝুঁকি বনাম পুরস্কারের বিশুদ্ধ রূপ।";
bnContent.portfolio.title = "সম্পূর্ণ Spribe গেম পোর্টফোলিও";
bnContent.portfolio.subtitle = "Aviator-এর বাইরেও, Spribe উদ্ভাবনী গেমগুলির একটি চিত্তাকর্ষক পোর্টফোলিও তৈরি করেছে যা অনলাইন গেমিংয়ের সীমানা ঠেলে দেয়।";
bnContent.portfolio.labels.rtp = "RTP";
bnContent.portfolio.labels.maxWin = "সর্বোচ্চ জয়";
bnContent.portfolio.labels.features = "মূল বৈশিষ্ট্য";
bnContent.portfolio.playNow = "এখনই খেলুন";
bnContent.portfolio.games[0].category = "ক্র্যাশ গেম"; bnContent.portfolio.games[0].description = "সবচেয়ে জনপ্রিয় ক্র্যাশ গেম। প্লেন ওড়া দেখুন এবং বিশাল গুণিতকের জন্য ক্র্যাশ হওয়ার আগে ক্যাশ আউট করুন।";
bnContent.portfolio.games[1].category = "টার্বো গেম"; bnContent.portfolio.games[1].description = "নিরাপদ টাইলস নির্বাচন করে একটি মাইনফিল্ড নেভিগেট করুন। প্রতিটি নিরাপদ টাইল আপনার গুণিতক বাড়ায়, তবে একটি মাইন হিট করলে সব হারাবেন।";
bnContent.portfolio.games[2].category = "স্পোর্টস টার্বো"; bnContent.portfolio.games[2].description = "ফুটবল-থিমযুক্ত টার্বো গেম যেখানে আপনি পেনাল্টির ফলাফল অনুমান করেন, টানা সঠিক অনুমানের জন্য ক্রমবর্ধমান গুণিতক সহ।";
bnContent.portfolio.games[3].category = "ক্লাসিক টার্বো"; bnContent.portfolio.games[3].description = "ডাইস রোল করুন এবং কাস্টমাইজযোগ্য ঝুঁকির স্তরের সাথে ফলাফল অনুমান করুন। গভীর কৌশলগত সম্ভাবনা সহ সহজ ধারণা।";
bnContent.turbo.title = "টার্বো গেমস: অনলাইন গেমিংয়ের ভবিষ্যৎ";
bnContent.turbo.subtitle = "Spribe টার্বো গেমস ক্যাটাগরি প্রবর্তন করেছে, দ্রুত গতির, দক্ষতা-ভিত্তিক গেম তৈরি করেছে যা আধুনিক খেলোয়াড়দের কাছে আবেদন করে যারা তাৎক্ষণিক সন্তুষ্টি এবং সামাজিক মিথস্ক্রিয়া চায়।";
bnContent.turbo.what.title = "টার্বো গেমস কি?";
bnContent.turbo.what.points[0].label = "সংজ্ঞা:"; bnContent.turbo.what.points[0].desc = "টার্বো গেমস হল দ্রুত-গতির, দক্ষতা-প্রভাবিত গেম যা ভিডিও গেম মেকানিক্সের সাথে ঐতিহ্যবাহী জুয়ার উপাদানগুলিকে একত্রিত করে। এগুলিতে সাধারণত ছোট রাউন্ড (১০-৩০ সেকেন্ড), স্বচ্ছ অ্যালগরিদম এবং সামাজিক বৈশিষ্ট্য থাকে।";
bnContent.turbo.what.points[1].label = "মূল বৈশিষ্ট্য:"; bnContent.turbo.what.points[1].desc = "তাৎক্ষণিক ফলাফল, প্রোভেন ফেয়ার মেকানিক্স, সামাজিক মিথস্ক্রিয়া, মোবাইল-অপ্টিমাইজড ডিজাইন এবং দক্ষতা-ভিত্তিক উপাদান যা খেলোয়াড়দের ফলাফলের উপর কিছুটা নিয়ন্ত্রণ দেয়।";
bnContent.turbo.what.points[2].label = "লক্ষ্য শ্রোতা:"; bnContent.turbo.what.points[2].desc = "সহস্রাব্দ এবং জেনারেশন জেড খেলোয়াড়দের জন্য ডিজাইন করা হয়েছে যারা ঐতিহ্যগত দীর্ঘ স্লট সেশনের চেয়ে দ্রুত, আকর্ষণীয় অভিজ্ঞতা পছন্দ করে।";
bnContent.turbo.benefits[0].title = "গতি ও দক্ষতা"; bnContent.turbo.benefits[0].desc = "মিনিট নয়, সেকেন্ডে রাউন্ড শেষ হয়। মোবাইল গেমিং সেশন এবং সীমিত সময়ের খেলোয়াড়দের জন্য উপযুক্ত।";
bnContent.turbo.benefits[1].title = "সামাজিক গেমিং"; bnContent.turbo.benefits[1].desc = "রিয়েল-টাইম চ্যাট, লিডারবোর্ড এবং শেয়ার করা অভিজ্ঞতা গেমটিকে ঘিরে কমিউনিটি তৈরি করে।";
bnContent.turbo.benefits[2].title = "প্রোভেন ফেয়ার"; bnContent.turbo.benefits[2].desc = "ক্রিপ্টোগ্রাফিক অ্যালগরিদম খেলোয়াড়দের প্রতিটি গেম রাউন্ডের ন্যায্যতা যাচাই করার অনুমতি দেয়।";
bnContent.tech.title = "উন্নত প্রযুক্তি এবং প্রোভেন ফেয়ার গেমিং";
bnContent.tech.subtitle = "Spribe স্বচ্ছতা এবং ন্যায্যতায় শিল্পের নেতৃত্ব দেয়, প্রতিটি গেম যাচাইযোগ্য এবং বিশ্বস্ত তা নিশ্চিত করতে অত্যাধুনিক প্রযুক্তি ব্যবহার করে।";
bnContent.tech.fairness.title = "প্রোভেন ফেয়ার অ্যালগরিদম";
bnContent.tech.fairness.points[0].label = "কিভাবে কাজ করে:"; bnContent.tech.fairness.points[0].desc = "প্রতিটি রাউন্ডের আগে, গেমটি একটি সার্ভার সিড (লুকানো) তৈরি করে এবং একটি ক্লায়েন্ট সিড (দৃশ্যমান) গ্রহণ করে। এই সিডগুলি, একটি ননসের সাথে মিলিত হয়ে, ক্রিপ্টোগ্রাফিক হ্যাশিং ব্যবহার করে গেমের ফলাফল তৈরি করে।";
bnContent.tech.fairness.points[1].label = "প্লেয়ার যাচাইকরণ:"; bnContent.tech.fairness.points[1].desc = "প্রতিটি রাউন্ডের পরে, খেলোয়াড়রা সার্ভার সিড পায় এবং যাচাই করতে পারে যে ফলাফলটি পূর্বনির্ধারিত ছিল এবং তাদের বেটিং আচরণের উপর ভিত্তি করে হেরফের করা হয়নি।";
bnContent.tech.fairness.points[2].label = "স্বচ্ছতা:"; bnContent.tech.fairness.points[2].desc = "এই সিস্টেম নিশ্চিত করে যে অপারেটর বা খেলোয়াড় কেউই গেমের ফলাফলের পূর্বাভাস বা হেরফের করতে পারবে না, যা প্রকৃত ন্যায্যতা তৈরি করে।";
bnContent.tech.infra.title = "প্রযুক্তিগত অবকাঠামো";
bnContent.tech.infra.points[0].label = "রিয়েল-টাইম প্রযুক্তি:"; bnContent.tech.infra.points[0].desc = "উন্নত ওয়েবসকেট সংযোগ খেলোয়াড় এবং সার্ভারের মধ্যে তাৎক্ষণিক যোগাযোগ সক্ষম করে, যা ক্র্যাশ গেমগুলির জন্য গুরুত্বপূর্ণ যেখানে টাইমিং সবকিছু।";
bnContent.tech.infra.points[1].label = "স্কেলেবিলিটি:"; bnContent.tech.infra.points[1].desc = "ক্লাউড-ভিত্তিক অবকাঠামো ল্যাগ বা ডাউনটাইম ছাড়াই লক্ষ লক্ষ সমসাময়িক খেলোয়াড়কে পরিচালনা করে, পিক আওয়ারের সময় মসৃণ গেমপ্লে নিশ্চিত করে।";
bnContent.tech.infra.points[2].label = "নিরাপত্তা:"; bnContent.tech.infra.points[2].desc = "ব্যাংক-স্তরের এনক্রিপশন সমস্ত ডেটা ট্রান্সমিশন রক্ষা করে, যখন উন্নত জালিয়াতি সনাক্তকরণ সিস্টেম সন্দেহজনক কার্যকলাপের জন্য নজর রাখে।";
bnContent.tech.importance.title = "কেন প্রোভেন ফেয়ার বিডি/এমএম খেলোয়াড়দের জন্য গুরুত্বপূর্ণ";
bnContent.tech.importance.trust.title = "বিশ্বাস ও স্বচ্ছতা";
bnContent.tech.importance.trust.points = ["প্রতিটি গেমের ফলাফল স্বাধীনভাবে যাচাই করুন", "কোন লুকানো অ্যালগরিদম বা হেরফের সম্ভব নয়", "ন্যায্যতার গাণিতিক প্রমাণ উপলব্ধ"];
bnContent.tech.importance.benefits.title = "খেলোয়াড় সুবিধা";
bnContent.tech.importance.benefits.points = ["গেমের সততায় আস্থা", "RNG-এর শিক্ষাগত বোঝাপড়া", "অন্যায্য অনুশীলনের বিরুদ্ধে সুরক্ষা"];
bnContent.mobile.title = "মোবাইল-ফার্স্ট গেমিং অভিজ্ঞতা";
bnContent.mobile.subtitle = "Spribe গেমগুলি মোবাইল-ফার্স্ট ডিজাইন করা হয়েছে, এটি স্বীকার করে যে বাংলাদেশ এবং মায়ানমারের বেশিরভাগ খেলোয়াড় মূলত তাদের স্মার্টফোনে গেম খেলে।";
bnContent.mobile.features[0].title = "টাচ অপ্টিমাইজড"; bnContent.mobile.features[0].desc = "বড়, রেসপন্সিভ বোতাম এবং স্বজ্ঞাত জেশ্চার টাচস্ক্রিনে গেমপ্লেকে মসৃণ এবং স্বাভাবিক করে তোলে।";
bnContent.mobile.features[1].title = "লো ব্যান্ডউইথ"; bnContent.mobile.features[1].desc = "বিডি/এমএম-এ সাধারণ 3G/4G নেটওয়ার্কের জন্য অপ্টিমাইজ করা, ধীর সংযোগেও মসৃণ গেমপ্লে নিশ্চিত করে।";
bnContent.mobile.features[2].title = "ব্যাটারি সাশ্রয়ী"; bnContent.mobile.features[2].desc = "অপ্টিমাইজ করা রেন্ডারিং এবং প্রসেসিং দীর্ঘ গেমিং সেশনের সময় ব্যাটারি খরচ কমিয়ে দেয়।";
bnContent.mobile.advantages.title = "মোবাইল গেমিং সুবিধা";
bnContent.mobile.advantages.tech.title = "প্রযুক্তিগত বৈশিষ্ট্য";
bnContent.mobile.advantages.tech.points[0].label = "পোর্ট্রেট মোড:"; bnContent.mobile.advantages.tech.points[0].value = "গেমগুলি উল্লম্ব ওরিয়েন্টেশনে নিখুঁতভাবে কাজ করে";
bnContent.mobile.advantages.tech.points[1].label = "তাত্ক্ষণিক লোডিং:"; bnContent.mobile.advantages.tech.points[1].value = "৩ সেকেন্ডের কম সময়ে গেম শুরু হয়";
bnContent.mobile.advantages.tech.points[2].label = "অফলাইন ক্ষমতা:"; bnContent.mobile.advantages.tech.points[2].value = "কিছু ফিচার ইন্টারনেট ছাড়াই কাজ করে";
bnContent.mobile.advantages.tech.points[3].label = "অটো-রিজিউম:"; bnContent.mobile.advantages.tech.points[3].value = "গেমগুলি ঠিক সেখান থেকেই শুরু হয় যেখানে আপনি ছেড়েছিলেন";
bnContent.mobile.advantages.ux.title = "ব্যবহারকারীর অভিজ্ঞতা";
bnContent.mobile.advantages.ux.points[0].label = "একহাতে খেলা:"; bnContent.mobile.advantages.ux.points[0].value = "সমস্ত কন্ট্রোল থাম্ব দিয়ে অ্যাক্সেসযোগ্য";
bnContent.mobile.advantages.ux.points[1].label = "হ্যাপটিক ফিডব্যাক:"; bnContent.mobile.advantages.ux.points[1].value = "ভাইব্রেশন গেমের অভিজ্ঞতা বাড়ায়";
bnContent.mobile.advantages.ux.points[2].label = "নোটিফিকেশন সাপোর্ট:"; bnContent.mobile.advantages.ux.points[2].value = "বোনাস এবং ইভেন্টের জন্য সতর্কতা";
bnContent.mobile.advantages.ux.points[3].label = "সোশ্যাল ইন্টিগ্রেশন:"; bnContent.mobile.advantages.ux.points[3].value = "সহজ শেয়ারিং এবং চ্যাট ফিচার";
bnContent.gettingStarted.title = "Spribe গেমস খেলা শুরু করুন";
bnContent.gettingStarted.subtitle = "বিশ্বব্যাপী লক্ষ লক্ষ খেলোয়াড়দের সাথে যোগ দিন যারা Spribe-এর উদ্ভাবনী টার্বো গেমগুলির সাথে অনলাইন গেমিংয়ের পরবর্তী প্রজন্মের অভিজ্ঞতা নিচ্ছেন।";
bnContent.gettingStarted.steps = [
    "BIGWIN959 অফিসিয়াল প্ল্যাটফর্ম ভিজিট করুন এবং আপনার অ্যাকাউন্টে লগ ইন করা নিশ্চিত করুন",
    "'টার্বো গেমস'-এ যান বা গেমস বিভাগে 'Spribe' অনুসন্ধান করুন",
    "বিশ্বব্যাপী সবচেয়ে জনপ্রিয় ক্র্যাশ গেমের অভিজ্ঞতা নিতে Aviator দিয়ে শুরু করুন",
    "মৌলিক মেকানিক্স শিখুন: দেখুন, সিদ্ধান্ত নিন, ক্র্যাশ হওয়ার আগে ক্যাশ আউট করুন",
    "টাইমিং এবং ঝুঁকি ব্যবস্থাপনা বুঝতে প্রথমে ডেমো মোড চেষ্টা করুন",
    "বৈচিত্র্যের জন্য অন্যান্য Spribe গেম যেমন Mines, Plinko এবং Goal অন্বেষণ করুন",
    "অভিজ্ঞ খেলোয়াড়দের কাছ থেকে কৌশল শিখতে কমিউনিটি চ্যাটে যোগ দিন",
    "সীমা নির্ধারণ এবং নিরাপদে খেলতে দায়িত্বশীল গেমিং টুল ব্যবহার করুন"
];
bnContent.gettingStarted.disclaimer.label = "গুরুত্বপূর্ণ:";
bnContent.gettingStarted.disclaimer.text = "Spribe গেমগুলিতে দক্ষতা এবং টাইমিং জড়িত, তবে ফলাফলগুলি এখনও RNG-এর উপর ভিত্তি করে। সর্বদা দায়িত্বের সাথে এবং আপনার সাধ্যের মধ্যে খেলুন।";
bnContent.cta.button = "এখনই Spribe গেমস খেলুন";

bn.providers.spribe = bnContent;

// Breadcrumbs
ensurePath(en, 'breadcrumbs');
en.breadcrumbs.spribe = "Spribe (SPB)";
ensurePath(bn, 'breadcrumbs');
bn.breadcrumbs.spribe = "Spribe (SPB)";

fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
fs.writeFileSync(bnPath, JSON.stringify(bn, null, 2));

console.log('Updated Spribe keys.');
