import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { Breadcrumbs } from '../components/Section';
import { OFFICIAL_DOMAIN } from '../constants';
import {
    Zap,
    Users,
    ShieldCheck,
    Smartphone,
    CheckCircle,
    ArrowRight,
    Gamepad2,
    BarChart3,
    MousePointer,
    Layout,
    Sparkles,
    Star,
    Search,
    Shield,
    Trophy,
    Activity,
    Flame,
    Layers,
    Lock,
    Globe
} from 'lucide-react';

const safeMap = (data: any) => Array.isArray(data) ? data : [];

const BngProvider: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <SEO
                metadata={{
                    title: t('providers.bng.seo.title'),
                    description: t('providers.bng.seo.description'),
                    keywords: safeMap(t('providers.bng.seo.keywords', { returnObjects: true })),
                    canonicalUrl: "https://bigwinofficial.com/providers/bng",
                    ogType: 'article',
                    publishedTime: '2025-01-01T00:00:00+06:00',
                    modifiedTime: new Date().toISOString(),
                    author: 'Bigwin959 Guide',
                    schema: {
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": t('providers.bng.seo.schema.headline'),
                        "description": t('providers.bng.seo.schema.description'),
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
                            "@id": "https://bigwinofficial.com/providers/bng"
                        }
                    }
                }}
            />

            <Breadcrumbs items={[
                { label: t('nav.providers'), path: '/providers' },
                { label: t('breadcrumbs.bng'), path: '/providers/bng' }
            ]} />

            {/* SECTION 1: HERO */}
            <section className="relative py-24 bg-gradient-to-br from-[#1a1c2c] via-[#29366f] to-black overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px] animate-pulse delay-1000"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <div className="inline-block mb-4 px-4 py-1 rounded-full border border-blue-400/30 bg-blue-400/10 text-blue-400 font-bold text-sm tracking-widest uppercase animate-pulse">
                        {t('providers.bng.hero.badge')}
                    </div>
                    <h1
                        className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
                        dangerouslySetInnerHTML={{ __html: t('providers.bng.hero.title') }}
                    />

                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        {t('providers.bng.hero.subtitle')}
                    </p>
                    <a href={OFFICIAL_DOMAIN} rel="nofollow noopener noreferrer" className="inline-flex items-center bg-brand hover:bg-white text-black font-bold py-4 px-10 rounded-full transition-all shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transform hover:-translate-y-1">
                        {t('providers.bng.hero.cta.play')} <Activity className="ml-2 w-5 h-5" />
                    </a>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">

                {/* SECTION 2: INTRO */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 underline decoration-brand decoration-4 underline-offset-8"
                            dangerouslySetInnerHTML={{ __html: t('providers.bng.intro.title') }}
                        />
                        <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed italic">
                            {t('providers.bng.intro.desc')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="bg-gray-800 border-l-4 border-brand p-6 rounded-r-xl">
                                <h3 className="text-brand font-bold text-xl mb-4 italic flex items-center gap-2">
                                    <Trophy className="w-5 h-5" /> {t('providers.bng.intro.foundation.title')}
                                </h3>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex justify-between border-b border-gray-700 pb-2">
                                        <span className="font-bold">{t('providers.bng.intro.foundation.foundedLabel')}</span>
                                        <span>3 Oaks Gaming</span>
                                    </li>
                                    <li className="flex justify-between border-b border-gray-700 pb-2">
                                        <span className="font-bold">{t('providers.bng.intro.foundation.hqLabel')}</span>
                                        <span>Global Multi-Market</span>
                                    </li>
                                    <li className="flex justify-between border-b border-gray-700 pb-2">
                                        <span className="font-bold">{t('providers.bng.intro.foundation.licensesLabel')}</span>
                                        <span>Audited RNG</span>
                                    </li>
                                    <li>
                                        <span className="font-bold block mb-1 text-brand">{t('providers.bng.intro.foundation.specLabel')}</span>
                                        <span className="text-sm">{t('providers.bng.intro.foundation.specValue')}</span>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                {t('providers.bng.intro.foundation.desc')}
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="relative rounded-2xl overflow-hidden border border-gray-700 shadow-2xl bg-gray-800 p-1">
                                <img
                                    src="https://res.cloudinary.com/dmyocpyxd/image/upload/v1767689368/BNG-%28Booongo%29-Section-Studio-Image.jpg"
                                    srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_300,f_auto,q_auto/v1767689368/BNG-%28Booongo%29-Section-Studio-Image.jpg 300w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_600,f_auto,q_auto/v1767689368/BNG-%28Booongo%29-Section-Studio-Image.jpg 600w"
                                    sizes="(max-width: 768px) 100vw, 500px"
                                    width="500"
                                    height="350"
                                    loading="lazy"
                                    alt="BNG Game Studio"
                                    className="rounded-xl w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <h3 className="text-white font-bold text-xl mb-2">{t('providers.bng.intro.philosophy.title')}</h3>
                            {safeMap(t('providers.bng.intro.philosophy.points', { returnObjects: true })).map((point: any, i: number) => (
                                <div key={i} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-brand/30 transition-colors">
                                    <h4 className="text-brand font-bold mb-1">{point.label}</h4>
                                    <p className="text-gray-400 text-sm">{point.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 3: INNOVATION */}
                <section className="bg-gradient-to-r from-indigo-900/20 to-black p-8 md:p-12 rounded-3xl border border-indigo-500/30 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Flame className="w-64 h-64 text-brand transform rotate-12" />
                    </div>

                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row gap-12">
                            <div className="flex-1 space-y-6">
                                <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter uppercase underline decoration-brand decoration-8 underline-offset-4">
                                    {t('providers.bng.innovation.title')}
                                </h2>
                                <p className="text-xl text-gray-300 font-medium">
                                    {t('providers.bng.innovation.subtitle')}
                                </p>
                                <div className="space-y-4">
                                    <h3 className="text-white font-bold text-2xl border-b-2 border-brand w-fit pb-1">
                                        {t('providers.bng.innovation.features.title')}
                                    </h3>
                                    {safeMap(t('providers.bng.innovation.features.items', { returnObjects: true })).map((point: any, i: number) => (
                                        <div key={i}>
                                            <span className="text-brand font-bold mr-2 uppercase tracking-wider">{point.label}</span>
                                            <span className="text-gray-400">{point.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1 space-y-8">
                                <div className="bg-black/50 p-6 rounded-2xl border border-brand/20 shadow-[0_0_30px_rgba(255,215,0,0.1)] relative">
                                    <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                                        <Zap className="w-5 h-5 text-brand" /> Core Values
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {safeMap(t('providers.bng.intro.features', { returnObjects: true })).map((item: string, i: number) => (
                                            <div key={i} className="flex items-center gap-2 text-brand font-bold text-sm">
                                                <CheckCircle className="w-4 h-4" /> {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-white font-bold text-xl uppercase tracking-widest bg-brand/10 w-fit px-4 py-1 rounded">
                                        {t('providers.bng.innovation.mechanics.title')}
                                    </h3>
                                    <div className="space-y-3">
                                        {safeMap(t('providers.bng.innovation.mechanics.steps', { returnObjects: true })).map((step: any, i: number) => (
                                            <div key={i} className="flex gap-4 group">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-500/20 text-brand font-bold flex items-center justify-center border border-indigo-500/30 group-hover:bg-brand group-hover:text-black transition-all">
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
                            {t('providers.bng.portfolio.title')}
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            {t('providers.bng.portfolio.subtitle')}
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-8">
                        {safeMap(t('providers.bng.portfolio.games', { returnObjects: true })).map((game: any, i: number) => (
                            <div key={i} className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-brand/40 transition-all flex flex-col md:flex-row gap-6 relative group overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 scale-150 transition-all rotate-12">
                                    <Layers className="w-16 h-16 text-brand" />
                                </div>

                                <div className="flex-shrink-0 w-full md:w-48 h-48 bg-gray-900 rounded-xl flex items-center justify-center relative shadow-inner border border-gray-700 overflow-hidden">
                                    <img
                                        src={game.img || "https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto/v1767000514/slot-games.png"}
                                        {...(!game.img && {
                                            srcSet: "https://res.cloudinary.com/dmyocpyxd/image/upload/w_200,f_auto,q_auto/v1767000514/slot-games.png 200w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_400,f_auto,q_auto/v1767000514/slot-games.png 400w",
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
                                            <div className="text-xs text-gray-500 uppercase">{t('providers.bng.portfolio.labels.rtp')}</div>
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
                                            {t('providers.bng.portfolio.labels.maxWin')}: <span className="text-brand font-bold">{game.maxWin}</span>
                                        </div>
                                        <a href={OFFICIAL_DOMAIN} className="text-brand hover:text-white font-bold text-sm uppercase flex items-center gap-1 transition-colors group">
                                            {t('providers.bng.portfolio.playNow')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION 5: TECHNOLOGY */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4 uppercase tracking-tighter italic">
                            {t('providers.bng.tech.title')}
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto italic">
                            {t('providers.bng.tech.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="col-span-1 md:col-span-2 space-y-8">
                            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-5 transition-opacity">
                                    <ShieldCheck className="w-32 h-32 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
                                    <ShieldCheck className="w-6 h-6 text-brand" /> {t('providers.bng.tech.fairness.title')}
                                </h3>
                                <div className="grid sm:grid-cols-3 gap-6">
                                    {safeMap(t('providers.bng.tech.fairness.points', { returnObjects: true })).map((point: any, i: number) => (
                                        <div key={i} className="space-y-3">
                                            <h4 className="text-brand font-black text-sm uppercase italic tracking-tighter">{point.label}</h4>
                                            <p className="text-gray-400 text-xs leading-relaxed">{point.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 relative overflow-hidden group">
                                <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
                                    <BarChart3 className="w-6 h-6 text-brand" /> {t('providers.bng.tech.infra.title')}
                                </h3>
                                <div className="grid sm:grid-cols-3 gap-6">
                                    {safeMap(t('providers.bng.tech.infra.points', { returnObjects: true })).map((point: any, i: number) => (
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
                                {t('providers.bng.tech.importance.title')}
                            </h3>
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h4 className="text-black font-bold uppercase text-sm tracking-widest border-b border-black/20 pb-1">
                                        {t('providers.bng.tech.importance.trust.title')}
                                    </h4>
                                    <ul className="space-y-3">
                                        {safeMap(t('providers.bng.tech.importance.trust.points', { returnObjects: true })).map((point: string, i: number) => (
                                            <li key={i} className="flex items-start gap-2 text-black/80 font-medium text-sm">
                                                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" /> {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-black font-bold uppercase text-sm tracking-widest border-b border-black/20 pb-1">
                                        {t('providers.bng.tech.importance.benefits.title')}
                                    </h4>
                                    <ul className="space-y-3">
                                        {safeMap(t('providers.bng.tech.importance.benefits.points', { returnObjects: true })).map((point: string, i: number) => (
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
                                {t('providers.bng.mobile.title')}
                            </h2>
                            <p className="text-gray-400 max-w-2xl italic">
                                {t('providers.bng.mobile.subtitle')}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 w-full mb-16">
                            {safeMap(t('providers.bng.mobile.features', { returnObjects: true })).map((feat: any, i: number) => {
                                const Icon = [Layout, MousePointer, MousePointer][i];
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
                                    <Smartphone className="w-6 h-6" /> {t('providers.bng.mobile.advantages.tech.title')}
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                                    {safeMap(t('providers.bng.mobile.advantages.tech.points', { returnObjects: true })).map((p: any, i: number) => (
                                        <div key={i}>
                                            <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest">{p.label}</div>
                                            <div className="text-white font-bold text-sm">{p.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                                <h3 className="text-brand font-black text-xl mb-6 flex items-center gap-3">
                                    <Globe className="w-6 h-6" /> {t('providers.bng.mobile.advantages.ux.title')}
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                                    {safeMap(t('providers.bng.mobile.advantages.ux.points', { returnObjects: true })).map((p: any, i: number) => (
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
                                    {t('providers.bng.gettingStarted.title')}
                                </h2>
                                <p className="text-gray-400 italic">
                                    {t('providers.bng.gettingStarted.subtitle')}
                                </p>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {safeMap(t('providers.bng.gettingStarted.steps', { returnObjects: true })).map((step: string, i: number) => (
                                    <div key={i} className="flex gap-4 bg-gray-800 p-4 rounded-xl border border-gray-700 hover:border-brand/30 transition-colors group">
                                        <span className="flex-shrink-0 w-8 h-8 rounded bg-gray-900 border border-gray-700 text-brand font-black flex items-center justify-center group-hover:bg-brand group-hover:text-black transition-colors">{i + 1}</span>
                                        <span className="text-gray-300 text-sm font-medium">{step}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-brand/10 border-l-4 border-brand p-5 rounded-r-xl">
                                <h4 className="text-brand font-black uppercase text-sm mb-1">{t('providers.bng.gettingStarted.disclaimer.label')}</h4>
                                <p className="text-gray-400 text-sm italic">{t('providers.bng.gettingStarted.disclaimer.text')}</p>
                            </div>
                        </div>
                        <div className="flex-1 order-1 lg:order-2 flex justify-center w-full">
                            <div className="relative w-full max-w-md aspect-[4/5] bg-gray-900 rounded-3xl border border-gray-800 shadow-2xl overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                                <img
                                    src="https://res.cloudinary.com/dmyocpyxd/image/upload/v1767689367/BNG-%28Booongo%29-Section-Hold-and-Win-Feature.jpg"
                                    srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_300,f_auto,q_auto/v1767689367/BNG-%28Booongo%29-Section-Hold-and-Win-Feature.jpg 300w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_500,f_auto,q_auto/v1767689367/BNG-%28Booongo%29-Section-Hold-and-Win-Feature.jpg 500w"
                                    sizes="(max-width: 768px) 100vw, 400px"
                                    width="400"
                                    height="500"
                                    loading="lazy"
                                    alt="BNG Mobile UI"
                                    className="w-full h-auto object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-8 z-20 space-y-4">
                                    <div className="inline-block bg-brand text-black font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-tighter">HD Graphics</div>
                                    <h3 className="text-white text-3xl font-black italic tracking-tighter uppercase leading-none">Hold & Win</h3>
                                    <p className="text-gray-400 text-sm italic">The most popular jackpot mechanic in the industry.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 8: FAQ */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">{t('providers.bng.faq.title')}</h2>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {safeMap(t('providers.bng.faq.items', { returnObjects: true })).map((item: any, i: number) => (
                            <div key={i} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-brand/40 transition-colors">
                                <h4 className="font-bold text-white mb-2">{item.q}</h4>
                                <p className="text-gray-400 text-sm">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION 9: TRUST FACTORS */}
                <section className="bg-gray-800/50 rounded-3xl p-8 md:p-12 border border-gray-700">
                    <h2 className="text-3xl font-bold text-white mb-10 text-center">{t('providers.bng.trust.title')}</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {safeMap(t('providers.bng.trust.items', { returnObjects: true })).map((item: any, i: number) => {
                            const Icon = [ShieldCheck, Trophy, Smartphone, MousePointer][i];
                            return (
                                <div key={i} className="text-center space-y-4">
                                    <div className="mx-auto bg-brand/10 w-16 h-16 rounded-full flex items-center justify-center">
                                        <Icon className="w-8 h-8 text-brand" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white underline decoration-brand/30 underline-offset-4 tracking-tight">{item.title}</h3>
                                    <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* SECTION 10: CTA */}
                <section className="py-24 bg-gradient-to-r from-[#1a1c2c] to-black rounded-3xl text-center relative overflow-hidden shadow-[0_20px_50px_rgba(26,28,44,0.3)]">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand/10 rounded-full blur-[100px]"></div>
                    </div>

                    <div className="relative z-10 space-y-8 max-w-3xl mx-auto px-4">
                        <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-none">
                            {t('providers.bng.cta.title')}
                        </h2>
                        <p className="text-white/80 text-xl font-medium tracking-tight">
                            Experience the legendary Sun of Egypt serie on Bigwin959.
                        </p>
                        <a href={OFFICIAL_DOMAIN} className="inline-flex items-center gap-3 bg-brand hover:bg-white text-black font-black py-5 px-14 rounded-full transition-all shadow-2xl transform hover:-translate-y-2 uppercase tracking-widest text-lg">
                            {t('providers.bng.cta.button')} <ArrowRight className="w-6 h-6" />
                        </a>
                        <div className="flex justify-center gap-8 pt-8 flex-wrap">
                            <div className="text-white/60 text-xs font-bold uppercase tracking-widest border border-white/20 px-3 py-1 rounded">RNG Audited</div>
                            <div className="text-white/60 text-xs font-bold uppercase tracking-widest border border-white/20 px-3 py-1 rounded">HD Graphics</div>
                            <div className="text-white/60 text-xs font-bold uppercase tracking-widest border border-white/20 px-3 py-1 rounded">Social Ready</div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default BngProvider;
