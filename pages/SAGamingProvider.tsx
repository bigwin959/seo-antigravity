import React from 'react';
import { LocalizedLink } from '../components/LocalizedLink';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { Breadcrumbs } from '../components/Section';
import { LOGO_URL } from '../constants';
import {
  Video,
  Users,
  Trophy,
  Globe,
  Award,
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
  Lightbulb,
  BadgeCheck,
  Heart,
  DollarSign,
  Sparkles,
  Zap,
  Smartphone,
  Wifi,
  Camera,
  Mic,
  Languages,
  Dices,
  Spade
} from 'lucide-react';

const safeMap = (data: any) => Array.isArray(data) ? data : [];

const SAGamingProvider: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        metadata={{
          title: t('providers.saGaming.seo.title'),
          description: t('providers.saGaming.seo.description'),
          keywords: safeMap(t('providers.saGaming.seo.keywords', { returnObjects: true })),
          canonicalUrl: "https://bigwinofficial.com/providers/sa-gaming",
          ogType: 'article',
          publishedTime: '2025-01-01T00:00:00+06:00',
          modifiedTime: new Date().toISOString(),
          author: 'Bigwin959 Guide',
          schema: {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t('providers.saGaming.seo.schema.headline'),
            "description": t('providers.saGaming.seo.schema.description'),
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
              "@id": "https://bigwinofficial.com/providers/sa-gaming"
            }
          }
        }}
      />

      <Breadcrumbs items={[
        { label: t('nav.guides'), path: '/guides' },
        { label: t('nav.liveCasino'), path: '/guides/live-casino' },
        { label: t('breadcrumbs.saGaming'), path: '/providers/sa-gaming' }
      ]} />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-900 via-gray-900 to-black py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 px-4 py-2 rounded-full mb-6">
              <Globe className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-semibold">{t('providers.saGaming.hero.badge')}</span>
            </div>

            <h1
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              dangerouslySetInnerHTML={{ __html: t('providers.saGaming.hero.title') }}
            />
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('providers.saGaming.hero.subtitle')}
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-10">
              {safeMap(t('providers.saGaming.hero.stats', { returnObjects: true })).map((stat: any, i: number) => {
                const Icon = [Crown, Video, Languages, Shield][i];
                return (
                  <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20">
                    <Icon className="w-5 h-5 text-blue-400" />
                    <span className="text-white text-sm font-medium">{stat.text}</span>
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
                <h2 className="text-3xl font-bold text-white mb-6">{t('providers.saGaming.intro.title')}</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  {t('providers.saGaming.intro.p1')}
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {t('providers.saGaming.intro.p2')}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {t('providers.saGaming.intro.p3')}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 p-6 rounded-xl">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5 text-blue-400" />
                  {t('providers.saGaming.intro.highlights.title')}
                </h3>
                <ul className="space-y-3 text-gray-300 text-sm">
                  {safeMap(t('providers.saGaming.intro.highlights.items', { returnObjects: true })).map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-900/20 border border-blue-600/30 p-5 rounded-xl">
                <h3 className="text-white font-bold mb-3">{t('providers.saGaming.intro.marketFocus.title')}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  {t('providers.saGaming.intro.marketFocus.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GAME CATEGORIES */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('providers.saGaming.portfolio.title')}</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              {t('providers.saGaming.portfolio.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safeMap(t('providers.saGaming.portfolio.games', { returnObjects: true })).map((game: any, i: number) => {
              const Icon = [Spade, Crown, Dices, Target, Sparkles, Gamepad2][i];
              const colorClass = [
                "bg-red-500/10 text-red-400 hover:border-blue-500/50",
                "bg-yellow-500/10 text-yellow-400 hover:border-blue-500/50",
                "bg-purple-500/10 text-purple-400 hover:border-blue-500/50",
                "bg-green-500/10 text-green-400 hover:border-blue-500/50",
                "bg-orange-500/10 text-orange-400 hover:border-blue-500/50",
                "bg-blue-500/10 text-blue-400 hover:border-blue-500/50"
              ][i];
              const iconColor = colorClass.split(' ')[1];
              const btnBg = colorClass.split(' ')[0];

              return (
                <div key={i} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
                  <div className={`w-14 h-14 ${btnBg} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 ${iconColor}`} />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">{game.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {game.desc}
                  </p>
                  <ul className="text-gray-400 text-sm space-y-2">
                    {game.features.map((feature: string, j: number) => (
                      <li key={j}>{feature}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURES & TECHNOLOGY */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('providers.saGaming.technology.title')}</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              {t('providers.saGaming.technology.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safeMap(t('providers.saGaming.technology.features', { returnObjects: true })).map((feature: any, i: number) => {
              const Icon = [Camera, Smartphone, Languages, Shield][i];
              const colorClass = [
                "bg-blue-500/10 text-blue-400",
                "bg-green-500/10 text-green-400",
                "bg-purple-500/10 text-purple-400",
                "bg-red-500/10 text-red-400"
              ][i];
              const iconColor = colorClass.split(' ')[1];
              const bgClass = colorClass.split(' ')[0];
              return (
                <div key={i} className="text-center">
                  <div className={`w-16 h-16 ${bgClass} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                    <Icon className={`w-8 h-8 ${iconColor}`} />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-blue-400" />
                {t('providers.saGaming.technology.dealers.title')}
              </h3>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  {t('providers.saGaming.technology.dealers.desc')}
                </p>
                <ul className="text-gray-300 space-y-2 text-sm">
                  {safeMap(t('providers.saGaming.technology.dealers.items', { returnObjects: true })).map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <MonitorPlay className="w-6 h-6 text-blue-400" />
                {t('providers.saGaming.technology.studio.title')}
              </h3>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  {t('providers.saGaming.technology.studio.desc')}
                </p>
                <ul className="text-gray-300 space-y-2 text-sm">
                  {safeMap(t('providers.saGaming.technology.studio.items', { returnObjects: true })).map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SA GAMING */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('providers.saGaming.whyChoose.title')}</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              {t('providers.saGaming.whyChoose.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safeMap(t('providers.saGaming.whyChoose.items', { returnObjects: true })).map((item: any, i: number) => {
              const Icon = [Globe, Users, Smartphone, Clock, Shield, TrendingUp][i];
              return (
                <div key={i} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PLAYER BENEFITS */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('providers.saGaming.benefits.title')}</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              {t('providers.saGaming.benefits.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-600/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">{t('providers.saGaming.benefits.casual.title')}</h3>
              <ul className="space-y-4">
                {safeMap(t('providers.saGaming.benefits.casual.items', { returnObjects: true })).map((item: any, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-1">{item.title}</p>
                      <p className="text-gray-300 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-600/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">{t('providers.saGaming.benefits.vip.title')}</h3>
              <ul className="space-y-4">
                {safeMap(t('providers.saGaming.benefits.vip.items', { returnObjects: true })).map((item: any, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Crown className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-1">{item.title}</p>
                      <p className="text-gray-300 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 p-8 md:p-12 rounded-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('providers.saGaming.cta.title')}
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              {t('providers.saGaming.cta.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <LocalizedLink
                to="/guides/live-casino"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
              >
                <Play className="w-5 h-5" />
                {t('providers.saGaming.cta.guide')}
              </LocalizedLink>
              <LocalizedLink
                to="/"
                className="inline-flex items-center gap-2 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
              >
                <DollarSign className="w-5 h-5" />
                {t('providers.saGaming.cta.play')}
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SAGamingProvider;

