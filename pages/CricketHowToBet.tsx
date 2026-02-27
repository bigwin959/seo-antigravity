import React from 'react';
import { LocalizedLink } from '../components/LocalizedLink';
import { useTranslation, Trans } from 'react-i18next';
import SEO from '../components/SEO';
import { Breadcrumbs } from '../components/Section';
import { OFFICIAL_DOMAIN } from '../constants';
import {
  LogIn,
  Search,
  MousePointer,
  FileText,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Activity,
  Shield,
  Zap,
  Clock,
  Target,
  DollarSign
} from 'lucide-react';

const CricketHowToBet: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        metadata={{
          title: t('cricketHowToBet.seo.title'),
          description: t('cricketHowToBet.seo.description'),
          keywords: t('cricketHowToBet.seo.keywords', { returnObjects: true }) as string[],
          canonicalUrl: "https://bigwinofficial.com/guides/cricket/how-to-bet",
          ogType: 'article',
          publishedTime: '2025-01-01T00:00:00+06:00',
          modifiedTime: new Date().toISOString(),
          author: 'Bigwin959 Guide',
          schema: {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": t('cricketHowToBet.seo.howTo.name'),
            "description": t('cricketHowToBet.seo.howTo.description'),
            "step": [
              {
                "@type": "HowToStep",
                "name": t('cricketHowToBet.seo.howTo.steps.login.name'),
                "text": t('cricketHowToBet.seo.howTo.steps.login.text')
              },
              {
                "@type": "HowToStep",
                "name": t('cricketHowToBet.seo.howTo.steps.navigate.name'),
                "text": t('cricketHowToBet.seo.howTo.steps.navigate.text')
              },
              {
                "@type": "HowToStep",
                "name": t('cricketHowToBet.seo.howTo.steps.chooseProvider.name'),
                "text": t('cricketHowToBet.seo.howTo.steps.chooseProvider.text')
              },
              {
                "@type": "HowToStep",
                "name": t('cricketHowToBet.seo.howTo.steps.selectMatch.name'),
                "text": t('cricketHowToBet.seo.howTo.steps.selectMatch.text')
              },
              {
                "@type": "HowToStep",
                "name": t('cricketHowToBet.seo.howTo.steps.chooseMarket.name'),
                "text": t('cricketHowToBet.seo.howTo.steps.chooseMarket.text')
              },
              {
                "@type": "HowToStep",
                "name": t('cricketHowToBet.seo.howTo.steps.reviewSlip.name'),
                "text": t('cricketHowToBet.seo.howTo.steps.reviewSlip.text')
              },
              {
                "@type": "HowToStep",
                "name": t('cricketHowToBet.seo.howTo.steps.confirmBet.name'),
                "text": t('cricketHowToBet.seo.howTo.steps.confirmBet.text')
              }
            ]
          }
        }}
      />

      <Breadcrumbs items={[
        { label: t('nav.guides'), path: '/guides' },
        { label: t('cricketGuide.hero.title'), path: '/guides/cricket' },
        { label: t('cricketHowToBet.hero.breadcrumb'), path: '/guides/cricket/how-to-bet' }
      ]} />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-purple-900 via-gray-900 to-gray-950 py-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {t('cricketHowToBet.hero.title')}
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            {t('cricketHowToBet.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-12 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('cricketHowToBet.intro.p1')}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t('cricketHowToBet.intro.p2')}
            </p>
            <div className="bg-yellow-900/20 border border-yellow-600/30 p-5 rounded-xl">
              <p className="text-yellow-300 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><strong>{t('cricketHowToBet.intro.disclaimer')}</strong></span>
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* STEP 1: LOGIN */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-brand text-black font-bold flex items-center justify-center text-xl">1</div>
            <h2 className="text-3xl font-bold text-white">{t('cricketHowToBet.steps.login.title')}</h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              <Trans i18nKey="cricketHowToBet.steps.login.desc" values={{ domain: OFFICIAL_DOMAIN }} components={{ span: <span className="text-brand font-bold" /> }} />
            </p>

            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <LogIn className="w-6 h-6 text-brand" />
                {t('cricketHowToBet.steps.login.processTitle')}
              </h3>
              <ul className="space-y-3">
                {(t('cricketHowToBet.steps.login.items', { returnObjects: true }) as any[]).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white mb-1">{item.title}</p>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-900/20 border border-blue-700/30 p-5 rounded-xl">
              <p className="text-blue-300 text-sm">
                <strong>{t('cricketHowToBet.steps.login.important')}</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STEP 2: NAVIGATE TO CRICKET */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-brand text-black font-bold flex items-center justify-center text-xl">2</div>
            <h2 className="text-3xl font-bold text-white">{t('cricketHowToBet.steps.navigate.title')}</h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              {t('cricketHowToBet.steps.navigate.desc')}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Search className="w-6 h-6 text-brand" />
                  {t('cricketHowToBet.steps.navigate.findingMarkets.title')}
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {(t('cricketHowToBet.steps.navigate.findingMarkets.items', { returnObjects: true }) as string[]).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-brand">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Activity className="w-6 h-6 text-brand" />
                  {t('cricketHowToBet.steps.navigate.displayOptions.title')}
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {(t('cricketHowToBet.steps.navigate.displayOptions.items', { returnObjects: true }) as any[]).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-brand">•</span>
                      <span><strong className="text-white">{item.label}</strong> {item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <p className="text-gray-300 leading-relaxed">
                <strong>{t('cricketHowToBet.steps.navigate.proTip')}</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STEP 3: CHOOSE PROVIDER */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-brand text-black font-bold flex items-center justify-center text-xl">3</div>
            <h2 className="text-3xl font-bold text-white">{t('cricketHowToBet.steps.chooseProvider.title')}</h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              {t('cricketHowToBet.steps.chooseProvider.desc')}
            </p>

            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-white font-bold mb-4">{t('cricketHowToBet.steps.chooseProvider.providersTitle')}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  {(t('cricketHowToBet.steps.chooseProvider.providersCol1', { returnObjects: true }) as any[]).map((prov, i) => (
                    <div key={i} className="bg-gray-900 p-4 rounded-lg">
                      <p className="text-brand font-bold mb-1">{prov.title}</p>
                      <p className="text-gray-400 text-sm">{prov.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {(t('cricketHowToBet.steps.chooseProvider.providersCol2', { returnObjects: true }) as any[]).map((prov, i) => (
                    <div key={i} className="bg-gray-900 p-4 rounded-lg">
                      <p className="text-brand font-bold mb-1">{prov.title}</p>
                      <p className="text-gray-400 text-sm">{prov.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-700/30 p-5 rounded-xl">
              <p className="text-blue-300 text-sm">
                <strong>{t('cricketHowToBet.steps.chooseProvider.info')}</strong>
              </p>
            </div>

            <div className="text-center">
              <LocalizedLink to="/guides/cricket/exchange-vs-sportsbook" className="inline-flex items-center gap-2 text-brand hover:underline">
                {t('cricketHowToBet.steps.chooseProvider.link')}
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>

      {/* STEP 4: SELECT MATCH */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-brand text-black font-bold flex items-center justify-center text-xl">4</div>
            <h2 className="text-3xl font-bold text-white">{t('cricketHowToBet.steps.selectMatch.title')}</h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              {t('cricketHowToBet.steps.selectMatch.desc')}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-brand mx-auto" />
                  {t('cricketHowToBet.steps.selectMatch.preMatch.title')}
                </h3>
                <div className="space-y-3">
                  <div className="bg-green-900/20 border border-green-700/30 p-3 rounded-lg">
                    <p className="text-green-300 font-bold mb-1">{t('cricketHowToBet.steps.selectMatch.preMatch.advantages.title')}</p>
                    <ul className="text-green-200 text-sm space-y-1">
                      {(t('cricketHowToBet.steps.selectMatch.preMatch.advantages.items', { returnObjects: true }) as string[]).map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-900/20 border border-red-700/30 p-3 rounded-lg">
                    <p className="text-red-300 font-bold mb-1">{t('cricketHowToBet.steps.selectMatch.preMatch.considerations.title')}</p>
                    <ul className="text-red-200 text-sm space-y-1">
                      {(t('cricketHowToBet.steps.selectMatch.preMatch.considerations.items', { returnObjects: true }) as string[]).map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Activity className="w-6 h-6 text-brand mx-auto" />
                  {t('cricketHowToBet.steps.selectMatch.liveBetting.title')}
                </h3>
                <div className="space-y-3">
                  <div className="bg-green-900/20 border border-green-700/30 p-3 rounded-lg">
                    <p className="text-green-300 font-bold mb-1">{t('cricketHowToBet.steps.selectMatch.liveBetting.advantages.title')}</p>
                    <ul className="text-green-200 text-sm space-y-1">
                      {(t('cricketHowToBet.steps.selectMatch.liveBetting.advantages.items', { returnObjects: true }) as string[]).map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-900/20 border border-red-700/30 p-3 rounded-lg">
                    <p className="text-red-300 font-bold mb-1">{t('cricketHowToBet.steps.selectMatch.liveBetting.considerations.title')}</p>
                    <ul className="text-red-200 text-sm space-y-1">
                      {(t('cricketHowToBet.steps.selectMatch.liveBetting.considerations.items', { returnObjects: true }) as string[]).map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-white font-bold mb-4">{t('cricketHowToBet.steps.selectMatch.displayInfo.title')}</h3>
              <p className="text-gray-300 mb-4">{t('cricketHowToBet.steps.selectMatch.displayInfo.desc')}</p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-300 text-sm">
                  {(t('cricketHowToBet.steps.selectMatch.displayInfo.col1', { returnObjects: true }) as any[]).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">{item.label}</strong> {item.desc}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {(t('cricketHowToBet.steps.selectMatch.displayInfo.col2', { returnObjects: true }) as any[]).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">{item.label}</strong> {item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEP 5: CHOOSE MARKET TYPE */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-brand text-black font-bold flex items-center justify-center text-xl">5</div>
            <h2 className="text-3xl font-bold text-white">{t('cricketHowToBet.steps.chooseMarket.title')}</h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              {t('cricketHowToBet.steps.chooseMarket.desc')}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(t('cricketHowToBet.steps.chooseMarket.cards', { returnObjects: true }) as any[]).map((card, i) => {
                const icons = [Target, TrendingUp, DollarSign, Clock, Target, FileText];
                const Icon = icons[i] || Target;
                return (
                  <div key={i} className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                      <Icon className="w-5 h-5 text-brand mx-auto" />
                      {card.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">{card.desc}</p>
                    <div className="bg-gray-900 p-3 rounded-lg text-xs">
                      <p className="text-gray-400 mb-1">{card.example.title}</p>
                      {card.example.lines.map((line: string, idx: number) => (
                        <p key={idx} className="text-white">{line}</p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <LocalizedLink to="/guides/cricket/bet-types" className="inline-flex items-center gap-2 text-brand hover:underline">
                {t('cricketHowToBet.steps.chooseMarket.link')}
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>

      {/* STEP 6: REVIEW BET SLIP */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-brand text-black font-bold flex items-center justify-center text-xl">6</div>
            <h2 className="text-3xl font-bold text-white">{t('cricketHowToBet.steps.reviewSlip.title')}</h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              {t('cricketHowToBet.steps.reviewSlip.desc')}
            </p>

            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-brand mx-auto" />
                {t('cricketHowToBet.steps.reviewSlip.slipInfo.title')}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {(t('cricketHowToBet.steps.reviewSlip.slipInfo.categories', { returnObjects: true }) as any[]).reduce((resultArray, item, index) => {
                  const chunkIndex = Math.floor(index / 2)
                  if (!resultArray[chunkIndex]) { resultArray[chunkIndex] = [] }
                  resultArray[chunkIndex].push(item)
                  return resultArray
                }, []).map((pair: any[], i: number) => (
                  <div key={i} className="space-y-4">
                    {pair.map((cat: any, j: number) => (
                      <div key={j} className="bg-gray-900 p-4 rounded-lg">
                        <p className="text-brand font-bold mb-2">{cat.title}</p>
                        <ul className="space-y-1 text-gray-300 text-sm">
                          {cat.items.map((it: any, k: number) => (
                            <li key={k}>• <strong className="text-white">{it.label}</strong> {it.desc}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-600/30 p-5 rounded-xl">
              <p className="text-yellow-300 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><strong>{t('cricketHowToBet.steps.reviewSlip.criticalCheck')}</strong></span>
              </p>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-white font-bold mb-4">{t('cricketHowToBet.steps.reviewSlip.sampleSlip.title')}</h3>
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t('cricketHowToBet.steps.reviewSlip.sampleSlip.match.label')}</span>
                    <span className="text-white">{t('cricketHowToBet.steps.reviewSlip.sampleSlip.match.value')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t('cricketHowToBet.steps.reviewSlip.sampleSlip.market.label')}</span>
                    <span className="text-white">{t('cricketHowToBet.steps.reviewSlip.sampleSlip.market.value')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t('cricketHowToBet.steps.reviewSlip.sampleSlip.selection.label')}</span>
                    <span className="text-white">{t('cricketHowToBet.steps.reviewSlip.sampleSlip.selection.value')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">{t('cricketHowToBet.steps.reviewSlip.sampleSlip.odds.label')}</span>
                    <span className="text-brand font-bold">{t('cricketHowToBet.steps.reviewSlip.sampleSlip.odds.value')}</span>
                  </div>
                  <div className="border-t border-gray-700 pt-2 mt-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">{t('cricketHowToBet.steps.reviewSlip.sampleSlip.stake.label')}</span>
                      <span className="text-white">{t('cricketHowToBet.steps.reviewSlip.sampleSlip.stake.value')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">{t('cricketHowToBet.steps.reviewSlip.sampleSlip.return.label')}</span>
                      <span className="text-brand font-bold">{t('cricketHowToBet.steps.reviewSlip.sampleSlip.return.value')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">{t('cricketHowToBet.steps.reviewSlip.sampleSlip.profit.label')}</span>
                      <span className="text-green-400 font-bold">{t('cricketHowToBet.steps.reviewSlip.sampleSlip.profit.value')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEP 7: CONFIRM BET */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-brand text-black font-bold flex items-center justify-center text-xl">7</div>
            <h2 className="text-3xl font-bold text-white">{t('cricketHowToBet.steps.confirmBet.title')}</h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              {t('cricketHowToBet.steps.confirmBet.desc')}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-brand mx-auto" />
                  {t('cricketHowToBet.steps.confirmBet.process.title')}
                </h3>
                <div className="space-y-3">
                  {(t('cricketHowToBet.steps.confirmBet.process.steps', { returnObjects: true }) as any[]).map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-brand text-black text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</div>
                      <div>
                        <p className="text-white font-bold">{step.title}</p>
                        <p className="text-gray-400 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-brand mx-auto" />
                  {t('cricketHowToBet.steps.confirmBet.outcomes.title')}
                </h3>
                <div className="space-y-3">
                  <div className="bg-green-900/20 border border-green-700/30 p-3 rounded-lg">
                    <p className="text-green-300 font-bold mb-1">{t('cricketHowToBet.steps.confirmBet.outcomes.accepted.title')}</p>
                    <p className="text-green-200 text-sm">{t('cricketHowToBet.steps.confirmBet.outcomes.accepted.desc')}</p>
                  </div>
                  <div className="bg-red-900/20 border border-red-700/30 p-3 rounded-lg">
                    <p className="text-red-300 font-bold mb-1">{t('cricketHowToBet.steps.confirmBet.outcomes.rejected.title')}</p>
                    <p className="text-red-200 text-sm">{t('cricketHowToBet.steps.confirmBet.outcomes.rejected.desc')}</p>
                  </div>
                  <div className="bg-yellow-900/20 border border-yellow-700/30 p-3 rounded-lg">
                    <p className="text-yellow-300 font-bold mb-1">{t('cricketHowToBet.steps.confirmBet.outcomes.changed.title')}</p>
                    <p className="text-yellow-200 text-sm">{t('cricketHowToBet.steps.confirmBet.outcomes.changed.desc')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-white font-bold mb-4">{t('cricketHowToBet.steps.confirmBet.afterConfirmation.title')}</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {(t('cricketHowToBet.steps.confirmBet.afterConfirmation.items', { returnObjects: true }) as any[]).map((item, i) => {
                  const icons = ["✓", "📊", "💰"];
                  return (
                    <div key={i} className="text-center">
                      <div className="w-12 h-12 rounded-full bg-brand text-black font-bold flex items-center justify-center text-xl mx-auto mb-3">{icons[i]}</div>
                      <p className="text-white font-bold mb-2">{item.title}</p>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRE-MATCH VS LIVE BETTING DIFFERENCES */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{t('cricketHowToBet.comparison.title')}</h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
            {t('cricketHowToBet.comparison.desc')}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-white font-bold mb-6 text-center text-xl flex items-center justify-center gap-2">
                <Clock className="w-6 h-6 text-brand" />
                {t('cricketHowToBet.comparison.preMatch.title')}
              </h3>
              <div className="space-y-4">
                {(t('cricketHowToBet.comparison.preMatch.items', { returnObjects: true }) as any[]).map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-900/30 text-blue-400 font-bold flex items-center justify-center flex-shrink-0 text-sm border border-blue-700/30">{i + 1}</div>
                    <div>
                      <p className="text-white font-bold mb-1">{item.title}</p>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-white font-bold mb-6 text-center text-xl flex items-center justify-center gap-2">
                <Activity className="w-6 h-6 text-brand" />
                {t('cricketHowToBet.comparison.liveBetting.title')}
              </h3>
              <div className="space-y-4">
                {(t('cricketHowToBet.comparison.liveBetting.items', { returnObjects: true }) as any[]).map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-900/30 text-red-400 font-bold flex items-center justify-center flex-shrink-0 text-sm border border-red-700/30">{i + 1}</div>
                    <div>
                      <p className="text-white font-bold mb-1">{item.title}</p>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 p-8 rounded-xl text-center">
            <h3 className="text-white font-bold mb-6 text-xl">{t('cricketHowToBet.comparison.strategy.title')}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-brand font-bold mb-4">{t('cricketHowToBet.comparison.strategy.preMatch.title')}</p>
                <ul className="text-gray-300 space-y-2 text-sm text-left mx-auto max-w-sm">
                  {(t('cricketHowToBet.comparison.strategy.preMatch.items', { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden md:block w-px bg-gray-700 absolute left-1/2 h-40 transform -translate-x-1/2 mt-10"></div>
              <div>
                <p className="text-brand font-bold mb-4">{t('cricketHowToBet.comparison.strategy.live.title')}</p>
                <ul className="text-gray-300 space-y-2 text-sm text-left mx-auto max-w-sm">
                  {(t('cricketHowToBet.comparison.strategy.live.items', { returnObjects: true }) as string[]).map((item, i) => (
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
      </section>

      {/* ODDS FORMATS */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{t('cricketHowToBet.comparison.oddsFormats.title')}</h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
            {t('cricketHowToBet.comparison.oddsFormats.desc')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(t('cricketHowToBet.comparison.oddsFormats.types', { returnObjects: true }) as any[]).map((type, i) => (
              <div key={i} className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                <h3 className="text-white font-bold mb-4 text-center">{type.title}</h3>
                <div className="text-center mb-4">
                  <p className="text-3xl font-bold text-brand">{type.odds}</p>
                  <p className="text-gray-400 text-sm">{type.sub}</p>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300"><strong className="text-white">{type.calc.title}</strong></p>
                  {type.calc.lines.map((line: string, j: number) => (
                    <p key={j} className="text-gray-400">{line}</p>
                  ))}
                  <p className="text-green-400">{type.calc.profit}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl mt-12">
            <h3 className="text-white font-bold mb-4 text-center">{t('cricketHowToBet.comparison.oddsFormats.table.title')}</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    {(t('cricketHowToBet.comparison.oddsFormats.table.headers', { returnObjects: true }) as string[]).map((header, i) => (
                      <th key={i} className="text-left py-2 text-gray-400">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-700">
                    <td className="py-2 text-brand font-bold">1.50</td>
                    <td className="py-2">0.50</td>
                    <td className="py-2">-2.00</td>
                    <td className="py-2">-0.50</td>
                    <td className="py-2">66.67%</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-2 text-brand font-bold">1.85</td>
                    <td className="py-2">0.85</td>
                    <td className="py-2">-1.18</td>
                    <td className="py-2">-0.85</td>
                    <td className="py-2">54.05%</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-2 text-brand font-bold">2.00</td>
                    <td className="py-2">1.00</td>
                    <td className="py-2">1.00</td>
                    <td className="py-2">1.00</td>
                    <td className="py-2">50.00%</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-brand font-bold">2.50</td>
                    <td className="py-2">1.50</td>
                    <td className="py-2">1.50</td>
                    <td className="py-2">0.67</td>
                    <td className="py-2">40.00%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED GUIDES */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">{t('cricketHowToBet.relatedGuides.title')}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(t('cricketHowToBet.relatedGuides.items', { returnObjects: true }) as any[]).map((guide, i) => {
              const icons = [Target, FileText, TrendingUp, AlertTriangle, CheckCircle2, Zap];
              const links = [
                "/guides/cricket/bet-types",
                "/guides/cricket/settlement-rules",
                "/guides/cricket/exchange-vs-sportsbook",
                "/guides/cricket/confusing-situations",
                "/guides/cricket/faq",
                "/guides/cricket"
              ];
              const Icon = icons[i] || Zap;
              return (
                <LocalizedLink key={i} to={links[i]} className="bg-gray-800 border border-gray-700 p-6 rounded-xl hover:border-brand transition-colors group">
                  <div className="text-center">
                    <Icon className="w-12 h-12 text-brand mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-white font-bold mb-2">{guide.title}</h3>
                    <p className="text-gray-400 text-sm">{guide.desc}</p>
                  </div>
                </LocalizedLink>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CricketHowToBet;

