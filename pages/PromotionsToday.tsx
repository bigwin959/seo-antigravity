import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LocalizedLink } from '../components/LocalizedLink';
import SEO from '../components/SEO';
import { Breadcrumbs } from '../components/Section';
import { OFFICIAL_DOMAIN } from '../constants';
import {
  Gift,
  Clock,
  AlertTriangle,
  ExternalLink,
  CheckCircle2,
  Trophy,
  Zap,
  Users,
  Target,
  Shield,
  Calendar,
  Globe,
  TrendingUp
} from 'lucide-react';

const PromotionsToday: React.FC = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Get today's date formatted
  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <>
      <SEO
        metadata={{
          title: t('promotionsTodayPage.seo.title', { date: today }),
          description: t('promotionsTodayPage.seo.description', { date: today }),
          keywords: ["promotions today", "daily offers", "casino bonuses today", "cricket betting offers", " bigwin959 promotions", "special events", "deposit bonus", "limited time offers"],
          canonicalUrl: "https://bigwinofficial.com/promotions/today",
          ogType: 'article',
          publishedTime: '2025-01-01T00:00:00+06:00',
          modifiedTime: new Date().toISOString(),
          author: 'Bigwin959 Guide',
          schema: {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Today's Promotions & Events on Bigwin959 – Bangladesh & Myanmar",
            "description": "Check today's active promotions, bonuses, and special events for Bigwin959 players in Bangladesh & Myanmar. Updated daily with latest offers.",
            "author": {
              "@type": "Organization",
              "name": "Bigwin959 Guide"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Bigwin959 Guide",
              "logo": {
                "@type": "ImageObject",
                "url": "https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto/v1767784202/icon.png"
              }
            },
            "datePublished": new Date().toISOString(),
            "dateModified": new Date().toISOString(),
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://bigwinofficial.com/bonuses/today"
            }
          }
        }}
      />

      <Breadcrumbs items={[{ label: 'Bonuses', path: '/bonuses' }, { label: "Today's Promotions", path: '/bonuses/today' }]} />

      {/* HERO SECTION */}
      <section className="relative bg-gray-950 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto/v1767000509/PromotionsToday.jpg"
            srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_600,f_auto,q_auto/v1767000509/PromotionsToday.jpg 600w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_1200,f_auto,q_auto/v1767000509/PromotionsToday.jpg 1200w"
            sizes="100vw"
            width="1200"
            height="600"
            alt="Promotions"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-8 h-8 text-brand" />
            <span className="text-brand font-bold text-lg">{today}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t('promotionsTodayPage.hero.title')}<br />
            on <span className="text-brand">Bigwin959</span>
          </h1>

          <p className="text-xl text-gray-300 mb-4 max-w-3xl">
            {t('promotionsTodayPage.hero.subtitle')}
          </p>

          <div className="bg-gray-900/80 backdrop-blur-md p-6 rounded-xl border border-gray-800 max-w-3xl">
            <p className="text-gray-300 mb-4">
              {t('promotionsTodayPage.hero.intro')}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-950/50 py-2 px-3 rounded-lg w-fit border border-gray-700">
              <AlertTriangle className="w-4 h-4" />
              {t('promotionsTodayPage.hero.warning')}
            </div>
          </div>
        </div>
      </section>

      {/* HOW THIS PAGE WORKS */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{t('promotionsTodayPage.howItWorks.title')}</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {(t('promotionsTodayPage.howItWorks.items', { returnObjects: true }) as any[]).map((item, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center">
                {i === 0 && <CheckCircle2 className="w-12 h-12 text-brand mx-auto mb-4" />}
                {i === 1 && <Zap className="w-12 h-12 text-brand mx-auto mb-4" />}
                {i === 2 && <Shield className="w-12 h-12 text-brand mx-auto mb-4" />}
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-900/20 border border-blue-700/30 p-4 rounded-lg">
            <p className="text-blue-300 text-sm flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span>{t('promotionsTodayPage.howItWorks.tip')}</span>
            </p>
          </div>
        </div>
      </section>

      {/* TODAY'S MAIN HIGHLIGHTS */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('promotionsTodayPage.highlights.title')}
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-brand/20 to-transparent p-6 rounded-2xl border border-brand/30">
              <Gift className="w-12 h-12 text-brand mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">{t('promotionsTodayPage.highlights.items.cricket.title')}</h3>
              <p className="text-gray-300 mb-4">{t('promotionsTodayPage.highlights.items.cricket.desc')}</p>
              <a href="#promo-1" className="text-brand font-bold hover:underline">View Details →</a>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-transparent p-6 rounded-2xl border border-blue-700/30">
              <TrendingUp className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">{t('promotionsTodayPage.highlights.items.unlimited.title')}</h3>
              <p className="text-gray-300 mb-4">{t('promotionsTodayPage.highlights.items.unlimited.desc')}</p>
              <a href="#promo-2" className="text-blue-400 font-bold hover:underline">View Details →</a>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-transparent p-6 rounded-2xl border border-green-700/30">
              <Users className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">{t('promotionsTodayPage.highlights.items.affiliate.title')}</h3>
              <p className="text-gray-300 mb-4">{t('promotionsTodayPage.highlights.items.affiliate.desc')}</p>
              <a href="#promo-3" className="text-green-400 font-bold hover:underline">View Details →</a>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <p className="text-gray-300 mb-4">{t('promotionsTodayPage.highlights.recommendation')}</p>
            <div className="flex flex-wrap gap-4">
              <LocalizedLink to="/guides/registration" className="text-brand font-bold hover:underline flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> {t('promotionsTodayPage.highlights.guides.registration')}
              </LocalizedLink>
              <LocalizedLink to="/guides/deposit" className="text-brand font-bold hover:underline flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> {t('promotionsTodayPage.highlights.guides.deposit')}
              </LocalizedLink>
              <LocalizedLink to="/bonuses" className="text-brand font-bold hover:underline flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> {t('promotionsTodayPage.highlights.guides.bonuses')}
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>

      {/* TODAY'S DEPOSIT & BONUS PROMOTIONS */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('promotionsTodayPage.depositPromos.title')}
          </h2>

          <div className="space-y-12">
            {/* PROMO 1: 125% Cricket First Deposit Bonus */}
            <div id="promo-1" className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-brand/10 text-brand text-xs font-bold rounded-full mb-3 uppercase tracking-wider border border-brand/20">
                    {t('promotionsTodayPage.depositPromos.cricket.badge')}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-2">{t('promotionsTodayPage.depositPromos.cricket.title')}</h3>
                  <p className="text-xl text-gray-400">{t('promotionsTodayPage.depositPromos.cricket.subtitle')}</p>
                </div>
                <Trophy className="w-16 h-16 text-brand flex-shrink-0" />
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-900 p-4 rounded-lg">
                  <Globe className="w-6 h-6 text-brand mb-2" />
                  <p className="text-xs text-gray-500 mb-1">Region</p>
                  <p className="text-white font-bold">{t('promotionsTodayPage.depositPromos.cricket.stats.region')}</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <Clock className="w-6 h-6 text-brand mb-2" />
                  <p className="text-xs text-gray-500 mb-1">Available Time</p>
                  <p className="text-white font-bold">{t('promotionsTodayPage.depositPromos.cricket.stats.time')}</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <Users className="w-6 h-6 text-brand mb-2" />
                  <p className="text-xs text-gray-500 mb-1">Who Can Join</p>
                  <p className="text-white font-bold">{t('promotionsTodayPage.depositPromos.cricket.stats.who')}</p>
                </div>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 mb-6">
                <h4 className="text-white font-bold mb-3">Basic Idea:</h4>
                <p className="text-gray-300">
                  {t('promotionsTodayPage.depositPromos.cricket.idea')}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-white font-bold mb-4">{t('promotionsTodayPage.depositPromos.cricket.keyPoints.title')}</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {(t('promotionsTodayPage.depositPromos.cricket.keyPoints.items', { returnObjects: true }) as string[]).map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white font-medium">{point}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-red-900/20 border border-red-700/30 p-4 rounded-lg mb-6">
                <p className="text-red-300 text-sm flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                  <span>{t('promotionsTodayPage.depositPromos.cricket.warning')}</span>
                </p>
              </div>

              <a
                href={OFFICIAL_DOMAIN}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand hover:bg-white text-black font-bold py-3 px-6 rounded-full transition-all"
              >
                {t('promotionsTodayPage.depositPromos.cricket.cta')} <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            {/* PROMO 2: Daily Unlimited Bonus */}
            <div id="promo-2" className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-full mb-3 uppercase tracking-wider border border-blue-500/20">
                    {t('promotionsTodayPage.depositPromos.unlimited.badge')}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-2">{t('promotionsTodayPage.depositPromos.unlimited.title')}</h3>
                  <p className="text-xl text-gray-400">{t('promotionsTodayPage.depositPromos.unlimited.subtitle')}</p>
                </div>
                <TrendingUp className="w-16 h-16 text-blue-400 flex-shrink-0" />
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-900 p-4 rounded-lg">
                  <Globe className="w-6 h-6 text-blue-400 mb-2" />
                  <p className="text-xs text-gray-500 mb-1">Region</p>
                  <p className="text-white font-bold">{t('promotionsTodayPage.depositPromos.unlimited.stats.region')}</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-400 mb-2" />
                  <p className="text-xs text-gray-500 mb-1">Available Time</p>
                  <p className="text-white font-bold">{t('promotionsTodayPage.depositPromos.unlimited.stats.time')}</p>
                </div>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 mb-6">
                <h4 className="text-white font-bold mb-3">Basic Idea:</h4>
                <p className="text-gray-300">
                  {t('promotionsTodayPage.depositPromos.unlimited.idea')}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-white font-bold mb-4">{t('promotionsTodayPage.depositPromos.unlimited.keyPoints.title')}</h4>
                <div className="space-y-3">
                  {(t('promotionsTodayPage.depositPromos.unlimited.keyPoints.items', { returnObjects: true }) as string[]).map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-900/20 border border-blue-700/30 p-4 rounded-lg mb-6">
                <p className="text-blue-300 text-sm flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>{t('promotionsTodayPage.depositPromos.unlimited.tip')}</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={OFFICIAL_DOMAIN}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-full transition-all justify-center"
                >
                  {t('promotionsTodayPage.depositPromos.unlimited.cta')} <ExternalLink className="w-5 h-5" />
                </a>
                <LocalizedLink
                  to="/guides/deposit"
                  className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full transition-all justify-center"
                >
                  {t('promotionsTodayPage.depositPromos.unlimited.ctaLearn')}
                </LocalizedLink>
              </div>
            </div>

            {/* PROMO 3: Affiliate Program */}
            <div id="promo-3" className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-green-500/10 text-green-400 text-xs font-bold rounded-full mb-3 uppercase tracking-wider border border-green-500/20">
                    {t('promotionsTodayPage.depositPromos.affiliate.badge')}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-2">{t('promotionsTodayPage.depositPromos.affiliate.title')}</h3>
                  <p className="text-xl text-gray-400">{t('promotionsTodayPage.depositPromos.affiliate.subtitle')}</p>
                </div>
                <Users className="w-16 h-16 text-green-400 flex-shrink-0" />
              </div>

              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 mb-6">
                <h4 className="text-white font-bold mb-3">Basic Idea:</h4>
                <p className="text-gray-300">
                  {t('promotionsTodayPage.depositPromos.affiliate.idea')}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-white font-bold mb-4">{t('promotionsTodayPage.depositPromos.affiliate.keyPoints.title')}</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {(t('promotionsTodayPage.depositPromos.affiliate.keyPoints.items', { returnObjects: true }) as string[]).map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={OFFICIAL_DOMAIN}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-full transition-all"
              >
                {t('promotionsTodayPage.depositPromos.affiliate.cta')} <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TODAY'S GAME EVENTS */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('promotionsTodayPage.gameEvents.title')}
          </h2>

          <div className="space-y-8">
            {/* EVENT 1: Evening Aviator Session */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t('promotionsTodayPage.gameEvents.aviator.title')}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-gray-400">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" /> {t('promotionsTodayPage.gameEvents.aviator.time')}
                    </span>
                    <span className="flex items-center gap-2">
                      <Target className="w-4 h-4" /> {t('promotionsTodayPage.gameEvents.aviator.game')}
                    </span>
                  </div>
                </div>
                <Zap className="w-12 h-12 text-yellow-400 flex-shrink-0" />
              </div>

              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 mb-6">
                <h4 className="text-white font-bold mb-3">What Happens:</h4>
                <p className="text-gray-300">
                  {t('promotionsTodayPage.gameEvents.aviator.desc')}
                </p>
              </div>

              <div className="bg-red-900/20 border border-red-700/30 p-4 rounded-lg mb-6">
                <p className="text-red-300 text-sm flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                  <span>{t('promotionsTodayPage.gameEvents.aviator.warning')}</span>
                </p>
              </div>

              <LocalizedLink
                to="/guides"
                className="inline-flex items-center gap-2 text-brand font-bold hover:underline"
              >
                {t('promotionsTodayPage.gameEvents.aviator.guide')}
              </LocalizedLink>
            </div>

            {/* EVENT 2: Cricket Match Day */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t('promotionsTodayPage.gameEvents.cricket.title')}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-gray-400">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" /> {t('promotionsTodayPage.gameEvents.cricket.time')}
                    </span>
                    <span className="flex items-center gap-2">
                      <Trophy className="w-4 h-4" /> {t('promotionsTodayPage.gameEvents.cricket.game')}
                    </span>
                  </div>
                </div>
                <Trophy className="w-12 h-12 text-brand flex-shrink-0" />
              </div>

              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 mb-6">
                <h4 className="text-white font-bold mb-3">Summary:</h4>
                <p className="text-gray-300">
                  {t('promotionsTodayPage.gameEvents.cricket.desc')}
                </p>
              </div>

              <LocalizedLink
                to="/guides/cricket"
                className="inline-flex items-center gap-2 bg-brand hover:bg-white text-black font-bold py-3 px-6 rounded-full transition-all"
              >
                {t('promotionsTodayPage.gameEvents.cricket.cta')} <ExternalLink className="w-5 h-5" />
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO JOIN TODAY'S PROMOTIONS */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('promotionsTodayPage.howToJoin.title')} <span className="text-brand">{t('promotionsTodayPage.howToJoin.subtitle')}</span>
          </h2>

          <div className="space-y-6">
            {(t('promotionsTodayPage.howToJoin.steps', { returnObjects: true }) as any[]).map((item, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-brand transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand text-black font-bold text-xl flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSIBLE PLAY & RISK REMINDER */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('promotionsTodayPage.responsiblePlay.title')}
          </h2>

          <div className="bg-red-900/20 border border-red-700/30 p-8 rounded-2xl mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-red-400" />
              <h3 className="text-2xl font-bold text-white">{t('promotionsTodayPage.responsiblePlay.safety.title')}</h3>
            </div>

            <p className="text-gray-300 mb-6">
              {t('promotionsTodayPage.responsiblePlay.safety.desc')}
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {(t('promotionsTodayPage.responsiblePlay.safety.items', { returnObjects: true }) as string[]).map((warning, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{warning}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
            <p className="text-gray-400 text-sm">
              {t('promotionsTodayPage.responsiblePlay.footer')}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('promotionsTodayPage.faq.title')}
          </h2>

          <div className="space-y-4">
            {(t('promotionsTodayPage.faq.items', { returnObjects: true }) as any[]).map((item, idx) => (
              <div key={idx} className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-gray-750 transition-colors"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="text-lg font-bold text-white pr-4">{item.q}</span>
                  <div className={`text-brand transition-transform flex-shrink-0 ${openFaq === idx ? 'rotate-90' : ''}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-gray-700 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t('promotionsTodayPage.finalCta.title')}</h2>
          <p className="text-gray-400 mb-8 text-lg">
            {t('promotionsTodayPage.finalCta.subtitle')}
          </p>
          <a
            href={OFFICIAL_DOMAIN}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand hover:bg-white text-black font-bold py-4 px-8 rounded-full transition-all shadow-lg"
          >
            {t('promotionsTodayPage.finalCta.cta')} <ExternalLink className="w-5 h-5" />
          </a>
          <p className="text-gray-500 mt-6 text-sm">
            {t('promotionsTodayPage.finalCta.footer')}
          </p>
        </div>
      </section>
    </>
  );
};

export default PromotionsToday;


