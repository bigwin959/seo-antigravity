import React from 'react';
import { LocalizedLink } from '../components/LocalizedLink';
import SEO from '../components/SEO';
import { Breadcrumbs } from '../components/Section';
import { OFFICIAL_DOMAIN } from '../constants';
import { useTranslation, Trans } from 'react-i18next';
import {
  CloudRain,
  Calculator,
  Trophy,
  PauseCircle,
  XCircle,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  Zap,
  Activity
} from 'lucide-react';

const CricketConfusingSituations: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        metadata={{
          title: t('cricketConfusingSituations.seo.title'),
          description: t('cricketConfusingSituations.seo.description'),
          keywords: t('cricketConfusingSituations.seo.keywords', { returnObjects: true }) as string[],
          canonicalUrl: `${OFFICIAL_DOMAIN}/guides/cricket/confusing-situations`,
          ogType: 'article',
          publishedTime: '2025-01-01T00:00:00+06:00',
          modifiedTime: new Date().toISOString(),
          author: t('brand.name'),
          schema: {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t('cricketConfusingSituations.seo.schema.headline'),
            "description": t('cricketConfusingSituations.seo.schema.description'),
            "author": {
              "@type": "Organization",
              "name": t('brand.name')
            },
            "publisher": {
              "@type": "Organization",
              "name": t('brand.name'),
              "logo": {
                "@type": "ImageObject",
                "url": `${OFFICIAL_DOMAIN}/logo.png`
              }
            },
            "datePublished": "2025-01-01",
            "dateModified": new Date().toISOString(),
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `${OFFICIAL_DOMAIN}/guides/cricket/confusing-situations`
            }
          }
        }}
      />

      <Breadcrumbs items={[
        { label: t('cricketConfusingSituations.hero.breadcrumbs.guides'), path: '/guides' },
        { label: t('cricketConfusingSituations.hero.breadcrumbs.cricketGuide'), path: '/guides/cricket' },
        { label: t('cricketConfusingSituations.hero.breadcrumbs.confusingSituations'), path: '/guides/cricket/confusing-situations' }
      ]} />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-purple-900 via-gray-900 to-gray-950 py-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {t('cricketConfusingSituations.hero.title')}
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            {t('cricketConfusingSituations.hero.subtitle')}
          </p>
        </div>
      </section>


      {/* INTRODUCTION */}
      <section className="py-12 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              <Trans i18nKey="cricketConfusingSituations.intro.p1" components={{ strong: <strong className="text-white" /> }} />
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t('cricketConfusingSituations.intro.p2')}
            </p>
            <div className="bg-yellow-900/20 border border-yellow-600/30 p-5 rounded-xl">
              <p className="text-yellow-300 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><Trans i18nKey="cricketConfusingSituations.intro.disclaimer" components={{ strong: <strong /> }} /></span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: RAIN */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <CloudRain className="w-10 h-10 text-brand" />
            <h2 className="text-3xl font-bold text-white">
              {t('cricketConfusingSituations.rain.title')}
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              <Trans i18nKey="cricketConfusingSituations.rain.desc" components={{ strong: <strong className="text-white" /> }} />
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-red-400" />
                  {t('cricketConfusingSituations.rain.abandoned.title')}
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  {t('cricketConfusingSituations.rain.abandoned.desc')}
                </p>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <p className="text-gray-400 text-sm mb-2"><strong className="text-white">{t('cricketConfusingSituations.rain.abandoned.settlementTitle')}</strong></p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    {(t('cricketConfusingSituations.rain.abandoned.list', { returnObjects: true }) as string[]).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-brand">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                  {t('cricketConfusingSituations.rain.valid.title')}
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  {t('cricketConfusingSituations.rain.valid.desc')}
                </p>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <p className="text-gray-400 text-sm mb-2"><strong className="text-white">{t('cricketConfusingSituations.rain.valid.settlementTitle')}</strong></p>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    {(t('cricketConfusingSituations.rain.valid.list', { returnObjects: true }) as string[]).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-brand">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-700/30 p-5 rounded-xl">
              <p className="text-blue-300 text-sm">
                <Trans i18nKey="cricketConfusingSituations.rain.keyPoint" components={{ strong: <strong /> }} />
              </p>
            </div>

            <div className="text-center">
              <LocalizedLink to="/guides/cricket/settlement-rules" className="inline-flex items-center gap-2 text-brand hover:underline">
                {t('cricketConfusingSituations.rain.related')}
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DLS */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Calculator className="w-10 h-10 text-brand" />
            <h2 className="text-3xl font-bold text-white">
              {t('cricketConfusingSituations.dls.title')}
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              <Trans i18nKey="cricketConfusingSituations.dls.p1" components={{ strong: <strong className="text-white" /> }} />
            </p>

            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-white font-bold mb-4">{t('cricketConfusingSituations.dls.howItWorks.title')}</h3>
              <div className="space-y-4">
                {(t('cricketConfusingSituations.dls.howItWorks.steps', { returnObjects: true }) as any[]).map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand text-black font-bold flex items-center justify-center text-sm flex-shrink-0">{step.num}</div>
                    <div>
                      <p className="text-white font-bold mb-1">{step.title}</p>
                      <p className="text-gray-400 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-white font-bold mb-4">{t('cricketConfusingSituations.dls.commonConfusion.title')}</h3>
              <ul className="space-y-3">
                {(t('cricketConfusingSituations.dls.commonConfusion.list', { returnObjects: true }) as any[]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white mb-1">{item.title}</p>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-900/20 border border-green-700/30 p-5 rounded-xl">
              <p className="text-green-300 text-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><Trans i18nKey="cricketConfusingSituations.dls.important" components={{ strong: <strong /> }} /></span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SUPER OVER */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Trophy className="w-10 h-10 text-brand" />
            <h2 className="text-3xl font-bold text-white">
              {t('cricketConfusingSituations.superOver.title')}
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              <Trans i18nKey="cricketConfusingSituations.superOver.desc" components={{ strong: <strong className="text-white" /> }} />
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                <h3 className="text-white font-bold mb-4">{t('cricketConfusingSituations.superOver.including.title')}</h3>
                <p className="text-gray-300 text-sm mb-3">
                  {t('cricketConfusingSituations.superOver.including.desc')}
                </p>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <p className="text-brand font-bold text-sm mb-2">{t('cricketConfusingSituations.superOver.including.exampleTitle')}</p>
                  <ul className="space-y-1 text-gray-400 text-sm">
                    {(t('cricketConfusingSituations.superOver.including.examples', { returnObjects: true }) as string[]).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                <h3 className="text-white font-bold mb-4">{t('cricketConfusingSituations.superOver.regulation.title')}</h3>
                <p className="text-gray-300 text-sm mb-3">
                  {t('cricketConfusingSituations.superOver.regulation.desc')}
                </p>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <p className="text-brand font-bold text-sm mb-2">{t('cricketConfusingSituations.superOver.regulation.exampleTitle')}</p>
                  <ul className="space-y-1 text-gray-400 text-sm">
                    {(t('cricketConfusingSituations.superOver.regulation.examples', { returnObjects: true }) as string[]).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-600/30 p-5 rounded-xl">
              <p className="text-yellow-300 text-sm flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><Trans i18nKey="cricketConfusingSituations.superOver.critical" components={{ strong: <strong /> }} /></span>
              </p>
            </div>

            <div className="text-center">
              <LocalizedLink to="/guides/cricket/exchange-vs-sportsbook" className="inline-flex items-center gap-2 text-brand hover:underline">
                {t('cricketConfusingSituations.superOver.related')}
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: LIVE SUSPENSION */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <PauseCircle className="w-10 h-10 text-brand" />
            <h2 className="text-3xl font-bold text-white">
              {t('cricketConfusingSituations.liveSuspension.title')}
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              <Trans i18nKey="cricketConfusingSituations.liveSuspension.intro" components={{ strong: <strong className="text-white" /> }} />
            </p>

            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-white font-bold mb-4">{t('cricketConfusingSituations.liveSuspension.when.title')}</h3>
              <p className="text-gray-300 mb-4">{t('cricketConfusingSituations.liveSuspension.when.desc')}</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  {(t('cricketConfusingSituations.liveSuspension.when.events', { returnObjects: true }) as string[]).slice(0, 3).map((event, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-300">
                      <Activity className="w-4 h-4 text-brand" />
                      <span className="text-sm">{event}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {(t('cricketConfusingSituations.liveSuspension.when.events', { returnObjects: true }) as string[]).slice(3).map((event, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-300">
                      <Activity className="w-4 h-4 text-brand" />
                      <span className="text-sm">{event}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-brand" />
                  {t('cricketConfusingSituations.liveSuspension.sportsbook.title')}
                </h3>
                <p className="text-gray-300 text-sm">
                  <Trans i18nKey="cricketConfusingSituations.liveSuspension.sportsbook.desc" components={{ strong: <strong className="text-white" /> }} />
                </p>
              </div>

              <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-brand" />
                  {t('cricketConfusingSituations.liveSuspension.exchange.title')}
                </h3>
                <p className="text-gray-300 text-sm">
                  <Trans i18nKey="cricketConfusingSituations.liveSuspension.exchange.desc" components={{ strong: <strong className="text-white" /> }} />
                </p>
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
              <h3 className="text-white font-bold mb-4">{t('cricketConfusingSituations.liveSuspension.bets.title')}</h3>
              <ul className="space-y-3">
                {(t('cricketConfusingSituations.liveSuspension.bets.list', { returnObjects: true }) as any[]).map((item, i) => {
                  const Icon = [CheckCircle2, XCircle, Activity][i];
                  const colorClass = i === 0 ? "text-green-400" : i === 1 ? "text-red-400" : "text-brand";
                  return (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <Icon className={`w-5 h-5 ${colorClass} flex-shrink-0 mt-0.5`} />
                      <div>
                        <p className="font-bold text-white mb-1">{item.title}</p>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="bg-blue-900/20 border border-blue-700/30 p-5 rounded-xl">
              <p className="text-blue-300 text-sm">
                <Trans i18nKey="cricketConfusingSituations.liveSuspension.understanding" components={{ strong: <strong /> }} />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: VOID BETS */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <XCircle className="w-10 h-10 text-brand" />
            <h2 className="text-3xl font-bold text-white">
              {t('cricketConfusingSituations.voidBets.title')}
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              <Trans i18nKey="cricketConfusingSituations.voidBets.intro" components={{ strong: <strong className="text-white" /> }} />
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                <h3 className="text-white font-bold mb-4">{t('cricketConfusingSituations.voidBets.player.title')}</h3>
                <p className="text-gray-300 text-sm mb-3">
                  {t('cricketConfusingSituations.voidBets.player.desc')}
                </p>
                <div className="bg-gray-900 p-3 rounded-lg">
                  <p className="text-gray-400 text-xs">{t('cricketConfusingSituations.voidBets.player.example')}</p>
                </div>
              </div>

              <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                <h3 className="text-white font-bold mb-4">{t('cricketConfusingSituations.voidBets.over.title')}</h3>
                <p className="text-gray-300 text-sm mb-3">
                  {t('cricketConfusingSituations.voidBets.over.desc')}
                </p>
                <div className="bg-gray-900 p-3 rounded-lg">
                  <p className="text-gray-400 text-xs">{t('cricketConfusingSituations.voidBets.over.example')}</p>
                </div>
              </div>

              <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                <h3 className="text-white font-bold mb-4">{t('cricketConfusingSituations.voidBets.partial.title')}</h3>
                <p className="text-gray-300 text-sm mb-3">
                  {t('cricketConfusingSituations.voidBets.partial.desc')}
                </p>
                <div className="bg-gray-900 p-3 rounded-lg">
                  <p className="text-gray-400 text-xs">{t('cricketConfusingSituations.voidBets.partial.example')}</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-900/20 border border-yellow-600/30 p-5 rounded-xl">
              <p className="text-yellow-300 text-sm flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><Trans i18nKey="cricketConfusingSituations.voidBets.keyTakeaway" components={{ strong: <strong /> }} /></span>
              </p>
            </div>

            <div className="text-center">
              <LocalizedLink to="/guides/cricket/bet-types" className="inline-flex items-center gap-2 text-brand hover:underline">
                {t('cricketConfusingSituations.voidBets.reference')}
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FINAL UNDERSTANDING */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <HelpCircle className="w-10 h-10 text-brand" />
            <h2 className="text-3xl font-bold text-white">
              {t('cricketConfusingSituations.final.title')}
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              <Trans i18nKey="cricketConfusingSituations.final.intro" components={{ strong: <strong className="text-white" /> }} />
            </p>

            <div className="bg-gradient-to-br from-brand/10 to-transparent p-8 rounded-2xl border border-brand/30">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">{t('cricketConfusingSituations.final.principles.title')}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {(t('cricketConfusingSituations.final.principles.list', { returnObjects: true }) as string[]).map((item, i, arr) => {
                  if (i % 2 !== 0) return null; // Only process even indices
                  const nextItem = arr[i + 1];
                  return (
                    <React.Fragment key={i}>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                          <p className="text-gray-300 text-sm">{item}</p>
                        </div>
                        {nextItem && (
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                            <p className="text-gray-300 text-sm">{nextItem}</p>
                          </div>
                        )}
                      </div>
                    </React.Fragment>
                  );
                }).filter(Boolean)}
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 p-6 rounded-xl text-center">
              <p className="text-gray-300 italic">
                {t('cricketConfusingSituations.final.note')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED GUIDES */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">{t('cricketConfusingSituations.relatedGuides.title')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <LocalizedLink to="/guides/cricket/bet-types" className="bg-gray-800 hover:bg-gray-700 border border-gray-700 p-5 rounded-xl transition-colors text-center">
              <p className="text-white font-bold mb-2">{t('cricketConfusingSituations.relatedGuides.betTypes.title')}</p>
              <p className="text-gray-400 text-sm">{t('cricketConfusingSituations.relatedGuides.betTypes.desc')}</p>
            </LocalizedLink>
            <LocalizedLink to="/guides/cricket#step-by-step" className="bg-gray-800 hover:bg-gray-700 border border-gray-700 p-5 rounded-xl transition-colors text-center">
              <p className="text-white font-bold mb-2">{t('cricketConfusingSituations.relatedGuides.howToBet.title')}</p>
              <p className="text-gray-400 text-sm">{t('cricketConfusingSituations.relatedGuides.howToBet.desc')}</p>
            </LocalizedLink>
            <LocalizedLink to="/guides/cricket/exchange-vs-sportsbook" className="bg-gray-800 hover:bg-gray-700 border border-gray-700 p-5 rounded-xl transition-colors text-center">
              <p className="text-white font-bold mb-2">{t('cricketConfusingSituations.relatedGuides.exchangeVsSportsbook.title')}</p>
              <p className="text-gray-400 text-sm">{t('cricketConfusingSituations.relatedGuides.exchangeVsSportsbook.desc')}</p>
            </LocalizedLink>
            <LocalizedLink to="/guides/cricket/settlement-rules" className="bg-gray-800 hover:bg-gray-700 border border-gray-700 p-5 rounded-xl transition-colors text-center">
              <p className="text-white font-bold mb-2">{t('cricketConfusingSituations.relatedGuides.settlementRules.title')}</p>
              <p className="text-gray-400 text-sm">{t('cricketConfusingSituations.relatedGuides.settlementRules.desc')}</p>
            </LocalizedLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default CricketConfusingSituations;

