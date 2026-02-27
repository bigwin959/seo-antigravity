import React from 'react';
import { LocalizedLink } from '../components/LocalizedLink';
import SEO from '../components/SEO';
import { Breadcrumbs } from '../components/Section';
import { LOGO_URL } from '../constants';
import { useTranslation } from 'react-i18next';
import {
  Video,
  Users,
  Globe,
  Crown,
  Star,
  TrendingUp,
  CheckCircle2,
  Play,
  Gamepad2,
  MonitorPlay,
  Shield,
  Clock,
  Target,
  BadgeCheck,
  Heart,
  DollarSign,
  Sparkles,
  Smartphone,
  Camera,
  Mic,
  Eye,
  Spade,
  Dices
} from 'lucide-react';

const safeMap = (data: any) => Array.isArray(data) ? data : [];

const SexyGamingProvider: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        metadata={{
          title: t('sexyGaming.seo.title'),
          description: t('sexyGaming.seo.description'),
          keywords: safeMap(t('sexyGaming.seo.keywords', { returnObjects: true })),
          canonicalUrl: "https://bigwinofficial.com/providers/sexy-gaming",
          ogType: 'article',
          publishedTime: '2025-01-01T00:00:00+06:00',
          modifiedTime: new Date().toISOString(),
          author: 'Bigwin959 Guide',
          schema: {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t('sexyGaming.seo.title'),
            "description": t('sexyGaming.seo.description'),
            "author": {
              "@type": "Organization",
              "name": "Bigwin959 Guide"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Bigwin959 Guide",
              "logo": {
                "@type": "ImageObject",
                "url": LOGO_URL
              }
            },
            "datePublished": "2025-01-01",
            "dateModified": new Date().toISOString(),
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://bigwinofficial.com/providers/sexy-gaming"
            }
          }
        }}
      />

      <Breadcrumbs items={[
        { label: t('nav.guides'), path: '/guides' },
        { label: t('nav.liveCasino'), path: '/guides/live-casino' },
        { label: t('breadcrumbs.sexyGaming'), path: '/providers/sexy-gaming' }
      ]} />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-pink-900 via-purple-900 to-black py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc9LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-pink-500/20 border border-pink-500/30 px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4 text-pink-400" />
              <span className="text-pink-400 text-sm font-semibold">{t('sexyGaming.hero.badge')}</span>
            </div>

            <h1
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              dangerouslySetInnerHTML={{ __html: t('sexyGaming.hero.title') }}
            />

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('sexyGaming.hero.subtitle')}
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-10">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20">
                <Star className="w-5 h-5 text-pink-400" />
                <span className="text-white text-sm font-medium">{t('sexyGaming.hero.features.premium')}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20">
                <Video className="w-5 h-5 text-pink-400" />
                <span className="text-white text-sm font-medium">{t('sexyGaming.hero.features.streaming')}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20">
                <Users className="w-5 h-5 text-pink-400" />
                <span className="text-white text-sm font-medium">{t('sexyGaming.hero.features.dealers')}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20">
                <Shield className="w-5 h-5 text-pink-400" />
                <span className="text-white text-sm font-medium">{t('sexyGaming.hero.features.secure')}</span>
              </div>
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
                <h2 className="text-3xl font-bold text-white mb-6">{t('sexyGaming.intro.title')}</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  {t('sexyGaming.intro.p1')}
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {t('sexyGaming.intro.p2')}
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {t('sexyGaming.intro.p3')}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {t('sexyGaming.intro.p4')}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30 p-6 rounded-xl">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-pink-400" />
                  {t('sexyGaming.intro.highlights.title')}
                </h3>
                <ul className="space-y-3 text-gray-300 text-sm">
                  {safeMap(t('sexyGaming.intro.highlights.items', { returnObjects: true })).map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-pink-900/20 border border-pink-600/30 p-5 rounded-xl">
                <h3 className="text-white font-bold mb-3">{t('sexyGaming.intro.entertainment.title')}</h3>
                <p className="text-pink-200 text-sm leading-relaxed">
                  {t('sexyGaming.intro.entertainment.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GAME PORTFOLIO */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('sexyGaming.portfolio.title')}</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              {t('sexyGaming.portfolio.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sexy Baccarat */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-pink-500/50 transition-colors">
              <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-4">
                <Spade className="w-7 h-7 text-red-400" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{t('sexyGaming.portfolio.baccarat.title')}</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {t('sexyGaming.portfolio.baccarat.desc')}
              </p>
              <ul className="text-gray-400 text-sm space-y-2">
                {safeMap(t('sexyGaming.portfolio.baccarat.features', { returnObjects: true })).map((feature: string, index: number) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>

            {/* Sexy Roulette */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-pink-500/50 transition-colors">
              <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{t('sexyGaming.portfolio.roulette.title')}</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {t('sexyGaming.portfolio.roulette.desc')}
              </p>
              <ul className="text-gray-400 text-sm space-y-2">
                {safeMap(t('sexyGaming.portfolio.roulette.features', { returnObjects: true })).map((feature: string, index: number) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>

            {/* Sexy Blackjack */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-pink-500/50 transition-colors">
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                <Gamepad2 className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{t('sexyGaming.portfolio.blackjack.title')}</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {t('sexyGaming.portfolio.blackjack.desc')}
              </p>
              <ul className="text-gray-400 text-sm space-y-2">
                {safeMap(t('sexyGaming.portfolio.blackjack.features', { returnObjects: true })).map((feature: string, index: number) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>

            {/* Dragon Tiger */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-pink-500/50 transition-colors">
              <div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-4">
                <Crown className="w-7 h-7 text-yellow-400" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{t('sexyGaming.portfolio.dragonTiger.title')}</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {t('sexyGaming.portfolio.dragonTiger.desc')}
              </p>
              <ul className="text-gray-400 text-sm space-y-2">
                {safeMap(t('sexyGaming.portfolio.dragonTiger.features', { returnObjects: true })).map((feature: string, index: number) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>

            {/* Sic Bo */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-pink-500/50 transition-colors">
              <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                <Dices className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{t('sexyGaming.portfolio.sicBo.title')}</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {t('sexyGaming.portfolio.sicBo.desc')}
              </p>
              <ul className="text-gray-400 text-sm space-y-2">
                {safeMap(t('sexyGaming.portfolio.sicBo.features', { returnObjects: true })).map((feature: string, index: number) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>

            {/* Other Games */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-pink-500/50 transition-colors">
              <div className="w-14 h-14 bg-pink-500/10 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-7 h-7 text-pink-400" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{t('sexyGaming.portfolio.additional.title')}</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {t('sexyGaming.portfolio.additional.desc')}
              </p>
              <ul className="text-gray-400 text-sm space-y-2">
                {safeMap(t('sexyGaming.portfolio.additional.features', { returnObjects: true })).map((feature: string, index: number) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE FEATURES */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('sexyGaming.features.title')}</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              {t('sexyGaming.features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Multi-Table View */}
            <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-600/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                  <MonitorPlay className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t('sexyGaming.features.multiTable.title')}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('sexyGaming.features.multiTable.desc')}
              </p>
              <ul className="text-gray-300 space-y-2 text-sm">
                {safeMap(t('sexyGaming.features.multiTable.items', { returnObjects: true })).map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Roadmap & Statistics */}
            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-600/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t('sexyGaming.features.stats.title')}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('sexyGaming.features.stats.desc')}
              </p>
              <ul className="text-gray-300 space-y-2 text-sm">
                {safeMap(t('sexyGaming.features.stats.items', { returnObjects: true })).map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bet Behind */}
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-600/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t('sexyGaming.features.betBehind.title')}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('sexyGaming.features.betBehind.desc')}
              </p>
              <ul className="text-gray-300 space-y-2 text-sm">
                {safeMap(t('sexyGaming.features.betBehind.items', { returnObjects: true })).map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* VIP Program */}
            <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-600/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <Crown className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t('sexyGaming.features.vip.title')}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('sexyGaming.features.vip.desc')}
              </p>
              <ul className="text-gray-300 space-y-2 text-sm">
                {safeMap(t('sexyGaming.features.vip.items', { returnObjects: true })).map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY & FEATURES */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('sexyGaming.technology.title')}</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              {t('sexyGaming.technology.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Camera className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{t('sexyGaming.technology.streaming.title')}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t('sexyGaming.technology.streaming.desc')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Smartphone className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{t('sexyGaming.technology.mobile.title')}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t('sexyGaming.technology.mobile.desc')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Mic className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{t('sexyGaming.technology.interaction.title')}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t('sexyGaming.technology.interaction.desc')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{t('sexyGaming.technology.security.title')}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t('sexyGaming.technology.security.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SEXY GAMING */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('sexyGaming.whyChoose.title')}</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              {t('sexyGaming.whyChoose.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{t('sexyGaming.whyChoose.attractive.title')}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t('sexyGaming.whyChoose.attractive.desc')}
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{t('sexyGaming.whyChoose.quality.title')}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t('sexyGaming.whyChoose.quality.desc')}
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-4">
                <Video className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{t('sexyGaming.whyChoose.streaming.title')}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t('sexyGaming.whyChoose.streaming.desc')}
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{t('sexyGaming.whyChoose.asian.title')}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t('sexyGaming.whyChoose.asian.desc')}
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{t('sexyGaming.whyChoose.availability.title')}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t('sexyGaming.whyChoose.availability.desc')}
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{t('sexyGaming.whyChoose.mobile.title')}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t('sexyGaming.whyChoose.mobile.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PLAYER EXPERIENCE */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('sexyGaming.experience.title')}</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              {t('sexyGaming.experience.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-600/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Eye className="w-6 h-6 text-pink-400" />
                {t('sexyGaming.experience.visual.title')}
              </h3>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  {t('sexyGaming.experience.visual.desc')}
                </p>
                <ul className="text-gray-300 space-y-2 text-sm">
                  {safeMap(t('sexyGaming.experience.visual.items', { returnObjects: true })).map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-600/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Gamepad2 className="w-6 h-6 text-purple-400" />
                {t('sexyGaming.experience.gameplay.title')}
              </h3>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  {t('sexyGaming.experience.gameplay.desc')}
                </p>
                <ul className="text-gray-300 space-y-2 text-sm">
                  {safeMap(t('sexyGaming.experience.gameplay.items', { returnObjects: true })).map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gray-900/50 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <MonitorPlay className="w-6 h-6 text-pink-400" />
              {t('sexyGaming.experience.studio.title')}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-semibold mb-3">{t('sexyGaming.experience.studio.env.title')}</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {t('sexyGaming.experience.studio.env.desc')}
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">{t('sexyGaming.experience.studio.training.title')}</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {t('sexyGaming.experience.studio.training.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30 p-8 md:p-12 rounded-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('sexyGaming.cta.title')}
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              {t('sexyGaming.cta.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <LocalizedLink
                to="/guides/live-casino"
                className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
              >
                <Play className="w-5 h-5" />
                {t('sexyGaming.cta.guide')}
              </LocalizedLink>
              <LocalizedLink
                to="/"
                className="inline-flex items-center gap-2 border-2 border-pink-600 text-pink-400 hover:bg-pink-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
              >
                <DollarSign className="w-5 h-5" />
                {t('sexyGaming.cta.play')}
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SexyGamingProvider;

