import React from 'react';
import { useTranslation } from 'react-i18next';
import { LocalizedLink } from '../components/LocalizedLink';
import SEO from '../components/SEO';
import { SITE_URL } from '../constants';
import { Breadcrumbs } from '../components/Section';
import {
  Users,
  Video,
  Target,
  Dices,
  Spade,
  Diamond,
  Club,
  Eye,
  Clock,
  Shield,
  Zap,
  Crown,
  Activity,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  Headphones,
  Globe,
  Smartphone,
  Wifi,
  DollarSign,
  Volume2,
  Award,
  Sparkles,
  MonitorPlay,
  Gamepad2,
  Trophy,
  BadgeCheck,
  Lightbulb,
  BookOpen,
  MessageCircle,
  Settings
} from 'lucide-react';

const LiveCasinoGuide: React.FC = () => {
  const { t } = useTranslation();
  const dosItems = t('liveCasinoGuide.responsible.dos.items', { returnObjects: true }) as string[];
  const dontsItems = t('liveCasinoGuide.responsible.donts.items', { returnObjects: true }) as string[];
  return (
    <>
      <SEO
        metadata={{
          title: t('liveCasinoGuide.seo.title'),
          description: t('liveCasinoGuide.seo.description'),
          keywords: t('liveCasinoGuide.seo.keywords', { returnObjects: true }) as string[] || ["live casino guide", "live dealer games", "baccarat rules", "blackjack strategy", "roulette guide", "evolution gaming", "sa gaming"],
          canonicalUrl: `${SITE_URL}/guides/live-casino`,
          ogType: 'article',
          publishedTime: '2025-01-01T00:00:00+06:00',
          modifiedTime: new Date().toISOString(),
          author: 'Bigwin959 Guide',
          schema: {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t('liveCasinoGuide.seo.headline'),
            "description": t('liveCasinoGuide.seo.description'),
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
              "@id": "https://bigwinofficial.com/guides/live-casino"
            }
          }
        }}
      />

      <Breadcrumbs items={[
        { label: 'Guides', path: '/guides' },
        { label: 'Live Casino Guide', path: '/guides/live-casino' }
      ]} />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-red-900 via-gray-900 to-gray-950 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand/20 border border-brand/30 px-4 py-2 rounded-full mb-6">
            <MonitorPlay className="w-4 h-4 text-brand" />
            <span className="text-brand text-sm font-semibold">{t('liveCasinoGuide.hero.badge')}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t('liveCasinoGuide.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('liveCasinoGuide.hero.subtitle')}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20">
              <Video className="w-5 h-5 text-brand" />
              <span className="text-white text-sm font-medium">{t('liveCasinoGuide.hero.features.streaming')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20">
              <Users className="w-5 h-5 text-brand" />
              <span className="text-white text-sm font-medium">{t('liveCasinoGuide.hero.features.dealers')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20">
              <Shield className="w-5 h-5 text-brand" />
              <span className="text-white text-sm font-medium">{t('liveCasinoGuide.hero.features.fair')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20">
              <Globe className="w-5 h-5 text-brand" />
              <span className="text-white text-sm font-medium">{t('liveCasinoGuide.hero.features.available')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">{t('liveCasinoGuide.intro.title')}</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  {t('liveCasinoGuide.intro.p1')}
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {t('liveCasinoGuide.intro.p2')}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {t('liveCasinoGuide.intro.p3')}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-brand/10 to-red-900/10 border border-brand/30 p-6 rounded-xl">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-brand" />
                  {t('liveCasinoGuide.whyChoose.title')}
                </h3>
                <ul className="space-y-3 text-gray-300 text-sm">
                  {(t('liveCasinoGuide.whyChoose.items', { returnObjects: true }) as string[]).map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-900/20 border border-blue-600/30 p-5 rounded-xl">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-blue-300 font-semibold mb-2">{t('liveCasinoGuide.disclaimer.title')}</p>
                    <p className="text-blue-200 text-sm leading-relaxed">
                      {t('liveCasinoGuide.disclaimer.text')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE CASINO PROVIDERS */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('liveCasinoGuide.providers.title')}</h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              {t('liveCasinoGuide.providers.desc')}
            </p>
          </div>

          <div className="space-y-8">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Evolution Gaming */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-brand/50 transition-all hover:shadow-lg hover:shadow-brand/10 flex flex-col">
                <div className="p-6 flex flex-col flex-grow">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto overflow-hidden border border-red-500/20">
                    <img
                      src="https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto/v1767000385/bigwin959/providers/evolution.png"
                      alt="Evolution Gaming Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3 text-center">{t('liveCasinoGuide.providers.evolution.name')}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed text-center">
                    {t('liveCasinoGuide.providers.evolution.desc')}
                  </p>
                  <div className="space-y-2 text-gray-400 text-sm mb-5 flex-grow">
                    <p><strong className="text-white">{t('liveCasinoGuide.providers.evolution.specialties.label')}</strong> {t('liveCasinoGuide.providers.evolution.specialties.value')}</p>
                    <p><strong className="text-white">{t('liveCasinoGuide.providers.evolution.popular.label')}</strong> {t('liveCasinoGuide.providers.evolution.popular.value')}</p>
                    <p><strong className="text-white">{t('liveCasinoGuide.providers.evolution.studios.label')}</strong> {t('liveCasinoGuide.providers.evolution.studios.value')}</p>
                  </div>
                  <div className="text-center pt-4 border-t border-gray-700 mt-auto">
                    <LocalizedLink
                      to="/providers/evolution-gaming"
                      className="inline-flex items-center gap-2 bg-brand hover:bg-red-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                    >
                      <BookOpen className="w-4 h-4" />
                      {t('liveCasinoGuide.providers.learnMore')}
                    </LocalizedLink>
                  </div>
                </div>
              </div>

              {/* SA Gaming */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-brand/50 transition-all hover:shadow-lg hover:shadow-brand/10 flex flex-col">
                <div className="p-6 flex flex-col flex-grow">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto overflow-hidden border border-blue-500/20">
                    <img
                      src="https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto/v1767000391/bigwin959/providers/sa.png"
                      alt="SA Gaming Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3 text-center">{t('liveCasinoGuide.providers.sa.name')}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed text-center">
                    {t('liveCasinoGuide.providers.sa.desc')}
                  </p>
                  <div className="space-y-2 text-gray-400 text-sm mb-5 flex-grow">
                    <p><strong className="text-white">{t('liveCasinoGuide.providers.sa.specialties.label')}</strong> {t('liveCasinoGuide.providers.sa.specialties.value')}</p>
                    <p><strong className="text-white">{t('liveCasinoGuide.providers.sa.popular.label')}</strong> {t('liveCasinoGuide.providers.sa.popular.value')}</p>
                    <p><strong className="text-white">{t('liveCasinoGuide.providers.sa.features.label')}</strong> {t('liveCasinoGuide.providers.sa.features.value')}</p>
                  </div>
                  <div className="text-center pt-4 border-t border-gray-700 mt-auto">
                    <LocalizedLink
                      to="/providers/sa-gaming"
                      className="inline-flex items-center gap-2 bg-brand hover:bg-red-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                    >
                      <BookOpen className="w-4 h-4" />
                      {t('liveCasinoGuide.providers.learnMore')}
                    </LocalizedLink>
                  </div>
                </div>
              </div>

              {/* Sexy Gaming (AE Sexy) */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-brand/50 transition-all hover:shadow-lg hover:shadow-brand/10 flex flex-col">
                <div className="p-6 flex flex-col flex-grow">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto overflow-hidden border border-pink-500/20">
                    <img
                      src="https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto/v1767000393/bigwin959/providers/sexy.png"
                      alt="Sexy Gaming Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3 text-center">{t('liveCasinoGuide.providers.sexy.name')}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed text-center">
                    {t('liveCasinoGuide.providers.sexy.desc')}
                  </p>
                  <div className="space-y-2 text-gray-400 text-sm mb-5 flex-grow">
                    <p><strong className="text-white">{t('liveCasinoGuide.providers.sexy.specialties.label')}</strong> {t('liveCasinoGuide.providers.sexy.specialties.value')}</p>
                    <p><strong className="text-white">{t('liveCasinoGuide.providers.sexy.popular.label')}</strong> {t('liveCasinoGuide.providers.sexy.popular.value')}</p>
                    <p><strong className="text-white">{t('liveCasinoGuide.providers.sexy.features.label')}</strong> {t('liveCasinoGuide.providers.sexy.features.value')}</p>
                  </div>
                  <div className="text-center pt-4 border-t border-gray-700 mt-auto">
                    <LocalizedLink
                      to="/providers/sexy-gaming"
                      className="inline-flex items-center gap-2 bg-brand hover:bg-red-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                    >
                      <BookOpen className="w-4 h-4" />
                      {t('liveCasinoGuide.providers.learnMore')}
                    </LocalizedLink>
                  </div>
                </div>
              </div>

              {/* Pragmatic Play Live */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-brand/50 transition-all hover:shadow-lg hover:shadow-brand/10 flex flex-col">
                <div className="p-6 flex flex-col flex-grow">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto overflow-hidden border border-green-500/20">
                    <img
                      src="https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto/v1767000392/bigwin959/providers/saba.png"
                      alt="Pragmatic Play Live Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3 text-center">{t('liveCasinoGuide.providers.pragmatic.name')}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed text-center">
                    {t('liveCasinoGuide.providers.pragmatic.desc')}
                  </p>
                  <div className="space-y-2 text-gray-400 text-sm mb-5 flex-grow">
                    <p><strong className="text-white">{t('liveCasinoGuide.providers.pragmatic.specialties.label')}</strong> {t('liveCasinoGuide.providers.pragmatic.specialties.value')}</p>
                    <p><strong className="text-white">{t('liveCasinoGuide.providers.pragmatic.popular.label')}</strong> {t('liveCasinoGuide.providers.pragmatic.popular.value')}</p>
                    <p><strong className="text-white">{t('liveCasinoGuide.providers.pragmatic.features.label')}</strong> {t('liveCasinoGuide.providers.pragmatic.features.value')}</p>
                  </div>
                  <div className="text-center pt-4 border-t border-gray-700 mt-auto">
                    <LocalizedLink
                      to="/providers/pragmatic-live"
                      className="inline-flex items-center gap-2 bg-brand hover:bg-red-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                    >
                      <BookOpen className="w-4 h-4" />
                      {t('liveCasinoGuide.providers.learnMore')}
                    </LocalizedLink>
                  </div>
                </div>
              </div>

              {/* Playtech Live */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-brand/50 transition-all hover:shadow-lg hover:shadow-brand/10 flex flex-col">
                <div className="p-6 flex flex-col flex-grow">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto overflow-hidden border border-yellow-500/20">
                    <img
                      src="https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto/v1767000392/bigwin959/providers/sbo.png"
                      alt="Playtech Live Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3 text-center">{t('liveCasinoGuide.providers.playtech.name')}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed text-center">
                    {t('liveCasinoGuide.providers.playtech.desc')}
                  </p>
                  <div className="space-y-2 text-gray-400 text-sm mb-5 flex-grow">
                    <p><strong className="text-white">{t('liveCasinoGuide.providers.playtech.specialties.label')}</strong> {t('liveCasinoGuide.providers.playtech.specialties.value')}</p>
                    <p><strong className="text-white">{t('liveCasinoGuide.providers.playtech.popular.label')}</strong> {t('liveCasinoGuide.providers.playtech.popular.value')}</p>
                    <p><strong className="text-white">{t('liveCasinoGuide.providers.playtech.features.label')}</strong> {t('liveCasinoGuide.providers.playtech.features.value')}</p>
                  </div>
                  <div className="text-center pt-4 border-t border-gray-700 mt-auto">
                    <LocalizedLink
                      to="/providers/playtech-live"
                      className="inline-flex items-center gap-2 bg-brand hover:bg-red-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                    >
                      <BookOpen className="w-4 h-4" />
                      {t('liveCasinoGuide.providers.learnMore')}
                    </LocalizedLink>
                  </div>
                </div>
              </div>

              {/* Ezugi */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-brand/50 transition-all hover:shadow-lg hover:shadow-brand/10 flex flex-col">
                <div className="p-6 flex flex-col flex-grow">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto overflow-hidden border border-indigo-500/20">
                    <img
                      src="https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto/v1767000388/bigwin959/providers/lucky-exchange.png"
                      alt="Ezugi Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3 text-center">{t('liveCasinoGuide.providers.ezugi.name')}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed text-center">
                    {t('liveCasinoGuide.providers.ezugi.desc')}
                  </p>
                  <div className="space-y-2 text-gray-400 text-sm mb-5 flex-grow">
                    <p><strong className="text-white">{t('liveCasinoGuide.providers.ezugi.specialties.label')}</strong> {t('liveCasinoGuide.providers.ezugi.specialties.value')}</p>
                    <p><strong className="text-white">{t('liveCasinoGuide.providers.ezugi.popular.label')}</strong> {t('liveCasinoGuide.providers.ezugi.popular.value')}</p>
                    <p><strong className="text-white">{t('liveCasinoGuide.providers.ezugi.features.label')}</strong> {t('liveCasinoGuide.providers.ezugi.features.value')}</p>
                  </div>
                  <div className="text-center pt-4 border-t border-gray-700 mt-auto">
                    <LocalizedLink
                      to="/providers/ezugi"
                      className="inline-flex items-center gap-2 bg-brand hover:bg-red-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                    >
                      <BookOpen className="w-4 h-4" />
                      {t('liveCasinoGuide.providers.learnMore')}
                    </LocalizedLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GAME RULES & STRATEGIES */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('liveCasinoGuide.rules.title')}</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              {t('liveCasinoGuide.rules.subtitle')}
            </p>
          </div>

          <div className="space-y-16">
            {/* Baccarat */}
            <div className="bg-gradient-to-br from-red-900/10 to-red-950/10 border border-red-600/20 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center border border-red-500/30">
                  <Spade className="w-7 h-7 text-red-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">{t('liveCasinoGuide.rules.baccarat.title')}</h3>
                  <p className="text-red-300 text-sm">{t('liveCasinoGuide.rules.baccarat.subtitle')}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-bold text-xl mb-3">{t('liveCasinoGuide.rules.baccarat.overview.title')}</h4>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {t('liveCasinoGuide.rules.baccarat.overview.p1')}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {t('liveCasinoGuide.rules.baccarat.overview.p2')}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-5">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-red-400" />
                      {t('liveCasinoGuide.rules.baccarat.scoring.title')}
                    </h4>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      {(t('liveCasinoGuide.rules.baccarat.scoring.items', { returnObjects: true }) as string[]).map((item, index) => (
                        <li key={index}> {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-5">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-red-400" />
                      {t('liveCasinoGuide.rules.baccarat.thirdCard.title')}
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="text-white font-semibold mb-1">{t('liveCasinoGuide.rules.baccarat.thirdCard.player.title')}</p>
                        <ul className="text-gray-300 space-y-1">
                          {(t('liveCasinoGuide.rules.baccarat.thirdCard.player.items', { returnObjects: true }) as string[]).map((item, index) => (
                            <li key={index}> {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-white font-semibold mb-1">{t('liveCasinoGuide.rules.baccarat.thirdCard.banker.title')}</p>
                        <ul className="text-gray-300 space-y-1">
                          {(t('liveCasinoGuide.rules.baccarat.thirdCard.banker.items', { returnObjects: true }) as string[]).map((item, index) => (
                            <li key={index}> {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-5">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-red-400" />
                    {t('liveCasinoGuide.rules.baccarat.betting.title')}
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-4">
                      <h5 className="text-white font-semibold mb-2">{t('liveCasinoGuide.rules.baccarat.betting.banker.title')}</h5>
                      <p className="text-gray-300 text-sm mb-2">{t('liveCasinoGuide.rules.baccarat.betting.banker.payout')}</p>
                      <p className="text-green-400 text-xs">{t('liveCasinoGuide.rules.baccarat.betting.banker.edge')}</p>
                      <p className="text-gray-400 text-xs mt-2">{t('liveCasinoGuide.rules.baccarat.betting.banker.note')}</p>
                    </div>
                    <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-4">
                      <h5 className="text-white font-semibold mb-2">{t('liveCasinoGuide.rules.baccarat.betting.player.title')}</h5>
                      <p className="text-gray-300 text-sm mb-2">{t('liveCasinoGuide.rules.baccarat.betting.player.payout')}</p>
                      <p className="text-green-400 text-xs">{t('liveCasinoGuide.rules.baccarat.betting.player.edge')}</p>
                      <p className="text-gray-400 text-xs mt-2">{t('liveCasinoGuide.rules.baccarat.betting.player.note')}</p>
                    </div>
                    <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-4">
                      <h5 className="text-white font-semibold mb-2">{t('liveCasinoGuide.rules.baccarat.betting.tie.title')}</h5>
                      <p className="text-gray-300 text-sm mb-2">{t('liveCasinoGuide.rules.baccarat.betting.tie.payout')}</p>
                      <p className="text-red-400 text-xs">{t('liveCasinoGuide.rules.baccarat.betting.tie.edge')}</p>
                      <p className="text-gray-400 text-xs mt-2">{t('liveCasinoGuide.rules.baccarat.betting.tie.note')}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-900/20 border border-blue-600/30 rounded-xl p-5">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-400" />
                    {t('liveCasinoGuide.rules.baccarat.strategy.title')}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-blue-300 font-semibold mb-2">{t('liveCasinoGuide.rules.baccarat.strategy.recommended.title')}</p>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        {(t('liveCasinoGuide.rules.baccarat.strategy.recommended.items', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index}> {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-blue-300 font-semibold mb-2">{t('liveCasinoGuide.rules.baccarat.strategy.avoid.title')}</p>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        {(t('liveCasinoGuide.rules.baccarat.strategy.avoid.items', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index}> {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-5">
                  <h4 className="text-white font-bold mb-3">{t('liveCasinoGuide.rules.baccarat.variations.title')}</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-white font-semibold mb-1">{t('liveCasinoGuide.rules.baccarat.variations.speed.title')}</p>
                      <p className="text-gray-300">{t('liveCasinoGuide.rules.baccarat.variations.speed.desc')}</p>
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-1">{t('liveCasinoGuide.rules.baccarat.variations.squeeze.title')}</p>
                      <p className="text-gray-300">{t('liveCasinoGuide.rules.baccarat.variations.squeeze.desc')}</p>
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-1">{t('liveCasinoGuide.rules.baccarat.variations.lightning.title')}</p>
                      <p className="text-gray-300">{t('liveCasinoGuide.rules.baccarat.variations.lightning.desc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/10 to-blue-950/10 border border-blue-600/20 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/30">
                  <Club className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">{t('liveCasinoGuide.rules.blackjack.title')}</h3>
                  <p className="text-blue-300 text-sm">{t('liveCasinoGuide.rules.blackjack.subtitle')}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-bold text-xl mb-3">{t('liveCasinoGuide.rules.blackjack.overview.title')}</h4>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {t('liveCasinoGuide.rules.blackjack.overview.p1')}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {t('liveCasinoGuide.rules.blackjack.overview.p2')}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-5">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-blue-400" />
                      {t('liveCasinoGuide.rules.blackjack.values.title')}
                    </h4>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      {(t('liveCasinoGuide.rules.blackjack.values.items', { returnObjects: true }) as string[]).map((item, index) => (
                        <li key={index}> {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-5">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Gamepad2 className="w-5 h-5 text-blue-400" />
                      {t('liveCasinoGuide.rules.blackjack.actions.title')}
                    </h4>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      {(t('liveCasinoGuide.rules.blackjack.actions.items', { returnObjects: true }) as string[]).map((item, index) => (
                        <li key={index}> {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-5">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-blue-400" />
                    {t('liveCasinoGuide.rules.blackjack.basicStrategy.title')}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-blue-300 font-semibold mb-3">{t('liveCasinoGuide.rules.blackjack.basicStrategy.hard.title')}</p>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        {(t('liveCasinoGuide.rules.blackjack.basicStrategy.hard.items', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index}> {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-blue-300 font-semibold mb-3">{t('liveCasinoGuide.rules.blackjack.basicStrategy.soft.title')}</p>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        {(t('liveCasinoGuide.rules.blackjack.basicStrategy.soft.items', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index}> {item}</li>
                        ))}
                      </ul>
                      <p className="text-blue-300 font-semibold mb-3 mt-4">{t('liveCasinoGuide.rules.blackjack.basicStrategy.pairs.title')}</p>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        {(t('liveCasinoGuide.rules.blackjack.basicStrategy.pairs.items', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index}> {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-900/20 border border-blue-600/30 rounded-xl p-5">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-blue-400" />
                    {t('liveCasinoGuide.rules.blackjack.advancedStrategy.title')}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-blue-300 font-semibold mb-2">{t('liveCasinoGuide.rules.blackjack.advancedStrategy.dos.title')}</p>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        {(t('liveCasinoGuide.rules.blackjack.advancedStrategy.dos.items', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index}> {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-blue-300 font-semibold mb-2">{t('liveCasinoGuide.rules.blackjack.advancedStrategy.donts.title')}</p>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        {(t('liveCasinoGuide.rules.blackjack.advancedStrategy.donts.items', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index}> {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-5">
                  <h4 className="text-white font-bold mb-3">{t('liveCasinoGuide.rules.blackjack.variations.title')}</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-white font-semibold mb-1">{t('liveCasinoGuide.rules.blackjack.variations.infinite.title')}</p>
                      <p className="text-gray-300">{t('liveCasinoGuide.rules.blackjack.variations.infinite.desc')}</p>
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-1">{t('liveCasinoGuide.rules.blackjack.variations.lightning.title')}</p>
                      <p className="text-gray-300">{t('liveCasinoGuide.rules.blackjack.variations.lightning.desc')}</p>
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-1">{t('liveCasinoGuide.rules.blackjack.variations.freeBet.title')}</p>
                      <p className="text-gray-300">{t('liveCasinoGuide.rules.blackjack.variations.freeBet.desc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Roulette */}
            <div className="bg-gradient-to-br from-green-900/10 to-green-950/10 border border-green-600/20 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center border border-green-500/30">
                  <Target className="w-7 h-7 text-green-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">{t('liveCasinoGuide.rules.roulette.title')}</h3>
                  <p className="text-green-300 text-sm">{t('liveCasinoGuide.rules.roulette.subtitle')}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-bold text-xl mb-3">{t('liveCasinoGuide.rules.roulette.overview.title')}</h4>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {t('liveCasinoGuide.rules.roulette.overview.p1')}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {t('liveCasinoGuide.rules.roulette.overview.p2')}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-5">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-green-400" />
                      {t('liveCasinoGuide.rules.roulette.wheelTypes.title')}
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="text-green-400 font-semibold mb-1">{t('liveCasinoGuide.rules.roulette.wheelTypes.european.title')}</p>
                        <p className="text-gray-300">{t('liveCasinoGuide.rules.roulette.wheelTypes.european.desc')}</p>
                        <p className="text-green-400 text-xs mt-1">{t('liveCasinoGuide.rules.roulette.wheelTypes.european.edge')}</p>
                      </div>
                      <div>
                        <p className="text-yellow-400 font-semibold mb-1">{t('liveCasinoGuide.rules.roulette.wheelTypes.french.title')}</p>
                        <p className="text-gray-300">{t('liveCasinoGuide.rules.roulette.wheelTypes.french.desc')}</p>
                        <p className="text-green-400 text-xs mt-1">{t('liveCasinoGuide.rules.roulette.wheelTypes.french.edge')}</p>
                      </div>
                      <div>
                        <p className="text-red-400 font-semibold mb-1">{t('liveCasinoGuide.rules.roulette.wheelTypes.american.title')}</p>
                        <p className="text-gray-300">{t('liveCasinoGuide.rules.roulette.wheelTypes.american.desc')}</p>
                        <p className="text-red-400 text-xs mt-1">{t('liveCasinoGuide.rules.roulette.wheelTypes.american.edge')}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-5">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-green-400" />
                      {t('liveCasinoGuide.rules.roulette.insideBets.title')}
                    </h4>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      {(t('liveCasinoGuide.rules.roulette.insideBets.items', { returnObjects: true }) as string[]).map((item, index) => (
                        <li key={index}> {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-5">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-green-400" />
                    {t('liveCasinoGuide.rules.roulette.outsideBets.title')}
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-white font-semibold mb-2">{t('liveCasinoGuide.rules.roulette.outsideBets.evenMoney.title')}</p>
                      <ul className="text-gray-300 space-y-1">
                        {(t('liveCasinoGuide.rules.roulette.outsideBets.evenMoney.items', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index}> {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-2">{t('liveCasinoGuide.rules.roulette.outsideBets.column.title')}</p>
                      <ul className="text-gray-300 space-y-1">
                        {(t('liveCasinoGuide.rules.roulette.outsideBets.column.items', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index}> {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-2">{t('liveCasinoGuide.rules.roulette.outsideBets.dozen.title')}</p>
                      <ul className="text-gray-300 space-y-1">
                        {(t('liveCasinoGuide.rules.roulette.outsideBets.dozen.items', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index}> {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-900/20 border border-green-600/30 rounded-xl p-5">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-green-400" />
                    {t('liveCasinoGuide.rules.roulette.strategy.title')}
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-green-300 font-semibold mb-2">{t('liveCasinoGuide.rules.roulette.strategy.martingale.title')}</p>
                      <p className="text-gray-300">{t('liveCasinoGuide.rules.roulette.strategy.martingale.desc')}</p>
                      <p className="text-red-400 text-xs mt-1">{t('liveCasinoGuide.rules.roulette.strategy.martingale.warning')}</p>
                    </div>
                    <div>
                      <p className="text-green-300 font-semibold mb-2">{t('liveCasinoGuide.rules.roulette.strategy.fibonacci.title')}</p>
                      <p className="text-gray-300">{t('liveCasinoGuide.rules.roulette.strategy.fibonacci.desc')}</p>
                    </div>
                    <div>
                      <p className="text-green-300 font-semibold mb-2">{t('liveCasinoGuide.rules.roulette.strategy.dalembert.title')}</p>
                      <p className="text-gray-300">{t('liveCasinoGuide.rules.roulette.strategy.dalembert.desc')}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-5">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-green-400" />
                    {t('liveCasinoGuide.rules.roulette.variations.title')}
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-white font-semibold mb-1">{t('liveCasinoGuide.rules.roulette.variations.lightning.title')}</p>
                      <p className="text-gray-300">{t('liveCasinoGuide.rules.roulette.variations.lightning.desc')}</p>
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-1">{t('liveCasinoGuide.rules.roulette.variations.immersive.title')}</p>
                      <p className="text-gray-300">{t('liveCasinoGuide.rules.roulette.variations.immersive.desc')}</p>
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-1">{t('liveCasinoGuide.rules.roulette.variations.speed.title')}</p>
                      <p className="text-gray-300">{t('liveCasinoGuide.rules.roulette.variations.speed.desc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dragon Tiger */}
            <div className="bg-gradient-to-br from-yellow-900/10 to-yellow-950/10 border border-yellow-600/20 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center border border-yellow-500/30">
                  <Crown className="w-7 h-7 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">{t('liveCasinoGuide.rules.dragonTiger.title')}</h3>
                  <p className="text-yellow-300 text-sm">{t('liveCasinoGuide.rules.dragonTiger.subtitle')}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-bold text-xl mb-3">{t('liveCasinoGuide.rules.dragonTiger.overview.title')}</h4>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {t('liveCasinoGuide.rules.dragonTiger.overview.p1')}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {t('liveCasinoGuide.rules.dragonTiger.overview.p2')}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-5">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-yellow-400" />
                      {t('liveCasinoGuide.rules.dragonTiger.howToPlay.title')}
                    </h4>
                    <ol className="text-gray-300 space-y-3 text-sm list-decimal list-inside">
                      {(t('liveCasinoGuide.rules.dragonTiger.howToPlay.items', { returnObjects: true }) as string[]).map((item, index) => {
                        const [label, ...desc] = item.split(':');
                        return (
                          <li key={index}>
                            <strong className="text-white">{label}:</strong>{desc.join(':')}
                          </li>
                        );
                      })}
                    </ol>
                  </div>

                  <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-5">
                    <h4 className="text-white font-bold mb-4">{t('liveCasinoGuide.rules.dragonTiger.rankings.title')}</h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-300 mb-3">{t('liveCasinoGuide.rules.dragonTiger.rankings.desc')}</p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-gray-800/50 p-2 rounded">
                          <p className="text-white font-semibold">{t('liveCasinoGuide.rules.dragonTiger.rankings.ace.label')}</p>
                          <p className="text-gray-400 text-xs">{t('liveCasinoGuide.rules.dragonTiger.rankings.ace.value')}</p>
                        </div>
                        <div className="bg-gray-800/50 p-2 rounded">
                          <p className="text-white font-semibold">{t('liveCasinoGuide.rules.dragonTiger.rankings.numbers.label')}</p>
                          <p className="text-gray-400 text-xs">{t('liveCasinoGuide.rules.dragonTiger.rankings.numbers.value')}</p>
                        </div>
                        <div className="bg-gray-800/50 p-2 rounded">
                          <p className="text-white font-semibold">{t('liveCasinoGuide.rules.dragonTiger.rankings.jack.label')}</p>
                          <p className="text-gray-400 text-xs">{t('liveCasinoGuide.rules.dragonTiger.rankings.jack.value')}</p>
                        </div>
                        <div className="bg-gray-800/50 p-2 rounded">
                          <p className="text-white font-semibold">{t('liveCasinoGuide.rules.dragonTiger.rankings.queen.label')}</p>
                          <p className="text-gray-400 text-xs">{t('liveCasinoGuide.rules.dragonTiger.rankings.queen.value')}</p>
                        </div>
                        <div className="bg-gray-800/50 p-2 rounded col-span-2">
                          <p className="text-white font-semibold">{t('liveCasinoGuide.rules.dragonTiger.rankings.king.label')}</p>
                          <p className="text-gray-400 text-xs">{t('liveCasinoGuide.rules.dragonTiger.rankings.king.value')}</p>
                        </div>
                      </div>
                      <p className="text-gray-400 text-xs mt-3">{t('liveCasinoGuide.rules.dragonTiger.rankings.note')}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-5">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-yellow-400" />
                    {t('liveCasinoGuide.rules.dragonTiger.betting.title')}
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-4">
                      <h5 className="text-white font-semibold mb-2">{t('liveCasinoGuide.rules.dragonTiger.betting.dragon.title')}</h5>
                      <p className="text-gray-300 text-sm mb-2">{t('liveCasinoGuide.rules.dragonTiger.betting.dragon.payout')}</p>
                      <p className="text-green-400 text-xs">{t('liveCasinoGuide.rules.dragonTiger.betting.dragon.edge')}</p>
                      <p className="text-gray-400 text-xs mt-2">{t('liveCasinoGuide.rules.dragonTiger.betting.dragon.note')}</p>
                    </div>
                    <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-4">
                      <h5 className="text-white font-semibold mb-2">{t('liveCasinoGuide.rules.dragonTiger.betting.tiger.title')}</h5>
                      <p className="text-gray-300 text-sm mb-2">{t('liveCasinoGuide.rules.dragonTiger.betting.tiger.payout')}</p>
                      <p className="text-green-400 text-xs">{t('liveCasinoGuide.rules.dragonTiger.betting.tiger.edge')}</p>
                      <p className="text-gray-400 text-xs mt-2">{t('liveCasinoGuide.rules.dragonTiger.betting.tiger.note')}</p>
                    </div>
                    <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-4">
                      <h5 className="text-white font-semibold mb-2">{t('liveCasinoGuide.rules.dragonTiger.betting.tie.title')}</h5>
                      <p className="text-gray-300 text-sm mb-2">{t('liveCasinoGuide.rules.dragonTiger.betting.tie.payout')}</p>
                      <p className="text-red-400 text-xs">{t('liveCasinoGuide.rules.dragonTiger.betting.tie.edge')}</p>
                      <p className="text-gray-400 text-xs mt-2">{t('liveCasinoGuide.rules.dragonTiger.betting.tie.note')}</p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-900/20 border border-blue-600/30 rounded-lg">
                    <p className="text-blue-300 text-sm">{t('liveCasinoGuide.rules.dragonTiger.betting.important')}</p>
                  </div>
                </div>

                <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-5">
                  <h4 className="text-white font-bold mb-4">{t('liveCasinoGuide.rules.dragonTiger.sideBets.title')}</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-white font-semibold mb-2">{t('liveCasinoGuide.rules.dragonTiger.sideBets.suit.title')}</p>
                      <ul className="text-gray-300 space-y-1">
                        {(t('liveCasinoGuide.rules.dragonTiger.sideBets.suit.items', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index}> {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-2">{t('liveCasinoGuide.rules.dragonTiger.sideBets.oddEven.title')}</p>
                      <ul className="text-gray-300 space-y-1">
                        {(t('liveCasinoGuide.rules.dragonTiger.sideBets.oddEven.items', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index}> {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-xl p-5">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-yellow-400" />
                    {t('liveCasinoGuide.rules.dragonTiger.strategy.title')}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-yellow-300 font-semibold mb-2">{t('liveCasinoGuide.rules.dragonTiger.strategy.best.title')}</p>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        {(t('liveCasinoGuide.rules.dragonTiger.strategy.best.items', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index}> {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-yellow-300 font-semibold mb-2">{t('liveCasinoGuide.rules.dragonTiger.strategy.avoid.title')}</p>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        {(t('liveCasinoGuide.rules.dragonTiger.strategy.avoid.items', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index}> {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sic Bo */}
            <div className="bg-gradient-to-br from-purple-900/10 to-purple-950/10 border border-purple-600/20 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center border border-purple-500/30">
                  <Dices className="w-7 h-7 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">{t('liveCasinoGuide.rules.sicBo.title')}</h3>
                  <p className="text-purple-300 text-sm">{t('liveCasinoGuide.rules.sicBo.subtitle')}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-bold text-xl mb-3">{t('liveCasinoGuide.rules.sicBo.overview.title')}</h4>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {t('liveCasinoGuide.rules.sicBo.overview.p1')}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {t('liveCasinoGuide.rules.sicBo.overview.p2')}
                  </p>
                </div>

                <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-5">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-purple-400" />
                    {t('liveCasinoGuide.rules.sicBo.howToPlay.title')}
                  </h4>
                  <ol className="text-gray-300 space-y-2 text-sm list-decimal list-inside">
                    {(t('liveCasinoGuide.rules.sicBo.howToPlay.items', { returnObjects: true }) as string[]).map((item, index) => {
                      const [label, ...desc] = item.split(':');
                      return (
                        <li key={index}>
                          <strong className="text-white">{label}:</strong>{desc.join(':')}
                        </li>
                      );
                    })}
                  </ol>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-5">
                    <h4 className="text-white font-bold mb-4">{t('liveCasinoGuide.rules.sicBo.recommendedBets.title')}</h4>
                    <div className="space-y-3 text-sm">
                      <div className="bg-green-900/20 border border-green-600/30 p-3 rounded-lg">
                        <p className="text-green-400 font-semibold mb-1">{t('liveCasinoGuide.rules.sicBo.recommendedBets.small.title')}</p>
                        <p className="text-gray-300 mb-1">{t('liveCasinoGuide.rules.sicBo.recommendedBets.small.payout')}</p>
                        <p className="text-gray-400 text-xs">{t('liveCasinoGuide.rules.sicBo.recommendedBets.small.note')}</p>
                      </div>
                      <div className="bg-green-900/20 border border-green-600/30 p-3 rounded-lg">
                        <p className="text-green-400 font-semibold mb-1">{t('liveCasinoGuide.rules.sicBo.recommendedBets.big.title')}</p>
                        <p className="text-gray-300 mb-1">{t('liveCasinoGuide.rules.sicBo.recommendedBets.big.payout')}</p>
                        <p className="text-gray-400 text-xs">{t('liveCasinoGuide.rules.sicBo.recommendedBets.big.note')}</p>
                      </div>
                      <div className="bg-blue-900/20 border border-blue-600/30 p-3 rounded-lg">
                        <p className="text-blue-400 font-semibold mb-1">{t('liveCasinoGuide.rules.sicBo.recommendedBets.double.title')}</p>
                        <p className="text-gray-300 mb-1">{t('liveCasinoGuide.rules.sicBo.recommendedBets.double.payout')}</p>
                        <p className="text-gray-400 text-xs">{t('liveCasinoGuide.rules.sicBo.recommendedBets.double.note')}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-5">
                    <h4 className="text-white font-bold mb-4">{t('liveCasinoGuide.rules.sicBo.highRiskBets.title')}</h4>
                    <div className="space-y-3 text-sm">
                      <div className="bg-red-900/20 border border-red-600/30 p-3 rounded-lg">
                        <p className="text-red-400 font-semibold mb-1">{t('liveCasinoGuide.rules.sicBo.highRiskBets.triple.title')}</p>
                        <p className="text-gray-300 mb-1">{t('liveCasinoGuide.rules.sicBo.highRiskBets.triple.payout')}</p>
                        <p className="text-gray-400 text-xs">{t('liveCasinoGuide.rules.sicBo.highRiskBets.triple.note')}</p>
                      </div>
                      <div className="bg-red-900/20 border border-red-600/30 p-3 rounded-lg">
                        <p className="text-red-400 font-semibold mb-1">{t('liveCasinoGuide.rules.sicBo.highRiskBets.anyTriple.title')}</p>
                        <p className="text-gray-300 mb-1">{t('liveCasinoGuide.rules.sicBo.highRiskBets.anyTriple.payout')}</p>
                        <p className="text-gray-400 text-xs">{t('liveCasinoGuide.rules.sicBo.highRiskBets.anyTriple.note')}</p>
                      </div>
                      <div className="bg-yellow-900/20 border border-yellow-600/30 p-3 rounded-lg">
                        <p className="text-yellow-400 font-semibold mb-1">{t('liveCasinoGuide.rules.sicBo.highRiskBets.total.title')}</p>
                        <p className="text-gray-300 mb-1">{t('liveCasinoGuide.rules.sicBo.highRiskBets.total.payout')}</p>
                        <p className="text-gray-400 text-xs">{t('liveCasinoGuide.rules.sicBo.highRiskBets.total.note')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-5">
                  <h4 className="text-white font-bold mb-4">{t('liveCasinoGuide.rules.sicBo.allOptions.title')}</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-white font-semibold mb-2">{t('liveCasinoGuide.rules.sicBo.allOptions.single.title')}</p>
                      <ul className="text-gray-300 space-y-1">
                        {(t('liveCasinoGuide.rules.sicBo.allOptions.single.items', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index}> {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-2">{t('liveCasinoGuide.rules.sicBo.allOptions.combo.title')}</p>
                      <ul className="text-gray-300 space-y-1">
                        {(t('liveCasinoGuide.rules.sicBo.allOptions.combo.items', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index}> {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-2">{t('liveCasinoGuide.rules.sicBo.allOptions.totalSum.title')}</p>
                      <ul className="text-gray-300 space-y-1">
                        {(t('liveCasinoGuide.rules.sicBo.allOptions.totalSum.items', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index}> {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-900/20 border border-purple-600/30 rounded-xl p-5">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-purple-400" />
                    {t('liveCasinoGuide.rules.sicBo.strategy.title')}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-purple-300 font-semibold mb-2">{t('liveCasinoGuide.rules.sicBo.strategy.smart.title')}</p>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        {(t('liveCasinoGuide.rules.sicBo.strategy.smart.items', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index}> {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-purple-300 font-semibold mb-2">{t('liveCasinoGuide.rules.sicBo.strategy.avoid.title')}</p>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        {(t('liveCasinoGuide.rules.sicBo.strategy.avoid.items', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index}> {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-5">
                  <h4 className="text-white font-bold mb-3">{t('liveCasinoGuide.rules.sicBo.probability.title')}</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-white font-semibold mb-2">{t('liveCasinoGuide.rules.sicBo.probability.common.title')}</p>
                      <ul className="text-gray-300 space-y-1">
                        {(t('liveCasinoGuide.rules.sicBo.probability.common.items', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index}> {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-2">{t('liveCasinoGuide.rules.sicBo.probability.rare.title')}</p>
                      <ul className="text-gray-300 space-y-1">
                        {(t('liveCasinoGuide.rules.sicBo.probability.rare.items', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index}> {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Andar Bahar */}
            <div className="bg-gradient-to-br from-orange-900/10 to-orange-950/10 border border-orange-600/20 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/30">
                  <Diamond className="w-7 h-7 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">{t('liveCasinoGuide.rules.andarBahar.title')}</h3>
                  <p className="text-orange-300 text-sm">{t('liveCasinoGuide.rules.andarBahar.subtitle')}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-bold text-xl mb-3">{t('liveCasinoGuide.rules.andarBahar.overview.title')}</h4>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {t('liveCasinoGuide.rules.andarBahar.overview.p1')}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {t('liveCasinoGuide.rules.andarBahar.overview.p2')}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-5">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-orange-400" />
                      {t('liveCasinoGuide.rules.andarBahar.howToPlay.title')}
                    </h4>
                    <ol className="text-gray-300 space-y-3 text-sm list-decimal list-inside">
                      {(t('liveCasinoGuide.rules.andarBahar.howToPlay.items', { returnObjects: true }) as string[]).map((item, index) => {
                        const [label, ...desc] = item.split(':');
                        return (
                          <li key={index}>
                            <strong className="text-white">{label}:</strong>{desc.join(':')}
                          </li>
                        );
                      })}
                    </ol>
                  </div>

                  <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-5">
                    <h4 className="text-white font-bold mb-4">{t('liveCasinoGuide.rules.andarBahar.example.title')}</h4>
                    <div className="space-y-3 text-sm">
                      <div className="bg-gray-800/50 p-3 rounded-lg">
                        <p className="text-white font-semibold mb-2">{t('liveCasinoGuide.rules.andarBahar.example.round.title')}</p>
                        <ul className="text-gray-300 space-y-2">
                          {(t('liveCasinoGuide.rules.andarBahar.example.round.items', { returnObjects: true }) as string[]).map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <p className="text-gray-400 text-xs">{t('liveCasinoGuide.rules.andarBahar.example.note')}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-5">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-orange-400" />
                    {t('liveCasinoGuide.rules.andarBahar.betting.title')}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-4">
                      <h5 className="text-white font-semibold mb-3">{t('liveCasinoGuide.rules.andarBahar.betting.andar.title')}</h5>
                      <div className="space-y-2 text-sm">
                        <p className="text-gray-300">Payout: <span className="text-green-400">{t('liveCasinoGuide.rules.andarBahar.betting.andar.payout')}</span></p>
                        <p className="text-gray-300">House Edge: <span className="text-yellow-400">{t('liveCasinoGuide.rules.andarBahar.betting.andar.edge')}</span></p>
                        <p className="text-blue-300 text-xs mt-2">{t('liveCasinoGuide.rules.andarBahar.betting.andar.note')}</p>
                      </div>
                    </div>
                    <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-4">
                      <h5 className="text-white font-semibold mb-3">{t('liveCasinoGuide.rules.andarBahar.betting.bahar.title')}</h5>
                      <div className="space-y-2 text-sm">
                        <p className="text-gray-300">Payout: <span className="text-green-400">{t('liveCasinoGuide.rules.andarBahar.betting.bahar.payout')}</span></p>
                        <p className="text-gray-300">House Edge: <span className="text-yellow-400">{t('liveCasinoGuide.rules.andarBahar.betting.bahar.edge')}</span></p>
                        <p className="text-blue-300 text-xs mt-2">{t('liveCasinoGuide.rules.andarBahar.betting.bahar.note')}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-900/20 border border-blue-600/30 rounded-lg">
                    <p className="text-blue-300 text-sm">{t('liveCasinoGuide.rules.andarBahar.betting.important')}</p>
                  </div>
                </div>

                <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-5">
                  <h4 className="text-white font-bold mb-4">{t('liveCasinoGuide.rules.andarBahar.sideBets.title')}</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-gray-800/50 p-3 rounded-lg">
                      <p className="text-white font-semibold mb-2">{t('liveCasinoGuide.rules.andarBahar.sideBets.count.title')}</p>
                      <p className="text-gray-300 mb-1">{t('liveCasinoGuide.rules.andarBahar.sideBets.count.desc')}</p>
                      <p className="text-yellow-400 text-xs">Payouts: {t('liveCasinoGuide.rules.andarBahar.sideBets.count.payout')}</p>
                    </div>
                    <div className="bg-gray-800/50 p-3 rounded-lg">
                      <p className="text-white font-semibold mb-2">{t('liveCasinoGuide.rules.andarBahar.sideBets.range.title')}</p>
                      <p className="text-gray-300 mb-1">{t('liveCasinoGuide.rules.andarBahar.sideBets.range.desc')}</p>
                      <p className="text-yellow-400 text-xs">Payouts: {t('liveCasinoGuide.rules.andarBahar.sideBets.range.payout')}</p>
                    </div>
                    <div className="bg-gray-800/50 p-3 rounded-lg">
                      <p className="text-white font-semibold mb-2">{t('liveCasinoGuide.rules.andarBahar.sideBets.jokerSuit.title')}</p>
                      <p className="text-gray-300 mb-1">{t('liveCasinoGuide.rules.andarBahar.sideBets.jokerSuit.desc')}</p>
                      <p className="text-yellow-400 text-xs">Payout: {t('liveCasinoGuide.rules.andarBahar.sideBets.jokerSuit.payout')}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs mt-3">{t('liveCasinoGuide.rules.andarBahar.sideBets.note')}</p>
                </div>

                <div className="bg-orange-900/20 border border-orange-600/30 rounded-xl p-5">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-orange-400" />
                    {t('liveCasinoGuide.rules.andarBahar.strategy.title')}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-orange-300 font-semibold mb-2">{t('liveCasinoGuide.rules.andarBahar.strategy.best.title')}</p>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        {(t('liveCasinoGuide.rules.andarBahar.strategy.best.items', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index}> {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-orange-300 font-semibold mb-2">{t('liveCasinoGuide.rules.andarBahar.strategy.avoid.title')}</p>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        {(t('liveCasinoGuide.rules.andarBahar.strategy.avoid.items', { returnObjects: true }) as string[]).map((item, index) => (
                          <li key={index}> {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-5">
                  <h4 className="text-white font-bold mb-3">{t('liveCasinoGuide.rules.andarBahar.popularity.title')}</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-2 mx-auto">
                        <Zap className="w-6 h-6 text-orange-400" />
                      </div>
                      <p className="text-white font-semibold mb-1">{t('liveCasinoGuide.rules.andarBahar.popularity.speed.title')}</p>
                      <p className="text-gray-400 text-xs">{t('liveCasinoGuide.rules.andarBahar.popularity.speed.desc')}</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-2 mx-auto">
                        <CheckCircle2 className="w-6 h-6 text-orange-400" />
                      </div>
                      <p className="text-white font-semibold mb-1">{t('liveCasinoGuide.rules.andarBahar.popularity.simplicity.title')}</p>
                      <p className="text-gray-400 text-xs">{t('liveCasinoGuide.rules.andarBahar.popularity.simplicity.desc')}</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-2 mx-auto">
                        <Globe className="w-6 h-6 text-orange-400" />
                      </div>
                      <p className="text-white font-semibold mb-1">{t('liveCasinoGuide.rules.andarBahar.popularity.heritage.title')}</p>
                      <p className="text-gray-400 text-xs">{t('liveCasinoGuide.rules.andarBahar.popularity.heritage.desc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE CASINO TECHNOLOGY */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Live Casino Technology & Features</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Video className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">HD Streaming</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Multiple camera angles with crystal-clear HD video streaming ensure you don't miss any action at the tables.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Users className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">Professional Dealers</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Trained, multilingual dealers provide authentic casino atmosphere with professional game management.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Smartphone className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">Mobile Optimized</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Seamless mobile experience with touch-optimized interfaces for betting on smartphones and tablets.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-3">Fair Play</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Real cards, real wheels, real dice - no RNG involved. Everything happens in real-time with full transparency.
              </p>
            </div>
          </div>

          <div className="mt-12 space-y-8">
            <h3 className="text-2xl font-bold text-white text-center">{t('liveCasinoGuide.tech.advanced.title')}</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-white font-semibold flex items-center gap-2">
                  <Eye className="w-5 h-5 text-brand" />
                  {t('liveCasinoGuide.tech.advanced.cameras.title')}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t('liveCasinoGuide.tech.advanced.cameras.desc')}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-semibold flex items-center gap-2">
                  <Clock className="w-5 h-5 text-brand" />
                  {t('liveCasinoGuide.tech.advanced.timer.title')}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t('liveCasinoGuide.tech.advanced.timer.desc')}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-semibold flex items-center gap-2">
                  <Activity className="w-5 h-5 text-brand" />
                  {t('liveCasinoGuide.tech.advanced.stats.title')}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t('liveCasinoGuide.tech.advanced.stats.desc')}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-semibold flex items-center gap-2">
                  <Headphones className="w-5 h-5 text-brand" />
                  {t('liveCasinoGuide.tech.advanced.chat.title')}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t('liveCasinoGuide.tech.advanced.chat.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BETTING STRATEGIES & BANKROLL MANAGEMENT */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">{t('liveCasinoGuide.bankroll.title')}</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <DollarSign className="w-6 h-6 text-brand" />
                  {t('liveCasinoGuide.bankroll.management.title')}
                </h3>

                <div className="space-y-6">
                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-white font-semibold mb-2">{t('liveCasinoGuide.bankroll.management.limits.title')}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {t('liveCasinoGuide.bankroll.management.limits.desc')}
                    </p>
                  </div>

                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-white font-semibold mb-2">{t('liveCasinoGuide.bankroll.management.sizing.title')}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {t('liveCasinoGuide.bankroll.management.sizing.desc')}
                    </p>
                  </div>

                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-white font-semibold mb-2">{t('liveCasinoGuide.bankroll.management.session.title')}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {t('liveCasinoGuide.bankroll.management.session.desc')}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2">{t('liveCasinoGuide.bankroll.management.records.title')}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {t('liveCasinoGuide.bankroll.management.records.desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-brand" />
                  {t('liveCasinoGuide.bankroll.systems.title')}
                </h3>

                <div className="space-y-6">
                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-white font-semibold mb-2">{t('liveCasinoGuide.bankroll.systems.flat.title')}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {t('liveCasinoGuide.bankroll.systems.flat.desc')}
                    </p>
                  </div>

                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-white font-semibold mb-2">{t('liveCasinoGuide.bankroll.systems.martingale.title')}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {t('liveCasinoGuide.bankroll.systems.martingale.desc')}
                    </p>
                  </div>

                  <div className="border-b border-gray-700 pb-4">
                    <h4 className="text-white font-semibold mb-2">{t('liveCasinoGuide.bankroll.systems.paroli.title')}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {t('liveCasinoGuide.bankroll.systems.paroli.desc')}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2">{t('liveCasinoGuide.bankroll.systems.dalembert.title')}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {t('liveCasinoGuide.bankroll.systems.dalembert.desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-yellow-900/20 border border-yellow-600/30 p-6 rounded-xl">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-yellow-300 font-semibold mb-2">Important Reminder</h4>
                <p className="text-yellow-200 text-sm leading-relaxed">
                  {t('liveCasinoGuide.bankroll.systems.note')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE CASINO ETIQUETTE */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">{t('liveCasinoGuide.etiquette.title')}</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">{t('liveCasinoGuide.etiquette.dealer.title')}</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">{t('liveCasinoGuide.etiquette.dealer.respect.title')}</p>
                    <p className="text-gray-300 text-sm">{t('liveCasinoGuide.etiquette.dealer.respect.desc')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">{t('liveCasinoGuide.etiquette.dealer.questions.title')}</p>
                    <p className="text-gray-300 text-sm">{t('liveCasinoGuide.etiquette.dealer.questions.desc')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">{t('liveCasinoGuide.etiquette.dealer.tipping.title')}</p>
                    <p className="text-gray-300 text-sm">{t('liveCasinoGuide.etiquette.dealer.tipping.desc')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">{t('liveCasinoGuide.etiquette.dealer.blame.title')}</p>
                    <p className="text-gray-300 text-sm">{t('liveCasinoGuide.etiquette.dealer.blame.desc')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">{t('liveCasinoGuide.etiquette.chat.title')}</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">{t('liveCasinoGuide.etiquette.chat.friendly.title')}</p>
                    <p className="text-gray-300 text-sm">{t('liveCasinoGuide.etiquette.chat.friendly.desc')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">{t('liveCasinoGuide.etiquette.chat.language.title')}</p>
                    <p className="text-gray-300 text-sm">{t('liveCasinoGuide.etiquette.chat.language.desc')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">{t('liveCasinoGuide.etiquette.chat.spam.title')}</p>
                    <p className="text-gray-300 text-sm">{t('liveCasinoGuide.etiquette.chat.spam.desc')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">{t('liveCasinoGuide.etiquette.chat.debates.title')}</p>
                    <p className="text-gray-300 text-sm">{t('liveCasinoGuide.etiquette.chat.debates.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">{t('liveCasinoGuide.etiquette.features.social.title')}</h4>
              <p className="text-gray-300 text-sm">{t('liveCasinoGuide.etiquette.features.social.desc')}</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">{t('liveCasinoGuide.etiquette.features.safe.title')}</h4>
              <p className="text-gray-300 text-sm">{t('liveCasinoGuide.etiquette.features.safe.desc')}</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Globe className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="text-white font-semibold mb-2">{t('liveCasinoGuide.etiquette.features.multilingual.title')}</h4>
              <p className="text-gray-300 text-sm">{t('liveCasinoGuide.etiquette.features.multilingual.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE LIVE CASINO */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">{t('liveCasinoGuide.mobile.title')}</h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                {t('liveCasinoGuide.mobile.p1')}
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">{t('liveCasinoGuide.mobile.advantages.title')}</h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Smartphone className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-medium">{t('liveCasinoGuide.mobile.advantages.anywhere.title')}</p>
                      <p className="text-gray-300 text-sm">{t('liveCasinoGuide.mobile.advantages.anywhere.desc')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Wifi className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-medium">{t('liveCasinoGuide.mobile.advantages.interface.title')}</p>
                      <p className="text-gray-300 text-sm">{t('liveCasinoGuide.mobile.advantages.interface.desc')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-medium">{t('liveCasinoGuide.mobile.advantages.quick.title')}</p>
                      <p className="text-gray-300 text-sm">{t('liveCasinoGuide.mobile.advantages.quick.desc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">{t('liveCasinoGuide.mobile.technical.title')}</h3>

              <div className="space-y-4">
                <div className="border-b border-gray-700 pb-4">
                  <h4 className="text-white font-semibold mb-2">{t('liveCasinoGuide.mobile.technical.internet.title')}</h4>
                  <p className="text-gray-300 text-sm">{t('liveCasinoGuide.mobile.technical.internet.desc')}</p>
                </div>

                <div className="border-b border-gray-700 pb-4">
                  <h4 className="text-white font-semibold mb-2">{t('liveCasinoGuide.mobile.technical.device.title')}</h4>
                  <p className="text-gray-300 text-sm">{t('liveCasinoGuide.mobile.technical.device.desc')}</p>
                </div>

                <div className="border-b border-gray-700 pb-4">
                  <h4 className="text-white font-semibold mb-2">{t('liveCasinoGuide.mobile.technical.battery.title')}</h4>
                  <p className="text-gray-300 text-sm">{t('liveCasinoGuide.mobile.technical.battery.desc')}</p>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2">{t('liveCasinoGuide.mobile.technical.data.title')}</h4>
                  <p className="text-gray-300 text-sm">{t('liveCasinoGuide.mobile.technical.data.desc')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold text-white mb-6 text-center">{t('liveCasinoGuide.mobile.tips.title')}</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <Eye className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">{t('liveCasinoGuide.mobile.tips.orientation.title')}</h4>
                <p className="text-gray-300 text-sm">{t('liveCasinoGuide.mobile.tips.orientation.desc')}</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <Volume2 className="w-6 h-6 text-green-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">{t('liveCasinoGuide.mobile.tips.audio.title')}</h4>
                <p className="text-gray-300 text-sm">{t('liveCasinoGuide.mobile.tips.audio.desc')}</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <Clock className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">{t('liveCasinoGuide.mobile.tips.timer.title')}</h4>
                <p className="text-gray-300 text-sm">{t('liveCasinoGuide.mobile.tips.timer.desc')}</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <Shield className="w-6 h-6 text-red-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">{t('liveCasinoGuide.mobile.tips.security.title')}</h4>
                <p className="text-gray-300 text-sm">{t('liveCasinoGuide.mobile.tips.security.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE CASINO VS RNG GAMES */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('liveCasinoGuide.vsRng.title')}</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              {t('liveCasinoGuide.vsRng.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-900/20 to-green-950/20 border border-green-600/30 p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Video className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t('liveCasinoGuide.vsRng.live.title')}</h3>
              </div>

              <ul className="space-y-4">
                {(t('liveCasinoGuide.vsRng.live.items', { returnObjects: true }) as string[]).map((item, index) => {
                  const parts = item.split(': ');
                  const title = parts[0];
                  const desc = parts[1] || '';
                  return (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white font-medium">{title}</p>
                        <p className="text-gray-300 text-sm">{desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-blue-950/20 border border-blue-600/30 p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Gamepad2 className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t('liveCasinoGuide.vsRng.rng.title')}</h3>
              </div>

              <ul className="space-y-4">
                {(t('liveCasinoGuide.vsRng.rng.items', { returnObjects: true }) as string[]).map((item, index) => {
                  const parts = item.split(': ');
                  const title = parts[0];
                  const desc = parts[1] || '';
                  return (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white font-medium">{title}</p>
                        <p className="text-gray-300 text-sm">{desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-600/30 p-8 rounded-xl">
            <h3 className="text-white font-bold text-xl mb-4 text-center">{t('liveCasinoGuide.vsRng.choice.title')}</h3>
            <p className="text-gray-300 text-center leading-relaxed max-w-4xl mx-auto">
              {t('liveCasinoGuide.vsRng.choice.desc')}
            </p>
          </div>
        </div>
      </section>

      {/* POPULAR LIVE CASINO GAME TYPES */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('liveCasinoGuide.categories.title')}</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              {t('liveCasinoGuide.categories.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-xl hover:border-brand/50 transition-colors">
              <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-4">
                <Spade className="w-7 h-7 text-red-400" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{t('liveCasinoGuide.categories.table.title')}</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {t('liveCasinoGuide.categories.table.desc')}
              </p>
              <ul className="text-gray-400 text-sm space-y-2">
                <li> Baccarat (Punto Banco, Speed Baccarat)</li>
                <li> Blackjack (Classic, Infinite, VIP)</li>
                <li> Roulette (European, American, French)</li>
                <li> Poker (Casino Hold'em, Three Card)</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-xl hover:border-brand/50 transition-colors">
              <div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-4">
                <Crown className="w-7 h-7 text-yellow-400" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{t('liveCasinoGuide.categories.asian.title')}</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {t('liveCasinoGuide.categories.asian.desc')}
              </p>
              <ul className="text-gray-400 text-sm space-y-2">
                <li> Dragon Tiger (Fast-paced card game)</li>
                <li> Sic Bo (Ancient Chinese dice game)</li>
                <li> Andar Bahar (Indian card game)</li>
                <li> Teen Patti (Indian poker variant)</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-xl hover:border-brand/50 transition-colors">
              <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{t('liveCasinoGuide.categories.shows.title')}</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {t('liveCasinoGuide.categories.shows.desc')}
              </p>
              <ul className="text-gray-400 text-sm space-y-2">
                <li> Crazy Time (Bonus wheel game)</li>
                <li> Monopoly Live (Board game themed)</li>
                <li> Dream Catcher (Money wheel)</li>
                <li> Deal or No Deal (TV show format)</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-xl hover:border-brand/50 transition-colors">
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{t('liveCasinoGuide.categories.lightning.title')}</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {t('liveCasinoGuide.categories.lightning.desc')}
              </p>
              <ul className="text-gray-400 text-sm space-y-2">
                <li> Lightning Roulette (Up to 500x multipliers)</li>
                <li> Lightning Baccarat (8x multipliers)</li>
                <li> Lightning Blackjack (Unlimited multipliers)</li>
                <li> Lightning Dice (1000x multipliers)</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-xl hover:border-brand/50 transition-colors">
              <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
                <Trophy className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{t('liveCasinoGuide.categories.vip.title')}</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {t('liveCasinoGuide.categories.vip.desc')}
              </p>
              <ul className="text-gray-400 text-sm space-y-2">
                <li> VIP Baccarat (High limits, private tables)</li>
                <li> Salon Privé (One-on-one dealer)</li>
                <li> VIP Roulette (Premium experience)</li>
                <li> High Roller Blackjack (Big stakes)</li>
              </ul>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-xl hover:border-brand/50 transition-colors">
              <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4">
                <Dices className="w-7 h-7 text-orange-400" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{t('liveCasinoGuide.categories.specialty.title')}</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {t('liveCasinoGuide.categories.specialty.desc')}
              </p>
              <ul className="text-gray-400 text-sm space-y-2">
                <li> Craps (Dice game with multiple bets)</li>
                <li> Lottery Games (Live ball draws)</li>
                <li> Wheel of Fortune (Spin to win)</li>
                <li> Keno (Number selection game)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GETTING STARTED GUIDE */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('liveCasinoGuide.gettingStarted.title')}</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              {t('liveCasinoGuide.gettingStarted.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-6">{t('liveCasinoGuide.gettingStarted.guideTitle')}</h3>

                <div className="space-y-6">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {(t('liveCasinoGuide.gettingStarted.steps', { returnObjects: true }) as any[])[2].desc}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">{(t('liveCasinoGuide.gettingStarted.steps', { returnObjects: true }) as any[])[3].title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {(t('liveCasinoGuide.gettingStarted.steps', { returnObjects: true }) as any[])[3].desc}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">5</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">{(t('liveCasinoGuide.gettingStarted.steps', { returnObjects: true }) as any[])[4].title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {(t('liveCasinoGuide.gettingStarted.steps', { returnObjects: true }) as any[])[4].desc}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-6">{t('liveCasinoGuide.tips.title')}</h3>

                <div className="space-y-4">
                  <div className="bg-blue-900/20 border border-blue-600/30 p-4 rounded-lg">
                    <h4 className="text-blue-300 font-semibold mb-2">{t('liveCasinoGuide.tips.simple.title')}</h4>
                    <p className="text-blue-200 text-sm">{t('liveCasinoGuide.tips.simple.desc')}</p>
                  </div>

                  <div className="bg-green-900/20 border border-green-600/30 p-4 rounded-lg">
                    <h4 className="text-green-300 font-semibold mb-2">{t('liveCasinoGuide.tips.limits.title')}</h4>
                    <p className="text-green-200 text-sm">{t('liveCasinoGuide.tips.limits.desc')}</p>
                  </div>

                  <div className="bg-purple-900/20 border border-purple-600/30 p-4 rounded-lg">
                    <h4 className="text-purple-300 font-semibold mb-2">{t('liveCasinoGuide.tips.etiquette.title')}</h4>
                    <p className="text-purple-200 text-sm">{t('liveCasinoGuide.tips.etiquette.desc')}</p>
                  </div>

                  <div className="bg-orange-900/20 border border-orange-600/30 p-4 rounded-lg">
                    <h4 className="text-orange-300 font-semibold mb-2">{t('liveCasinoGuide.tips.breaks.title')}</h4>
                    <p className="text-orange-200 text-sm">{t('liveCasinoGuide.tips.breaks.desc')}</p>
                  </div>

                  <div className="bg-red-900/20 border border-red-600/30 p-4 rounded-lg">
                    <h4 className="text-red-300 font-semibold mb-2">{t('liveCasinoGuide.tips.sober.title')}</h4>
                    <p className="text-red-200 text-sm">{t('liveCasinoGuide.tips.sober.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-brand/10 to-red-500/10 border border-brand/30 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-4">{t('liveCasinoGuide.finalCta.title')}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('liveCasinoGuide.finalCta.p1')}
              <br />
              {t('liveCasinoGuide.finalCta.p2')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <LocalizedLink
                to="/guides/registration"
                className="bg-brand hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                {t('liveCasinoGuide.finalCta.regCta')}
              </LocalizedLink>
              <LocalizedLink
                to="/guides/deposit"
                className="border border-brand text-brand hover:bg-brand hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                {t('liveCasinoGuide.finalCta.depCta')}
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE CASINO FAQ */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('liveCasinoGuide.faq.title')}</h2>
            <p className="text-gray-300 text-lg">
              {t('liveCasinoGuide.faq.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {(t('liveCasinoGuide.faq.items', { returnObjects: true }) as { question: string; answer: string }[]).map((item, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-brand/50 transition-colors">
                <h3 className="text-white font-bold text-lg mb-3 flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  {item.question}
                </h3>
                <p className="text-gray-300 leading-relaxed pl-8">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSIBLE GAMING REMINDER */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-2 border-yellow-600/40 rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-yellow-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-7 h-7 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{t('liveCasinoGuide.responsible.title')}</h3>
                <p className="text-yellow-200 text-lg leading-relaxed">
                  {t('liveCasinoGuide.responsible.subtitle')}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="space-y-3">
                <h3 className="text-white font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                  {t('liveCasinoGuide.responsible.dos.title')}
                </h3>
                <ul className="text-yellow-100 text-sm space-y-2 pl-7">
                  {dosItems.map((item, index) => (
                    <li key={index}> {item}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-white font-semibold flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  {t('liveCasinoGuide.responsible.donts.title')}
                </h3>
                <ul className="text-yellow-100 text-sm space-y-2 pl-7">
                  {dontsItems.map((item, index) => (
                    <li key={index}> {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-yellow-600/30">
              <p className="text-yellow-200 text-sm text-center">
                {t('liveCasinoGuide.responsible.help')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LiveCasinoGuide;

