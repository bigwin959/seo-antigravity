import React from 'react';
import { LocalizedLink } from '../components/LocalizedLink';
import { useTranslation, Trans } from 'react-i18next';
import SEO from '../components/SEO';
import { Breadcrumbs } from '../components/Section';
import { OFFICIAL_DOMAIN } from '../constants';
import {
  ExternalLink, Trophy, Activity, Award, Flame, Zap, Shield,
  Globe, Smartphone, Target, TrendingUp, BarChart3, ChevronRight,
  Clock, CheckCircle, PieChart, Banknote
} from 'lucide-react';

// Helper to safely map over translations that might not be arrays
const safeMap = (data: any) => Array.isArray(data) ? data : [];

const IBCSportsProvider: React.FC = () => {
  const { t } = useTranslation();

  const schema = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    "name": t('providers.ibcSports.seo.schema.name'),
    "description": t('providers.ibcSports.seo.schema.description'),
    "url": `${OFFICIAL_DOMAIN}/providers/ibc-sports`
  };

  return (
    <>
      <SEO metadata={{
        title: t('providers.ibcSports.seo.title'),
        description: t('providers.ibcSports.seo.description'),
        keywords: safeMap(t('providers.ibcSports.seo.keywords', { returnObjects: true })),
        canonicalUrl: `${OFFICIAL_DOMAIN}/providers/ibc-sports`,
        ogType: 'article',
        publishedTime: '2025-01-01T00:00:00+06:00',
        modifiedTime: new Date().toISOString(),
        author: t('brand.name'),
        schema: schema
      }} />

      <Breadcrumbs items={[
        { label: t('nav.providers'), path: '/providers' },
        { label: t('breadcrumbs.ibcSports'), path: '/providers/ibc-sports' }
      ]} />

      {/* HERO SECTION */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjIyIi8+PC9zdmc+')] opacity-20"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 px-4 py-2 rounded-full mb-6">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span className="text-blue-200 text-sm font-bold tracking-wide">{t('providers.ibcSports.hero.badge')}</span>
            </div>
            <h1
              className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
              dangerouslySetInnerHTML={{ __html: t('providers.ibcSports.hero.title') }}
            />

            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('providers.ibcSports.hero.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={OFFICIAL_DOMAIN} target="_blank" rel="nofollow noopener noreferrer" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-yellow-500/30 flex items-center gap-2">
                {t('providers.ibcSports.hero.cta.start')} <ExternalLink className="w-5 h-5" />
              </a>
              <LocalizedLink to="/guides/sports-betting" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-4 px-10 rounded-full transition-all backdrop-blur-sm">
                {t('providers.ibcSports.hero.cta.guide')}
              </LocalizedLink>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {safeMap(t('providers.ibcSports.hero.stats', { returnObjects: true })).map((stat: any, i: number) => {
              const Icon = [Globe, Activity, Target, TrendingUp][i];
              return (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all">
                  <Icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">

        {/* INTRODUCTION */}
        <section>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-3">
                <Globe className="w-8 h-8 text-blue-500" />
                {t('providers.ibcSports.intro.title')}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {t('providers.ibcSports.intro.p1')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                {t('providers.ibcSports.intro.p2')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                {t('providers.ibcSports.intro.p3')}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t('providers.ibcSports.intro.p4')}
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="https://res.cloudinary.com/dmyocpyxd/image/upload/v1767689372/IBC-Platform-Screenshot.jpg"
                srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_300,f_auto,q_auto/v1767689372/IBC-Platform-Screenshot.jpg 300w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_600,f_auto,q_auto/v1767689372/IBC-Platform-Screenshot.jpg 600w"
                sizes="(max-width: 768px) 100vw, 500px"
                width="600"
                height="400"
                loading="lazy"
                alt="IBC Sports Platform Interface"
                className="relative rounded-2xl shadow-2xl border border-gray-700 w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* KEY FEATURES */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{t('providers.ibcSports.features.title')}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t('providers.ibcSports.features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t('providers.ibcSports.features.handicap.title')}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('providers.ibcSports.features.handicap.desc1')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                {t('providers.ibcSports.features.handicap.desc2')}
              </p>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                <div className="text-sm font-bold text-blue-400 mb-2">{t('providers.ibcSports.features.handicap.example.title')}</div>
                <div className="flex justify-between items-center text-sm text-gray-300 mb-1">
                  <span>{t('providers.ibcSports.features.handicap.example.teamA')}:</span>
                  <span className="font-mono text-green-400">1.95</span>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-300 mb-2">
                  <span>{t('providers.ibcSports.features.handicap.example.teamB')}:</span>
                  <span className="font-mono text-red-400">1.95</span>
                </div>
                <div className="text-xs text-gray-500 italic">
                  * {t('providers.ibcSports.features.handicap.example.note')}
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-green-500/50 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Activity className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t('providers.ibcSports.features.live.title')}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('providers.ibcSports.features.live.desc1')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('providers.ibcSports.features.live.desc2')}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t('providers.ibcSports.features.live.desc3')}
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-yellow-500/50 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t('providers.ibcSports.features.odds.title')}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('providers.ibcSports.features.odds.desc1')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('providers.ibcSports.features.odds.desc2')}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t('providers.ibcSports.features.odds.desc3')}
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-purple-500/50 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t('providers.ibcSports.features.coverage.title')}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('providers.ibcSports.features.coverage.desc1')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('providers.ibcSports.features.coverage.desc2')}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t('providers.ibcSports.features.coverage.desc3')}
              </p>
            </div>
          </div>
        </section>

        {/* SPORTS COVERAGE */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{t('providers.ibcSports.sports.title')}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t('providers.ibcSports.sports.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safeMap(t('providers.ibcSports.sports.items', { returnObjects: true })).map((sport: any, i: number) => {
              const Icon = [Activity, Trophy, Flame, Globe, Zap, Target][i];
              return (
                <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition-colors group">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{sport.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {sport.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {safeMap(sport.tags).map((tag: string, j: number) => (
                      <span key={j} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs border border-gray-700">{tag}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* MARKETS */}
        <section className="bg-gradient-to-br from-indigo-900/20 to-blue-900/20 border border-indigo-500/20 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{t('providers.ibcSports.markets.title')}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t('providers.ibcSports.markets.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {safeMap(t('providers.ibcSports.markets.items', { returnObjects: true })).map((group: any, i: number) => (
              <div key={i} className="bg-gray-900/80 rounded-xl p-6 border-t-4 border-blue-500">
                <h3 className="text-lg font-bold text-white mb-4">{group.title}</h3>
                <ul className="space-y-2">
                  {safeMap(group.markets).map((market: string, j: number) => (
                    <li key={j} className="flex items-center gap-2 text-gray-400 text-sm">
                      <ChevronRight className="w-4 h-4 text-blue-500" />
                      {market}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PLATFORM FEATURES */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{t('providers.ibcSports.platform.title')}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t('providers.ibcSports.platform.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {safeMap(t('providers.ibcSports.platform.items', { returnObjects: true })).map((feature: any, i: number) => {
              const Icon = [Smartphone, Zap, BarChart3, Clock, Banknote, PieChart, Shield, Activity, TrendingUp][i];
              return (
                <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-gray-800/50 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="bg-gray-800/30 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{t('providers.ibcSports.whyChoose.title')}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t('providers.ibcSports.whyChoose.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {safeMap(t('providers.ibcSports.whyChoose.items1', { returnObjects: true })).map((reason: any, i: number) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/50">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-8">
              {safeMap(t('providers.ibcSports.whyChoose.items2', { returnObjects: true })).map((reason: any, i: number) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-900/50">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BETTING TIPS */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <Zap className="w-8 h-8 text-yellow-400" />
              {t('providers.ibcSports.tips.title')}
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t('providers.ibcSports.tips.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 rounded-xl p-8 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-white mb-4">{t('providers.ibcSports.tips.handicap.title')}</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{t('providers.ibcSports.tips.handicap.desc1')}</p>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">{t('providers.ibcSports.tips.handicap.desc2')}</p>
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="text-blue-400 text-xs font-bold uppercase mb-2">{t('providers.ibcSports.tips.handicap.example.title')}</div>
                <ul className="text-sm text-gray-400 space-y-1">
                  {safeMap(t('providers.ibcSports.tips.handicap.example.items', { returnObjects: true })).map((item: string, i: number) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-8 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-white mb-4">{t('providers.ibcSports.tips.live.title')}</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{t('providers.ibcSports.tips.live.desc1')}</p>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">{t('providers.ibcSports.tips.live.desc2')}</p>
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="text-green-400 text-xs font-bold uppercase mb-2">{t('providers.ibcSports.tips.live.example.title')}</div>
                <ul className="text-sm text-gray-400 space-y-1">
                  {safeMap(t('providers.ibcSports.tips.live.example.items', { returnObjects: true })).map((item: string, i: number) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-8 border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-white mb-4">{t('providers.ibcSports.tips.value.title')}</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{t('providers.ibcSports.tips.value.desc1')}</p>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">{t('providers.ibcSports.tips.value.desc2')}</p>
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="text-yellow-400 text-xs font-bold uppercase mb-2">{t('providers.ibcSports.tips.value.example.title')}</div>
                <ul className="text-sm text-gray-400 space-y-1">
                  {safeMap(t('providers.ibcSports.tips.value.example.items', { returnObjects: true })).map((item: string, i: number) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-8 border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-white mb-4">{t('providers.ibcSports.tips.bankroll.title')}</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{t('providers.ibcSports.tips.bankroll.desc1')}</p>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">{t('providers.ibcSports.tips.bankroll.desc2')}</p>
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="text-red-400 text-xs font-bold uppercase mb-2">{t('providers.ibcSports.tips.bankroll.example.title')}</div>
                <ul className="text-sm text-gray-400 space-y-1">
                  {safeMap(t('providers.ibcSports.tips.bankroll.example.items', { returnObjects: true })).map((item: string, i: number) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* GETTING STARTED */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{t('providers.ibcSports.gettingStarted.title')}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t('providers.ibcSports.gettingStarted.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {safeMap(t('providers.ibcSports.gettingStarted.steps', { returnObjects: true })).map((step: any, i: number) => (
              <div key={i} className="relative">
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 h-full hover:-translate-y-2 transition-transform duration-300">
                  <div className="text-5xl font-bold text-gray-700 mb-4 opacity-50 absolute top-4 right-4">{i + 1}</div>
                  <h3 className="text-xl font-bold text-blue-400 mb-3 relative z-10">{step.title}</h3>
                  <p className="text-gray-400 text-sm relative z-10">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 z-20">
                    <ChevronRight className="w-6 h-6 text-gray-700" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* MOBILE APP */}
        <section className="bg-blue-600 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[100px] opacity-50"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-700/50 px-4 py-2 rounded-full mb-6 border border-blue-400/30">
                <Smartphone className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-bold">{t('providers.ibcSports.mobile.badge', { defaultValue: 'iOS & Android' })}</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                {t('providers.ibcSports.mobile.title')}
              </h2>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                {t('providers.ibcSports.mobile.p1')}
              </p>
              <p className="text-blue-100 mb-8 leading-relaxed">
                {t('providers.ibcSports.mobile.p2')}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {safeMap(t('providers.ibcSports.mobile.features', { returnObjects: true })).map((feature: string, i: number) => (
                  <div key={i} className="flex items-center gap-2 text-white">
                    <CheckCircle className="w-5 h-5 text-blue-300" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://res.cloudinary.com/dmyocpyxd/image/upload/v1767689372/IBC-Mobile-App-Screenshot.jpg"
                srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_300,f_auto,q_auto/v1767689372/IBC-Mobile-App-Screenshot.jpg 300w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_500,f_auto,q_auto/v1767689372/IBC-Mobile-App-Screenshot.jpg 500w"
                sizes="(max-width: 768px) 100vw, 400px"
                width="400"
                height="500"
                loading="lazy"
                alt="IBC Sports Mobile App"
                className="rounded-3xl shadow-2xl border-4 border-white/20 rotate-3 hover:rotate-0 transition-transform duration-500 max-w-sm w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="text-center py-16">
          <h2 className="text-4xlmd:text-5xl font-bold text-white mb-6">
            {t('providers.ibcSports.finalCta.title')}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            {t('providers.ibcSports.finalCta.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a href={OFFICIAL_DOMAIN} target="_blank" rel="nofollow noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-full transition-all shadow-lg shadow-blue-900/50 text-lg flex items-center gap-2">
              {t('providers.ibcSports.finalCta.start')} <ExternalLink className="w-5 h-5" />
            </a>
            <LocalizedLink to="/guides/sports-betting" className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 font-bold py-4 px-8 rounded-full transition-all">
              {t('providers.ibcSports.finalCta.guide')}
            </LocalizedLink>
            <LocalizedLink to="/guides/cricket-betting" className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 font-bold py-4 px-8 rounded-full transition-all">
              {t('providers.ibcSports.finalCta.cricket')}
            </LocalizedLink>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            {safeMap(t('providers.ibcSports.finalCta.badges', { returnObjects: true })).map((badge: string, i: number) => (
              <div key={i} className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-500" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
};

export default IBCSportsProvider;

