import React from 'react';
import { LocalizedLink } from '../../components/LocalizedLink';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import { Breadcrumbs } from '../../components/Section';
import { OFFICIAL_DOMAIN } from '../../constants';
import {
  CheckCircle,
  AlertTriangle,
  ExternalLink,
  ShieldCheck,
  CreditCard,
  Trophy,
  Gamepad2,
  Wallet,
  TrendingUp,
  Globe,
  Zap
} from 'lucide-react';
import { TableOfContents, RelatedArticles, HelpfulFeedback } from '../../components/BlogComponents';

const OnlineGamingBangladesh: React.FC = () => {
  const { t } = useTranslation();

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": t('onlineGamingBangladesh.seo.title'),
    "description": t('onlineGamingBangladesh.seo.description'),
    "author": {
      "@type": "Organization",
      "name": "Bigwin959 Guide"
    },
    "datePublished": "2025-01-08",
    "dateModified": "2025-01-08"
  };

  return (
    <>
      <SEO metadata={{
        title: t('onlineGamingBangladesh.seo.title'),
        description: t('onlineGamingBangladesh.seo.description'),
        keywords: t('onlineGamingBangladesh.seo.keywords', { returnObjects: true }) as string[],
        schema: schema,
        canonicalUrl: "https://bigwinofficial.com/blog/online-gaming-bangladesh-local-payments"
      }} />
      <Breadcrumbs items={[
        { label: t('onlineGamingBangladesh.breadcrumbs.blog'), path: '/blog' },
        { label: t('onlineGamingBangladesh.breadcrumbs.current'), path: '/blog/online-gaming-bangladesh-local-payments' }
      ]} />

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">

        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700 p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Globe className="w-5 h-5 text-brand" />
              <span className="text-brand text-sm font-bold uppercase tracking-widest">{t('onlineGamingBangladesh.hero.badge')}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              {t('onlineGamingBangladesh.hero.title')}
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('onlineGamingBangladesh.hero.description')}
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <span>{t('onlineGamingBangladesh.hero.published')}</span>
              <span>•</span>
              <span>{t('onlineGamingBangladesh.hero.readTime')}</span>
            </div>
          </div>
        </section>

        {/* DISCLAIMER */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-yellow-500 font-bold mb-2">{t('onlineGamingBangladesh.disclaimer.title')}</h3>
              <p className="text-gray-300 text-sm">
                {t('onlineGamingBangladesh.disclaimer.text')}
              </p>
            </div>
          </div>
        </div>

        {/* INTRODUCTION */}
        <section className="prose prose-invert max-w-none">
          <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
            <p>
              {t('onlineGamingBangladesh.intro.p1')}
            </p>
          </div>
        </section>

        <TableOfContents
          title={t('onlineGamingBangladesh.tableOfContents.title') || "Table of Contents"}
          items={[
            { id: 'why-local-wallets', title: t('onlineGamingBangladesh.whyLocalWallets.title') },
            { id: 'how-bigwin959-fits', title: t('onlineGamingBangladesh.howBIGWIN959Fits.title') },
            { id: 'popular-games', title: t('onlineGamingBangladesh.popularGames.title') },
            { id: 'safety-budgeting', title: t('onlineGamingBangladesh.safetyBudgeting.title') },
            { id: 'final-thoughts', title: t('onlineGamingBangladesh.finalThoughts.title') },
          ]}
        />

        <hr className="border-gray-800" />

        {/* SECTION 1: WHY LOCAL WALLETS */}
        <section id="why-local-wallets">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center justify-center gap-3">
            <Wallet className="w-8 h-8 text-brand" />
            {t('onlineGamingBangladesh.whyLocalWallets.title')}
          </h2>

          <div className="space-y-6">
            <div className="text-gray-300 space-y-4">
              <p>
                {t('onlineGamingBangladesh.whyLocalWallets.intro')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {(() => {
                const reasons = t('onlineGamingBangladesh.whyLocalWallets.reasons', { returnObjects: true });
                const reasonsArray = Array.isArray(reasons) ? reasons : (reasons && typeof reasons === 'object' ? Object.values(reasons) : []);
                return reasonsArray.map((item: any, i: number) => (
                  <div key={i} className="bg-gray-800 p-5 rounded-xl border border-gray-700 text-center">
                    <CheckCircle className="w-6 h-6 text-brand mb-3 mx-auto" />
                    <h4 className="text-white font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm mb-2">{item.desc}</p>
                  </div>
                ));
              })()}
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
              <p className="text-gray-300">
                {t('onlineGamingBangladesh.whyLocalWallets.conclusion')}
              </p>
            </div>
          </div>
        </section>

        <hr className="border-gray-800" />

        {/* SECTION 2: HOW BIGWIN959 FITS */}
        <section id="how-bigwin959-fits">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center justify-center gap-3">
            <CreditCard className="w-8 h-8 text-brand" />
            {t('onlineGamingBangladesh.howBIGWIN959Fits.title')}
          </h2>

          <div className="space-y-6">
            <div className="text-gray-300 space-y-4">
              <p>
                {t('onlineGamingBangladesh.howBIGWIN959Fits.intro')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 text-center">
                <Wallet className="w-10 h-10 text-brand mb-4 mx-auto" />
                <h4 className="text-white font-bold mb-2">{t('onlineGamingBangladesh.howBIGWIN959Fits.features.wallets.title')}</h4>
                <p className="text-gray-400 text-sm mb-2">{t('onlineGamingBangladesh.howBIGWIN959Fits.features.wallets.desc')}</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 text-center">
                <TrendingUp className="w-10 h-10 text-brand mb-4 mx-auto" />
                <h4 className="text-white font-bold mb-2">{t('onlineGamingBangladesh.howBIGWIN959Fits.features.currency.title')}</h4>
                <p className="text-gray-400 text-sm mb-2">{t('onlineGamingBangladesh.howBIGWIN959Fits.features.currency.desc')}</p>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 text-center">
                <Globe className="w-10 h-10 text-brand mb-4 mx-auto" />
                <h4 className="text-white font-bold mb-2">{t('onlineGamingBangladesh.howBIGWIN959Fits.features.help.title')}</h4>
                <p className="text-gray-400 text-sm mb-2">{t('onlineGamingBangladesh.howBIGWIN959Fits.features.help.desc')}</p>
              </div>
            </div>

            {/* PAYMENT FLOW */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">{t('onlineGamingBangladesh.howBIGWIN959Fits.paymentFlow.title')}</h3>
              <div className="space-y-4">
                {(Object.entries(t('onlineGamingBangladesh.howBIGWIN959Fits.paymentFlow.steps', { returnObjects: true })) as [string, string][]).map(([key, text], i) => (
                  <div key={key} className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-brand text-black font-bold rounded-full flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-white">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <LocalizedLink to="/guides/bkash-deposit" className="text-brand hover:text-white font-bold text-sm flex items-center gap-2">
                  {t('onlineGamingBangladesh.howBIGWIN959Fits.paymentFlow.links.bkash')} <ExternalLink className="w-4 h-4" />
                </LocalizedLink>
                <LocalizedLink to="/guides/deposit" className="text-brand hover:text-white font-bold text-sm flex items-center gap-2">
                  {t('onlineGamingBangladesh.howBIGWIN959Fits.paymentFlow.links.general')} <ExternalLink className="w-4 h-4" />
                </LocalizedLink>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-800" />

        {/* SECTION 3: POPULAR GAME TYPES */}
        <section id="popular-games">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center justify-center gap-3">
            <Gamepad2 className="w-8 h-8 text-brand" />
            {t('onlineGamingBangladesh.popularGames.title')}
          </h2>

          <div className="space-y-8">
            <p className="text-gray-300">
              {t('onlineGamingBangladesh.popularGames.intro')}
            </p>

            {/* Cricket Betting */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Trophy className="w-8 h-8 text-brand" />
                <h3 className="text-2xl font-bold text-white">{t('onlineGamingBangladesh.popularGames.cricket.title')}</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-300">
                  {t('onlineGamingBangladesh.popularGames.cricket.intro')}
                </p>
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <h4 className="text-white font-bold mb-3">{t('onlineGamingBangladesh.popularGames.cricket.bestForBeginners')}</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-brand" />
                      <span>{t('onlineGamingBangladesh.popularGames.cricket.markets.matchWinner')}</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-brand" />
                      <span>{t('onlineGamingBangladesh.popularGames.cricket.markets.overUnder')}</span>
                    </li>
                  </ul>
                </div>
                <LocalizedLink to="/guides/cricket" className="inline-flex items-center text-brand hover:text-white font-bold">
                  {t('onlineGamingBangladesh.popularGames.cricket.link')} <ExternalLink className="w-4 h-4 ml-2" />
                </LocalizedLink>
              </div>
            </div>

            {/* Slots */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-brand" />
                <h3 className="text-2xl font-bold text-white">{t('onlineGamingBangladesh.popularGames.slots.title')}</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-300">
                  {t('onlineGamingBangladesh.popularGames.slots.intro')}
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {(Object.values(t('onlineGamingBangladesh.popularGames.slots.games', { returnObjects: true })) as any[]).map((game, i) => (
                    <div key={i} className="bg-gray-900/50 p-4 rounded-lg">
                      <h5 className="text-white font-bold mb-1">{game.name}</h5>
                      <p className="text-gray-400 text-xs">{game.provider}</p>
                      <span className="inline-block mt-2 px-2 py-1 bg-brand/10 text-brand text-xs rounded-full">{game.type}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <LocalizedLink to="/top-slot-games" className="text-brand hover:text-white font-bold text-sm flex items-center gap-2">
                    {t('onlineGamingBangladesh.popularGames.slots.links.topSlots')} <ExternalLink className="w-4 h-4" />
                  </LocalizedLink>
                  <LocalizedLink to="/providers/pragmatic" className="text-brand hover:text-white font-bold text-sm flex items-center gap-2">
                    {t('onlineGamingBangladesh.popularGames.slots.links.pragmatic')} <ExternalLink className="w-4 h-4" />
                  </LocalizedLink>
                  <LocalizedLink to="/providers/jili" className="text-brand hover:text-white font-bold text-sm flex items-center gap-2">
                    {t('onlineGamingBangladesh.popularGames.slots.links.jili')} <ExternalLink className="w-4 h-4" />
                  </LocalizedLink>
                </div>
              </div>
            </div>

            {/* Aviator */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center justify-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-brand" />
                <h3 className="text-2xl font-bold text-white">{t('onlineGamingBangladesh.popularGames.aviator.title')}</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-300">
                  {t('onlineGamingBangladesh.popularGames.aviator.intro')}
                </p>
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <h4 className="text-white font-bold mb-3">{t('onlineGamingBangladesh.popularGames.aviator.howItWorks')}</h4>
                  <ul className="space-y-2">
                    {(Object.values(t('onlineGamingBangladesh.popularGames.aviator.steps', { returnObjects: true })) as string[]).map((step, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-brand rounded-full mt-2 flex-shrink-0"></div>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-400 font-bold mb-1">{t('onlineGamingBangladesh.popularGames.aviator.warning.title')}</p>
                      <p className="text-gray-300 text-sm">{t('onlineGamingBangladesh.popularGames.aviator.warning.text')}</p>
                    </div>
                  </div>
                </div>
                <LocalizedLink to="/guides/aviator-game" className="inline-flex items-center text-brand hover:text-white font-bold">
                  {t('onlineGamingBangladesh.popularGames.aviator.link')} <ExternalLink className="w-4 h-4 ml-2" />
                </LocalizedLink>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-800" />

        {/* SECTION 4: SAFETY & BUDGETING */}
        <section id="safety-budgeting">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center justify-center gap-3">
            <ShieldCheck className="w-8 h-8 text-brand" />
            {t('onlineGamingBangladesh.safetyBudgeting.title')}
          </h2>

          <div className="space-y-6">
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
              <p className="text-gray-300 mb-2">
                {t('onlineGamingBangladesh.safetyBudgeting.intro')}
              </p>
            </div>

            {/* Tip 1 */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">{t('onlineGamingBangladesh.safetyBudgeting.tip1.title')}</h3>
              <p className="text-gray-300 mb-4">
                {t('onlineGamingBangladesh.safetyBudgeting.tip1.intro')}
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {(Object.values(t('onlineGamingBangladesh.safetyBudgeting.tip1.items', { returnObjects: true })) as string[]).map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-gray-900/50 p-3 rounded-lg">
                    <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <div>
                      <p className="text-white text-sm">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tip 2 */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">{t('onlineGamingBangladesh.safetyBudgeting.tip2.title')}</h3>
              <p className="text-gray-300 mb-4">
                {t('onlineGamingBangladesh.safetyBudgeting.tip2.intro')}
              </p>
              <div className="space-y-3">
                {(Object.values(t('onlineGamingBangladesh.safetyBudgeting.tip2.examples', { returnObjects: true })) as string[]).map((example, i) => (
                  <div key={i} className="bg-gray-900/50 p-4 rounded-lg border-l-4 border-brand">
                    <p className="text-white font-bold mb-1">{example}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-300 mt-4">
                {t('onlineGamingBangladesh.safetyBudgeting.tip2.conclusion')}
              </p>
            </div>

            {/* Tip 3 */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">{t('onlineGamingBangladesh.safetyBudgeting.tip3.title')}</h3>
              <p className="text-gray-300 mb-4">
                {t('onlineGamingBangladesh.safetyBudgeting.tip3.intro')}
              </p>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <div className="space-y-2">
                  {(Object.values(t('onlineGamingBangladesh.safetyBudgeting.tip3.mistakes', { returnObjects: true })) as string[]).map((mistake, i) => (
                    <p key={i} className="text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-red-500">❌</span>
                      <span>{mistake}</span>
                    </p>
                  ))}
                </div>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mt-4">
                <p className="text-green-400 font-bold mb-2">{t('onlineGamingBangladesh.safetyBudgeting.tip3.smarterApproach.title')}</p>
                <p className="text-gray-300 text-sm">
                  {t('onlineGamingBangladesh.safetyBudgeting.tip3.smarterApproach.text')}
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-800" />

        {/* SECTION 5: FINAL THOUGHTS */}
        <section id="final-thoughts">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">{t('onlineGamingBangladesh.finalThoughts.title')}</h2>

          <div className="space-y-6">
            <div className="text-gray-300 space-y-4">
              <p>
                {t('onlineGamingBangladesh.finalThoughts.intro')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {(() => {
                const advantages = t('onlineGamingBangladesh.finalThoughts.advantages', { returnObjects: true });
                const advantagesArray = Array.isArray(advantages) ? advantages : (advantages && typeof advantages === 'object' ? Object.values(advantages) : []);
                return advantagesArray.map((item: any, i: number) => (
                  <div key={i} className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center">
                    <div className="flex justify-center mb-4">
                      {i === 0 && <Wallet className="w-10 h-10 text-brand" />}
                      {i === 1 && <TrendingUp className="w-10 h-10 text-brand" />}
                      {i === 2 && <Gamepad2 className="w-10 h-10 text-brand" />}
                      {i === 3 && <Globe className="w-10 h-10 text-brand" />}
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-400 text-sm mb-1">{item.desc}</p>
                    </div>
                  </div>
                ));
              })()}
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div className="space-y-3">
                  <p className="text-gray-300">
                    {t('onlineGamingBangladesh.finalThoughts.warning.p1')}
                  </p>
                  <p className="text-gray-300">
                    {t('onlineGamingBangladesh.finalThoughts.warning.p2')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
              <p className="text-gray-300 mb-2">
                {t('onlineGamingBangladesh.finalThoughts.officialNote')}
              </p>
              <a href={OFFICIAL_DOMAIN} target="_blank" rel="nofollow noopener noreferrer" className="text-brand hover:text-white font-bold text-xl">
                bigwin959.vip
              </a>
            </div>
          </div>
        </section>

        <HelpfulFeedback
          question={t('onlineGamingBangladesh.feedback.question')}
          yesText={t('onlineGamingBangladesh.feedback.yesButton')}
          noText={t('onlineGamingBangladesh.feedback.noButton')}
          thankYouText={t('onlineGamingBangladesh.feedback.thankYou')}
          improveText={t('onlineGamingBangladesh.feedback.improve')}
        />

        <RelatedArticles
          title={t('onlineGamingBangladesh.relatedArticles.title')}
          readMoreText={t('onlineGamingBangladesh.relatedArticles.readMore')}
          articles={(t('onlineGamingBangladesh.relatedArticles.articles', { returnObjects: true }) as any[]).map((a, i) => ({
            ...a,
            path: i === 0 ? '/guides/beginner' : i === 1 ? '/blog/myanmar-kbzpay-wavepay-guide' : '/blog/10-common-mistakes-avoid'
          }))}
        />

        {/* CTA SECTION */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-10 text-center border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-6">{t('onlineGamingBangladesh.cta.title')}</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            {t('onlineGamingBangladesh.cta.description')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <LocalizedLink to="/guides/deposit" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full transition-colors">
              {t('onlineGamingBangladesh.cta.buttons.deposit')}
            </LocalizedLink>
            <LocalizedLink to="/guides/cricket" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full transition-colors">
              {t('onlineGamingBangladesh.cta.buttons.cricket')}
            </LocalizedLink>
            <LocalizedLink to="/blog" className="bg-brand hover:bg-white text-black font-bold py-3 px-6 rounded-full transition-colors">
              {t('onlineGamingBangladesh.cta.buttons.allArticles')}
            </LocalizedLink>
          </div>
        </section>

      </div>
    </>
  );
};

export default OnlineGamingBangladesh;

