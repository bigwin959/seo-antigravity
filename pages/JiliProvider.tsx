import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { Breadcrumbs } from '../components/Section';
import { OFFICIAL_DOMAIN } from '../constants';
import {
    Gift,
    Zap,
    Users,
    BarChart3,
    ShieldCheck,
    Smartphone,
    CheckCircle,
    ArrowRight,
    Lock,
    Gamepad2,
    Shield,
    Star,
    Coins,
    MousePointer
} from 'lucide-react';

const safeMap = (data: any) => Array.isArray(data) ? data : [];

const getOptimizedUrl = (url: string, transform: string) => {
    if (!url || !url.includes('cloudinary')) return url;
    // Strip existing common transforms but KEEP the 'v' to avoid duplication/conflicts
    const cleanUrl = url.replace(/\/upload\/.*\/v/, '/upload/v');
    // Inject new transform
    return cleanUrl.replace('/upload/', `/upload/${transform}/`);
};

const JiliProvider: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <SEO
                metadata={{
                    title: t('providers.jili.seo.title'),
                    description: t('providers.jili.seo.description'),
                    keywords: safeMap(t('providers.jili.seo.keywords', { returnObjects: true })),
                    canonicalUrl: "https://bigwinofficial.com/providers/jili",
                    ogType: 'article',
                    publishedTime: '2025-01-01T00:00:00+06:00',
                    modifiedTime: new Date().toISOString(),
                    author: 'Bigwin959 Guide',
                    schema: {
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": t('providers.jili.seo.schema.headline'),
                        "description": t('providers.jili.seo.schema.description'),
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
                            "@id": "https://bigwinofficial.com/providers/jili"
                        }
                    }
                }}
            />

            <Breadcrumbs items={[
                { label: t('nav.providers'), path: '/providers' },
                { label: t('breadcrumbs.jili'), path: '/providers/jili' }
            ]} />

            {/* SECTION 1: HERO */}
            <section className="relative py-24 bg-gradient-to-br from-[#2e1065] via-[#4c1d95] to-black overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand/20 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] animate-pulse delay-1000"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <div className="inline-block mb-4 px-4 py-1 rounded-full border border-brand/30 bg-brand/10 text-brand font-bold text-sm tracking-widest uppercase animate-pulse">
                        {t('providers.jili.hero.badge')}
                    </div>
                    <h1
                        className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
                        dangerouslySetInnerHTML={{ __html: t('providers.jili.hero.title') }}
                    />

                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        {t('providers.jili.hero.subtitle')}
                    </p>
                    <a href={OFFICIAL_DOMAIN} rel="nofollow noopener noreferrer" aria-label={t('providers.jili.hero.cta.play')} className="inline-flex items-center bg-brand hover:bg-white text-black font-bold py-4 px-10 rounded-full transition-all shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transform hover:-translate-y-1">
                        {t('providers.jili.hero.cta.play')} <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">

                {/* SECTION 2: ABOUT JILI */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 underline decoration-brand/50 decoration-4 underline-offset-8"
                            dangerouslySetInnerHTML={{ __html: t('providers.jili.intro.title') }}
                        />
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed italic">
                            {t('providers.jili.intro.desc')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="bg-gray-800 border-l-4 border-brand p-6 rounded-r-xl">
                                <h3 className="text-brand font-bold text-xl mb-4 italic flex items-center gap-2">
                                    <Shield className="w-5 h-5" /> {t('providers.jili.intro.foundation.title')}
                                </h3>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex justify-between border-b border-gray-700 pb-2">
                                        <span className="font-bold">{t('providers.jili.intro.foundation.foundedLabel')}</span>
                                        <span>Asian Core Markets</span>
                                    </li>
                                    <li className="flex justify-between border-b border-gray-700 pb-2">
                                        <span className="font-bold">{t('providers.jili.intro.foundation.hqLabel')}</span>
                                        <span>Global Reach (BD, MM, PH, VN)</span>
                                    </li>
                                    <li className="flex justify-between border-b border-gray-700 pb-2">
                                        <span className="font-bold">{t('providers.jili.intro.foundation.licensesLabel')}</span>
                                        <span>RNG Certified / GLI Compatible</span>
                                    </li>
                                    <li>
                                        <span className="font-bold block mb-1 text-brand">{t('providers.jili.intro.foundation.specLabel')}</span>
                                        <span className="text-sm">{t('providers.jili.intro.foundation.specValue')}</span>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                {t('providers.jili.intro.foundation.desc')}
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <h3 className="text-white font-bold text-xl mb-2">{t('providers.jili.intro.philosophy.title')}</h3>
                            {safeMap(t('providers.jili.intro.philosophy.points', { returnObjects: true })).map((point: any, i: number) => (
                                <div key={i} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-brand/30 transition-colors">
                                    <h4 className="text-brand font-bold mb-1">{point.label}</h4>
                                    <p className="text-gray-400 text-sm">{point.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 3: INNOVATION */}
                <section className="bg-gradient-to-r from-purple-900/20 to-black p-8 md:p-12 rounded-3xl border border-purple-500/30 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Gift className="w-64 h-64 text-purple-500 transform rotate-12" />
                    </div>

                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row gap-12">
                            <div className="flex-1 space-y-6">
                                <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter uppercase underline decoration-purple-500 decoration-8 underline-offset-4">
                                    {t('providers.jili.innovation.title')}
                                </h2>
                                <p className="text-xl text-gray-300 font-medium">
                                    {t('providers.jili.innovation.subtitle')}
                                </p>
                                <div className="space-y-4">
                                    <h3 className="text-white font-bold text-2xl border-b-2 border-purple-500 w-fit pb-1">
                                        {t('providers.jili.innovation.features.title')}
                                    </h3>
                                    {safeMap(t('providers.jili.innovation.features.items', { returnObjects: true })).map((point: any, i: number) => (
                                        <div key={i}>
                                            <span className="text-purple-400 font-bold mr-2 uppercase tracking-wider">{point.label}</span>
                                            <span className="text-gray-400">{point.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1 space-y-8">
                                <div className="bg-black/50 p-6 rounded-2xl border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.15)] relative">
                                    <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                                        <Zap className="w-5 h-5 text-purple-500" /> Key Popularity Factors
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {safeMap(t('providers.jili.whyPopular.items', { returnObjects: true })).map((item: any, i: number) => {
                                            const Icon = [MousePointer, Gift, Shield, Coins, Smartphone][i];
                                            return (
                                                <div key={i} className="space-y-1">
                                                    <div className="flex items-center gap-2 text-brand font-bold text-sm">
                                                        <Icon className="w-4 h-4" /> {item.title}
                                                    </div>
                                                    <p className="text-gray-500 text-xs leading-tight">{item.desc}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-white font-bold text-xl uppercase tracking-widest bg-purple-500/10 w-fit px-4 py-1 rounded">
                                        {t('providers.jili.innovation.mechanics.title')}
                                    </h3>
                                    <div className="space-y-3">
                                        {safeMap(t('providers.jili.innovation.mechanics.steps', { returnObjects: true })).map((step: any, i: number) => (
                                            <div key={i} className="flex gap-4 group">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand/20 text-brand font-bold flex items-center justify-center border border-brand/30 group-hover:bg-brand group-hover:text-black transition-all">
                                                    {i + 1}
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-bold">{step.title}</h4>
                                                    <p className="text-gray-400 text-sm italic">{step.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: PORTFOLIO */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4 uppercase tracking-tighter italic">
                            {t('providers.jili.portfolio.title')}
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            {t('providers.jili.portfolio.subtitle')}
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8">
                        {safeMap(t('providers.jili.portfolio.games', { returnObjects: true })).map((game: any, i: number) => (
                            <div key={i} className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-brand/40 transition-all flex flex-col md:flex-row gap-6 relative group overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 scale-150 transition-all rotate-12">
                                    <Star className="w-16 h-16 text-brand" />
                                </div>

                                <div className="flex-shrink-0 w-full md:w-48 h-48 bg-gray-900 rounded-xl flex items-center justify-center relative shadow-inner border border-gray-700 overflow-hidden">
                                    <img
                                        src={getOptimizedUrl(game.img || "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000523/JILI-Boxing-King.png", "f_auto,q_auto:eco")}
                                        {...(!game.img && {
                                            srcSet: `${getOptimizedUrl("https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000523/JILI-Boxing-King.png", "w_200,f_auto,q_auto:eco")} 200w, ${getOptimizedUrl("https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000523/JILI-Boxing-King.png", "w_400,f_auto,q_auto:eco")} 400w, ${getOptimizedUrl("https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000523/JILI-Boxing-King.png", "w_600,f_auto,q_auto:eco")} 600w`,
                                            sizes: "(max-width: 768px) 100vw, 200px"
                                        })}
                                        width="192"
                                        height="192"
                                        loading="lazy"
                                        alt={game.title}
                                        className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 p-3 bg-black/60 backdrop-blur-sm">
                                        <div className="text-white font-bold text-sm uppercase text-center tracking-tighter">{game.title}</div>
                                    </div>
                                    <div className="absolute top-2 left-2 flex gap-1">
                                        {game.popularity.split('').map((s: string, idx: number) => (
                                            <Star key={idx} className={`w-3 h-3 ${s === '★' ? 'text-brand fill-brand' : 'text-gray-600'}`} />
                                        ))}
                                    </div>
                                </div>

                                <div className="flex-1 space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-bold text-white uppercase italic tracking-wider">{game.title}</h3>
                                            <span className="text-xs text-brand/80 font-bold uppercase tracking-widest">{game.category}</span>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xs text-gray-500 uppercase">{t('providers.jili.portfolio.labels.rtp')}</div>
                                            <div className="text-white font-bold">{game.rtp}</div>
                                        </div>
                                    </div>

                                    <p className="text-gray-400 text-sm leading-snug">
                                        {game.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {safeMap(game.features).map((feat: string, idx: number) => (
                                            <span key={idx} className="px-2 py-1 bg-gray-900 border border-gray-700 rounded text-[10px] text-gray-300 font-bold uppercase">
                                                {feat}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="pt-4 flex items-center justify-between border-t border-gray-700/50 mt-auto">
                                        <div className="text-xs text-gray-500">
                                            {t('providers.jili.portfolio.labels.maxWin')}: <span className="text-brand font-bold">{game.maxWin}</span>
                                        </div>
                                        <a href={OFFICIAL_DOMAIN} aria-label={`Play ${game.title} now`} className="text-brand hover:text-white font-bold text-sm uppercase flex items-center gap-1 transition-colors group">
                                            {t('providers.jili.portfolio.playNow')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION 4.5: COMPARISON */}
                <section className="py-12 bg-gray-900/50 rounded-3xl border border-gray-800">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 uppercase italic tracking-tight">
                            {t('providers.jili.comparison.title')}
                        </h2>
                        <p className="text-gray-400 text-sm italic">{t('providers.jili.comparison.subtitle')}</p>
                    </div>
                    <div className="max-w-4xl mx-auto px-4 overflow-x-auto">
                        <table className="w-full border-collapse bg-black/40 rounded-xl overflow-hidden">
                            <thead>
                                <tr className="bg-brand/10 text-brand text-xs uppercase tracking-widest italic font-black">
                                    <th className="p-4 text-left border-b border-gray-800">{t('providers.jili.comparison.header.feature')}</th>
                                    <th className="p-4 text-left border-b border-brand/20 bg-brand/5">JILI</th>
                                    <th className="p-4 text-left border-b border-gray-800">Pragmatic</th>
                                    <th className="p-4 text-left border-b border-gray-800">JDB</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {safeMap(t('providers.jili.comparison.rows', { returnObjects: true })).map((row: any, i: number) => (
                                    <tr key={i} className="border-b border-gray-800/50 text-gray-300">
                                        <td className="p-4 font-bold text-gray-400">{row.feature}</td>
                                        <td className="p-4 bg-brand/5 font-black text-white">{row.jili}</td>
                                        <td className="p-4">{row.pragmatic}</td>
                                        <td className="p-4">{row.jdb}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* SECTION 5: TECHNOLOGY */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4 uppercase tracking-tighter italic">
                            {t('providers.jili.tech.title')}
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto italic">
                            {t('providers.jili.tech.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="col-span-1 md:col-span-2 space-y-8">
                            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-5 transition-opacity">
                                    <Lock className="w-32 h-32 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
                                    <Lock className="w-6 h-6 text-brand" /> {t('providers.jili.tech.fairness.title')}
                                </h3>
                                <div className="grid sm:grid-cols-3 gap-6">
                                    {safeMap(t('providers.jili.tech.fairness.points', { returnObjects: true })).map((point: any, i: number) => (
                                        <div key={i} className="space-y-3">
                                            <h4 className="text-brand font-black text-sm uppercase italic tracking-tighter">{point.label}</h4>
                                            <p className="text-gray-400 text-xs leading-relaxed">{point.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 relative overflow-hidden group">
                                <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
                                    <BarChart3 className="w-6 h-6 text-brand" /> {t('providers.jili.tech.infra.title')}
                                </h3>
                                <div className="grid sm:grid-cols-3 gap-6">
                                    {safeMap(t('providers.jili.tech.infra.points', { returnObjects: true })).map((point: any, i: number) => (
                                        <div key={i} className="space-y-3">
                                            <h4 className="text-brand font-black text-sm uppercase italic tracking-tighter">{point.label}</h4>
                                            <p className="text-gray-400 text-xs leading-relaxed">{point.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-brand rounded-2xl p-8 border border-white/20 shadow-[0_20px_50px_rgba(255,215,0,0.1)]">
                            <h3 className="text-black font-black text-2xl mb-8 uppercase italic leading-tight">
                                {t('providers.jili.tech.importance.title')}
                            </h3>
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h4 className="text-black font-bold uppercase text-sm tracking-widest border-b border-black/20 pb-1">
                                        {t('providers.jili.tech.importance.trust.title')}
                                    </h4>
                                    <ul className="space-y-3">
                                        {safeMap(t('providers.jili.tech.importance.trust.points', { returnObjects: true })).map((point: string, i: number) => (
                                            <li key={i} className="flex items-start gap-2 text-black/80 font-medium text-sm">
                                                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /> {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-black font-bold uppercase text-sm tracking-widest border-b border-black/20 pb-1">
                                        {t('providers.jili.tech.importance.benefits.title')}
                                    </h4>
                                    <ul className="space-y-3">
                                        {safeMap(t('providers.jili.tech.importance.benefits.points', { returnObjects: true })).map((point: string, i: number) => (
                                            <li key={i} className="flex items-start gap-2 text-black/80 font-medium text-sm">
                                                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /> {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 6: MOBILE FIRST */}
                <section className="bg-gradient-to-b from-gray-900 to-black p-8 md:p-12 rounded-3xl border border-gray-800 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 grayscale rotate-12">
                        <Smartphone className="w-64 h-64 text-brand" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-black text-white italic tracking-tighter uppercase mb-4">
                                {t('providers.jili.mobile.title')}
                            </h2>
                            <p className="text-gray-400 max-w-2xl italic">
                                {t('providers.jili.mobile.subtitle')}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 w-full mb-16">
                            {safeMap(t('providers.jili.mobile.features', { returnObjects: true })).map((feat: any, i: number) => {
                                const Icon = [Gamepad2, Zap, Smartphone][i];
                                return (
                                    <div key={i} className="flex flex-col items-center text-center space-y-4 bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:-translate-y-1 transition-transform group">
                                        <div className="p-4 bg-brand/5 rounded-full text-brand group-hover:bg-brand group-hover:text-black transition-colors">
                                            <Icon className="w-8 h-8" />
                                        </div>
                                        <h4 className="text-white font-bold text-lg uppercase tracking-wider">{feat.title}</h4>
                                        <p className="text-gray-500 text-sm">{feat.desc}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 w-full">
                            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                                <h3 className="text-brand font-black text-xl mb-6 flex items-center gap-3">
                                    <ShieldCheck className="w-6 h-6" /> {t('providers.jili.mobile.advantages.tech.title')}
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                                    {safeMap(t('providers.jili.mobile.advantages.tech.points', { returnObjects: true })).map((p: any, i: number) => (
                                        <div key={i}>
                                            <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest">{p.label}</div>
                                            <div className="text-white font-bold text-sm">{p.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                                <h3 className="text-brand font-black text-xl mb-6 flex items-center gap-3">
                                    <Users className="w-6 h-6" /> {t('providers.jili.mobile.advantages.ux.title')}
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                                    {safeMap(t('providers.jili.mobile.advantages.ux.points', { returnObjects: true })).map((p: any, i: number) => (
                                        <div key={i}>
                                            <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest">{p.label}</div>
                                            <div className="text-white font-bold text-sm">{p.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 7: GETTING STARTED */}
                <section>
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="flex-1 space-y-8 order-2 lg:order-1">
                            <div>
                                <h2 className="text-3xl font-black text-white italic tracking-tighter uppercase mb-4">
                                    {t('providers.jili.gettingStarted.title')}
                                </h2>
                                <p className="text-gray-400 italic">
                                    {t('providers.jili.gettingStarted.subtitle')}
                                </p>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {safeMap(t('providers.jili.gettingStarted.steps', { returnObjects: true })).map((step: string, i: number) => (
                                    <div key={i} className="flex gap-4 bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-brand/30 transition-colors group">
                                        <span className="flex-shrink-0 w-8 h-8 rounded bg-gray-900 border border-gray-700 text-brand font-black flex items-center justify-center group-hover:bg-brand group-hover:text-black transition-colors">{i + 1}</span>
                                        <span className="text-gray-300 text-sm font-medium">{step}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-brand/10 border-l-4 border-brand p-5 rounded-r-xl">
                                <h4 className="text-brand font-black uppercase text-sm mb-1">{t('providers.jili.gettingStarted.disclaimer.label')}</h4>
                                <p className="text-gray-400 text-sm italic">{t('providers.jili.gettingStarted.disclaimer.text')}</p>
                            </div>
                        </div>
                        <div className="flex-1 order-1 lg:order-2 flex justify-center w-full">
                            <div className="relative w-full max-w-md aspect-[4/5] bg-gray-900 rounded-3xl border border-gray-800 shadow-2xl overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                                <img
                                    src={getOptimizedUrl("https://res.cloudinary.com/dmyocpyxd/image/upload/v1767689381/JILI-Section-Mobile-UI.jpg", "f_auto,q_auto:eco")}
                                    srcSet={`${getOptimizedUrl("https://res.cloudinary.com/dmyocpyxd/image/upload/v1767689381/JILI-Section-Mobile-UI.jpg", "w_300,f_auto,q_auto:eco")} 300w, ${getOptimizedUrl("https://res.cloudinary.com/dmyocpyxd/image/upload/v1767689381/JILI-Section-Mobile-UI.jpg", "w_500,f_auto,q_auto:eco")} 500w, ${getOptimizedUrl("https://res.cloudinary.com/dmyocpyxd/image/upload/v1767689381/JILI-Section-Mobile-UI.jpg", "w_600,f_auto,q_auto:eco")} 600w`}
                                    sizes="(max-width: 768px) 100vw, 400px"
                                    width="400"
                                    height="500"
                                    loading="lazy"
                                    alt="JILI Mobile UI"
                                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-8 z-20 space-y-4">
                                    <div className="inline-block bg-brand text-black font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-tighter">Live Games Available</div>
                                    <h3 className="text-white text-3xl font-black italic tracking-tighter uppercase leading-none">Victory Awaits on Mobile</h3>
                                    <p className="text-gray-400 text-sm italic">Join millions of players on the Bigwin959 platform.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 8: FAQ */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">{t('providers.jili.faq.title')}</h2>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {safeMap(t('providers.jili.faq.items', { returnObjects: true })).map((item: any, i: number) => (
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">{t('providers.jili.responsible.title')}</h2>
                    <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto relative z-10 mb-6">
                        {safeMap(t('providers.jili.responsible.tips', { returnObjects: true })).map((tip: string, i: number) => (
                            <div key={i} className="bg-gray-900/50 p-4 rounded-xl border border-gray-700 text-gray-300 text-sm italic">
                                "{tip}"
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-400 text-sm relative z-10 max-w-2xl mx-auto">
                        {t('providers.jili.responsible.disclaimer')}
                    </p>
                </section>

                {/* SECTION 11: CTA */}
                <section className="py-24 bg-gradient-to-r from-[#2e1065] to-[#4c1d95] rounded-3xl text-center relative overflow-hidden shadow-[0_20px_50px_rgba(76,29,149,0.3)]">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-[100px]"></div>
                    </div>

                    <div className="relative z-10 space-y-8 max-w-3xl mx-auto px-4">
                        <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-none">
                            {t('providers.jili.cta.title')}
                        </h2>
                        <p className="text-white/80 text-xl font-medium tracking-tight">
                            Experience the best of Asian slot gaming with JILI.
                        </p>
                        <a href={OFFICIAL_DOMAIN} aria-label={t('providers.jili.cta.button')} className="inline-flex items-center gap-3 bg-brand hover:bg-white text-black font-black py-5 px-14 rounded-full transition-all shadow-2xl transform hover:-translate-y-2 uppercase tracking-widest text-lg">
                            {t('providers.jili.cta.button')} <ArrowRight className="w-6 h-6" />
                        </a>
                        <div className="flex justify-center gap-8 pt-8 flex-wrap">
                            <div className="text-white/60 text-xs font-bold uppercase tracking-widest border border-white/20 px-3 py-1 rounded">RNG Certified</div>
                            <div className="text-white/60 text-xs font-bold uppercase tracking-widest border border-white/20 px-3 py-1 rounded">Mobile Optimized</div>
                            <div className="text-white/60 text-xs font-bold uppercase tracking-widest border border-white/20 px-3 py-1 rounded">24/7 Support</div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default JiliProvider;
