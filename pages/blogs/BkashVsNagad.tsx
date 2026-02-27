import React from 'react';
import { LocalizedLink } from '../../components/LocalizedLink';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import { Breadcrumbs } from '../../components/Section';
import { OFFICIAL_DOMAIN } from '../../constants';
import {
    ArrowRightLeft,
    Zap,
    ShieldCheck,
    Smartphone,
    Wallet,
    AlertTriangle,
    CheckCircle,
    XCircle,
    Clock
} from 'lucide-react';
import { TableOfContents, RelatedArticles, HelpfulFeedback } from '../../components/BlogComponents';

const BkashVsNagad: React.FC = () => {
    const { t } = useTranslation();

    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": t('bkashVsNagad.seo.title'),
        "description": t('bkashVsNagad.seo.description'),
        "author": {
            "@type": "Organization",
            "name": "Bigwin959 Guide"
        },
        "datePublished": "2025-01-12",
        "dateModified": "2025-01-12"
    };

    return (
        <>
            <SEO metadata={{
                title: t('bkashVsNagad.seo.title'),
                description: t('bkashVsNagad.seo.description'),
                keywords: t('bkashVsNagad.seo.keywords', { returnObjects: true }) as string[],
                schema: schema,
                canonicalUrl: "https://bigwinofficial.com/blog/bkash-vs-nagad-betting-payment-comparison"
            }} />
            <Breadcrumbs items={[
                { label: t('bkashVsNagad.breadcrumbs.blog'), path: '/blog' },
                { label: t('bkashVsNagad.breadcrumbs.current'), path: '/blog/bkash-vs-nagad-betting-payment-comparison' }
            ]} />

            <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">

                {/* HERO SECTION */}
                <section className="bg-gradient-to-br from-pink-900 via-gray-900 to-orange-900 rounded-3xl border border-gray-700 p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none"></div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="bg-brand/20 text-brand px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{t('bkashVsNagad.hero.badge')}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                            {t('bkashVsNagad.hero.title')}
                        </h1>
                        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                            {t('bkashVsNagad.hero.description')}
                        </p>
                        <div className="flex justify-center gap-8 text-sm font-bold text-white/50">
                            <div className="flex flex-col items-center">
                                <span className="text-brand">bKash</span>
                                <span className="text-xs font-normal">Fastest</span>
                            </div>
                            <div className="h-10 w-px bg-white/20"></div>
                            <div className="flex flex-col items-center">
                                <span className="text-orange-500">Nagad</span>
                                <span className="text-xs font-normal">Lowest Fees</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INTRODUCTION */}
                <section className="prose prose-invert max-w-none">
                    <p className="text-xl text-gray-300 leading-relaxed">
                        {t('bkashVsNagad.intro.p1')}
                    </p>
                </section>

                <TableOfContents
                    title={t('bkashVsNagad.tableOfContents.title') || "Table of Contents"}
                    items={[
                        { id: 'comparison-table', title: t('bkashVsNagad.comparison.title') },
                        { id: 'bkash-deep-dive', title: t('bkashVsNagad.bkash.title') },
                        { id: 'nagad-deep-dive', title: t('bkashVsNagad.nagad.title') },
                        { id: 'final-verdict', title: t('bkashVsNagad.verdict.title') },
                    ]}
                />

                {/* SECTION 1: COMPARISON TABLE */}
                <section id="comparison-table">
                    <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                        <ArrowRightLeft className="w-8 h-8 text-brand" />
                        {t('bkashVsNagad.comparison.title')}
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse rounded-xl overflow-hidden">
                            <thead>
                                <tr className="bg-gray-800 text-white">
                                    <th className="p-4 font-bold">{t('bkashVsNagad.comparison.headers.feature')}</th>
                                    <th className="p-4 font-bold text-pink-500">bKash</th>
                                    <th className="p-4 font-bold text-orange-500">Nagad</th>
                                    <th className="p-4 font-bold text-brand">Winner</th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-900 border border-gray-800">
                                {(t('bkashVsNagad.comparison.rows', { returnObjects: true }) as any[]).map((row, i) => (
                                    <tr key={i} className="border-b border-gray-800 hover:bg-gray-800/50">
                                        <td className="p-4 text-gray-300 font-medium">{row.feature}</td>
                                        <td className="p-4 text-gray-400">{row.bkash}</td>
                                        <td className="p-4 text-gray-400">{row.nagad}</td>
                                        <td className="p-4 font-bold text-brand">{row.winner}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* SECTION 2: BKASH ANALYSIS */}
                <section id="bkash-deep-dive" className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center font-bold text-white">b</div>
                        <h2 className="text-2xl font-bold text-white">{t('bkashVsNagad.bkash.title')}</h2>
                    </div>

                    <p className="text-gray-300 mb-6">{t('bkashVsNagad.bkash.description')}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-green-900/20 p-5 rounded-xl border border-green-900/50">
                            <h3 className="text-green-400 font-bold mb-3 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5" /> {t('bkashVsNagad.pros')}
                            </h3>
                            <ul className="space-y-2">
                                {(t('bkashVsNagad.bkash.pros', { returnObjects: true }) as string[]).map((pro, i) => (
                                    <li key={i} className="text-gray-400 text-sm">• {pro}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-red-900/20 p-5 rounded-xl border border-red-900/50">
                            <h3 className="text-red-400 font-bold mb-3 flex items-center gap-2">
                                <XCircle className="w-5 h-5" /> {t('bkashVsNagad.cons')}
                            </h3>
                            <ul className="space-y-2">
                                {(t('bkashVsNagad.bkash.cons', { returnObjects: true }) as string[]).map((con, i) => (
                                    <li key={i} className="text-gray-400 text-sm">• {con}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-6">
                        <LocalizedLink to="/guides/bkash-deposit" className="text-pink-500 hover:text-white font-bold text-sm flex items-center gap-2">
                            {t('bkashVsNagad.bkash.guideLink')} <ArrowRightLeft className="w-4 h-4" />
                        </LocalizedLink>
                    </div>
                </section>

                {/* SECTION 3: NAGAD ANALYSIS */}
                <section id="nagad-deep-dive" className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center font-bold text-white">N</div>
                        <h2 className="text-2xl font-bold text-white">{t('bkashVsNagad.nagad.title')}</h2>
                    </div>

                    <p className="text-gray-300 mb-6">{t('bkashVsNagad.nagad.description')}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-green-900/20 p-5 rounded-xl border border-green-900/50">
                            <h3 className="text-green-400 font-bold mb-3 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5" /> {t('bkashVsNagad.pros')}
                            </h3>
                            <ul className="space-y-2">
                                {(t('bkashVsNagad.nagad.pros', { returnObjects: true }) as string[]).map((pro, i) => (
                                    <li key={i} className="text-gray-400 text-sm">• {pro}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-red-900/20 p-5 rounded-xl border border-red-900/50">
                            <h3 className="text-red-400 font-bold mb-3 flex items-center gap-2">
                                <XCircle className="w-5 h-5" /> {t('bkashVsNagad.cons')}
                            </h3>
                            <ul className="space-y-2">
                                {(t('bkashVsNagad.nagad.cons', { returnObjects: true }) as string[]).map((con, i) => (
                                    <li key={i} className="text-gray-400 text-sm">• {con}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* VERDICT */}
                <section id="final-verdict" className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-10 border border-gray-700 text-center">
                    <TrophyIcon className="w-16 h-16 text-brand mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-white mb-6">{t('bkashVsNagad.verdict.title')}</h2>
                    <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
                        <div>
                            <h4 className="font-bold text-white mb-2">{t('bkashVsNagad.verdict.bestForSpeed')}</h4>
                            <p className="text-gray-400 text-sm mb-4">{t('bkashVsNagad.verdict.bestForSpeedDesc')}</p>
                            <span className="bg-pink-600 text-white px-3 py-1 rounded text-xs font-bold">bKash</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-2">{t('bkashVsNagad.verdict.bestForCost')}</h4>
                            <p className="text-gray-400 text-sm mb-4">{t('bkashVsNagad.verdict.bestForCostDesc')}</p>
                            <span className="bg-orange-600 text-white px-3 py-1 rounded text-xs font-bold">Nagad</span>
                        </div>
                    </div>

                    <div className="mt-10">
                        <LocalizedLink to="/guides/deposit" className="bg-brand hover:bg-white text-black font-bold py-3 px-8 rounded-full transition-colors text-lg">
                            {t('bkashVsNagad.cta')}
                        </LocalizedLink>
                        <p className="mt-4 text-xs text-gray-500">{t('bkashVsNagad.ctaSub')}</p>
                    </div>
                </section>

                <HelpfulFeedback
                    question={t('bkashVsNagad.feedback.question')}
                    yesText={t('bkashVsNagad.feedback.yesButton')}
                    noText={t('bkashVsNagad.feedback.noButton')}
                    thankYouText={t('bkashVsNagad.feedback.thankYou')}
                    improveText={t('bkashVsNagad.feedback.improve')}
                />

                <RelatedArticles
                    title={t('bkashVsNagad.relatedArticles.title')}
                    readMoreText={t('bkashVsNagad.relatedArticles.readMore')}
                    articles={(t('bkashVsNagad.relatedArticles.articles', { returnObjects: true }) as any[]).map((a, i) => ({
                        ...a,
                        path: i === 0 ? '/guides/bkash-deposit' : i === 1 ? '/blog/online-gaming-bangladesh-local-payments' : '/guides/withdrawal'
                    }))}
                />

            </div>
        </>
    );
};

// Icon helper
const TrophyIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
);

export default BkashVsNagad;
