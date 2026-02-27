import React from 'react';
import { LocalizedLink } from '../components/LocalizedLink';
import SEO from '../components/SEO';
import { Breadcrumbs } from '../components/Section';
import { OFFICIAL_DOMAIN } from '../constants';
import { useTranslation, Trans } from 'react-i18next';
import {
  Globe,
  TrendingUp,
  Calculator,
  Trophy,
  Target,
  Users,
  BarChart3,
  Clock,
  Star,
  Award,
  Shield,
  Zap,
  Activity,
  DollarSign,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  FileText,
  Coins,
  Crown,
  Flag,
  Calendar,
  MapPin,
  Gamepad2
} from 'lucide-react';

const safeMap = (data: any) => Array.isArray(data) ? data : [];

const SportsBettingGuide: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        metadata={{
          title: t('sportsBettingGuide.seo.title'),
          description: t('sportsBettingGuide.seo.description'),
          keywords: safeMap(t('sportsBettingGuide.seo.keywords', { returnObjects: true })),
          canonicalUrl: "https://bigwinofficial.com/guides/sports-betting",
          ogType: 'article',
          publishedTime: '2025-01-01T00:00:00+06:00',
          modifiedTime: new Date().toISOString(),
          author: 'Bigwin959 Guide',
          schema: {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t('sportsBettingGuide.seo.headline'),
            "description": t('sportsBettingGuide.seo.description'),
            "author": {
              "@type": "Organization",
              "name": "Bigwin959 Guide"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Bigwin959 Guide",
              "logo": {
                "@type": "ImageObject",
                "url": "https://bw959image.netlify.app/logo1.png"
              }
            },
            "datePublished": "2025-01-01",
            "dateModified": new Date().toISOString(),
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://bigwinofficial.com/guides/sports-betting"
            }
          }
        }}
      />

      <Breadcrumbs items={[
        { label: 'Guides', path: '/guides' },
        { label: t('sportsBettingGuide.hero.title'), path: '/guides/sports-betting' }
      ]} />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-900 via-gray-900 to-gray-950 py-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {t('sportsBettingGuide.hero.title')}
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            {t('sportsBettingGuide.hero.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Globe className="w-5 h-5 text-brand" />
              <span className="text-white text-sm">{t('sportsBettingGuide.hero.badges.global')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Calculator className="w-5 h-5 text-brand" />
              <span className="text-white text-sm">{t('sportsBettingGuide.hero.badges.odds')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Trophy className="w-5 h-5 text-brand" />
              <span className="text-white text-sm">{t('sportsBettingGuide.hero.badges.history')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-12 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('sportsBettingGuide.intro.p1')}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t('sportsBettingGuide.intro.p2')}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t('sportsBettingGuide.intro.p3')}
            </p>
            <div className="bg-blue-900/20 border border-blue-600/30 p-5 rounded-xl">
              <p className="text-blue-300 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><strong>{t('sportsBettingGuide.intro.disclaimer.strong')}</strong>{t('sportsBettingGuide.intro.disclaimer.text')}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UNDERSTANDING BOOKMAKERS */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{t('sportsBettingGuide.bookmakers.title')}</h2>

          <div className="space-y-8">
            <p className="text-gray-300 leading-relaxed text-center">
              {t('sportsBettingGuide.bookmakers.subtitle')}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-brand mx-auto" />
                  {t('sportsBettingGuide.bookmakers.definition.title')}
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    {t('sportsBettingGuide.bookmakers.definition.p1')}
                  </p>
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <p className="text-brand font-bold mb-2">{t('sportsBettingGuide.bookmakers.definition.coreFunctions.title')}</p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      {(t('sportsBettingGuide.bookmakers.definition.coreFunctions.items', { returnObjects: true }) as string[]).map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Calculator className="w-6 h-6 text-brand mx-auto" />
                  {t('sportsBettingGuide.bookmakers.economics.title')}
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    {t('sportsBettingGuide.bookmakers.economics.p1')}
                  </p>
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <p className="text-brand font-bold mb-2">{t('sportsBettingGuide.bookmakers.economics.example.title')}</p>
                    <div className="space-y-1 text-gray-300 text-sm">
                      <div className="flex justify-between">
                        <span>{t('sportsBettingGuide.bookmakers.economics.example.teamA')}</span>
                        <span>{t('sportsBettingGuide.bookmakers.economics.example.teamAVal')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{t('sportsBettingGuide.bookmakers.economics.example.draw')}</span>
                        <span>{t('sportsBettingGuide.bookmakers.economics.example.drawVal')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{t('sportsBettingGuide.bookmakers.economics.example.teamB')}</span>
                        <span>{t('sportsBettingGuide.bookmakers.economics.example.teamBVal')}</span>
                      </div>
                      <div className="border-t border-gray-700 pt-1 mt-2">
                        <div className="flex justify-between font-bold">
                          <span>{t('sportsBettingGuide.bookmakers.economics.example.total')}</span>
                          <span className="text-brand">{t('sportsBettingGuide.bookmakers.economics.example.totalVal')}</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">{t('sportsBettingGuide.bookmakers.economics.example.margin')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-white font-bold mb-4 text-center">{t('sportsBettingGuide.bookmakers.types.title')}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {['traditional', 'exchange', 'asian'].map((type) => (
                  <div key={type} className="bg-gray-900 p-4 rounded-lg">
                    <h4 className="text-brand font-bold mb-2">{t(`sportsBettingGuide.bookmakers.types.${type}.title`)}</h4>
                    <p className="text-gray-300 text-sm mb-3">{t(`sportsBettingGuide.bookmakers.types.${type}.desc`)}</p>
                    <ul className="space-y-1 text-gray-400 text-xs">
                      {(t(`sportsBettingGuide.bookmakers.types.${type}.items`, { returnObjects: true }) as string[]).map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-600/30 p-5 rounded-xl">
              <p className="text-yellow-300 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><strong>{t('sportsBettingGuide.bookmakers.risk.strong')}</strong>{t('sportsBettingGuide.bookmakers.risk.text')}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE ODDS FORMATS */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{t('sportsBettingGuide.odds.title')}</h2>

          <div className="space-y-8">
            <p className="text-gray-300 leading-relaxed text-center">
              {t('sportsBettingGuide.odds.desc')}
            </p>

            {/* DECIMAL ODDS */}
            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Calculator className="w-6 h-6 text-brand mx-auto" />
                {t('sportsBettingGuide.odds.decimal.title')}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    {t('sportsBettingGuide.odds.decimal.desc')}
                  </p>
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <p className="text-brand font-bold mb-2">{t('sportsBettingGuide.odds.decimal.calculate.title')}</p>
                    <div className="space-y-2 text-gray-300 text-sm">
                      {(t('sportsBettingGuide.odds.decimal.calculate.items', { returnObjects: true }) as string[]).map((item, i) => (
                        <p key={i}><strong>{item.split(' = ')[0]} =</strong> {item.split(' = ')[1]}</p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <p className="text-brand font-bold mb-3">{t('sportsBettingGuide.odds.decimal.examples.title')}</p>
                    <div className="space-y-3">
                      {['ex1', 'ex2', 'ex3'].map((ex, i) => (
                        <div key={ex} className={i < 2 ? "border-b border-gray-700 pb-2" : ""}>
                          <p className="text-white font-bold">{t(`sportsBettingGuide.odds.decimal.examples.${ex}.odds`)}</p>
                          <p className="text-gray-400 text-sm">{t(`sportsBettingGuide.odds.decimal.examples.${ex}.return`)}</p>
                          <p className="text-gray-400 text-sm">{t(`sportsBettingGuide.odds.decimal.examples.${ex}.prob`)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* HONG KONG ODDS */}
            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Flag className="w-6 h-6 text-brand mx-auto" />
                {t('sportsBettingGuide.odds.hk.title')}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    {t('sportsBettingGuide.odds.hk.desc')}
                  </p>
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <p className="text-brand font-bold mb-2">{t('sportsBettingGuide.odds.hk.calculate.title')}</p>
                    <div className="space-y-2 text-gray-300 text-sm">
                      {(t('sportsBettingGuide.odds.hk.calculate.items', { returnObjects: true }) as string[]).map((item, i) => (
                        <p key={i}><strong>{item.split(' = ')[0]} =</strong> {item.split(' = ')[1]}</p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <p className="text-brand font-bold mb-3">{t('sportsBettingGuide.odds.hk.examples.title')}</p>
                    <div className="space-y-3">
                      {['ex1', 'ex2', 'ex3'].map((ex, i) => (
                        <div key={ex} className={i < 2 ? "border-b border-gray-700 pb-2" : ""}>
                          <p className="text-white font-bold">{t(`sportsBettingGuide.odds.hk.examples.${ex}.odds`)}</p>
                          <p className="text-gray-400 text-sm">{t(`sportsBettingGuide.odds.hk.examples.${ex}.return`)}</p>
                          <p className="text-gray-400 text-sm">{t(`sportsBettingGuide.odds.hk.examples.${ex}.dec`)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MALAYSIAN ODDS */}
            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-brand mx-auto" />
                {t('sportsBettingGuide.odds.my.title')}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    {t('sportsBettingGuide.odds.my.desc')}
                  </p>
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <p className="text-brand font-bold mb-2">{t('sportsBettingGuide.odds.my.calculate.title')}</p>
                    <div className="space-y-2 text-gray-300 text-sm">
                      {(t('sportsBettingGuide.odds.my.calculate.items', { returnObjects: true }) as string[]).map((item, i) => (
                        <p key={i}>{item.includes(':') ? <><strong>{item.split(': ')[0]}:</strong> {item.split(': ')[1]}</> : item}</p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <p className="text-brand font-bold mb-3">{t('sportsBettingGuide.odds.my.examples.title')}</p>
                    <div className="space-y-3">
                      {['ex1', 'ex2', 'ex3'].map((ex, i) => (
                        <div key={ex} className={i < 2 ? "border-b border-gray-700 pb-2" : ""}>
                          <p className="text-white font-bold">{t(`sportsBettingGuide.odds.my.examples.${ex}.odds`)}</p>
                          <p className="text-gray-400 text-sm">{t(`sportsBettingGuide.odds.my.examples.${ex}.return`)}</p>
                          <p className="text-gray-400 text-sm">{t(`sportsBettingGuide.odds.my.examples.${ex}.note`)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* INDONESIAN ODDS */}
            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Globe className="w-6 h-6 text-brand mx-auto" />
                {t('sportsBettingGuide.odds.indo.title')}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    {t('sportsBettingGuide.odds.indo.desc')}
                  </p>
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <p className="text-brand font-bold mb-2">{t('sportsBettingGuide.odds.indo.calculate.title')}</p>
                    <div className="space-y-2 text-gray-300 text-sm">
                      {(t('sportsBettingGuide.odds.indo.calculate.items', { returnObjects: true }) as string[]).map((item, i) => (
                        <p key={i}>{item.includes(':') ? <><strong>{item.split(': ')[0]}:</strong> {item.split(': ')[1]}</> : item}</p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <p className="text-brand font-bold mb-3">{t('sportsBettingGuide.odds.indo.examples.title')}</p>
                    <div className="space-y-3">
                      {['ex1', 'ex2', 'ex3'].map((ex, i) => (
                        <div key={ex} className={i < 2 ? "border-b border-gray-700 pb-2" : ""}>
                          <p className="text-white font-bold">{t(`sportsBettingGuide.odds.indo.examples.${ex}.odds`)}</p>
                          <p className="text-gray-400 text-sm">{t(`sportsBettingGuide.odds.indo.examples.${ex}.return`)}</p>
                          <p className="text-gray-400 text-sm">{t(`sportsBettingGuide.odds.indo.examples.${ex}.note`)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ODDS CONVERSION TABLE */}
            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-white font-bold mb-4 text-center">{t('sportsBettingGuide.odds.conversion.title')}</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      {(t('sportsBettingGuide.odds.conversion.headers', { returnObjects: true }) as string[]).map((header, i) => (
                        <th key={i} className="text-left py-3 text-gray-400">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    {(t('sportsBettingGuide.odds.conversion.rows', { returnObjects: true }) as any[]).map((row, i) => (
                      <tr key={i} className={i < 7 ? "border-b border-gray-700" : ""}>
                        <td className="py-3 text-brand font-bold">{row.dec}</td>
                        <td className="py-3">{row.hk}</td>
                        <td className="py-3">{row.my}</td>
                        <td className="py-3">{row.indo}</td>
                        <td className="py-3">{row.prob}</td>
                        <td className="py-3 text-green-400">{row.profit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-700/30 p-5 rounded-xl">
              <p className="text-blue-300 flex items-start gap-3">
                <Calculator className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><strong>{t('sportsBettingGuide.odds.protip.strong')}</strong>{t('sportsBettingGuide.odds.protip.text')}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SBO & IBC SPORTS GLOBAL EXPLANATION */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{t('sportsBettingGuide.sboIbc.title')}</h2>
          <div className="space-y-8">
            <p className="text-gray-300 leading-relaxed text-center">
              {t('sportsBettingGuide.sboIbc.intro')}
            </p>

            {/* SBO */}
            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <Crown className="w-6 h-6 text-brand mx-auto" />
                {t('sportsBettingGuide.sboIbc.sbo.title')}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">{t('sportsBettingGuide.sboIbc.sbo.desc')}</p>
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <p className="text-brand font-bold mb-3">{t('sportsBettingGuide.sboIbc.sbo.features.title')}</p>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      {(t('sportsBettingGuide.sboIbc.sbo.features.items', { returnObjects: true }) as any[]).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                          <span><strong>{item.strong}</strong>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <p className="text-brand font-bold mb-3">{t('sportsBettingGuide.sboIbc.sbo.coverage.title')}</p>
                    <div className="grid grid-cols-2 gap-2 text-gray-300 text-sm">
                      <div className="space-y-1">
                        {(t('sportsBettingGuide.sboIbc.sbo.coverage.col1', { returnObjects: true }) as string[]).map((item, i) => (
                          <p key={i}>• {item}</p>
                        ))}
                      </div>
                      <div className="space-y-1">
                        {(t('sportsBettingGuide.sboIbc.sbo.coverage.col2', { returnObjects: true }) as string[]).map((item, i) => (
                          <p key={i}>• {item}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <p className="text-brand font-bold mb-3">{t('sportsBettingGuide.sboIbc.sbo.presence.title')}</p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      {(t('sportsBettingGuide.sboIbc.sbo.presence.items', { returnObjects: true }) as string[]).map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-blue-900/20 border border-blue-700/30 p-4 rounded-lg">
                <p className="text-blue-300 text-sm">
                  <strong>{t('sportsBettingGuide.sboIbc.sbo.innovation.strong')}</strong>{t('sportsBettingGuide.sboIbc.sbo.innovation.text')}
                </p>
              </div>
            </div>

            {/* IBC */}
            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <Globe className="w-6 h-6 text-brand mx-auto" />
                {t('sportsBettingGuide.sboIbc.ibc.title')}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">{t('sportsBettingGuide.sboIbc.ibc.desc')}</p>
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <p className="text-brand font-bold mb-3">{t('sportsBettingGuide.sboIbc.ibc.strengths.title')}</p>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      {(t('sportsBettingGuide.sboIbc.ibc.strengths.items', { returnObjects: true }) as any[]).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                          <span><strong>{item.strong}</strong>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <p className="text-brand font-bold mb-3">{t('sportsBettingGuide.sboIbc.ibc.specialties.title')}</p>
                    <div className="space-y-2 text-gray-300 text-sm">
                      {(t('sportsBettingGuide.sboIbc.ibc.specialties.items', { returnObjects: true }) as any[]).map((item, i) => (
                        <div key={i} className={i < 3 ? "border-b border-gray-700 pb-2" : ""}>
                          <p className="text-white font-bold">{item.title}</p>
                          <p className="text-gray-400 text-xs">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <p className="text-brand font-bold mb-3">{t('sportsBettingGuide.sboIbc.ibc.tech.title')}</p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      {(t('sportsBettingGuide.sboIbc.ibc.tech.items', { returnObjects: true }) as string[]).map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-green-900/20 border border-green-700/30 p-4 rounded-lg">
                <p className="text-green-300 text-sm">
                  <strong>{t('sportsBettingGuide.sboIbc.ibc.focus.strong')}</strong>{t('sportsBettingGuide.sboIbc.ibc.focus.text')}
                </p>
              </div>
            </div>

            {/* COMPARISON */}
            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-white font-bold mb-4 text-center">{t('sportsBettingGuide.sboIbc.comparison.title')}</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      {(t('sportsBettingGuide.sboIbc.comparison.headers', { returnObjects: true }) as string[]).map((header, i) => (
                        <th key={i} className="text-left py-3 text-gray-400">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    {(t('sportsBettingGuide.sboIbc.comparison.rows', { returnObjects: true }) as any[]).map((row, i) => (
                      <tr key={i} className={i < 6 ? "border-b border-gray-700" : ""}>
                        <td className="py-3 font-bold">{row.feat}</td>
                        <td className={`py-3 ${row.sbo.includes('High') || row.sbo.includes('Excellent') || row.sbo.includes('Sharp') ? 'text-green-400' : ''}`}>{row.sbo}</td>
                        <td className={`py-3 ${row.ibc.includes('High') || row.ibc.includes('Very Good') || row.ibc.includes('Sharp') ? 'text-green-400' : ''}`}>{row.ibc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-600/30 p-5 rounded-xl">
              <p className="text-yellow-300 flex items-start gap-3">
                <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><strong>{t('sportsBettingGuide.sboIbc.impact.strong')}</strong>{t('sportsBettingGuide.sboIbc.impact.text')}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BIG LEAGUES EXPLANATION */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{t('sportsBettingGuide.leagues.title')}</h2>
          <div className="space-y-8">
            <p className="text-gray-300 leading-relaxed text-center">
              {t('sportsBettingGuide.leagues.intro')}
            </p>

            {/* FOOTBALL */}
            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-brand mx-auto" />
                {t('sportsBettingGuide.leagues.football.title')}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {['epl', 'laliga'].map(league => (
                    <div key={league} className="bg-gray-900 p-4 rounded-lg">
                      <h4 className="text-brand font-bold mb-3">{t(`sportsBettingGuide.leagues.football.${league}.title`)}</h4>
                      <p className="text-gray-300 text-sm mb-3">{t(`sportsBettingGuide.leagues.football.${league}.desc`)}</p>
                      <ul className="space-y-1 text-gray-400 text-xs">
                        {(t(`sportsBettingGuide.leagues.football.${league}.items`, { returnObjects: true }) as string[]).map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {['bundesliga', 'seriea'].map(league => (
                    <div key={league} className="bg-gray-900 p-4 rounded-lg">
                      <h4 className="text-brand font-bold mb-3">{t(`sportsBettingGuide.leagues.football.${league}.title`)}</h4>
                      <p className="text-gray-300 text-sm mb-3">{t(`sportsBettingGuide.leagues.football.${league}.desc`)}</p>
                      <ul className="space-y-1 text-gray-400 text-xs">
                        {(t(`sportsBettingGuide.leagues.football.${league}.items`, { returnObjects: true }) as string[]).map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AMERICAN */}
            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <Flag className="w-6 h-6 text-brand mx-auto" />
                {t('sportsBettingGuide.leagues.american.title')}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {['nfl', 'nba'].map(league => (
                    <div key={league} className="bg-gray-900 p-4 rounded-lg">
                      <h4 className="text-brand font-bold mb-3">{t(`sportsBettingGuide.leagues.american.${league}.title`)}</h4>
                      <p className="text-gray-300 text-sm mb-3">{t(`sportsBettingGuide.leagues.american.${league}.desc`)}</p>
                      <ul className="space-y-1 text-gray-400 text-xs">
                        {(t(`sportsBettingGuide.leagues.american.${league}.items`, { returnObjects: true }) as string[]).map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {['mlb', 'nhl'].map(league => (
                    <div key={league} className="bg-gray-900 p-4 rounded-lg">
                      <h4 className="text-brand font-bold mb-3">{t(`sportsBettingGuide.leagues.american.${league}.title`)}</h4>
                      <p className="text-gray-300 text-sm mb-3">{t(`sportsBettingGuide.leagues.american.${league}.desc`)}</p>
                      <ul className="space-y-1 text-gray-400 text-xs">
                        {(t(`sportsBettingGuide.leagues.american.${league}.items`, { returnObjects: true }) as string[]).map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* GLOBAL */}
            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <Globe className="w-6 h-6 text-brand mx-auto" />
                {t('sportsBettingGuide.leagues.global.title')}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {['ipl', 'atp', 'f1'].map(league => (
                  <div key={league} className="bg-gray-900 p-4 rounded-lg">
                    <h4 className="text-brand font-bold mb-3">{t(`sportsBettingGuide.leagues.global.${league}.title`)}</h4>
                    <p className="text-gray-300 text-sm mb-3">{t(`sportsBettingGuide.leagues.global.${league}.desc`)}</p>
                    <ul className="space-y-1 text-gray-400 text-xs">
                      {(t(`sportsBettingGuide.leagues.global.${league}.items`, { returnObjects: true }) as string[]).map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* CHARACTERISTICS */}
            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-white font-bold mb-4 text-center">{t('sportsBettingGuide.leagues.characteristics.title')}</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      {(t('sportsBettingGuide.leagues.characteristics.headers', { returnObjects: true }) as string[]).map((header, i) => (
                        <th key={i} className="text-left py-3 text-gray-400">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    {(t('sportsBettingGuide.leagues.characteristics.rows', { returnObjects: true }) as any[]).map((row, i) => (
                      <tr key={i} className={i < 4 ? "border-b border-gray-700" : ""}>
                        <td className="py-3 font-bold">{row.league}</td>
                        <td className="py-3">{row.markets}</td>
                        <td className={`py-3 ${row.vol.includes('Highest') || row.vol.includes('Very High') || row.vol.includes('High') ? row.vol.includes('Medium') ? 'text-yellow-400' : 'text-green-400' : ''}`}>{row.vol}</td>
                        <td className="py-3">{row.factors}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-green-900/20 border border-green-700/30 p-5 rounded-xl">
              <p className="text-green-300 flex items-start gap-3">
                <Trophy className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><strong>{t('sportsBettingGuide.leagues.strategy.strong')}</strong>{t('sportsBettingGuide.leagues.strategy.text')}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORLD CUP HISTORY */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{t('sportsBettingGuide.worldCup.title')}</h2>
          <div className="space-y-8">
            <p className="text-gray-300 leading-relaxed text-center">
              {t('sportsBettingGuide.worldCup.intro')}
            </p>

            {/* OVERVIEW */}
            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <Crown className="w-6 h-6 text-brand mx-auto" />
                {t('sportsBettingGuide.worldCup.structure.title')}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">{t('sportsBettingGuide.worldCup.structure.intro')}</p>
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <p className="text-brand font-bold mb-3">{t('sportsBettingGuide.worldCup.structure.format.title')}</p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      {(t('sportsBettingGuide.worldCup.structure.format.items', { returnObjects: true }) as any[]).map((item, i) => (
                        <li key={i}>• <strong>{item.strong}</strong>{item.text}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <p className="text-brand font-bold mb-3">{t('sportsBettingGuide.worldCup.structure.betting.title')}</p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      {(t('sportsBettingGuide.worldCup.structure.betting.items', { returnObjects: true }) as string[]).map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <p className="text-brand font-bold mb-3">{t('sportsBettingGuide.worldCup.structure.markets.title')}</p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      {(t('sportsBettingGuide.worldCup.structure.markets.items', { returnObjects: true }) as string[]).map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* STORIES */}
            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-white font-bold mb-6 text-center">{t('sportsBettingGuide.worldCup.history.title')}</h3>
              <div className="space-y-6">
                {(t('sportsBettingGuide.worldCup.history.stories', { returnObjects: true }) as any[]).reduce((result: any[], item: any, index: number) => {
                  const chunkIndex = Math.floor(index / 2);
                  if (!result[chunkIndex]) result[chunkIndex] = [];
                  result[chunkIndex].push(item);
                  return result;
                }, []).map((pair: any[], i: number) => (
                  <div key={i} className="grid md:grid-cols-2 gap-6">
                    {pair.map((story: any, j: number) => (
                      <div key={j} className="bg-gray-900 p-4 rounded-lg">
                        <h4 className="text-brand font-bold mb-2">{story.title}</h4>
                        <p className="text-gray-300 text-sm mb-3">{story.desc}</p>
                        <div className="space-y-2 text-gray-400 text-xs">
                          {story.details.map((detail: any, k: number) => (
                            <p key={k}><strong>{detail.strong}</strong>{detail.text}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* WINNERS */}
            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-white font-bold mb-4 text-center">{t('sportsBettingGuide.worldCup.winners.title')}</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      {(t('sportsBettingGuide.worldCup.winners.headers', { returnObjects: true }) as string[]).map((header, i) => (
                        <th key={i} className="text-left py-3 text-gray-400">{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    {(t('sportsBettingGuide.worldCup.winners.rows', { returnObjects: true }) as any[]).map((row, i) => (
                      <tr key={i} className={i < 6 ? "border-b border-gray-700" : ""}>
                        <td className="py-3 font-bold">{row.year}</td>
                        <td className="py-3">{row.host}</td>
                        <td className="py-3 text-brand">{row.winner}</td>
                        <td className="py-3">{row.score}</td>
                        <td className="py-3">{row.odds}</td>
                        <td className="py-3 text-xs">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* INSIGHTS */}
            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-white font-bold mb-4 text-center">{t('sportsBettingGuide.worldCup.insights.title')}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {['patterns', 'value', 'modern'].map((key) => (
                  <div key={key} className="bg-gray-900 p-4 rounded-lg">
                    <h4 className="text-brand font-bold mb-3">{t(`sportsBettingGuide.worldCup.insights.${key}.title`)}</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      {(t(`sportsBettingGuide.worldCup.insights.${key}.items`, { returnObjects: true }) as any[]).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                          {key === 'value' && <Target className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />}
                          {key === 'modern' && <Activity className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />}
                          <span><strong>{item.strong}</strong>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-purple-900/20 border border-purple-700/30 p-5 rounded-xl">
              <p className="text-purple-300 flex items-start gap-3">
                <Crown className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><strong>{t('sportsBettingGuide.worldCup.insights.legacy.strong')}</strong>{t('sportsBettingGuide.worldCup.insights.legacy.text')}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONCLUSION & RELATED GUIDES */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{t('sportsBettingGuide.conclusion.title')}</h2>

          <div className="space-y-8">
            <p className="text-gray-300 leading-relaxed text-center">
              {t('sportsBettingGuide.conclusion.p1')}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <LocalizedLink to="/guides/cricket" className="bg-gray-800 border border-gray-700 p-6 rounded-xl hover:border-brand transition-colors group">
                <div className="text-center">
                  <Activity className="w-12 h-12 text-brand mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-bold mb-2">{t('sportsBettingGuide.related.cricketGuide.title')}</h3>
                  <p className="text-gray-400 text-sm">{t('sportsBettingGuide.related.cricketGuide.desc')}</p>
                </div>
              </LocalizedLink>

              <LocalizedLink to="/guides/deposit" className="bg-gray-800 border border-gray-700 p-6 rounded-xl hover:border-brand transition-colors group">
                <div className="text-center">
                  <DollarSign className="w-12 h-12 text-brand mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-bold mb-2">{t('sportsBettingGuide.related.depositGuide.title')}</h3>
                  <p className="text-gray-400 text-sm">{t('sportsBettingGuide.related.depositGuide.desc')}</p>
                </div>
              </LocalizedLink>

              <LocalizedLink to="/guides/withdrawal" className="bg-gray-800 border border-gray-700 p-6 rounded-xl hover:border-brand transition-colors group">
                <div className="text-center">
                  <Coins className="w-12 h-12 text-brand mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-bold mb-2">{t('sportsBettingGuide.related.withdrawalGuide.title')}</h3>
                  <p className="text-gray-400 text-sm">{t('sportsBettingGuide.related.withdrawalGuide.desc')}</p>
                </div>
              </LocalizedLink>

              <LocalizedLink to="/guides/aviator-game" className="bg-gray-800 border border-gray-700 p-6 rounded-xl hover:border-brand transition-colors group">
                <div className="text-center">
                  <Gamepad2 className="w-12 h-12 text-brand mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-bold mb-2">{t('sportsBettingGuide.related.aviatorGuide.title')}</h3>
                  <p className="text-gray-400 text-sm">{t('sportsBettingGuide.related.aviatorGuide.desc')}</p>
                </div>
              </LocalizedLink>

              <LocalizedLink to="/top-slot-games" className="bg-gray-800 border border-gray-700 p-6 rounded-xl hover:border-brand transition-colors group">
                <div className="text-center">
                  <Star className="w-12 h-12 text-brand mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-bold mb-2">{t('sportsBettingGuide.related.slotsGuide.title')}</h3>
                  <p className="text-gray-400 text-sm">{t('sportsBettingGuide.related.slotsGuide.desc')}</p>
                </div>
              </LocalizedLink>

              <LocalizedLink to="/guides" className="bg-gray-800 border border-gray-700 p-6 rounded-xl hover:border-brand transition-colors group">
                <div className="text-center">
                  <FileText className="w-12 h-12 text-brand mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-bold mb-2">{t('sportsBettingGuide.related.allGuides.title')}</h3>
                  <p className="text-gray-400 text-sm">{t('sportsBettingGuide.related.allGuides.desc')}</p>
                </div>
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SportsBettingGuide;
