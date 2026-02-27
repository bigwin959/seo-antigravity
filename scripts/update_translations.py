
import json
import os

def update_json(file_path, updates):
    print(f"Updating {file_path}...")
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    data.update(updates)
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"Finished updating {file_path}")

en_updates = {
    'guidesPage': {
        'seo': {
            'title': 'BIGWIN959 Guides & Tutorials – Registration, Deposit, App',
            'description': 'Complete guide hub for BIGWIN959. Learn how to register, deposit with bKash/Nagad, withdraw winnings, and download the mobile app.'
        },
        'hero': {
            'title': 'BIGWIN959 Guides & Tutorials',
            'subtitle': 'Master the platform with our detailed, step-by-step guides designed for players in Bangladesh and Myanmar.'
        },
        'categories': {
            'registration': 'Registration',
            'payment': 'Payment',
            'app': 'App',
            'sports': 'Sports',
            'gameplay': 'Gameplay'
        },
        'readGuide': 'Read Guide',
        'footer': {
            'title': "Can't find what you need?",
            'desc': 'Check the FAQ section on the home page or contact official support.',
            'cta': 'Go to FAQ'
        }
    },
    'registrationGuide': {
        'seo': {
            'title': 'How to Register on BIGWIN959 (Step-by-Step) – Bangladesh & Myanmar',
            'description': 'Official-style registration guide for BIGWIN959. Learn how to create an account, verify your phone number, and solve common login issues.'
        },
        'hero': {
            'badge': 'Official Guide 2025',
            'title': 'How to Register on BIGWIN959',
            'subtitle': 'Creating an account is the first step to accessing BIGWIN959’s sports, cricket, and casino games. This guide covers the signup process for users in Bangladesh and Myanmar.',
            'cta': 'Register Now'
        },
        'requirements': {
            'title': 'What You Need to Start',
            'items': [
                {'t': 'Valid Mobile Number', 'd': 'Required for login & verification.'},
                {'t': 'Secure Password', 'd': 'Mix of letters & numbers recommended.'},
                {'t': 'Device', 'd': 'Smartphone (Android/iOS) or PC.'},
                {'t': 'Internet', 'd': 'Stable 4G or Wi-Fi connection.'}
            ],
            'safe': {
                'title': 'Safe & Secure',
                'desc': 'Your data is protected. Always ensure you are on the official domain:'
            }
        },
        'steps': {
            'title': 'Step-by-Step Registration Guide',
            's1': {'title': 'Visit the Official Platform', 'desc': 'Open your browser (Chrome recommended) and navigate to the official website.'},
            's2': {'title': "Click 'Register' or 'Sign Up'", 'desc': 'Look for the yellow/gold button typically located at the top right of the screen or in the center of the welcome banner.'},
            's3': {
                'title': 'Fill in Your Details',
                'phone': {'label': 'Phone Number', 'desc': "Enter your active mobile number. Do not add '0' at the start if the country code +880 or +95 is already shown."},
                'pass': {'label': 'Password', 'desc': 'Create a strong password (6-20 chars). Combine letters and numbers for security.'}
            },
            's4': {
                'title': 'Verification (OTP)',
                'desc': "Click 'Get Code'. You will receive an SMS with a 4-6 digit code. Enter this code to verify you are a real user.",
                'warning': "If OTP doesn't arrive in 60s, wait and click 'Resend'."
            },
            's5': {
                'title': 'Finalize & Login',
                'desc': "Click 'Confirm' or 'Register' to finish. You will be logged in automatically. We recommend exploring the 'Profile' section to set your withdrawal PIN immediately."}
        },
        'commonIssues': {
            'title': 'Common Registration Issues',
            'items': [
                {'t': 'OTP Not Received', 'd': 'Check your network signal. Ensure your phone inbox isn\'t full. Try restarting your phone.'},
                {'t': 'User Already Exists', 'd': "This number is already registered. Try logging in or use the 'Forgot Password' feature."},
                {'t': 'Page Not Loading', 'd': 'Clear browser cache or try a different browser. Use a VPN if your ISP is blocking access.'}
            ]
        },
        'faq': {
            'title': 'Frequently Asked Questions',
            'items': [
                {'q': 'Is it free to register?', 'a': 'Yes, account creation is 100% free.'},
                {'q': 'Can I register multiple accounts?', 'a': 'No. BIGWIN959 allows only one account per person/IP to prevent fraud. Multiple accounts may be banned.'},
                {'q': 'Do I need to verify my identity immediately?', 'a': 'Not for registration, but you may need to verify your phone number or add a withdrawal PIN before cashing out.'},
                {'q': 'Can I register from the mobile app?', 'a': 'Yes, the process on the app is identical to the website.'}
            ]
        },
        'cta': {
            'title': 'Ready to Join?',
            'button': 'Create Account',
            'bonuses': 'View Welcome Bonuses'
        }
    },
    'blogPage': {
        'seo': {
            'title': 'BIGWIN959 Blog - News, Tips & Strategies',
            'description': 'Stay updated with the latest news, game strategies, and cricket betting tips from the BIGWIN959 blog.'
        },
        'title': 'Latest News & Articles',
        'readMore': 'Read More'
    }
}

bn_updates = {
    'guidesPage': {
        'seo': {
            'title': 'BIGWIN959 গাইড ও টিউটোরিয়াল – রেজিস্ট্রেশন, ডিপোজিট, অ্যাপ',
            'description': 'BIGWIN959-এর সম্পূর্ণ গাইড হাব। কীভাবে রেজিস্ট্রেশন করবেন, bKash/Nagad দিয়ে ডিপোজিট করবেন, জয়ী টাকা উত্তোলন করবেন এবং মোবাইল অ্যাপ ডাউনলোড করবেন তা শিখুন।'
        },
        'hero': {
            'title': 'BIGWIN959 গাইড ও টিউটোরিয়াল',
            'subtitle': 'বাংলাদেশ এবং মিয়ানমারের খেলোয়াড়দের জন্য ডিজাইন করা আমাদের বিস্তারিত, ধাপে ধাপে গাইডের মাধ্যমে প্ল্যাটফর্মটি আয়ত্ত করুন।'
        },
        'categories': {
            'registration': 'রেজিস্ট্রেশন',
            'payment': 'পেমেন্ট',
            'app': 'অ্যাপ',
            'sports': 'স্পোর্টস',
            'gameplay': 'গেমপ্লে'
        },
        'readGuide': 'গাইড পড়ুন',
        'footer': {
            'title': 'আপনার যা প্রয়োজন তা খুঁজে পাচ্ছেন না?',
            'desc': 'হোম পেজের FAQ সেকশনটি দেখুন বা অফিসিয়াল সাপোর্টের সাথে যোগাযোগ করুন।',
            'cta': 'FAQ-তে যান'
        }
    },
    'registrationGuide': {
        'seo': {
            'title': 'কীভাবে BIGWIN959-এ রেজিস্ট্রেশন করবেন (ধাপে ধাপে) – বাংলাদেশ ও মিয়ানমার',
            'description': 'BIGWIN959-এর জন্য অফিসিয়াল স্টাইলের রেজিস্ট্রেশন গাইড। কীভাবে একটি অ্যাকাউন্ট তৈরি করবেন, আপনার ফোন নম্বর ভেরিফাই করবেন এবং সাধারণ লগইন সমস্যা সমাধান করবেন তা শিখুন।'
        },
        'hero': {
            'badge': 'অফিসিয়াল গাইড ২০২৫',
            'title': 'কীভাবে BIGWIN959-এ রেজিস্ট্রেশন করবেন',
            'subtitle': 'অ্যাকাউন্ট তৈরি করা BIGWIN959-এর স্পোর্টস, ক্রিকেট এবং ক্যাসিনো গেমগুলি অ্যাক্সেস করার প্রথম ধাপ। এই গাইডটি বাংলাদেশ এবং মিয়ানমারের ব্যবহারকারীদের জন্য সাইনআপ প্রক্রিয়াটি কভার করে।',
            'cta': 'এখনই রেজিস্ট্রেশন করুন'
        },
        'requirements': {
            'title': 'শুরু করতে আপনার যা প্রয়োজন',
            'items': [
                {'t': 'বৈধ মোবাইল নম্বর', 'd': 'লগইন এবং ভেরিফিকেশনের জন্য প্রয়োজন।'},
                {'t': 'সুরক্ষিত পাসওয়ার্ড', 'd': 'অক্ষর এবং সংখ্যার মিশ্রণের পরামর্শ দেওয়া হয়।'},
                {'t': 'ডিভাইস', 'd': 'স্মার্টফোন (অ্যান্ড্রয়েড/আইওএস) বা পিসি।'},
                {'t': 'ইন্টারনেট', 'd': 'স্থিতিশীল ৪জি বা ওয়াই-ফাই কানেকশন।'}
            ],
            'safe': {
                'title': 'নিরাপদ ও সুরক্ষিত',
                'desc': 'আপনার ডেটা সুরক্ষিত। সর্বদা নিশ্চিত করুন যে আপনি অফিসিয়াল ডোমেইনে আছেন:'
            }
        },
        'steps': {
            'title': 'ধাপে ধাপে রেজিস্ট্রেশন গাইড',
            's1': {'title': 'অফিসিয়াল প্ল্যাটফর্মে যান', 'desc': 'আপনার ব্রাউজার (ক্রোম বাঞ্ছনীয়) খুলুন এবং অফিসিয়াল ওয়েবসাইটে যান।'},
            's2': {'title': "'রেজিস্ট্রেশন' বা 'সাইন আপ' ক্লিক করুন", 'desc': 'সাধারণত স্ক্রিনের উপরে ডানদিকে বা ওয়েলকাম ব্যানারের মাঝখানে থাকা হলুদ/সোনালী বাটনটি খুঁজুন।'},
            's3': {
                'title': 'আপনার তথ্য পূরণ করুন',
                'phone': {'label': 'ফোন নম্বর', 'desc': "আপনার সক্রিয় মোবাইল নম্বর লিখুন। যদি কান্ট্রি কোড +৮৮০ বা +৯৫ ইতিমধ্যে দেখানো হয় তবে শুরুতে '০' যোগ করবেন না।"},
                'pass': {'label': 'পাসওয়ার্ড', 'desc': 'একটি শক্তিশালী পাসওয়ার্ড তৈরি করুন (৬-২০ অক্ষর)। নিরাপত্তার জন্য অক্ষর এবং সংখ্যা সংমিশ্রণ করুন।'}
            },
            's4': {
                'title': 'ভেরিফিকেশন (OTP)',
                'desc': "'কোড পান' ক্লিক করুন। আপনি ৪-৬ ডিজিটের একটি কোড সহ একটি এসএমএস পাবেন। আপনি যে একজন আসল ব্যবহারকারী তা ভেরিফাই করতে এই কোডটি লিখুন।",
                'warning': "যদি ৬০ সেকেন্ডের মধ্যে OTP না আসে, তবে অপেক্ষা করুন এবং 'পুনরায় পাঠান' ক্লিক করুন।"
            },
            's5': {
                'title': 'সম্পন্ন করুন ও লগইন করুন',
                'desc': "শেষ করতে 'নিশ্চিত করুন' বা 'রেজিস্ট্রেশন' ক্লিক করুন। আপনি স্বয়ংক্রিয়ভাবে লগইন হয়ে যাবেন। আমরা অবিলম্বে আপনার উইথড্র PIN সেট করতে 'প্রোফাইল' সেকশনটি দেখার পরামর্শ দিই।"}
        },
        'commonIssues': {
            'title': 'সাধারণ রেজিস্ট্রেশন সমস্যা',
            'items': [
                {'t': 'OTP পাওয়া যায়নি', 'd': 'আপনার নেটওয়ার্ক সিগন্যাল চেক করুন। আপনার ফোনের ইনবক্স পূর্ণ নয় তা নিশ্চিত করুন। আপনার ফোনটি রিস্টার্ট করার চেষ্টা করুন।'},
                {'t': 'ব্যবহারকারী ইতিমধ্যে বিদ্যমান', 'd': "এই নম্বরটি ইতিমধ্যে নিবন্ধিত। লগইন করার চেষ্টা করুন বা 'পাসওয়ার্ড ভুলে গেছেন' ফিচারটি ব্যবহার করুন।"},
                {'t': 'পেজ লোড হচ্ছে না', 'd': 'ব্রাউজার ক্যাশে পরিষ্কার করুন বা অন্য ব্রাউজার ট্রাই করুন। যদি আপনার ISP অ্যাক্সেস ব্লক করে থাকে তবে একটি VPN ব্যবহার করুন।'}
            ]
        },
        'faq': {
            'title': 'সচরাচর জিজ্ঞাসিত প্রশ্নাবলী',
            'items': [
                {'q': 'রেজিস্ট্রেশন করা কি ফ্রি?', 'a': 'হ্যাঁ, অ্যাকাউন্ট তৈরি ১০০% ফ্রি।'},
                {'q': 'আমি কি একাধিক অ্যাকাউন্ট রেজিস্ট্রেশন করতে পারি?', 'a': 'না। প্রতারণা রোধ করতে BIGWIN959 জনপ্রতি/আইপি প্রতি মাত্র একটি অ্যাকাউন্টের অনুমতি দেয়। একাধিক অ্যাকাউন্ট নিষিদ্ধ হতে পারে।'},
                {'q': 'আমাকে কি অবিলম্বে আমার পরিচয় ভেরিফাই করতে হবে?', 'a': 'রেজিস্ট্রেশনের জন্য নয়, তবে টাকা তোলার আগে আপনাকে আপনার ফোন নম্বর ভেরিফাই করতে হতে পারে বা একটি উইথড্র PIN যোগ করতে হতে পারে।'},
                {'q': 'আমি কি মোবাইল অ্যাপ থেকে রেজিস্ট্রেশন করতে পারি?', 'a': 'হ্যাঁ, অ্যাপের প্রক্রিয়াটি ওয়েবসাইটের মতোই।'}
            ]
        },
        'cta': {
            'title': 'যোগ দিতে প্রস্তুত?',
            'button': 'অ্যাকাউন্ট তৈরি করুন',
            'bonuses': 'ওয়েলকাম বোনাস দেখুন'
        }
    },
    'blogPage': {
        'seo': {
            'title': 'BIGWIN959 ব্লগ - খবর, টিপস এবং কৌশল',
            'description': 'BIGWIN959 ব্লগ থেকে লেটেস্ট খবর, গেমের কৌশল এবং ক্রিকেট বেটিং টিপস সম্পর্কে আপডেট থাকুন।'
        },
        'title': 'লেটেস্ট খবর এবং নিবন্ধ',
        'readMore': 'আরও পড়ুন'
    }
}

update_json('public/locales/en/translation.json', en_updates)
update_json('public/locales/bn/translation.json', bn_updates)
