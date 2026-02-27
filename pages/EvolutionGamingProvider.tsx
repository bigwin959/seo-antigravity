import React from 'react';
import { LocalizedLink } from '../components/LocalizedLink';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { Breadcrumbs } from '../components/Section';
import { OFFICIAL_DOMAIN } from '../constants';
import {
  Video,
  Users,
  Trophy,
  Sparkles,
  Globe,
  Award,
  Zap,
  Crown,
  Gamepad2,
  MonitorPlay,
  Camera,
  Mic,
  Shield,
  Rocket,
  TrendingUp,
  CheckCircle2,
  Play,
  DollarSign,
  Lightbulb,
  Target,
  BadgeCheck
} from 'lucide-react';

// Helper to safely map over translations that might not be arrays
const safeMap = (data: any) => Array.isArray(data) ? data : [];

const EvolutionGamingProvider: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        metadata={{
          title: t('providers.evolution.seo.title'),
          description: t('providers.evolution.seo.description'),
          keywords: safeMap(t('providers.evolution.seo.keywords', { returnObjects: true })),
          canonicalUrl: `${OFFICIAL_DOMAIN}/providers/evolution-gaming`,
          ogType: 'article',
          publishedTime: '2025-01-01T00:00:00+06:00',
          modifiedTime: new Date().toISOString(),
          author: t('brand.name'),
          schema: {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t('providers.evolution.seo.headline'),
            "description": t('providers.evolution.seo.description'),
            "articleBody": t('providers.evolution.seo.articleBody'),
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
              "@id": `${OFFICIAL_DOMAIN}/providers/evolution-gaming`
            }
          }
        }}
      />

      <Breadcrumbs items={[
        { label: t('breadcrumbs.guides'), path: '/guides' },
        { label: t('breadcrumbs.liveCasino'), path: '/guides/live-casino' },
        { label: t('breadcrumbs.evolution'), path: '/providers/evolution-gaming' }
      ]} />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-red-900 via-gray-900 to-black py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-brand/20 border border-brand/30 px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4 text-brand" />
              <span className="text-brand text-sm font-semibold">{t('providers.evolution.hero.badge')}</span>
            </div>

            <h1
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              dangerouslySetInnerHTML={{ __html: t('providers.evolution.hero.title') }}
            />

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('providers.evolution.hero.subtitle')}
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-10">
              {safeMap(t('providers.evolution.hero.features', { returnObjects: true })).map((feature: string, index: number) => {
                const Icon = [Trophy, Video, Sparkles, Globe][index];
                return (
                  <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20">
                    <Icon className={`w-5 h-5 ${index === 0 ? 'text-yellow-400' : 'text-brand'}`} />
                    <span className="text-white text-sm font-medium">{feature}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">{t('providers.evolution.intro.title')}</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  {t('providers.evolution.intro.desc1')}
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {t('providers.evolution.intro.desc2')}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {t('providers.evolution.intro.desc3')}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-brand/10 to-red-900/10 border border-brand/30 p-6 rounded-xl">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-brand" />
                  {t('providers.evolution.intro.factsbox.title')}
                </h3>
                <ul className="space-y-3 text-gray-300 text-sm">
                  {safeMap(t('providers.evolution.intro.factsbox.items', { returnObjects: true })).map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-900/20 border border-blue-600/30 p-5 rounded-xl">
                <h3 className="text-white font-bold mb-3">{t('providers.evolution.intro.awardsbox.title')}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  {t('providers.evolution.intro.awardsbox.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE GAMES - EXPANDED */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('providers.evolution.signature.title')}</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              {t('providers.evolution.signature.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cards Mapping */}
            {[
              { key: 'lightning', icon: Zap, color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
              { key: 'shows', icon: Sparkles, color: 'text-purple-400', bg: 'bg-purple-500/10' },
              { key: 'classic', icon: Crown, color: 'text-red-400', bg: 'bg-red-500/10' },
              { key: 'firstPerson', icon: Gamepad2, color: 'text-blue-400', bg: 'bg-blue-500/10' },
              { key: 'vip', icon: Trophy, color: 'text-green-400', bg: 'bg-green-500/10' },
              { key: 'asian', icon: Globe, color: 'text-orange-400', bg: 'bg-orange-500/10' }
            ].map(({ key, icon: Icon, color, bg }) => (
              <div key={key} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-brand/50 transition-colors">
                <div className={`w-14 h-14 ${bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-7 h-7 ${color}`} />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{t(`providers.evolution.signature.cards.${key}.title`)}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed h-16 overflow-hidden">
                  {t(`providers.evolution.signature.cards.${key}.desc`)}
                </p>
                <ul className="text-gray-400 text-sm space-y-2">
                  {safeMap(t(`providers.evolution.signature.cards.${key}.items`, { returnObjects: true })).map((item: string, i: number) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: STRATEGIES SECTION */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">{t('providers.evolution.strategies.title')}</h2>
            <p className="text-gray-400">{t('providers.evolution.strategies.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {['roulette', 'shows', 'blackjack'].map((strat) => (
              <div key={strat} className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:bg-gray-800 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  {strat === 'roulette' && <Target className="w-6 h-6 text-red-500" />}
                  {strat === 'shows' && <Lightbulb className="w-6 h-6 text-yellow-500" />}
                  {strat === 'blackjack' && <Shield className="w-6 h-6 text-blue-500" />}
                  <h3 className="text-white font-bold text-lg">{t(`providers.evolution.strategies.${strat}.title`)}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed min-h-[60px]">
                  {t(`providers.evolution.strategies.${strat}.desc`)}
                </p>
                <div className="bg-black/20 rounded-lg p-3">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Pro Tips</p>
                  <ul className="space-y-2">
                    {safeMap(t(`providers.evolution.strategies.${strat}.tips`, { returnObjects: true })).map((tip: string, i: number) => (
                      <li key={i} className="text-xs text-gray-400 flex gap-2">
                        <span className="text-brand">•</span> {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY & FEATURES */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('providers.evolution.tech.title')}</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              {t('providers.evolution.tech.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Camera, color: 'text-blue-400', bg: 'bg-blue-500/10' },
              { icon: MonitorPlay, color: 'text-green-400', bg: 'bg-green-500/10' },
              { icon: Mic, color: 'text-purple-400', bg: 'bg-purple-500/10' },
              { icon: Shield, color: 'text-red-400', bg: 'bg-red-500/10' }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 ${item.bg} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{t(`providers.evolution.tech.items.${index}.title`)}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t(`providers.evolution.tech.items.${index}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR GAMES SHOWCASE */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('providers.evolution.popular.title')}</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              {t('providers.evolution.popular.subtitle')}
            </p>
          </div>

          <div className="space-y-8">
            {/* Crazy Time */}
            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-600/30 rounded-2xl p-8 transform hover:-translate-y-1 transition-transform">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <h3 className="text-3xl font-bold text-white mb-4">{t('providers.evolution.popular.crazyTime.title')}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {t('providers.evolution.popular.crazyTime.desc')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {safeMap(t('providers.evolution.popular.crazyTime.tags', { returnObjects: true })).map((tag: string, i: number) => (
                      <span key={i} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-900/50 animate-pulse">
                    <Sparkles className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Lightning Roulette */}
            <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-600/30 rounded-2xl p-8 transform hover:-translate-y-1 transition-transform">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <h3 className="text-3xl font-bold text-white mb-4">{t('providers.evolution.popular.lightningRoulette.title')}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {t('providers.evolution.popular.lightningRoulette.desc')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {safeMap(t('providers.evolution.popular.lightningRoulette.tags', { returnObjects: true })).map((tag: string, i: number) => (
                      <span key={i} className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-orange-900/50">
                    <Zap className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Monopoly Live */}
            <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-600/30 rounded-2xl p-8 transform hover:-translate-y-1 transition-transform">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <h3 className="text-3xl font-bold text-white mb-4">{t('providers.evolution.popular.monopoly.title')}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {t('providers.evolution.popular.monopoly.desc')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {safeMap(t('providers.evolution.popular.monopoly.tags', { returnObjects: true })).map((tag: string, i: number) => (
                      <span key={i} className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-green-900/50">
                    <Crown className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE EVOLUTION */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('providers.evolution.why.title')}</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              {t('providers.evolution.why.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[Rocket, Users, Globe, Award, Shield, TrendingUp].map((Icon, idx) => (
              <div key={idx} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:bg-gray-800 transition-colors">
                <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{t(`providers.evolution.why.items.${idx}.title`)}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t(`providers.evolution.why.items.${idx}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-brand/10 to-red-500/10 border border-brand/30 p-8 md:p-12 rounded-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('providers.evolution.cta.title')}
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              {t('providers.evolution.cta.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <LocalizedLink
                to="/guides/live-casino"
                className="inline-flex items-center gap-2 bg-brand hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
              >
                <Play className="w-5 h-5" />
                {t('providers.evolution.cta.guide')}
              </LocalizedLink>
              <LocalizedLink
                to="/"
                className="inline-flex items-center gap-2 border-2 border-brand text-brand hover:bg-brand hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
              >
                <DollarSign className="w-5 h-5" />
                {t('providers.evolution.cta.home')}
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EvolutionGamingProvider;

