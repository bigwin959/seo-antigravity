import React from 'react';
import { LocalizedLink } from '../../components/LocalizedLink';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import { Breadcrumbs } from '../../components/Section';
import {
    AlertTriangle,
} from 'lucide-react';

const CommonMistakes: React.FC = () => {
    const { t } = useTranslation();

    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": t('commonMistakes.seo.title'),
        "description": t('commonMistakes.seo.description'),
        "author": {
            "@type": "Organization",
            "name": "Bigwin959 Guide"
        },
        "datePublished": "2024-12-24",
        "dateModified": "2024-12-24"
    };

    return (
        <>
            <SEO metadata={{
                title: t('commonMistakes.seo.title'),
                description: t('commonMistakes.seo.description'),
                keywords: t('commonMistakes.seo.keywords', { returnObjects: true }) as string[],
                schema: schema,
                canonicalUrl: "https://bigwinofficial.com/blog/10-common-mistakes-avoid"
            }} />
            <Breadcrumbs items={[
                { label: t('commonMistakes.breadcrumbs.blog'), path: '/blog' },
                { label: t('commonMistakes.breadcrumbs.current'), path: '/blog/10-common-mistakes-avoid' }
            ]} />

            <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">

                {/* HERO SECTION */}
                <section className="bg-gradient-to-br from-[#451a03] via-[#78350f] to-[#451a03] rounded-3xl border border-orange-900 p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <AlertTriangle className="w-5 h-5 text-orange-300" />
                            <span className="text-orange-300 text-sm font-bold uppercase tracking-widest">{t('commonMistakes.hero.badge')}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                            {t('commonMistakes.hero.title')} <br />
                            <span className="text-orange-300">{t('commonMistakes.hero.subtitle')}</span>
                        </h1>
                        <p className="text-lg text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            {t('commonMistakes.hero.description')}
                        </p>
                        <div className="flex items-center justify-center gap-2 text-sm text-orange-200/80">
                            <span>{t('commonMistakes.hero.publishDate')}</span>
                            <span>•</span>
                            <span>{t('commonMistakes.hero.readTime')}</span>
                        </div>
                    </div>
                </section>

                {/* INTRODUCTION */}
                <section className="prose prose-invert max-w-none">
                    <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                        <p>
                            {t('commonMistakes.introduction.paragraph')}
                        </p>
                    </div>
                </section>

                <hr className="border-gray-800" />

                {/* MISTAKES LIST */}
                <section className="grid gap-6">
                    {(t('commonMistakes.mistakes.list', { returnObjects: true }) as any[]).map((mistake: any, idx: number) => (
                        <div key={idx} className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex gap-4">
                            <div className="bg-red-500/10 h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0 text-red-500 font-bold">{mistake.number}</div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{mistake.title}</h3>
                                <p className="text-gray-400 text-sm mb-2">
                                    "{mistake.quote}"
                                </p>
                                <div className="bg-red-900/20 p-3 rounded-lg border border-red-500/20 text-sm text-red-300">
                                    <strong>Result:</strong> {mistake.result}
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                <hr className="border-gray-800" />

                {/* FAQ SECTION */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-8">{t('commonMistakes.faq.title')}</h2>
                    <div className="space-y-4">
                        {(t('commonMistakes.faq.items', { returnObjects: true }) as any[]).map((item: any, idx: number) => (
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
                <section className="bg-brand/10 border border-brand/20 p-8 rounded-2xl text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">{t('commonMistakes.cta.title')}</h2>
                    <p className="text-gray-400 mb-6">
                        {t('commonMistakes.cta.description')}
                    </p>
                    <LocalizedLink to="/blog/beginners-guide-bd-mm-2025" className="inline-flex items-center bg-brand hover:bg-white text-black font-bold py-3 px-8 rounded-full transition-colors">
                        {t('commonMistakes.cta.button')}
                    </LocalizedLink>
                </section>

            </div >
        </>
    );
};

export default CommonMistakes;

