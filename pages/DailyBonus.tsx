import { useTranslation } from 'react-i18next';
import { LocalizedLink } from '../components/LocalizedLink';
import SEO from '../components/SEO';
import { OFFICIAL_DOMAIN } from '../constants';
import {
  Gift,
  Trophy,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Coins,
  TrendingUp,
  Zap,
  Star,
  Target,
  Award,
  Percent,
  RefreshCw,
  Smartphone,
  Egg,
  RotateCw,
  DollarSign,
  Activity
} from 'lucide-react';

const DailyBonus: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        metadata={{
          title: t('dailyBonusPage.seo.title'),
          description: t('dailyBonusPage.seo.description'),
          keywords: (t('dailyBonusPage.seo.keywords', { returnObjects: true }) as string[]),
          canonicalUrl: "https://bigwinofficial.com/daily-bonus",
          ogType: 'article',
          publishedTime: '2025-01-01T00:00:00+06:00',
          modifiedTime: new Date().toISOString(),
          author: 'Bigwin959 Guide',
          schema: {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t('dailyBonusPage.seo.title'),
            "description": t('dailyBonusPage.seo.description'),
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
              "@id": "https://bigwinofficial.com/bonuses/daily"
            }
          }
        }}
      />

      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-orange-950 via-gray-900 to-gray-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-brand/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/30 rounded-full px-4 py-2 mb-6">
            <RefreshCw className="w-4 h-4 text-brand" />
            <span className="text-brand text-sm font-bold">{t('dailyBonusPage.hero.badge')}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t('dailyBonusPage.hero.title')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand via-orange-300 to-brand mt-2">
              {t('dailyBonusPage.hero.subtitle')}
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            {t('dailyBonusPage.hero.desc')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={OFFICIAL_DOMAIN}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="group bg-brand hover:bg-yellow-300 text-black text-base font-bold py-4 px-8 rounded-full shadow-[0_0_30px_rgba(255,215,0,0.4)] hover:shadow-[0_0_40px_rgba(255,215,0,0.6)] transition-all flex items-center justify-center gap-2"
            >
              <span>{t('dailyBonusPage.hero.cta')}</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>


      {/* DAILY BONUSES OVERVIEW */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('dailyBonusPage.overview.title')}
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t('dailyBonusPage.overview.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 'luckySpin', icon: RotateCw, color: 'purple' },
              { id: 'goldenEgg', icon: Egg, color: 'yellow' },
              { id: 'slotBonus', icon: Percent, color: 'green' },
              { id: 'unlimitedBonus', icon: RefreshCw, color: 'blue' },
              { id: 'rebateBonus', icon: TrendingUp, color: 'red' },
              { id: 'pointCommission', icon: Coins, color: 'brand' }
            ].map((bonus) => (
              <div key={bonus.id} className={`bg-gradient-to-br from-${bonus.color}-900/20 to-gray-800 border border-${bonus.color}-500/30 rounded-xl p-6 hover:border-${bonus.color}-500/60 transition-all`}>
                <div className={`w-14 h-14 bg-${bonus.color}-500/10 rounded-xl flex items-center justify-center mb-4`}>
                  <bonus.icon className={`w-7 h-7 text-${bonus.color === 'brand' ? 'brand' : bonus.color + '-400'}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{t(`dailyBonusPage.overview.bonuses.${bonus.id}.title`)}</h3>
                <p className="text-gray-400 text-sm mb-4">{t(`dailyBonusPage.overview.bonuses.${bonus.id}.desc`)}</p>
                <div className={`flex items-center gap-2 text-${bonus.color === 'brand' ? 'brand' : bonus.color + '-400'} text-xs font-bold`}>
                  <Sparkles className="w-4 h-4" />
                  <span>{t(`dailyBonusPage.overview.bonuses.${bonus.id}.tag`)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* DAILY LUCKY SPIN - DETAILED SECTION */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-900/20 to-gray-800 border border-purple-500/30 rounded-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-purple-500/10 rounded-2xl flex items-center justify-center">
                    <RotateCw className="w-10 h-10 text-purple-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="inline-block bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-1 mb-3">
                    <span className="text-purple-400 text-sm font-bold">{t('dailyBonusPage.luckySpin.badge')}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {t('dailyBonusPage.luckySpin.title')}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {t('dailyBonusPage.luckySpin.desc')}
                  </p>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-purple-400" />
                  {t('dailyBonusPage.luckySpin.prizes.title')}
                </h3>
                {(t('dailyBonusPage.luckySpin.prizes.content', { returnObjects: true }) as string[]).map((para, i) => (
                  <p key={i} className="text-gray-300 text-base leading-relaxed mb-6">
                    {para}
                  </p>
                ))}

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {[
                    { key: 'smartphones', icon: Smartphone },
                    { key: 'cash', icon: DollarSign },
                    { key: 'points', icon: Coins }
                  ].map((p) => (
                    <div key={p.key} className="bg-gray-900/50 border border-purple-500/30 rounded-lg p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <p.icon className="w-6 h-6 text-purple-400" />
                        <h4 className="text-white font-bold">{t(`dailyBonusPage.luckySpin.prizes.categories.${p.key}.title`)}</h4>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed mb-2">
                        {t(`dailyBonusPage.luckySpin.prizes.categories.${p.key}.desc`)}
                      </p>
                      <p className="text-purple-400 text-xs font-bold">{t(`dailyBonusPage.luckySpin.prizes.categories.${p.key}.odds`)}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Target className="w-6 h-6 text-purple-400" />
                  {t('dailyBonusPage.luckySpin.howTo.title')}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed mb-4">
                  {t('dailyBonusPage.luckySpin.howTo.subtitle')}
                </p>

                <ol className="space-y-3 mb-6 list-decimal list-inside text-gray-300">
                  {(t('dailyBonusPage.luckySpin.howTo.steps', { returnObjects: true }) as string[]).map((step, i) => (
                    <li key={i} className="leading-relaxed">
                      <strong className="text-white">{step.split(':')[0]}</strong>
                      {step.split(':').slice(1).join(':')}
                    </li>
                  ))}
                </ol>

                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Award className="w-6 h-6 text-purple-400" />
                  {t('dailyBonusPage.luckySpin.benefits.title')}
                </h3>
                {(t('dailyBonusPage.luckySpin.benefits.content', { returnObjects: true }) as string[]).map((para, i) => (
                  <p key={i} className="text-gray-300 text-base leading-relaxed mb-6">
                    {para}
                  </p>
                ))}

                <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
                  <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-400" />
                    {t('dailyBonusPage.luckySpin.terms.title')}
                  </h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {(t('dailyBonusPage.luckySpin.terms.items', { returnObjects: true }) as string[]).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* DAILY GOLDEN EGG - DETAILED SECTION */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-yellow-900/20 to-gray-800 border border-yellow-500/30 rounded-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-yellow-500/10 rounded-2xl flex items-center justify-center">
                    <Egg className="w-10 h-10 text-yellow-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="inline-block bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-1 mb-3">
                    <span className="text-yellow-400 text-sm font-bold">{t('dailyBonusPage.goldenEgg.badge')}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {t('dailyBonusPage.goldenEgg.title')}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {t('dailyBonusPage.goldenEgg.desc')}
                  </p>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                  {t('dailyBonusPage.goldenEgg.experience.title')}
                </h3>
                {(t('dailyBonusPage.goldenEgg.experience.content', { returnObjects: true }) as string[]).map((para, i) => (
                  <p key={i} className="text-gray-300 text-base leading-relaxed mb-6">
                    {para}
                  </p>
                ))}

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-900/50 border border-yellow-500/30 rounded-lg p-6">
                    <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                      <Coins className="w-5 h-5 text-yellow-400" />
                      {t('dailyBonusPage.goldenEgg.prizes.points.title')}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {t('dailyBonusPage.goldenEgg.prizes.points.desc')}
                    </p>
                    <div className="bg-yellow-500/10 rounded-lg p-3">
                      <p className="text-yellow-300 text-xs font-bold mb-1">{t('dailyBonusPage.goldenEgg.prizes.points.rangeTitle')}:</p>
                      <ul className="text-gray-400 text-xs space-y-1">
                        {(t('dailyBonusPage.goldenEgg.prizes.points.ranges', { returnObjects: true }) as string[]).map((range, i) => (
                          <li key={i}>• {range}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-900/50 border border-yellow-500/30 rounded-lg p-6">
                    <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-yellow-400" />
                      {t('dailyBonusPage.goldenEgg.prizes.cash.title')}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {t('dailyBonusPage.goldenEgg.prizes.cash.desc')}
                    </p>
                    <div className="bg-yellow-500/10 rounded-lg p-3">
                      <p className="text-yellow-300 text-xs font-bold mb-1">{t('dailyBonusPage.goldenEgg.prizes.cash.rangeTitle')}:</p>
                      <ul className="text-gray-400 text-xs space-y-1">
                        {(t('dailyBonusPage.goldenEgg.prizes.cash.ranges', { returnObjects: true }) as string[]).map((range, i) => (
                          <li key={i}>• {range}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Target className="w-6 h-6 text-yellow-400" />
                  {t('dailyBonusPage.goldenEgg.howTo.title')}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed mb-4">
                  {t('dailyBonusPage.goldenEgg.howTo.subtitle')}
                </p>

                <ul className="space-y-3 mb-6">
                  {(t('dailyBonusPage.goldenEgg.howTo.steps', { returnObjects: true }) as string[]).map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">{step.split(':')[0]}</strong>:
                        {step.split(':').slice(1).join(':')}
                      </span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Award className="w-6 h-6 text-yellow-400" />
                  {t('dailyBonusPage.goldenEgg.benefits.title')}
                </h3>
                {(t('dailyBonusPage.goldenEgg.benefits.content', { returnObjects: true }) as string[]).map((para, i) => (
                  <p key={i} className="text-gray-300 text-base leading-relaxed mb-6">
                    {para}
                  </p>
                ))}

                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
                  <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                    {t('dailyBonusPage.goldenEgg.terms.title')}
                  </h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {(t('dailyBonusPage.goldenEgg.terms.items', { returnObjects: true }) as string[]).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 60% SLOT BONUS - DETAILED SECTION */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-900/20 to-gray-800 border border-green-500/30 rounded-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-green-500/10 rounded-2xl flex items-center justify-center">
                    <Percent className="w-10 h-10 text-green-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="inline-block bg-green-500/10 border border-green-500/30 rounded-full px-4 py-1 mb-3">
                    <span className="text-green-400 text-sm font-bold">{t('dailyBonusPage.slotBonus.badge')}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {t('dailyBonusPage.slotBonus.title')}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {t('dailyBonusPage.slotBonus.desc')}
                  </p>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-green-400" />
                  {t('dailyBonusPage.slotBonus.maximize.title')}
                </h3>
                {(t('dailyBonusPage.slotBonus.maximize.content', { returnObjects: true }) as string[]).map((para, i) => (
                  <p key={i} className="text-gray-300 text-base leading-relaxed mb-6">
                    {para}
                  </p>
                ))}

                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 mb-6">
                  <h4 className="text-white font-bold text-lg mb-3">{t('dailyBonusPage.slotBonus.content.example.title')}</h4>
                  <div className="space-y-3 text-gray-300 text-sm">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                      <span>{t('dailyBonusPage.slotBonus.content.example.deposit').split(':')[0]}:</span>
                      <span className="text-white font-bold">{t('dailyBonusPage.slotBonus.content.example.deposit').split(':')[1]}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                      <span>{t('dailyBonusPage.slotBonus.content.example.bonus').split(':')[0]}:</span>
                      <span className="text-green-400 font-bold">{t('dailyBonusPage.slotBonus.content.example.bonus').split(':')[1]}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                      <span>{t('dailyBonusPage.slotBonus.content.example.total').split(':')[0]}:</span>
                      <span className="text-white font-bold text-lg">{t('dailyBonusPage.slotBonus.content.example.total').split(':')[1]}</span>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-3 mt-3">
                      <p className="text-green-400 font-bold text-xs mb-1">{t('dailyBonusPage.slotBonus.content.example.note').split(':')[0]}:</p>
                      <p className="text-gray-400 text-xs">{t('dailyBonusPage.slotBonus.content.example.note').split(':').slice(1).join(':')}</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Target className="w-6 h-6 text-green-400" />
                  {t('dailyBonusPage.slotBonus.content.howTo.title')}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed mb-4">
                  {t('dailyBonusPage.slotBonus.subtitle')}
                </p>

                <ol className="space-y-3 mb-6 list-decimal list-inside text-gray-300">
                  {(t('dailyBonusPage.slotBonus.content.howTo.steps', { returnObjects: true }) as string[]).map((step, i) => (
                    <li key={i} className="leading-relaxed">
                      <strong className="text-white">{step.split(':')[0]}</strong>
                      {step.split(':').slice(1).join(':')}
                    </li>
                  ))}
                </ol>

                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Award className="w-6 h-6 text-green-400" />
                  {t('dailyBonusPage.slotBonus.content.strategy.title')}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  {t('dailyBonusPage.slotBonus.content.strategy.desc')}
                </p>

                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                  <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    {t('dailyBonusPage.slotBonus.terms.title')}
                  </h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {(t('dailyBonusPage.slotBonus.terms.items', { returnObjects: true }) as string[]).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 10% UNLIMITED BONUS - DETAILED SECTION */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-900/20 to-gray-800 border border-blue-500/30 rounded-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-blue-500/10 rounded-2xl flex items-center justify-center">
                    <RefreshCw className="w-10 h-10 text-blue-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="inline-block bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-1 mb-3">
                    <span className="text-blue-400 text-sm font-bold">{t('dailyBonusPage.unlimited.badge')}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {t('dailyBonusPage.unlimited.title')}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {t('dailyBonusPage.unlimited.subtitle')}
                  </p>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-blue-400" />
                  {t('dailyBonusPage.unlimited.content.title')}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  {t('dailyBonusPage.unlimited.content.desc1')}
                </p>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  {t('dailyBonusPage.unlimited.content.desc2')}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-900/50 border border-blue-500/30 rounded-lg p-6">
                    <h4 className="text-white font-bold mb-3">{t('dailyBonusPage.unlimited.content.examples.large.title')}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-gray-300">
                        <span>{t('dailyBonusPage.unlimited.content.examples.large.deposit').split(':')[0]}:</span>
                        <span className="text-white">{t('dailyBonusPage.unlimited.content.examples.large.deposit').split(':')[1]}</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>{t('dailyBonusPage.unlimited.content.examples.large.bonus').split(':')[0]}:</span>
                        <span className="text-blue-400">{t('dailyBonusPage.unlimited.content.examples.large.bonus').split(':')[1]}</span>
                      </div>
                      <div className="flex justify-between text-white font-bold pt-2 border-t border-gray-700">
                        <span>{t('dailyBonusPage.unlimited.content.examples.large.total').split(':')[0]}:</span>
                        <span>{t('dailyBonusPage.unlimited.content.examples.large.total').split(':')[1]}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900/50 border border-blue-500/30 rounded-lg p-6">
                    <h4 className="text-white font-bold mb-3">{t('dailyBonusPage.unlimited.content.examples.small.title')}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-gray-300">
                        <span>{t('dailyBonusPage.unlimited.content.examples.small.deposits').split(':')[0]}:</span>
                        <span className="text-white">{t('dailyBonusPage.unlimited.content.examples.small.deposits').split(':')[1]}</span>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>{t('dailyBonusPage.unlimited.content.examples.small.bonus').split(':')[0]}:</span>
                        <span className="text-blue-400">{t('dailyBonusPage.unlimited.content.examples.small.bonus').split(':')[1]}</span>
                      </div>
                      <div className="flex justify-between text-white font-bold pt-2 border-t border-gray-700">
                        <span>{t('dailyBonusPage.unlimited.content.examples.small.total').split(':')[0]}:</span>
                        <span>{t('dailyBonusPage.unlimited.content.examples.small.total').split(':')[1]}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-blue-400 text-sm text-center mb-6 font-bold">
                  {t('dailyBonusPage.unlimited.content.examples.tip')}
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Target className="w-6 h-6 text-blue-400" />
                  {t('dailyBonusPage.unlimited.content.strategy.title')}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  {t('dailyBonusPage.unlimited.content.strategy.desc')}
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                  {t('dailyBonusPage.unlimited.content.combining.title')}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  {t('dailyBonusPage.unlimited.content.combining.desc')}
                </p>

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                  <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                    {t('dailyBonusPage.unlimited.terms.title')}
                  </h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {(t('dailyBonusPage.unlimited.terms.items', { returnObjects: true }) as string[]).map((item, i) => (
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
        </div>
      </section>


      {/* DAILY REBATE BONUS - DETAILED SECTION */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-900/20 to-gray-800 border border-red-500/30 rounded-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-red-500/10 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-10 h-10 text-red-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="inline-block bg-red-500/10 border border-red-500/30 rounded-full px-4 py-1 mb-3">
                    <span className="text-red-400 text-sm font-bold">{t('dailyBonusPage.rebate.badge')}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {t('dailyBonusPage.rebate.title')}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {t('dailyBonusPage.rebate.subtitle')}
                  </p>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-red-400" />
                  {t('dailyBonusPage.rebate.content.title')}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  {t('dailyBonusPage.rebate.content.desc1')}
                </p>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  {t('dailyBonusPage.rebate.content.desc2')}
                </p>

                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-6">
                  <h4 className="text-white font-bold text-lg mb-4">{t('dailyBonusPage.rebate.content.example.title')}</h4>
                  <div className="space-y-4">
                    <div className="bg-gray-900 rounded-lg p-4">
                      <p className="text-red-400 font-bold mb-2">{t('dailyBonusPage.rebate.content.example.slotPlayer.title')}</p>
                      <div className="space-y-2 text-sm text-gray-300">
                        <div className="flex justify-between">
                          <span>{t('dailyBonusPage.rebate.content.example.slotPlayer.turnover').split(':')[0]}:</span>
                          <span className="text-white">{t('dailyBonusPage.rebate.content.example.slotPlayer.turnover').split(':')[1]}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{t('dailyBonusPage.rebate.content.example.slotPlayer.rate').split(':')[0]}:</span>
                          <span className="text-white">{t('dailyBonusPage.rebate.content.example.slotPlayer.rate').split(':')[1]}</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-gray-700">
                          <span className="font-bold">{t('dailyBonusPage.rebate.content.example.slotPlayer.daily').split(':')[0]}:</span>
                          <span className="text-red-400 font-bold">{t('dailyBonusPage.rebate.content.example.slotPlayer.daily').split(':')[1]}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-bold">{t('dailyBonusPage.rebate.content.example.slotPlayer.monthly').split(':')[0]}:</span>
                          <span className="text-red-400 font-bold">{t('dailyBonusPage.rebate.content.example.slotPlayer.monthly').split(':')[1]}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Target className="w-6 h-6 text-red-400" />
                  {t('dailyBonusPage.rebate.content.whyMatter.title')}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  {t('dailyBonusPage.rebate.content.whyMatter.desc1')}
                </p>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  {t('dailyBonusPage.rebate.content.whyMatter.desc2')}
                </p>

                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                  <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-400" />
                    {t('dailyBonusPage.rebate.terms.title')}
                  </h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {(t('dailyBonusPage.rebate.terms.items', { returnObjects: true }) as string[]).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* DAILY POINT COMMISSION - DETAILED SECTION */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand/20 to-gray-800 border border-brand/30 rounded-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-brand/10 rounded-2xl flex items-center justify-center">
                    <Coins className="w-10 h-10 text-brand" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="inline-block bg-brand/10 border border-brand/30 rounded-full px-4 py-1 mb-3">
                    <span className="text-brand text-sm font-bold">{t('dailyBonusPage.commission.badge')}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {t('dailyBonusPage.commission.title')}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {t('dailyBonusPage.commission.desc')}
                  </p>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-brand" />
                  {t('dailyBonusPage.commission.accumulation.title')}
                </h3>
                {(t('dailyBonusPage.commission.accumulation.content', { returnObjects: true }) as string[]).map((para, i) => (
                  <p key={i} className="text-gray-300 text-base leading-relaxed mb-6">
                    {para}
                  </p>
                ))}

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-900/50 border border-brand/30 rounded-lg p-6">
                    <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                      <Activity className="w-5 h-5 text-brand" />
                      {t('dailyBonusPage.commission.earning.title')}
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                        <span className="text-gray-300">{t('dailyBonusPage.commission.earning.slots')}:</span>
                        <span className="text-brand font-bold">{t('dailyBonusPage.commission.earning.slotsVal')}</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                        <span className="text-gray-300">{t('dailyBonusPage.commission.earning.liveCasino')}:</span>
                        <span className="text-brand font-bold">{t('dailyBonusPage.commission.earning.liveCasinoVal')}</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                        <span className="text-gray-300">{t('dailyBonusPage.commission.earning.sports')}:</span>
                        <span className="text-brand font-bold">{t('dailyBonusPage.commission.earning.sportsVal')}</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                        <span className="text-gray-300">{t('dailyBonusPage.commission.earning.fishing')}:</span>
                        <span className="text-brand font-bold">{t('dailyBonusPage.commission.earning.fishingVal')}</span>
                      </div>
                      <div className="bg-brand/10 rounded-lg p-3 mt-3">
                        <p className="text-brand text-xs font-bold">{t('dailyBonusPage.commission.earning.vipTitle')}</p>
                        <p className="text-gray-400 text-xs mt-1">{t('dailyBonusPage.commission.earning.vipDesc')}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900/50 border border-brand/30 rounded-lg p-6">
                    <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                      <Gift className="w-5 h-5 text-brand" />
                      {t('dailyBonusPage.commission.redemption.title')}
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                        <span className="text-gray-300">{t('dailyBonusPage.commission.redemption.bonusCash')}:</span>
                        <span className="text-white">{t('dailyBonusPage.commission.redemption.bonusCashVal')}</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                        <span className="text-gray-300">{t('dailyBonusPage.commission.redemption.freeSpins')}:</span>
                        <span className="text-white">{t('dailyBonusPage.commission.redemption.freeSpinsVal')}</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                        <span className="text-gray-300">{t('dailyBonusPage.commission.redemption.tournamentEntry')}:</span>
                        <span className="text-white">{t('dailyBonusPage.commission.redemption.tournamentEntryVal')}</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                        <span className="text-gray-300">{t('dailyBonusPage.commission.redemption.merchandise')}:</span>
                        <span className="text-white">{t('dailyBonusPage.commission.redemption.merchandiseVal')}</span>
                      </div>
                      <div className="bg-brand/10 rounded-lg p-3 mt-3">
                        <p className="text-brand text-xs font-bold">{t('dailyBonusPage.commission.redemption.eventsTitle')}</p>
                        <p className="text-gray-400 text-xs mt-1">{t('dailyBonusPage.commission.redemption.eventsDesc')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Target className="w-6 h-6 text-brand" />
                  {t('dailyBonusPage.commission.strategic.title')}
                </h3>
                {(t('dailyBonusPage.commission.strategic.content', { returnObjects: true }) as string[]).map((para, i) => (
                  <p key={i} className="text-gray-300 text-base leading-relaxed mb-6">
                    {para}
                  </p>
                ))}

                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-brand" />
                  {t('dailyBonusPage.commission.content.compound.title')}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  {t('dailyBonusPage.commission.content.compound.desc')}
                </p>

                <div className="bg-brand/10 border border-brand/30 rounded-xl p-6 mb-6">
                  <h4 className="text-white font-bold text-lg mb-3">{t('dailyBonusPage.commission.content.monthlyExample.title')}</h4>
                  <div className="bg-gray-900 rounded-lg p-5">
                    <div className="space-y-3 text-sm">
                      {(t('dailyBonusPage.commission.content.monthlyExample.items', { returnObjects: true }) as any[]).map((item, i) => (
                        <div key={i} className={`flex justify-between text-gray-300 ${i === 2 ? 'pt-2 border-t border-gray-700' : ''}`}>
                          <span className={i >= 2 ? 'font-bold' : ''}>{item.label}</span>
                          <span className={`${i >= 2 ? 'text-brand font-bold' : 'text-white'}`}>{item.value}</span>
                        </div>
                      ))}
                      <div className="bg-brand/20 rounded-lg p-3 mt-3">
                        <p className="text-brand text-xs font-bold">{t('dailyBonusPage.commission.content.monthlyExample.note')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-brand/10 border border-brand/30 rounded-xl p-6">
                  <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand" />
                    {t('dailyBonusPage.commission.terms.title')}
                  </h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {(t('dailyBonusPage.commission.terms.items', { returnObjects: true }) as string[]).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-brand/10 via-gray-950 to-orange-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RefreshCw className="w-16 h-16 text-brand mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('dailyBonusPage.cta.title')}
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            {t('dailyBonusPage.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={OFFICIAL_DOMAIN}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="group bg-brand hover:bg-yellow-300 text-black text-lg font-bold py-4 px-10 rounded-full shadow-[0_0_30px_rgba(255,215,0,0.4)] hover:shadow-[0_0_40px_rgba(255,215,0,0.6)] transition-all flex items-center justify-center gap-2"
            >
              <span>{t('dailyBonusPage.cta.buttons.claim')}</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <LocalizedLink
              to="/bonuses"
              className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 hover:border-brand text-lg font-bold py-4 px-10 rounded-full transition-all flex items-center justify-center gap-2"
            >
              <span>{t('dailyBonusPage.cta.buttons.viewAll')}</span>
              <ChevronRight className="w-5 h-5" />
            </LocalizedLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default DailyBonus;


