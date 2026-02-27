import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LocalizedLink } from '../components/LocalizedLink';
import SEO from '../components/SEO';
import { Breadcrumbs } from '../components/Section';
import { OFFICIAL_DOMAIN } from '../constants';
import {
  Gift,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  Trophy,
  Zap,
  Gamepad2,
  HelpCircle,
  AlertTriangle,
  Clock,
  Shield,
  Coins,
  ArrowRight
} from 'lucide-react';

const FirstDepositBonus: React.FC = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'casino' | 'cricket' | 'slots'>('casino');

  return (
    <>
      <SEO
        metadata={{
          title: t('firstDepositBonusPage.seo.title'),
          description: t('firstDepositBonusPage.seo.description'),
          keywords: t('firstDepositBonusPage.seo.keywords', { returnObjects: true }) as string[],
          canonicalUrl: "https://bigwinofficial.com/bonuses/first-deposit",
          ogType: 'article'
        }}
      />

      <Breadcrumbs items={[{ label: t('nav.bonuses'), path: '/bonuses' }, { label: t('breadcrumbs.firstDepositBonus'), path: '/bonuses/first-deposit' }]} />

      {/* HERO SECTION */}
      <section className="relative bg-gray-950 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 text-brand font-bold text-sm mb-6 animate-fade-in">
            <Gift className="w-4 h-4" />
            {t('firstDepositBonusPage.hero.badge')}
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            {t('firstDepositBonusPage.hero.title')}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-yellow-400">
              {t('firstDepositBonusPage.hero.highlight')}
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            {t('firstDepositBonusPage.hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={OFFICIAL_DOMAIN}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="px-8 py-4 bg-brand hover:bg-white text-black font-bold rounded-full transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(251,191,36,0.3)]"
            >
              {t('firstDepositBonusPage.hero.cta')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* SELECTION GRID */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{t('firstDepositBonusPage.options.title')}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t('firstDepositBonusPage.options.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Casino Option */}
            <div
              className={`relative p-8 rounded-3xl border transition-all cursor-pointer group ${activeTab === 'casino' ? 'bg-gray-900 border-brand' : 'bg-gray-900/50 border-gray-800 hover:border-gray-700'}`}
              onClick={() => setActiveTab('casino')}
            >
              <div className="text-5xl font-black text-brand mb-4">{t('firstDepositBonusPage.options.casino.percentage')}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{t('firstDepositBonusPage.options.casino.title')}</h3>
              <p className="text-gray-400 mb-6">{t('firstDepositBonusPage.options.casino.subtitle')}</p>
              <ul className="space-y-3 mb-8">
                {(t('firstDepositBonusPage.options.casino.points', { returnObjects: true }) as string[]).map((point, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-brand" />
                    {point}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-xl font-bold transition-all ${activeTab === 'casino' ? 'bg-brand text-black' : 'bg-gray-800 text-white'}`}
              >
                {activeTab === 'casino' ? t('firstDepositBonusPage.options.selected') : t('firstDepositBonusPage.options.viewDetails')}
              </button>
            </div>

            {/* Cricket Option */}
            <div
              className={`relative p-8 rounded-3xl border transition-all cursor-pointer group ${activeTab === 'cricket' ? 'bg-gray-900 border-brand' : 'bg-gray-900/50 border-gray-800 hover:border-gray-700'}`}
              onClick={() => setActiveTab('cricket')}
            >
              <div className="absolute -top-4 right-8 bg-brand text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                {t('firstDepositBonusPage.options.cricket.badge')}
              </div>
              <div className="text-5xl font-black text-brand mb-4">{t('firstDepositBonusPage.options.cricket.percentage')}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{t('firstDepositBonusPage.options.cricket.title')}</h3>
              <p className="text-gray-400 mb-6">{t('firstDepositBonusPage.options.cricket.subtitle')}</p>
              <ul className="space-y-3 mb-8">
                {(t('firstDepositBonusPage.options.cricket.points', { returnObjects: true }) as string[]).map((point, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-brand" />
                    {point}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-xl font-bold transition-all ${activeTab === 'cricket' ? 'bg-brand text-black' : 'bg-gray-800 text-white'}`}
              >
                {activeTab === 'cricket' ? t('firstDepositBonusPage.options.selected') : t('firstDepositBonusPage.options.viewDetails')}
              </button>
            </div>

            {/* Slots Option */}
            <div
              className={`relative p-8 rounded-3xl border transition-all cursor-pointer group ${activeTab === 'slots' ? 'bg-gray-900 border-brand' : 'bg-gray-900/50 border-gray-800 hover:border-gray-700'}`}
              onClick={() => setActiveTab('slots')}
            >
              <div className="text-5xl font-black text-brand mb-4">{t('firstDepositBonusPage.options.slots.percentage')}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{t('firstDepositBonusPage.options.slots.title')}</h3>
              <p className="text-gray-400 mb-6">{t('firstDepositBonusPage.options.slots.subtitle')}</p>
              <ul className="space-y-3 mb-8">
                {(t('firstDepositBonusPage.options.slots.points', { returnObjects: true }) as string[]).map((point, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-brand" />
                    {point}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-xl font-bold transition-all ${activeTab === 'slots' ? 'bg-brand text-black' : 'bg-gray-800 text-white'}`}
              >
                {activeTab === 'slots' ? t('firstDepositBonusPage.options.selected') : t('firstDepositBonusPage.options.viewDetails')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED CONTENT */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'casino' && (
            <div className="animate-fade-in">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-widest mb-6 border border-brand/20">
                {t('firstDepositBonusPage.details.casino.badge')}
              </span>
              <h2 className="text-4xl font-bold text-white mb-8">{t('firstDepositBonusPage.details.casino.title')}</h2>

              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-brand font-medium mb-6">
                  {t('firstDepositBonusPage.details.casino.intro')}
                </p>
                <p className="text-gray-300 mb-6">
                  {t('firstDepositBonusPage.details.casino.prose1')}
                </p>
                <p className="text-gray-300 mb-8">
                  {t('firstDepositBonusPage.details.casino.prose2')}
                </p>

                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Gamepad2 className="w-6 h-6 text-brand" />
                  {t('firstDepositBonusPage.details.casino.gamesTitle')}
                </h3>
                <p className="text-gray-400 mb-8">
                  {t('firstDepositBonusPage.details.casino.gamesIntro')}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {['baccarat', 'roulette', 'blackjack', 'others'].map((game) => (
                    <div key={game} className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
                      <h4 className="text-brand font-bold mb-2">{t(`firstDepositBonusPage.details.casino.games.${game}.title`)}</h4>
                      <p className="text-sm text-gray-400">{t(`firstDepositBonusPage.details.casino.games.${game}.desc`)}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-brand/5 border border-brand/20 rounded-3xl p-8 mb-12">
                  <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider text-center">{t('firstDepositBonusPage.details.casino.whyTitle')}</h3>
                  <p className="text-gray-400 mb-6 text-center italic">{t('firstDepositBonusPage.details.casino.whyIntro')}</p>
                  <div className="space-y-4">
                    {(t('firstDepositBonusPage.details.casino.whyPoints', { returnObjects: true }) as string[]).map((point, i) => {
                      const splitPoint = point.split(': ');
                      const title = splitPoint[0];
                      const desc = splitPoint.slice(1).join(': ');
                      return (
                        <div key={i} className="flex gap-4">
                          <CheckCircle2 className="w-6 h-6 text-brand flex-shrink-0" />
                          <div>
                            <strong className="text-white block mb-1">{title}</strong>
                            <p className="text-gray-400 text-sm">{desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-gray-800 rounded-2xl p-6 border-l-4 border-brand">
                  <h4 className="text-white font-bold mb-4">{t('firstDepositBonusPage.details.casino.example.title')}</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>{t('firstDepositBonusPage.details.casino.example.deposit')}</li>
                    <li>{t('firstDepositBonusPage.details.casino.example.bonus')}</li>
                    <li className="text-brand font-bold text-lg pt-2 border-t border-gray-700 mt-2">
                      {t('firstDepositBonusPage.details.casino.example.total')}
                    </li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-4 italic">{t('firstDepositBonusPage.details.casino.example.note')}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'cricket' && (
            <div className="animate-fade-in">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-widest mb-6 border border-brand/20">
                {t('firstDepositBonusPage.details.cricket.badge')}
              </span>
              <h2 className="text-4xl font-bold text-white mb-8">{t('firstDepositBonusPage.details.cricket.title')}</h2>

              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-brand font-medium mb-8">
                  {t('firstDepositBonusPage.details.cricket.intro')}
                </p>

                <h3 className="text-2xl font-bold text-white mb-6">{t('firstDepositBonusPage.details.cricket.exclusiveTitle')}</h3>
                <p className="text-gray-300 mb-6">
                  {t('firstDepositBonusPage.details.cricket.exclusiveProse1')}
                </p>
                <p className="text-gray-300 mb-12">
                  {t('firstDepositBonusPage.details.cricket.exclusiveProse2')}
                </p>

                <div className="bg-gray-800/80 rounded-3xl p-8 border border-gray-700 mb-12">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">{t('firstDepositBonusPage.details.cricket.timingTitle')}</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {t('firstDepositBonusPage.details.cricket.timingProse1')}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {t('firstDepositBonusPage.details.cricket.timingProse2')}
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-brand" />
                  {t('firstDepositBonusPage.details.cricket.coverageTitle')}
                </h3>
                <p className="text-gray-400 mb-8">{t('firstDepositBonusPage.details.cricket.coverageIntro')}</p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
                    <h4 className="text-brand font-bold mb-4">{t('firstDepositBonusPage.details.cricket.coverage.tournaments.title')}</h4>
                    <ul className="space-y-2">
                      {(t('firstDepositBonusPage.details.cricket.coverage.tournaments.items', { returnObjects: true }) as string[]).map((item, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand/50" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
                    <h4 className="text-brand font-bold mb-4">{t('firstDepositBonusPage.details.cricket.coverage.markets.title')}</h4>
                    <ul className="space-y-2">
                      {(t('firstDepositBonusPage.details.cricket.coverage.markets.items', { returnObjects: true }) as string[]).map((item, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand/50" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6">{t('firstDepositBonusPage.details.cricket.opportunitiesTitle')}</h3>
                <p className="text-gray-300 mb-6">
                  {t('firstDepositBonusPage.details.cricket.opportunitiesProse1')}
                </p>
                <p className="text-gray-300 mb-12">
                  {t('firstDepositBonusPage.details.cricket.opportunitiesProse2')}
                </p>

                <div className="grid md:grid-cols-2 gap-8 items-center bg-gray-900 border border-gray-800 rounded-3xl p-8 mb-12">
                  <div>
                    <h4 className="text-white font-bold mb-4">{t('firstDepositBonusPage.details.cricket.example.title')}</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>{t('firstDepositBonusPage.details.cricket.example.deposit')}</li>
                      <li>{t('firstDepositBonusPage.details.cricket.example.bonus')}</li>
                      <li className="text-brand font-bold text-lg pt-2 border-t border-gray-700 mt-2">
                        {t('firstDepositBonusPage.details.cricket.example.total')}
                      </li>
                    </ul>
                    <p className="text-[10px] text-gray-500 mt-4 italic">{t('firstDepositBonusPage.details.cricket.example.note')}</p>
                  </div>
                  <div className="bg-brand/10 border border-brand/20 p-6 rounded-2xl">
                    <p className="text-brand text-sm italic font-medium leading-relaxed">
                      <strong>{t('firstDepositBonusPage.hero.proTipLabel')}</strong> {t('firstDepositBonusPage.details.cricket.proTip')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'slots' && (
            <div className="animate-fade-in">
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-widest mb-6 border border-brand/20">
                {t('firstDepositBonusPage.details.slots.badge')}
              </span>
              <h2 className="text-4xl font-bold text-white mb-8">{t('firstDepositBonusPage.details.slots.title')}</h2>

              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-brand font-medium mb-10">
                  {t('firstDepositBonusPage.details.slots.intro')}
                </p>

                <h3 className="text-2xl font-bold text-white mb-6">{t('firstDepositBonusPage.details.slots.whyJiliTitle')}</h3>
                <p className="text-gray-300 mb-6">
                  {t('firstDepositBonusPage.details.slots.whyJiliProse1')}
                </p>
                <p className="text-gray-300 mb-12">
                  {t('firstDepositBonusPage.details.slots.whyJiliProse2')}
                </p>

                <div className="bg-gray-800/80 rounded-3xl p-8 border border-gray-700 mb-12">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">{t('firstDepositBonusPage.details.slots.popularityTitle')}</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {t('firstDepositBonusPage.details.slots.popularityProse1')}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {t('firstDepositBonusPage.details.slots.popularityProse2')}
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-brand" />
                  {t('firstDepositBonusPage.details.slots.gamesTitle')}
                </h3>
                <p className="text-gray-400 mb-8">{t('firstDepositBonusPage.details.slots.gamesIntro')}</p>

                <div className="space-y-6 mb-12">
                  {(t('firstDepositBonusPage.details.slots.games', { returnObjects: true }) as any[]).map((game, i) => (
                    <div key={i} className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 group hover:border-brand/30 transition-colors">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-brand font-bold text-lg">{game.title}</h4>
                        <span className="text-[10px] bg-brand/10 text-brand px-2 py-0.5 rounded-full font-bold uppercase">{game.reason}</span>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">{game.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 mb-12">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">{t('firstDepositBonusPage.details.slots.newPlayersTitle')}</h3>
                  <p className="text-gray-300 mb-6">{t('firstDepositBonusPage.details.slots.newPlayersProse1')}</p>
                  <p className="text-gray-300">{t('firstDepositBonusPage.details.slots.newPlayersProse2')}</p>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6">{t('firstDepositBonusPage.details.slots.wageringTitle')}</h3>
                <p className="text-gray-300 mb-6">
                  {t('firstDepositBonusPage.details.slots.wageringProse1')}
                </p>
                <p className="text-gray-300 mb-12">
                  {t('firstDepositBonusPage.details.slots.wageringProse2')}
                </p>

                <div className="grid md:grid-cols-2 gap-8 items-center bg-gray-800/50 border border-gray-700 rounded-3xl p-8 mb-12">
                  <div>
                    <h4 className="text-white font-bold mb-4">{t('firstDepositBonusPage.details.slots.example.title')}</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>{t('firstDepositBonusPage.details.slots.example.deposit')}</li>
                      <li>{t('firstDepositBonusPage.details.slots.example.bonus')}</li>
                      <li className="text-brand font-bold text-lg pt-2 border-t border-gray-700 mt-2">
                        {t('firstDepositBonusPage.details.slots.example.total')}
                      </li>
                    </ul>
                    <p className="text-[10px] text-gray-500 mt-4 italic">{t('firstDepositBonusPage.details.slots.example.note')}</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-white font-bold text-center mb-4">{t('firstDepositBonusPage.details.slots.whyChooseTitle')}</h4>
                    {(t('firstDepositBonusPage.details.slots.whyChoosePoints', { returnObjects: true }) as string[]).map((point, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-gray-400">
                        <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* HOW TO CLAIM */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{t('firstDepositBonusPage.howToClaim.title')}</h2>
            <p className="text-gray-400">{t('firstDepositBonusPage.howToClaim.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 relative">
            {(t('firstDepositBonusPage.howToClaim.steps', { returnObjects: true }) as any[]).map((step, i) => (
              <div key={i} className="relative p-6 rounded-2xl bg-gray-900 border border-gray-800 group hover:border-brand/30 transition-all">
                <div className="w-10 h-10 rounded-full bg-brand text-black font-black flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(251,191,36,0.2)]">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                {i < 4 && (
                  <ChevronRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-gray-700 w-8 h-8 z-10" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href={OFFICIAL_DOMAIN}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand hover:bg-white text-black font-bold py-4 px-10 rounded-full transition-all group scale-110"
            >
              {t('firstDepositBonusPage.howToClaim.cta')}
              <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* TERMS & CONDITIONS */}
      <section className="py-24 bg-gray-900 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <Shield className="w-8 h-8 text-brand" />
            <h2 className="text-3xl font-bold text-white">{t('firstDepositBonusPage.terms.title')}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['general', 'wagering', 'withdrawal', 'gameRestrictions'].map((key) => (
              <div key={key} className="space-y-6">
                <div className="flex items-center gap-2 text-brand font-bold uppercase tracking-wider text-sm mb-4">
                  <div className="w-1 h-4 bg-brand rounded-full" />
                  {t(`firstDepositBonusPage.terms.${key}.title`)}
                </div>
                <ul className="space-y-4">
                  {(t(`firstDepositBonusPage.terms.${key}.items`, { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i} className="text-sm text-gray-400 leading-relaxed flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-900/10 border border-blue-700/20 p-8 rounded-3xl">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-blue-500/10">
                <HelpCircle className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">{t('firstDepositBonusPage.hero.proTipLabel')}</h4>
                <p className="text-blue-200/70 text-sm leading-relaxed">
                  {t('firstDepositBonusPage.terms.proTip')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{t('firstDepositBonusPage.faq.title')}</h2>
          </div>

          <div className="space-y-4">
            {(t('firstDepositBonusPage.faq.items', { returnObjects: true }) as any[]).map((item, idx) => (
              <div
                key={idx}
                className={`bg-gray-900 border rounded-2xl overflow-hidden transition-all ${openFaq === idx ? 'border-brand' : 'border-gray-800'}`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="text-lg font-bold text-white pr-4">{item.q}</span>
                  <div className={`text-brand transition-transform flex-shrink-0 ${openFaq === idx ? 'rotate-90' : ''}`}>
                    <ChevronRight className="w-6 h-6" />
                  </div>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-gray-400 leading-relaxed animate-fade-in border-t border-gray-800 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand opacity-[0.03]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-12 md:p-20 text-center border border-gray-700/50 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
              {t('firstDepositBonusPage.finalCta.title')}
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              {t('firstDepositBonusPage.finalCta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href={OFFICIAL_DOMAIN}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="w-full sm:w-auto px-12 py-5 bg-brand hover:bg-white text-black font-black rounded-full transition-all shadow-[0_0_30px_rgba(251,191,36,0.3)] flex items-center justify-center gap-2 text-lg"
              >
                {t('firstDepositBonusPage.finalCta.buttons.claim')}
                <ExternalLink className="w-5 h-5" />
              </a>
              <LocalizedLink
                to="/guides"
                className="w-full sm:w-auto px-12 py-5 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-full transition-all border border-gray-700 flex items-center justify-center gap-2 text-lg"
              >
                {t('firstDepositBonusPage.finalCta.buttons.viewAll')}
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstDepositBonus;


