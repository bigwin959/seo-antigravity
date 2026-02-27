import React from 'react';
import { LocalizedLink } from '../../components/LocalizedLink';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import { Breadcrumbs } from '../../components/Section';
import { OFFICIAL_DOMAIN } from '../../constants';
import {
    CheckCircle,
    AlertTriangle,
    CreditCard,
    Trophy,
    Gamepad2,
    Wallet,
    Globe,
    UserPlus,
    Gift,
    Lock,
    TrendingUp
} from 'lucide-react';
import { TableOfContents, RelatedArticles, HelpfulFeedback } from '../../components/BlogComponents';

const BeginnersGuide: React.FC = () => {
    const { t } = useTranslation();

    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": t('beginnersGuide.seo.title'),
        "description": t('beginnersGuide.seo.description'),
        "author": {
            "@type": "Organization",
            "name": "Bigwin959 Guide"
        },
        "datePublished": "2025-01-10",
        "dateModified": "2025-01-10"
    };

    return (
        <>
            <SEO metadata={{
                title: t('beginnersGuide.seo.title'),
                description: t('beginnersGuide.seo.description'),
                keywords: t('beginnersGuide.seo.keywords', { returnObjects: true }) as string[],
                schema: schema,
                canonicalUrl: "https://bigwinofficial.com/blog/beginners-guide-bd-mm-2025"
            }} />
            <Breadcrumbs items={[
                { label: t('beginnersGuide.breadcrumbs.blog'), path: '/blog' },
                { label: t('beginnersGuide.breadcrumbs.current'), path: '/blog/beginners-guide-bd-mm-2025' }
            ]} />

            <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">

                {/* HERO SECTION */}
                <section className="bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#1e1b4b] rounded-3xl border border-indigo-900/50 p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-brand/10 blur-[100px] rounded-full pointer-events-none"></div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Globe className="w-5 h-5 text-brand" />
                            <span className="text-brand text-sm font-bold uppercase tracking-widest">{t('beginnersGuide.hero.badge')}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                            {t('beginnersGuide.hero.title')} <br />
                            <span className="text-gray-300">{t('beginnersGuide.hero.subtitle')}</span>
                        </h1>
                        <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            {t('beginnersGuide.hero.description')}
                        </p>
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                            <span>{t('beginnersGuide.hero.publishDate')}</span>
                            <span>•</span>
                            <span>{t('beginnersGuide.hero.readTime')}</span>
                        </div>
                    </div>
                </section>

                {/* DISCLAIMER */}
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-yellow-500 font-bold mb-2">{t('beginnersGuide.disclaimer.title')}</h3>
                            <p className="text-gray-300 text-sm">
                                {t('beginnersGuide.disclaimer.content')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* INTRODUCTION */}
                <section className="prose prose-invert max-w-none">
                    <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                        <p>
                            {t('beginnersGuide.introduction.paragraph1')}
                        </p>
                        <p>
                            {t('beginnersGuide.introduction.paragraph2')}
                        </p>
                    </div>
                </section>

                <TableOfContents
                    title={t('beginnersGuide.tableOfContents.title')}
                    items={[
                        { id: 'registration', title: t('beginnersGuide.registration.title') },
                        { id: 'deposits', title: t('beginnersGuide.deposits.title') },
                        { id: 'bonuses', title: t('beginnersGuide.bonuses.title') },
                        { id: 'choosing-games', title: t('beginnersGuide.games.title') },
                        { id: 'faq', title: t('beginnersGuide.faq.title') },
                    ]}
                />

                <hr className="border-gray-800" />

                {/* SECTION 1: REGISTRATION */}
                <section id="registration">
                    <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                        <UserPlus className="w-8 h-8 text-brand" />
                        {t('beginnersGuide.registration.title')}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <p className="text-gray-300">
                                {t('beginnersGuide.registration.intro')}
                            </p>
                            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                                <h4 className="text-white font-bold mb-4">{t('beginnersGuide.registration.goldenRules.title')}</h4>
                                <ul className="space-y-4">
                                    {(t('beginnersGuide.registration.goldenRules.rules', { returnObjects: true }) as any[]).map((rule: any, idx: number) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                            <span className="text-gray-300"><strong>{rule.title}</strong> {rule.description}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 flex flex-col items-center text-center">
                            <Lock className="w-12 h-12 text-gray-500 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">{t('beginnersGuide.registration.passwordSecurity.title')}</h3>
                            <p className="text-gray-400 text-sm mb-6">
                                {t('beginnersGuide.registration.passwordSecurity.description')}
                            </p>
                            <LocalizedLink to="/guides/registration" className="text-brand font-bold hover:underline">
                                {t('beginnersGuide.registration.passwordSecurity.linkText')}
                            </LocalizedLink>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-800" />

                {/* SECTION 2: DEPOSITS */}
                <section id="deposits">
                    <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                        <Wallet className="w-8 h-8 text-brand" />
                        {t('beginnersGuide.deposits.title')}
                    </h2>

                    <div className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Bangladesh */}
                            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                                <div className="flex items-center gap-3 mb-4">
                                    <img src="https://flagcdn.com/w40/bd.png" alt="Bangladesh" className="w-8 h-auto rounded" />
                                    <h3 className="text-xl font-bold text-white">{t('beginnersGuide.deposits.bangladesh.title')}</h3>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between bg-gray-900/50 p-3 rounded-lg">
                                        <span className="text-gray-300">{t('beginnersGuide.deposits.labels.methods')}</span>
                                        <span className="text-white font-bold">{t('beginnersGuide.deposits.bangladesh.methods')}</span>
                                    </div>
                                    <div className="flex items-center justify-between bg-gray-900/50 p-3 rounded-lg">
                                        <span className="text-gray-300">{t('beginnersGuide.deposits.labels.minDeposit')}</span>
                                        <span className="text-white font-bold">{t('beginnersGuide.deposits.bangladesh.minDeposit')}</span>
                                    </div>
                                    <div className="flex items-center justify-between bg-gray-900/50 p-3 rounded-lg">
                                        <span className="text-gray-300">{t('beginnersGuide.deposits.labels.speed')}</span>
                                        <span className="text-green-400 font-bold">{t('beginnersGuide.deposits.bangladesh.speed')}</span>
                                    </div>
                                </div>
                                <div className="mt-6 pt-6 border-t border-gray-700">
                                    <p className="text-sm text-gray-400 mb-3">
                                        <strong>{t('beginnersGuide.deposits.labels.tip')}</strong> {t('beginnersGuide.deposits.bangladesh.tip')}
                                    </p>
                                    <LocalizedLink to="/guides/bkash-deposit" className="text-brand text-sm font-bold flex items-center justify-end">
                                        {t('beginnersGuide.deposits.bangladesh.linkText')} <Globe className="w-4 h-4 ml-1" />
                                    </LocalizedLink>
                                </div>
                            </div>

                            {/* Myanmar */}
                            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                                <div className="flex items-center gap-3 mb-4">
                                    <img src="https://flagcdn.com/w40/mm.png" alt="Myanmar" className="w-8 h-auto rounded" />
                                    <h3 className="text-xl font-bold text-white">{t('beginnersGuide.deposits.myanmar.title')}</h3>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between bg-gray-900/50 p-3 rounded-lg">
                                        <span className="text-gray-300">{t('beginnersGuide.deposits.labels.methods')}</span>
                                        <span className="text-white font-bold">{t('beginnersGuide.deposits.myanmar.methods')}</span>
                                    </div>
                                    <div className="flex items-center justify-between bg-gray-900/50 p-3 rounded-lg">
                                        <span className="text-gray-300">{t('beginnersGuide.deposits.labels.minDeposit')}</span>
                                        <span className="text-white font-bold">{t('beginnersGuide.deposits.myanmar.minDeposit')}</span>
                                    </div>
                                    <div className="flex items-center justify-between bg-gray-900/50 p-3 rounded-lg">
                                        <span className="text-gray-300">{t('beginnersGuide.deposits.labels.speed')}</span>
                                        <span className="text-green-400 font-bold">{t('beginnersGuide.deposits.myanmar.speed')}</span>
                                    </div>
                                </div>
                                <div className="mt-6 pt-6 border-t border-gray-700">
                                    <p className="text-sm text-gray-400 mb-3">
                                        <strong>{t('beginnersGuide.deposits.labels.tip')}</strong> {t('beginnersGuide.deposits.myanmar.tip')}
                                    </p>
                                    <LocalizedLink to="/guides/deposit" className="text-brand text-sm font-bold flex items-center justify-end">
                                        {t('beginnersGuide.deposits.myanmar.linkText')} <Globe className="w-4 h-4 ml-1" />
                                    </LocalizedLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-800" />

                {/* SECTION 3: BONUSES */}
                <section id="bonuses">
                    <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                        <Gift className="w-8 h-8 text-brand" />
                        {t('beginnersGuide.bonuses.title')}
                    </h2>

                    <div className="bg-gradient-to-r from-purple-900/20 to-brand/20 rounded-2xl p-8 border border-purple-500/30">
                        <p className="text-gray-300 mb-6 text-lg">
                            {t('beginnersGuide.bonuses.intro')}
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gray-900/80 p-6 rounded-xl">
                                <h4 className="text-brand font-bold mb-3">{t('beginnersGuide.bonuses.turnover.title')}</h4>
                                <p className="text-sm text-gray-400 mb-4">
                                    {t('beginnersGuide.bonuses.turnover.description')}
                                </p>
                                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                                    <span className="text-red-400 text-xs font-bold uppercase">{t('beginnersGuide.bonuses.turnover.adviceLabel')}</span>
                                    <p className="text-gray-300 text-sm mt-1">{t('beginnersGuide.bonuses.turnover.advice')}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-white font-bold">{t('beginnersGuide.bonuses.commonBonuses.title')}</h4>
                                <ul className="space-y-3">
                                    {(t('beginnersGuide.bonuses.commonBonuses.items', { returnObjects: true }) as any[]).map((bonus: any, idx: number) => (
                                        <li key={idx} className="flex items-center justify-between bg-gray-800 p-3 rounded-lg">
                                            <span className="text-gray-300">{bonus.name}</span>
                                            <span className="text-brand font-bold text-sm">{bonus.value}</span>
                                        </li>
                                    ))}
                                </ul>
                                <LocalizedLink to="/bonuses" className="inline-block text-brand text-sm font-bold hover:underline">
                                    {t('beginnersGuide.bonuses.commonBonuses.linkText')}
                                </LocalizedLink>
                            </div>
                        </div>
                    </div>
                </section>

                <hr className="border-gray-800" />

                {/* SECTION 4: CHOOSING GAMES */}
                <section id="choosing-games">
                    <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                        <Gamepad2 className="w-8 h-8 text-brand" />
                        {t('beginnersGuide.games.title')}
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {(t('beginnersGuide.games.types', { returnObjects: true }) as any[]).map((game: any, idx: number) => (
                            <div key={idx} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-brand transition-colors group">
                                <div className="h-12 w-12 bg-indigo-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-indigo-500/30">
                                    {idx === 0 && <Trophy className="w-6 h-6 text-blue-400" />}
                                    {idx === 1 && <Gamepad2 className="w-6 h-6 text-purple-400" />}
                                    {idx === 2 && <TrendingUp className="w-6 h-6 text-red-400" />}
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">{game.name}</h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    {game.description}
                                </p>
                                <LocalizedLink
                                    to={idx === 0 ? "/guides/sports-betting" : idx === 1 ? "/top-slot-games" : "/guides/aviator-game"}
                                    className="text-brand text-sm font-bold"
                                >
                                    {game.linkText}
                                </LocalizedLink>
                            </div>
                        ))}
                    </div>
                </section>

                <hr className="border-gray-800" />

                {/* FAQ SECTION */}
                <section id="faq">
                    <h2 className="text-3xl font-bold text-white mb-8">{t('beginnersGuide.faq.title')}</h2>
                    <div className="space-y-4">
                        {(t('beginnersGuide.faq.items', { returnObjects: true }) as any[]).map((item: any, idx: number) => (
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
                    question={t('beginnersGuide.feedback.question')}
                    yesText={t('beginnersGuide.feedback.yesButton')}
                    noText={t('beginnersGuide.feedback.noButton')}
                    thankYouText={t('beginnersGuide.feedback.thankYou')}
                    improveText={t('beginnersGuide.feedback.improve')}
                />

                <RelatedArticles
                    title={t('beginnersGuide.relatedArticles.title')}
                    readMoreText={t('beginnersGuide.relatedArticles.readMore')}
                    articles={(t('beginnersGuide.relatedArticles.articles', { returnObjects: true }) as any[]).map((a, i) => ({
                        ...a,
                        path: i === 0 ? '/blog/safety-checklist-online-gaming' : i === 1 ? '/blog/10-common-mistakes-avoid' : '/blog/payment-troubleshooting-delays'
                    }))}
                />

                {/* CTA SECTION */}
                <section className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-10 text-center border border-gray-700">
                    <h2 className="text-3xl font-bold text-white mb-4">{t('beginnersGuide.cta.title')}</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        {t('beginnersGuide.cta.description')}
                    </p>
                    <a href={OFFICIAL_DOMAIN} className="inline-block bg-brand hover:bg-white text-black font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:transform hover:translate-y-[-2px]">
                        {t('beginnersGuide.cta.button')}
                    </a>
                </section>
            </div>
        </>
    );
};

export default BeginnersGuide;

