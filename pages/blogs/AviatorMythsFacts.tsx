import React from 'react';
import { LocalizedLink } from '../../components/LocalizedLink';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import { Breadcrumbs } from '../../components/Section';
import {
    TrendingUp,
    AlertTriangle,
    ShieldCheck,
    XCircle,
    Server,
    Lock,
    Smartphone
} from 'lucide-react';

const AviatorMythsFacts: React.FC = () => {
    const { t } = useTranslation();

    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": t('aviatorMyths.seo.title'),
        "description": t('aviatorMyths.seo.description'),
        "author": {
            "@type": "Organization",
            "name": "Bigwin959 Guide"
        },
        "datePublished": "2025-01-02",
        "dateModified": "2025-01-02"
    };

    return (
        <>
            <SEO metadata={{
                title: t('aviatorMyths.seo.title'),
                description: t('aviatorMyths.seo.description'),
                keywords: t('aviatorMyths.seo.keywords', { returnObjects: true }) as string[],
                schema: schema,
                canonicalUrl: "https://bigwinofficial.com/blog/aviator-myths-facts-responsible-tips"
            }} />
            <Breadcrumbs items={[
                { label: t('aviatorMyths.breadcrumbs.blog'), path: '/blog' },
                { label: t('aviatorMyths.breadcrumbs.current'), path: '/blog/aviator-myths-facts-responsible-tips' }
            ]} />

            <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">

                {/* HERO SECTION */}
                <section className="bg-gradient-to-br from-[#3b0764] via-[#581c87] to-[#3b0764] rounded-3xl border border-purple-800 p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute -right-20 -top-20 w-80 h-80 bg-red-500/20 blur-[120px] rounded-full pointer-events-none"></div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <TrendingUp className="w-5 h-5 text-red-400" />
                            <span className="text-red-300 text-sm font-bold uppercase tracking-widest">{t('aviatorMyths.hero.badge')}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                            {t('aviatorMyths.hero.title')} <br />
                            <span className="text-red-400">{t('aviatorMyths.hero.titleHighlight')}</span>
                        </h1>
                        <p className="text-lg text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            {t('aviatorMyths.hero.description')}
                        </p>
                        <div className="flex items-center justify-center gap-2 text-sm text-purple-200">
                            <span>{t('aviatorMyths.hero.published')}</span>
                            <span>•</span>
                            <span>{t('aviatorMyths.hero.readTime')}</span>
                        </div>
                    </div>
                </section>

                {/* INTRODUCTION */}
                <section className="prose prose-invert max-w-none">
                    <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                        <p>
                            {t('aviatorMyths.intro.p1')}
                        </p>
                        <p>
                            {t('aviatorMyths.intro.p2')}
                        </p>
                    </div>
                </section>

                <hr className="border-gray-800" />

                {/* SECTION 1: THE PREDICTOR SCAM */}
                <section>
                    <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 mb-12">
                        <h2 className="text-2xl font-bold text-red-500 mb-4 flex items-center gap-3">
                            <AlertTriangle className="w-8 h-8" />
                            {t('aviatorMyths.predictorScam.title')}
                        </h2>
                        <p className="text-gray-300 mb-6">
                            {t('aviatorMyths.predictorScam.intro')}
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-900/50 p-6 rounded-xl">
                                <h4 className="text-white font-bold mb-2">{t('aviatorMyths.predictorScam.reality.title')}</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 text-gray-300 text-sm">
                                        <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                                        <span>{t('aviatorMyths.predictorScam.reality.points.edited')}</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-300 text-sm">
                                        <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                                        <span>{t('aviatorMyths.predictorScam.reality.points.seeds')}</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-300 text-sm">
                                        <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                                        <span>{t('aviatorMyths.predictorScam.reality.points.logic')}</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col justify-center items-center text-center p-6">
                                <Smartphone className="w-16 h-16 text-gray-600 mb-4" />
                                <p className="text-gray-400 text-sm italic">
                                    {t('aviatorMyths.predictorScam.warning')}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: HOW IT REALLY WORKS */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                        <Server className="w-8 h-8 text-brand" />
                        {t('aviatorMyths.howItWorks.title')}
                    </h2>

                    <div className="space-y-6">
                        <p className="text-gray-300">
                            {t('aviatorMyths.howItWorks.intro')}
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center">
                                <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-400 font-bold">1</div>
                                <h4 className="text-white font-bold mb-2">{t('aviatorMyths.howItWorks.steps.serverSeed.title')}</h4>
                                <p className="text-gray-400 text-xs">{t('aviatorMyths.howItWorks.steps.serverSeed.desc')}</p>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center">
                                <div className="bg-yellow-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-500 font-bold">+</div>
                                <h4 className="text-white font-bold mb-2">{t('aviatorMyths.howItWorks.steps.clientSeeds.title')}</h4>
                                <p className="text-gray-400 text-xs">{t('aviatorMyths.howItWorks.steps.clientSeeds.desc')}</p>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center">
                                <div className="bg-green-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-green-400 font-bold">=</div>
                                <h4 className="text-white font-bold mb-2">{t('aviatorMyths.howItWorks.steps.result.title')}</h4>
                                <p className="text-gray-400 text-xs">{t('aviatorMyths.howItWorks.steps.result.desc')}</p>
                            </div>
                        </div>

                        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-6">
                            <ShieldCheck className="w-12 h-12 text-green-500" />
                            <div className="text-sm">
                                <h4 className="text-green-400 font-bold mb-1">{t('aviatorMyths.howItWorks.verification.title')}</h4>
                                <p className="text-gray-300">
                                    {t('aviatorMyths.howItWorks.verification.text')}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-800" />

                {/* SECTION 3: RESPONSIBLE TIPS */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                        <Lock className="w-8 h-8 text-brand" />
                        {t('aviatorMyths.safeTips.title')}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                            <h3 className="text-xl font-bold text-white mb-4">{t('aviatorMyths.safeTips.tip1.title')}</h3>
                            <p className="text-gray-400 text-sm mb-4">
                                {t('aviatorMyths.safeTips.tip1.text')}
                            </p>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                            <h3 className="text-xl font-bold text-white mb-4">{t('aviatorMyths.safeTips.tip2.title')}</h3>
                            <div className="text-gray-400 text-sm mb-4">
                                {t('aviatorMyths.safeTips.tip2.text')}
                                <span className="text-red-400 block mt-2">{t('aviatorMyths.safeTips.tip2.warning')}</span>
                            </div>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 md:col-span-2">
                            <h3 className="text-xl font-bold text-white mb-4">{t('aviatorMyths.safeTips.tip3.title')}</h3>
                            <p className="text-gray-400 text-sm">
                                {t('aviatorMyths.safeTips.tip3.text')}
                            </p>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-800" />

                {/* FAQ SECTION */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-8">{t('aviatorMyths.faq.title')}</h2>
                    <div className="space-y-4">
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                            <h3 className="text-white font-bold mb-2">{t('aviatorMyths.faq.questions.disconnect.q')}</h3>
                            <p className="text-gray-400 text-sm">
                                {t('aviatorMyths.faq.questions.disconnect.a')}
                            </p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                            <h3 className="text-white font-bold mb-2">{t('aviatorMyths.faq.questions.bestTime.q')}</h3>
                            <p className="text-gray-400 text-sm">
                                {t('aviatorMyths.faq.questions.bestTime.a')}
                            </p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                            <h3 className="text-white font-bold mb-2">{t('aviatorMyths.faq.questions.demo.q')}</h3>
                            <p className="text-gray-400 text-sm">
                                {t('aviatorMyths.faq.questions.demo.a')}
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="mt-12 text-center">
                    <p className="text-gray-400 mb-6">
                        {t('aviatorMyths.cta.text')}
                    </p>
                    <LocalizedLink to="/guides/play-aviator" className="bg-brand hover:bg-white text-black font-bold py-3 px-8 rounded-full transition-colors inline-flex items-center">
                        {t('aviatorMyths.cta.button')} <TrendingUp className="w-4 h-4 ml-2" />
                    </LocalizedLink>
                </section>

            </div >
        </>
    );
};

export default AviatorMythsFacts;

