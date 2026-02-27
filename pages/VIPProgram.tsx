import React from 'react';
import { LocalizedLink } from '../components/LocalizedLink';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { OFFICIAL_DOMAIN, LOGO_URL } from '../constants';
import {
  Crown,
  Trophy,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Coins,
  TrendingUp,
  Zap,
  Star,
  Award,
  Gift,
  RotateCw,
  Percent,
  ArrowUp,
  Users,
  Target,
  Gem
} from 'lucide-react';

const VIPProgram: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        metadata={{
          title: t('vipPage.seo.title'),
          description: t('vipPage.seo.description'),
          keywords: t('vipPage.seo.keywords', { returnObjects: true }) as string[],
          canonicalUrl: "https://bigwinofficial.com/vip",
          ogType: 'article',
          publishedTime: '2025-01-01T00:00:00+06:00',
          modifiedTime: new Date().toISOString(),
          author: 'Bigwin959 Guide',
          schema: {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Bigwin959 VIP Program Benefits",
            "description": "Detailed guide to the Bigwin959 VIP Program levels and rewards.",
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
              "@id": "https://bigwinofficial.com/vip-program"
            }
          }
        }}
      />

      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-purple-950 via-gray-900 to-gray-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-brand/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-brand/10 rounded-full px-4 py-2 mb-6">
            <Crown className="w-4 h-4 text-brand" />
            <span className="text-brand text-sm font-bold">{t('vipPage.hero.badge')}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t('vipPage.hero.title')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand via-purple-300 to-brand mt-2">
              {t('vipPage.hero.titleAccent')}
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            {t('vipPage.hero.desc')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={OFFICIAL_DOMAIN}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="group bg-brand hover:bg-yellow-300 text-black text-base font-bold py-4 px-8 rounded-full shadow-[0_0_30px_rgba(255,215,0,0.4)] hover:shadow-[0_0_40px_rgba(255,215,0,0.6)] transition-all flex items-center justify-center gap-2"
            >
              <span>{t('vipPage.hero.cta')}</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>


      {/* VIP LEVELS OVERVIEW */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('vipPage.levels.title')}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t('vipPage.levels.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(t('vipPage.levels.items', { returnObjects: true }) as any[]).map((vip, i) => {
              const icons = [Star, Star, Award, Award, Gem, Gem, Crown, Crown];
              const colors = [
                "from-orange-900/30 to-gray-800",
                "from-gray-600/30 to-gray-800",
                "from-yellow-900/30 to-gray-800",
                "from-cyan-900/30 to-gray-800",
                "from-blue-900/30 to-gray-800",
                "from-purple-900/30 to-gray-800",
                "from-red-900/30 to-gray-800",
                "from-brand/30 to-gray-800"
              ];
              const borders = [
                "border-orange-500/30",
                "border-gray-400/30",
                "border-yellow-500/30",
                "border-cyan-500/30",
                "border-blue-500/30",
                "border-purple-500/30",
                "border-red-500/30",
                "border-brand"
              ];
              const Icon = icons[i];

              return (
                <div key={i} className={`bg-gradient-to-br ${colors[i]} ${borders[i]} border rounded-xl p-6 text-center hover:scale-105 transition-transform`}>
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-brand" />
                  </div>
                  <p className="text-brand font-bold text-xs mb-1 uppercase tracking-wider">{vip.level}</p>
                  <h3 className="text-xl font-bold text-white mb-2">{vip.name}</h3>
                  <div className="bg-brand/10 text-brand text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 justify-center">
                    <RotateCw className="w-3 h-3" />
                    {t('vipPage.levels.autoUpgradeBadge')}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* HOW VIP SYSTEM WORKS - DETAILED EXPLANATION */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-purple-400 text-sm font-bold uppercase tracking-wider">{t('vipPage.howItWorks.badge')}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t('vipPage.howItWorks.title')}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {t('vipPage.howItWorks.desc')}
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{t('vipPage.howItWorks.autoUpgrade.title')}</h3>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      {t('vipPage.howItWorks.autoUpgrade.p1')}
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      {t('vipPage.howItWorks.autoUpgrade.p2')}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{t('vipPage.howItWorks.requirements.title')}</h3>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      {t('vipPage.howItWorks.requirements.p1')}
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      {t('vipPage.howItWorks.requirements.p2')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 shadow-2xl">
              <div className="p-6 border-b border-gray-800 bg-gray-800/50">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-brand" />
                  {t('vipPage.howItWorks.table.title')}
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-800/30">
                      <th className="px-6 py-4 text-gray-400 font-bold text-sm uppercase">{t('vipPage.howItWorks.table.level')}</th>
                      <th className="px-6 py-4 text-gray-400 font-bold text-sm uppercase">{t('vipPage.howItWorks.table.deposits')}</th>
                      <th className="px-6 py-4 text-gray-400 font-bold text-sm uppercase">{t('vipPage.howItWorks.table.turnover')}</th>
                      <th className="px-6 py-4 text-gray-400 font-bold text-sm uppercase">{t('vipPage.howItWorks.table.bonus')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {(t('vipPage.howItWorks.table.levels', { returnObjects: true }) as any[]).map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 text-gray-300 font-medium whitespace-nowrap">{row.level}</td>
                        <td className="px-6 py-4 text-gray-300 whitespace-nowrap">{row.deposits}</td>
                        <td className="px-6 py-4 text-gray-300 whitespace-nowrap">{row.turnover}</td>
                        <td className="px-6 py-4 text-brand font-bold whitespace-nowrap">{row.bonus}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-gray-800/20">
                <p className="text-gray-500 text-xs italic">
                  {t('vipPage.howItWorks.table.note')}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand" />
                {t('vipPage.howItWorks.keyPoints.title')}
              </h4>
              <ul className="space-y-3">
                {(t('vipPage.howItWorks.keyPoints.items', { returnObjects: true }) as string[]).map((point, i) => (
                  <li key={i} className="flex gap-2 text-gray-400 text-sm">
                    <div className="w-1.5 h-1.5 bg-brand rounded-full mt-1.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* VIP BENEFITS: LUCKY SPIN */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-900/20 to-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-8 md:p-12">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-brand/10 rounded-2xl flex items-center justify-center">
                    <RotateCw className="w-10 h-10 text-brand" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {t('vipPage.luckySpin.title')}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {t('vipPage.luckySpin.desc')}
                  </p>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Gift className="w-6 h-6 text-brand" />
                  {t('vipPage.luckySpin.moreSpins.title')}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  {t('vipPage.luckySpin.moreSpins.p1')}
                </p>
                <p className="text-gray-300 text-base leading-relaxed mb-8">
                  {t('vipPage.luckySpin.moreSpins.p2')}
                </p>

                <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700 mb-8">
                  <h4 className="text-white font-bold text-lg mb-4">{t('vipPage.luckySpin.allocation.title')}</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {(t('vipPage.luckySpin.allocation.items', { returnObjects: true }) as any[]).map((item, i) => (
                      <div key={i} className="bg-gray-900 rounded-lg p-4 text-center border border-gray-800">
                        <p className="text-white font-bold mb-1">{item.level}</p>
                        <p className="text-brand text-sm font-bold">{item.spins}</p>
                        <p className="text-gray-500 text-[10px] uppercase tracking-tighter">{item.monthly}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-500 text-xs italic mt-4">
                    {t('vipPage.luckySpin.allocation.note')}
                  </p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-center bg-brand/5 p-8 rounded-2xl border border-brand/20">
                  <div className="w-20 h-20 bg-brand/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Trophy className="w-10 h-10 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{t('vipPage.luckySpin.enhancedPools.title')}</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {t('vipPage.luckySpin.enhancedPools.p1')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* VIP BENEFITS: POINT COMMISSION */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand/20 to-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
            <div className="p-8 md:p-12">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-brand/10 rounded-2xl flex items-center justify-center">
                    <Coins className="w-10 h-10 text-brand" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {t('vipPage.commission.title')}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {t('vipPage.commission.desc')}
                  </p>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-brand" />
                  {t('vipPage.commission.multipliers.title')}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  {t('vipPage.commission.multipliers.p1')}
                </p>
                <p className="text-gray-300 text-base leading-relaxed mb-8">
                  {t('vipPage.commission.multipliers.p2')}
                </p>

                <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700 mb-8">
                  <h4 className="text-white font-bold text-lg mb-4">{t('vipPage.commission.title')}</h4>
                  <div className="space-y-3">
                    {(t('vipPage.commission.items', { returnObjects: true }) as any[]).map((item, i) => (
                      <div key={i} className="bg-gray-900/80 rounded-lg p-4 flex items-center justify-between border border-gray-800">
                        <div>
                          <p className="text-white font-bold mb-1">{item.level}</p>
                          <p className="text-gray-500 text-xs">{item.desc}</p>
                        </div>
                        <div className="text-brand font-bold text-2xl">{item.multiplier}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-brand" />
                      {t('vipPage.commission.strategic.title')}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {t('vipPage.commission.strategic.p1')}
                    </p>
                  </div>

                  <div className="bg-brand/5 p-8 rounded-2xl border border-brand/20">
                    <h4 className="text-white font-bold mb-4">{t('vipPage.commission.comparison.title')}</h4>
                    <p className="text-gray-500 text-xs mb-4 uppercase tracking-wider">{t('vipPage.commission.comparison.scenario')}</p>
                    <div className="space-y-3 mb-6">
                      {(t('vipPage.commission.comparison.items', { returnObjects: true }) as any[]).map((item, i) => (
                        <div key={i} className="flex justify-between items-center py-2 border-b border-gray-800 last:border-0">
                          <span className="text-gray-400 text-sm">{item.label}</span>
                          <span className={`font-bold ${i === 2 ? 'text-brand' : 'text-white'}`}>{item.value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-brand/20 p-3 rounded-lg">
                      <p className="text-brand text-xs font-bold text-center italic">{t('vipPage.commission.comparison.note')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* VIP BENEFITS: REBATE & CASHBACK */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-900/20 to-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
            <div className="p-8 md:p-12">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-red-500/10 rounded-2xl flex items-center justify-center">
                    <Percent className="w-10 h-10 text-red-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {t('vipPage.rebates.title')}
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {t('vipPage.rebates.desc')}
                  </p>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-red-400" />
                  {t('vipPage.rebates.escalating.title')}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  {t('vipPage.rebates.escalating.p1')}
                </p>
                <p className="text-gray-300 text-base leading-relaxed mb-8">
                  {t('vipPage.rebates.escalating.p2')}
                </p>

                <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700 mb-8">
                  <h4 className="text-white font-bold text-lg mb-4">{t('vipPage.rebates.table.title')}</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-gray-700 bg-gray-800/50">
                          <th className="text-left py-4 px-4 text-red-400 font-bold uppercase tracking-wider">{t('vipPage.rebates.table.level')}</th>
                          <th className="text-center py-4 px-4 text-red-400 font-bold uppercase tracking-wider">{t('vipPage.rebates.table.slots')}</th>
                          <th className="text-center py-4 px-4 text-red-400 font-bold uppercase tracking-wider">{t('vipPage.rebates.table.liveCasino')}</th>
                          <th className="text-center py-4 px-4 text-red-400 font-bold uppercase tracking-wider">{t('vipPage.rebates.table.sports')}</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300 divide-y divide-gray-800">
                        {(t('vipPage.rebates.table.items', { returnObjects: true }) as any[]).map((item, i) => (
                          <tr key={i} className="hover:bg-gray-800/30 transition-colors">
                            <td className="py-4 px-4 font-bold">{item.level}</td>
                            <td className="py-4 px-4 text-center text-white font-medium">{item.slots}</td>
                            <td className="py-4 px-4 text-center text-white font-medium">{item.liveCasino}</td>
                            <td className="py-4 px-4 text-center text-white font-medium">{item.sports}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-500 text-xs mt-4 italic">
                    {t('vipPage.rebates.table.note')}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-red-400" />
                      {t('vipPage.rebates.value.title')}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {t('vipPage.rebates.value.p1')}
                    </p>
                  </div>

                  <div className="bg-red-500/5 p-8 rounded-2xl border border-red-500/20">
                    <h4 className="text-white font-bold mb-4">{t('vipPage.rebates.comparison.title')}</h4>
                    <p className="text-gray-500 text-xs mb-4 uppercase tracking-wider">{t('vipPage.rebates.comparison.scenario')}</p>
                    <div className="space-y-3 mb-6">
                      {(t('vipPage.rebates.comparison.items', { returnObjects: true }) as any[]).map((item, i) => (
                        <div key={i} className="flex justify-between items-center py-2 border-b border-gray-800 last:border-0">
                          <span className="text-gray-400 text-sm">{item.label}</span>
                          <span className={`font-bold ${i === 2 ? 'text-red-400' : 'text-white'}`}>{item.value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-red-500/20 p-3 rounded-lg">
                      <p className="text-red-400 text-xs font-bold text-center italic">{t('vipPage.rebates.comparison.note')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ADDITIONAL VIP BENEFITS */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('vipPage.additional.title')}
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t('vipPage.additional.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(t('vipPage.additional.items', { returnObjects: true }) as any[]).map((benefit, i) => {
              const icons = [Users, Zap, Gift, Trophy, Star, Gem, Award, Percent, CheckCircle2];
              const Icon = icons[i % icons.length];
              return (
                <div key={i} className="bg-gray-800/50 border border-gray-700 hover:border-brand/50 rounded-xl p-6 transition-all group">
                  <div className="w-12 h-12 bg-brand/10 group-hover:bg-brand/20 rounded-lg flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-6 h-6 text-brand" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-950 via-gray-900 to-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Crown className="w-16 h-16 text-brand mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('vipPage.cta.title')}
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            {t('vipPage.cta.desc')}
          </p>

          <div className="bg-gray-800 rounded-xl p-8 mb-8 max-w-2xl mx-auto border border-gray-700">
            <h3 className="text-white font-bold text-xl mb-4">{t('vipPage.cta.track.title')}</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {t('vipPage.cta.track.desc')}
            </p>
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="text-center">
                <div className="text-brand font-bold text-2xl">8</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest mt-1">{t('vipPage.cta.track.stats.levels')}</div>
              </div>
              <div className="w-px h-10 bg-gray-700" />
              <div className="text-center">
                <div className="text-brand font-bold text-2xl">Auto</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest mt-1">{t('vipPage.cta.track.stats.upgrades')}</div>
              </div>
              <div className="w-px h-10 bg-gray-700" />
              <div className="text-center">
                <div className="text-brand font-bold text-2xl">∞</div>
                <div className="text-gray-400 text-xs uppercase tracking-widest mt-1">{t('vipPage.cta.track.stats.benefits')}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={OFFICIAL_DOMAIN}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="group bg-brand hover:bg-yellow-300 text-black text-lg font-bold py-4 px-10 rounded-full shadow-[0_0_30px_rgba(255,215,0,0.4)] hover:shadow-[0_0_40px_rgba(255,215,0,0.6)] transition-all flex items-center justify-center gap-2"
            >
              <span>{t('vipPage.cta.buttons.join')}</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <LocalizedLink
              to="/bonuses"
              className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 hover:border-brand text-lg font-bold py-4 px-10 rounded-full transition-all flex items-center justify-center gap-2"
            >
              <span>{t('vipPage.cta.buttons.viewAll')}</span>
              <ChevronRight className="w-5 h-5" />
            </LocalizedLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default VIPProgram;


