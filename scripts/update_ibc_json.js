
import fs from 'fs';

const enPath = './public/locales/en/translation.json';
const bnPath = './public/locales/bn/translation.json';

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const bn = JSON.parse(fs.readFileSync(bnPath, 'utf8'));

// Define IBC Sports English Content
const ibcSportsEN = {
    "seo": {
        "title": "IBC Sports – Leading Asian Sportsbook | Live Betting & Asian Handicap",
        "description": "Experience premium sports betting with IBC Sports on BIGWIN959. Comprehensive coverage, competitive odds, live betting, Asian handicap, and expert market depth.",
        "schema": {
            "name": "IBC Sports on BIGWIN959",
            "description": "Leading Asian sportsbook platform with comprehensive sports coverage, competitive odds, live betting, and Asian handicap expertise."
        }
    },
    "hero": {
        "badge": "Leading Asian Sportsbook Platform",
        "title": "IBC <1>Sports</1>",
        "subtitle": "Premium Asian sportsbook offering comprehensive sports coverage, competitive odds, live betting, and expert Asian handicap markets. Your trusted partner for professional sports betting.",
        "cta": {
            "start": "Start Betting Now",
            "guide": "Betting Guide"
        },
        "stats": [
            { "label": "Sports Coverage", "value": "50+ Sports" },
            { "label": "Live Betting", "value": "Real-Time Odds" },
            { "label": "Asian Handicap", "value": "Expert Markets" },
            { "label": "Competitive Odds", "value": "Best Value" }
        ]
    },
    "intro": {
        "title": "About IBC Sports",
        "p1": "IBC Sports is one of Asia's most respected and established sportsbook platforms, renowned for its comprehensive sports coverage, competitive odds, and deep understanding of Asian betting markets. With years of experience serving Asian bettors, IBC Sports has built a reputation for reliability, professionalism, and exceptional betting experiences.",
        "p2": "The platform specializes in Asian handicap betting, a betting format that originated in Asia and has become globally popular for its ability to level the playing field between mismatched teams. IBC Sports offers some of the most competitive Asian handicap odds in the industry, along with extensive coverage of over/under markets, correct scores, and countless other betting options across 50+ sports.",
        "p3": "What sets IBC Sports apart is its focus on the Asian market while maintaining international standards. The platform understands the betting preferences of Asian players, offering cricket-heavy coverage during IPL season, comprehensive football markets for Premier League and Champions League, and extensive Asian sports coverage including badminton, table tennis, and esports.",
        "p4": "IBC Sports combines cutting-edge technology with traditional sportsbook expertise. The platform features lightning-fast odds updates, seamless live betting, mobile optimization, and a user-friendly interface that makes betting simple for beginners while offering the depth and sophistication that professional bettors demand. Whether you're betting on cricket, football, tennis, or any of the 50+ sports available, IBC Sports delivers a premium betting experience."
    },
    "features": {
        "title": "Premium Sportsbook Features",
        "subtitle": "Professional-grade features designed for serious sports bettors",
        "handicap": {
            "title": "Asian Handicap Expertise",
            "desc1": "IBC Sports is a leader in Asian handicap betting, offering the most competitive odds and deepest markets in this popular betting format. Asian handicap eliminates the draw option by giving one team a virtual head start, creating more balanced odds and better value for bettors. This format is particularly popular for football betting where draws are common.",
            "desc2": "The platform offers multiple Asian handicap lines for every match, including quarter-ball and half-ball handicaps that provide more betting options and better odds. For example, in a football match, you might see handicaps like -0.25, -0.5, -0.75, -1.0, and more, each offering different risk-reward profiles. IBC Sports' expertise in this area means you get the best possible odds and most accurate lines.",
            "example": {
                "title": "Asian Handicap Example:",
                "teamA": "Team A (-0.5)",
                "teamB": "Team B (+0.5)",
                "note": "Team A must win by at least 1 goal for the bet to win"
            }
        },
        "live": {
            "title": "Advanced Live Betting",
            "desc1": "Experience the thrill of live betting with IBC Sports' advanced in-play platform. Bet on matches as they unfold with real-time odds that update instantly based on match events. Whether it's a cricket wicket, football goal, tennis break point, or basketball three-pointer, odds adjust immediately to reflect the current match situation.",
            "desc2": "The live betting interface is designed for speed and efficiency. Place bets with just a few clicks, monitor multiple matches simultaneously, and take advantage of momentum shifts and value opportunities as they appear. IBC Sports offers extensive live betting markets including next goal, next wicket, set winners, quarter winners, and hundreds of other in-play options.",
            "desc3": "Live statistics and match trackers are integrated directly into the betting interface, giving you all the information you need to make informed decisions. See possession stats, shot counts, player performance data, and more without leaving the betting page. This comprehensive approach to live betting makes IBC Sports the choice of serious in-play bettors."
        },
        "odds": {
            "title": "Competitive Odds",
            "desc1": "IBC Sports consistently offers some of the most competitive odds in the Asian market. The platform's low margin approach means more value for bettors, with odds that are typically 2-5% better than average sportsbooks. Over hundreds of bets, this difference can significantly impact your profitability and long-term returns.",
            "desc2": "The odds compilation team at IBC Sports consists of experienced traders who understand Asian betting markets intimately. They price markets accurately while maintaining competitive margins, ensuring you get fair odds that reflect true probabilities. For popular events like IPL cricket or Premier League football, IBC Sports often matches or beats the best odds available anywhere.",
            "desc3": "Early odds are posted well in advance of events, allowing you to secure value before the market moves. The platform also offers enhanced odds promotions on selected events, giving you even better value on popular matches. Whether you're betting pre-match or live, IBC Sports ensures you're getting excellent odds on every bet."
        },
        "coverage": {
            "title": "50+ Sports Coverage",
            "desc1": "IBC Sports covers over 50 different sports from around the world, ensuring you can bet on virtually any sporting event. From mainstream sports like football, cricket, tennis, and basketball to niche sports like darts, snooker, handball, and esports, the platform offers comprehensive coverage with deep markets on every event.",
            "desc2": "Cricket coverage is particularly extensive, with markets on every IPL match, international series, T20 leagues, Test matches, and ODIs. Football coverage spans all major leagues including Premier League, La Liga, Serie A, Bundesliga, Champions League, and international tournaments. Tennis markets cover every Grand Slam, ATP, and WTA event with extensive betting options.",
            "desc3": "Beyond the major sports, IBC Sports offers excellent coverage of Asian sports including badminton, table tennis, kabaddi, and Asian football leagues. Esports betting is also available with markets on Dota 2, CS:GO, League of Legends, and other popular titles. Whatever your sporting interest, IBC Sports has you covered."
        }
    },
    "sports": {
        "title": "Comprehensive Sports Coverage",
        "subtitle": "Bet on all major sports with extensive markets and competitive odds",
        "items": [
            {
                "title": "Cricket Betting",
                "desc": "Comprehensive cricket coverage including IPL, international matches, T20 leagues, Test cricket, and ODIs. Extensive markets: match winner, top batsman, total runs, innings runs, method of dismissal, player performance, and hundreds more. Live betting on every ball with instant odds updates.",
                "tags": ["IPL", "T20 World Cup", "Test Series", "ODI", "County Cricket", "BBL"]
            },
            {
                "title": "Football Betting",
                "desc": "Complete football coverage from Premier League to local leagues. Asian handicap, over/under, correct score, both teams to score, first goal, anytime goalscorer, and more. Live betting with real-time odds on every match. Coverage of all major tournaments and leagues worldwide.",
                "tags": ["Premier League", "Champions League", "La Liga", "World Cup", "Euro", "Asian Leagues"]
            },
            {
                "title": "Tennis Betting",
                "desc": "All Grand Slams, ATP, WTA, and challenger events covered. Match winner, set betting, game handicaps, total games, correct score, and more. Excellent live betting with odds updating after every point. Deep markets on all major tournaments with competitive odds throughout.",
                "tags": ["Wimbledon", "US Open", "French Open", "Australian Open", "ATP", "WTA"]
            },
            {
                "title": "Basketball Betting",
                "desc": "NBA, EuroLeague, FIBA, and international basketball. Match winner, handicaps, total points, quarter winners, half winners, player props, and more. Fast-paced live betting with odds updating constantly. Extensive coverage of all major leagues and tournaments.",
                "tags": ["NBA", "EuroLeague", "FIBA", "NCAA", "Olympics", "Asian Leagues"]
            },
            {
                "title": "Esports Betting",
                "desc": "Comprehensive esports coverage including Dota 2, CS:GO, League of Legends, Valorant, and more. Match winner, map winner, handicaps, total maps, first blood, and specialized esports markets. Live betting on all major tournaments with competitive odds.",
                "tags": ["Dota 2", "CS:GO", "LoL", "Valorant", "Mobile Legends", "PUBG"]
            },
            {
                "title": "More Sports",
                "desc": "Badminton, table tennis, volleyball, handball, rugby, golf, boxing, MMA, baseball, ice hockey, American football, and 40+ more sports. Special events, Olympics, Asian Games, and major championships. If it's a sport, we cover it.",
                "tags": ["Badminton", "Table Tennis", "Rugby", "Golf", "Boxing", "MMA"]
            }
        ]
    },
    "markets": {
        "title": "Extensive Betting Markets",
        "subtitle": "Hundreds of betting options on every event",
        "items": [
            { "title": "Match Markets", "markets": ["Match Winner", "Asian Handicap", "Over/Under", "Correct Score", "Both Teams to Score", "Double Chance"] },
            { "title": "Player Markets", "markets": ["Top Batsman", "Top Bowler", "Anytime Goalscorer", "First Goalscorer", "Player Props", "Performance Bets"] },
            { "title": "Special Markets", "markets": ["First Half", "Second Half", "Innings Runs", "Method of Dismissal", "Booking Points", "Corner Kicks"] },
            { "title": "Live Markets", "markets": ["Next Goal", "Next Wicket", "Set Winner", "Quarter Winner", "Live Handicap", "Live Over/Under"] }
        ]
    },
    "platform": {
        "title": "Platform Features & Technology",
        "subtitle": "Advanced features for the modern sports bettor",
        "items": [
            { "title": "Mobile Optimized", "desc": "Fully responsive mobile platform and native apps for iOS and Android. Bet anywhere, anytime with the same features as desktop." },
            { "title": "Lightning Fast", "desc": "Instant bet placement, real-time odds updates, and lightning-fast page loads. No lag, no delays, just smooth betting." },
            { "title": "Live Statistics", "desc": "Comprehensive live stats, match trackers, and data visualization integrated into the betting interface for informed decisions." },
            { "title": "Early Markets", "desc": "Odds posted days or weeks in advance for major events. Lock in value early before the market moves." },
            { "title": "Cash Out", "desc": "Cash out your bets early to secure profit or minimize losses. Available on pre-match and live bets across all sports." },
            { "title": "Multi-Bet Builder", "desc": "Create custom multi-bets combining different markets from the same match or multiple matches for enhanced odds." },
            { "title": "Secure & Licensed", "desc": "Fully licensed and regulated with bank-level security. Your funds and data are protected with 256-bit SSL encryption." },
            { "title": "Live Streaming", "desc": "Watch selected events live while betting. Stream matches directly on the platform for the ultimate betting experience." },
            { "title": "Bet History", "desc": "Detailed bet history and account statements. Track your performance, analyze your betting patterns, and improve your strategy." }
        ]
    },
    "whyChoose": {
        "title": "Why Choose IBC Sports?",
        "subtitle": "The advantages that make IBC Sports the preferred choice for Asian bettors",
        "items1": [
            { "title": "Asian Market Expertise", "desc": "Deep understanding of Asian betting preferences with specialized markets, Asian handicap expertise, and coverage of Asian sports and leagues." },
            { "title": "Competitive Odds", "desc": "Consistently competitive odds across all sports with low margins. Better odds mean better value and higher potential returns on your bets." },
            { "title": "Extensive Live Betting", "desc": "Thousands of live betting markets daily with real-time odds updates. Bet on matches as they unfold with instant bet placement." },
            { "title": "Professional Service", "desc": "Years of experience serving Asian bettors with professional customer service, fast payouts, and reliable platform performance." }
        ],
        "items2": [
            { "title": "50+ Sports Coverage", "desc": "Comprehensive coverage of all major sports plus niche sports and esports. Whatever you want to bet on, IBC Sports has it." },
            { "title": "Multiple Bet Types", "desc": "Hundreds of betting markets per event including Asian handicap, over/under, correct score, player props, and specialized markets." },
            { "title": "Mobile Excellence", "desc": "Fully optimized mobile platform and native apps. Bet on the go with the same features and speed as desktop." },
            { "title": "Trusted & Reliable", "desc": "Established reputation in the Asian market with years of reliable service, secure transactions, and fair betting practices." }
        ]
    },
    "tips": {
        "title": "Betting Tips & Strategies",
        "subtitle": "Expert tips to maximize your betting success on IBC Sports",
        "handicap": {
            "title": "Asian Handicap Strategy",
            "desc1": "Asian handicap betting removes the draw option and provides more balanced odds. When betting on favorites, consider smaller handicaps (-0.5, -0.75) for safer bets. For underdogs, positive handicaps (+0.5, +1.0) provide a cushion even if they lose by a small margin.",
            "desc2": "Quarter-ball handicaps (-0.25, -0.75) split your stake between two handicaps, reducing risk. For example, -0.75 splits between -0.5 and -1.0, giving you partial returns if the favorite wins by exactly one goal.",
            "example": {
                "title": "Example Strategy:",
                "items": ["Strong favorite: Use -1.0 or -1.5 for better odds", "Close match: Use -0.25 or +0.25 for safety", "Underdog value: Use +0.5 or +1.0 for cushion"]
            }
        },
        "live": {
            "title": "Live Betting Strategy",
            "desc1": "Live betting offers unique opportunities as odds fluctuate based on match events. Watch for momentum shifts - a team dominating possession or creating chances often sees their odds shorten. Bet before the market fully adjusts to these changes.",
            "desc2": "In cricket, wickets dramatically change odds. If a strong batting team loses early wickets, their odds lengthen significantly. If you believe they'll recover, this presents value. Similarly, in football, odds shift after goals - sometimes overreacting to single events.",
            "example": {
                "title": "Live Betting Tips:",
                "items": ["Watch the match, don't just follow odds", "Look for overreactions to single events", "Use cash-out to secure profits early"]
            }
        },
        "value": {
            "title": "Value Betting",
            "desc1": "Value betting means finding odds that are higher than the true probability of an outcome. Compare IBC Sports odds with other bookmakers and your own assessment. If you believe a team has a 60% chance of winning but the odds imply only 50%, that's value.",
            "desc2": "Focus on sports and leagues you know well. Your knowledge edge is most valuable in markets where you understand team form, player injuries, tactical matchups, and other factors that affect outcomes. Specialize rather than betting on everything.",
            "example": {
                "title": "Finding Value:",
                "items": ["Compare odds across multiple bookmakers", "Bet early before odds adjust to public money", "Focus on your areas of expertise"]
            }
        },
        "bankroll": {
            "title": "Bankroll Management",
            "desc1": "Never bet more than 1-5% of your total bankroll on a single bet. This protects you from losing streaks and ensures you can continue betting even after losses. Professional bettors typically use 1-2% stakes for most bets, increasing to 3-5% only for high-confidence plays.",
            "desc2": "Keep detailed records of all bets including stake, odds, outcome, and reasoning. This helps you identify which bet types and sports are most profitable for you. Adjust your strategy based on data, not emotions or recent results.",
            "example": {
                "title": "Bankroll Rules:",
                "items": ["Set a dedicated betting bankroll", "Use 1-2% stakes for standard bets", "Track all bets and analyze results"]
            }
        }
    },
    "gettingStarted": {
        "title": "Getting Started with IBC Sports",
        "subtitle": "Start your sports betting journey in just a few simple steps",
        "steps": [
            { "title": "Create Account", "desc": "Sign up on BIGWIN959 and access IBC Sports through the sports betting section. Quick registration process." },
            { "title": "Make Deposit", "desc": "Fund your account using bKash, Nagad, bank transfer, or other available payment methods. Instant deposits." },
            { "title": "Choose Sport", "desc": "Browse 50+ sports and thousands of markets. Select your sport, league, and match to view available bets." },
            { "title": "Place Bets", "desc": "Click odds to add to bet slip, enter stake, and confirm. Track your bets in real-time and cash out anytime." }
        ],
        "newToBetting": {
            "title": "New to Sports Betting?",
            "items": [
                { "title": "Start Small", "desc": "Begin with small stakes while learning. Use 1% of bankroll per bet until comfortable." },
                { "title": "Learn Markets", "desc": "Start with simple match winner bets before exploring Asian handicap and other markets." },
                { "title": "Use Guides", "desc": "Read our betting guides and watch tutorials to understand different bet types and strategies." }
            ]
        }
    },
    "mobile": {
        "title": "Bet Anywhere with Mobile App",
        "p1": "IBC Sports mobile app brings the full sportsbook experience to your smartphone. Place bets, monitor live matches, check odds, and manage your account from anywhere. The app is optimized for speed with instant bet placement, push notifications for bet settlements, and seamless navigation.",
        "p2": "Available for both iOS and Android devices, the mobile app features the same extensive sports coverage, competitive odds, and live betting options as the desktop platform. The interface is designed specifically for mobile with large buttons, easy navigation, and quick access to your favorite sports and markets.",
        "features": ["Native iOS & Android apps", "Instant bet placement", "Live betting on the go", "Push notifications", "Secure & encrypted", "Works on 3G/4G/5G/WiFi"]
    },
    "finalCta": {
        "title": "Ready to Start Betting?",
        "subtitle": "Join thousands of bettors who trust IBC Sports for competitive odds, extensive markets, and professional service. Start your winning journey today.",
        "start": "Start Betting Now",
        "guide": "Betting Guide",
        "cricket": "Cricket Guide",
        "badges": ["50+ Sports", "Competitive Odds", "Live Betting", "Asian Handicap"]
    }
};

// Define IBC Sports Bengali Content
const ibcSportsBN = {
    "seo": {
        "title": "IBC Sports - শীর্ষস্থানীয় এশিয়ান স্পোর্টসবুক | লাইভ বেটিং এবং এশিয়ান হ্যান্ডিক্যাপ",
        "description": "BIGWIN959-এ IBC Sports-এর সাথে প্রিমিয়াম স্পোর্টস বেটিংয়ের অভিজ্ঞতা নিন। বিস্তৃত কভারেজ, প্রতিযোগিতামূলক অডস, লাইভ বেটিং, এশিয়ান হ্যান্ডিক্যাপ এবং বিশেষজ্ঞ মার্কেট ডেপথ।",
        "schema": {
            "name": "BIGWIN959-এ IBC Sports",
            "description": "শীর্ষস্থানীয় এশিয়ান স্পোর্টসবুক প্ল্যাটফর্ম যা বিস্তৃত স্পোর্টস কভারেজ, প্রতিযোগিতামূলক অডস, লাইভ বেটিং এবং এশিয়ান হ্যান্ডিক্যাপ দক্ষতা প্রদান করে।"
        }
    },
    "hero": {
        "badge": "শীর্ষস্থানীয় এশিয়ান স্পোর্টসবুক প্ল্যাটফর্ম",
        "title": "IBC <1>Sports</1>",
        "subtitle": "প্রিমিয়াম এশিয়ান স্পোর্টসবুক যা বিস্তৃত স্পোর্টস কভারেজ, প্রতিযোগিতামূলক অডস, লাইভ বেটিং এবং বিশেষজ্ঞ এশিয়ান হ্যান্ডিক্যাপ মার্কেট অফার করে। প্রফেশনাল স্পোর্টস বেটিংয়ের জন্য আপনার বিশ্বস্ত সঙ্গী।",
        "cta": {
            "start": "এখনই বেটিং শুরু করুন",
            "guide": "বেটিং গাইড"
        },
        "stats": [
            { "label": "স্পোর্টস কভারেজ", "value": "৫০+ স্পোর্টস" },
            { "label": "লাইভ বেটিং", "value": "রিয়েল-টাইম অডস" },
            { "label": "এশিয়ান হ্যান্ডিক্যাপ", "value": "এক্সপার্ট মার্কেট" },
            { "label": "প্রতিযোগিতামূলক অডস", "value": "সেরা ভ্যালু" }
        ]
    },
    "intro": {
        "title": "IBC Sports সম্পর্কে",
        "p1": "IBC Sports এশিয়ার অন্যতম সম্মানিত এবং প্রতিষ্ঠিত স্পোর্টসবুক প্ল্যাটফর্ম, যা তার বিস্তৃত স্পোর্টস কভারেজ, প্রতিযোগিতামূলক অডস এবং এশিয়ান বেটিং মার্কেটের গভীর বোঝাপড়ার জন্য বিখ্যাত। এশিয়ান বেটরদের সেবা দেওয়ার বছরের অভিজ্ঞতার সাথে, IBC Sports নির্ভরযোগ্যতা, পেশাদারিত্ব এবং অসাধারণ বেটিং অভিজ্ঞতার জন্য খ্যাতি অর্জন করেছে।",
        "p2": "প্ল্যাটফর্মটি এশিয়ান হ্যান্ডিক্যাপ বেটিংয়ে বিশেষায়িত, এটি এমন একটি বেটিং ফরম্যাট যা এশিয়ায় উদ্ভূত হয়েছে এবং অসম দলগুলোর মধ্যে খেলার মাঠ সমান করার ক্ষমতার জন্য বিশ্বব্যাপী জনপ্রিয় হয়েছে। IBC Sports শিল্পের সবচেয়ে প্রতিযোগিতামূলক এশিয়ান হ্যান্ডিক্যাপ অডস অফার করে, যার সাথে ৫০+ স্পোর্টস জুড়ে ওভার/আন্ডার মার্কেট, কারেক্ট স্কোর এবং অসংখ্য অন্যান্য বেটিং অপশনের বিস্তৃত কভারেজ রয়েছে।",
        "p3": "যা IBC Sports-কে আলাদা করে তা হলো আন্তর্জাতিক মান বজায় রেখে এশিয়ান মার্কেটের উপর এর ফোকাস। প্ল্যাটফর্মটি এশিয়ান খেলোয়াড়দের বেটিং পছন্দ বোঝে, আইপিএল মৌসুমে ক্রিকেট-হেভি কভারেজ, প্রিমিয়ার লিগ ও চ্যাম্পিয়ন্স লিগের জন্য বিস্তৃত ফুটবল মার্কেট এবং ব্যাডমিন্টন, টেবিল টেনিস ও ইস্পোর্টস সহ বিস্তৃত এশিয়ান স্পোর্টস কভারেজ অফার করে।",
        "p4": "IBC Sports প্রথাগত স্পোর্টসবুক দক্ষতার সাথে অত্যাধুনিক প্রযুক্তির সংমিশ্রণ ঘটায়। প্ল্যাটফর্মটিতে রয়েছে বিদ্যুৎ-দ্রুত অডস আপডেট, বিরামহীন লাইভ বেটিং, মোবাইল অপ্টিমাইজেশন এবং একটি ব্যবহারকারী-বান্ধব ইন্টারফেস যা নতুনদের জন্য বেটিং সহজ করে তোলে, পাশাপাশি প্রফেশনাল বেটরদের চাহিদাকৃত গভীরতা এবং পরিশীলতা প্রদান করে। আপনি ক্রিকেট, ফুটবল, টেনিস বা উপলব্ধ ৫০+ স্পোর্টসের যেকোনোটিতে বাজি ধরুন না কেন, IBC Sports একটি প্রিমিয়াম বেটিং অভিজ্ঞতা প্রদান করে।"
    },
    "features": {
        "title": "প্রিমিয়াম স্পোর্টসবুক ফিচার",
        "subtitle": "সিরিয়াস স্পোর্টস বেটরদের জন্য ডিজাইন করা প্রফেশনাল-গ্রেড ফিচার",
        "handicap": {
            "title": "এশিয়ান হ্যান্ডিক্যাপ দক্ষতা",
            "desc1": "IBC Sports এশিয়ান হ্যান্ডিক্যাপ বেটিংয়ে একজন লিডার, এই জনপ্রিয় বেটিং ফরম্যাটে সবচেয়ে প্রতিযোগিতামূলক অডস এবং গভীরতম মার্কেট অফার করে। এশিয়ান হ্যান্ডিক্যাপ ড্র অপশনটি দূর করে একটি দলকে ভার্চুয়াল হেড স্টার্ট দেয়, যা আরও ভারসাম্যপূর্ণ অডস এবং বেটরদের জন্য ভালো ভ্যালু তৈরি করে। এই ফরম্যাটটি ফুটবল বেটিংয়ের জন্য বিশেষভাবে জনপ্রিয় যেখানে ড্র সাধারণ।",
            "desc2": "প্ল্যাটফর্মটি প্রতিটি ম্যাচের জন্য একাধিক এশিয়ান হ্যান্ডিক্যাপ লাইন অফার করে, যার মধ্যে কোয়ার্টার-বল এবং হাফ-বল হ্যান্ডিক্যাপ রয়েছে যা আরও বেটিং অপশন এবং ভালো অডস প্রদান করে। উদাহরণস্বরূপ, একটি ফুটবল ম্যাচে, আপনি -০.২৫, -০.৫, -০.৭৫, -১.০ এবং আরও অনেক হ্যান্ডিক্যাপ দেখতে পারেন, যার প্রতিটি ভিন্ন ঝুঁকি-পুরস্কার প্রোফাইল অফার করে। এই ক্ষেত্রে IBC Sports-এর দক্ষতা মানে আপনি সেরা সম্ভাব্য অডস এবং সবচেয়ে নির্ভুল লাইন পান।",
            "example": {
                "title": "এশিয়ান হ্যান্ডিক্যাপ উদাহরণ:",
                "teamA": "টিম A (-০.৫)",
                "teamB": "টিম B (+০.৫)",
                "note": "বাজি জেতার জন্য টিম A-কে অন্তত ১ গোলে জিততে হবে"
            }
        },
        "live": {
            "title": "উন্নত লাইভ বেটিং",
            "desc1": "IBC Sports-এর উন্নত ইন-প্লে প্ল্যাটফর্মের সাথে লাইভ বেটিংয়ের রোমাঞ্চ অনুভব করুন। ম্যাচ চলাকালীন রিয়েল-টাইম অডসে বাজি ধরুন যা ম্যাচের ইভেন্টের উপর ভিত্তি করে তাৎক্ষণিকভাবে আপডেট হয়। এটি ক্রিকেট উইকেট, ফুটবল গোল, টেনিস ব্রেক পয়েন্ট বা বাস্কেটবল থ্রি-পয়েন্টার যাই হোক না কেন, অডস বর্তমান ম্যাচের পরিস্থিতি প্রতিফলিত করতে অবিলম্বে অ্যাডজাস্ট হয়।",
            "desc2": "লাইভ বেটিং ইন্টারফেস গতি এবং দক্ষতার জন্য ডিজাইন করা হয়েছে। মাত্র কয়েকটি ক্লিকে বাজি ধরুন, একসাথে একাধিক ম্যাচ মনিটর করুন এবং মোমেন্টাম শিফট ও ভ্যালু সুযোগগুলো উপস্থিত হওয়ার সাথে সাথে কাজে লাগান। IBC Sports নেক্সট গোল, নেক্সট উইকেট, সেট উইনার, কোয়ার্টার উইনার এবং শত শত অন্যান্য ইন-প্লে অপশন সহ বিস্তৃত লাইভ বেটিং মার্কেট অফার করে।",
            "desc3": "লাইভ পরিসংখ্যান এবং ম্যাচ ট্র্যাকার সরাসরি বেটিং ইন্টারফেসে ইন্টিগ্রেট করা হয়েছে, যা আপনাকে সচেতন সিদ্ধান্ত নেওয়ার জন্য প্রয়োজনীয় সমস্ত তথ্য দেয়। বেটিং পেজ না ছেড়েই পজেশন স্ট্যাটস, শট কাউন্ট, প্লেয়ার পারফরম্যান্স ডেটা এবং আরও অনেক কিছু দেখুন। লাইভ বেটিংয়ের প্রতি এই বিস্তৃত পদ্ধতি IBC Sports-কে সিরিয়াস ইন-প্লে বেটরদের পছন্দ করে তোলে।"
        },
        "odds": {
            "title": "প্রতিযোগিতামূলক অডস",
            "desc1": "IBC Sports ধারাবাহিকভাবে এশিয়ান মার্কেটে সবচেয়ে প্রতিযোগিতামূলক কিছু অডস অফার করে। প্ল্যাটফর্মের স্বল্প মার্জিন পদ্ধতির অর্থ হলো বেটরদের জন্য আরও মূল্য, যেখানে অডস সাধারণত গড় স্পোর্টসবুকের চেয়ে ২-৫% ভালো হয়। শত শত বাজির ক্ষেত্রে, এই পার্থক্যটি আপনার লাভজনকতা এবং দীর্ঘমেয়াদী রিটার্নকে উল্লেখযোগ্যভাবে প্রভাবিত করতে পারে।",
            "desc2": "IBC Sports-এর অডস কম্পাইলেশন টিমে অভিজ্ঞ ট্রেডাররা রয়েছেন যারা এশিয়ান বেটিং মার্কেটগুলো গভীরভাবে বোঝেন। তারা প্রতিযোগিতামূলক মার্জিন বজায় রেখে মার্কেটগুলোকে সঠিকভাবে মূল্য নির্ধারণ করেন, নিশ্চিত করে যে আপনি ন্যায্য অডস পাচ্ছেন যা প্রকৃত সম্ভাবনা প্রতিফলিত করে। আইপিএল ক্রিকেট বা প্রিমিয়ার লিগ ফুটবলের মতো জনপ্রিয় ইভেন্টগুলোর জন্য, IBC Sports প্রায়ই যেকোনো জায়গায় উপলব্ধ সেরা অডসের সাথে মিলে যায় বা তা ছাপিয়ে যায়।",
            "desc3": "ইভেন্টের অনেক আগেই আর্লি অডস পোস্ট করা হয়, যা আপনাকে মার্কেট মুভ করার আগে ভ্যালু নিশ্চিত করতে দেয়। প্ল্যাটফর্মটি নির্বাচিত ইভেন্টগুলিতে এনহান্সড অডস প্রমোশনও অফার করে, যা আপনাকে জনপ্রিয় ম্যাচগুলোতে আরও ভালো ভ্যালু দেয়। আপনি প্রি-ম্যাচ বা লাইভ বাজি ধরুন না কেন, IBC Sports নিশ্চিত করে যে আপনি প্রতিটি বাজিতে চমৎকার অডস পাচ্ছেন।"
        },
        "coverage": {
            "title": "৫০+ স্পোর্টস কভারেজ",
            "desc1": "IBC Sports সারা বিশ্ব থেকে ৫০টিরও বেশি ভিন্ন স্পোর্টস কভার করে, নিশ্চিত করে যে আপনি কার্যত যেকোনো স্পোর্টিং ইভেন্টে বাজি ধরতে পারেন। ফুটবল, ক্রিকেট, টেনিস এবং বাস্কেটবলের মতো মেইনস্ট্রিম স্পোর্টস থেকে শুরু করে ডার্টস, স্নুকার, হ্যান্ডবল এবং ইস্পোর্টসের মতো নিস স্পোর্টস পর্যন্ত, প্ল্যাটফর্মটি প্রতিটি ইভেন্টে গভীর মার্কেট সহ বিস্তৃত কভারেজ অফার করে।",
            "desc2": "ক্রিকেট কভারেজ বিশেষভাবে বিস্তৃত, যেখানে প্রতিটি আইপিএল ম্যাচ, আন্তর্জাতিক সিরিজ, টি২০ লিগ, টেস্ট ম্যাচ এবং ওডিআই-এর মার্কেট রয়েছে। ফুটবল কভারেজ প্রিমিয়ার লিগ, লা লিগা, সিরি এ, বুন্দেসলিগা, চ্যাম্পিয়ন্স লিগ এবং আন্তর্জাতিক টুর্নামেন্ট সহ সমস্ত প্রধান লিগ জুড়ে বিস্তৃত। টেনিস মার্কেট প্রতিটি গ্র্যান্ড স্ল্যাম, এটিপি এবং ডাব্লুটিএ ইভেন্টকে বিস্তৃত বেটিং অপশন সহ কভার করে।",
            "desc3": "প্রধান স্পোর্টস ছাড়াও, IBC Sports ব্যাডমিন্টন, টেবিল টেনিস, কাবাডি এবং এশিয়ান ফুটবল লিগ সহ এশিয়ান স্পোর্টসের চমৎকার কভারেজ অফার করে। ডোটা ২, সিএস:জিও, লিগ অফ লেজেন্ডস এবং অন্যান্য জনপ্রিয় টাইটেলের মার্কেট সহ ইস্পোর্টস বেটিংও উপলব্ধ। আপনার স্পোর্টিং আগ্রহ যাই হোক না কেন, IBC Sports আপনাকে কভার করে।"
        }
    },
    "sports": {
        "title": "বিস্তৃত স্পোর্টস কভারেজ",
        "subtitle": "গভীর মার্কেট এবং প্রতিযোগিতামূলক অডস সহ সমস্ত প্রধান স্পোর্টসে বাজি ধরুন",
        "items": [
            {
                "title": "ক্রিকেট বেটিং",
                "desc": "আইপিএল, আন্তর্জাতিক ম্যাচ, টি২০ লিগ, টেস্ট ক্রিকেট এবং ওডিআই সহ বিস্তৃত ক্রিকেট কভারেজ। বিস্তৃত মার্কেট: ম্যাচ উইনার, টপ ব্যাটসম্যান, টোটাল রান, ইনিংস রান, ডিসমিসাল মেথড, প্লেয়ার পারফরম্যান্স এবং আরও শত শত। তাৎক্ষণিক অডস আপডেট সহ প্রতিটি বলে লাইভ বেটিং।",
                "tags": ["আইপিএল", "টি২০ বিশ্বকাপ", "টেস্ট সিরিজ", "ওডিআই", "কাউন্টি ক্রিকেট", "বিবিএল"]
            },
            {
                "title": "ফুটবল বেটিং",
                "desc": "প্রিমিয়ার লিগ থেকে স্থানীয় লিগ পর্যন্ত সম্পূর্ণ ফুটবল কভারেজ। এশিয়ান হ্যান্ডিক্যাপ, ওভার/আন্ডার, কারেক্ট স্কোর, উভয় দলের গোল, প্রথম গোল, এনটাইম গোলস্কোরার এবং আরও অনেক কিছু। প্রতিটি ম্যাচে রিয়েল-টাইম অডস সহ লাইভ বেটিং। বিশ্বব্যাপী সমস্ত প্রধান টুর্নামেন্ট এবং লিগের কভারেজ।",
                "tags": ["প্রিমিয়ার লিগ", "চ্যাম্পিয়ন্স লিগ", "লা লিগা", "বিশ্বকাপ", "ইউরো", "এশিয়ান লিগ"]
            },
            {
                "title": "টেনিস বেটিং",
                "desc": "সমস্ত গ্র্যান্ড স্ল্যাম, এটিপি, ডাব্লুটিএ এবং চ্যালেঞ্জার ইভেন্ট কভার করা হয়। ম্যাচ উইনার, সেট বেটিং, গেম হ্যান্ডিক্যাপ, টোটাল গেম, কারেক্ট স্কোর এবং আরও অনেক কিছু। প্রতিটি পয়েন্টের পরে অডস আপডেট সহ চমৎকার লাইভ বেটিং। প্রতিযোগিতামূলক অডস সহ সমস্ত প্রধান টুর্নামেন্টে গভীর মার্কেট।",
                "tags": ["উইম্বলডন", "ইউএস ওপেন", "ফ্রেঞ্চ ওপেন", "অস্ট্রেলিয়ান ওপেন", "এটিপি", "ডাব্লুটিএ"]
            },
            {
                "title": "বাস্কেটবল বেটিং",
                "desc": "এনবিএ, ইউরোলিগ, ফিবা এবং আন্তর্জাতিক বাস্কেটবল। ম্যাচ উইনার, হ্যান্ডিক্যাপ, টোটাল পয়েন্ট, কোয়ার্টার উইনার, হাফ উইনার, প্লেয়ার প্রপস এবং আরও অনেক কিছু। ক্রমাগত অডস আপডেট সহ দ্রুত গতির লাইভ বেটিং। সমস্ত প্রধান লিগ এবং টুর্নামেন্টের বিস্তৃত কভারেজ।",
                "tags": ["এনবিএ", "ইউরোলিগ", "ফিবা", "এনসিএএ", "অলিম্পিক", "এশিয়ান লিগ"]
            },
            {
                "title": "ইস্পোর্টস বেটিং",
                "desc": "ডোটা ২, সিএস:জিও, লিগ অফ লেজেন্ডস, ভ্যালোরেন্ট এবং আরও অনেক কিছু সহ বিস্তৃত ইস্পোর্টস কভারেজ। ম্যাচ উইনার, ম্যাপ উইনার, হ্যান্ডিক্যাপ, টোটাল ম্যাপ, ফার্স্ট ব্লাড এবং বিশেষ ইস্পোর্টস মার্কেট। প্রতিযোগিতামূলক অডস সহ সমস্ত প্রধান টুর্নামেন্টে লাইভ বেটিং।",
                "tags": ["ডোটা ২", "সিএস:জিও", "এলওএল", "ভ্যালোরেন্ট", "মোবাইল লেজেন্ডস", "পাবজি"]
            },
            {
                "title": "আরও স্পোর্টস",
                "desc": "ব্যাডমিন্টন, টেবিল টেনিস, ভলিবল, হ্যান্ডবল, রাগবি, গলফ, বক্সিং, এমএমএ, বেসবল, আইস হকি, আমেরিকান ফুটবল এবং আরও ৪০+ স্পোর্টস। বিশেষ ইভেন্ট, অলিম্পিক, এশিয়ান গেমস এবং প্রধান চ্যাম্পিয়নশিপ। যদি এটি একটি স্পোর্ট হয়, আমরা এটি কভার করি।",
                "tags": ["ব্যাডমিন্টন", "টেবিল টেনিস", "রাগবি", "গলফ", "বক্সিং", "এমএমএ"]
            }
        ]
    },
    "markets": {
        "title": "বিস্তৃত বেটিং মার্কেট",
        "subtitle": "প্রতিটি ইভেন্টে শত শত বেটিং অপশন",
        "items": [
            { "title": "ম্যাচ মার্কেট", "markets": ["ম্যাচ উইনার", "এশিয়ান হ্যান্ডিক্যাপ", "ওভার/আন্ডার", "কারেক্ট স্কোর", "উভয় দলের গোল", "ডাবল চান্স"] },
            { "title": "প্লেয়ার মার্কেট", "markets": ["টপ ব্যাটসম্যান", "টপ বোলার", "এনটাইম গোলস্কোরার", "ফার্স্ট গোলস্কোরার", "প্লেয়ার প্রপস", "পারফরম্যান্স বেট"] },
            { "title": "স্পেশাল মার্কেট", "markets": ["ফার্স্ট হাফ", "সেকেন্ড হাফ", "ইনিংস রান", "ডিসমিসাল মেথড", "বুকিং পয়েন্ট", "কর্নার কিক"] },
            { "title": "লাইভ মার্কেট", "markets": ["নেক্সট গোল", "নেক্সট উইকেট", "সেট উইনার", "কোয়ার্টার উইনার", "লাইভ হ্যান্ডিক্যাপ", "লাইভ ওভার/আন্ডার"] }
        ]
    },
    "platform": {
        "title": "প্ল্যাটফর্ম ফিচার ও প্রযুক্তি",
        "subtitle": "আধুনিক স্পোর্টস বেটরদের জন্য উন্নত ফিচার",
        "items": [
            { "title": "মোবাইল অপ্টিমাইজড", "desc": "সম্পূর্ণ রেসপন্সিভ মোবাইল প্ল্যাটফর্ম এবং iOS ও Android-এর জন্য নেটিভ অ্যাপ। ডেস্কটপের মতো একই ফিচার সহ যেকোনো জায়গায়, যেকোনো সময় বাজি ধরুন।" },
            { "title": "বিদ্যুৎ-দ্রুত", "desc": "তাৎক্ষণিক বেট প্লেসমেন্ট, রিয়েল-টাইম অডস আপডেট এবং বিদ্যুৎ-দ্রুত পেজ লোড। কোনো ল্যাগ নেই, কোনো বিলম্ব নেই, শুধু মসৃণ বেটিং।" },
            { "title": "লাইভ পরিসংখ্যান", "desc": "সচেতন সিদ্ধান্তের জন্য বেটিং ইন্টারফেসে ইন্টিগ্রেট করা বিস্তৃত লাইভ স্ট্যাটস, ম্যাচ ট্র্যাকার এবং ডেটা ভিজ্যুয়ালাইজেশন।" },
            { "title": "আর্লি মার্কেট", "desc": "প্রধান ইভেন্টগুলোর জন্য দিন বা সপ্তাহ আগেই অডস পোস্ট করা হয়। মার্কেট মুভ করার আগেই ভ্যালু লক করুন।" },
            { "title": "ক্যাশ আউট", "desc": "লাভ নিশ্চিত করতে বা ক্ষতি কমাতে আপনার বাজি আগেভাগেই ক্যাশ আউট করুন। সমস্ত স্পোর্টস জুড়ে প্রি-ম্যাচ এবং লাইভ বাজিতে উপলব্ধ।" },
            { "title": "মাল্টি-বেট বিল্ডার", "desc": "এনহান্সড অডসের জন্য একই ম্যাচ বা একাধিক ম্যাচ থেকে বিভিন্ন মার্কেট কম্বাইন করে কাস্টম মাল্টি-বেট তৈরি করুন।" },
            { "title": "নিরাপদ ও লাইসেন্সপ্রাপ্ত", "desc": "ব্যাঙ্ক-লেভেল নিরাপত্তা সহ সম্পূর্ণ লাইসেন্সপ্রাপ্ত এবং নিয়ন্ত্রিত। আপনার ফান্ড এবং ডেটা ২৫৬-বিট SSL এনক্রিপশন দিয়ে সুরক্ষিত।" },
            { "title": "লাইভ স্ট্রিমিং", "desc": "বাজি ধরার সময় নির্বাচিত ইভেন্টগুলো লাইভ দেখুন। চূড়ান্ত বেটিং অভিজ্ঞতার জন্য প্ল্যাটফর্মে সরাসরি ম্যাচ স্ট্রিম করুন।" },
            { "title": "বেট হিস্ট্রি", "desc": "বিস্তারিত বেট হিস্ট্রি এবং অ্যাকাউন্ট স্টেটমেন্ট। আপনার পারফরম্যান্স ট্র্যাক করুন, বেটিং প্যাটার্ন বিশ্লেষণ করুন এবং কৌশল উন্নত করুন।" }
        ]
    },
    "whyChoose": {
        "title": "কেন IBC Sports বেছে নেবেন?",
        "subtitle": "যে সুবিধাগুলো IBC Sports-কে এশিয়ান বেটরদের জন্য পছন্দের পছন্দ করে তোলে",
        "items1": [
            { "title": "এশিয়ান মার্কেট দক্ষতা", "desc": "বিশেষায়িত মার্কেট, এশিয়ান হ্যান্ডিক্যাপ দক্ষতা এবং এশিয়ান স্পোর্টস ও লিগের কভারেজ সহ এশিয়ান বেটিং পছন্দগুলোর গভীর ধারণা।" },
            { "title": "প্রতিযোগিতামূলক অডস", "desc": "স্বল্প মার্জিন সহ সমস্ত স্পোর্টস জুড়ে ধারাবাহিকভাবে প্রতিযোগিতামূলক অডস। ভালো অডস মানে ভালো ভ্যালু এবং আপনার বাজিতে উচ্চ সম্ভাব্য রিটার্ন।" },
            { "title": "বিস্তৃত লাইভ বেটিং", "desc": "রিয়েল-টাইম অডস আপডেট সহ প্রতিদিন হাজার হাজার লাইভ বেটিং মার্কেট। তাৎক্ষণিক বেট প্লেসমেন্ট সহ ম্যাচ চলাকালীন বাজি ধরুন।" },
            { "title": "প্রফেশনাল সার্ভিস", "desc": "প্রফেশনাল কাস্টমার সার্ভিস, দ্রুত পেআউট এবং নির্ভরযোগ্য প্ল্যাটফর্ম পারফরম্যান্স সহ এশিয়ান বেটরদের সেবা দেওয়ার বছরের অভিজ্ঞতা।" }
        ],
        "items2": [
            { "title": "৫০+ স্পোর্টস কভারেজ", "desc": "সমস্ত প্রধান স্পোর্টস প্লাস নিস স্পোর্টস এবং ইস্পোর্টসের বিস্তৃত কভারেজ। আপনি যাই বাজি ধরতে চান না কেন, IBC Sports-এ তা আছে।" },
            { "title": "একাধিক বেট টাইপ", "desc": "এশিয়ান হ্যান্ডিক্যাপ, ওভার/আন্ডার, কারেক্ট স্কোর, প্লেয়ার প্রপস এবং বিশেষায়িত মার্কেট সহ ইভেন্ট প্রতি শত শত বেটিং মার্কেট।" },
            { "title": "মোবাইল এক্সিলেন্স", "desc": "সম্পূর্ণ অপ্টিমাইজড মোবাইল প্ল্যাটফর্ম এবং নেটিভ অ্যাপ। ডেস্কটপের মতো একই ফিচার এবং গতির সাথে চলাফেরার সময় বাজি ধরুন।" },
            { "title": "বিশ্বস্ত ও নির্ভরযোগ্য", "desc": "বছরের পর বছর নির্ভরযোগ্য সেবা, নিরাপদ লেনদেন এবং ন্যায্য বেটিং অনুশীলনের সাথে এশিয়ান মার্কেটে প্রতিষ্ঠিত খ্যাতি।" }
        ]
    },
    "tips": {
        "title": "বেটিং টিপস ও কৌশল",
        "subtitle": "IBC Sports-এ আপনার বেটিং সাফল্য সর্বাধিক করতে বিশেষজ্ঞ টিপস",
        "handicap": {
            "title": "এশিয়ান হ্যান্ডিক্যাপ কৌশল",
            "desc1": "এশিয়ান হ্যান্ডিক্যাপ বেটিং ড্র অপশন দূর করে এবং আরও ভারসাম্যপূর্ণ অডস প্রদান করে। ফেভারিটের উপর বাজি ধরার সময়, নিরাপদ বাজির জন্য ছোট হ্যান্ডিক্যাপ (-০.৫, -০.৭৫) বিবেচনা করুন। আন্ডারডগদের জন্য, পজিটিভ হ্যান্ডিক্যাপ (+০.৫, +১.০) একটি কুশন প্রদান করে এমনকি তারা অল্প ব্যবধানে হারলেও।",
            "desc2": "কোয়ার্টার-বল হ্যান্ডিক্যাপ (-০.২৫, -০.৭৫) দুটি হ্যান্ডিক্যাপের মধ্যে আপনার স্টেক ভাগ করে ঝুঁকি কমায়। উদাহরণস্বরূপ, -০.৭৫ আপনার স্টেক -০.৫ এবং -১.০ এর মধ্যে ভাগ করে, যদি ফেভারিট ঠিক এক গোলে জিতে তবে আপনাকে আংশিক রিটার্ন দেয়।",
            "example": {
                "title": "উদাহরণ কৌশল:",
                "items": ["শক্তিশালী ফেভারিট: ভালো অডসের জন্য -১.০ বা -১.৫ ব্যবহার করুন", "ক্লোজ ম্যাচ: নিরাপত্তার জন্য -০.২৫ বা +০.২৫ ব্যবহার করুন", "আন্ডারডগ ভ্যালু: কুশনের জন্য +০.৫ বা +১.০ ব্যবহার করুন"]
            }
        },
        "live": {
            "title": "লাইভ বেটিং কৌশল",
            "desc1": "ম্যাচ ইভেন্টের উপর ভিত্তি করে অডস ওঠানামা করার ফলে লাইভ বেটিং অনন্য সুযোগ অফার করে। মোমেন্টাম শিফট লক্ষ্য করুন - একটি দল পজেশনে আধিপত্য বিস্তার করছে বা সুযোগ তৈরি করছে তাদের অডস প্রায়শই কমে যায়। মার্কেট সম্পূর্ণরূপে এই পরিবর্তনগুলোর সাথে অ্যাডজাস্ট করার আগেই বাজি ধরুন।",
            "desc2": "ক্রিকেটে, উইকেট অডসকে নাটকীয়ভাবে পরিবর্তন করে। যদি একটি শক্তিশালী ব্যাটিং দল দ্রুত উইকেট হারায়, তবে তাদের অডস উল্লেখযোগ্যভাবে বেড়ে যায়। আপনি যদি বিশ্বাস করেন তারা রিকভার করবে, তবে এটি ভ্যালু উপস্থাপন করে। একইভাবে, ফুটবলে, গোলের পর অডস শিফট হয় - কখনও কখনও একক ইভেন্টে অতিরিক্ত প্রতিক্রিয়া দেখায়।",
            "example": {
                "title": "লাইভ বেটিং টিপস:",
                "items": ["ম্যাচ দেখুন, শুধু অডস অনুসরণ করবেন না", "একক ইভেন্টে অতিরিক্ত প্রতিক্রিয়া খুঁজুন", "তাড়াতাড়ি লাভ নিশ্চিত করতে ক্যাশ-আউট ব্যবহার করুন"]
            }
        },
        "value": {
            "title": "ভ্যালু বেটিং",
            "desc1": "ভ্যালু বেটিং মানে এমন অডস খুঁজে বের করা যা ফলাফলের প্রকৃত সম্ভাবনার চেয়ে বেশি। IBC Sports-এর অডস অন্যান্য বুকমেকার এবং আপনার নিজস্ব মূল্যায়নের সাথে তুলনা করুন। যদি আপনি বিশ্বাস করেন যে একটি দলের জেতার সম্ভাবনা ৬০% কিন্তু অডস বোঝাচ্ছে মাত্র ৫০%, তবে সেটি ভ্যালু।",
            "desc2": "আপনার ভালো জানা স্পোর্টস এবং লিগের ওপর ফোকাস করুন। আপনার জ্ঞানের সুবিধা সেই মার্কেটগুলোতে সবচেয়ে বেশি মূল্যবান যেখানে আপনি টিম ফর্ম, প্লেয়ার ইনজুরি, ট্যাকটিক্যাল ম্যাচআপ এবং ফলাফলের উপর প্রভাব ফেলতে পারে এমন অন্যান্য বিষয়গুলো বোঝেন। সবকিছুর উপর বাজি না ধরে স্পেশালাইজ করুন।",
            "example": {
                "title": "ভ্যালু খোঁজা:",
                "items": ["একাধিক বুকমেকার জুড়ে অডস তুলনা করুন", "পাবলিক মানির সাথে অডস অ্যাডজাস্ট হওয়ার আগে আগেভাগে বাজি ধরুন", "আপনার দক্ষতার ক্ষেত্রগুলোতে ফোকাস করুন"]
            }
        },
        "bankroll": {
            "title": "ব্যাঙ্করোল ম্যানেজমেন্ট",
            "desc1": "একক বাজিতে কখনোই আপনার মোট ব্যাঙ্করোলের ১-৫% এর বেশি বাজি ধরবেন না। এটি আপনাকে লসিং স্ট্রিক থেকে রক্ষা করে এবং নিশ্চিত করে যে আপনি হারার পরেও বেটিং চালিয়ে যেতে পারবেন। প্রফেশনাল বেটররা সাধারণত বেশিরভাগ বাজির জন্য ১-২% স্টেক ব্যবহার করেন, শুধুমাত্র হাই-কনফিডেন্স প্লে-র জন্য ৩-৫% পর্যন্ত বাড়ান।",
            "desc2": "স্টেক, অডস, ফলাফল এবং কারণ সহ সমস্ত বাজির বিস্তারিত রেকর্ড রাখুন। এটি আপনাকে শনাক্ত করতে সাহায্য করে কোন বেট টাইপ এবং স্পোর্টস আপনার জন্য সবচেয়ে লাভজনক। আবেগ বা সাম্প্রতিক ফলাফলের ভিত্তিতে নয়, ডেটার ভিত্তিতে আপনার কৌশল সামঞ্জস্য করুন।",
            "example": {
                "title": "ব্যাঙ্করোল রুলস:",
                "items": ["একটি নির্দিষ্ট বেটিং ব্যাঙ্করোল সেট করুন", "স্ট্যান্ডার্ড বাজির জন্য ১-২% স্টেক ব্যবহার করুন", "সমস্ত বাজি ট্র্যাক করুন এবং ফলাফল বিশ্লেষণ করুন"]
            }
        }
    },
    "gettingStarted": {
        "title": "IBC Sports দিয়ে শুরু করা",
        "subtitle": "মাত্র কয়েকটি সহজ ধাপে আপনার স্পোর্টস বেটিং যাত্রা শুরু করুন",
        "steps": [
            { "title": "অ্যাকাউন্ট তৈরি করুন", "desc": "BIGWIN959-এ সাইন আপ করুন এবং স্পোর্টস বেটিং সেকশনের মাধ্যমে IBC Sports অ্যাক্সেস করুন। দ্রুত রেজিস্ট্রেশন প্রক্রিয়া।" },
            { "title": "ডিপোজিট করুন", "desc": "বিকাশ, নগদ, ব্যাঙ্ক ট্রান্সফার বা অন্যান্য উপলব্ধ পেমেন্ট মেথড ব্যবহার করে আপনার অ্যাকাউন্টে ফান্ড যোগ করুন। তাৎক্ষণিক ডিপোজিট।" },
            { "title": "স্পোর্ট বেছে নিন", "desc": "৫০+ স্পোর্টস এবং হাজার হাজার মার্কেট ব্রাউজ করুন। উপলব্ধ বাজি দেখতে আপনার স্পোর্ট, লিগ এবং ম্যাচ নির্বাচন করুন।" },
            { "title": "বাজি ধরুন", "desc": "বেট স্লিপে যোগ করতে অডসে ক্লিক করুন, স্টেক এন্টার করুন এবং কনফার্ম করুন। রিয়েল-টাইমে আপনার বাজি ট্র্যাক করুন এবং যেকোনো সময় ক্যাশ আউট করুন।" }
        ],
        "newToBetting": {
            "title": "স্পোর্টস বেটিংয়ে নতুন?",
            "items": [
                { "title": "ছোট শুরু করুন", "desc": "শেখার সময় ছোট স্টেক দিয়ে শুরু করুন। স্বাচ্ছন্দ্য না হওয়া পর্যন্ত বেট প্রতি ব্যাঙ্করোলের ১% ব্যবহার করুন।" },
                { "title": "মার্কেট শিখুন", "desc": "এশিয়ান হ্যান্ডিক্যাপ এবং অন্যান্য মার্কেট এক্সপ্লোর করার আগে সহজ ম্যাচ উইনার বেট দিয়ে শুরু করুন।" },
                { "title": "গাইড ব্যবহার করুন", "desc": "বিভিন্ন বেট টাইপ এবং কৌশল বুঝতে আমাদের বেটিং গাইড পড়ুন এবং টিউটোরিয়াল দেখুন।" }
            ]
        }
    },
    "mobile": {
        "title": "মোবাইল অ্যাপের সাথে যেকোনো জায়গায় বাজি ধরুন",
        "p1": "IBC Sports মোবাইল অ্যাপ আপনার স্মার্টফোনে সম্পূর্ণ স্পোর্টসবুক অভিজ্ঞতা নিয়ে আসে। বাজি ধরুন, লাইভ ম্যাচ মনিটর করুন, অডস চেক করুন এবং যেকোনো জায়গা থেকে আপনার অ্যাকাউন্ট ম্যানেজ করুন। অ্যাপটি তাৎক্ষণিক বেট প্লেসমেন্ট, বেট সেটেলমেন্টের জন্য পুশ নোটিফিকেশন এবং বিরামহীন নেভিগেশন সহ গতির জন্য অপ্টিমাইজ করা হয়েছে।",
        "p2": "iOS এবং Android উভয় ডিভাইসের জন্য উপলব্ধ, মোবাইল অ্যাপটিতে ডেস্কটপ প্ল্যাটফর্মের মতো একই বিস্তৃত স্পোর্টস কভারেজ, প্রতিযোগিতামূলক অডস এবং লাইভ বেটিং অপশন রয়েছে। ইন্টারফেসটি বিশেষভাবে বড় বোতাম, সহজ নেভিগেশন এবং আপনার প্রিয় স্পোর্টস ও মার্কেটে দ্রুত অ্যাক্সেস সহ মোবাইলের জন্য ডিজাইন করা হয়েছে।",
        "features": ["নেটিভ iOS ও Android অ্যাপস", "তাৎক্ষণিক বেট প্লেসমেন্ট", "চলাফেরার সময় লাইভ বেটিং", "পুশ নোটিফিকেশন", "নিরাপদ ও এনক্রিপ্ট করা", "3G/4G/5G/WiFi-এ কাজ করে"]
    },
    "finalCta": {
        "title": "বেটিং শুরু করতে প্রস্তুত?",
        "subtitle": "হাজার হাজার বেটরদের সাথে যোগ দিন যারা প্রতিযোগিতামূলক অডস, বিস্তৃত মার্কেট এবং প্রফেশনাল সার্ভিসের জন্য IBC Sports-কে বিশ্বাস করেন। আজই আপনার জয়ের যাত্রা শুরু করুন।",
        "start": "এখনই বেটিং শুরু করুন",
        "guide": "বেটিং গাইড",
        "cricket": "ক্রিকেট গাইড",
        "badges": ["৫০+ স্পোর্টস", "প্রতিযোগিতামূলক অডস", "লাইভ বেটিং", "এশিয়ান হ্যান্ডিক্যাপ"]
    }
};

// Check if providers keys exist, if not create them
if (!en.providers) en.providers = {};
if (!bn.providers) bn.providers = {};

en.providers.ibcSports = ibcSportsEN;
bn.providers.ibcSports = ibcSportsBN;

fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
fs.writeFileSync(bnPath, JSON.stringify(bn, null, 2));

console.log('IBC Sports translation keys added/updated successfully.');
