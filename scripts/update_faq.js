import fs from 'fs';

const enPath = 'public/locales/en/translation.json';
const bnPath = 'public/locales/bn/translation.json';

const enFaq = [
    {
        "question": "How do live casino games work?",
        "answer": "Live casino games stream real-time video from professional studios. Real dealers manage physical equipment while you place bets through a digital interface. Advanced cameras capture every angle, and OCR technology reads results to display them on your screen instantly."
    },
    {
        "question": "Are live casino games fair and trustworthy?",
        "answer": "Yes, live casino games from reputable providers are completely fair. You can watch every action in real-time. Licensed providers are regularly audited by independent testing agencies, ensuring complete transparency."
    },
    {
        "question": "What internet speed do I need for live casino?",
        "answer": "A minimum of 2 Mbps is recommended for smooth streaming, but 5 Mbps or higher is ideal for HD quality. Most modern connections easily meet these requirements, and quality adjusts automatically."
    },
    {
        "question": "Can I play live casino games on mobile?",
        "answer": "Absolutely! All major providers offer mobile-optimized games for iOS and Android. The interfaces are touch-friendly and work seamlessly on smartphones and tablets."
    },
    {
        "question": "What are the minimum and maximum bets?",
        "answer": "Limits vary by table. Standard minimums range from $0.50 to $5, while VIP tables can require $100+. Maximums can reach $10,000+ on high-roller tables."
    },
    {
        "question": "Can I chat with the dealer?",
        "answer": "Yes! Live chat allows you to communicate with dealers and other players. Dealers often respond verbally or through text. Keep conversations friendly and respectful."
    },
    {
        "question": "What happens if my connection drops during a game?",
        "answer": "If you disconnect, your bets remain active and are settled according to the outcome. You'll see the results and updated balance when you reconnect."
    },
    {
        "question": "Are live casino games available 24/7?",
        "answer": "Most live casino tables operate 24/7 with dealers working in shifts. The game lobby shows currently open tables and player counts."
    },
    {
        "question": "Do I need to tip live dealers?",
        "answer": "Tipping is optional but appreciated. Many platforms have a 'tip dealer' button. It's more common after big wins, but there's never an obligation."
    },
    {
        "question": "Which live casino game is best for beginners?",
        "answer": "Baccarat, Roulette, and Dragon Tiger are excellent starting points due to their simple rules and straightforward betting options."
    }
];

const bnFaq = [
    {
        "question": "লাইভ ক্যাসিনো গেম কীভাবে কাজ করে?",
        "answer": "লাইভ ক্যাসিনো গেমগুলি পেশাদার স্টুডিও থেকে রিয়েল-টাইম ভিডিও স্ট্রিম করে। আপনি একটি ডিজিটাল ইন্টারফেসের মাধ্যমে বাজি ধরছেন এবং আসল ডিলাররা ফিজিক্যাল সরঞ্জাম পরিচালনা করেন। উন্নত ক্যামেরা প্রতিটি অ্যাঙ্গেল ক্যাপচার করে এবং ওসিআর প্রযুক্তি তাৎক্ষণিকভাবে ফলাফল আপনার স্ক্রিনে প্রদর্শন করে।"
    },
    {
        "question": "লাইভ ক্যাসিনো গেম কি ন্যায্য এবং বিশ্বস্ত?",
        "answer": "হ্যাঁ, নামী প্রোভাইডারদের লাইভ ক্যাসিনো গেমগুলি সম্পূর্ণ ন্যায্য। আপনি রিয়েল-টাইমে প্রতিটি অ্যাকশন দেখতে পারেন। লাইসেন্সপ্রাপ্ত প্রোভাইডার নিয়মিত অডিট করা হয়, যা সম্পূর্ণ স্বচ্ছতা নিশ্চিত করে।"
    },
    {
        "question": "লাইভ ক্যাসিনোর জন্য আমার ইন্টারনেটের গতি কত প্রয়োজন?",
        "answer": "মসৃণ স্ট্রিমিংয়ের জন্য ন্যূনতম ২ এমবিপিএস (Mbps) সুপারিশ করা হয়, তবে এইচডি কোয়ালিটির জন্য ৫ এমবিপিএস বা তার বেশি আদর্শ। বেশিরভাগ আধুনিক কানেকশন সহজেই এই শর্তাবলী পূরণ করে।"
    },
    {
        "question": "আমি কি মোবাইলে লাইভ ক্যাসিনো গেম খেলতে পারি?",
        "answer": "অবশ্যই! সমস্ত বড় প্রোভাইডার আইওএস (iOS) এবং অ্যান্ড্রয়েড (Android)-এর জন্য মোবাইল-অপ্টিমাইজড গেম অফার করে। ইন্টারফেসগুলি টাচ-ফ্রেন্ডলি এবং স্মার্টফোন ও ট্যাবলেটে নির্বিঘ্নে কাজ করে।"
    },
    {
        "question": "সর্বনিম্ন এবং সর্বোচ্চ বাজি কত?",
        "answer": "টেবিল ভেদে সীমা পরিবর্তিত হয়। স্ট্যান্ডার্ড মিনিমাম বাজি সাধারণত ৳৫০ থেকে ৳৫০০ পর্যন্ত হয়, যেখানে ভিআইপি টেবিলে অনেক বেশি বাজির প্রয়োজন হতে পারে।"
    },
    {
        "question": "আমি কি ডিলারের সাথে চ্যাট করতে পারি?",
        "answer": "হ্যাঁ! লাইভ চ্যাট হল লাইভ ক্যাসিনো গেমের একটি মূল বৈশিষ্ট্য। আপনি ডিলারদের বার্তা পাঠাতে পারেন যারা প্রায়শই মৌখিকভাবে বা পাঠ্যের মাধ্যমে উত্তর দেন। চ্যাট বন্ধুত্বপূর্ণ এবং সম্মানজনক রাখুন।"
    },
    {
        "question": "খেলার সময় আমার ইন্টারনেট সংযোগ বিচ্ছিন্ন হলে কি হবে?",
        "answer": "আপনি যদি একটি রাউন্ডের সময় সংযোগ বিচ্ছিন্ন হয়ে যান, আপনার বাজি সক্রিয় থাকে এবং ফলাফল অনুযায়ী নিষ্পত্তি করা হয়। আপনি যখন পুনরায় সংযোগ করবেন, তখন আপনি ফলাফল এবং আপডেট ব্যালেন্স দেখতে পাবেন।"
    },
    {
        "question": "লাইভ ক্যাসিনো গেম কি ২৪/৭ উপলব্ধ?",
        "answer": "বেশিরভাগ লাইভ ক্যাসিনো গেম ২৪/৭ কাজ করে এবং ডিলাররা শিফটে কাজ করেন। গেম লবি সর্বদা দেখায় কোন টেবিলগুলো বর্তমানে খোলা আছে।"
    },
    {
        "question": "আমাকে কি লাইভ ডিলারদের বকশিশ (tip) দিতে হবে?",
        "answer": "বকশিশ দেওয়া ঐচ্ছিক কিন্তু প্রশংসনীয়। অনেক প্ল্যাটফর্মে একটি 'টিপ ডিলার' বোতাম থাকে। টিপ দেওয়া আনন্দদায়ক হতে পারে বিশেষ করে বড় জয়ের পরে, কিন্তু কোনো বাধ্যবাধকতা নেই।"
    },
    {
        "question": "নতুনদের জন্য কোন লাইভ ক্যাসিনো গেমটি সবচেয়ে ভালো?",
        "answer": "ব্যাকার্যাট, রুলেট এবং ড্রাগন টাইগার তাদের সহজ নিয়মের কারণে নতুনদের জন্য চমৎকার শুরুর পয়েন্ট।"
    }
];

function updateFaq(path, faq) {
    const data = JSON.parse(fs.readFileSync(path, 'utf8'));
    if (data.liveCasinoGuide) {
        if (!data.liveCasinoGuide.faq) data.liveCasinoGuide.faq = {};
        data.liveCasinoGuide.faq.items = faq;
    }
    fs.writeFileSync(path, JSON.stringify(data, null, 4), 'utf8');
    console.log(`Updated FAQ in ${path}`);
}

updateFaq(enPath, enFaq);
updateFaq(bnPath, bnFaq);
