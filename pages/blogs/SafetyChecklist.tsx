import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import { Breadcrumbs } from '../../components/Section';
import { OFFICIAL_DOMAIN } from '../../constants';
import {
    ShieldCheck,
    Lock,
    MessageCircle,
    Globe,
    CheckCircle,
    AlertTriangle,
    X as XIcon
} from 'lucide-react';
import { TableOfContents, RelatedArticles, HelpfulFeedback } from '../../components/BlogComponents';

const SafetyChecklist: React.FC = () => {
    const { t } = useTranslation();

    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": t('safetyChecklist.seo.title'),
        "description": t('safetyChecklist.seo.description'),
        "author": {
            "@type": "Organization",
            "name": "Bigwin959 Guide"
        },
        "datePublished": "2024-12-22",
        "dateModified": "2024-12-22"
    };

    return (
        <>
            <SEO metadata={{
                title: t('safetyChecklist.seo.title'),
                description: t('safetyChecklist.seo.description'),
                keywords: t('safetyChecklist.seo.keywords', { returnObjects: true }) as string[],
                schema: schema,
                canonicalUrl: "https://bigwinofficial.com/blog/safety-checklist-online-gaming"
            }} />
            <Breadcrumbs items={[
                { label: t('safetyChecklist.breadcrumbs.blog'), path: '/blog' },
                { label: t('safetyChecklist.breadcrumbs.current'), path: '/blog/safety-checklist-online-gaming' }
            ]} />

            <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">

                {/* HERO SECTION */}
                <section className="bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#111827] rounded-3xl border border-gray-700 p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-green-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <ShieldCheck className="w-5 h-5 text-green-400" />
                            <span className="text-green-300 text-sm font-bold uppercase tracking-widest">{t('safetyChecklist.hero.badge')}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                            {t('safetyChecklist.hero.title')} <br />
                            <span className="text-green-400">{t('safetyChecklist.hero.subtitle')}</span>
                        </h1>
                        <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            {t('safetyChecklist.hero.description')}
                        </p>
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                            <span>{t('safetyChecklist.hero.publishDate')}</span>
                            <span>•</span>
                            <span>{t('safetyChecklist.hero.readTime')}</span>
                        </div>
                    </div>
                </section>

                {/* INTRODUCTION */}
                <section className="prose prose-invert max-w-none">
                    <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                        <p>
                            {t('safetyChecklist.introduction.paragraph1')}
                        </p>
                        <p>
                            {t('safetyChecklist.introduction.paragraph2')}
                        </p>
                    </div>
                </section>

                <TableOfContents
                    title={t('safetyChecklist.tableOfContents.title')}
                    items={[
                        { id: 'ssl-check', title: t('safetyChecklist.checklist.point1.title') },
                        { id: 'hello-test', title: t('safetyChecklist.checklist.point2.title') },
                        { id: 'domain-age', title: t('safetyChecklist.checklist.point3.title') },
                        { id: 'bonus-check', title: t('safetyChecklist.checklist.point4.title') },
                        { id: 'brand-ambassador', title: t('safetyChecklist.checklist.point5.title') },
                        { id: 'faq', title: t('safetyChecklist.faq.title') },
                    ]}
                />

                <hr className="border-gray-800" />

                {/* CHECKLIST */}
                <section className="space-y-6">

                    {/* Point 1 */}
                    <div id="ssl-check" className="bg-gray-800 p-8 rounded-2xl border border-gray-700 flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-green-500">
                                <Lock className="w-8 h-8" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{t('safetyChecklist.checklist.point1.title')}</h3>
                            <p className="text-gray-300 mb-4">
                                {t('safetyChecklist.checklist.point1.description')}
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4 text-sm">
                                <div className="bg-green-500/10 p-3 rounded-lg text-green-400 border border-green-500/20">
                                    {t('safetyChecklist.checklist.point1.safe')}
                                </div>
                                <div className="bg-red-500/10 p-3 rounded-lg text-red-400 border border-red-500/20">
                                    {t('safetyChecklist.checklist.point1.danger')}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Point 2 */}
                    <div id="hello-test" className="bg-gray-800 p-8 rounded-2xl border border-gray-700 flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-green-500">
                                <MessageCircle className="w-8 h-8" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{t('safetyChecklist.checklist.point2.title')}</h3>
                            <p className="text-gray-300 mb-4">
                                {t('safetyChecklist.checklist.point2.description')}
                            </p>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                {(t('safetyChecklist.checklist.point2.results', { returnObjects: true }) as string[]).map((result: string, idx: number) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        {idx === 0 && <CheckCircle className="w-4 h-4 text-green-500" />}
                                        {idx === 1 && <CheckCircle className="w-4 h-4 text-yellow-500" />}
                                        {idx === 2 && <XIcon className="w-4 h-4 text-red-500" />}
                                        <span>{result}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Point 3 */}
                    <div id="domain-age" className="bg-gray-800 p-8 rounded-2xl border border-gray-700 flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-green-500">
                                <Globe className="w-8 h-8" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{t('safetyChecklist.checklist.point3.title')}</h3>
                            <p className="text-gray-300 mb-4">
                                {t('safetyChecklist.checklist.point3.description')}
                            </p>
                            <p className="text-sm text-gray-500 italic">
                                {t('safetyChecklist.checklist.point3.note')}
                            </p>
                        </div>
                    </div>

                    {/* Point 4 */}
                    <div id="bonus-check" className="bg-gray-800 p-8 rounded-2xl border border-gray-700 flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-green-500">
                                <AlertTriangle className="w-8 h-8" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{t('safetyChecklist.checklist.point4.title')}</h3>
                            <p className="text-gray-300 mb-4">
                                {t('safetyChecklist.checklist.point4.description')}
                            </p>
                            <div className="bg-red-500/10 p-4 rounded-lg text-red-300 border border-red-500/20">
                                {t('safetyChecklist.checklist.point4.warning')}
                            </div>
                        </div>
                    </div>

                    {/* Point 5 */}
                    <div id="brand-ambassador" className="bg-gray-800 p-8 rounded-2xl border border-gray-700 flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-green-500">
                                <CheckCircle className="w-8 h-8" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{t('safetyChecklist.checklist.point5.title')}</h3>
                            <p className="text-gray-300 mb-4">
                                {t('safetyChecklist.checklist.point5.description')}
                            </p>
                            <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/30">
                                <p className="text-gray-300 text-sm">
                                    {t('safetyChecklist.checklist.point5.example')}
                                </p>
                            </div>
                        </div>
                    </div>

                </section>

                <hr className="border-gray-800" />

                {/* FAQ SECTION */}
                <section id="faq">
                    <h2 className="text-3xl font-bold text-white mb-8">{t('safetyChecklist.faq.title')}</h2>
                    <div className="space-y-4">
                        {(t('safetyChecklist.faq.items', { returnObjects: true }) as any[]).map((item: any, idx: number) => (
                            <div key={idx} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                                <h3 className="text-white font-bold mb-2">{item.q}</h3>
                                <p className="text-gray-400 text-sm">
                                    {item.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <HelpfulFeedback
                    question={t('safetyChecklist.feedback.question')}
                    yesText={t('safetyChecklist.feedback.yesButton')}
                    noText={t('safetyChecklist.feedback.noButton')}
                    thankYouText={t('safetyChecklist.feedback.thankYou')}
                    improveText={t('safetyChecklist.feedback.improve')}
                />

                <RelatedArticles
                    title={t('safetyChecklist.relatedArticles.title')}
                    readMoreText={t('safetyChecklist.relatedArticles.readMore')}
                    articles={(t('safetyChecklist.relatedArticles.articles', { returnObjects: true }) as any[]).map((a, i) => ({
                        ...a,
                        path: i === 0 ? '/blog/beginners-guide-bd-mm-2025' : i === 1 ? '/blog/10-common-mistakes-avoid' : '/blog/payment-troubleshooting-delays'
                    }))}
                />

                {/* CTA */}
                <section className="bg-green-900/20 border border-green-500/30 p-8 rounded-2xl text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">{t('safetyChecklist.cta.title')}</h2>
                    <p className="text-gray-400 mb-6">
                        {t('safetyChecklist.cta.description')}
                    </p>
                    <a href={OFFICIAL_DOMAIN} className="inline-flex items-center bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg">
                        <ShieldCheck className="w-5 h-5 mr-2" /> {t('safetyChecklist.cta.button')}
                    </a>
                </section>
            </div>
        </>
    );
};

export default SafetyChecklist;
