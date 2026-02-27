import React from 'react';
import { LocalizedLink } from '../../components/LocalizedLink';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import { Breadcrumbs } from '../../components/Section';
import {
    Trophy,
    Target,
    AlertTriangle,
    ExternalLink
} from 'lucide-react';

const CricketBettingTips: React.FC = () => {
    const { t } = useTranslation();

    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": t('cricketBettingTips.seo.title'),
        "description": t('cricketBettingTips.seo.description'),
        "author": {
            "@type": "Organization",
            "name": "Bigwin959 Guide"
        },
        "datePublished": "2024-12-30",
        "dateModified": "2024-12-30"
    };

    return (
        <>
            <SEO metadata={{
                title: t('cricketBettingTips.seo.title'),
                description: t('cricketBettingTips.seo.description'),
                keywords: t('cricketBettingTips.seo.keywords', { returnObjects: true }) as string[],
                schema: schema,
                canonicalUrl: "https://bigwinofficial.com/blog/cricket-betting-tips-beginners-honest"
            }} />
            <Breadcrumbs items={[
                { label: t('cricketBettingTips.breadcrumbs.blog'), path: '/blog' },
                { label: t('cricketBettingTips.breadcrumbs.current'), path: '/blog/cricket-betting-tips-beginners-honest' }
            ]} />

            <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">

                {/* HERO SECTION */}
                <section className="bg-gradient-to-br from-[#064e3b] via-[#065f46] to-[#064e3b] rounded-3xl border border-emerald-800 p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Trophy className="w-5 h-5 text-emerald-300" />
                            <span className="text-emerald-300 text-sm font-bold uppercase tracking-widest">{t('cricketBettingTips.hero.badge')}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                            {t('cricketBettingTips.hero.title')} <br />
                            <span className="text-emerald-200">{t('cricketBettingTips.hero.titleHighlight')}</span>
                        </h1>
                        <p className="text-lg text-emerald-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            {t('cricketBettingTips.hero.description')}
                        </p>
                        <div className="flex items-center justify-center gap-2 text-sm text-emerald-200/80">
                            <span>{t('cricketBettingTips.hero.published')}</span>
                            <span>•</span>
                            <span>{t('cricketBettingTips.hero.readTime')}</span>
                        </div>
                    </div>
                </section>

                {/* INTRODUCTION */}
                <section className="prose prose-invert max-w-none">
                    <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                        <p>
                            {t('cricketBettingTips.intro.p1')}
                        </p>
                        <p>
                            {t('cricketBettingTips.intro.p2')}
                        </p>
                    </div>
                </section>

                <hr className="border-gray-800" />

                {/* SECTION 1: MARKETS EXPLAINED */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                        <Target className="w-8 h-8 text-brand" />
                        {t('cricketBettingTips.markets.title')}
                    </h2>

                    <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Session */}
                            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                                <h3 className="text-xl font-bold text-white mb-3">{t('cricketBettingTips.markets.session.title')}</h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    {t('cricketBettingTips.markets.session.description')}
                                </p>
                                <div className="bg-gray-900/50 p-4 rounded-lg text-sm text-gray-300">
                                    <p className="font-bold text-brand mb-1">{t('cricketBettingTips.markets.session.example.title')}</p>
                                    "{t('cricketBettingTips.markets.session.example.text')}"<br />
                                    <span className="text-xs text-gray-500">{t('cricketBettingTips.markets.session.example.explanation')}</span>
                                </div>
                            </div>

                            {/* Lambi */}
                            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                                <h3 className="text-xl font-bold text-white mb-3">{t('cricketBettingTips.markets.lambi.title')}</h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    {t('cricketBettingTips.markets.lambi.description')}
                                </p>
                                <div className="bg-gray-900/50 p-4 rounded-lg text-sm text-gray-300">
                                    <p className="font-bold text-brand mb-1">{t('cricketBettingTips.markets.lambi.strategy.title')}</p>
                                    {t('cricketBettingTips.markets.lambi.strategy.text')}
                                </div>
                            </div>

                            {/* Fancy */}
                            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 md:col-span-2">
                                <h3 className="text-xl font-bold text-white mb-3">{t('cricketBettingTips.markets.fancy.title')}</h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    {t('cricketBettingTips.markets.fancy.description')}
                                </p>
                                <div className="flex items-start gap-3 bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
                                    <div>
                                        <p className="text-red-300 font-bold text-sm">{t('cricketBettingTips.markets.fancy.caution.title')}</p>
                                        <p className="text-gray-400 text-xs">{t('cricketBettingTips.markets.fancy.caution.text')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-800" />

                {/* SECTION 2: 3 RULES */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-8">{t('cricketBettingTips.rules.title')}</h2>

                    <div className="space-y-4">
                        <div className="bg-gray-800 border-l-4 border-brand p-6 rounded-r-xl">
                            <h4 className="text-lg font-bold text-white mb-2">{t('cricketBettingTips.rules.rule1.title')}</h4>
                            <p className="text-gray-400 text-sm">
                                {t('cricketBettingTips.rules.rule1.text')}
                            </p>
                        </div>

                        <div className="bg-gray-800 border-l-4 border-brand p-6 rounded-r-xl">
                            <h4 className="text-lg font-bold text-white mb-2">{t('cricketBettingTips.rules.rule2.title')}</h4>
                            <p className="text-gray-400 text-sm">
                                {t('cricketBettingTips.rules.rule2.text')}
                            </p>
                        </div>

                        <div className="bg-gray-800 border-l-4 border-brand p-6 rounded-r-xl">
                            <h4 className="text-lg font-bold text-white mb-2">{t('cricketBettingTips.rules.rule3.title')}</h4>
                            <p className="text-gray-400 text-sm">
                                {t('cricketBettingTips.rules.rule3.text')}
                            </p>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-800" />

                {/* FAQ SECTION */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-8">{t('cricketBettingTips.faq.title')}</h2>
                    <div className="space-y-4">
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                            <h3 className="text-white font-bold mb-2">{t('cricketBettingTips.faq.questions.rain.q')}</h3>
                            <p className="text-gray-400 text-sm">
                                {t('cricketBettingTips.faq.questions.rain.a')}
                            </p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                            <h3 className="text-white font-bold mb-2">{t('cricketBettingTips.faq.questions.superOver.q')}</h3>
                            <p className="text-gray-400 text-sm">
                                {t('cricketBettingTips.faq.questions.superOver.a')}
                            </p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                            <h3 className="text-white font-bold mb-2">{t('cricketBettingTips.faq.questions.withdrawal.q')}</h3>
                            <p className="text-gray-400 text-sm">
                                {t('cricketBettingTips.faq.questions.withdrawal.a')}
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="mt-12 bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">{t('cricketBettingTips.cta.title')}</h2>
                    <p className="text-gray-400 mb-6">
                        {t('cricketBettingTips.cta.description')}
                    </p>
                    <LocalizedLink to="/guides/cricket/exchange-vs-sportsbook" className="inline-flex items-center text-brand font-bold hover:text-white transition-colors">
                        {t('cricketBettingTips.cta.link')} <ExternalLink className="w-4 h-4 ml-2" />
                    </LocalizedLink>
                </section>

            </div >
        </>
    );
};

export default CricketBettingTips;

