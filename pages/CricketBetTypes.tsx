import React from 'react';
import { LocalizedLink } from '../components/LocalizedLink';
import { useTranslation, Trans } from 'react-i18next';
import SEO from '../components/SEO';
import { Breadcrumbs } from '../components/Section';
import { OFFICIAL_DOMAIN } from '../constants';
import {
  Trophy,
  BarChart3,
  Target,
  Clock,
  User,
  Coins,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Activity
} from 'lucide-react';

// Helper to safely map over translations that might not be arrays
const safeMap = (data: any) => Array.isArray(data) ? data : [];

const CricketBetTypes: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        metadata={{
          title: t('cricketBetTypes.seo.title'),
          description: t('cricketBetTypes.seo.description'),
          keywords: safeMap(t('cricketBetTypes.seo.keywords', { returnObjects: true })),
          canonicalUrl: `${OFFICIAL_DOMAIN}/guides/cricket/bet-types`,
          ogType: 'article',
          publishedTime: '2025-01-01T00:00:00+06:00',
          modifiedTime: new Date().toISOString(),
          author: t('brand.name'),
          schema: {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t('cricketBetTypes.seo.schema.headline'),
            "description": t('cricketBetTypes.seo.schema.description'),
            "author": {
              "@type": "Organization",
              "name": t('brand.name')
            },
            "publisher": {
              "@type": "Organization",
              "name": t('brand.name'),
              "logo": {
                "@type": "ImageObject",
                "url": `${OFFICIAL_DOMAIN}/logo.png`
              }
            },
            "datePublished": "2025-01-01",
            "dateModified": new Date().toISOString(),
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `${OFFICIAL_DOMAIN}/guides/cricket/bet-types`
            }
          }
        }}
      />

      <Breadcrumbs items={[
        { label: t('cricketBetTypes.hero.breadcrumbs.guides'), path: '/guides' },
        { label: t('cricketBetTypes.hero.breadcrumbs.cricketGuide'), path: '/guides/cricket' },
        { label: t('cricketBetTypes.hero.breadcrumbs.betTypes'), path: '/guides/cricket/bet-types' }
      ]} />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-purple-900 via-gray-900 to-gray-950 py-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {t('cricketBetTypes.hero.title')}
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            {t('cricketBetTypes.hero.subtitle')}
          </p>
        </div>
      </section>


      {/* INTRODUCTION */}
      <section className="py-12 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('cricketBetTypes.intro.p1')}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t('cricketBetTypes.intro.p2')}
            </p>
            <div className="bg-yellow-900/20 border border-yellow-600/30 p-5 rounded-xl">
              <p className="text-yellow-300 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><Trans i18nKey="cricketBetTypes.intro.disclaimer" components={{ strong: <strong /> }} /></span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: MATCH WINNER */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Trophy className="w-10 h-10 text-brand" />
            <h2 className="text-3xl font-bold text-white">
              {t('cricketBetTypes.matchWinner.title')}
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">{t('cricketBetTypes.matchWinner.whatIs.title')}</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('cricketBetTypes.matchWinner.whatIs.p1')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                <Trans i18nKey="cricketBetTypes.matchWinner.whatIs.p2" components={{ strong: <strong className="text-white" /> }} />
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t('cricketBetTypes.matchWinner.whatIs.p3')}
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand" />
                {t('cricketBetTypes.matchWinner.settlement.title')}
              </h4>
              <ul className="space-y-2 text-gray-300">
                {safeMap(t('cricketBetTypes.matchWinner.settlement.points', { returnObjects: true })).map((point: string, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-brand">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-900/20 border border-blue-700/30 p-5 rounded-xl">
              <p className="text-blue-300 text-sm">
                <Trans i18nKey="cricketBetTypes.matchWinner.important" components={{ strong: <strong /> }} />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: HANDICAP BETS */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <BarChart3 className="w-10 h-10 text-brand" />
            <h2 className="text-3xl font-bold text-white">
              {t('cricketBetTypes.handicap.title')}
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">{t('cricketBetTypes.handicap.howItWorks.title')}</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('cricketBetTypes.handicap.howItWorks.p1')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                <Trans i18nKey="cricketBetTypes.handicap.howItWorks.p2" components={{ strong: <strong className="text-white" /> }} />
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t('cricketBetTypes.handicap.howItWorks.p3')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                <h4 className="text-white font-bold mb-3">{t('cricketBetTypes.handicap.examples.strong.title')}</h4>
                <p className="text-gray-300 text-sm mb-2">{t('cricketBetTypes.handicap.examples.strong.team')}</p>
                <p className="text-gray-400 text-sm">{t('cricketBetTypes.handicap.examples.strong.desc')}</p>
              </div>
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                <h4 className="text-white font-bold mb-3">{t('cricketBetTypes.handicap.examples.weak.title')}</h4>
                <p className="text-gray-300 text-sm mb-2">{t('cricketBetTypes.handicap.examples.weak.team')}</p>
                <p className="text-gray-400 text-sm">{t('cricketBetTypes.handicap.examples.weak.desc')}</p>
              </div>
            </div>

            <div className="bg-green-900/20 border border-green-700/30 p-5 rounded-xl">
              <p className="text-green-300 text-sm">
                <Trans i18nKey="cricketBetTypes.handicap.whyPopular" components={{ strong: <strong /> }} />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OVER/UNDER */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Target className="w-10 h-10 text-brand" />
            <h2 className="text-3xl font-bold text-white">
              {t('cricketBetTypes.overUnder.title')}
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">{t('cricketBetTypes.overUnder.understanding.title')}</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('cricketBetTypes.overUnder.understanding.p1')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                <Trans i18nKey="cricketBetTypes.overUnder.understanding.p2" components={{ strong: <strong className="text-white" /> }} />
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t('cricketBetTypes.overUnder.understanding.p3')}
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h4 className="text-white font-bold mb-4">{t('cricketBetTypes.overUnder.commonMarkets.title')}</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {safeMap(t('cricketBetTypes.overUnder.commonMarkets.items', { returnObjects: true })).map((item: any, i: number) => (
                  <div key={i} className="space-y-2">
                    <p className="text-brand font-bold text-sm">{item.title}</p>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-700/30 p-5 rounded-xl">
              <p className="text-blue-300 text-sm">
                <Trans i18nKey="cricketBetTypes.overUnder.liveBetting" components={{ strong: <strong /> }} />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SESSION BETS */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Clock className="w-10 h-10 text-brand" />
            <h2 className="text-3xl font-bold text-white">
              {t('cricketBetTypes.session.title')}
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">{t('cricketBetTypes.session.whatAre.title')}</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('cricketBetTypes.session.whatAre.p1')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('cricketBetTypes.session.whatAre.p2')}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t('cricketBetTypes.session.whatAre.p3')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {safeMap(t('cricketBetTypes.session.types', { returnObjects: true })).map((item: any, i: number) => {
                const icons = [Activity, TrendingUp, Target];
                const Icon = icons[i] || Activity;
                return (
                  <div key={i} className="bg-gray-800 border border-gray-700 p-5 rounded-xl text-center">
                    <Icon className="w-8 h-8 text-brand mb-3 mx-auto" />
                    <h4 className="text-white font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="bg-yellow-900/20 border border-yellow-600/30 p-5 rounded-xl">
              <p className="text-yellow-300 text-sm flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><Trans i18nKey="cricketBetTypes.session.important" components={{ strong: <strong /> }} /></span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: PLAYER MARKETS */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <User className="w-10 h-10 text-brand" />
            <h2 className="text-3xl font-bold text-white">
              {t('cricketBetTypes.playerMarkets.title')}
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">{t('cricketBetTypes.playerMarkets.stats.title')}</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('cricketBetTypes.playerMarkets.stats.p1')}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t('cricketBetTypes.playerMarkets.stats.p2')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                <h4 className="text-white font-bold mb-4">{t('cricketBetTypes.playerMarkets.batting.title')}</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {safeMap(t('cricketBetTypes.playerMarkets.batting.items', { returnObjects: true })).map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                <h4 className="text-white font-bold mb-4">{t('cricketBetTypes.playerMarkets.bowling.title')}</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {safeMap(t('cricketBetTypes.playerMarkets.bowling.items', { returnObjects: true })).map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-red-900/20 border border-red-700/30 p-5 rounded-xl">
              <p className="text-red-300 text-sm">
                <Trans i18nKey="cricketBetTypes.playerMarkets.criticalRule" components={{ strong: <strong /> }} />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: EXCHANGE MARKETS */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Coins className="w-10 h-10 text-brand" />
            <h2 className="text-3xl font-bold text-white">
              {t('cricketBetTypes.exchange.title')}
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">{t('cricketBetTypes.exchange.vsSportsbook.title')}</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('cricketBetTypes.exchange.vsSportsbook.p1')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('cricketBetTypes.exchange.vsSportsbook.p2')}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t('cricketBetTypes.exchange.vsSportsbook.p3')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  {t('cricketBetTypes.exchange.back.title')}
                </h4>
                <p className="text-gray-300 text-sm mb-3">
                  {t('cricketBetTypes.exchange.back.desc')}
                </p>
                <p className="text-gray-400 text-xs">
                  {t('cricketBetTypes.exchange.back.example')}
                </p>
              </div>
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-red-400" />
                  {t('cricketBetTypes.exchange.lay.title')}
                </h4>
                <p className="text-gray-300 text-sm mb-3">
                  {t('cricketBetTypes.exchange.lay.desc')}
                </p>
                <p className="text-gray-400 text-xs">
                  {t('cricketBetTypes.exchange.lay.example')}
                </p>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h4 className="text-white font-bold mb-4">{t('cricketBetTypes.exchange.differences.title')}</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                {safeMap(t('cricketBetTypes.exchange.differences.items', { returnObjects: true })).map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-brand font-bold">•</span>
                    <span><Trans i18nKey={`cricketBetTypes.exchange.differences.items.${i}`} defaults={item} components={{ strong: <strong className="text-white" /> }} /></span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-600/30 p-5 rounded-xl">
              <p className="text-yellow-300 text-sm flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><Trans i18nKey="cricketBetTypes.exchange.advancedOnly" components={{ strong: <strong /> }} /></span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SUMMARY SECTION */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand/10 to-transparent p-10 rounded-2xl border border-brand/30">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              {t('cricketBetTypes.summary.title')}
            </h2>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                <Trans i18nKey="cricketBetTypes.summary.p1" components={{ strong: <strong className="text-white" /> }} />
              </p>
              <p className="leading-relaxed">
                {t('cricketBetTypes.summary.p2')}
              </p>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400 italic text-center">
                  {t('cricketBetTypes.summary.disclaimer')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">{t('cricketBetTypes.relatedGuides.title')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {safeMap(t('cricketBetTypes.relatedGuides.items', { returnObjects: true })).map((item: any, i: number) => {
              const links = [
                '/guides/cricket',
                '/guides/cricket#step-by-step',
                '/guides/cricket#settlement-rules',
                '/guides/cricket#faq'
              ];
              return (
                <LocalizedLink key={i} to={links[i]} className="bg-gray-800 hover:bg-gray-700 border border-gray-700 p-5 rounded-xl transition-colors text-center">
                  <p className="text-white font-bold mb-2">{item.title}</p>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </LocalizedLink>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CricketBetTypes;

