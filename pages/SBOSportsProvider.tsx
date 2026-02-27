import React from 'react';
import { LocalizedLink } from '../components/LocalizedLink';
import { useTranslation, Trans } from 'react-i18next';
import SEO from '../components/SEO';
import { Breadcrumbs } from '../components/Section';
import { OFFICIAL_DOMAIN } from '../constants';
import {
  ExternalLink, CheckCircle, Trophy, Globe, Shield, Zap,
  Target, Activity, TrendingUp, Users, Clock, Smartphone,
  BarChart3, Star, Award, Flame, DollarSign, MonitorPlay,
  ChevronRight, Wifi, PlayCircle, Layers, Tv, Radio
} from 'lucide-react';

const safeMap = (data: any) => Array.isArray(data) ? data : [];

const SBOSportsProvider: React.FC = () => {
  const { t } = useTranslation();

  const schema = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    "name": t('providers.sboSports.seo.schema.name'),
    "description": t('providers.sboSports.seo.schema.description'),
    "url": "https://bigwinofficial.com/providers/sbo-sports"
  };

  return (
    <>
      <SEO metadata={{
        title: t('providers.sboSports.seo.title'),
        description: t('providers.sboSports.seo.description'),
        keywords: safeMap(t('providers.sboSports.seo.keywords', { returnObjects: true })),
        canonicalUrl: "https://bigwinofficial.com/providers/sbo-sports",
        ogType: 'article',
        publishedTime: '2025-01-01T00:00:00+06:00',
        modifiedTime: new Date().toISOString(),
        author: 'Bigwin959 Guide',
        schema: schema
      }} />

      <Breadcrumbs items={[
        { label: t('nav.providers'), path: '/providers' },
        { label: t('breadcrumbs.sboSports'), path: '/providers/sbo-sports' }
      ]} />

      {/* HERO SECTION */}
      <section className="relative py-20 bg-gradient-to-br from-red-900/30 via-gray-900 to-orange-900/30 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc9LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-red-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 px-4 py-2 rounded-full mb-6">
              <Tv className="w-5 h-5 text-red-400" />
              <span className="text-red-300 text-sm font-bold">{t('providers.sboSports.hero.badge')}</span>
            </div>
            <h1
              className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
              dangerouslySetInnerHTML={{ __html: t('providers.sboSports.hero.title') }}
            />

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('providers.sboSports.hero.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={OFFICIAL_DOMAIN} target="_blank" rel="nofollow noopener noreferrer" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-red-500/30 flex items-center gap-2">
                {t('providers.sboSports.hero.cta.start')} <ExternalLink className="w-5 h-5" />
              </a>
              <LocalizedLink to="/guides/sports-betting" className="border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-bold py-4 px-10 rounded-full transition-colors">
                {t('providers.sboSports.hero.cta.guide')}
              </LocalizedLink>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {safeMap(t('providers.sboSports.hero.stats', { returnObjects: true })).map((stat: any, i: number) => {
              const Icon = [Tv, DollarSign, Radio, Globe][i];
              return (
                <div key={i} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center">
                  <Icon className="w-8 h-8 text-red-400 mx-auto mb-2" />
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
              <h2 className="text-4xl font-bold text-white mb-6 border-l-4 border-red-500 pl-6">
                {t('providers.sboSports.intro.title')}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {t('providers.sboSports.intro.p1')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                {t('providers.sboSports.intro.p2')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                {t('providers.sboSports.intro.p3')}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t('providers.sboSports.intro.p4')}
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/10 blur-3xl rounded-full"></div>
              <img
                src="https://res.cloudinary.com/dmyocpyxd/image/upload/v1767689384/SBO%20Platform-Screenshot.jpg"
                srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_300,f_auto,q_auto/v1767689384/SBO%20Platform-Screenshot.jpg 300w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_600,f_auto,q_auto/v1767689384/SBO%20Platform-Screenshot.jpg 600w"
                sizes="(max-width: 768px) 100vw, 500px"
                width="600"
                height="400"
                loading="lazy"
                alt="SBO Sports Platform"
                className="relative z-10 rounded-2xl shadow-2xl border border-gray-700 w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* KEY FEATURES */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{t('providers.sboSports.features.title')}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t('providers.sboSports.features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Live Streaming */}
            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-600/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <Tv className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t('providers.sboSports.features.streaming.title')}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('providers.sboSports.features.streaming.desc1')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('providers.sboSports.features.streaming.desc2')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('providers.sboSports.features.streaming.desc3')}
              </p>
              <div className="bg-gray-900/50 rounded-xl p-4 mt-4">
                <div className="text-sm text-gray-400 mb-3">{t('providers.sboSports.features.streaming.coverage.title')}</div>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                  {safeMap(t('providers.sboSports.features.streaming.coverage.items', { returnObjects: true })).map((item: string, i: number) => (
                    <div key={i}>• {item}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cash Out */}
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-600/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t('providers.sboSports.features.cashOut.title')}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('providers.sboSports.features.cashOut.desc1')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('providers.sboSports.features.cashOut.desc2')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('providers.sboSports.features.cashOut.desc3')}
              </p>
              <div className="bg-gray-900/50 rounded-xl p-4 mt-4">
                <div className="text-sm text-gray-400 mb-3">{t('providers.sboSports.features.cashOut.example.title')}</div>
                <div className="space-y-2 text-xs text-gray-300">
                  {safeMap(t('providers.sboSports.features.cashOut.example.items', { returnObjects: true })).map((item: string, i: number) => (
                    <div key={i} className={i === 2 ? "text-green-400" : i === 3 ? "text-gray-500" : ""}>{item}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Virtual Sports */}
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-600/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Radio className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t('providers.sboSports.features.virtual.title')}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('providers.sboSports.features.virtual.desc1')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('providers.sboSports.features.virtual.desc2')}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t('providers.sboSports.features.virtual.desc3')}
              </p>
            </div>

            {/* Extensive Markets */}
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-600/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t('providers.sboSports.features.markets.title')}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('providers.sboSports.features.markets.desc1')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t('providers.sboSports.features.markets.desc2')}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t('providers.sboSports.features.markets.desc3')}
              </p>
            </div>
          </div>
        </section>

        {/* SPORTS COVERAGE */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{t('providers.sboSports.sports.title')}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t('providers.sboSports.sports.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {safeMap(t('providers.sboSports.sports.items', { returnObjects: true })).map((sport: any, i: number) => {
              const Icon = [Trophy, Activity, Target, Flame, Star, Zap][i];
              return (
                <div key={i} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-red-500/50 transition-all">
                  <Icon className="w-12 h-12 text-red-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{sport.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{sport.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {sport.tags.map((tag: string, j: number) => (
                      <span key={j} className="px-2 py-1 bg-red-500/20 text-red-300 rounded text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* PLATFORM ADVANTAGES */}
        <section className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{t('providers.sboSports.advantages.title')}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t('providers.sboSports.advantages.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safeMap(t('providers.sboSports.advantages.items', { returnObjects: true })).map((item: any, i: number) => {
              const Icon = [Tv, DollarSign, Radio, TrendingUp, Smartphone, Zap, BarChart3, Shield, Users][i];
              return (
                <div key={i} className="bg-gray-900/50 rounded-xl p-6 hover:border hover:border-red-500/50 transition-all">
                  <Icon className="w-10 h-10 text-red-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* BETTING EXPERIENCE */}
        <section>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">{t('providers.sboSports.experience.title')}</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                {t('providers.sboSports.experience.p1')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                {t('providers.sboSports.experience.p2')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                {t('providers.sboSports.experience.p3')}
              </p>
              <div className="space-y-3">
                {safeMap(t('providers.sboSports.experience.features', { returnObjects: true })).map((feature: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-red-400" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/10 blur-3xl rounded-full"></div>
              <img
                src="https://res.cloudinary.com/dmyocpyxd/image/upload/v1767689383/SBO%20Interface-Screenshot.jpg"
                srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_300,f_auto,q_auto/v1767689383/SBO%20Interface-Screenshot.jpg 300w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_600,f_auto,q_auto/v1767689383/SBO%20Interface-Screenshot.jpg 600w"
                sizes="(max-width: 768px) 100vw, 500px"
                width="600"
                height="400"
                loading="lazy"
                alt="SBO Sports Interface"
                className="relative z-10 rounded-2xl shadow-2xl border border-gray-700 w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* MOBILE BETTING */}
        <section className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-600/30 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/10 blur-3xl rounded-full"></div>
              <img
                src="https://res.cloudinary.com/dmyocpyxd/image/upload/v1767689383/SBO%20Mobile-Screenshot.jpg"
                srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_300,f_auto,q_auto/v1767689383/SBO%20Mobile-Screenshot.jpg 300w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_600,f_auto,q_auto/v1767689383/SBO%20Mobile-Screenshot.jpg 600w"
                sizes="(max-width: 768px) 100vw, 500px"
                width="600"
                height="400"
                loading="lazy"
                alt="SBO Sports Mobile"
                className="relative z-10 rounded-2xl shadow-2xl border border-gray-700 w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">{t('providers.sboSports.mobile.title')}</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                {t('providers.sboSports.mobile.p1')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                {t('providers.sboSports.mobile.p2')}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {safeMap(t('providers.sboSports.mobile.features', { returnObjects: true })).map((item: any, i: number) => {
                  const Icon = [Smartphone, Tv, Zap, DollarSign, Wifi, Shield][i];
                  return (
                    <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                      <Icon className="w-5 h-5 text-red-400" />
                      <span>{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* GETTING STARTED */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{t('providers.sboSports.gettingStarted.title')}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t('providers.sboSports.gettingStarted.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {safeMap(t('providers.sboSports.gettingStarted.steps', { returnObjects: true })).map((item: any, i: number) => {
              const Icon = [Users, DollarSign, Globe, CheckCircle][i];
              return (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-red-500/50">
                    <span className="text-2xl font-bold text-red-400">{i + 1}</span>
                  </div>
                  <Icon className="w-8 h-8 text-red-400 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Star className="w-6 h-6 text-red-400" />
              {t('providers.sboSports.gettingStarted.tips.title')}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {safeMap(t('providers.sboSports.gettingStarted.tips.items', { returnObjects: true })).map((tip: any, i: number) => (
                <div key={i}>
                  <h4 className="text-white font-bold mb-2">{tip.title}</h4>
                  <p className="text-gray-400 text-sm">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESPONSIBLE BETTING */}
        <section className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-600/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <Shield className="w-8 h-8 text-yellow-400" />
              {t('providers.sboSports.responsible.title')}
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              {t('providers.sboSports.responsible.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {safeMap(t('providers.sboSports.responsible.tools', { returnObjects: true })).map((item: any, i: number) => (
              <div key={i} className="bg-gray-900/50 rounded-xl p-6 text-center">
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">{t('providers.sboSports.responsible.reminders.title')}</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {safeMap(t('providers.sboSports.responsible.reminders.items', { returnObjects: true })).map((reminder: string, i: number) => (
                <div key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>{reminder}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="text-center py-16 bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-600/30 rounded-2xl">
          <h2 className="text-4xl font-bold text-white mb-6">{t('providers.sboSports.finalCta.title')}</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            {t('providers.sboSports.finalCta.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href={OFFICIAL_DOMAIN} target="_blank" rel="nofollow noopener noreferrer" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-red-500/30 flex items-center gap-2">
              {t('providers.sboSports.finalCta.start')} <ExternalLink className="w-5 h-5" />
            </a>
            <LocalizedLink to="/guides/sports-betting" className="border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-bold py-4 px-10 rounded-full transition-colors">
              {t('providers.sboSports.finalCta.guide')}
            </LocalizedLink>
            <LocalizedLink to="/guides/cricket" className="border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white font-bold py-4 px-10 rounded-full transition-colors">
              {t('providers.sboSports.finalCta.cricket')}
            </LocalizedLink>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            {safeMap(t('providers.sboSports.finalCta.badges', { returnObjects: true })).map((badge: string, i: number) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-red-400" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default SBOSportsProvider;

