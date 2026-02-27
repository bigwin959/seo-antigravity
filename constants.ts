import { NavItem, BlogPost, GameProvider, GuideItem } from './types';

export const BRAND_NAME = "Bigwin959";
export const OFFICIAL_DOMAIN = "https://bigwin959.vip";
export const SITE_URL = "https://bigwinofficial.com";

// Logo URL - UPDATE THIS WITH YOUR ACTUAL LOGO
export const LOGO_URL = "https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767784202/icon.png";

// Customer Service Contact Links - UPDATE THESE WITH YOUR ACTUAL LINKS
export const CONTACT_INFO = {
  telegram: "https://t.me/Superbigwin959_bot", // Replace with your Telegram link
  whatsapp: "https://wa.me/qr/D5GWP3SEIXKSI1", // Replace with your WhatsApp number (format: https://wa.me/8801234567890)
  facebook: "https://www.facebook.com/profile.php?id=61583011913678", // Replace with your Facebook page
  email: "support@bigwin959.vip", // Replace with your support email
  livechat: "https://bigwin959.vip", // Replace with your live chat URL
};

export const NAVIGATION: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Bonuses',
    path: '/bonuses',
    subItems: [
      { label: "Today's Promotions", path: '/bonuses/today' },
      { label: 'First Deposit', path: '/bonuses/first-deposit' },
      { label: 'Daily Bonus', path: '/bonuses/daily' },
      { label: 'VIP Program', path: '/bonuses/vip' }
    ]
  },
  {
    label: 'Guides',
    path: '/guides',
    subItems: [
      { label: 'Registration Guide', path: '/guides/registration' },
      { label: 'Deposit Guide', path: '/guides/deposit' },
      { label: 'Withdrawal Guide', path: '/guides/withdrawal' },
      { label: 'Sports Betting Guide', path: '/guides/sports-betting' },
      { label: 'Cricket Betting Guide', path: '/guides/cricket' },
      { label: 'Live Casino Guide', path: '/guides/live-casino' },
      { label: 'App Download', path: '/app-download' },
      { label: '---', path: '#' }, // Divider
      { label: 'Platform Comparisons', path: '/comparisons' },
      { label: 'Bet365 vs Bigwin959', path: '/comparisons/bet365-bangladesh-review' },
      { label: '1xBet vs Bigwin959', path: '/comparisons/1xbet-bangladesh-review' }
    ]
  },
  {
    label: 'Providers',
    path: '/providers',
    subItems: [
      { label: 'Pragmatic Play', path: '/providers/pragmatic' },
      { label: 'JILI', path: '/providers/jili' },
      { label: 'JDB', path: '/providers/jdb' },
      { label: 'FC (Fa Chai)', path: '/providers/fc' },
      { label: 'BNG (Booongo)', path: '/providers/bng' },
      { label: 'Spribe (SPB)', path: '/providers/spribe' },
      { label: 'BT Gaming', path: '/providers/bt' },
      { label: 'PG Soft (PG)', path: '/providers/pgsoft' },
      { label: 'Exchange Sports', path: '/providers/exchange-sports' },
      { label: 'IBC Sports', path: '/providers/ibc-sports' },
      { label: 'SBO Sports', path: '/providers/sbo-sports' },
      { label: 'Evolution Gaming', path: '/providers/evolution-gaming' },
      { label: 'SA Gaming', path: '/providers/sa-gaming' },
      { label: 'Sexy Gaming', path: '/providers/sexy-gaming' }
    ]
  },
  { label: 'Affiliate', path: '/affiliate' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export const LATEST_BLOGS: BlogPost[] = [
  {
    id: 'bkash-vs-nagad',
    title: 'bKash vs Nagad: The Ultimate Betting Payment Comparison (2025)',
    excerpt: 'We analyzed fees, uptime, and limits to decide the winner. Save money on every Cash Out with this guide.',
    date: '2025-01-12',
    imageUrl: 'https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767000507/payment.png',
    slug: 'bkash-vs-nagad-betting-payment-comparison'
  },
  {
    id: '1',
    title: "Bigwin959 Beginner's Guide: How New Players in Bangladesh & Myanmar Should Start (2025)",
    excerpt: 'Complete starter guide for new players. Learn registration, deposits, bonuses, and responsible gaming from day one.',
    date: '2025-01-10',
    imageUrl: 'https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767000507/platform-guide.png',
    slug: 'beginners-guide-bd-mm-2025'
  },
  {
    id: '2',
    title: 'Online Gaming in Bangladesh: How Bigwin959 Fits Local Payment & Player Needs',
    excerpt: 'Why Bangladeshi players prefer bKash, Nagad, and Rocket. Complete guide to local payment methods and popular games.',
    date: '2025-01-08',
    imageUrl: 'https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767000506/online-gaming-bangladesh.png',
    slug: 'online-gaming-bangladesh-local-payments'
  },
  {
    id: '3',
    title: 'Online Gaming in Myanmar: Using KBZPay & WavePay Safely with Bigwin959',
    excerpt: 'Complete guide for Myanmar players using KBZPay and WavePay. Game preferences, safety tips, and currency management.',
    date: '2025-01-06',
    imageUrl: 'https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767000505/myanmar-kbzpay.png',
    slug: 'myanmar-kbzpay-wavepay-guide'
  },
  {
    id: '4',
    title: 'What Are RTP & Volatility in Slot Games? Simple Explanation for Bigwin959 Players',
    excerpt: 'Understand why some slots "eat money" and others feel "soft". Learn RTP and volatility to choose games wisely.',
    date: '2025-01-04',
    imageUrl: 'https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767000510/rtp.png',
    slug: 'rtp-volatility-slots-explained'
  },
  {
    id: '5',
    title: "Aviator Game in Bangladesh & Myanmar: Myths, Facts & Responsible Tips",
    excerpt: 'Debunking Aviator myths and fake "fixed patterns". Learn the truth about RNG and how to play responsibly.',
    date: '2025-01-02',
    imageUrl: 'https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767000487/aviator.jpg',
    slug: 'aviator-myths-facts-responsible-tips'
  },
  {
    id: '6',
    title: "Cricket Betting Tips for Beginners on Bigwin959 (Without Fake 'Sure Win' Tricks)",
    excerpt: 'Honest cricket betting guide for BD & MM players. Learn markets, bankroll management, and what NOT to do.',
    date: '2024-12-30',
    imageUrl: 'https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767000492/cricket-tips.jpg',
    slug: 'cricket-betting-tips-beginners-honest'
  },
  {
    id: '7',
    title: 'Bigwin959 App vs Mobile Browser: Which Is Better for BD & MM Players?',
    excerpt: 'Compare Android app vs mobile browser. Performance, security, and which option works best for your device.',
    date: '2024-12-28',
    imageUrl: 'https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767000485/app-browser.png',
    slug: 'app-vs-browser-comparison'
  },
  {
    id: '8',
    title: 'Why Is My Deposit or Withdrawal Delayed on Bigwin959? Common Issues for BD & MM Players',
    excerpt: 'Troubleshoot deposit and withdrawal delays. Common problems with bKash, Nagad, KBZPay, and how to fix them.',
    date: '2024-12-26',
    imageUrl: 'https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767000507/payment.png',
    slug: 'payment-troubleshooting-delays'
  },
  {
    id: '9',
    title: '10 Common Mistakes Bigwin959 Players Make (And How to Avoid Them)',
    excerpt: 'Learn from others mistakes. From chasing losses to ignoring bonus terms - avoid these 10 common pitfalls.',
    date: '2024-12-24',
    imageUrl: 'https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767000489/common-mistakes.png',
    slug: '10-common-mistakes-avoid'
  },
  {
    id: '10',
    title: 'How to Check If an Online Gaming Site Is Safe: A Checklist for BD & MM Players',
    excerpt: 'Safety checklist before depositing anywhere. Learn to spot scams and verify legitimate platforms using Bigwin959 as example.',
    date: '2024-12-22',
    imageUrl: 'https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767000511/safety.png',
    slug: 'safety-checklist-online-gaming'
  }
];

export const PROVIDERS: GameProvider[] = [
  { name: 'Exchange Sports', description: 'Peer-to-peer betting exchange offering better odds and unique betting opportunities.', features: ['Betting Exchange', 'Lay Betting', 'Best Odds'], logo: 'https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767000388/bigwin959/providers/lucky-exchange.png', website: 'https://luckysports.cloud/' },
  { name: 'IBC Sports', description: 'Leading Asian sportsbook platform with comprehensive sports coverage and competitive odds.', features: ['Live Betting', 'Asian Handicap', 'Multiple Sports'], logo: 'https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767000392/bigwin959/providers/saba.png', website: 'https://www.sabab2b.com/en-US' },
  { name: 'SBO Sports', description: 'Premium sports betting provider with extensive markets and live streaming capabilities.', features: ['Live Streaming', 'Cash Out', 'Virtual Sports'], logo: 'https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767000392/bigwin959/providers/sbo.png', website: 'https://www.sbobet.com/' },
  { name: 'Pragmatic Play', description: 'Leading content provider known for Drops & Wins.', features: ['High RTP', 'Mobile First'], logo: 'https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767000390/bigwin959/providers/pp.png', website: 'https://www.pragmaticplay.com/en/' },
  { name: 'JILI', description: 'Famous for engaging fishing and slot games.', features: ['Jackpots', '3D Graphics'], logo: 'https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767000388/bigwin959/providers/jili.png', website: 'https://jiligames.com/' },
  { name: 'JDB', description: 'Top tier asian market games.', features: ['Classic Style', 'Fast Play'], logo: 'https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767000387/bigwin959/providers/jdb.png', website: 'https://www.jdbgaming.com/en/' },
  { name: 'FC Games', description: 'Fast-paced crash, slots, and arcade games.', features: ['Crash Games', 'Instant Wins'], logo: 'https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767000386/bigwin959/providers/FC.png', website: 'https://fachaigaming.com/' },
  { name: 'BNG (Booongo)', description: 'Innovative HTML5 slot provider with unique mechanics and stunning graphics.', features: ['HTML5 Technology', 'Unique Features', 'Mobile Optimized'], logo: 'https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767000384/bigwin959/providers/bng.png', website: 'https://booongo.com/' },
  { name: 'Spribe (SPB)', description: 'Pioneer of next-generation turbo games and crash mechanics, creators of Aviator.', features: ['Turbo Games', 'Crash Mechanics', 'Social Gaming'], logo: 'https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767000394/bigwin959/providers/spribe.png', website: 'https://spribe.co/' },
  { name: 'PG Soft (PG)', description: 'Premium mobile-first slot developer with cinematic graphics and innovative gameplay mechanics.', features: ['Mobile First', 'Cinematic Graphics', 'Innovative Features'], logo: 'https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767000389/bigwin959/providers/pg.png', website: 'https://www.pgsoft.com/en/' },
  { name: 'BT Gaming', description: 'Innovative slot developer specializing in unique mechanics and engaging gameplay experiences.', features: ['Unique Mechanics', 'High Engagement', 'Creative Themes'], logo: 'https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767000384/bigwin959/providers/bt.png', website: 'https://btgaming.com/' },
  { name: 'Evolution Gaming', description: 'World\'s leading live casino provider with innovative game shows and professional dealers.', features: ['Live Casino', 'Game Shows', 'HD Streaming'], logo: 'https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767000385/bigwin959/providers/evolution.png', website: 'https://www.evolution.com/' },
  { name: 'SA Gaming', description: 'Asian-focused live casino provider with traditional games and cultural authenticity.', features: ['Asian Games', 'Dragon Tiger', 'Multilingual'], logo: 'https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767000391/bigwin959/providers/sa.png', website: 'https://www.sagaming.com/' },
  { name: 'Sexy Gaming', description: 'Premium live casino experience with attractive dealers and high-quality streaming.', features: ['Premium Experience', 'HD Streaming', 'VIP Tables'], logo: 'https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767000393/bigwin959/providers/sexy.png' },
];

export const GUIDES_LIST: GuideItem[] = [
  { title: 'How to Register on Bigwin959', category: 'Registration', slug: 'how-to-register' },
  { title: 'How to Login (BD / MM)', category: 'Registration', slug: 'how-to-login' },
  { title: 'How to Deposit (bKash, Nagad)', category: 'Payment', slug: 'how-to-deposit' },
  { title: 'How to Withdraw Winnings', category: 'Payment', slug: 'how-to-withdraw' },
  { title: 'Complete Sports Betting Guide', category: 'Sports', slug: 'sports-betting-guide' },
  { title: 'How to Install App (Android/iOS)', category: 'App', slug: 'install-app' },
  { title: 'How to Play Aviator', category: 'Gameplay', slug: 'play-aviator' },
];