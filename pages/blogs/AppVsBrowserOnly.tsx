import React from 'react';
import { LocalizedLink } from '../../components/LocalizedLink';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import { Breadcrumbs } from '../../components/Section';
import { OFFICIAL_DOMAIN } from '../../constants';
import {
    Smartphone,
    Globe,
    Zap,
    Lock,
    Bell,
    Download,
} from 'lucide-react';

const AppVsBrowser: React.FC = () => {
    const { t } = useTranslation();

    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": t('appVsBrowser.seo.title'),
        "description": t('appVsBrowser.seo.description'),
        "author": {
            "@type": "Organization",
            "name": "Bigwin959 Guide"
        },
        "datePublished": "2024-12-28",
        "dateModified": "2024-12-28"
    };

    return (
        <>
            <SEO metadata={{
                title: t('appVsBrowser.seo.title'),
                description: t('appVsBrowser.seo.description'),
                keywords: t('appVsBrowser.seo.keywords', { returnObjects: true }) as string[],
                schema: schema,
                canonicalUrl: "https://bigwinofficial.com/blog/app-vs-browser-comparison"
            }} />
            <Breadcrumbs items={[
                { label: t('appVsBrowser.breadcrumbs.blog'), path: '/blog' },
                { label: t('appVsBrowser.breadcrumbs.current'), path: '/blog/app-vs-browser-comparison' }
            ]} />

            <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">

                {/* HERO SECTION */}
                <section className="bg-gradient-to-br from-[#172554] via-[#1e3a8a] to-[#172554] rounded-3xl border border-blue-900 p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 blur-[100px] rounded-full pointer-events-none"></div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Smartphone className="w-5 h-5 text-blue-300" />
                            <span className="text-blue-300 text-sm font-bold uppercase tracking-widest">{t('appVsBrowser.hero.badge')}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                            {t('appVsBrowser.hero.title')} <br />
                            <span className="text-blue-400">{t('appVsBrowser.hero.titleHighlight')}</span>
                        </h1>
                        <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                            {t('appVsBrowser.hero.description')}
                        </p>
                        <div className="flex items-center justify-center gap-2 text-sm text-blue-200/80">
                            <span>{t('appVsBrowser.hero.published')}</span>
                            <span>•</span>
                            <span>{t('appVsBrowser.hero.readTime')}</span>
                        </div>
                    </div>
                </section>

                {/* INTRODUCTION */}
                <section className="prose prose-invert max-w-none">
                    <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                        <p>
                            {t('appVsBrowser.intro.p1')}
                        </p>
                        <p>
                            {t('appVsBrowser.intro.p2')}
                        </p>
                    </div>
                </section>

                <hr className="border-gray-800" />

                {/* SECTION 1: COMPARISON TABLE */}
                <section>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-800 border-b border-gray-700">
                                    <th className="p-4 text-gray-400 font-normal">{t('appVsBrowser.comparison.table.header.feature')}</th>
                                    <th className="p-4 text-center text-white font-bold bg-blue-900/20 w-1/3 border-t-4 border-blue-500 rounded-t-xl">{t('appVsBrowser.comparison.table.header.app')}</th>
                                    <th className="p-4 text-center text-white font-bold w-1/3">{t('appVsBrowser.comparison.table.header.browser')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700">
                                <tr className="bg-gray-900/50">
                                    <td className="p-4 text-gray-300 font-bold">{t('appVsBrowser.comparison.table.rows.login.label')}</td>
                                    <td className="p-4 text-center text-green-400 font-bold flex flex-col items-center">
                                        <Lock className="w-5 h-5 mb-1" />
                                        {t('appVsBrowser.comparison.table.rows.login.app')}
                                    </td>
                                    <td className="p-4 text-center text-gray-400">{t('appVsBrowser.comparison.table.rows.login.browser')}</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-gray-300 font-bold">{t('appVsBrowser.comparison.table.rows.speed.label')}</td>
                                    <td className="p-4 text-center text-green-400 font-bold flex flex-col items-center">
                                        <Zap className="w-5 h-5 mb-1" />
                                        {t('appVsBrowser.comparison.table.rows.speed.app')}
                                    </td>
                                    <td className="p-4 text-center text-gray-400">{t('appVsBrowser.comparison.table.rows.speed.browser')}</td>
                                </tr>
                                <tr className="bg-gray-900/50">
                                    <td className="p-4 text-gray-300 font-bold">{t('appVsBrowser.comparison.table.rows.data.label')}</td>
                                    <td className="p-4 text-center text-green-400 font-bold flex flex-col items-center">
                                        <Smartphone className="w-5 h-5 mb-1" />
                                        {t('appVsBrowser.comparison.table.rows.data.app')}
                                    </td>
                                    <td className="p-4 text-center text-gray-400">{t('appVsBrowser.comparison.table.rows.data.browser')}</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-gray-300 font-bold">{t('appVsBrowser.comparison.table.rows.notifications.label')}</td>
                                    <td className="p-4 text-center text-green-400 font-bold flex flex-col items-center">
                                        <Bell className="w-5 h-5 mb-1" />
                                        {t('appVsBrowser.comparison.table.rows.notifications.app')}
                                    </td>
                                    <td className="p-4 text-center text-gray-400">{t('appVsBrowser.comparison.table.rows.notifications.browser')}</td>
                                </tr>
                                <tr className="bg-gray-900/50">
                                    <td className="p-4 text-gray-300 font-bold">{t('appVsBrowser.comparison.table.rows.privacy.label')}</td>
                                    <td className="p-4 text-center text-gray-400">{t('appVsBrowser.comparison.table.rows.privacy.app')}</td>
                                    <td className="p-4 text-center text-green-400 font-bold text-sm">{t('appVsBrowser.comparison.table.rows.privacy.browser')}</td>
                                </tr>
                                <tr>
                                    <td className="p-4 text-gray-300 font-bold">{t('appVsBrowser.comparison.table.rows.vpn.label')}</td>
                                    <td className="p-4 text-center text-green-400 font-bold">{t('appVsBrowser.comparison.table.rows.vpn.app')}</td>
                                    <td className="p-4 text-center text-yellow-500 font-bold">{t('appVsBrowser.comparison.table.rows.vpn.browser')}</td>
                                </tr>
                                <tr className="bg-gray-900/50">
                                    <td className="p-4 text-gray-300 font-bold">{t('appVsBrowser.comparison.table.rows.offline.label')}</td>
                                    <td className="p-4 text-center text-green-400 font-bold">{t('appVsBrowser.comparison.table.rows.offline.app')}</td>
                                    <td className="p-4 text-center text-gray-400">{t('appVsBrowser.comparison.table.rows.offline.browser')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <hr className="border-gray-800" />

                {/* SECTION 2: WHY CHOOSE APP */}
                <section>
                    <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-bl-full"></div>
                        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                            <Smartphone className="w-8 h-8 text-brand" />
                            {t('appVsBrowser.whyApp.title')}
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="space-y-3">
                                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-brand">
                                    <Lock className="w-6 h-6" />
                                </div>
                                <h4 className="text-white font-bold">{t('appVsBrowser.whyApp.reasons.security.title')}</h4>
                                <p className="text-gray-400 text-sm">
                                    {t('appVsBrowser.whyApp.reasons.security.description')}
                                </p>
                            </div>
                            <div className="space-y-3">
                                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-brand">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h4 className="text-white font-bold">{t('appVsBrowser.whyApp.reasons.antiBlocking.title')}</h4>
                                <p className="text-gray-400 text-sm">
                                    {t('appVsBrowser.whyApp.reasons.antiBlocking.description')}
                                </p>
                            </div>
                            <div className="space-y-3">
                                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-brand">
                                    <Bell className="w-6 h-6" />
                                </div>
                                <h4 className="text-white font-bold">{t('appVsBrowser.whyApp.reasons.bonuses.title')}</h4>
                                <p className="text-gray-400 text-sm">
                                    {t('appVsBrowser.whyApp.reasons.bonuses.description')}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: WHEN TO USE BROWSER */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">{t('appVsBrowser.whenBrowser.title')}</h2>
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Globe className="w-5 h-5 text-gray-500 mt-1" />
                                <div>
                                    <strong className="text-white block">{t('appVsBrowser.whenBrowser.reasons.casual.title')}</strong>
                                    <span className="text-gray-400 text-sm">{t('appVsBrowser.whenBrowser.reasons.casual.description')}</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Globe className="w-5 h-5 text-gray-500 mt-1" />
                                <div>
                                    <strong className="text-white block">{t('appVsBrowser.whenBrowser.reasons.privacy.title')}</strong>
                                    <span className="text-gray-400 text-sm">{t('appVsBrowser.whenBrowser.reasons.privacy.description')}</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Globe className="w-5 h-5 text-gray-500 mt-1" />
                                <div>
                                    <strong className="text-white block">{t('appVsBrowser.whenBrowser.reasons.ios.title')}</strong>
                                    <span className="text-gray-400 text-sm">{t('appVsBrowser.whenBrowser.reasons.ios.description')}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <hr className="border-gray-800" />

                {/* FAQ SECTION */}
                <section>
                    <h2 className="text-3xl font-bold text-white mb-8">{t('appVsBrowser.faq.title')}</h2>
                    <div className="space-y-4">
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                            <h3 className="text-white font-bold mb-2">{t('appVsBrowser.faq.questions.dataUsage.q')}</h3>
                            <p className="text-gray-400 text-sm">
                                {t('appVsBrowser.faq.questions.dataUsage.a')}
                            </p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                            <h3 className="text-white font-bold mb-2">{t('appVsBrowser.faq.questions.iphone.q')}</h3>
                            <p className="text-gray-400 text-sm">
                                {t('appVsBrowser.faq.questions.iphone.a')}
                            </p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                            <h3 className="text-white font-bold mb-2">{t('appVsBrowser.faq.questions.updates.q')}</h3>
                            <p className="text-gray-400 text-sm">
                                {t('appVsBrowser.faq.questions.updates.a')}
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center mt-16">
                    <p className="text-gray-400 mb-6">
                        {t('appVsBrowser.cta.text')}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <LocalizedLink to="/app-download" className="bg-brand hover:bg-white text-black font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center">
                            <Download className="w-5 h-5 mr-2" /> {t('appVsBrowser.cta.downloadButton')}
                        </LocalizedLink>
                        <a href={OFFICIAL_DOMAIN} className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center justify-center border border-gray-600">
                            <Globe className="w-5 h-5 mr-2" /> {t('appVsBrowser.cta.browserButton')}
                        </a>
                    </div>
                </section>

            </div >
        </>
    );
};

export default AppVsBrowser;

