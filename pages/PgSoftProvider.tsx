import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import SEO from '../components/SEO';
import { Breadcrumbs } from '../components/Section';
import { OFFICIAL_DOMAIN } from '../constants';
import {
    Sparkles,
    Wifi,
    Activity,
    Trophy,
    Users,
    Globe,
    CheckCircle2,
    Zap,
    Smartphone,
    MousePointer,
    Banknote,
    Landmark,
    Coins,
    ArrowRight,
    Shield,
    FileCheck,
    XCircle,
    Timer,
    Box,
    Flame,
    Layers,
    Rocket,
    Joystick,
    ShieldCheck
} from 'lucide-react';

const safeMap = (data: any) => Array.isArray(data) ? data : [];

const getOptimizedUrl = (url: string, transform: string) => {
    if (!url || !url.includes('cloudinary')) return url;
    // Strip existing common transforms but KEEP the 'v' to avoid duplication/conflicts
    const cleanUrl = url.replace(/\/upload\/.*\/v/, '/upload/v');
    // Inject new transform
    return cleanUrl.replace('/upload/', `/upload/${transform}/`);
};

const PgSoftProvider: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <SEO
                metadata={{
                    title: t('providers.pgSoft.seo.title'),
                    description: t('providers.pgSoft.seo.description'),
                    keywords: safeMap(t('providers.pgSoft.seo.keywords', { returnObjects: true })),
                    canonicalUrl: "https://bigwinofficial.com/providers/pgsoft",
                    ogType: 'article',
                    publishedTime: '2025-01-01T00:00:00+06:00',
                    modifiedTime: new Date().toISOString(),
                    author: 'Bigwin959 Guide',
                    schema: {
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": t('providers.pgSoft.seo.schema.headline'),
                        "description": t('providers.pgSoft.seo.schema.description'),
                        "author": {
                            "@type": "Organization",
                            "name": "Bigwin959 Guide"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Bigwin959 Guide",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://bw959image.netlify.app/logo1.png"
                            }
                        },
                        "datePublished": "2025-01-01",
                        "dateModified": new Date().toISOString(),
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://bigwinofficial.com/providers/pgsoft"
                        }
                    }
                }}
            />

            <Breadcrumbs items={[
                { label: t('nav.providers'), path: '/providers' },
                { label: t('breadcrumbs.pgSoft'), path: '/providers/pgsoft' }
            ]} />

            {/* SECTION 1: HERO */}
            <section className="relative py-24 bg-gradient-to-br from-[#1a0b2e] via-[#2d1b69] to-black overflow-hidden">
                {/* Cinematic Background Elements */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-brand/10 rounded-full blur-[80px] animate-pulse delay-1000"></div>
                    <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-pink-500/10 rounded-full blur-[60px] animate-pulse delay-500"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <div className="inline-block mb-4 px-4 py-1 rounded-full border border-purple-400/30 bg-purple-400/10 text-purple-400 font-bold text-sm tracking-widest uppercase animate-pulse">
                        {t('providers.pgSoft.hero.badge')}
                    </div>
                    <h1
                        className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
                        dangerouslySetInnerHTML={{ __html: t('providers.pgSoft.hero.title') }}
                    />

                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        {t('providers.pgSoft.hero.subtitle')}
                    </p>
                    <a href={OFFICIAL_DOMAIN} rel="nofollow noopener noreferrer" aria-label={t('providers.pgSoft.hero.cta.play')} className="inline-flex items-center bg-brand hover:bg-white text-black font-bold py-4 px-10 rounded-full transition-all shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transform hover:-translate-y-1">
                        {t('providers.pgSoft.hero.cta.play')} <Sparkles className="ml-2 w-5 h-5" />
                    </a>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">

                {/* SECTION 2: ABOUT PG SOFT */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('providers.pgSoft.intro.title')}</h2>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                            {t('providers.pgSoft.intro.desc')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                                <h3 className="text-brand font-bold text-xl mb-4">{t('providers.pgSoft.intro.excellence.title')}</h3>
                                <div className="space-y-4 text-gray-300">
                                    <p className="leading-relaxed">
                                        <strong className="text-white">{t('providers.pgSoft.intro.excellence.foundedLabel')}</strong> 2015 in Valletta, Malta<br />
                                        <strong className="text-white">{t('providers.pgSoft.intro.excellence.hqLabel')}</strong> Malta with offices across Asia<br />
                                        <strong className="text-white">{t('providers.pgSoft.intro.excellence.licensesLabel')}</strong> MGA, UKGC, and multiple jurisdictions<br />
                                        <strong className="text-white">{t('providers.pgSoft.intro.excellence.specLabel')}</strong> {t('providers.pgSoft.intro.excellence.specValue')}
                                    </p>
                                    <p className="leading-relaxed">
                                        {t('providers.pgSoft.intro.excellence.desc')}
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                                <h3 className="text-brand font-bold text-xl mb-4">{t('providers.pgSoft.intro.innovation.title')}</h3>
                                <div className="space-y-3 text-gray-300">
                                    {safeMap(t('providers.pgSoft.intro.innovation.points', { returnObjects: true })).map((point: any, i: number) => (
                                        <p key={i} className="leading-relaxed">
                                            <strong className="text-white">{point.label}</strong> {point.value}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>
                            <img
                                src={getOptimizedUrl("https://res.cloudinary.com/dmyocpyxd/image/upload/v1767702973/pgsoft1.png", "f_auto,q_auto:eco")}
                                srcSet={`${getOptimizedUrl("https://res.cloudinary.com/dmyocpyxd/image/upload/v1767702973/pgsoft1.png", "w_200,f_auto,q_auto:eco")} 200w, ${getOptimizedUrl("https://res.cloudinary.com/dmyocpyxd/image/upload/v1767702973/pgsoft1.png", "w_400,f_auto,q_auto:eco")} 400w, ${getOptimizedUrl("https://res.cloudinary.com/dmyocpyxd/image/upload/v1767702973/pgsoft1.png", "w_600,f_auto,q_auto:eco")} 600w`}
                                sizes="(max-width: 768px) 100vw, 320px"
                                width="320"
                                height="320"
                                loading="lazy"
                                alt="PG Soft Gaming Excellence"
                                className="relative z-10 rounded-2xl border border-gray-700 shadow-2xl w-full max-w-xs mx-auto object-contain"
                            />
                        </div>
                    </div>
                </section>

                {/* SECTION 3: MOBILE-FIRST EXCELLENCE */}
                <section className="bg-gradient-to-r from-purple-900/20 to-transparent border border-purple-700/30 rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('providers.pgSoft.mobileFirst.title')}</h2>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                            {t('providers.pgSoft.mobileFirst.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                        <div className="space-y-6">
                            <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-xl">
                                <h3 className="text-purple-400 font-bold text-xl mb-4">{t('providers.pgSoft.mobileFirst.advantage.title')}</h3>
                                <div className="space-y-4 text-gray-300">
                                    {safeMap(t('providers.pgSoft.mobileFirst.advantage.points', { returnObjects: true })).map((point: any, i: number) => (
                                        <p key={i} className="leading-relaxed">
                                            <strong className="text-white">{point.label}</strong> {point.value}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-xl">
                                <h3 className="text-purple-400 font-bold text-xl mb-4">{t('providers.pgSoft.mobileFirst.tech.title')}</h3>
                                <div className="space-y-3 text-gray-300">
                                    {safeMap(t('providers.pgSoft.mobileFirst.tech.points', { returnObjects: true })).map((point: any, i: number) => (
                                        <p key={i} className="leading-relaxed">
                                            <strong className="text-white">{point.label}</strong> {point.value}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-brand/20 blur-3xl rounded-full animate-pulse"></div>
                            <img
                                src={getOptimizedUrl("https://res.cloudinary.com/dmyocpyxd/image/upload/v1767702975/PG-soft.png", "f_auto,q_auto:eco")}
                                srcSet={`${getOptimizedUrl("https://res.cloudinary.com/dmyocpyxd/image/upload/v1767702975/PG-soft.png", "w_300,f_auto,q_auto:eco")} 300w, ${getOptimizedUrl("https://res.cloudinary.com/dmyocpyxd/image/upload/v1767702975/PG-soft.png", "w_500,f_auto,q_auto:eco")} 500w, ${getOptimizedUrl("https://res.cloudinary.com/dmyocpyxd/image/upload/v1767702975/PG-soft.png", "w_600,f_auto,q_auto:eco")} 600w`}
                                sizes="(max-width: 768px) 100vw, 384px"
                                width="384"
                                height="384"
                                loading="lazy"
                                alt="PG Soft Mobile Gaming"
                                className="relative z-10 rounded-2xl border border-gray-700 shadow-2xl w-full max-w-sm mx-auto"
                            />
                        </div>
                    </div>

                    <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-xl">
                        <h3 className="text-brand font-bold text-xl mb-4 text-center">{t('providers.pgSoft.mobileFirst.benefits.title')}</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {safeMap(t('providers.pgSoft.mobileFirst.benefits.items', { returnObjects: true })).map((item: any, i: number) => {
                                const Icon = [Smartphone, Wifi, Activity][i];
                                const colorClass = ["text-green-400", "text-blue-400", "text-purple-400"][i];
                                const bgClass = ["bg-green-500/10", "bg-blue-500/10", "bg-purple-500/10"][i];

                                return (
                                    <div key={i} className="text-center">
                                        <div className={`w-16 h-16 ${bgClass} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                                            <Icon className={`w-8 h-8 ${colorClass}`} />
                                        </div>
                                        <h4 className="text-white font-bold mb-2">{item.title}</h4>
                                        <p className="text-gray-400 text-sm">{item.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* SECTION 4: POPULAR PG SOFT GAMES */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('providers.pgSoft.games.title')}</h2>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                            {t('providers.pgSoft.games.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {safeMap(t('providers.pgSoft.games.list', { returnObjects: true })).map((game: any, i: number) => (
                            <div key={i} className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden hover:border-purple-500/50 transition-colors group flex flex-col">
                                <div className="h-48 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center relative overflow-hidden">
                                    <img
                                        src={getOptimizedUrl(game.img || "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767689394/PG-Soft-Section-Game-Card.jpg", "f_auto,q_auto:eco")}
                                        {...(!game.img && {
                                            srcSet: `${getOptimizedUrl("https://res.cloudinary.com/dmyocpyxd/image/upload/v1767689394/PG-Soft-Section-Game-Card.jpg", "w_400,f_auto,q_auto:eco")} 400w, ${getOptimizedUrl("https://res.cloudinary.com/dmyocpyxd/image/upload/v1767689394/PG-Soft-Section-Game-Card.jpg", "w_600,f_auto,q_auto:eco")} 600w`,
                                            sizes: "(max-width: 768px) 100vw, 400px"
                                        })}
                                        width="400"
                                        height="300"
                                        loading="lazy"
                                        alt={game.title}
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-4 left-4">
                                        <h3 className="text-white font-bold text-lg">{game.title}</h3>
                                        <p className="text-purple-400 text-sm">{game.category}</p>
                                        <p className="text-brand text-xs">{game.popularity}</p>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{game.description}</p>

                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <p className="text-gray-400 text-xs">{t('providers.pgSoft.games.labels.rtp')}</p>
                                            <p className="text-white font-bold">{game.rtp}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-xs">{t('providers.pgSoft.games.labels.maxWin')}</p>
                                            <p className="text-white font-bold">{game.maxWin}</p>
                                        </div>
                                    </div>

                                    <div className="mb-4 flex-grow">
                                        <p className="text-gray-400 text-xs mb-2">{t('providers.pgSoft.games.labels.features')}</p>
                                        <div className="flex flex-wrap gap-1">
                                            {game.features.map((feature: string) => (
                                                <span key={feature} className="text-xs bg-purple-500/10 text-purple-400 px-2 py-1 rounded border border-purple-500/20">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <a href={OFFICIAL_DOMAIN} rel="nofollow noopener noreferrer" aria-label={`Play ${game.title} now`} className="block text-center bg-gray-700 hover:bg-purple-500 hover:text-white text-white font-bold py-3 rounded-lg transition-colors mt-auto">
                                        {t('providers.pgSoft.games.playNow')}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION 5: CINEMATIC GRAPHICS & FEATURES */}
                <section className="bg-gray-900 rounded-3xl p-8 md:p-12 border border-gray-800">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('providers.pgSoft.features.title')}</h2>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                            {t('providers.pgSoft.features.subtitle')}
                        </p>
                    </div>

                    <div className="space-y-12">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                                        <Sparkles className="w-6 h-6 text-purple-400" />
                                    </div>
                                    {t('providers.pgSoft.features.visual.title')}
                                </h3>
                                <div className="space-y-4 text-gray-300">
                                    {safeMap(t('providers.pgSoft.features.visual.points', { returnObjects: true })).map((point: any, i: number) => (
                                        <p key={i} className="leading-relaxed">
                                            <strong className="text-white">{point.label}</strong> {point.desc}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-full animate-pulse"></div>
                                <img
                                    src={getOptimizedUrl("https://res.cloudinary.com/dmyocpyxd/image/upload/v1767702977/PG-VisualExcellence.png", "f_auto,q_auto:eco")}
                                    srcSet={`${getOptimizedUrl("https://res.cloudinary.com/dmyocpyxd/image/upload/v1767702977/PG-VisualExcellence.png", "w_300,f_auto,q_auto:eco")} 300w, ${getOptimizedUrl("https://res.cloudinary.com/dmyocpyxd/image/upload/v1767702977/PG-VisualExcellence.png", "w_500,f_auto,q_auto:eco")} 500w`}
                                    sizes="(max-width: 768px) 100vw, 500px"
                                    width="500"
                                    height="300"
                                    loading="lazy"
                                    alt="PG Soft Visual Excellence"
                                    className="relative z-10 rounded-xl border border-gray-700 shadow-xl w-full"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="order-2 md:order-1 relative">
                                <div className="absolute inset-0 bg-brand/20 blur-2xl rounded-full animate-pulse"></div>
                                <img
                                    src={getOptimizedUrl("https://res.cloudinary.com/dmyocpyxd/image/upload/v1767702967/PG-Features.png", "f_auto,q_auto:eco")}
                                    srcSet={`${getOptimizedUrl("https://res.cloudinary.com/dmyocpyxd/image/upload/v1767702967/PG-Features.png", "w_300,f_auto,q_auto:eco")} 300w, ${getOptimizedUrl("https://res.cloudinary.com/dmyocpyxd/image/upload/v1767702967/PG-Features.png", "w_500,f_auto,q_auto:eco")} 500w`}
                                    sizes="(max-width: 768px) 100vw, 500px"
                                    width="500"
                                    height="300"
                                    loading="lazy"
                                    alt="PG Soft Features"
                                    className="relative z-10 rounded-xl border border-gray-700 shadow-xl w-full"
                                />
                            </div>
                            <div className="order-1 md:order-2">
                                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center">
                                        <Zap className="w-6 h-6 text-brand" />
                                    </div>
                                    {t('providers.pgSoft.features.innovative.title')}
                                </h3>
                                <div className="space-y-4 text-gray-300">
                                    {safeMap(t('providers.pgSoft.features.innovative.points', { returnObjects: true })).map((point: any, i: number) => (
                                        <p key={i} className="leading-relaxed">
                                            <strong className="text-white">{point.label}</strong> {point.desc}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {safeMap(t('providers.pgSoft.features.badges', { returnObjects: true })).map((badge: any, i: number) => {
                                const Icon = [Trophy, Users, Globe][i];
                                const colorClass = ["text-green-400", "text-blue-400", "text-purple-400"][i];
                                const bgClass = ["bg-green-500/10", "bg-blue-500/10", "bg-purple-500/10"][i];
                                return (
                                    <div key={i} className="bg-gray-800 border border-gray-700 p-6 rounded-xl text-center">
                                        <div className={`w-16 h-16 ${bgClass} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                                            <Icon className={`w-8 h-8 ${colorClass}`} />
                                        </div>
                                        <h4 className="text-white font-bold text-lg mb-3">{badge.title}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {badge.desc}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* SECTION 6: ASIAN MARKET FOCUS */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('providers.pgSoft.marketFocus.title')}</h2>
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                            {t('providers.pgSoft.marketFocus.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                        <div className="bg-gray-800 border border-gray-700 p-8 rounded-xl">
                            <h3 className="text-brand font-bold text-xl mb-6">{t('providers.pgSoft.marketFocus.cultural.title')}</h3>
                            <div className="space-y-4 text-gray-300">
                                {safeMap(t('providers.pgSoft.marketFocus.cultural.points', { returnObjects: true })).map((point: any, i: number) => (
                                    <p key={i} className="leading-relaxed">
                                        <strong className="text-white">{point.label}</strong> {point.desc}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-800 border border-gray-700 p-8 rounded-xl">
                            <h3 className="text-brand font-bold text-xl mb-6">{t('providers.pgSoft.marketFocus.adaptation.title')}</h3>
                            <div className="space-y-4 text-gray-300">
                                {safeMap(t('providers.pgSoft.marketFocus.adaptation.points', { returnObjects: true })).map((point: any, i: number) => (
                                    <p key={i} className="leading-relaxed">
                                        <strong className="text-white">{point.label}</strong> {point.desc}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 7: GETTING STARTED */}
                <section className="bg-gradient-to-br from-purple-900/10 to-transparent border border-purple-700/30 rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('providers.pgSoft.gettingStarted.title')}</h2>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                            {t('providers.pgSoft.gettingStarted.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <ol className="space-y-6">
                                {safeMap(t('providers.pgSoft.gettingStarted.steps', { returnObjects: true })).map((step: string, i: number) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500 text-white font-bold flex items-center justify-center text-sm">{i + 1}</span>
                                        <span className="text-gray-300 leading-relaxed">{step}</span>
                                    </li>
                                ))}
                            </ol>
                            <div className="mt-8 bg-gray-800/50 p-4 rounded-lg">
                                <p className="text-gray-400 text-sm">
                                    <strong className="text-white">{t('providers.pgSoft.gettingStarted.proTip.label')}</strong> {t('providers.pgSoft.gettingStarted.proTip.text')}
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>
                                <img
                                    src={getOptimizedUrl("https://res.cloudinary.com/dmyocpyxd/image/upload/v1767764064/PG-Mobile-experience.jpg", "f_auto,q_auto:eco")}
                                    srcSet={`${getOptimizedUrl("https://res.cloudinary.com/dmyocpyxd/image/upload/v1767764064/PG-Mobile-experience.jpg", "w_200,f_auto,q_auto:eco")} 200w, ${getOptimizedUrl("https://res.cloudinary.com/dmyocpyxd/image/upload/v1767764064/PG-Mobile-experience.jpg", "w_400,f_auto,q_auto:eco")} 400w, ${getOptimizedUrl("https://res.cloudinary.com/dmyocpyxd/image/upload/v1767764064/PG-Mobile-experience.jpg", "w_600,f_auto,q_auto:eco")} 600w`}
                                    sizes="(max-width: 768px) 100vw, 320px"
                                    width="320"
                                    height="600"
                                    loading="lazy"
                                    alt="PG Soft Mobile Experience"
                                    className="relative z-10 rounded-2xl border-4 border-gray-800 shadow-2xl w-80"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 8: FAQ */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">{t('providers.pgSoft.faq.title')}</h2>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {safeMap(t('providers.pgSoft.faq.items', { returnObjects: true })).map((item: any, i: number) => (
                            <div key={i} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-brand/40 transition-colors">
                                <h4 className="font-bold text-white mb-2">{item.q}</h4>
                                <p className="text-gray-400 text-sm">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION 9: RESPONSIBLE PLAY */}
                <section className="border border-brand/30 bg-brand/5 rounded-3xl p-8 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><ShieldCheck className="w-32 h-32 text-brand" /></div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">{t('providers.pgSoft.responsible.title')}</h2>
                    <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto relative z-10 mb-6">
                        {safeMap(t('providers.pgSoft.responsible.tips', { returnObjects: true })).map((tip: string, i: number) => (
                            <div key={i} className="bg-gray-900/50 p-4 rounded-xl border border-gray-700 text-gray-300 text-sm italic">
                                "{tip}"
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-400 text-sm relative z-10 max-w-2xl mx-auto">
                        {t('providers.pgSoft.responsible.disclaimer')}
                    </p>
                </section>

                {/* SECTION 10: CTA */}
                <section className="py-24 bg-gradient-to-r from-brand to-purple-600 rounded-3xl text-center relative overflow-hidden shadow-[0_20px_50px_rgba(255,215,0,0.2)]">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="relative z-10 space-y-8 max-w-3xl mx-auto px-4">
                        <h2 className="text-4xl md:text-6xl font-black text-black italic tracking-tighter uppercase leading-none">
                            {t('providers.pgSoft.cta.title')}
                        </h2>
                        <p className="text-black/80 text-xl font-medium tracking-tight">
                            Experience the best of mobile-first slot gaming with PG Soft.
                        </p>
                        <a href={OFFICIAL_DOMAIN} aria-label={t('providers.pgSoft.cta.button')} className="inline-flex items-center gap-3 bg-black hover:bg-white text-white hover:text-black font-black py-5 px-14 rounded-full transition-all shadow-2xl transform hover:-translate-y-2 uppercase tracking-widest text-lg">
                            {t('providers.pgSoft.cta.button')} <ArrowRight className="w-6 h-6" />
                        </a>
                        <div className="flex justify-center gap-8 pt-8 flex-wrap">
                            <div className="text-black/60 text-xs font-bold uppercase tracking-widest border border-black/20 px-3 py-1 rounded">RNG Verified</div>
                            <div className="text-black/60 text-xs font-bold uppercase tracking-widest border border-black/20 px-3 py-1 rounded">Mobile First</div>
                            <div className="text-black/60 text-xs font-bold uppercase tracking-widest border border-black/20 px-3 py-1 rounded">24/7 Support</div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default PgSoftProvider;
