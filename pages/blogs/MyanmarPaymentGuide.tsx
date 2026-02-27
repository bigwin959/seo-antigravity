import React from 'react';
import { LocalizedLink } from '../../components/LocalizedLink';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import { Breadcrumbs } from '../../components/Section';
import { OFFICIAL_DOMAIN } from '../../constants';
import {
    Wallet,
    ShieldCheck,
    AlertTriangle,
    Smartphone,
    Globe,
    CheckCircle,
    ArrowRight
} from 'lucide-react';

const MyanmarPaymentGuide: React.FC = () => {
    const { t } = useTranslation();

    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": t('myanmarPayment.seo.title'),
        "description": t('myanmarPayment.seo.description'),
        "author": {
            "@type": "Organization",
            "name": "Bigwin959 Guide"
        },
        "datePublished": "2025-01-06",
        "dateModified": "2025-01-06"
    };

    return (
        <>
            <SEO metadata={{
                title: t('myanmarPayment.seo.title'),
                description: t('myanmarPayment.seo.description'),
                keywords: t('myanmarPayment.seo.keywords', { returnObjects: true }) as string[],
                schema: schema,
                canonicalUrl: "https://bigwinofficial.com/blog/myanmar-kbzpay-wavepay-guide"
            }} />
            <Breadcrumbs items={[
                { label: t('myanmarPayment.breadcrumbs.blog'), path: '/blog' },
                { label: t('myanmarPayment.breadcrumbs.current'), path: '/blog/myanmar-kbzpay-wavepay-guide' }
            ]} />

            <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">

                {/* HERO SECTION */}
                <section className="bg-gradient-to-br from-[#004d40] via-[#0f766e] to-[#004d40] rounded-3xl border border-teal-900/50 p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <img src="https://flagcdn.com/w40/mm.png" alt="Myanmar" width="20" height="14" className="w-5 h-auto rounded shadow-sm" />
                            <span className="text-teal-200 text-sm font-bold uppercase tracking-widest">{t('myanmarPayment.hero.badge')}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                            {t('myanmarPayment.hero.title')} <br />
                            <span className="text-teal-200">{t('myanmarPayment.hero.titleHighlight')}</span>
                        </h1>
                        <p className="text-lg text-teal-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            {t('myanmarPayment.hero.description')}
                        </p>
                        <div className="flex items-center justify-center gap-2 text-sm text-teal-200/80">
                            <span>{t('myanmarPayment.hero.published')}</span>
                            <span>•</span>
                            <span>{t('myanmarPayment.hero.readTime')}</span>
                        </div>
                    </div>
                </section>

                {/* INTRODUCTION */}
                <section className="prose prose-invert max-w-none">
                    <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                        <p>
                            {t('myanmarPayment.intro.p1')}
                        </p>
                        <p>
                            {t('myanmarPayment.intro.p2')}
                        </p>
                    </div>
                </section>

                <hr className="border-gray-800" />

                {/* SECTION 1: THE BIG TWO */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                        <Smartphone className="w-8 h-8 text-brand" />
                        {t('myanmarPayment.bigTwo.title')}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* KBZPay */}
                        <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
                            <div className="h-2 bg-blue-600"></div>
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-2xl font-bold text-white">{t('myanmarPayment.bigTwo.kbzpay.name')}</h3>
                                    <span className="bg-blue-600/20 text-blue-400 text-xs font-bold px-3 py-1 rounded-full uppercase">{t('myanmarPayment.bigTwo.kbzpay.badge')}</span>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3 text-gray-300">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                        <span>{t('myanmarPayment.bigTwo.kbzpay.features.accepted')}</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-300">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                        <span>{t('myanmarPayment.bigTwo.kbzpay.features.fast')}</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-300">
                                        <AlertTriangle className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                                        <span>{t('myanmarPayment.bigTwo.kbzpay.features.verified')}</span>
                                    </li>
                                </ul>
                                <div className="p-4 bg-gray-900 rounded-lg text-sm text-gray-400">
                                    {t('myanmarPayment.bigTwo.kbzpay.bestFor')}
                                </div>
                            </div>
                        </div>

                        {/* WavePay */}
                        <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
                            <div className="h-2 bg-yellow-500"></div>
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-2xl font-bold text-white">{t('myanmarPayment.bigTwo.wavepay.name')}</h3>
                                    <span className="bg-yellow-500/20 text-yellow-500 text-xs font-bold px-3 py-1 rounded-full uppercase">{t('myanmarPayment.bigTwo.wavepay.badge')}</span>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3 text-gray-300">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                        <span>{t('myanmarPayment.bigTwo.wavepay.features.cashout')}</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-300">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                        <span>{t('myanmarPayment.bigTwo.wavepay.features.simple')}</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-300">
                                        <AlertTriangle className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                                        <span>{t('myanmarPayment.bigTwo.wavepay.features.limits')}</span>
                                    </li>
                                </ul>
                                <div className="p-4 bg-gray-900 rounded-lg text-sm text-gray-400">
                                    {t('myanmarPayment.bigTwo.wavepay.bestFor')}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-800" />

                {/* SECTION 2: SAFETY TIPS */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                        <ShieldCheck className="w-8 h-8 text-brand" />
                        {t('myanmarPayment.safety.title')}
                    </h2>

                    <div className="space-y-6">
                        <div className="bg-red-500/10 border border-red-500/30 p-6 rounded-xl flex items-start gap-4">
                            <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0" />
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">{t('myanmarPayment.safety.warning.title')}</h4>
                                <p className="text-gray-300 mb-2">
                                    {t('myanmarPayment.safety.warning.text')}
                                </p>
                                <p className="text-brand font-bold">
                                    {t('myanmarPayment.safety.warning.important')}
                                </p>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500" /> {t('myanmarPayment.safety.tips.verifyTxId.title')}
                                </h4>
                                <p className="text-gray-400 text-sm">
                                    {t('myanmarPayment.safety.tips.verifyTxId.desc')}
                                </p>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500" /> {t('myanmarPayment.safety.tips.useNotes.title')}
                                </h4>
                                <p className="text-gray-400 text-sm">
                                    {t('myanmarPayment.safety.tips.useNotes.desc')}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-800" />

                {/* SECTION 3: DEPOSIT STEPS */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                        <Wallet className="w-8 h-8 text-brand" />
                        {t('myanmarPayment.depositSteps.title')}
                    </h2>

                    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
                        <div className="space-y-6">
                            {(Object.keys(t('myanmarPayment.depositSteps.steps', { returnObjects: true })) as any[]).map((stepKey, i) => {
                                const step = t(`myanmarPayment.depositSteps.steps.${stepKey}`, { returnObjects: true }) as any;
                                return (
                                    <div key={i} className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-8 h-8 bg-brand text-black font-bold rounded-full flex items-center justify-center z-10">
                                                {i + 1}
                                            </div>
                                            {i !== 4 && <div className="w-0.5 h-full bg-gray-800 -my-2"></div>}
                                        </div>
                                        <div className="pb-8">
                                            <h4 className="text-white font-bold text-lg">{step.title}</h4>
                                            <p className="text-gray-400">{step.desc}</p>
                                            {step.tip && (
                                                <p className="text-yellow-500 text-xs italic mt-2 flex items-center gap-1">
                                                    <AlertTriangle className="w-3 h-3" /> {step.tip}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-4 flex justify-end">
                            <LocalizedLink to="/guides/deposit" className="inline-flex items-center text-brand font-bold hover:text-white">
                                {t('myanmarPayment.depositSteps.link')} <ArrowRight className="w-4 h-4 ml-2" />
                            </LocalizedLink>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-800" />

                {/* FAQ SECTION */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-8">{t('myanmarPayment.faq.title')}</h2>
                    <div className="space-y-4">
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                            <h3 className="text-white font-bold mb-2">{t('myanmarPayment.faq.questions.minimum.q')}</h3>
                            <p className="text-gray-400 text-sm">
                                {t('myanmarPayment.faq.questions.minimum.a')}
                            </p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                            <h3 className="text-white font-bold mb-2">{t('myanmarPayment.faq.questions.fees.q')}</h3>
                            <p className="text-gray-400 text-sm">
                                {t('myanmarPayment.faq.questions.fees.a')}
                            </p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                            <h3 className="text-white font-bold mb-2">{t('myanmarPayment.faq.questions.otherAccount.q')}</h3>
                            <p className="text-gray-400 text-sm">
                                {t('myanmarPayment.faq.questions.otherAccount.a')}
                            </p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                            <h3 className="text-white font-bold mb-2">{t('myanmarPayment.faq.questions.notCredited.q')}</h3>
                            <p className="text-gray-400 text-sm">
                                {t('myanmarPayment.faq.questions.notCredited.a')}
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-gradient-to-r from-teal-900 to-gray-900 rounded-2xl p-10 text-center border border-teal-800">
                    <h2 className="text-3xl font-bold text-white mb-6">{t('myanmarPayment.cta.title')}</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        {t('myanmarPayment.cta.description')}
                    </p>
                    <a href={OFFICIAL_DOMAIN} className="inline-block bg-brand hover:bg-white text-black font-bold py-4 px-10 rounded-full transition-all shadow-lg">
                        {t('myanmarPayment.cta.button')}
                    </a>
                </section>

            </div>
        </>
    );
};

export default MyanmarPaymentGuide;

