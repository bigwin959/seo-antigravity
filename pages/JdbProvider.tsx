import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import SEO from '../components/SEO';
import { Breadcrumbs } from '../components/Section';
import { OFFICIAL_DOMAIN } from '../constants';
import {
    Layers,
    Shield,
    Flame,
    Globe,
    Smartphone,
    CheckCircle,
    ArrowRight,
    ShieldCheck,
    TrendingUp
} from 'lucide-react';

const safeMap = (data: any) => Array.isArray(data) ? data : [];

const JdbProvider: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <SEO
                metadata={{
                    title: t('providers.jdb.seo.title'),
                    description: t('providers.jdb.seo.description'),
                    keywords: safeMap(t('providers.jdb.seo.keywords', { returnObjects: true })),
                    canonicalUrl: "https://bigwinofficial.com/providers/jdb",
                    ogType: 'article',
                    publishedTime: '2025-01-01T00:00:00+06:00',
                    modifiedTime: new Date().toISOString(),
                    author: 'Bigwin959 Guide',
                    schema: {
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": t('providers.jdb.seo.schema.headline'),
                        "description": t('providers.jdb.seo.schema.description'),
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
                            "@id": "https://bigwinofficial.com/providers/jdb"
                        }
                    }
                }}
            />

            <Breadcrumbs items={[
                { label: t('nav.providers'), path: '/providers' },
                { label: t('breadcrumbs.jdb'), path: '/providers/jdb' }
            ]} />

            {/* SECTION 1: HERO */}
            <section className="relative py-24 bg-gradient-to-br from-[#2e1065] via-[#4c1d95] to-black overflow-hidden">
                {/* Abstract Gold Lines / Glow */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand/20 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px]"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <h1
                        className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
                        dangerouslySetInnerHTML={{ __html: t('providers.jdb.hero.title') }}
                    />

                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        {t('providers.jdb.hero.subtitle')}
                    </p>
                    <a href={OFFICIAL_DOMAIN} rel="nofollow noopener noreferrer" className="inline-flex items-center bg-brand hover:bg-white text-black font-bold py-4 px-10 rounded-full transition-all shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transform hover:-translate-y-1">
                        {t('providers.jdb.hero.cta.play')} <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">

                {/* SECTION 2: WHO IS JDB */}
                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white border-l-4 border-brand pl-6">{t('providers.jdb.intro.title')}</h2>
                        <div className="prose prose-invert text-gray-300">
                            <p className="text-lg">
                                {t('providers.jdb.intro.p1')}
                            </p>
                            <p>{t('providers.jdb.intro.p2')}</p>
                            <ul className="grid sm:grid-cols-2 gap-2 mt-4">
                                {safeMap(t('providers.jdb.intro.features', { returnObjects: true })).map((item: string, i: number) => (
                                    <li key={i} className="flex items-center gap-2 text-sm"><CheckCircle className="w-4 h-4 text-brand" /> {item}</li>
                                ))}
                            </ul>
                            <p className="text-sm text-gray-400 mt-4">{t('providers.jdb.intro.p3')}</p>
                        </div>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border border-gray-700 shadow-2xl bg-gray-800 p-1">
                        <img
                            src="https://res.cloudinary.com/dmyocpyxd/image/upload/v1767689377/JDB-Section-Studio-Image.jpg"
                            srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_300,f_auto,q_auto/v1767689377/JDB-Section-Studio-Image.jpg 300w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_600,f_auto,q_auto/v1767689377/JDB-Section-Studio-Image.jpg 600w"
                            sizes="(max-width: 768px) 100vw, 500px"
                            width="600"
                            height="400"
                            loading="lazy"
                            alt="JDB Game Studio"
                            className="rounded-xl w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                        />
                    </div>
                </section>

                {/* SECTION 3: WHY POPULAR */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-10 text-center">{t('providers.jdb.whyPopular.title')}</h2>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {safeMap(t('providers.jdb.whyPopular.items', { returnObjects: true })).map((item: any, i: number) => {
                            const Icon = [Layers, Shield, Flame, Globe, Smartphone][i];
                            return (
                                <div key={i} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-brand/50 transition-all group h-full">
                                    <Icon className="w-8 h-8 text-brand mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-lg font-bold text-white mb-2 leading-tight">{item.title}</h3>
                                    <p className="text-gray-400 text-xs">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* SECTION 4: TOP GAMES */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-10">{t('providers.jdb.topGames.title')}</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {safeMap(t('providers.jdb.topGames.items', { returnObjects: true })).map((game: any, i: number) => (
                            <div key={i} className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-brand transition-all flex flex-col">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={game.img || "https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto/v1767689377/JDB-Section-Studio-Image.jpg"}
                                        width="300"
                                        height="200"
                                        loading="lazy"
                                        alt={game.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-2 right-2 bg-black/70 text-brand text-xs font-bold px-2 py-1 rounded backdrop-blur-sm">
                                        {game.type}
                                    </div>
                                </div>
                                <div className="p-5 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4 flex-1">{game.features}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION 5: FEATURES */}
                <section className="bg-gray-800 rounded-3xl p-8 md:p-12 border border-gray-700">
                    <h2 className="text-3xl font-bold text-white mb-8">{t('providers.jdb.features.title')}</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-8">
                            {safeMap(t('providers.jdb.features.items', { returnObjects: true })).slice(0, 2).map((item: any, i: number) => {
                                const Icon = [Flame, TrendingUp][i];
                                return (
                                    <div key={i} className="flex gap-4">
                                        <div className="bg-brand/10 p-3 rounded-xl h-fit"><Icon className="w-6 h-6 text-brand" /></div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg">{item.title}</h4>
                                            <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="space-y-8">
                            {safeMap(t('providers.jdb.features.items', { returnObjects: true })).slice(2, 4).map((item: any, i: number) => {
                                const Icon = [Layers, Smartphone][i];
                                return (
                                    <div key={i} className="flex gap-4">
                                        <div className="bg-brand/10 p-3 rounded-xl h-fit"><Icon className="w-6 h-6 text-brand" /></div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg">{item.title}</h4>
                                            <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* SECTION 6: PROFILE TABLE */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">{t('providers.jdb.profile.title')}</h2>
                    <div className="overflow-hidden rounded-xl border border-gray-700">
                        <table className="w-full text-left">
                            <thead className="bg-gray-900 border-b border-gray-700">
                                <tr>
                                    <th className="p-4 text-brand font-bold uppercase text-sm">{t('providers.jdb.profile.feature')}</th>
                                    <th className="p-4 text-brand font-bold uppercase text-sm">{t('providers.jdb.profile.details')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700 bg-gray-800">
                                {safeMap(t('providers.jdb.profile.items', { returnObjects: true })).map((item: any, i: number) => (
                                    <tr key={i}>
                                        <td className="p-4 text-white font-bold">{item.label}</td>
                                        <td className="p-4 text-gray-300">{item.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* SECTION 7: HOW TO FIND */}
                <section className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-white mb-6">{t('providers.jdb.howToFind.title')}</h2>
                        <ol className="space-y-4">
                            {safeMap(t('providers.jdb.howToFind.steps', { returnObjects: true })).map((step: string, i: number) => (
                                <li key={i} className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg border border-gray-700">
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand text-black font-bold flex items-center justify-center">{i + 1}</span>
                                    <span className="text-gray-300">{step}</span>
                                </li>
                            ))}
                        </ol>
                        <p className="mt-4 text-sm text-gray-400 pl-2">{t('providers.jdb.howToFind.note')}</p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full"></div>
                            <img
                                src="https://res.cloudinary.com/dmyocpyxd/image/upload/v1767689376/JDB-Section-Slot-UI.jpg"
                                srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_200,f_auto,q_auto/v1767689376/JDB-Section-Slot-UI.jpg 200w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_400,f_auto,q_auto/v1767689376/JDB-Section-Slot-UI.jpg 400w"
                                sizes="(max-width: 768px) 100vw, 300px"
                                width="300"
                                height="500"
                                loading="lazy"
                                alt="JDB Slot UI"
                                className="relative z-10 rounded-2xl border-4 border-gray-800 shadow-2xl w-64"
                            />
                        </div>
                    </div>
                </section>

                {/* SECTION 8: COMPARISON */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">{t('providers.jdb.comparison.title')}</h2>
                    <div className="overflow-x-auto rounded-xl border border-gray-700">
                        <table className="w-full text-left bg-gray-800">
                            <thead className="bg-gray-900 border-b border-gray-700">
                                <tr>
                                    <th className="p-4 text-white font-bold">{t('providers.jdb.comparison.columns.provider')}</th>
                                    <th className="p-4 text-white font-bold">{t('providers.jdb.comparison.columns.style')}</th>
                                    <th className="p-4 text-white font-bold">{t('providers.jdb.comparison.columns.risk')}</th>
                                    <th className="p-4 text-white font-bold">{t('providers.jdb.comparison.columns.bestFor')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700">
                                {safeMap(t('providers.jdb.comparison.rows', { returnObjects: true })).map((row: any, i: number) => (
                                    <tr key={i}>
                                        <td className={`p-4 font-bold ${i === 0 ? 'text-brand' : 'text-white'}`}>{row.provider}</td>
                                        <td className="p-4 text-gray-300">{row.style}</td>
                                        <td className="p-4 text-gray-300">{row.risk}</td>
                                        <td className="p-4 text-gray-300">{row.bestFor}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* SECTION 9: RESPONSIBLE PLAY */}
                <section className="border border-brand/30 bg-brand/5 rounded-2xl p-8 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><ShieldCheck className="w-32 h-32 text-brand" /></div>
                    <h2 className="text-2xl font-bold text-white mb-4 relative z-10">{t('providers.jdb.responsible.title')}</h2>
                    <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto relative z-10 mb-6">
                        {safeMap(t('providers.jdb.responsible.tips', { returnObjects: true })).map((tip: string, i: number) => (
                            <div key={i} className="bg-gray-900/50 p-3 rounded border border-gray-700 text-gray-300 text-sm">
                                {tip}
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-400 text-sm relative z-10">
                        {t('providers.jdb.responsible.disclaimer')}
                    </p>
                </section>

                {/* SECTION 10: FAQ */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">{t('providers.jdb.faq.title')}</h2>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {safeMap(t('providers.jdb.faq.items', { returnObjects: true })).map((item: any, i: number) => (
                            <div key={i} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                                <h4 className="font-bold text-white mb-2">{item.q}</h4>
                                <p className="text-gray-400 text-sm">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>

            {/* SECTION 11: CTA */}
            <section className="py-12 bg-[#2e1065] text-center mt-12">
                <h2 className="text-2xl font-bold text-white mb-6">{t('providers.jdb.cta.title')}</h2>
                <a href={OFFICIAL_DOMAIN} className="inline-block bg-brand hover:bg-white text-black font-bold py-3 px-12 rounded-full transition-colors">
                    {t('providers.jdb.cta.button')}
                </a>
            </section>
        </>
    );
};

export default JdbProvider;
