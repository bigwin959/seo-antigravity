import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { Breadcrumbs } from '../components/Section';
import { OFFICIAL_DOMAIN, LOGO_URL } from '../constants';
import {
  ExternalLink, CheckCircle, TrendingUp, Users, DollarSign, Gift,
  Target, Award, Crown, Zap, BarChart3, Percent, UserPlus,
  Layers, Star, Rocket, ChevronRight, Shield, Clock, Wallet,
  Activity, Trophy, Sparkles, ArrowUpRight, RefreshCw, MonitorPlay,
  Globe, Gamepad2
} from 'lucide-react';

const AffiliatePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEO metadata={{
        title: t('affiliatePage.seo.title'),
        description: t('affiliatePage.seo.description'),
        canonicalUrl: "https://bigwinofficial.com/affiliate",
        ogType: 'article',
        publishedTime: '2025-01-01T00:00:00+06:00',
        modifiedTime: new Date().toISOString(),
        author: 'Bigwin959 Guide',
        schema: {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": t('affiliatePage.seo.title'),
          "description": t('affiliatePage.seo.description'),
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
            "@id": "https://bigwinofficial.com/affiliate"
          }
        }
      }} />

      <Breadcrumbs items={[
        { label: t('affiliatePage.hero.title'), path: '/affiliate' }
      ]} />

      {/* HERO SECTION */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900/30 via-gray-900 to-pink-900/30 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 px-4 py-2 rounded-full mb-6">
              <Rocket className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 text-sm font-bold">{t('affiliatePage.hero.badge')}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              {t('affiliatePage.hero.title')}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('affiliatePage.hero.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={OFFICIAL_DOMAIN} target="_blank" rel="nofollow noopener noreferrer" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-purple-500/30 flex items-center gap-2">
                {t('affiliatePage.hero.cta.join')} <ExternalLink className="w-5 h-5" />
              </a>
              <button className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-10 rounded-full transition-colors">
                {t('affiliatePage.hero.cta.learnMore')}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { icon: Gift, label: t('affiliatePage.hero.stats.invitation.label'), value: t('affiliatePage.hero.stats.invitation.value') },
              { icon: TrendingUp, label: t('affiliatePage.hero.stats.accumulative.label'), value: t('affiliatePage.hero.stats.accumulative.value') },
              { icon: Percent, label: t('affiliatePage.hero.stats.deposit.label'), value: t('affiliatePage.hero.stats.deposit.value') },
              { icon: DollarSign, label: t('affiliatePage.hero.stats.turnover.label'), value: t('affiliatePage.hero.stats.turnover.value') }
            ].map((stat, i) => (
              <div key={i} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center">
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">

        {/* WHAT IS AFFILIATE PROGRAM */}
        <section>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-6">
                {t('affiliatePage.whatIs.title')}
              </h2>
              {(t('affiliatePage.whatIs.content', { returnObjects: true }) as string[]).map((para, i) => (
                <p key={i} className={`text-gray-300 ${i === 0 ? 'text-lg' : ''} leading-relaxed mb-6`}>
                  {para}
                </p>
              ))}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full"></div>
              <img
                src="https://res.cloudinary.com/dmyocpyxd/image/upload/v1767689364/Affiliate-Program-Concept.png"
                srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_300,f_auto,q_auto/v1767689364/Affiliate-Program-Concept.png 300w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_600,f_auto,q_auto/v1767689364/Affiliate-Program-Concept.png 600w"
                sizes="(max-width: 768px) 100vw, 500px"
                width="600"
                height="400"
                loading="lazy"
                alt="Affiliate Program Concept"
                className="relative z-10 rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* COMMISSION STRUCTURE */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{t('affiliatePage.commission.title')}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t('affiliatePage.commission.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* First-Time Invitation Bonus */}
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-600/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Gift className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t('affiliatePage.commission.invitation.title')}</h3>
              </div>
              {(t('affiliatePage.commission.invitation.desc', { returnObjects: true }) as string[]).map((para, i) => (
                <p key={i} className="text-gray-300 leading-relaxed mb-4">
                  {para}
                </p>
              ))}
              <div className="bg-gray-900/50 rounded-xl p-4 mt-4">
                <div className="text-sm text-gray-400 mb-3">{t('affiliatePage.commission.invitation.example.title')}</div>
                <div className="space-y-2 text-sm text-gray-300">
                  {(t('affiliatePage.commission.invitation.example.items', { returnObjects: true }) as string[]).map((item, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span>{item.split(':')[0]}:</span>
                      <span className="text-green-400 font-bold">{item.split(':')[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Accumulative Bonus */}
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-600/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t('affiliatePage.commission.accumulative.title')}</h3>
              </div>
              {(t('affiliatePage.commission.accumulative.desc', { returnObjects: true }) as string[]).map((para, i) => (
                <p key={i} className="text-gray-300 leading-relaxed mb-4">
                  {para}
                </p>
              ))}
              <div className="bg-gray-900/50 rounded-xl p-4 mt-4">
                <div className="text-sm text-gray-400 mb-3">{t('affiliatePage.commission.accumulative.example.title')}</div>
                <div className="space-y-2 text-sm text-gray-300">
                  {(t('affiliatePage.commission.accumulative.example.items', { returnObjects: true }) as string[]).map((item, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span>{item.split(':')[0]}:</span>
                      <span className="text-blue-400 font-bold">{item.split(':')[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Downline Deposit Percentage */}
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-600/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Percent className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t('affiliatePage.commission.deposit.title')}</h3>
              </div>
              {(t('affiliatePage.commission.deposit.desc', { returnObjects: true }) as string[]).map((para, i) => (
                <p key={i} className="text-gray-300 leading-relaxed mb-4">
                  {para}
                </p>
              ))}
              <div className="bg-gray-900/50 rounded-xl p-4 mt-4">
                <div className="text-sm text-gray-400 mb-3">{t('affiliatePage.commission.deposit.example.title')}</div>
                <div className="space-y-2 text-sm text-gray-300">
                  {(t('affiliatePage.commission.deposit.example.items', { returnObjects: true }) as string[]).map((item, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span>{item.split(':')[0]}:</span>
                      <span className="text-purple-400 font-bold">{item.split(':')[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Turnover Commission */}
            <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-600/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t('affiliatePage.commission.turnover.title')}</h3>
              </div>
              {(t('affiliatePage.commission.turnover.desc', { returnObjects: true }) as string[]).map((para, i) => (
                <p key={i} className="text-gray-300 leading-relaxed mb-4">
                  {para}
                </p>
              ))}
              <div className="bg-gray-900/50 rounded-xl p-4 mt-4">
                <div className="text-sm text-gray-400 mb-3">{t('affiliatePage.commission.turnover.example.title')}</div>
                <div className="space-y-2 text-sm text-gray-300">
                  <div>{t('affiliatePage.commission.turnover.example.text')}</div>
                  <div>{t('affiliatePage.commission.turnover.example.rate')}</div>
                  <div className="text-orange-400 font-bold pt-2 border-t border-gray-700">
                    {t('affiliatePage.commission.turnover.example.result')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MULTI-LEVEL SYSTEM */}
        <section className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{t('affiliatePage.multiLevel.title')}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t('affiliatePage.multiLevel.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              {
                level: t('affiliatePage.multiLevel.tiers.bronze'),
                icon: Award,
                color: "from-orange-700 to-orange-900",
                borderColor: "border-orange-600/50",
                requirements: t('affiliatePage.multiLevel.requirements.bronze'),
                benefits: t('affiliatePage.multiLevel.benefits.tierBenefits.bronze', { returnObjects: true }) as string[]
              },
              {
                level: t('affiliatePage.multiLevel.tiers.silver'),
                icon: Star,
                color: "from-gray-400 to-gray-600",
                borderColor: "border-gray-400/50",
                requirements: t('affiliatePage.multiLevel.requirements.silver'),
                benefits: t('affiliatePage.multiLevel.benefits.tierBenefits.silver', { returnObjects: true }) as string[]
              },
              {
                level: t('affiliatePage.multiLevel.tiers.gold'),
                icon: Crown,
                color: "from-yellow-500 to-yellow-700",
                borderColor: "border-yellow-500/50",
                requirements: t('affiliatePage.multiLevel.requirements.gold'),
                benefits: t('affiliatePage.multiLevel.benefits.tierBenefits.gold', { returnObjects: true }) as string[]
              },
              {
                level: t('affiliatePage.multiLevel.tiers.platinum'),
                icon: Sparkles,
                color: "from-purple-500 to-pink-500",
                borderColor: "border-purple-500/50",
                requirements: t('affiliatePage.multiLevel.requirements.platinum'),
                benefits: t('affiliatePage.multiLevel.benefits.tierBenefits.platinum', { returnObjects: true }) as string[]
              }
            ].map((tier, i) => (
              <div key={i} className={`bg-gradient-to-br ${tier.color} bg-opacity-20 border ${tier.borderColor} rounded-xl p-6 text-center`}>
                <tier.icon className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{tier.level}</h3>
                <p className="text-gray-300 text-sm mb-4">{tier.requirements}</p>
                <div className="space-y-2">
                  {tier.benefits.map((benefit, j) => (
                    <div key={j} className="flex items-center gap-2 text-gray-300 text-xs">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">{t('affiliatePage.multiLevel.benefits.title')}</h3>
            <p className="text-gray-300 mb-4">
              {t('affiliatePage.multiLevel.benefits.desc')}
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {(t('affiliatePage.multiLevel.benefits.items', { returnObjects: true }) as string[]).map((benefit, i) => (
                <div key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                  <ArrowUpRight className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROMOTIONAL OPPORTUNITIES */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{t('affiliatePage.opportunities.title')}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t('affiliatePage.opportunities.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {(t('affiliatePage.opportunities.items', { returnObjects: true }) as any[]).map((promo, i) => {
              const icons = [Gift, Trophy, Rocket, Users, Zap, Crown];
              const Icon = icons[i] || Gift;
              return (
                <div key={i} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all">
                  <Icon className="w-10 h-10 text-purple-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{promo.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{promo.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-600/30 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{t('affiliatePage.getStarted.title')}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t('affiliatePage.getStarted.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 mb-8">
            {(t('affiliatePage.getStarted.steps', { returnObjects: true }) as any[]).map((step, i) => {
              const icons = [UserPlus, Target, Rocket, BarChart3, Wallet];
              const Icon = icons[i] || UserPlus;
              return (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-purple-500/50">
                    <span className="text-2xl font-bold text-purple-400">{i + 1}</span>
                  </div>
                  <Icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-gray-900/50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-purple-400" />
              {t('affiliatePage.getStarted.included.title')}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {(t('affiliatePage.getStarted.included.items', { returnObjects: true }) as string[]).map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EARNING POTENTIAL */}
        <section>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">{t('affiliatePage.earningPotential.title')}</h2>
              {(t('affiliatePage.earningPotential.desc', { returnObjects: true }) as string[]).map((para, i) => (
                <p key={i} className="text-gray-300 leading-relaxed mb-6">
                  {para}
                </p>
              ))}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">{t('affiliatePage.earningPotential.examples.title')}</h3>
                <div className="space-y-3">
                  {(t('affiliatePage.earningPotential.examples.items', { returnObjects: true }) as any[]).map((example, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">{example.referrals}</span>
                      <span className="text-purple-400 font-bold">{example.earnings}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full"></div>
              <img
                src="https://res.cloudinary.com/dmyocpyxd/image/upload/v1767689363/Affiliate-Earnings-Potential.png"
                srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_600,f_auto,q_auto/v1767689363/Affiliate-Earnings-Potential.png 600w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_1200,f_auto,q_auto/v1767689363/Affiliate-Earnings-Potential.png 1200w"
                sizes="(max-width: 768px) 100vw, 600px"
                width="600"
                height="400"
                loading="lazy"
                alt="Affiliate Earnings Potential"
                className="relative z-10 rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* WHO CAN JOIN */}
        <section className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">{t('affiliatePage.whoCanJoin.title')}</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              {t('affiliatePage.whoCanJoin.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {(t('affiliatePage.whoCanJoin.items', { returnObjects: true }) as any[]).map((audience, i) => {
              const icons = [MonitorPlay, Globe, Users, Target, Gamepad2, Activity];
              const Icon = icons[i] || MonitorPlay;
              return (
                <div key={i} className="bg-gray-900/50 rounded-xl p-6">
                  <Icon className="w-10 h-10 text-purple-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{audience.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{audience.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="text-center py-16 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-600/30 rounded-2xl">
          <h2 className="text-4xl font-bold text-white mb-6">{t('affiliatePage.cta.title')}</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            {t('affiliatePage.cta.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href={OFFICIAL_DOMAIN} target="_blank" rel="nofollow noopener noreferrer" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-purple-500/30 flex items-center gap-2">
              {t('affiliatePage.cta.buttons.join')} <ExternalLink className="w-5 h-5" />
            </a>
            <a href={OFFICIAL_DOMAIN} target="_blank" rel="nofollow noopener noreferrer" className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-10 rounded-full transition-colors">
              {t('affiliatePage.cta.buttons.contact')}
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            {(t('affiliatePage.cta.features', { returnObjects: true }) as string[]).map((feature, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-purple-400" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
};

export default AffiliatePage;
