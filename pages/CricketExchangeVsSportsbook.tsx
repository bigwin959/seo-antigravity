import React from 'react';
import { LocalizedLink } from '../components/LocalizedLink';
import { NavLink } from 'react-router-dom';
import SEO from '../components/SEO';
import { Breadcrumbs } from '../components/Section';
import { useTranslation, Trans } from 'react-i18next';
import {
  TrendingUp,
  Users,
  Zap,
  CheckCircle2,
  AlertTriangle,
  ArrowLeftRight,
  Target,
  Activity,
  Shield,
  Clock,
  BarChart3
} from 'lucide-react';

const OFFICIAL_DOMAIN = "https://bigwin959.vip";

// Helper to safely map over translations that might not be arrays
const safeMap = (data: any) => Array.isArray(data) ? data : [];

const CricketExchangeVsSportsbook: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        metadata={{
          title: t('cricketExchangeVsSportsbook.seo.title'),
          description: t('cricketExchangeVsSportsbook.seo.description'),
          keywords: safeMap(t('cricketExchangeVsSportsbook.seo.keywords', { returnObjects: true })),
          canonicalUrl: `${OFFICIAL_DOMAIN}/guides/cricket/exchange-vs-sportsbook`,
          ogType: 'article',
          publishedTime: '2025-01-01T00:00:00+06:00',
          modifiedTime: new Date().toISOString(),
          author: t('cricketExchangeVsSportsbook.seo.author'),
          schema: {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t('cricketExchangeVsSportsbook.seo.headline'),
            "description": t('cricketExchangeVsSportsbook.seo.description'),
            "author": {
              "@type": "Organization",
              "name": t('cricketExchangeVsSportsbook.seo.author')
            },
            "publisher": {
              "@type": "Organization",
              "name": t('cricketExchangeVsSportsbook.seo.author'),
              "logo": {
                "@type": "ImageObject",
                "url": `${OFFICIAL_DOMAIN}/logo.png`
              }
            },
            "datePublished": "2025-01-01",
            "dateModified": new Date().toISOString(),
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `${OFFICIAL_DOMAIN}/guides/cricket/exchange-vs-sportsbook`
            }
          }
        }}
      />

      <Breadcrumbs items={[
        { label: t('breadcrumbs.guides'), path: '/guides' },
        { label: t('cricketBettingGuide.hero.title'), path: '/guides/cricket' },
        { label: t('cricketExchangeVsSportsbook.hero.title'), path: '/guides/cricket/exchange-vs-sportsbook' }
      ]} />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-purple-900 via-gray-900 to-gray-950 py-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {t('cricketExchangeVsSportsbook.hero.title')}
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            {t('cricketExchangeVsSportsbook.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-12 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              <Trans i18nKey="cricketExchangeVsSportsbook.intro.p1" components={{ strong: <strong className="text-white" /> }} />
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t('cricketExchangeVsSportsbook.intro.p2')}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t('cricketExchangeVsSportsbook.intro.p3')}
            </p>
            <div className="bg-yellow-900/20 border border-yellow-600/30 p-5 rounded-xl">
              <p className="text-yellow-300 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><Trans i18nKey="cricketExchangeVsSportsbook.intro.disclaimer" components={{ strong: <strong /> }} /></span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: SPORTSBOOK */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Target className="w-10 h-10 text-brand" />
            <h2 className="text-3xl font-bold text-white">
              {t('cricketExchangeVsSportsbook.sportsbook.title')}
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">{t('cricketExchangeVsSportsbook.sportsbook.howItWorks.title')}</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('cricketExchangeVsSportsbook.sportsbook.howItWorks.p1')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('cricketExchangeVsSportsbook.sportsbook.howItWorks.p2')}
              </p>
              <p className="text-gray-300 leading-relaxed">
                <Trans i18nKey="cricketExchangeVsSportsbook.sportsbook.howItWorks.p3" components={{ strong: <strong className="text-white" /> }} />
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h4 className="text-white font-bold mb-4">{t('cricketExchangeVsSportsbook.sportsbook.suitableFor.title')}</h4>
              <ul className="space-y-3">
                {safeMap(t('cricketExchangeVsSportsbook.sportsbook.suitableFor.list', { returnObjects: true })).map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span><Trans i18nKey={`cricketExchangeVsSportsbook.sportsbook.suitableFor.list.${i}`} defaults={item} components={{ strong: <strong className="text-white" /> }} /></span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-8 rounded-xl">
              <div className="text-center mb-6">
                <h4 className="text-white font-bold text-lg mb-2">{t('cricketExchangeVsSportsbook.sportsbook.flow.title')}</h4>
                <p className="text-gray-400 text-sm">{t('cricketExchangeVsSportsbook.sportsbook.flow.subtitle')}</p>
              </div>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="bg-gray-900 p-4 rounded-lg text-center">
                  <p className="text-brand font-bold">{t('cricketExchangeVsSportsbook.sportsbook.flow.step1')}</p>
                </div>
                <ArrowLeftRight className="w-6 h-6 text-gray-600" />
                <div className="bg-gray-900 p-4 rounded-lg text-center">
                  <p className="text-brand font-bold">{t('cricketExchangeVsSportsbook.sportsbook.flow.step2')}</p>
                </div>
                <ArrowLeftRight className="w-6 h-6 text-gray-600" />
                <div className="bg-gray-900 p-4 rounded-lg text-center">
                  <p className="text-brand font-bold">{t('cricketExchangeVsSportsbook.sportsbook.flow.step3')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: EXCHANGE */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Users className="w-10 h-10 text-brand" />
            <h2 className="text-3xl font-bold text-white">
              {t('cricketExchangeVsSportsbook.exchange.title')}
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">{t('cricketExchangeVsSportsbook.exchange.howItWorks.title')}</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                <Trans i18nKey="cricketExchangeVsSportsbook.exchange.howItWorks.p1" components={{ strong: <strong className="text-white" /> }} />
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('cricketExchangeVsSportsbook.exchange.howItWorks.p2')}
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-800 border border-gray-700 p-5 rounded-xl">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    {t('cricketExchangeVsSportsbook.exchange.howItWorks.back.title')}
                  </h4>
                  <p className="text-gray-400 text-sm">{t('cricketExchangeVsSportsbook.exchange.howItWorks.back.desc')}</p>
                </div>
                <div className="bg-gray-800 border border-gray-700 p-5 rounded-xl">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-red-400" />
                    {t('cricketExchangeVsSportsbook.exchange.howItWorks.lay.title')}
                  </h4>
                  <p className="text-gray-400 text-sm">{t('cricketExchangeVsSportsbook.exchange.howItWorks.lay.desc')}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                <Trans i18nKey="cricketExchangeVsSportsbook.exchange.howItWorks.p3" components={{ strong: <strong className="text-white" /> }} />
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t('cricketExchangeVsSportsbook.exchange.howItWorks.p4')}
              </p>
            </div>

            <div className="bg-blue-900/20 border border-blue-700/30 p-5 rounded-xl">
              <p className="text-blue-300 text-sm">
                <Trans i18nKey="cricketExchangeVsSportsbook.exchange.advancedUsers" components={{ strong: <strong /> }} />
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-8 rounded-xl">
              <div className="text-center mb-6">
                <h4 className="text-white font-bold text-lg mb-2">{t('cricketExchangeVsSportsbook.exchange.flow.title')}</h4>
                <p className="text-gray-400 text-sm">{t('cricketExchangeVsSportsbook.exchange.flow.subtitle')}</p>
              </div>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="bg-gray-900 p-4 rounded-lg text-center">
                  <p className="text-brand font-bold">{t('cricketExchangeVsSportsbook.exchange.flow.userA')}</p>
                </div>
                <ArrowLeftRight className="w-6 h-6 text-brand" />
                <div className="bg-gray-900 p-4 rounded-lg text-center">
                  <p className="text-white font-bold whitespace-pre-line">{t('cricketExchangeVsSportsbook.exchange.flow.platform')}</p>
                </div>
                <ArrowLeftRight className="w-6 h-6 text-brand" />
                <div className="bg-gray-900 p-4 rounded-lg text-center">
                  <p className="text-brand font-bold">{t('cricketExchangeVsSportsbook.exchange.flow.userB')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: KEY DIFFERENCES */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <BarChart3 className="w-10 h-10 text-brand" />
            <h2 className="text-3xl font-bold text-white">
              {t('cricketExchangeVsSportsbook.keyDifferences.title')}
            </h2>
          </div>

          <div className="space-y-8">
            {/* Pricing */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-brand" />
                {t('cricketExchangeVsSportsbook.keyDifferences.pricing.title')}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                <Trans i18nKey="cricketExchangeVsSportsbook.keyDifferences.pricing.desc" components={{ strong: <strong className="text-white" /> }} />
              </p>
              <div className="bg-gray-800 border border-gray-700 p-5 rounded-xl">
                <p className="text-gray-300 mb-3">{t('cricketExchangeVsSportsbook.keyDifferences.pricing.causes.intro')}</p>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {safeMap(t('cricketExchangeVsSportsbook.keyDifferences.pricing.causes.list', { returnObjects: true })).map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-brand">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-400 text-sm mt-3 italic">
                  {t('cricketExchangeVsSportsbook.keyDifferences.pricing.causes.note')}
                </p>
              </div>
            </div>

            {/* Execution Speed */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-brand" />
                {t('cricketExchangeVsSportsbook.keyDifferences.execution.title')}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                  <h4 className="text-white font-bold mb-3">{t('cricketExchangeVsSportsbook.keyDifferences.execution.sportsbook.title')}</h4>
                  <p className="text-gray-300 text-sm">
                    <Trans i18nKey="cricketExchangeVsSportsbook.keyDifferences.execution.sportsbook.desc" components={{ strong: <strong className="text-white" /> }} />
                  </p>
                </div>
                <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                  <h4 className="text-white font-bold mb-3">{t('cricketExchangeVsSportsbook.keyDifferences.execution.exchange.title')}</h4>
                  <p className="text-gray-300 text-sm">
                    <Trans i18nKey="cricketExchangeVsSportsbook.keyDifferences.execution.exchange.desc" components={{ strong: <strong className="text-white" /> }} />
                  </p>
                </div>
              </div>
            </div>

            {/* Risk Management */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-brand" />
                {t('cricketExchangeVsSportsbook.keyDifferences.riskManagement.title')}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('cricketExchangeVsSportsbook.keyDifferences.riskManagement.desc')}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                  <h4 className="text-white font-bold mb-3">{t('cricketExchangeVsSportsbook.keyDifferences.riskManagement.sportsbook.title')}</h4>
                  <p className="text-gray-300 text-sm">
                    <Trans i18nKey="cricketExchangeVsSportsbook.keyDifferences.riskManagement.sportsbook.desc" components={{ strong: <strong className="text-white" /> }} />
                  </p>
                </div>
                <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                  <h4 className="text-white font-bold mb-3">{t('cricketExchangeVsSportsbook.keyDifferences.riskManagement.exchange.title')}</h4>
                  <p className="text-gray-300 text-sm">
                    <Trans i18nKey="cricketExchangeVsSportsbook.keyDifferences.riskManagement.exchange.desc" components={{ strong: <strong className="text-white" /> }} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SETTLEMENT RULES */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Clock className="w-10 h-10 text-brand" />
            <h2 className="text-3xl font-bold text-white">
              {t('cricketExchangeVsSportsbook.settlementRules.title')}
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              {t('cricketExchangeVsSportsbook.settlementRules.desc')}
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
                <thead className="bg-gray-900">
                  <tr>
                    {safeMap(t('cricketExchangeVsSportsbook.settlementRules.table.headers', { returnObjects: true })).map((header: string, i: number) => (
                      <th key={i} className="px-6 py-4 text-left text-white font-bold">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {safeMap(t('cricketExchangeVsSportsbook.settlementRules.table.rows', { returnObjects: true })).map((row: any, i: number) => (
                    <tr key={i}>
                      <td className="px-6 py-4 text-gray-300 font-medium">{row.situation}</td>
                      <td className="px-6 py-4 text-gray-300">{row.sportsbook}</td>
                      <td className="px-6 py-4 text-gray-300">{row.exchange}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-blue-900/20 border border-blue-700/30 p-5 rounded-xl">
              <p className="text-blue-300 text-sm">
                <Trans i18nKey="cricketExchangeVsSportsbook.settlementRules.detailedEdgeCases" components={{ NavLink: <LocalizedLink to="/guides/cricket#confusing-situations" className="text-brand hover:underline" /> }} />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHICH IS BETTER */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            {t('cricketExchangeVsSportsbook.whichIsBetter.title')}
          </h2>

          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed text-center mb-8">
              {t('cricketExchangeVsSportsbook.whichIsBetter.intro')}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Sportsbook Better For */}
              <div className="bg-gradient-to-br from-green-900/20 to-transparent p-8 rounded-2xl border border-green-700/30">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-green-400" />
                  {t('cricketExchangeVsSportsbook.whichIsBetter.sportsbookBetter.title')}
                </h3>
                <ul className="space-y-4">
                  {safeMap(t('cricketExchangeVsSportsbook.whichIsBetter.sportsbookBetter.list', { returnObjects: true })).map((item: any, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-white">{item.title}</p>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exchange Better For */}
              <div className="bg-gradient-to-br from-blue-900/20 to-transparent p-8 rounded-2xl border border-blue-700/30">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Users className="w-8 h-8 text-blue-400" />
                  {t('cricketExchangeVsSportsbook.whichIsBetter.exchangeBetter.title')}
                </h3>
                <ul className="space-y-4">
                  {safeMap(t('cricketExchangeVsSportsbook.whichIsBetter.exchangeBetter.list', { returnObjects: true })).map((item: any, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-white">{item.title}</p>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl text-center">
              <p className="text-gray-300">
                <Trans i18nKey="cricketExchangeVsSportsbook.whichIsBetter.modernPlatforms" components={{ strong: <strong className="text-white" /> }} />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: RELATED GUIDES */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            {t('cricketExchangeVsSportsbook.relatedGuides.title')}
          </h2>
          <p className="text-gray-300 text-center mb-8">
            {t('cricketExchangeVsSportsbook.relatedGuides.intro')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <LocalizedLink to="/guides/cricket/bet-types" className="bg-gray-800 hover:bg-gray-700 border border-gray-700 p-5 rounded-xl transition-colors text-center">
              <p className="text-white font-bold mb-2">{t('cricketExchangeVsSportsbook.relatedGuides.betTypes.title')}</p>
              <p className="text-gray-400 text-sm">{t('cricketExchangeVsSportsbook.relatedGuides.betTypes.desc')}</p>
            </LocalizedLink>
            <LocalizedLink to="/guides/cricket#step-by-step" className="bg-gray-800 hover:bg-gray-700 border border-gray-700 p-5 rounded-xl transition-colors text-center">
              <p className="text-white font-bold mb-2">{t('cricketExchangeVsSportsbook.relatedGuides.howToBet.title')}</p>
              <p className="text-gray-400 text-sm">{t('cricketExchangeVsSportsbook.relatedGuides.howToBet.desc')}</p>
            </LocalizedLink>
            <LocalizedLink to="/guides/cricket#confusing-situations" className="bg-gray-800 hover:bg-gray-700 border border-gray-700 p-5 rounded-xl transition-colors text-center">
              <p className="text-white font-bold mb-2">{t('cricketExchangeVsSportsbook.relatedGuides.confusingSituations.title')}</p>
              <p className="text-gray-400 text-sm">{t('cricketExchangeVsSportsbook.relatedGuides.confusingSituations.desc')}</p>
            </LocalizedLink>
            <LocalizedLink to="/guides/cricket#faq" className="bg-gray-800 hover:bg-gray-700 border border-gray-700 p-5 rounded-xl transition-colors text-center">
              <p className="text-white font-bold mb-2">{t('cricketExchangeVsSportsbook.relatedGuides.faq.title')}</p>
              <p className="text-gray-400 text-sm">{t('cricketExchangeVsSportsbook.relatedGuides.faq.desc')}</p>
            </LocalizedLink>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-300 leading-relaxed">
              {t('cricketExchangeVsSportsbook.relatedGuides.outro')}
            </p>
          </div>
        </div>
      </section>

      {/* FINAL NOTE */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-900/20 border border-yellow-600/30 p-8 rounded-xl text-center">
            <h3 className="text-xl font-bold text-white mb-4">{t('cricketExchangeVsSportsbook.finalNote.title')}</h3>
            <p className="text-gray-300 leading-relaxed">
              {t('cricketExchangeVsSportsbook.finalNote.text')}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CricketExchangeVsSportsbook;

