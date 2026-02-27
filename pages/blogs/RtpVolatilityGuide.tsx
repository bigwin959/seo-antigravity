import React from 'react';
import { LocalizedLink } from '../../components/LocalizedLink';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import { Breadcrumbs } from '../../components/Section';
import {
    BarChart2,
    HelpCircle,
    Zap,
    Percent,
    PlayCircle
} from 'lucide-react';

const RtpVolatilityGuide: React.FC = () => {
    const { t } = useTranslation();

    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": t('rtpVolatility.seo.title'),
        "description": t('rtpVolatility.seo.description'),
        "author": {
            "@type": "Organization",
            "name": "Bigwin959 Guide"
        },
        "datePublished": "2025-01-04",
        "dateModified": "2025-01-04"
    };

    return (
        <>
            <SEO metadata={{
                title: t('rtpVolatility.seo.title'),
                description: t('rtpVolatility.seo.description'),
                keywords: t('rtpVolatility.seo.keywords', { returnObjects: true }) as string[],
                schema: schema,
                canonicalUrl: "https://bigwinofficial.com/blog/rtp-volatility-slots-explained"
            }} />
            <Breadcrumbs items={[
                { label: t('rtpVolatility.breadcrumbs.blog'), path: '/blog' },
                { label: t('rtpVolatility.breadcrumbs.current'), path: '/blog/rtp-volatility-slots-explained' }
            ]} />

            <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">

                {/* HERO SECTION */}
                <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-black rounded-3xl border border-purple-500/30 p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <BarChart2 className="w-5 h-5 text-purple-300" />
                            <span className="text-purple-300 text-sm font-bold uppercase tracking-widest">{t('rtpVolatility.hero.badge')}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                            {t('rtpVolatility.hero.title')} <br />
                            <span className="text-gray-300 text-2xl md:text-3xl block mt-2">{t('rtpVolatility.hero.subtitle')}</span>
                        </h1>
                        <p className="text-lg text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            {t('rtpVolatility.hero.description')}
                        </p>
                        <div className="flex items-center justify-center gap-2 text-sm text-purple-200">
                            <span>{t('rtpVolatility.hero.published')}</span>
                            <span>•</span>
                            <span>{t('rtpVolatility.hero.readTime')}</span>
                        </div>
                    </div>
                </section>

                {/* INTRODUCTION */}
                <section className="prose prose-invert max-w-none">
                    <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                        <p>
                            {t('rtpVolatility.intro.p1')}
                        </p>
                        <p>
                            {t('rtpVolatility.intro.p2')}
                        </p>
                    </div>
                </section>

                <hr className="border-gray-800" />

                {/* SECTION 1: RTP */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-4 bg-green-500/20 rounded-full">
                            <Percent className="w-8 h-8 text-green-400" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white">{t('rtpVolatility.rtp.title')}</h2>
                            <p className="text-gray-400 text-sm uppercase tracking-wider font-bold">{t('rtpVolatility.rtp.subtitle')}</p>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 space-y-6">
                        <p className="text-gray-300 text-lg">
                            {t('rtpVolatility.rtp.description')}
                        </p>

                        <div className="bg-gray-900 p-6 rounded-xl border-l-4 border-green-500">
                            <h4 className="text-white font-bold mb-2">{t('rtpVolatility.rtp.example.title')}</h4>
                            <p className="text-gray-400">
                                {t('rtpVolatility.rtp.example.text')}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/30">
                                <h5 className="text-green-300 font-bold mb-1">{t('rtpVolatility.rtp.ranges.good.title')}</h5>
                                <p className="text-white text-2xl font-bold">{t('rtpVolatility.rtp.ranges.good.value')}</p>
                                <p className="text-gray-400 text-xs mt-1">{t('rtpVolatility.rtp.ranges.good.note')}</p>
                            </div>
                            <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/30">
                                <h5 className="text-red-300 font-bold mb-1">{t('rtpVolatility.rtp.ranges.bad.title')}</h5>
                                <p className="text-white text-2xl font-bold">{t('rtpVolatility.rtp.ranges.bad.value')}</p>
                                <p className="text-gray-400 text-xs mt-1">{t('rtpVolatility.rtp.ranges.bad.note')}</p>
                            </div>
                        </div>

                        <p className="text-sm text-gray-500 italic">
                            {t('rtpVolatility.rtp.note')}
                        </p>
                    </div>
                </section>

                <hr className="border-gray-800" />

                {/* SECTION 2: VOLATILITY */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-4 bg-red-500/20 rounded-full">
                            <Zap className="w-8 h-8 text-red-400" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white">{t('rtpVolatility.volatility.title')}</h2>
                            <p className="text-gray-400 text-sm uppercase tracking-wider font-bold">{t('rtpVolatility.volatility.subtitle')}</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <p className="text-gray-300 text-lg">
                            {t('rtpVolatility.volatility.description')}
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Low Volatility */}
                            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
                                <div className="h-1 bg-blue-500 w-12 mb-4"></div>
                                <h4 className="text-xl font-bold text-white mb-2">{t('rtpVolatility.volatility.types.low.title')}</h4>
                                <p className="text-gray-400 text-sm mb-4">
                                    {t('rtpVolatility.volatility.types.low.description')}
                                </p>
                                <div className="text-xs text-gray-500">
                                    <p className="mb-1"><strong>{t('rtpVolatility.volatility.types.low.bestFor')}</strong></p>
                                    <p><strong>{t('rtpVolatility.volatility.types.low.example')}</strong></p>
                                </div>
                            </div>

                            {/* Medium Volatility */}
                            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-yellow-500 transition-colors">
                                <div className="h-1 bg-yellow-500 w-12 mb-4"></div>
                                <h4 className="text-xl font-bold text-white mb-2">{t('rtpVolatility.volatility.types.medium.title')}</h4>
                                <p className="text-gray-400 text-sm mb-4">
                                    {t('rtpVolatility.volatility.types.medium.description')}
                                </p>
                                <div className="text-xs text-gray-500">
                                    <p className="mb-1"><strong>{t('rtpVolatility.volatility.types.medium.bestFor')}</strong></p>
                                    <p><strong>{t('rtpVolatility.volatility.types.medium.example')}</strong></p>
                                </div>
                            </div>

                            {/* High Volatility */}
                            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-red-500 transition-colors">
                                <div className="h-1 bg-red-500 w-12 mb-4"></div>
                                <h4 className="text-xl font-bold text-white mb-2">{t('rtpVolatility.volatility.types.high.title')}</h4>
                                <p className="text-gray-400 text-sm mb-4">
                                    {t('rtpVolatility.volatility.types.high.description')}
                                </p>
                                <div className="text-xs text-gray-500">
                                    <p className="mb-1"><strong>{t('rtpVolatility.volatility.types.high.bestFor')}</strong></p>
                                    <p><strong>{t('rtpVolatility.volatility.types.high.example')}</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-800" />

                {/* SECTION 2.5: HOW TO CHECK RTP */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-4 bg-blue-500/20 rounded-full">
                            <HelpCircle className="w-8 h-8 text-blue-400" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-white">{t('rtpVolatility.howToCheck.title')}</h2>
                            <p className="text-gray-400 text-sm uppercase tracking-wider font-bold">{t('rtpVolatility.howToCheck.subtitle')}</p>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                        <p className="text-gray-300 mb-6">
                            {t('rtpVolatility.howToCheck.intro')}
                        </p>
                        <ol className="space-y-4">
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold">1</span>
                                <p className="text-gray-300">{t('rtpVolatility.howToCheck.steps.step1')}</p>
                            </li>
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold">2</span>
                                <p className="text-gray-300">{t('rtpVolatility.howToCheck.steps.step2')}</p>
                            </li>
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold">3</span>
                                <p className="text-gray-300">{t('rtpVolatility.howToCheck.steps.step3')}</p>
                            </li>
                        </ol>
                    </div>
                </section>

                <hr className="border-gray-800" />

                {/* SECTION 3: WHICH ONE TO CHOOSE */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-8">{t('rtpVolatility.whichToChoose.title')}</h2>

                    <div className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8">
                        <p className="text-gray-300 mb-6">
                            {t('rtpVolatility.whichToChoose.intro')}
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 bg-gray-900/50 p-4 rounded-xl">
                                <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">1</div>
                                <div>
                                    <h5 className="text-white font-bold">{t('rtpVolatility.whichToChoose.scenarios.smallBudget.title')}</h5>
                                    <p className="text-gray-400 text-sm">{t('rtpVolatility.whichToChoose.scenarios.smallBudget.advice')}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 bg-gray-900/50 p-4 rounded-xl">
                                <div className="w-10 h-10 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold">2</div>
                                <div>
                                    <h5 className="text-white font-bold">{t('rtpVolatility.whichToChoose.scenarios.bigWin.title')}</h5>
                                    <p className="text-gray-400 text-sm">{t('rtpVolatility.whichToChoose.scenarios.bigWin.advice')}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 bg-gray-900/50 p-4 rounded-xl">
                                <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold">3</div>
                                <div>
                                    <h5 className="text-white font-bold">{t('rtpVolatility.whichToChoose.scenarios.bestOdds.title')}</h5>
                                    <p className="text-gray-400 text-sm">{t('rtpVolatility.whichToChoose.scenarios.bestOdds.advice')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-800" />

                {/* FAQ SECTION */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-8">{t('rtpVolatility.faq.title')}</h2>
                    <div className="space-y-4">
                        {(Object.values(t('rtpVolatility.faq.questions', { returnObjects: true })) as any[]).map((item, idx) => (
                            <div key={idx} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                                <h3 className="text-white font-bold mb-2">{item.q}</h3>
                                <p className="text-gray-400 text-sm">
                                    {item.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-brand/10 rounded-2xl p-10 text-center border border-brand/20 mt-12">
                    <h2 className="text-3xl font-bold text-white mb-6">{t('rtpVolatility.cta.title')}</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        {t('rtpVolatility.cta.description')}
                    </p>
                    <div className="flex justify-center gap-4">
                        <LocalizedLink to="/top-slot-games" className="bg-brand hover:bg-white text-black font-bold py-3 px-8 rounded-full transition-colors flex items-center">
                            <PlayCircle className="w-5 h-5 mr-2" /> {t('rtpVolatility.cta.button')}
                        </LocalizedLink>
                    </div>
                </section>

            </div>
        </>
    );
};

export default RtpVolatilityGuide;

