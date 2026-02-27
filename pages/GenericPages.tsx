import React, { useState, useEffect } from 'react';
import { LocalizedLink } from '../components/LocalizedLink';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { Breadcrumbs } from '../components/Section';
import { PROVIDERS, GUIDES_LIST, LATEST_BLOGS, OFFICIAL_DOMAIN } from '../constants';
import {
    CheckCircle,
    Smartphone,
    ArrowRight,
    Trophy,
    ShieldCheck,
    UserPlus,
    CreditCard,
    Gamepad2,
    Activity,
    Target,
    Globe,
    Zap,
    AlertTriangle,
    AlertCircle,
    HelpCircle,
    Lock,
    ExternalLink
} from 'lucide-react';

const safeMap = (data: any) => Array.isArray(data) ? data : [];

/* --- GUIDES PAGE --- */
export const GuidesPage: React.FC = () => {
    const { t } = useTranslation();
    return (
        <>
            <SEO metadata={{
                title: t('guidesPage.seo.title'),
                description: t('guidesPage.seo.description'),
                ogType: 'website',
                schema: {
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": t('guidesPage.seo.title'),
                    "description": t('guidesPage.seo.description'),
                    "mainEntity": {
                        "@type": "ItemList",
                        "itemListElement": GUIDES_LIST.map((guide, i) => ({
                            "@type": "ListItem",
                            "position": i + 1,
                            "url": "https://bigwinofficial.com" + (
                                guide.slug === 'install-app' ? '/app-download' :
                                    guide.slug === 'how-to-deposit' ? '/guides/deposit' :
                                        guide.slug === 'how-to-withdraw' ? '/guides/withdrawal' :
                                            guide.slug === 'how-to-register' ? '/guides/registration' :
                                                guide.slug === 'play-aviator' ? '/guides/aviator-game' :
                                                    guide.slug === 'sports-betting-guide' ? '/guides/sports-betting' :
                                                        '#'
                            ),
                            "name": guide.title
                        }))
                    }
                }
            }} />
            <Breadcrumbs items={[{ label: t('nav.guides'), path: '/guides' }]} />
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-white mb-4">{t('guidesPage.hero.title')}</h1>
                <p className="text-gray-400 mb-10 max-w-2xl text-lg">
                    {t('guidesPage.hero.subtitle')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {GUIDES_LIST.map((guide, idx) => (
                        <LocalizedLink
                            key={idx}
                            to={
                                guide.slug === 'install-app' ? '/app-download' :
                                    guide.slug === 'how-to-deposit' ? '/guides/deposit' :
                                        guide.slug === 'how-to-withdraw' ? '/guides/withdrawal' :
                                            guide.slug === 'how-to-register' ? '/guides/registration' :
                                                guide.slug === 'play-aviator' ? '/guides/aviator-game' :
                                                    guide.slug === 'sports-betting-guide' ? '/guides/sports-betting' :
                                                        '#'
                            }
                            className="text-center group"
                        >
                            <div className="flex justify-center mb-3">
                                <div className="w-12 h-12 rounded-lg bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                                    {guide.category === 'Registration' ? <UserPlus className="w-6 h-6 text-brand" /> :
                                        guide.category === 'Payment' ? <CreditCard className="w-6 h-6 text-brand" /> :
                                            guide.category === 'App' ? <Smartphone className="w-6 h-6 text-brand" /> :
                                                guide.category === 'Sports' ? <Trophy className="w-6 h-6 text-brand" /> :
                                                    <Gamepad2 className="w-6 h-6 text-brand" />}
                                </div>
                            </div>
                            <div className="mb-2">
                                <span className="inline-block text-[10px] font-bold text-gray-500 uppercase tracking-wide">
                                    {guide.category === 'Registration' ? t('guidesPage.categories.registration') :
                                        guide.category === 'Payment' ? t('guidesPage.categories.payment') :
                                            guide.category === 'App' ? t('guidesPage.categories.app') :
                                                guide.category === 'Sports' ? t('guidesPage.categories.sports') :
                                                    t('guidesPage.categories.gameplay')}
                                </span>
                            </div>
                            <h3 className="text-base font-bold text-white mb-3 group-hover:text-brand transition-colors">{guide.title}</h3>
                            <div className="flex items-center justify-center text-brand/80 font-bold text-xs uppercase tracking-wider group-hover:text-brand">
                                {t('guidesPage.readGuide')} <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </LocalizedLink>
                    ))}
                </div>

                <div className="mt-16 text-center border-t border-gray-800 pt-12">
                    <h3 className="text-2xl font-bold text-white mb-3">{t('guidesPage.footer.title')}</h3>
                    <p className="text-gray-400 mb-6 text-sm">{t('guidesPage.footer.desc')}</p>
                    <LocalizedLink to="/" className="bg-brand hover:bg-yellow-300 text-black font-bold py-3 px-8 rounded-full transition-colors inline-block">
                        {t('guidesPage.footer.cta')}
                    </LocalizedLink>
                </div>
            </div>
        </>
    );
};

/* --- REGISTRATION GUIDE PAGE --- */
export const RegistrationGuidePage: React.FC = () => {
    const { t } = useTranslation();
    return (
        <>
            <SEO metadata={{
                title: t('registrationGuide.seo.title'),
                description: t('registrationGuide.seo.description'),
                ogType: 'article',
                publishedTime: '2025-01-01T00:00:00+06:00',
                modifiedTime: new Date().toISOString(),
                author: 'BIGWIN959 Guide',
                schema: {
                    "@context": "https://schema.org",
                    "@type": "HowTo",
                    "name": t('registrationGuide.seo.title'),
                    "description": t('registrationGuide.seo.description'),
                    "step": [
                        { "@type": "HowToStep", "position": 1, "name": "Visit Official Site", "text": "Go to BIGWIN959.vip" },
                        { "@type": "HowToStep", "position": 2, "name": "Click Register", "text": "Click the Sign Up button" },
                        { "@type": "HowToStep", "position": 3, "name": "Enter Details", "text": "Fill in phone number and password" },
                        { "@type": "HowToStep", "position": 4, "name": "Verify OTP", "text": "Enter the SMS code received" },
                        { "@type": "HowToStep", "position": 5, "name": "Confirm", "text": "Complete registration and login" }
                    ]
                }
            }} />
            <Breadcrumbs items={[{ label: t('nav.guides'), path: '/guides' }, { label: t('nav.registration'), path: '/guides/registration' }]} />

            <div className="max-w-5xl mx-auto px-4 py-8 space-y-12">

                {/* HERO / INTRO */}
                <section className="bg-gray-900/50 rounded-3xl border border-gray-800 p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-[100px] rounded-full pointer-events-none"></div>
                    <div className="relative z-10">
                        <span className="inline-block px-3 py-1 bg-brand/10 text-brand text-xs font-bold rounded-full mb-4 uppercase tracking-widest border border-brand/20">{t('registrationGuide.hero.badge')}</span>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                            {t('registrationGuide.hero.title')}
                        </h1>
                        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                            {t('registrationGuide.hero.subtitle')}
                        </p>
                        <a href={OFFICIAL_DOMAIN} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-2 bg-brand hover:bg-white text-black font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-brand/20">
                            {t('registrationGuide.hero.cta')} <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </section>

                {/* SECTION 1: REQUIREMENTS */}
                <section className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-white mb-6">{t('registrationGuide.requirements.title')}</h3>
                        <ul className="space-y-4">
                            {safeMap(t('registrationGuide.requirements.items', { returnObjects: true })).map((item: any, i: number) => (
                                <li key={i} className="flex gap-4">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-gray-900 border border-gray-600 flex items-center justify-center text-brand text-xs font-bold flex-shrink-0">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">{item.t}</h4>
                                        <p className="text-gray-400 text-xs">{item.d}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 flex items-center justify-center relative">
                        <div className="text-center">
                            <ShieldCheck className="w-24 h-24 text-brand/20 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">{t('registrationGuide.requirements.safe.title')}</h3>
                            <p className="text-gray-500 text-sm max-w-xs mx-auto">
                                {t('registrationGuide.requirements.safe.desc')}
                                <span className="text-brand block mt-1">BIGWIN959.vip</span>
                            </p>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: STEP BY STEP GUIDE */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-8">{t('registrationGuide.steps.title')}</h2>
                    <div className="space-y-6">

                        {/* Step 1 */}
                        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 flex flex-col md:flex-row gap-6 hover:border-brand/30 transition-colors">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-brand text-black font-bold text-xl rounded-xl flex items-center justify-center shadow-lg">1</div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{t('registrationGuide.steps.s1.title')}</h3>
                                <p className="text-gray-400 mb-3 text-sm">{t('registrationGuide.steps.s1.desc')}</p>
                                <div className="bg-gray-900 p-3 rounded-lg border border-gray-800 inline-block">
                                    <code className="text-brand font-mono">BIGWIN959.vip</code>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 flex flex-col md:flex-row gap-6 hover:border-brand/30 transition-colors">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-gray-700 text-white font-bold text-xl rounded-xl flex items-center justify-center border border-gray-600">2</div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{t('registrationGuide.steps.s2.title')}</h3>
                                <p className="text-gray-400 text-sm">
                                    {t('registrationGuide.steps.s2.desc')}
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 flex flex-col md:flex-row gap-6 hover:border-brand/30 transition-colors">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-gray-700 text-white font-bold text-xl rounded-xl flex items-center justify-center border border-gray-600">3</div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white mb-3">{t('registrationGuide.steps.s3.title')}</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                                        <span className="text-xs text-brand uppercase font-bold block mb-1">{t('registrationGuide.steps.s3.phone.label')}</span>
                                        <p className="text-white text-sm">{t('registrationGuide.steps.s3.phone.desc')}</p>
                                    </div>
                                    <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                                        <span className="text-xs text-brand uppercase font-bold block mb-1">{t('registrationGuide.steps.s3.pass.label')}</span>
                                        <p className="text-white text-sm">{t('registrationGuide.steps.s3.pass.desc')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 flex flex-col md:flex-row gap-6 hover:border-brand/30 transition-colors">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-gray-700 text-white font-bold text-xl rounded-xl flex items-center justify-center border border-gray-600">4</div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{t('registrationGuide.steps.s4.title')}</h3>
                                <p className="text-gray-400 text-sm mb-3">
                                    {t('registrationGuide.steps.s4.desc')}
                                </p>
                                <div className="flex items-center gap-2 text-xs text-yellow-500 bg-yellow-500/10 px-3 py-2 rounded-lg w-fit">
                                    <AlertTriangle className="w-4 h-4" /> {t('registrationGuide.steps.s4.warning')}
                                </div>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 flex flex-col md:flex-row gap-6 hover:border-brand/30 transition-colors">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-gray-700 text-white font-bold text-xl rounded-xl flex items-center justify-center border border-gray-600">5</div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{t('registrationGuide.steps.s5.title')}</h3>
                                <p className="text-gray-400 text-sm">
                                    {t('registrationGuide.steps.s5.desc')}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: COMMON ISSUES */}
                <section className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <AlertCircle className="w-6 h-6 text-brand" /> {t('registrationGuide.commonIssues.title')}
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {safeMap(t('registrationGuide.commonIssues.items', { returnObjects: true })).map((item: any, i: number) => (
                            <div key={i} className="bg-gray-800 p-5 rounded-xl">
                                <h4 className="font-bold text-white mb-2">{item.t}</h4>
                                <p className="text-sm text-gray-400">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION 4: FAQ */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">{t('registrationGuide.faq.title')}</h2>
                    <div className="space-y-4">
                        {safeMap(t('registrationGuide.faq.items', { returnObjects: true })).map((faq: any, i: number) => (
                            <div key={i} className="bg-gray-800/50 rounded-lg p-4 border border-gray-800">
                                <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                                    <HelpCircle className="w-4 h-4 text-brand" /> {faq.q}
                                </h4>
                                <p className="text-gray-400 text-sm ml-6">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-10 text-center border-t border-gray-700">
                    <h3 className="text-3xl font-bold text-white mb-6">{t('registrationGuide.cta.title')}</h3>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href={OFFICIAL_DOMAIN} target="_blank" rel="nofollow noopener noreferrer" className="bg-brand hover:bg-white text-black font-bold py-3 px-8 rounded-full transition-colors shadow-lg">
                            {t('registrationGuide.cta.button')}
                        </a>
                        <LocalizedLink to="/bonuses" className="bg-transparent border border-gray-600 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-700 transition-colors">
                            {t('registrationGuide.cta.bonuses')}
                        </LocalizedLink>
                    </div>
                </section>

            </div>
        </>
    );
};

/* --- PROVIDERS PAGE --- */
export const ProvidersPage: React.FC = () => {
    const { t } = useTranslation();

    const getProviderLink = (name: string) => {
        switch (name) {
            case 'Exchange Sports': return '/providers/exchange-sports';
            case 'IBC Sports': return '/providers/ibc-sports';
            case 'SBO Sports': return '/providers/sbo-sports';
            case 'Evolution Gaming': return '/providers/evolution-gaming';
            case 'SA Gaming': return '/providers/sa-gaming';
            case 'Sexy Gaming': return '/providers/sexy-gaming';
            case 'Pragmatic Play': return '/providers/pragmatic';
            case 'JILI': return '/providers/jili';
            case 'JDB': return '/providers/jdb';
            case 'FC Games': return '/providers/fc';
            case 'BNG (Booongo)': return '/providers/bng';
            case 'Spribe (SPB)': return '/providers/spribe';
            case 'PG Soft (PG)': return '/providers/pgsoft';
            case 'BT Gaming': return '/providers/bt';
            default: return '#';
        }
    };

    return (
        <>
            <SEO metadata={{
                title: t('providersPage.seo.title'),
                description: t('providersPage.seo.description'),
                schema: {
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": t('providersPage.seo.title'),
                    "description": t('providersPage.seo.description'),
                    "mainEntity": {
                        "@type": "ItemList",
                        "itemListElement": PROVIDERS.map((provider, i) => ({
                            "@type": "ListItem",
                            "position": i + 1,
                            "item": {
                                "@type": "Thing",
                                "name": provider.name,
                                "description": provider.description
                            }
                        }))
                    }
                }
            }} />
            <Breadcrumbs items={[{ label: t('nav.providers'), path: '/providers' }]} />

            {/* HERO SECTION */}
            <div className="relative bg-gradient-to-br from-[#111] via-[#1a1a2e] to-black py-16 md:py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-(-10%) right-(-10%) w-96 h-96 bg-brand/10 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <span className="inline-block px-4 py-1 rounded-full border border-brand/30 bg-brand/5 text-brand font-bold text-xs uppercase tracking-widest mb-6">
                        {t('providersPage.hero.badge')}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                        {t('providersPage.hero.title')}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        {t('providersPage.hero.subtitle')}
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-t border-gray-800 pt-8 mt-8">
                        {Object.entries(t('providersPage.hero.stats', { returnObjects: true }) as Record<string, string>).map(([key, value]) => (
                            <div key={key} className="text-center px-4">
                                <span className="block text-2xl md:text-3xl font-bold text-white mb-1">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">

                {/* ECOSYSTEM SECTION */}
                <section className="bg-gray-800/50 rounded-3xl p-8 md:p-12 border border-gray-700">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-white mb-4">{t('providersPage.ecosystem.title')}</h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">{t('providersPage.ecosystem.desc')}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center relative">
                        {/* Connector Line for Desktop */}
                        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-16 h-1 bg-brand/30"></div>
                        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-brand rounded-full items-center justify-center text-black font-bold shadow-[0_0_15px_rgba(255,215,0,0.5)]">
                            <Activity className="w-4 h-4" />
                        </div>

                        <div className="bg-gray-900 p-8 rounded-2xl border border-brand/20 relative z-10 hover:border-brand/50 transition-colors">
                            <div className="bg-brand/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <ShieldCheck className="w-8 h-8 text-brand" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{t('providersPage.ecosystem.platform.title')}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{t('providersPage.ecosystem.platform.desc')}</p>
                        </div>

                        <div className="bg-gray-900 p-8 rounded-2xl border border-blue-500/20 relative z-10 hover:border-blue-500/50 transition-colors">
                            <div className="bg-blue-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <Gamepad2 className="w-8 h-8 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{t('providersPage.ecosystem.provider.title')}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{t('providersPage.ecosystem.provider.desc')}</p>
                        </div>
                    </div>
                </section>

                {/* WHY CONNECT / ADVANTAGES */}
                <section>
                    <h3 className="text-3xl font-bold text-white mb-10 text-center">{t('providersPage.whyConnect.title')}</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {safeMap(t('providersPage.whyConnect.items', { returnObjects: true })).map((item: any, i: number) => (
                            <div key={i} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:-translate-y-1 transition-transform duration-300">
                                <div className="mb-4">
                                    {i === 0 ? <ShieldCheck className="w-10 h-10 text-brand" /> :
                                        i === 1 ? <Target className="w-10 h-10 text-brand" /> :
                                            <Globe className="w-10 h-10 text-brand" />}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* GAME CATEGORIES DEEP DIVE */}
                <section className="space-y-32">
                    {/* Slots */}
                    <article className="flex flex-col gap-12">
                        <div className="w-full h-80 md:h-[500px] relative rounded-3xl overflow-hidden shadow-2xl border border-gray-800 group">
                            <img
                                src="https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767781695/Slot1.png"
                                srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_400,f_auto,q_auto:eco/v1767781695/Slot1.png 400w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_600,f_auto,q_auto:eco/v1767781695/Slot1.png 600w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_800,f_auto,q_auto:eco/v1767781695/Slot1.png 800w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_1200,f_auto,q_auto:eco/v1767781695/Slot1.png 1200w"
                                sizes="(max-width: 768px) 100vw, 800px"
                                width="800"
                                height="500"
                                alt="Slots Deep Dive"
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-brand/20 p-3 rounded-xl backdrop-blur-md border border-brand/30">
                                        <Zap className="w-8 h-8 text-brand" />
                                    </div>
                                    <span className="text-brand font-bold tracking-widest uppercase text-sm">Most Popular</span>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-extrabold text-white shadow-lg">{t('providersPage.categories.slots.title')}</h3>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 space-y-6">
                                <p className="text-xl text-gray-300 leading-relaxed whitespace-pre-line">
                                    {t('providersPage.categories.slots.desc')}
                                </p>
                                <div className="p-6 bg-brand/5 border-l-4 border-brand rounded-r-xl italic text-gray-400">
                                    {t('providersPage.categories.slots.whyPlay')}
                                </div>
                            </div>
                            <div className="space-y-8">
                                <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                                    <h4 className="text-brand font-bold uppercase text-xs tracking-widest mb-4">Popular Providers</h4>
                                    <p className="text-white font-medium">{t('providersPage.categories.slots.popularProviders')}</p>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                                    <h4 className="text-brand font-bold uppercase text-xs tracking-widest mb-4">Today's Highlight</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{t('providersPage.categories.slots.highlight')}</p>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Live Casino */}
                    <article className="flex flex-col gap-12">
                        <div className="w-full h-80 md:h-[500px] relative rounded-3xl overflow-hidden shadow-2xl border border-gray-800 group">
                            <img
                                src="https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767782240/casino.png"
                                srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_400,f_auto,q_auto:eco/v1767782240/casino.png 400w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_600,f_auto,q_auto:eco/v1767782240/casino.png 600w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_800,f_auto,q_auto:eco/v1767782240/casino.png 800w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_1200,f_auto,q_auto:eco/v1767782240/casino.png 1200w"
                                sizes="(max-width: 768px) 100vw, 800px"
                                width="800"
                                height="500"
                                alt="Live Casino Deep Dive"
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-blue-500/20 p-3 rounded-xl backdrop-blur-md border border-blue-500/30">
                                        <Trophy className="w-8 h-8 text-blue-400" />
                                    </div>
                                    <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">Professional</span>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-extrabold text-white shadow-lg">{t('providersPage.categories.liveCasino.title')}</h3>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 space-y-6">
                                <p className="text-xl text-gray-300 leading-relaxed whitespace-pre-line">
                                    {t('providersPage.categories.liveCasino.desc')}
                                </p>
                                <div className="p-6 bg-blue-500/5 border-l-4 border-blue-500 rounded-r-xl italic text-gray-400">
                                    {t('providersPage.categories.liveCasino.whyPlay')}
                                </div>
                            </div>
                            <div className="space-y-8">
                                <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                                    <h4 className="text-blue-400 font-bold uppercase text-xs tracking-widest mb-4">Popular Providers</h4>
                                    <p className="text-white font-medium">{t('providersPage.categories.liveCasino.popularProviders')}</p>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                                    <h4 className="text-blue-400 font-bold uppercase text-xs tracking-widest mb-4">Today's Highlight</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{t('providersPage.categories.liveCasino.highlight')}</p>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Cricket */}
                    <article className="flex flex-col gap-12">
                        <div className="w-full h-80 md:h-[500px] relative rounded-3xl overflow-hidden shadow-2xl border border-gray-800 group">
                            <img
                                src="https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767781692/cricket.jpg"
                                srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_400,f_auto,q_auto:eco/v1767781692/cricket.jpg 400w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_600,f_auto,q_auto:eco/v1767781692/cricket.jpg 600w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_800,f_auto,q_auto:eco/v1767781692/cricket.jpg 800w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_1200,f_auto,q_auto:eco/v1767781692/cricket.jpg 1200w"
                                sizes="(max-width: 768px) 100vw, 800px"
                                width="800"
                                height="500"
                                alt="Cricket Betting Deep Dive"
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-brand/20 p-3 rounded-xl backdrop-blur-md border border-brand/30">
                                        <Activity className="w-8 h-8 text-brand" />
                                    </div>
                                    <span className="text-brand font-bold tracking-widest uppercase text-sm">South Asian Favorite</span>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-extrabold text-white shadow-lg">{t('providersPage.categories.cricket.title')}</h3>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 space-y-6">
                                <p className="text-xl text-gray-300 leading-relaxed whitespace-pre-line">
                                    {t('providersPage.categories.cricket.desc')}
                                </p>
                                <div className="p-6 bg-brand/5 border-l-4 border-brand rounded-r-xl italic text-gray-400">
                                    {t('providersPage.categories.cricket.whyPlay')}
                                </div>
                            </div>
                            <div className="space-y-8">
                                <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                                    <h4 className="text-brand font-bold uppercase text-xs tracking-widest mb-4">Market Leaders</h4>
                                    <p className="text-white font-medium">{t('providersPage.categories.cricket.popularProviders')}</p>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                                    <h4 className="text-brand font-bold uppercase text-xs tracking-widest mb-4">Current Highlight</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{t('providersPage.categories.cricket.highlight')}</p>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Universal Sports */}
                    <article className="flex flex-col gap-12">
                        <div className="w-full h-80 md:h-[500px] relative rounded-3xl overflow-hidden shadow-2xl border border-gray-800 group">
                            <img
                                src="https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767782101/sports.jpg"
                                srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_400,f_auto,q_auto:eco/v1767782101/sports.jpg 400w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_600,f_auto,q_auto:eco/v1767782101/sports.jpg 600w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_800,f_auto,q_auto:eco/v1767782101/sports.jpg 800w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_1200,f_auto,q_auto:eco/v1767782101/sports.jpg 1200w"
                                sizes="(max-width: 768px) 100vw, 800px"
                                width="800"
                                height="500"
                                alt="Universal Sports Deep Dive"
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-green-500/20 p-3 rounded-xl backdrop-blur-md border border-green-500/30">
                                        <Globe className="w-8 h-8 text-green-400" />
                                    </div>
                                    <span className="text-green-400 font-bold tracking-widest uppercase text-sm">Global Markets</span>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-extrabold text-white shadow-lg">{t('providersPage.categories.sports.title')}</h3>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 space-y-6">
                                <p className="text-xl text-gray-300 leading-relaxed whitespace-pre-line">
                                    {t('providersPage.categories.sports.desc')}
                                </p>
                                <div className="p-6 bg-green-500/5 border-l-4 border-green-500 rounded-r-xl italic text-gray-400">
                                    {t('providersPage.categories.sports.whyPlay')}
                                </div>
                            </div>
                            <div className="space-y-8">
                                <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                                    <h4 className="text-green-400 font-bold uppercase text-xs tracking-widest mb-4">Official Partners</h4>
                                    <p className="text-white font-medium">{t('providersPage.categories.sports.popularProviders')}</p>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                                    <h4 className="text-green-400 font-bold uppercase text-xs tracking-widest mb-4">Platform Highlight</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{t('providersPage.categories.sports.highlight')}</p>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Fishing */}
                    <article className="flex flex-col gap-12">
                        <div className="w-full h-80 md:h-[500px] relative rounded-3xl overflow-hidden shadow-2xl border border-gray-800 group">
                            <img
                                src="https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767782055/fishing1.png"
                                srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_400,f_auto,q_auto:eco/v1767782055/fishing1.png 400w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_600,f_auto,q_auto:eco/v1767782055/fishing1.png 600w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_800,f_auto,q_auto:eco/v1767782055/fishing1.png 800w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_1200,f_auto,q_auto:eco/v1767782055/fishing1.png 1200w"
                                sizes="(max-width: 768px) 100vw, 800px"
                                width="800"
                                height="500"
                                alt="Fishing Games Deep Dive"
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-blue-400/20 p-3 rounded-xl backdrop-blur-md border border-blue-400/30">
                                        <Target className="w-8 h-8 text-blue-400" />
                                    </div>
                                    <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">Arcade Skill</span>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-extrabold text-white shadow-lg">{t('providersPage.categories.fishing.title')}</h3>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 space-y-6">
                                <p className="text-xl text-gray-300 leading-relaxed whitespace-pre-line">
                                    {t('providersPage.categories.fishing.desc')}
                                </p>
                                <div className="p-6 bg-blue-500/5 border-l-4 border-blue-500 rounded-r-xl italic text-gray-400">
                                    {t('providersPage.categories.fishing.whyPlay')}
                                </div>
                            </div>
                            <div className="space-y-8">
                                <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                                    <h4 className="text-blue-400 font-bold uppercase text-xs tracking-widest mb-4">Top Studios</h4>
                                    <p className="text-white font-medium">{t('providersPage.categories.fishing.popularProviders')}</p>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                                    <h4 className="text-blue-400 font-bold uppercase text-xs tracking-widest mb-4">Visual Highlight</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{t('providersPage.categories.fishing.highlight')}</p>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Aviator / Crash */}
                    <article className="flex flex-col gap-12">
                        <div className="w-full h-80 md:h-[500px] relative rounded-3xl overflow-hidden shadow-2xl border border-gray-800 group">
                            <img
                                src="https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767782357/aviator1.jpg"
                                srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_400,f_auto,q_auto:eco/v1767782357/aviator1.jpg 400w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_600,f_auto,q_auto:eco/v1767782357/aviator1.jpg 600w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_800,f_auto,q_auto:eco/v1767782357/aviator1.jpg 800w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_1200,f_auto,q_auto:eco/v1767782357/aviator1.jpg 1200w"
                                sizes="(max-width: 768px) 100vw, 800px"
                                width="800"
                                height="500"
                                alt="Aviator & Crash Deep Dive"
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-orange-500/20 p-3 rounded-xl backdrop-blur-md border border-orange-500/30">
                                        <Zap className="w-8 h-8 text-orange-400" />
                                    </div>
                                    <span className="text-orange-400 font-bold tracking-widest uppercase text-sm">Provably Fair</span>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-extrabold text-white shadow-lg">{t('providersPage.categories.aviator.title')}</h3>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 space-y-6">
                                <p className="text-xl text-gray-300 leading-relaxed whitespace-pre-line">
                                    {t('providersPage.categories.aviator.desc')}
                                </p>
                                <div className="p-6 bg-orange-500/5 border-l-4 border-orange-500 rounded-r-xl italic text-gray-400">
                                    {t('providersPage.categories.aviator.whyPlay')}
                                </div>
                            </div>
                            <div className="space-y-8">
                                <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                                    <h4 className="text-orange-400 font-bold uppercase text-xs tracking-widest mb-4">Certified Studios</h4>
                                    <p className="text-white font-medium">{t('providersPage.categories.aviator.popularProviders')}</p>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                                    <h4 className="text-orange-400 font-bold uppercase text-xs tracking-widest mb-4">Social Highlight</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{t('providersPage.categories.aviator.highlight')}</p>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Lottery */}
                    <article className="flex flex-col gap-12">
                        <div className="w-full h-80 md:h-[500px] relative rounded-3xl overflow-hidden shadow-2xl border border-gray-800 group">
                            <img
                                src="https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767781694/lottery.jpg"
                                srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_400,f_auto,q_auto:eco/v1767781694/lottery.jpg 400w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_600,f_auto,q_auto:eco/v1767781694/lottery.jpg 600w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_800,f_auto,q_auto:eco/v1767781694/lottery.jpg 800w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_1200,f_auto,q_auto:eco/v1767781694/lottery.jpg 1200w"
                                sizes="(max-width: 768px) 100vw, 800px"
                                width="800"
                                height="500"
                                alt="Lottery & Digits Deep Dive"
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-purple-500/20 p-3 rounded-xl backdrop-blur-md border border-purple-500/30">
                                        <Trophy className="w-8 h-8 text-purple-400" />
                                    </div>
                                    <span className="text-purple-400 font-bold tracking-widest uppercase text-sm">Big Win Potential</span>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-extrabold text-white shadow-lg">{t('providersPage.categories.lottery.title')}</h3>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 space-y-6">
                                <p className="text-xl text-gray-300 leading-relaxed whitespace-pre-line">
                                    {t('providersPage.categories.lottery.desc')}
                                </p>
                                <div className="p-6 bg-purple-500/5 border-l-4 border-purple-500 rounded-r-xl italic text-gray-400">
                                    {t('providersPage.categories.lottery.whyPlay')}
                                </div>
                            </div>
                            <div className="space-y-8">
                                <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                                    <h4 className="text-purple-400 font-bold uppercase text-xs tracking-widest mb-4">Authorized Draws</h4>
                                    <p className="text-white font-medium">{t('providersPage.categories.lottery.popularProviders')}</p>
                                </div>
                                <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                                    <h4 className="text-purple-400 font-bold uppercase text-xs tracking-widest mb-4">Regional Highlight</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">{t('providersPage.categories.lottery.highlight')}</p>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>

                {/* PROVIDER GRID */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-10 text-center">Complete Provider Directory</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {PROVIDERS.map((provider, i) => (
                            <div
                                key={i}
                                className="bg-gray-800/80 p-6 rounded-2xl border border-gray-700 hover:border-brand/50 hover:bg-gray-800 transition-all group flex flex-col items-center text-center h-full relative"
                            >
                                <LocalizedLink
                                    to={getProviderLink(provider.name)}
                                    className="w-full flex flex-col items-center flex-grow"
                                >
                                    <div className="w-20 h-20 mb-4 bg-black/40 rounded-xl p-2 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center overflow-hidden">
                                        <img
                                            src={provider.logo}
                                            srcSet={`${provider.logo.replace('/upload/', '/upload/w_100,f_auto,q_auto:eco/')} 100w, ${provider.logo.replace('/upload/', '/upload/w_200,f_auto,q_auto:eco/')} 200w`}
                                            sizes="(max-width: 768px) 100vw, 200px"
                                            width="80"
                                            height="80"
                                            alt={provider.name}
                                            loading="lazy"
                                            className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                                        />
                                    </div>
                                    <h3 className="text-white font-bold mb-2 group-hover:text-brand transition-colors">{provider.name}</h3>
                                    <p className="text-gray-500 text-[10px] leading-tight flex-grow line-clamp-2">{provider.description}</p>
                                </LocalizedLink>

                                <div className="mt-4 flex flex-col gap-2 w-full px-4">
                                    <LocalizedLink
                                        to={getProviderLink(provider.name)}
                                        className="text-brand font-bold text-xs uppercase flex items-center justify-center gap-1 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity"
                                    >
                                        Deep Dive Essay <ArrowRight className="w-3 h-3" />
                                    </LocalizedLink>

                                    {provider.website && (
                                        <a href={provider.website} target="_blank" rel="nofollow noopener noreferrer" className="text-[10px] text-gray-500 hover:text-white flex items-center justify-center gap-1 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                                            <ExternalLink className="w-3 h-3" /> Official Site
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* RECOMMENDATIONS */}
                <section className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border border-brand/10">
                    <h3 className="text-2xl font-bold text-white mb-2">{t('providersPage.recommendations.title')}</h3>
                    <p className="text-gray-400 mb-8">{t('providersPage.recommendations.subtitle')}</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {safeMap(t('providersPage.recommendations.items', { returnObjects: true })).map((rec: any, i: number) => (
                            <div key={i} className="bg-black/20 p-6 rounded-2xl border border-white/5 hover:border-brand/20 transition-colors">
                                <span className="text-[10px] font-bold text-brand uppercase tracking-widest block mb-2">{rec.type}</span>
                                <h4 className="text-white font-bold mb-2">{rec.name}</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">{rec.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* TRUST SECTION */}
                <section className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-full mb-6">
                        <Lock className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{t('providersPage.trust.title')}</h3>
                    <p className="text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
                        {t('providersPage.trust.desc')}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {safeMap(t('providersPage.trust.badges', { returnObjects: true })).map((badge: string, i: number) => (
                            <div key={i} className="px-4 py-2 bg-black/40 rounded-full border border-gray-700 text-gray-300 text-xs font-bold flex items-center gap-2">
                                <CheckCircle className="w-3 h-3 text-brand" /> {badge}
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </>
    );
};

/* --- BLOG PAGE --- */
export const BlogPage: React.FC = () => {
    const { t } = useTranslation();
    const [dynamicPosts, setDynamicPosts] = useState<any[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch('/api/posts');
                if (res.ok) {
                    const data = await res.json();
                    setDynamicPosts(data.filter((p: any) => p.published));
                }
            } catch (err) {
                console.error('Error fetching dynamic posts:', err);
            }
        };
        fetchPosts();
    }, []);

    // Helper to format date
    const formatDate = (dateStr: string) => {
        return new Date(dateStr).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <>
            <SEO metadata={{
                title: t('blogPage.seo.title'),
                description: t('blogPage.seo.description')
            }} />
            <Breadcrumbs items={[{ label: t('nav.blog'), path: '/blog' }]} />

            <div className="max-w-7xl mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-white mb-12">{t('blogPage.title')}</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Render Dynamic Posts */}
                    {dynamicPosts.map((post) => (
                        <article key={post._id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-brand transition-colors group flex flex-col h-full relative">
                            {/* NEW BADGE */}
                            <div className="absolute top-4 right-4 bg-brand text-black font-bold text-xs px-2 py-1 rounded z-10">NEW</div>
                            
                            <LocalizedLink to={`/blog/post/${post.slug}`} className="block h-48 overflow-hidden bg-gray-900 relative">
                                {/* TipTap doesn't guarantee images on top, we just use a fallback banner or if there's an image we'll parse it maybe. Here just a fallback */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent flex items-center justify-center">
                                    <span className="text-brand opacity-20 font-extrabold text-5xl">BLOG</span>
                                </div>
                            </LocalizedLink>
                            <div className="p-6 flex flex-col flex-grow relative z-10">
                                <div className="text-sm text-brand mb-2 font-bold">{formatDate(post.createdAt)}</div>
                                <LocalizedLink to={`/blog/post/${post.slug}`}>
                                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-brand transition-colors">{post.title}</h2>
                                </LocalizedLink>
                                <p className="text-gray-400 mb-6 flex-grow">{post.excerpt || 'Read this breaking post from BIGWIN959.'}</p>
                                <LocalizedLink to={`/blog/post/${post.slug}`} className="inline-flex items-center text-white font-bold hover:text-brand transition-colors">
                                    {t('blogPage.readMore')} <ArrowRight className="w-4 h-4 ml-2" />
                                </LocalizedLink>
                            </div>
                        </article>
                    ))}

                    {/* Render Static/Old Posts */}
                    {LATEST_BLOGS.map((post) => (
                        <article key={post.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-brand transition-colors group flex flex-col h-full">
                            <LocalizedLink to={`/blog/${post.slug}`} className="block h-48 overflow-hidden">
                                <img
                                    src={post.imageUrl}
                                    srcSet={`${post.imageUrl.replace('/upload/', '/upload/w_300,f_auto,q_auto/')} 300w, ${post.imageUrl.replace('/upload/', '/upload/w_600,f_auto,q_auto/')} 600w`}
                                    sizes="(max-width: 768px) 100vw, 400px"
                                    width="400"
                                    height="300"
                                    alt={post.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </LocalizedLink>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="text-sm text-brand mb-2 font-bold">{post.date}</div>
                                <LocalizedLink to={`/blog/${post.slug}`}>
                                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-brand transition-colors">{post.title}</h2>
                                </LocalizedLink>
                                <p className="text-gray-400 mb-6 flex-grow">{post.excerpt}</p>
                                <LocalizedLink to={`/blog/${post.slug}`} className="inline-flex items-center text-white font-bold hover:text-brand transition-colors">
                                    {t('blogPage.readMore')} <ArrowRight className="w-4 h-4 ml-2" />
                                </LocalizedLink>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </>
    );
};

