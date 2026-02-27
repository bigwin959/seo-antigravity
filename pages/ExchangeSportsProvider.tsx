import React from 'react';
import { LocalizedLink } from '../components/LocalizedLink';
import { useTranslation, Trans } from 'react-i18next';
import SEO from '../components/SEO';
import { Breadcrumbs } from '../components/Section';
import { OFFICIAL_DOMAIN } from '../constants';
import {
  ExternalLink, CheckCircle, TrendingUp, Users, Shield, Zap,
  Target, Trophy, Activity, ArrowRightLeft, DollarSign, Clock,
  BarChart3, Smartphone, Globe, Star, Award, Flame, ChevronRight
} from 'lucide-react';

// Helper to safely map over translations that might not be arrays
const safeMap = (data: any) => Array.isArray(data) ? data : [];

const ExchangeSportsProvider: React.FC = () => {
  const { t } = useTranslation();

  const schema = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    "name": t('providers.exchangeSports.seo.schema.name'),
    "description": t('providers.exchangeSports.seo.schema.description'),
    "url": `${OFFICIAL_DOMAIN}/providers/exchange-sports`
  };

  return (
    <>
      <SEO metadata={{
        title: t('providers.exchangeSports.seo.title'),
        description: t('providers.exchangeSports.seo.description'),
        keywords: safeMap(t('providers.exchangeSports.seo.keywords', { returnObjects: true })),
        canonicalUrl: `${OFFICIAL_DOMAIN}/providers/exchange-sports`,
        ogType: 'article',
        publishedTime: '2025-01-01T00:00:00+06:00',
        modifiedTime: new Date().toISOString(),
        author: t('brand.name'),
        schema: schema
      }} />

      <Breadcrumbs items={[
        { label: t('nav.providers'), path: '/providers' },
        { label: t('breadcrumbs.exchangeSports'), path: '/providers/exchange-sports' }
      ]} />

      {/* HERO SECTION */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900/30 via-gray-900 to-cyan-900/30 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 px-4 py-2 rounded-full mb-6">
              <ArrowRightLeft className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 text-sm font-bold">{t('providers.exchangeSports.hero.badge')}</span>
            </div>
            <h1
              className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
              dangerouslySetInnerHTML={{ __html: t('providers.exchangeSports.hero.title') }}
            />

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('providers.exchangeSports.hero.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={OFFICIAL_DOMAIN} target="_blank" rel="nofollow noopener noreferrer" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-blue-500/30 flex items-center gap-2">
                {t('providers.exchangeSports.hero.cta.start')} <ExternalLink className="w-5 h-5" />
              </a>
              <LocalizedLink to="/guides/sports-betting" className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-10 rounded-full transition-colors">
                {t('providers.exchangeSports.hero.cta.learn')}
              </LocalizedLink>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {safeMap(t('providers.exchangeSports.hero.stats', { returnObjects: true })).map((stat: any, i: number) => {
              const Icon = [TrendingUp, Users, ArrowRightLeft, DollarSign][i];
              return (
                <div key={i} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center">
                  <Icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
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
              <h2 className="text-4xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-6">
                {t('providers.exchangeSports.intro.title')}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {t('providers.exchangeSports.intro.p1')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                {t('providers.exchangeSports.intro.p2')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                {t('providers.exchangeSports.intro.p3')}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t('providers.exchangeSports.intro.p4')}
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>
              <img
                src="https://res.cloudinary.com/dmyocpyxd/image/upload/v1767689369/Exchange-Sports-Provider--Platform-Screenshot.jpg"
                srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_300,f_auto,q_auto/v1767689369/Exchange-Sports-Provider--Platform-Screenshot.jpg 300w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_600,f_auto,q_auto/v1767689369/Exchange-Sports-Provider--Platform-Screenshot.jpg 600w"
                sizes="(max-width: 768px) 100vw, 600px"
                width="600"
                height="400"
                loading="lazy"
                alt="Exchange Sports Betting Platform"
                className="relative z-10 rounded-2xl shadow-2xl border border-gray-700 w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* KEY FEATURES */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{t('providers.exchangeSports.features.title')}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t('providers.exchangeSports.features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Back & Lay Betting */}
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-600/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <ArrowRightLeft className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t('providers.exchangeSports.features.backLay.title')}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('providers.exchangeSports.features.backLay.desc1')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('providers.exchangeSports.features.backLay.desc2')}
              </p>
              <div className="bg-gray-900/50 rounded-xl p-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-blue-400 font-bold mb-2">{t('providers.exchangeSports.features.backLay.back.title')}</div>
                    <ul className="space-y-1 text-sm text-gray-400">
                      {safeMap(t('providers.exchangeSports.features.backLay.back.items', { returnObjects: true })).map((item: string, i: number) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-pink-400 font-bold mb-2">{t('providers.exchangeSports.features.backLay.lay.title')}</div>
                    <ul className="space-y-1 text-sm text-gray-400">
                      {safeMap(t('providers.exchangeSports.features.backLay.lay.items', { returnObjects: true })).map((item: string, i: number) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Better Odds */}
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-600/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t('providers.exchangeSports.features.odds.title')}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('providers.exchangeSports.features.odds.desc1')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('providers.exchangeSports.features.odds.desc2')}
              </p>
              <div className="bg-gray-900/50 rounded-xl p-4 mt-4">
                <div className="text-sm text-gray-400 mb-3">{t('providers.exchangeSports.features.odds.example.title')}</div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{t('providers.exchangeSports.features.odds.example.traditional')}:</span>
                    <span className="text-red-400 font-bold">1.85</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">{t('providers.exchangeSports.features.odds.example.exchange')}:</span>
                    <span className="text-green-400 font-bold">2.05</span>
                  </div>
                  <div className="border-t border-gray-700 pt-2 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold">{t('providers.exchangeSports.features.odds.example.value')}:</span>
                      <span className="text-blue-400 font-bold">+10.8%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trading & Cash Out */}
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-600/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t('providers.exchangeSports.features.trading.title')}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('providers.exchangeSports.features.trading.desc1')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('providers.exchangeSports.features.trading.desc2')}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t('providers.exchangeSports.features.trading.desc3')}
              </p>
            </div>

            {/* Market Depth */}
            <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-600/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <Activity className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t('providers.exchangeSports.features.liquidity.title')}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('providers.exchangeSports.features.liquidity.desc1')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('providers.exchangeSports.features.liquidity.desc2')}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t('providers.exchangeSports.features.liquidity.desc3')}
              </p>
            </div>
          </div>
        </section>

        {/* SPORTS COVERAGE */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{t('providers.exchangeSports.sports.title')}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t('providers.exchangeSports.sports.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {safeMap(t('providers.exchangeSports.sports.items', { returnObjects: true })).map((sport: any, i: number) => {
              const Icon = [Trophy, Target, Activity, Flame, Zap, Globe][i];
              const colors = [
                { t: 'text-blue-400', bg: 'bg-blue-500/20', btc: 'text-blue-300' },
                { t: 'text-green-400', bg: 'bg-green-500/20', btc: 'text-green-300' },
                { t: 'text-yellow-400', bg: 'bg-yellow-500/20', btc: 'text-yellow-300' },
                { t: 'text-orange-400', bg: 'bg-orange-500/20', btc: 'text-orange-300' },
                { t: 'text-purple-400', bg: 'bg-purple-500/20', btc: 'text-purple-300' },
                { t: 'text-cyan-400', bg: 'bg-cyan-500/20', btc: 'text-cyan-300' }
              ][i];

              return (
                <div key={i} className={`bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all`}>
                  <Icon className={`w-12 h-12 ${colors.t} mb-4`} />
                  <h3 className="text-xl font-bold text-white mb-3">{sport.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {sport.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {safeMap(sport.tags).map((tag: string, j: number) => (
                      <span key={j} className={`px-2 py-1 ${colors.bg} ${colors.btc} rounded text-xs`}>{tag}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{t('providers.exchangeSports.howItWorks.title')}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t('providers.exchangeSports.howItWorks.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {safeMap(t('providers.exchangeSports.howItWorks.steps', { returnObjects: true })).map((step: any, i: number) => {
              const Icon = [Target, ArrowRightLeft, CheckCircle, DollarSign][i];
              return (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-500/50">
                    <span className="text-2xl font-bold text-blue-400">{i + 1}</span>
                  </div>
                  <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-400" />
              {t('providers.exchangeSports.howItWorks.commission.title')}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {safeMap(t('providers.exchangeSports.howItWorks.commission.items', { returnObjects: true })).map((item: any, i: number) => {
                const color = ['text-blue-400', 'text-green-400', 'text-purple-400'][i];
                return (
                  <div key={i}>
                    <div className={`text-3xl font-bold ${color} mb-2`}>{item.value}</div>
                    <div className="text-sm text-gray-400">{item.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ADVANTAGES */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{t('providers.exchangeSports.advantages.title')}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t('providers.exchangeSports.advantages.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safeMap(t('providers.exchangeSports.advantages.items', { returnObjects: true })).map((item: any, i: number) => {
              const Icon = [TrendingUp, ArrowRightLeft, BarChart3, DollarSign, Users, Activity, Clock, Shield, Smartphone][i];
              return (
                <div key={i} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all">
                  <Icon className="w-10 h-10 text-blue-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* BETTING STRATEGIES */}
        <section className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-600/30 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{t('providers.exchangeSports.strategies.title')}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t('providers.exchangeSports.strategies.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-400" />
                {t('providers.exchangeSports.strategies.greening.title')}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {t('providers.exchangeSports.strategies.greening.desc')}
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-purple-400" />
                {t('providers.exchangeSports.strategies.dutching.title')}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {t('providers.exchangeSports.strategies.dutching.desc')}
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Flame className="w-6 h-6 text-orange-400" />
                {t('providers.exchangeSports.strategies.scalping.title')}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {t('providers.exchangeSports.strategies.scalping.desc')}
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <ChevronRight className="w-6 h-6 text-cyan-400" />
                {t('providers.exchangeSports.strategies.swing.title')}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {t('providers.exchangeSports.strategies.swing.desc')}
              </p>
            </div>
          </div>
        </section>

        {/* FOR BEGINNERS */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{t('providers.exchangeSports.beginner.title')}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t('providers.exchangeSports.beginner.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">{t('providers.exchangeSports.beginner.interface.title')}</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-blue-400 font-bold">B</div>
                  </div>
                  <div>
                    <div className="font-bold text-white mb-1">{t('providers.exchangeSports.beginner.interface.back.title')}</div>
                    <p className="text-gray-400 text-sm">{t('providers.exchangeSports.beginner.interface.back.desc')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-pink-400 font-bold">L</div>
                  </div>
                  <div>
                    <div className="font-bold text-white mb-1">{t('providers.exchangeSports.beginner.interface.lay.title')}</div>
                    <p className="text-gray-400 text-sm">{t('providers.exchangeSports.beginner.interface.lay.desc')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-green-400 font-bold">$</div>
                  </div>
                  <div>
                    <div className="font-bold text-white mb-1">{t('providers.exchangeSports.beginner.interface.liquidity.title')}</div>
                    <p className="text-gray-400 text-sm">{t('providers.exchangeSports.beginner.interface.liquidity.desc')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">{t('providers.exchangeSports.beginner.tips.title')}</h3>
              <div className="space-y-3">
                {safeMap(t('providers.exchangeSports.beginner.tips.items', { returnObjects: true })).map((tip: string, i: number) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-yellow-400" />
              {t('providers.exchangeSports.beginner.reminders.title')}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {safeMap(t('providers.exchangeSports.beginner.reminders.items', { returnObjects: true })).map((reminder: string, i: number) => (
                <div key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0 mt-2"></div>
                  <span>{reminder}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{t('providers.exchangeSports.comparison.title')}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t('providers.exchangeSports.comparison.subtitle')}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-4 text-gray-400 font-semibold">{t('providers.exchangeSports.comparison.table.headers.feature')}</th>
                  <th className="text-center py-4 px-4 text-blue-400 font-semibold">{t('providers.exchangeSports.comparison.table.headers.exchange')}</th>
                  <th className="text-center py-4 px-4 text-gray-400 font-semibold">{t('providers.exchangeSports.comparison.table.headers.traditional')}</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {safeMap(t('providers.exchangeSports.comparison.table.rows', { returnObjects: true })).map((row: any, i: number) => (
                  <tr key={i} className="border-b border-gray-800">
                    <td className="py-4 px-4 text-white font-medium">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-green-400">{row.exchange}</td>
                    <td className="py-4 px-4 text-center text-gray-500">{row.traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-4">
              {t('providers.exchangeSports.comparison.cta.text')}
            </p>
            <a href={OFFICIAL_DOMAIN} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-3 px-8 rounded-full transition-all">
              {t('providers.exchangeSports.comparison.cta.button')} <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* MOBILE & TECHNOLOGY */}
        <section>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">{t('providers.exchangeSports.mobile.title')}</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                {t('providers.exchangeSports.mobile.p1')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                {t('providers.exchangeSports.mobile.p2')}
              </p>
              <div className="space-y-3">
                {safeMap(t('providers.exchangeSports.mobile.features', { returnObjects: true })).map((item: string, i: number) => {
                  const Icon = [Smartphone, Zap, BarChart3, Clock, Target, Shield][i];
                  return (
                    <div key={i} className="flex items-center gap-3 text-gray-300">
                      <Icon className="w-5 h-5 text-blue-400" />
                      <span>{item}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>
              <img
                src="https://res.cloudinary.com/dmyocpyxd/image/upload/v1767689368/Exchange-Sports-Provider--Mobile-App-Screenshot.jpg"
                srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_300,f_auto,q_auto/v1767689368/Exchange-Sports-Provider--Mobile-App-Screenshot.jpg 300w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_500,f_auto,q_auto/v1767689368/Exchange-Sports-Provider--Mobile-App-Screenshot.jpg 500w"
                sizes="(max-width: 768px) 100vw, 500px"
                width="500"
                height="400"
                loading="lazy"
                alt="Exchange Sports Mobile App"
                className="relative z-10 rounded-2xl shadow-2xl border border-gray-700 w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="text-center py-16 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-600/30 rounded-2xl">
          <h2 className="text-4xl font-bold text-white mb-6">{t('providers.exchangeSports.finalCta.title')}</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            {t('providers.exchangeSports.finalCta.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href={OFFICIAL_DOMAIN} target="_blank" rel="nofollow noopener noreferrer" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-blue-500/30 flex items-center gap-2">
              {t('providers.exchangeSports.finalCta.start')} <ExternalLink className="w-5 h-5" />
            </a>
            <LocalizedLink to="/guides/sports-betting" className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-10 rounded-full transition-colors">
              {t('providers.exchangeSports.finalCta.learn')}
            </LocalizedLink>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            {safeMap(t('providers.exchangeSports.finalCta.badges', { returnObjects: true })).map((badge: string, i: number) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
};

export default ExchangeSportsProvider;

