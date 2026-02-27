import React from 'react';
import { LocalizedLink } from '../components/LocalizedLink';
import SEO from '../components/SEO';
import { Breadcrumbs } from '../components/Section';
import { OFFICIAL_DOMAIN } from '../constants';
import { useTranslation, Trans } from 'react-i18next';
import {
  FileText,
  CheckCircle2,
  AlertCircle,
  Trophy,
  TrendingUp,
  Activity,
  Zap,
  Users,
  Clock,
  Globe,
  Shield,
  AlertTriangle,
  ExternalLink,
  HelpCircle
} from 'lucide-react';

const CricketSettlementRules: React.FC = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <>
      <SEO
        metadata={{
          title: t('cricketSettlementRules.seo.title'),
          description: t('cricketSettlementRules.seo.description'),
          keywords: t('cricketSettlementRules.seo.keywords', { returnObjects: true }) as string[],
          canonicalUrl: `${OFFICIAL_DOMAIN}/guides/cricket/settlement-rules`,
          ogType: 'article',
          publishedTime: '2025-01-01T00:00:00+06:00',
          modifiedTime: new Date().toISOString(),
          author: t('brand.name'),
          schema: {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t('cricketSettlementRules.seo.schema.headline'),
            "description": t('cricketSettlementRules.seo.schema.description'),
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
              "@id": `${OFFICIAL_DOMAIN}/guides/cricket/settlement-rules`
            }
          }
        }}
      />

      <Breadcrumbs items={[
        { label: t('cricketSettlementRules.hero.breadcrumbs.guides'), path: '/guides' },
        { label: t('cricketSettlementRules.hero.breadcrumbs.cricketGuide'), path: '/guides/cricket' },
        { label: t('cricketSettlementRules.hero.breadcrumbs.settlementRules'), path: '/guides/cricket/settlement-rules' }
      ]} />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-purple-900 via-gray-900 to-gray-950 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>


        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/30 px-4 py-2 rounded-full mb-6">
              <FileText className="w-5 h-5 text-brand" />
              <span className="text-brand font-semibold">{t('cricketSettlementRules.hero.badge')}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t('cricketSettlementRules.hero.title')}
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              {t('cricketSettlementRules.hero.subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-900/80 backdrop-blur-md p-8 rounded-xl border border-gray-800">
            <p className="text-gray-300 text-lg mb-6">
              {t('cricketSettlementRules.hero.intro')}
            </p>
            <div className="space-y-3 mb-6">
              {(t('cricketSettlementRules.hero.points', { returnObjects: true }) as string[]).map((point, i) => (
                <p key={i} className="text-gray-300 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-1" />
                  {point}
                </p>
              ))}
            </div>
            <div className="bg-yellow-900/20 border border-yellow-600/30 p-4 rounded-lg">
              <p className="text-yellow-300 text-sm flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                <span><Trans i18nKey="cricketSettlementRules.hero.disclaimer" components={{ strong: <strong /> }} /></span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 — CORE SETTLEMENT PRINCIPLES */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('cricketSettlementRules.corePrinciples.title')} <span className="text-brand">{t('cricketSettlementRules.corePrinciples.subtitle')}</span>
          </h2>

          <p className="text-gray-300 text-lg mb-8 text-center max-w-3xl mx-auto">
            {t('cricketSettlementRules.corePrinciples.description')}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {(t('cricketSettlementRules.corePrinciples.list', { returnObjects: true }) as any[]).map((principle, i) => (
              <div key={i} className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand" />
                  {principle.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — MARKET STATUS DEFINITIONS */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            {t('cricketSettlementRules.marketStatus.title')} <span className="text-brand">{t('cricketSettlementRules.marketStatus.subtitle')}</span>
          </h2>

          <p className="text-gray-300 text-lg mb-8 text-center">
            {t('cricketSettlementRules.marketStatus.description')}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
              <thead className="bg-gray-950">
                <tr>
                  <th className="px-6 py-4 text-left text-brand font-bold text-lg">{t('cricketSettlementRules.marketStatus.headers.status')}</th>
                  <th className="px-6 py-4 text-left text-brand font-bold text-lg">{t('cricketSettlementRules.marketStatus.headers.meaning')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {(t('cricketSettlementRules.marketStatus.rows', { returnObjects: true }) as any[]).map((row, i) => (
                  <tr key={i} className="hover:bg-gray-750">
                    <td className="px-6 py-4 text-white font-bold text-lg">{row.status}</td>
                    <td className="px-6 py-4 text-gray-300">{row.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 3 — MATCH RESULT MARKETS */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('cricketSettlementRules.matchResult.title')}
          </h2>

          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="px-6 py-4 text-left text-brand font-bold text-lg">{t('cricketSettlementRules.matchResult.headers.scenario')}</th>
                    <th className="px-6 py-4 text-left text-brand font-bold text-lg">{t('cricketSettlementRules.matchResult.headers.settlement')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {(t('cricketSettlementRules.matchResult.rows', { returnObjects: true }) as any[]).map((row, i) => (
                    <tr key={i} className="hover:bg-gray-800">
                      <td className="px-6 py-4 text-white font-medium">{row.scenario}</td>
                      <td className="px-6 py-4 text-gray-300">{row.settlement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 bg-blue-900/20 border border-blue-700/30 p-6 rounded-lg">
              <p className="text-blue-300 flex items-start gap-3">
                <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span><Trans i18nKey="cricketSettlementRules.matchResult.important" components={{ strong: <strong /> }} /></span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — HANDICAP MARKETS */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('cricketSettlementRules.handicapMarkets.title')}
          </h2>

          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="px-6 py-4 text-left text-brand font-bold text-lg">{t('cricketSettlementRules.handicapMarkets.headers.condition')}</th>
                    <th className="px-6 py-4 text-left text-brand font-bold text-lg">{t('cricketSettlementRules.handicapMarkets.headers.logic')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {(t('cricketSettlementRules.handicapMarkets.rows', { returnObjects: true }) as any[]).map((row, i) => (
                    <tr key={i} className="hover:bg-gray-750">
                      <td className="px-6 py-4 text-white font-medium">{row.condition}</td>
                      <td className="px-6 py-4 text-gray-300">{row.logic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-400 text-sm italic mt-6 text-center">
              {t('cricketSettlementRules.handicapMarkets.note')}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — TOTALS MARKETS */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('cricketSettlementRules.totalsMarkets.title')}
          </h2>

          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <div className="overflow-x-auto mb-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="px-6 py-4 text-left text-brand font-bold text-lg">{t('cricketSettlementRules.totalsMarkets.headers.marketType')}</th>
                    <th className="px-6 py-4 text-left text-brand font-bold text-lg">{t('cricketSettlementRules.totalsMarkets.headers.requirement')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {(t('cricketSettlementRules.totalsMarkets.rows', { returnObjects: true }) as any[]).map((row, i) => (
                    <tr key={i} className="hover:bg-gray-800">
                      <td className="px-6 py-4 text-white font-medium">{row.type}</td>
                      <td className="px-6 py-4 text-gray-300">{row.req}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-yellow-900/20 border border-yellow-600/30 p-6 rounded-lg">
              <p className="text-yellow-300 flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span>{t('cricketSettlementRules.totalsMarkets.warning')}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — SESSION / OVER / BALL MARKETS */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('cricketSettlementRules.microMarkets.title')}
          </h2>

          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
            <div className="overflow-x-auto mb-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="px-6 py-4 text-left text-brand font-bold text-lg">{t('cricketSettlementRules.microMarkets.headers.market')}</th>
                    <th className="px-6 py-4 text-left text-brand font-bold text-lg">{t('cricketSettlementRules.microMarkets.headers.condition')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {(t('cricketSettlementRules.microMarkets.rows', { returnObjects: true }) as any[]).map((row, i) => (
                    <tr key={i} className="hover:bg-gray-750">
                      <td className="px-6 py-4 text-white font-medium">{row.market}</td>
                      <td className="px-6 py-4 text-gray-300">{row.condition}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-400 text-sm italic text-center">
              {t('cricketSettlementRules.microMarkets.note')}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 — PLAYER PERFORMANCE MARKETS */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('cricketSettlementRules.playerPerformance.title')}
          </h2>

          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <div className="overflow-x-auto mb-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="px-6 py-4 text-left text-brand font-bold text-lg">{t('cricketSettlementRules.playerPerformance.headers.scenario')}</th>
                    <th className="px-6 py-4 text-left text-brand font-bold text-lg">{t('cricketSettlementRules.playerPerformance.headers.settlement')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {(t('cricketSettlementRules.playerPerformance.rows', { returnObjects: true }) as any[]).map((row, i) => (
                    <tr key={i} className="hover:bg-gray-800">
                      <td className="px-6 py-4 text-white font-medium">{row.scenario}</td>
                      <td className="px-6 py-4 text-gray-300">{row.settlement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-blue-900/20 border border-blue-700/30 p-6 rounded-lg">
              <p className="text-blue-300 flex items-start gap-3">
                <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <span>{t('cricketSettlementRules.playerPerformance.note')}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — LIVE BETTING RULES */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('cricketSettlementRules.liveBetting.title')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <Clock className="w-12 h-12 text-brand mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">{t('cricketSettlementRules.liveBetting.suspension.title')}</h3>
              <p className="text-gray-300 mb-4">{t('cricketSettlementRules.liveBetting.suspension.desc')}</p>
              <ul className="space-y-2">
                {(t('cricketSettlementRules.liveBetting.suspension.items', { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <AlertCircle className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">{t('cricketSettlementRules.liveBetting.acceptance.title')}</h3>
              <p className="text-gray-300">
                {t('cricketSettlementRules.liveBetting.acceptance.desc')}
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <Zap className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">{t('cricketSettlementRules.liveBetting.latency.title')}</h3>
              <p className="text-gray-300">
                {t('cricketSettlementRules.liveBetting.latency.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — ABNORMAL MATCH EVENTS */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('cricketSettlementRules.abnormalEvents.title')} <span className="text-brand">{t('cricketSettlementRules.abnormalEvents.subtitle')}</span>
          </h2>

          <div className="bg-gradient-to-br from-red-900/20 to-transparent p-8 rounded-2xl border border-red-700/30">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-red-700/30">
                    <th className="px-6 py-4 text-left text-brand font-bold text-lg">{t('cricketSettlementRules.abnormalEvents.headers.event')}</th>
                    <th className="px-6 py-4 text-left text-brand font-bold text-lg">{t('cricketSettlementRules.abnormalEvents.headers.settlement')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-red-700/20">
                  {(t('cricketSettlementRules.abnormalEvents.rows', { returnObjects: true }) as any[]).map((row, i) => (
                    <tr key={i} className="hover:bg-red-900/10">
                      <td className="px-6 py-4 text-white font-medium">{row.event}</td>
                      <td className="px-6 py-4 text-gray-300">{row.settlement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — MULTI-PROVIDER SCOPE */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('cricketSettlementRules.multiProvider.title')}
          </h2>

          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
            <div className="flex items-center gap-4 mb-8">
              <Globe className="w-12 h-12 text-brand" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{t('cricketSettlementRules.multiProvider.subtitle')}</h3>
                <p className="text-gray-400">{t('cricketSettlementRules.multiProvider.desc')}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {(t('cricketSettlementRules.multiProvider.items', { returnObjects: true }) as any[]).map((item, i) => {
                const Icon = [Trophy, TrendingUp, Activity, Globe][i];
                return (
                  <div key={i} className="bg-gray-900/50 p-6 rounded-xl border border-gray-700">
                    <Icon className="w-8 h-8 text-brand mb-3" />
                    <h4 className="text-white font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 bg-blue-900/20 border border-blue-700/30 p-6 rounded-lg">
              <p className="text-blue-300 text-center">
                {t('cricketSettlementRules.multiProvider.note')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11 — DISPUTES & FINALITY */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('cricketSettlementRules.disputes.title')}
          </h2>

          <div className="bg-gradient-to-br from-purple-900/20 to-transparent p-8 rounded-2xl border border-purple-700/30">
            <div className="flex items-center gap-4 mb-8">
              <Shield className="w-12 h-12 text-brand" />
              <h3 className="text-2xl font-bold text-white">{t('cricketSettlementRules.disputes.subtitle')}</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {(t('cricketSettlementRules.disputes.list', { returnObjects: true }) as string[]).map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-900/50 p-5 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12 — RESPONSIBLE USE NOTICE */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('cricketSettlementRules.importantReminder.title')}
          </h2>

          <div className="bg-yellow-900/20 border border-yellow-600/30 p-8 rounded-2xl">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-10 h-10 text-yellow-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-4">{t('cricketSettlementRules.importantReminder.subtitle')}</h3>
                <ul className="space-y-3">
                  {(t('cricketSettlementRules.importantReminder.list', { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13 — FAQ */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('cricketSettlementRules.faq.title')} <span className="text-brand">{t('cricketSettlementRules.faq.subtitle')}</span>
          </h2>

          <div className="space-y-6">
            {(t('cricketSettlementRules.faq.items', { returnObjects: true }) as any[]).map((faq, i) => (
              <div
                key={i}
                className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-gray-850 transition-colors"
                >
                  <div className="flex items-start gap-3 flex-1">
                    <HelpCircle className="w-6 h-6 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-white font-bold text-lg">{faq.question}</span>
                  </div>
                  <span className="text-brand text-2xl flex-shrink-0">
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 border-t border-gray-800">
                    <p className="text-gray-300 pl-9 pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL NOTE & CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-gray-900 to-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-900/80 backdrop-blur-md p-10 rounded-2xl border border-gray-800">
            <FileText className="w-16 h-16 text-brand mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">
              {t('cricketSettlementRules.finalNote.title')}
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {t('cricketSettlementRules.finalNote.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LocalizedLink
                to="/guides/cricket"
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand/90 text-black font-bold py-3 px-8 rounded-full transition-all"
              >
                {t('cricketSettlementRules.finalNote.viewGuide')}
              </LocalizedLink>
              <a
                href={OFFICIAL_DOMAIN}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-purple-900 font-bold py-3 px-8 rounded-full transition-all"
              >
                {t('cricketSettlementRules.finalNote.visitPlatform')} <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER DISCLAIMER */}
      <section className="bg-gray-950 py-12 border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-2">
            {t('cricketSettlementRules.footer.copyright')}
          </p>
          <p className="text-gray-500 text-sm">
            {t('cricketSettlementRules.footer.disclaimer')}
          </p>
        </div>
      </section>
    </>
  );
};

export default CricketSettlementRules;


