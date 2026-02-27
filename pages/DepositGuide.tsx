import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import SEO from '../components/SEO';
import { Breadcrumbs } from '../components/Section';
import { OFFICIAL_DOMAIN } from '../constants';
import {
    Wallet,
    CheckCircle2,
    AlertTriangle,
    Clock,
    Shield,
    ExternalLink,
    Smartphone,
    HelpCircle,
    ArrowRight
} from 'lucide-react';

const DepositGuide: React.FC = () => {
    const { t } = useTranslation();
    const [openFaq, setOpenFaq] = React.useState<number | null>(null);

    return (
        <>
            <SEO
                metadata={{
                    title: t('depositGuide.seo.title'),
                    description: t('depositGuide.seo.description'),
                    keywords: t('depositGuide.seo.keywords', { returnObjects: true }) as string[],
                    canonicalUrl: `https://${OFFICIAL_DOMAIN}/guides/deposit`,
                    ogImage: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000492/deposit.jpg",
                    ogType: 'article',
                    publishedTime: '2025-01-01T00:00:00+06:00',
                    modifiedTime: new Date().toISOString(),
                    author: 'Bigwin959 Guide',
                    schema: {
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": t('depositGuide.seo.howTo.name'),
                        "description": t('depositGuide.seo.howTo.description'),
                        "step": [
                            {
                                "@type": "HowToStep",
                                "position": 1,
                                "name": t('depositGuide.seo.howTo.steps.login.name'),
                                "text": t('depositGuide.seo.howTo.steps.login.text')
                            },
                            {
                                "@type": "HowToStep",
                                "position": 2,
                                "name": t('depositGuide.seo.howTo.steps.openDeposit.name'),
                                "text": t('depositGuide.seo.howTo.steps.openDeposit.text')
                            },
                            {
                                "@type": "HowToStep",
                                "position": 3,
                                "name": t('depositGuide.seo.howTo.steps.chooseMethod.name'),
                                "text": t('depositGuide.seo.howTo.steps.chooseMethod.text')
                            },
                            {
                                "@type": "HowToStep",
                                "position": 4,
                                "name": t('depositGuide.seo.howTo.steps.enterAmount.name'),
                                "text": t('depositGuide.seo.howTo.steps.enterAmount.text')
                            },
                            {
                                "@type": "HowToStep",
                                "position": 5,
                                "name": t('depositGuide.seo.howTo.steps.sendPayment.name'),
                                "text": t('depositGuide.seo.howTo.steps.sendPayment.text')
                            },
                            {
                                "@type": "HowToStep",
                                "position": 6,
                                "name": t('depositGuide.seo.howTo.steps.uploadScreenshot.name'),
                                "text": t('depositGuide.seo.howTo.steps.uploadScreenshot.text')
                            },
                            {
                                "@type": "HowToStep",
                                "position": 7,
                                "name": t('depositGuide.seo.howTo.steps.balanceUpdate.name'),
                                "text": t('depositGuide.seo.howTo.steps.balanceUpdate.text')
                            }
                        ]
                    }
                }}
            />

            <Breadcrumbs items={[{ label: t('nav.guides'), path: '/guides' }, { label: t('depositGuide.hero.title'), path: '/guides/deposit' }]} />

            {/* SECTION 1 — HERO / INTRO */}
            <section className="relative min-h-[60vh] flex items-center bg-gray-950 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000494/DepositGuide.jpg"
                        srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_600,f_auto,q_auto/v1767000494/DepositGuide.jpg 600w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_1200,f_auto,q_auto/v1767000494/DepositGuide.jpg 1200w"
                        sizes="100vw"
                        width="1200"
                        height="600"
                        alt={t('depositGuide.hero.title')}
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/90 to-transparent" />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                            {t('depositGuide.hero.title')} <br />
                            <span className="text-brand">{t('depositGuide.hero.subtitle')}</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            {t('depositGuide.hero.description')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <a
                                href={OFFICIAL_DOMAIN}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-brand hover:bg-brand-dark text-gray-950 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                            >
                                {t('depositGuide.hero.cta')} <ExternalLink className="w-5 h-5" />
                            </a>
                        </div>

                        <div className="bg-brand/10 border border-brand/20 p-4 rounded-xl inline-flex items-center gap-3">
                            <Shield className="w-6 h-6 text-brand" />
                            <p className="text-gray-300 text-sm">
                                {t('depositGuide.hero.infoGuide', { domain: OFFICIAL_DOMAIN })}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2 — SUPPORTED METHODS */}
            <section id="methods" className="py-20 bg-gray-900 border-y border-gray-800">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">{t('depositGuide.methods.title')}</h2>

                    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
                            <h3 className="text-2xl font-bold text-white mb-8">{t('depositGuide.methods.bangladesh.title')}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {(t('depositGuide.methods.bangladesh.list', { returnObjects: true }) as string[]).map((method) => (
                                    <div key={method} className="bg-gray-900 p-4 rounded-xl flex items-center justify-center gap-3 border border-gray-800">
                                        <CheckCircle2 className="w-5 h-5 text-brand" />
                                        <span className="text-white font-medium">{method}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
                            <h3 className="text-2xl font-bold text-white mb-8">{t('depositGuide.methods.myanmar.title')}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {(t('depositGuide.methods.myanmar.list', { returnObjects: true }) as string[]).map((method) => (
                                    <div key={method} className="bg-gray-900 p-4 rounded-xl flex items-center justify-center gap-3 border border-gray-800">
                                        <CheckCircle2 className="w-5 h-5 text-brand" />
                                        <span className="text-white font-medium">{method}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 inline-flex items-center gap-3 bg-gray-800 px-6 py-3 rounded-full border border-gray-700">
                        <Clock className="w-5 h-5 text-brand" />
                        <p className="text-gray-300">
                            <span className="font-bold text-white">{t('depositGuide.methods.processingTime.label')}</span> {t('depositGuide.methods.processingTime.value')}
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 3 — REQUIREMENTS */}
            <section className="py-20 bg-gray-950">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t('depositGuide.requirements.title')}</h2>
                        <p className="text-gray-400 text-lg">{t('depositGuide.requirements.intro')}</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 mb-16">
                        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 text-center">
                            <Shield className="w-10 h-10 text-brand mx-auto mb-4" />
                            <h3 className="text-white font-bold mb-2">{t('depositGuide.requirements.items.verified.title')}</h3>
                            <p className="text-gray-400 text-sm">{t('depositGuide.requirements.items.verified.desc')}</p>
                        </div>
                        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 text-center">
                            <Wallet className="w-10 h-10 text-brand mx-auto mb-4" />
                            <h3 className="text-white font-bold mb-2">{t('depositGuide.requirements.items.wallet.title')}</h3>
                            <p className="text-gray-400 text-sm">{t('depositGuide.requirements.items.wallet.desc')}</p>
                        </div>
                        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 text-center">
                            <Smartphone className="w-10 h-10 text-brand mx-auto mb-4" />
                            <h3 className="text-white font-bold mb-2">{t('depositGuide.requirements.items.phone.title')}</h3>
                            <p className="text-gray-400 text-sm">{t('depositGuide.requirements.items.phone.desc')}</p>
                        </div>
                        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 text-center">
                            <CheckCircle2 className="w-10 h-10 text-brand mx-auto mb-4" />
                            <h3 className="text-white font-bold mb-2">{t('depositGuide.requirements.items.minAmount.title')}</h3>
                            <p className="text-gray-400 text-sm">{t('depositGuide.requirements.items.minAmount.desc')}</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-gradient-to-br from-brand/20 to-transparent p-6 rounded-2xl border border-brand/30">
                            <h3 className="text-brand font-bold text-xl mb-4">{t('depositGuide.requirements.bangladesh.title')}</h3>
                            <p className="text-white">
                                <Trans i18nKey="depositGuide.requirements.bangladesh.min" values={{ amount: '200–500' }}>
                                    Typical Minimum: <span className="text-brand font-bold">200–500 BDT</span>
                                </Trans>
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-brand/20 to-transparent p-6 rounded-2xl border border-brand/30">
                            <h3 className="text-brand font-bold text-xl mb-4">{t('depositGuide.requirements.myanmar.title')}</h3>
                            <p className="text-white">
                                <Trans i18nKey="depositGuide.requirements.myanmar.min" values={{ amount: '2,000–5,000' }}>
                                    Typical Minimum: <span className="text-brand font-bold">2,000–5,000 MMK</span>
                                </Trans>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4 — STEP-BY-STEP (BD) */}
            <section className="py-20 bg-gray-900 overflow-hidden relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t('depositGuide.stepsBD.title')}</h2>
                        <p className="text-gray-400 text-xl font-medium">{t('depositGuide.stepsBD.subtitle')}</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {(t('depositGuide.stepsBD.items', { returnObjects: true }) as Array<{ title: string; desc: string }>).map((step, idx) => (
                            <div key={idx} className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-brand/50 transition-all group">
                                <div className="w-12 h-12 bg-brand/20 rounded-xl flex items-center justify-center text-brand font-bold text-2xl mb-6 group-hover:scale-110 transition-transform">
                                    {idx + 1}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-brand/10 p-8 rounded-3xl border border-brand/30">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-white mb-4">{t('depositGuide.example.title')}</h3>
                                <ul className="space-y-3">
                                    {(t('depositGuide.example.steps', { returnObjects: true }) as string[]).map((step, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-300">
                                            <ArrowRight className="w-5 h-5 text-brand" />
                                            {step}
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-6 text-gray-400 italic text-sm">
                                    {t('depositGuide.example.footer')}
                                </p>
                            </div>
                            <div className="bg-gray-900 p-4 rounded-3xl border border-gray-700 shadow-2xl">
                                <img
                                    src="https://res.cloudinary.com/dmyocpyxd/image/upload/v1735467644/Deposit_bKash.jpg"
                                    srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_300,f_auto,q_auto/v1735467644/Deposit_bKash.jpg 300w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_600,f_auto,q_auto/v1735467644/Deposit_bKash.jpg 600w"
                                    sizes="(max-width: 768px) 100vw, 300px"
                                    width="280"
                                    height="500"
                                    loading="lazy"
                                    alt={t('depositGuide.example.imgAlt')}
                                    className="rounded-2xl max-w-[280px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5 — STEP-BY-STEP (MM) */}
            <section className="py-20 bg-gray-950">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t('depositGuide.stepsMM.title')}</h2>
                        <p className="text-gray-400 text-xl font-medium">{t('depositGuide.stepsMM.subtitle')}</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            {(t('depositGuide.stepsMM.items', { returnObjects: true }) as string[]).map((step, idx) => (
                                <div key={idx} className="flex items-start gap-4 bg-gray-900 p-6 rounded-2xl border border-gray-800">
                                    <div className="w-10 h-10 bg-brand text-gray-950 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                        {idx + 1}
                                    </div>
                                    <p className="text-gray-300 text-lg">{step}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8">
                                <Smartphone className="w-32 h-32 text-brand/10 -rotate-12" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <Clock className="w-8 h-8 text-brand" />
                                {t('depositGuide.stepsMM.limits.title')}
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-gray-400 mb-1">{t('depositGuide.stepsMM.limits.min')}</p>
                                    <p className="text-2xl font-bold text-white">{t('depositGuide.stepsMM.limits.minValue')}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 mb-1">{t('depositGuide.stepsMM.limits.max')}</p>
                                    <p className="text-gray-400">{t('depositGuide.stepsMM.limits.maxValue')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6 — PROCESSING TIMES */}
            <section className="py-20 bg-gray-900">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                        {t('depositGuide.times.title')}
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
                            <thead className="bg-gray-950">
                                <tr>
                                    <th className="px-6 py-4 text-left text-brand font-bold">{t('depositGuide.times.headers.method')}</th>
                                    <th className="px-6 py-4 text-left text-brand font-bold">{t('depositGuide.times.headers.time')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700">
                                {(t('depositGuide.times.items', { returnObjects: true }) as Array<{ method: string; time: string }>).map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-750">
                                        <td className="px-6 py-4 text-white font-medium">{row.method}</td>
                                        <td className="px-6 py-4 text-gray-300">{row.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* SECTION 7 — DEPOSIT LIMITS */}
            <section className="py-20 bg-gray-950">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                        {t('depositGuide.limitsTable.title')}
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
                            <thead className="bg-gray-950">
                                <tr>
                                    <th className="px-6 py-4 text-left text-brand font-bold">{t('depositGuide.limitsTable.headers.country')}</th>
                                    <th className="px-6 py-4 text-left text-brand font-bold">{t('depositGuide.limitsTable.headers.min')}</th>
                                    <th className="px-6 py-4 text-left text-brand font-bold">{t('depositGuide.limitsTable.headers.max')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700">
                                {(t('depositGuide.limitsTable.countries', { returnObjects: true }) as Array<{ name: string; min: string; max: string }>).map((country, i) => (
                                    <tr key={i} className="hover:bg-gray-750">
                                        <td className="px-6 py-4 text-white font-medium">{country.name}</td>
                                        <td className="px-6 py-4 text-gray-300">{country.min}</td>
                                        <td className="px-6 py-4 text-gray-300">{country.max}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-center text-gray-400 mt-6 text-sm">
                        {t('depositGuide.limitsTable.footer')}
                    </p>
                </div>
            </section>

            {/* SECTION 8 — SUCCESS TIPS */}
            <section className="py-20 bg-gray-900">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                        {t('depositGuide.successTips.title')}
                    </h2>

                    <div className="bg-gradient-to-br from-brand/10 to-transparent p-8 rounded-2xl border border-brand/30">
                        <div className="flex items-center gap-3 mb-6">
                            <Shield className="w-8 h-8 text-brand" />
                            <h3 className="text-2xl font-bold text-white">{t('depositGuide.successTips.security.title')}</h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {(t('depositGuide.successTips.security.tips', { returnObjects: true }) as string[]).map((tip, i) => (
                                <div key={i} className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg">
                                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-300">
                                        {tip.includes('{{domain}}') ? tip.replace('{{domain}}', OFFICIAL_DOMAIN) : tip}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 9 — COMMON ISSUES */}
            <section className="py-20 bg-gray-950">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                        {t('depositGuide.commonIssues.title')}
                    </h2>

                    <div className="space-y-6">
                        {(t('depositGuide.commonIssues.items', { returnObjects: true }) as Array<{ issue: string; solution: string }>).map((item, i) => (
                            <div key={i} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                                <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5 text-red-500" />
                                    {item.issue}
                                </h4>
                                <p className="text-gray-400 ml-7">{item.solution}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 10 — FAQ */}
            <section className="py-20 bg-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">
                        {t('depositGuide.faq.title')}
                    </h2>

                    <div className="space-y-4">
                        {(t('depositGuide.faq.items', { returnObjects: true, domain: OFFICIAL_DOMAIN }) as Array<{ q: string; a: string }>).map((item, idx) => (
                            <div key={idx} className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
                                <button
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-gray-750 transition-colors"
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                >
                                    <span className="text-lg font-bold text-white pr-4">{item.q}</span>
                                    <div className={`text-brand transition-transform flex-shrink-0 ${openFaq === idx ? 'rotate-90' : ''}`}>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </button>
                                {openFaq === idx && (
                                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-gray-700 pt-4">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 11 — FINAL CTA */}
            <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-700">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                        {t('depositGuide.finalCta.title')}
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        {t('depositGuide.finalCta.description')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={OFFICIAL_DOMAIN}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-brand hover:bg-white text-black font-bold py-4 px-8 rounded-full transition-all shadow-lg"
                        >
                            {t('depositGuide.finalCta.cta')} <ExternalLink className="w-5 h-5" />
                        </a>
                        <a
                            href={OFFICIAL_DOMAIN}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 hover:border-white font-bold py-4 px-8 rounded-full transition-all"
                        >
                            {t('depositGuide.finalCta.appCta')} <Smartphone className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DepositGuide;
