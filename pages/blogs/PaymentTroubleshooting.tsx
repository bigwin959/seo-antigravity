import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import { Breadcrumbs } from '../../components/Section';
import { CONTACT_INFO } from '../../constants';
import {
    Clock,
    AlertCircle,
    MessageCircle,
    Banknote
} from 'lucide-react';

const PaymentTroubleshooting: React.FC = () => {
    const { t } = useTranslation();

    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": t('paymentTroubleshooting.seo.title'),
        "description": t('paymentTroubleshooting.seo.description'),
        "author": {
            "@type": "Organization",
            "name": "Bigwin959 Guide"
        },
        "datePublished": "2024-12-26",
        "dateModified": "2024-12-26"
    };

    return (
        <>
            <SEO metadata={{
                title: t('paymentTroubleshooting.seo.title'),
                description: t('paymentTroubleshooting.seo.description'),
                keywords: t('paymentTroubleshooting.seo.keywords', { returnObjects: true }) as string[],
                schema: schema,
                canonicalUrl: "https://bigwinofficial.com/blog/payment-troubleshooting-delays"
            }} />
            <Breadcrumbs items={[
                { label: t('paymentTroubleshooting.breadcrumbs.blog'), path: '/blog' },
                { label: t('paymentTroubleshooting.breadcrumbs.current'), path: '/blog/payment-troubleshooting-delays' }
            ]} />

            <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">

                {/* HERO SECTION */}
                <section className="bg-gradient-to-br from-[#7f1d1d] via-[#991b1b] to-[#7f1d1d] rounded-3xl border border-red-900 p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Clock className="w-5 h-5 text-red-300" />
                            <span className="text-red-300 text-sm font-bold uppercase tracking-widest">{t('paymentTroubleshooting.hero.badge')}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                            {t('paymentTroubleshooting.hero.title')} <br />
                            <span className="text-red-200">{t('paymentTroubleshooting.hero.subtitle')}</span>
                        </h1>
                        <p className="text-lg text-red-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            {t('paymentTroubleshooting.hero.description')}
                        </p>
                        <div className="flex items-center justify-center gap-2 text-sm text-red-200/80">
                            <span>{t('paymentTroubleshooting.hero.publishDate')}</span>
                            <span>•</span>
                            <span>{t('paymentTroubleshooting.hero.readTime')}</span>
                        </div>
                    </div>
                </section>

                {/* INTRODUCTION */}
                <section className="prose prose-invert max-w-none">
                    <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                        <p>
                            {t('paymentTroubleshooting.introduction.paragraph1')}
                        </p>
                        <p>
                            {t('paymentTroubleshooting.introduction.paragraph2')}
                        </p>
                    </div>
                </section>

                <hr className="border-gray-800" />

                {/* SECTION 1: DEPOSIT ISSUES */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-green-500/20 p-3 rounded-full">
                            <Banknote className="w-6 h-6 text-green-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-white">{t('paymentTroubleshooting.depositIssues.title')}</h2>
                    </div>

                    <div className="space-y-4">
                        {(t('paymentTroubleshooting.depositIssues.reasons', { returnObjects: true }) as any[]).map((reason: any, idx: number) => (
                            <div key={idx} className={`bg-gray-800 p-6 rounded-xl border-l-4 ${idx === 0 ? 'border-red-500' : idx === 1 ? 'border-yellow-500' : 'border-blue-500'}`}>
                                <h4 className="text-white font-bold mb-2">{reason.title}</h4>
                                <p className="text-gray-400 text-sm">
                                    {reason.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <hr className="border-gray-800" />

                {/* SECTION 2: WITHDRAWAL ISSUES */}
                <section>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-blue-500/20 p-3 rounded-full">
                            <Clock className="w-6 h-6 text-blue-500" />
                        </div>
                        <h2 className="text-2xl font-bold text-white">{t('paymentTroubleshooting.withdrawalIssues.title')}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {(t('paymentTroubleshooting.withdrawalIssues.reasons', { returnObjects: true }) as any[]).map((reason: any, idx: number) => (
                            <div key={idx} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                                <h4 className="text-white font-bold mb-2">{reason.title}</h4>
                                <p className="text-gray-400 text-sm mb-4">
                                    {reason.description}
                                </p>
                                {reason.note && (
                                    <div className="flex items-center gap-2 text-xs text-yellow-500 bg-yellow-500/10 p-2 rounded">
                                        <AlertCircle className="w-4 h-4" /> {reason.note}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                <hr className="border-gray-800" />

                {/* FAQ SECTION */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-8">{t('paymentTroubleshooting.faq.title')}</h2>
                    <div className="space-y-4">
                        {(t('paymentTroubleshooting.faq.items', { returnObjects: true }) as any[]).map((item: any, idx: number) => (
                            <div key={idx} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                                <h3 className="text-white font-bold mb-2">{item.q}</h3>
                                <p className="text-gray-400 text-sm">
                                    {item.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION 3: HOW TO CONTACT */}
                <section>
                    <h2 className="text-xl font-bold text-white mb-6 text-center">{t('paymentTroubleshooting.contactSteps.title')}</h2>

                    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 max-w-2xl mx-auto">
                        <ol className="space-y-6 relative border-l border-gray-700 ml-4 pl-8">
                            {(t('paymentTroubleshooting.contactSteps.steps', { returnObjects: true }) as any[]).map((step: any, idx: number) => (
                                <li key={idx} className="relative">
                                    <span className="absolute -left-[45px] w-8 h-8 rounded-full bg-gray-800 border-2 border-brand text-brand flex items-center justify-center font-bold text-sm">{step.number}</span>
                                    <h4 className="text-white font-bold">{step.title}</h4>
                                    <p className="text-gray-400 text-sm mt-1">{step.description}</p>
                                    {step.template && (
                                        <div className="bg-gray-800 p-2 mt-2 rounded text-xs font-mono text-green-400">
                                            {step.template.split('\n').map((line: string, i: number) => (
                                                <React.Fragment key={i}>{line}<br /></React.Fragment>
                                            ))}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ol>

                        <div className="mt-8 text-center">
                            <a href={CONTACT_INFO.livechat} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-brand hover:bg-white text-black font-bold py-3 px-8 rounded-full transition-colors">
                                <MessageCircle className="w-5 h-5 mr-2" /> {t('paymentTroubleshooting.contactSteps.button')}
                            </a>
                        </div>
                    </div>
                </section>

            </div >
        </>
    );
};

export default PaymentTroubleshooting;
