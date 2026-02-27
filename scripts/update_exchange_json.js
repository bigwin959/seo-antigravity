
import fs from 'fs';

const enPath = './public/locales/en/translation.json';
const bnPath = './public/locales/bn/translation.json';

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const bn = JSON.parse(fs.readFileSync(bnPath, 'utf8'));

// Define Exchange Sports English Content
const exchangeSportsEN = {
    "seo": {
        "title": "Exchange Sports – Peer-to-Peer Betting Exchange | Better Odds & Lay Betting",
        "description": "Experience revolutionary betting exchange on BIGWIN959. Back and lay bets, trade positions, get better odds, and enjoy commission-based pricing on Exchange Sports.",
        "schema": {
            "name": "Exchange Sports on BIGWIN959",
            "description": "Revolutionary peer-to-peer betting exchange platform offering better odds, lay betting, and unique trading opportunities for sports enthusiasts."
        }
    },
    "hero": {
        "badge": "Peer-to-Peer Betting Exchange",
        "title": "Exchange <1>Sports</1>",
        "subtitle": "Revolutionary betting exchange platform where you bet against other players, not the house. Get better odds, lay bets, and trade your positions like a professional.",
        "cta": {
            "start": "Start Trading Now",
            "learn": "Learn How It Works"
        },
        "stats": [
            { "label": "Better Odds", "value": "Up to 20% Higher" },
            { "label": "Peer-to-Peer", "value": "Bet Against Players" },
            { "label": "Lay Betting", "value": "Bet Against Outcomes" },
            { "label": "Low Commission", "value": "2-5% Only" }
        ]
    },
    "intro": {
        "title": "What is Exchange Sports?",
        "p1": "Exchange Sports represents a revolutionary approach to sports betting that fundamentally changes how you place bets. Unlike traditional sportsbooks where you bet against the bookmaker, Exchange Sports is a peer-to-peer betting exchange where you bet directly against other players. This innovative model eliminates the bookmaker's margin, resulting in significantly better odds and more value for your bets.",
        "p2": "The exchange acts as a marketplace where bettors can both back (bet for) and lay (bet against) outcomes. When you back a selection, you're betting it will happen. When you lay a selection, you're betting it won't happen - essentially acting as the bookmaker yourself. This dual functionality opens up entirely new betting strategies and opportunities that simply don't exist in traditional sports betting.",
        "p3": "Exchange Sports charges a small commission (typically 2-5%) only on your net winnings, rather than building a large margin into the odds like traditional bookmakers. This means you get odds that are typically 10-20% better than traditional sportsbooks, dramatically increasing your potential returns over time. For serious bettors and traders, this difference can be the key to long-term profitability.",
        "p4": "The platform covers all major sports including cricket, football, tennis, basketball, and more, with thousands of markets available daily. Whether you're betting on the IPL, Premier League, Grand Slam tennis, or international cricket, Exchange Sports provides deep liquidity and competitive odds across all markets."
    },
    "features": {
        "title": "Revolutionary Betting Exchange Features",
        "subtitle": "Discover the powerful features that make Exchange Sports the choice of professional bettors",
        "backLay": {
            "title": "Back & Lay Betting",
            "desc1": "The cornerstone of exchange betting is the ability to both back and lay selections. Backing is traditional betting - you bet that something will happen. Laying is the opposite - you bet that something won't happen, effectively becoming the bookmaker. This revolutionary feature allows you to profit from outcomes not occurring, opening up entirely new betting strategies.",
            "desc2": "For example, in a cricket match, you can back India to win (traditional bet) or lay India to win (betting they won't win - meaning Pakistan wins or it's a draw). This flexibility allows you to take advantage of market movements, hedge your bets, and implement sophisticated trading strategies that are impossible with traditional bookmakers.",
            "back": {
                "title": "BACK (Bet For)",
                "items": ["Bet outcome will happen", "Traditional betting", "Win if selection wins"]
            },
            "lay": {
                "title": "LAY (Bet Against)",
                "items": ["Bet outcome won't happen", "Act as bookmaker", "Win if selection loses"]
            }
        },
        "odds": {
            "title": "Superior Odds & Value",
            "desc1": "Exchange Sports consistently offers odds that are 10-20% better than traditional sportsbooks. This isn't marketing hype - it's a mathematical certainty based on how exchanges work. Traditional bookmakers build a 5-10% margin into their odds (called the overround), which guarantees them profit regardless of the outcome. Exchanges eliminate this margin.",
            "desc2": "Instead of a built-in margin, exchanges charge a small commission (2-5%) only on your net winnings. This means if you bet $100 and win $50, you pay commission on the $50 profit, not the entire stake. Over hundreds of bets, this difference compounds dramatically. A bettor who would break even at a traditional bookmaker can be significantly profitable on an exchange.",
            "example": {
                "title": "Example: Cricket Match Odds Comparison",
                "traditional": "Traditional Bookmaker",
                "exchange": "Exchange Sports",
                "value": "Better Value"
            }
        },
        "trading": {
            "title": "In-Play Trading",
            "desc1": "Exchange Sports transforms betting into trading. Just like stock traders buy low and sell high, you can back at high odds and lay at low odds (or vice versa) to guarantee profit regardless of the outcome. This is called \"greening up\" and it's one of the most powerful strategies available to exchange bettors.",
            "desc2": "In-play trading is where exchanges truly shine. As a cricket match unfolds, odds fluctuate dramatically based on wickets, runs, and momentum. Skilled traders can back a team before they start performing well, then lay them at lower odds once they're ahead, locking in guaranteed profit. Or lay a favorite at short odds, then back them at higher odds if they start losing.",
            "desc3": "The platform provides real-time odds updates, advanced charting tools, and one-click trading features that allow you to react instantly to market movements. Whether you're trading cricket, tennis, football, or any other sport, the exchange gives you the tools to profit from your sports knowledge and market timing."
        },
        "liquidity": {
            "title": "Deep Liquidity & Markets",
            "desc1": "Exchange Sports offers deep liquidity across thousands of markets daily. Liquidity refers to the amount of money available to match your bets. High liquidity means you can place large bets instantly at the displayed odds without moving the market. This is crucial for serious bettors who want to place significant stakes.",
            "desc2": "The platform covers all major sports with extensive market depth. For popular events like IPL matches, Premier League football, or Grand Slam tennis, you'll find millions of dollars in liquidity, allowing you to bet any amount at competitive odds. Even for smaller markets, there's typically sufficient liquidity for recreational bettors.",
            "desc3": "Beyond match winners, Exchange Sports offers hundreds of markets per event including over/under runs, player performance, innings scores, method of dismissal, and countless other betting options. This variety combined with the ability to both back and lay creates virtually unlimited betting and trading opportunities."
        }
    },
    "sports": {
        "title": "Comprehensive Sports Coverage",
        "subtitle": "Bet on all major sports with deep markets and competitive odds",
        "items": [
            {
                "title": "Cricket Exchange",
                "desc": "The most popular sport on Exchange Sports. Bet on IPL, international matches, T20 leagues, Test cricket, and ODIs. Extensive markets including match odds, innings runs, top batsman, method of dismissal, and hundreds more. In-play trading opportunities on every ball with real-time odds updates.",
                "tags": ["IPL", "T20 World Cup", "Test Matches", "ODI Series", "County Cricket"]
            },
            {
                "title": "Football Exchange",
                "desc": "Comprehensive football coverage from Premier League to Champions League. Bet on match odds, correct score, over/under goals, both teams to score, and Asian handicaps. Live trading during matches with odds changing based on goals, red cards, and match flow. Deep liquidity on all major leagues.",
                "tags": ["Premier League", "Champions League", "La Liga", "World Cup", "Euro"]
            },
            {
                "title": "Tennis Exchange",
                "desc": "Perfect for trading with constant momentum shifts. Bet on match winners, set winners, game handicaps, and total games. Tennis offers some of the best trading opportunities as odds swing dramatically during matches. Cover all Grand Slams, ATP, WTA, and challenger events.",
                "tags": ["Wimbledon", "US Open", "French Open", "Australian Open", "ATP Tour"]
            },
            {
                "title": "Basketball Exchange",
                "desc": "NBA, EuroLeague, and international basketball with extensive markets. Bet on match winners, handicaps, total points, quarter winners, and player props. High-scoring nature creates frequent trading opportunities. Live betting with odds updating after every basket.",
                "tags": ["NBA", "EuroLeague", "FIBA", "NCAA", "Olympics"]
            },
            {
                "title": "Horse Racing Exchange",
                "desc": "Where betting exchanges originated. Lay horses you think won't win, back outsiders at huge odds, or trade pre-race market movements. Covers UK, Irish, Australian, and international racing. Massive liquidity on major races like the Grand National and Royal Ascot.",
                "tags": ["UK Racing", "Irish Racing", "Melbourne Cup", "Dubai World Cup"]
            },
            {
                "title": "More Sports",
                "desc": "Extensive coverage of rugby, golf, boxing, MMA, baseball, ice hockey, volleyball, handball, and more. Special events like Olympics, World Championships, and major tournaments. If there's a sporting event happening, you can probably bet on it on Exchange Sports.",
                "tags": ["Rugby", "Golf", "Boxing", "MMA", "Baseball", "Ice Hockey"]
            }
        ]
    },
    "howItWorks": {
        "title": "How Exchange Sports Works",
        "subtitle": "Understanding the exchange betting model in simple steps",
        "steps": [
            { "title": "Choose Your Market", "desc": "Select from thousands of sports markets across cricket, football, tennis, and more. Each market shows back (blue) and lay (pink) odds available." },
            { "title": "Back or Lay", "desc": "Decide whether to back (bet for) or lay (bet against) an outcome. You can see all available odds and liquidity at each price level." },
            { "title": "Place Your Bet", "desc": "Enter your stake and confirm. Your bet is matched instantly with another user's opposing bet. If no match exists, your bet sits in the market until matched." },
            { "title": "Trade or Settle", "desc": "Trade out for guaranteed profit, let it run to settlement, or hedge your position. Pay commission (2-5%) only on net winnings when the market settles." }
        ],
        "commission": {
            "title": "Commission Structure",
            "items": [
                { "value": "2-5%", "label": "Commission on net winnings only" },
                { "value": "0%", "label": "Commission on losing bets" },
                { "value": "Lower", "label": "Rates for high-volume traders" }
            ]
        }
    },
    "advantages": {
        "title": "Why Choose Exchange Sports?",
        "subtitle": "The advantages that make exchange betting superior to traditional sportsbooks",
        "items": [
            { "title": "Better Odds Guaranteed", "desc": "Consistently 10-20% better odds than traditional bookmakers due to peer-to-peer model and low commission structure." },
            { "title": "Lay Betting Freedom", "desc": "Bet against outcomes, act as the bookmaker, and profit from selections losing - impossible at traditional sportsbooks." },
            { "title": "Trading Opportunities", "desc": "Trade positions in-play like stocks, lock in guaranteed profits, and implement sophisticated betting strategies." },
            { "title": "Low Commission", "desc": "Pay only 2-5% commission on net winnings, not on turnover. No commission on losing bets. Much better value than bookmaker margins." },
            { "title": "No Bet Limits", "desc": "No account restrictions or stake limits. Bet as much as the market liquidity allows without fear of being limited or banned." },
            { "title": "Market Transparency", "desc": "See all available odds and liquidity in real-time. Complete transparency on market depth and available stakes at each price." },
            { "title": "In-Play Trading", "desc": "Extensive in-play markets with real-time odds updates. Trade momentum shifts and market movements during live events." },
            { "title": "Fair & Secure", "desc": "All bets matched peer-to-peer with funds held securely. No conflict of interest as the exchange doesn't bet against you." },
            { "title": "Mobile Trading", "desc": "Full-featured mobile platform for trading on the go. Place bets, monitor positions, and trade markets from anywhere." }
        ]
    },
    "strategies": {
        "title": "Advanced Betting Strategies",
        "subtitle": "Professional strategies unique to exchange betting",
        "greening": { "title": "Greening Up (Guaranteed Profit)", "desc": "Back at high odds, then lay at lower odds (or vice versa) to guarantee profit regardless of outcome. Example: Back a cricket team at 3.0 before match, lay at 2.0 when they're ahead. You profit whether they win or lose.", "example": "Example:" },
        "dutching": { "title": "Dutching (Multiple Selections)", "desc": "Back multiple selections in the same market to guarantee profit if any of them wins. Particularly effective in horse racing or cricket player markets where you can back several options at value odds.", "example": "Example:" },
        "scalping": { "title": "Scalping (Quick Profits)", "desc": "Take advantage of small price movements for quick profits. Back at one price, lay at a slightly lower price moments later. Requires fast execution and works best on liquid markets with tight spreads.", "example": "Example:" },
        "swing": { "title": "Swing Trading", "desc": "Trade based on momentum shifts during live events. In cricket, back the batting team when they're scoring quickly, lay when they slow down. In tennis, back the player winning games, lay when momentum shifts.", "example": "Example:" }
    },
    "beginner": {
        "title": "Getting Started with Exchange Sports",
        "subtitle": "New to exchange betting? Here's everything you need to know",
        "interface": {
            "title": "Understanding the Interface",
            "back": { "title": "Back (Blue)", "desc": "Blue boxes show odds to back (bet for). Click to bet that outcome will happen. Higher odds = higher potential profit." },
            "lay": { "title": "Lay (Pink)", "desc": "Pink boxes show odds to lay (bet against). Click to bet that outcome won't happen. You're acting as the bookmaker." },
            "liquidity": { "title": "Liquidity", "desc": "Numbers below odds show available liquidity (money available to match). Higher liquidity = easier to get bets matched." }
        },
        "tips": {
            "title": "Tips for Beginners",
            "items": [
                "Start with simple back bets on familiar sports before trying lay betting",
                "Use small stakes initially to understand how the exchange works",
                "Watch markets move during live events to understand price fluctuations",
                "Learn to read the market depth and liquidity indicators",
                "Practice greening up with small amounts to understand trading",
                "Focus on sports you know well - knowledge is your edge",
                "Use the cash-out feature if you're unsure about a position",
                "Keep records of your bets to track performance and learn"
            ]
        },
        "reminders": {
            "title": "Important Reminders",
            "items": [
                "When you lay, you're liable for the backer's winnings (stake × (odds - 1))",
                "Commission is charged only on net winnings, not on turnover",
                "Unmatched bets can be cancelled anytime before they're matched",
                "In-play odds change rapidly - use limit orders to control your entry price",
                "Always check your liability before placing lay bets",
                "Markets suspend briefly during significant events (goals, wickets, etc.)"
            ]
        }
    },
    "comparison": {
        "title": "Exchange vs Traditional Sportsbook",
        "subtitle": "See the clear differences and advantages of exchange betting",
        "table": {
            "headers": { "feature": "Feature", "exchange": "Exchange Sports", "traditional": "Traditional Bookmaker" },
            "rows": [
                { "feature": "Odds Quality", "exchange": "10-20% better", "traditional": "Standard with margin" },
                { "feature": "Lay Betting", "exchange": "✓ Available", "traditional": "✗ Not available" },
                { "feature": "Trading", "exchange": "✓ Full trading", "traditional": "✗ Limited cash-out" },
                { "feature": "Commission", "exchange": "2-5% on winnings", "traditional": "Built into odds" },
                { "feature": "Bet Limits", "exchange": "Market liquidity only", "traditional": "Account limits common" },
                { "feature": "Account Restrictions", "exchange": "None for winners", "traditional": "Winners often limited" },
                { "feature": "Market Transparency", "exchange": "Full depth visible", "traditional": "Opaque pricing" },
                { "feature": "In-Play Markets", "exchange": "Extensive", "traditional": "Limited" },
                { "feature": "Bet Against You", "exchange": "Never (peer-to-peer)", "traditional": "Always (house)" }
            ]
        },
        "cta": {
            "text": "The choice is clear: Exchange Sports offers superior value, more flexibility, and better opportunities for serious bettors.",
            "button": "Experience the Difference"
        }
    },
    "mobile": {
        "title": "Advanced Trading Technology",
        "p1": "Exchange Sports provides professional-grade trading tools accessible to everyone. The platform features real-time odds updates, advanced charting, one-click betting, and sophisticated order types that allow you to trade like a professional from day one.",
        "p2": "The mobile app delivers the full exchange experience on your smartphone. Place bets, monitor positions, view live odds, and trade markets from anywhere. The app is optimized for speed with instant bet placement, push notifications for matched bets, and seamless synchronization across devices.",
        "features": ["Native iOS & Android apps", "Lightning-fast bet placement", "Advanced charting & analytics", "Real-time odds updates", "One-click trading interface", "Secure & encrypted"]
    },
    "finalCta": {
        "title": "Ready to Experience Better Betting?",
        "subtitle": "Join thousands of smart bettors who have switched to Exchange Sports for better odds, more flexibility, and greater control over their betting.",
        "start": "Start Trading Now",
        "learn": "Learn More",
        "badges": ["Better Odds Guaranteed", "No Bet Limits", "Trade Like a Pro", "Low Commission"]
    }
};

// Define Exchange Sports Bengali Content
const exchangeSportsBN = {
    "seo": {
        "title": "Exchange Sports - পিয়ার-টু-পিয়ার বেটিং এক্সচেঞ্জ | উন্নত অডস এবং লে বেটিং",
        "description": "BIGWIN959-এ বৈপ্লবিক বেটিং এক্সচেঞ্জের অভিজ্ঞতা নিন। ব্যাক এবং লে বেট করুন, পজিশন ট্রেড করুন, ভালো অডস পান এবং Exchange Sports-এ কমিশন-ভিত্তিক প্রাইসিং উপভোগ করুন।",
        "schema": {
            "name": "BIGWIN959-এ Exchange Sports",
            "description": "বৈপ্লবিক পিয়ার-টু-পিয়ার বেটিং এক্সচেঞ্জ প্ল্যাটফর্ম যা উন্নত অডস, লে বেটিং এবং ক্রীড়া প্রেমীদের জন্য অনন্য ট্রেডিং সুযোগ প্রদান করে।"
        }
    },
    "hero": {
        "badge": "পিয়ার-টু-পিয়ার বেটিং এক্সচেঞ্জ",
        "title": "Exchange <1>Sports</1>",
        "subtitle": "বৈপ্লবিক বেটিং এক্সচেঞ্জ প্ল্যাটফর্ম যেখানে আপনি হাউসের বিরুদ্ধে নয়, অন্য খেলোয়াড়দের বিরুদ্ধে বাজি ধরেন। উন্নত অডস পান, লে বেট করুন এবং প্রফেশনালদের মতো আপনার পজিশন ট্রেড করুন।",
        "cta": {
            "start": "এখনই ট্রেডিং শুরু করুন",
            "learn": "কিভাবে কাজ করে জানুন"
        },
        "stats": [
            { "label": "উন্নত অডস", "value": "২০% পর্যন্ত বেশি" },
            { "label": "পিয়ার-টু-পিয়ার", "value": "প্লেয়ারদের বিরুদ্ধে বাজি" },
            { "label": "লে বেটিং", "value": "ফলাফলের বিরুদ্ধে বাজি" },
            { "label": "স্বল্প কমিশন", "value": "মাত্র ২-৫%" }
        ]
    },
    "intro": {
        "title": "Exchange Sports কী?",
        "p1": "Exchange Sports স্পোর্টস বেটিংয়ের একটি বৈপ্লবিক পদ্ধতি যা আপনার বাজি ধরার উপায়কে মৌলিকভাবে পরিবর্তন করে। প্রথাগত স্পোর্টসবুকগুলোর বিপরীতে যেখানে আপনি বুকমেকারের বিরুদ্ধে বাজি ধরেন, Exchange Sports হলো একটি পিয়ার-টু-পিয়ার বেটিং এক্সচেঞ্জ যেখানে আপনি সরাসরি অন্য খেলোয়াড়দের বিরুদ্ধে বাজি ধরেন। এই উদ্ভাবনী মডেলটি বুকমেকারের মার্জিন দূর করে, যার ফলে আপনি উল্লেখযোগ্যভাবে ভালো অডস এবং আপনার বাজির জন্য আরও বেশি মূল্য পান।",
        "p2": "এক্সচেঞ্জটি একটি মার্কেটপ্লেস হিসেবে কাজ করে যেখানে বেটররা ফলাফলের পক্ষে (ব্যাক) এবং বিপক্ষে (লে) বাজি ধরতে পারেন। যখন আপনি কোনো সিলেকশন ব্যাক করেন, তখন আপনি বাজি ধরছেন যে সেটি ঘটবে। যখন আপনি লে করেন, তখন আপনি বাজি ধরছেন যে সেটি ঘটবে না - মূলত আপনি নিজেই এখানে বুকমেকারের ভূমিকা পালন করছেন। এই দ্বৈত কার্যকারিতা সম্পূর্ণ নতুন বেটিং কৌশল এবং সুযোগ উন্মুক্ত করে যা প্রথাগত স্পোর্টস বেটিংয়ে বিদ্যমান নেই।",
        "p3": "Exchange Sports প্রথাগত বুকমেকারদের মতো অডসের মধ্যে বড় মার্জিন না রেখে শুধুমাত্র আপনার নেট জয়ের উপর একটি ছোট্ট কমিশন (সাধারণত ২-৫%) চার্জ করে। এর মানে হলো আপনি প্রথাগত স্পোর্টসবুকের তুলনায় সাধারণত ১০-২০% ভালো অডস পান, যা সময়ের সাথে সাথে আপনার সম্ভাব্য রিটার্নকে নাটকীয়ভাবে বাড়িয়ে তোলে। সিরিয়াস বেটর এবং ট্রেডারদের জন্য, এই পার্থক্যটিই দীর্ঘমেয়াদী লাভের চাবিকাঠি হতে পারে।",
        "p4": "প্ল্যাটফর্মটি ক্রিকেট, ফুটবল, টেনিস, বাস্কেটবল সহ সমস্ত প্রধান খেলা কভার করে এবং প্রতিদিন হাজার হাজার মার্কেট উপলব্ধ থাকে। আপনি আইপিএল, প্রিমিয়ার লিগ, গ্র্যান্ড স্ল্যাম টেনিস বা আন্তর্জাতিক ক্রিকেটে বাজি ধরুন না কেন, Exchange Sports সমস্ত মার্কেটে গভীর তারল্য এবং প্রতিযোগিতামূলক অডস প্রদান করে।"
    },
    "features": {
        "title": "বৈপ্লবিক বেটিং এক্সচেঞ্জ ফিচার",
        "subtitle": "শক্তিশালী ফিচারগুলো আবিষ্কার করুন যা Exchange Sports-কে প্রফেশনাল বেটরদের পছন্দ করে তুলেছে",
        "backLay": {
            "title": "ব্যাক এবং লে বেটিং",
            "desc1": "এক্সচেঞ্জ বেটিংয়ের মূল ভিত্তি হলো সিলেকশন ব্যাক এবং লে করার ক্ষমতা। ব্যাকিং হলো প্রথাগত বেটিং - আপনি বাজি ধরছেন যে কিছু একটি ঘটবে। লেয়িং হলো এর বিপরীত - আপনি বাজি ধরছেন যে কিছু একটি ঘটবে না, যা আপনাকে কার্যত বুকমেকারে পরিণত করে। এই বৈপ্লবিক ফিচারটি আপনাকে ফলাফল না ঘটা থেকে লাভ করার সুযোগ দেয় এবং সম্পূর্ণ নতুন বেটিং কৌশল উন্মুক্ত করে।",
            "desc2": "উদাহরণস্বরূপ, একটি ক্রিকেট ম্যাচে, আপনি ভারত জেতার জন্য ব্যাক করতে পারেন (প্রথাগত বাজি) অথবা ভারত জেতার বিরুদ্ধে লে করতে পারেন (বাজি ধরা যে তারা জিতবে না - যার মানে পাকিস্তান জিতবে বা ড্র হবে)। এই নমনীয়তা আপনাকে মার্কেটের গতিবিধি কাজে লাগাতে, আপনার বাজি হেজ করতে এবং প্রথাগত বুকমেকারদের সাথে অসম্ভব এমন অত্যাধুনিক ট্রেডিং কৌশল প্রয়োগ করতে দেয়।",
            "back": {
                "title": "ব্যাক (পক্ষে বাজি)",
                "items": ["ফলাফলটি ঘটবে বলে বাজি", "প্রথাগত বেটিং", "সিলেকশন জিতলে আপনি জিতবেন"]
            },
            "lay": {
                "title": "লে (বিপক্ষে বাজি)",
                "items": ["ফলাফলটি ঘটবে না বলে বাজি", "বুকমেকার হিসেবে কাজ করা", "সিলেকশন হারলে আপনি জিতবেন"]
            }
        },
        "odds": {
            "title": "উন্নত অডস এবং ভ্যালু",
            "desc1": "Exchange Sports ধারাবাহিকভাবে প্রথাগত স্পোর্টসবুকের তুলনায় ১০-২০% ভালো অডস অফার করে। এটি কোনো মার্কেটিং হাইপ নয় - এটি এক্সচেঞ্জগুলো কীভাবে কাজ করে তার উপর ভিত্তি করে একটি গাণিতিক নিশ্চিততা। প্রথাগত বুকমেকাররা তাদের অডসের মধ্যে ৫-১০% মার্জিন (যাকে ওভাররাউন্ড বলা হয়) তৈরি করে রাখে, যা ফলাফল যাই হোক না কেন তাদের লাভ নিশ্চিত করে। এক্সচেঞ্জগুলো এই মার্জিন দূর করে।",
            "desc2": "মার্জিন তৈরি করার পরিবর্তে, এক্সচেঞ্জগুলো শুধুমাত্র আপনার নেট জয়ের উপর একটি ছোট কমিশন (২-৫%) চার্জ করে। এর মানে হলো আপনি যদি $১০০ বাজি ধরে $৫০ জিতেন, তবে আপনি পুরো স্টেক নয়, শুধুমাত্র $৫০ লাভের উপর কমিশন দেবেন। শত শত বাজির ক্ষেত্রে এই পার্থক্যটি নাটকীয়ভাবে বৃদ্ধি পায়। একজন বেটর যিনি প্রথাগত বুকমেকারে ব্রেক-ইভেন করতেন, তিনি এক্সচেঞ্জে উল্লেখযোগ্যভাবে লাভবান হতে পারেন।",
            "example": {
                "title": "উদাহরণ: ক্রিকেট ম্যাচ অডস তুলনা",
                "traditional": "প্রথাগত বুকমেকার",
                "exchange": "Exchange Sports",
                "value": "উন্নত ভ্যালু"
            }
        },
        "trading": {
            "title": "ইন-প্লে ট্রেডিং",
            "desc1": "Exchange Sports বেটিংকে ট্রেডিংয়ে রূপান্তরিত করে। ঠিক যেমন স্টক ট্রেডাররা কম দামে কেনে এবং বেশি দামে বিক্রি করে, আপনি ফলাফলের পরোয়া না করে লাভ নিশ্চিত করতে উচ্চ অডসে ব্যাক করতে পারেন এবং কম অডসে লে করতে পারেন (বা এর উল্টোটা)। একে \"গ্রিনিং আপ\" বলা হয় এবং এটি এক্সচেঞ্জ বেটরদের জন্য উপলব্ধ সবচেয়ে শক্তিশালী কৌশলগুলোর মধ্যে একটি।",
            "desc2": "ইন-প্লে ট্রেডিংয়ে এক্সচেঞ্জগুলো সত্যিই উজ্জ্বল। ক্রিকেট ম্যাচ চলাকালীন, উইকেট, রান এবং মোমেন্টামের উপর ভিত্তি করে অডস নাটকীয়ভাবে ওঠানামা করে। দক্ষ ট্রেডাররা একটি দল ভালো পারফর্ম করা শুরু করার আগেই তাদের ব্যাক করতে পারেন, তারপর তারা এগিয়ে গেলে কম অডসে লে করে নিশ্চিত লাভ লক করতে পারেন। অথবা ফেভারিটকে শর্ট অডসে লে করে, তারা হারতে শুরু করলে উচ্চ অডসে ব্যাক করতে পারেন।",
            "desc3": "প্ল্যাটফর্মটি রিয়েল-টাইম অডস আপডেট, উন্নত চার্টিং টুলস এবং ওয়ান-ক্লিক ট্রেডিং ফিচার প্রদান করে যা আপনাকে মার্কেটের গতিবিধিতে তাৎক্ষণিকভাবে প্রতিক্রিয়া জানাতে দেয়। আপনি ক্রিকেট, টেনিস, ফুটবল বা অন্য যেকোনো স্পোর্টস ট্রেড করুন না কেন, এক্সচেঞ্জ আপনাকে আপনার ক্রীড়া জ্ঞান এবং মার্কেট টাইমিং থেকে লাভ করার টুলস দেয়।"
        },
        "liquidity": {
            "title": "গভীর তারল্য এবং মার্কেট",
            "desc1": "Exchange Sports প্রতিদিন হাজার হাজার মার্কেটে গভীর তারল্য অফার করে। তারল্য বলতে বোঝায় আপনার বাজি ম্যাচ করার জন্য উপলব্ধ অর্থের পরিমাণ। উচ্চ তারল্য মানে আপনি মার্কেট মুভ না করেই প্রদর্শিত অডসে তাৎক্ষণিকভাবে বড় বাজি রাখতে পারেন। এটি সিরিয়াস বেটরদের জন্য অত্যন্ত গুরুত্বপূর্ণ যারা বড় স্টেকের বাজি রাখতে চান।",
            "desc2": "প্ল্যাটফর্মটি বিস্তৃত মার্কেট ডেপথ সহ সমস্ত প্রধান স্পোর্টস কভার করে। আইপিএল ম্যাচ, প্রিমিয়ার লিগ ফুটবল বা গ্র্যান্ড স্ল্যাম টেনিসের মতো জনপ্রিয় ইভেন্টগুলোর জন্য, আপনি মিলিয়নে ডলারের তারল্য পাবেন, যা আপনাকে প্রতিযোগিতামূলক অডসে যেকোনো পরিমাণ বাজি ধরার সুযোগ দেয়। এমনকি ছোট মার্কেটগুলোর জন্যও, রিক্রিয়েশনাল বেটরদের জন্য সাধারণত পর্যাপ্ত তারল্য থাকে।",
            "desc3": "ম্যাচ উইনার ছাড়াও, Exchange Sports ইভেন্ট প্রতি শত শত মার্কেট অফার করে যার মধ্যে ওভার/আন্ডার রান, প্লেয়ার পারফরম্যান্স, ইনিংস স্কোর, ডিসমিসাল মেথড এবং অসংখ্য অন্যান্য বেটিং অপশন রয়েছে। এই বৈচিত্র্য এবং ব্যাক ও লে করার ক্ষমতা কার্যত আনলিমিটেড বেটিং এবং ট্রেডিং সুযোগ তৈরি করে।"
        }
    },
    "sports": {
        "title": "বিস্তৃত স্পোর্টস কভারেজ",
        "subtitle": "গভীর মার্কেট এবং প্রতিযোগিতামূলক অডস সহ সমস্ত প্রধান স্পোর্টসে বাজি ধরুন",
        "items": [
            {
                "title": "ক্রিকেট এক্সচেঞ্জ",
                "desc": "Exchange Sports-এ সবচেয়ে জনপ্রিয় খেলা। আইপিএল, আন্তর্জাতিক ম্যাচ, টি২০ লিগ, টেস্ট ক্রিকেট এবং ওডিআই-এ বাজি ধরুন। ম্যাচ অডস, ইনিংস রান, টপ ব্যাটসম্যান, ডিসমিসাল মেথড এবং আরও শত শত মার্কেট। রিয়েল-টাইম অডস আপডেট সহ প্রতিটি বলে ইন-প্লে ট্রেডিং সুযোগ।",
                "tags": ["আইপিএল", "টি২০ বিশ্বকাপ", "টেস্ট ম্যাচ", "ওডিআই সিরিজ", "কাউন্টি ক্রিকেট"]
            },
            {
                "title": "ফুটবল এক্সচেঞ্জ",
                "desc": "প্রিমিয়ার লিগ থেকে চ্যাম্পিয়ন্স লিগ পর্যন্ত বিস্তৃত ফুটবল কভারেজ। ম্যাচ অডস, কারেক্ট স্কোর, ওভার/আন্ডার গোল, উভয় দলের গোল এবং এশিয়ান হ্যান্ডিক্যাপে বাজি ধরুন। গোল, রেড কার্ড এবং ম্যাচ ফ্লোর উপর ভিত্তি করে পরিবর্তনশীল অডস সহ ম্যাচ চলাকালীন লাইভ ট্রেডিং।",
                "tags": ["প্রিমিয়ার লিগ", "চ্যাম্পিয়ন্স লিগ", "লা লিগা", "বিশ্বকাপ", "ইউরো"]
            },
            {
                "title": "টেনিস এক্সচেঞ্জ",
                "desc": "ক্রমাগত মোমেন্টাম শিফটের সাথে ট্রেডিংয়ের জন্য নিখুঁত। ম্যাচ উইনার, সেট উইনার, গেম হ্যান্ডিক্যাপ এবং টোটাল গেমে বাজি ধরুন। টেনিস সেরা কিছু ট্রেডিং সুযোগ অফার করে কারণ ম্যাচ চলাকালীন অডস নাটকীয়ভাবে ওঠানামা করে। সমস্ত গ্র্যান্ড স্ল্যাম, এটিপি, ডাব্লুটিএ এবং চ্যালেঞ্জার ইভেন্ট কভার করে।",
                "tags": ["উইম্বলডন", "ইউএস ওপেন", "ফ্রেঞ্চ ওপেন", "অস্ট্রেলিয়ান ওপেন", "এটিপি ট্যুর"]
            },
            {
                "title": "বাসস্কেটবল এক্সচেঞ্জ",
                "desc": "এনবিএ, ইউরোলিগ এবং আন্তর্জাতিক বাস্কেটবল সহ বিস্তৃত মার্কেট। ম্যাচ উইনার, হ্যান্ডিক্যাপ, টোটাল পয়েন্ট, কোয়ার্টার উইনার এবং প্লেয়ার প্রপসে বাজি ধরুন। হাই-স্কোরিং প্রকৃতি ঘন ঘন ট্রেডিং সুযোগ তৈরি করে। প্রতিটি বাস্কেটের পর অডস আপডেট সহ লাইভ বেটিং।",
                "tags": ["এনবিএ", "ইউরোলিগ", "ফিবা", "এনসিএএ", "অলিম্পিক"]
            },
            {
                "title": "হর্স রেসিং এক্সচেঞ্জ",
                "desc": "যেখান থেকে বেটিং এক্সচেঞ্জের উৎপত্তি। যে ঘোড়াগুলো জিতবে না বলে আপনি মনে করেন তাদের লে করুন, বিশাল অডসে আউটসাইডারদের ব্যাক করুন, অথবা প্রি-রেস মার্কেট মুভমেন্ট ট্রেড করুন। ইউকে, আইরিশ, অস্ট্রেলিয়ান এবং আন্তর্জাতিক রেসিং কভার করে। গ্র্যান্ড ন্যাশনাল এবং রয়্যাল অ্যাসকটের মতো প্রধান রেসগুলোতে বিশাল তারল্য।",
                "tags": ["ইউকে রেসিং", "আইরিশ রেসিং", "মেলবোর্ন কাপ", "দুবাই ওয়ার্ল্ড কাপ"]
            },
            {
                "title": "আরও স্পোর্টস",
                "desc": "রাগবি, গলফ, বক্সিং, এমএমএ, বেসবল, আইস হকি, ভলিবল, হ্যান্ডবল এবং আরও অনেক কিছুর বিস্তৃত কভারেজ। অলিম্পিক, ওয়ার্ল্ড চ্যাম্পিয়নশিপ এবং প্রধান টুর্নামেন্টের মতো বিশেষ ইভেন্ট। যদি কোনো স্পোর্টিং ইভেন্ট ঘটে থাকে, তবে আপনি সম্ভবত Exchange Sports-এ এটিতে বাজি ধরতে পারবেন।",
                "tags": ["রাগবি", "গলফ", "বক্সিং", "এমএমএ", "বেসবল", "আইস হকি"]
            }
        ]
    },
    "howItWorks": {
        "title": "Exchange Sports যেভাবে কাজ করে",
        "subtitle": "সহজ কয়েকটি ধাপে এক্সচেঞ্জ বেটিং মডেল বোঝা",
        "steps": [
            { "title": "মার্কেট বেছে নিন", "desc": "ক্রিকেট, ফুটবল, টেনিস এবং আরও অনেক স্পোর্টস জুড়ে হাজার হাজার মার্কেট থেকে নির্বাচন করুন। প্রতিটি মার্কেট ব্যাক (নীল) এবং লে (গোলাপী) অডস দেখায়।" },
            { "title": "ব্যাক বা লে", "desc": "সিদ্ধান্ত নিন আপনি ফলাফলের পক্ষে (ব্যাক) নাকি বিপক্ষে (লে) বাজি ধরবেন। আপনি প্রতিটি প্রাইস লেভেলে সমস্ত উপলব্ধ অডস এবং তারল্য দেখতে পারেন।" },
            { "title": "বাজি ধরুন", "desc": "আপনার স্টেক এন্টার করুন এবং কনফার্ম করুন। আপনার বাজি অন্য ব্যবহারকারীর বিপরীত বাজির সাথে তাৎক্ষণিকভাবে মিলে যায়। যদি কোনো ম্যাচ না থাকে, তবে আপনার বাজি ম্যাচ না হওয়া পর্যন্ত মার্কেটে থাকে।" },
            { "title": "ট্রেড বা সেটেল", "desc": "নিশ্চিত লাভের জন্য ট্রেড আউট করুন, সেটেলমেন্ট পর্যন্ত চলতে দিন বা আপনার পজিশন হেজ করুন। মার্কেট সেটেল হলে শুধুমাত্র নেট জয়ের উপর কমিশন (২-৫%) প্রদান করুন।" }
        ],
        "commission": {
            "title": "কমিশন কাঠামো",
            "items": [
                { "value": "২-৫%", "label": "শুধুমাত্র নেট জয়ের উপর কমিশন" },
                { "value": "০%", "label": "হেরে যাওয়া বাজির উপর কমিশন" },
                { "value": "কম", "label": "হাই-ভলিউম ট্রেডারদের জন্য রেট" }
            ]
        }
    },
    "advantages": {
        "title": "কেন Exchange Sports বেছে নেবেন?",
        "subtitle": "যে সুবিধাগুলো এক্সচেঞ্জ বেটিংকে প্রথাগত স্পোর্টসবুকের চেয়ে শ্রেষ্ঠ করে তোলে",
        "items": [
            { "title": "নিশ্চিতভাবে ভালো অডস", "desc": "পিয়ার-টু-পিয়ার মডেল এবং স্বল্প কমিশন কাঠামোর কারণে প্রথাগত বুকমেকারদের চেয়ে ধারাবাহিকভাবে ১০-২০% ভালো অডস।" },
            { "title": "লে বেটিং স্বাধীনতা", "desc": "ফলাফলের বিরুদ্ধে বাজি ধরা, বুকমেকার হিসেবে কাজ করা এবং সিলেকশন হেরে গেলে লাভ করার ক্ষমতা - যা প্রথাগত স্পোর্টসবুকে অসম্ভব।" },
            { "title": "ট্রেডিং সুযোগ", "desc": "স্টকের মতো ইন-প্লে পজিশন ট্রেড করুন, নিশ্চিত লাভ লক করুন এবং অত্যাধুনিক বেটিং কৌশল প্রয়োগ করুন।" },
            { "title": "স্বল্প কমিশন", "desc": "টার্নওভারের উপর নয়, শুধুমাত্র নেট জয়ের উপর ২-৫% কমিশন দিন। হেরে যাওয়া বাজির উপর কোনো কমিশন নেই। বুকমেকার মার্জিনের চেয়ে অনেক ভালো ভ্যালু।" },
            { "title": "কোনো বেট লিমিট নেই", "desc": "কোনো অ্যাকাউন্ট রেস্ট্রিকশন বা স্টেক লিমিট নেই। লিমিটেড বা নিষিদ্ধ হওয়ার ভয় ছাড়াই মার্কেট তারল্য যতটা অনুমোদন করে ততটা বাজি ধরুন।" },
            { "title": "মার্কেট স্বচ্ছতা", "desc": "রিয়েল-টাইমে সমস্ত উপলব্ধ অডস এবং তারল্য দেখুন। প্রতিটি প্রাইসে মার্কেট ডেপথ এবং উপলব্ধ স্টেক সম্পর্কে সম্পূর্ণ স্বচ্ছতা।" },
            { "title": "ইন-প্লে ট্রেডিং", "desc": "রিয়েল-টাইম অডস আপডেট সহ বিস্তৃত ইন-প্লে মার্কেট। লাইভ ইভেন্ট চলাকালীন মোমেন্টাম শিফট এবং মার্কেট মুভমেন্ট ট্রেড করুন।" },
            { "title": "ন্যায্য ও নিরাপদ", "desc": "সমস্ত বাজি পিয়ার-টু-পিয়ার ম্যাচ করা হয় এবং ফান্ড নিরাপদে রাখা হয়। এক্সচেঞ্জ আপনার বিরুদ্ধে বাজি ধরে না বলে কোনো স্বার্থের সংঘাত নেই।" },
            { "title": "মোবাইল ট্রেডিং", "desc": "চলাফেরার সময় ট্রেডিংয়ের জন্য ফুল-ফিচার্ড মোবাইল প্ল্যাটফর্ম। যেকোনো জায়গা থেকে বাজি ধরুন, পজিশন মনিটর করুন এবং মার্কেট ট্রেড করুন।" }
        ]
    },
    "strategies": {
        "title": "উন্নত বেটিং কৌশল",
        "subtitle": "এক্সচেঞ্জ বেটিংয়ের জন্য অনন্য প্রফেশনাল কৌশল",
        "greening": { "title": "গ্রিনিং আপ (নিশ্চিত লাভ)", "desc": "উচ্চ অডসে ব্যাক করুন, তারপর ফলাফল নির্বিশেষে লাভ নিশ্চিত করতে কম অডসে লে করুন (বা এর উল্টোটা)। উদাহরণ: ম্যাচের আগে ৩.০ অডসে একটি ক্রিকেট টিম ব্যাক করুন, তারা এগিয়ে গেলে ২.০ অডসে লে করুন। তারা জিতুক বা হারুক, আপনি লাভ করবেন।", "example": "উদাহরণ:" },
        "dutching": { "title": "ডাচিং (একাধিক সিলেকশন)", "desc": "একই মার্কেটে একাধিক সিলেকশন ব্যাক করুন যাতে তাদের মধ্যে যেকোনো একটি জিতলে লাভ নিশ্চিত হয়। হর্স রেসিং বা ক্রিকেট প্লেয়ার মার্কেটগুলিতে বিশেষভাবে কার্যকর যেখানে আপনি ভ্যালু অডসে বেশ কয়েকটি অপশন ব্যাক করতে পারেন।", "example": "উদাহরণ:" },
        "scalping": { "title": "স্ক্যালপিং (দ্রুত লাভ)", "desc": "দ্রুত লাভের জন্য ছোট প্রাইস মুভমেন্টের সুযোগ নিন। এক দামে ব্যাক করুন, কিছুক্ষণ পরে একটু কম দামে লে করুন। দ্রুত এক্সিকিউশন প্রয়োজন এবং টাইট স্প্রেড সহ লিকুইড মার্কেটে সবচেয়ে ভালো কাজ করে।", "example": "উদাহরণ:" },
        "swing": { "title": "সুইং ট্রেডিং", "desc": "লাইভ ইভেন্ট চলাকালীন মোমেন্টাম শিফটের উপর ভিত্তি করে ট্রেড করুন। ক্রিকেটে, ব্যাটিং টিম যখন দ্রুত স্কোর করছে তখন ব্যাক করুন, তারা স্লো হয়ে গেলে লে করুন। টেনিসে, গেম জেতা প্লেয়ারকে ব্যাক করুন, মোমেন্টাম শিফট হলে লে করুন।", "example": "উদাহরণ:" }
    },
    "beginner": {
        "title": "Exchange Sports দিয়ে শুরু করা",
        "subtitle": "এক্সচেঞ্জ বেটিংয়ে নতুন? আপনার যা যা জানা দরকার",
        "interface": {
            "title": "ইন্টারফেস বোঝা",
            "back": { "title": "ব্যাক (নীল)", "desc": "নীল বাক্সগুলো ব্যাক (পক্ষে বাজি) করার জন্য অডস দেখায়। ফলাফলটি ঘটবে বলে বাজি ধরতে ক্লিক করুন। উচ্চ অডস = উচ্চ সম্ভাব্য লাভ।" },
            "lay": { "title": "লে (গোলাপী)", "desc": "গোলাপী বাক্সগুলো লে (বিপক্ষে বাজি) করার জন্য অডস দেখায়। ফলাফলটি ঘটবে না বলে বাজি ধরতে ক্লিক করুন। আপনি এখানে বুকমেকার হিসেবে কাজ করছেন।" },
            "liquidity": { "title": "তারল্য", "desc": "অডসের নিচের সংখ্যাগুলো উপলব্ধ তারল্য দেখায় (বাজি ম্যাচ করার জন্য উপলব্ধ অর্থ)। উচ্চ তারল্য = বাজি ম্যাচ করা সহজ।" }
        },
        "tips": {
            "title": "নতুনদের জন্য টিপস",
            "items": [
                "লে বেটিং চেষ্টা করার আগে পরিচিত স্পোর্টসে সহজ ব্যাক বেট দিয়ে শুরু করুন",
                "এক্সচেঞ্জ কীভাবে কাজ করে তা বোঝার জন্য প্রাথমিকভাবে ছোট স্টেক ব্যবহার করুন",
                "প্রাইস ফ্লাকচুয়েশন বোঝার জন্য লাইভ ইভেন্ট চলাকালীন মার্কেট মুভমেন্ট দেখুন",
                "মার্কেট ডেপথ এবং লিকুইডাইনডিকেটর পড়তে শিখুন",
                "ট্রেডিং বোঝার জন্য অল্প পরিমাণে গ্রিনিং আপ প্র্যাকটিস করুন",
                "আপনার ভালো জানা স্পোর্টসের উপর ফোকাস করুন - জ্ঞানই আপনার সুবিধা",
                "কোনো পজিশন সম্পর্কে নিশ্চিত না হলে ক্যাশ-আউট ফিচার ব্যবহার করুন",
                "পারফরম্যান্স ট্র্যাক করতে এবং শিখতে আপনার বাজির রেকর্ড রাখুন"
            ]
        },
        "reminders": {
            "title": "গুরুত্বপূর্ণ রিমাইন্ডার",
            "items": [
                "যখন আপনি লে করেন, তখন আপনি ব্যাকারের জয়ের জন্য দায়ী থাকেন (স্টেক × (অডস - ১))",
                "কমিশন শুধুমাত্র নেট জয়ের উপর চার্জ করা হয়, টার্নওভারের উপর নয়",
                "ম্যাচ হওয়ার আগে যেকোনো সময় আনম্যাচড বেট বাতিল করা যেতে পারে",
                "ইন-প্লে অডস দ্রুত পরিবর্তিত হয় - আপনার এন্ট্রি প্রাইস নিয়ন্ত্রণ করতে লিমিট অর্ডার ব্যবহার করুন",
                "লে বেট করার আগে সর্বদা আপনার লায়াবিলিটি চেক করুন",
                "গুরুত্বপূর্ণ ইভেন্টের (গোল, উইকেট ইত্যাদি) সময় মার্কেটগুলো সংক্ষিপ্তভাবে সাসপেন্ড থাকে"
            ]
        }
    },
    "comparison": {
        "title": "এক্সচেঞ্জ বনাম প্রথাগত স্পোর্টসবুক",
        "subtitle": "এক্সচেঞ্জ বেটিংয়ের স্পষ্ট পার্থক্য এবং সুবিধাগুলো দেখুন",
        "table": {
            "headers": { "feature": "ফিচার", "exchange": "Exchange Sports", "traditional": "প্রথাগত বুকমেকার" },
            "rows": [
                { "feature": "অডস কোয়ালিটি", "exchange": "১০-২০% ভালো", "traditional": "মার্জিন-যুক্ত মান" },
                { "feature": "লে বেটিং", "exchange": "✓ উপলব্ধ", "traditional": "✗ উপলব্ধ নেই" },
                { "feature": "ট্রেডিং", "exchange": "✓ সম্পূর্ণ ট্রেডিং", "traditional": "✗ সীমিত ক্যাশ-আউট" },
                { "feature": "কমিশন", "exchange": "জয়ের উপর ২-৫%", "traditional": "অডসের মধ্যে যুক্ত" },
                { "feature": "বেট লিমিট", "exchange": "শুধুমাত্র মার্কেট তারল্য", "traditional": "অ্যাকাউন্ট লিমিট সাধারণ" },
                { "feature": "অ্যাকাউন্ট রেস্ট্রিকশন", "exchange": "বিজয়ীদের জন্য কোনোটি নেই", "traditional": "বিজয়ীরা প্রায়ই সীমিত" },
                { "feature": "মার্কেট স্বচ্ছতা", "exchange": "সম্পূর্ণ ডেপথ দৃশ্যমান", "traditional": "অস্বচ্ছ প্রাইসিং" },
                { "feature": "ইন-প্লে মার্কেট", "exchange": "বিস্তৃত", "traditional": "সীমিত" },
                { "feature": "আপনার বিরুদ্ধে বাজি", "exchange": "কখনও না (পিয়ার-টু-পিয়ার)", "traditional": "সর্বদা (হাউস)" }
            ]
        },
        "cta": {
            "text": "পছন্দটি স্পষ্ট: Exchange Sports সিরিয়াস বেটরদের জন্য উন্নত ভ্যালু, আরও নমনীয়তা এবং ভালো সুযোগ অফার করে।",
            "button": "পার্থক্যের অভিজ্ঞতা নিন"
        }
    },
    "mobile": {
        "title": "উন্নত ট্রেডিং প্রযুক্তি",
        "p1": "Exchange Sports প্রফেশনাল-গ্রেড ট্রেডিং টুলস সবার জন্য অ্যাক্সেসযোগ্য করে তোলে। প্ল্যাটফর্মটিতে রিয়েল-টাইম অডস আপডেট, উন্নত চার্টিং, ওয়ান-ক্লিক বেটিং এবং অত্যাধুনিক অর্ডার টাইপ রয়েছে যা আপনাকে প্রথম দিন থেকেই একজন প্রফেশনালের মতো ট্রেড করতে দেয়।",
        "p2": "মোবাইল অ্যাপটি আপনার স্মার্টফোনে সম্পূর্ণ এক্সচেঞ্জ অভিজ্ঞতা প্রদান করে। বাজি ধরুন, পজিশন মনিটর করুন, লাইভ অডস দেখুন এবং যেকোনো জায়গা থেকে মার্কেট ট্রেড করুন। অ্যাপটি তাৎক্ষণিক বেট প্লেসমেন্ট, ম্যাচড বেটের জন্য পুশ নোটিফিকেশন এবং ডিভাইস জুড়ে বিরামহীন সিঙ্ক্রোনাইজেশন সহ গতির জন্য অপ্টিমাইজ করা হয়েছে।",
        "features": ["নেটিভ iOS ও Android অ্যাপস", "বিদ্যুৎ-দ্রুত বেট প্লেসমেন্ট", "উন্নত চার্টিং ও অ্যানালিটিক্স", "রিয়েল-টাইম অডস আপডেট", "ওয়ান-ক্লিক ট্রেডিং ইন্টারফেস", "নিরাপদ ও এনক্রিপ্ট করা"]
    },
    "finalCta": {
        "title": "উন্নত বেটিং অভিজ্ঞতার জন্য প্রস্তুত?",
        "subtitle": "হাজার হাজার স্মার্ট বেটরদের সাথে যোগ দিন যারা ভালো অডস, আরও নমনীয়তা এবং তাদের বেটিংয়ের উপর অধিক নিয়ন্ত্রণের জন্য Exchange Sports-এ সুইচ করেছেন।",
        "start": "এখনই ট্রেডিং শুরু করুন",
        "learn": "আরও জানুন",
        "badges": ["নিশ্চিতভাবে ভালো অডস", "কোনো বেট লিমিট নেই", "প্রফেশনালের মতো ট্রেড করুন", "স্বল্প কমিশন"]
    }
};

// Check if providers keys exist, if not create them
if (!en.providers) en.providers = {};
if (!bn.providers) bn.providers = {};

en.providers.exchangeSports = exchangeSportsEN;
bn.providers.exchangeSports = exchangeSportsBN;

fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
fs.writeFileSync(bnPath, JSON.stringify(bn, null, 2));

console.log('Exchange Sports translation keys added/updated successfully.');
