import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../../components/SEO';
import { Breadcrumbs } from '../../components/Section';
import { OFFICIAL_DOMAIN } from '../../constants';
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Clock,
  Shield,
  Smartphone,
  TrendingUp,
  ArrowRight,
  ExternalLink,
  Zap,
  Ban
} from 'lucide-react';

const OnexBetBangladeshReview: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        metadata={{
          title: t('1xbetReview.seo.title'),
          description: t('1xbetReview.seo.description'),
          keywords: t('1xbetReview.seo.keywords', { returnObjects: true }) as string[],
          canonicalUrl: "https://bigwinofficial.com/comparisons/1xbet-bangladesh-review",
          schema: {
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
              "@type": "Organization",
              "name": "1xBet"
            },
            "author": {
              "@type": "Organization",
              "name": "Bigwin959 Guide",
              "url": "https://bigwinofficial.com"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "2.0",
              "bestRating": "5",
              "worstRating": "1"
            },
            "datePublished": "2025-01-07",
            "reviewBody": "1xBet poses significant risks for Bangladesh players due to complex bonus terms (50x wagering) and frequent reports of withdrawal blocks."
          }
        }}
      />

      <Breadcrumbs items={[
        { label: t('1xbetReview.breadcrumbs.comparisons'), path: '/comparisons' },
        { label: t('1xbetReview.breadcrumbs.1xbetReview'), path: '/comparisons/1xbet-bangladesh-review' }
      ]} />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-red-900 via-gray-900 to-gray-950 py-20 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t('1xbetReview.hero.title')}
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              {t('1xbetReview.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* QUICK VERDICT */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-900/20 border border-red-700/30 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">{t('1xbetReview.quickVerdict.title')}</h2>
            <p className="text-gray-300 text-lg mb-4" dangerouslySetInnerHTML={{ __html: t('1xbetReview.quickVerdict.para1') }} />
            <p className="text-gray-300">
              {t('1xbetReview.quickVerdict.para2')}
            </p>
          </div>
        </div>
      </section>


      {/* COMPARISON TABLE */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('1xbetReview.comparisonTable.title')}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-800">
                  <th className="border border-gray-700 p-4 text-left text-white font-bold">{t('1xbetReview.comparisonTable.headers.feature')}</th>
                  <th className="border border-gray-700 p-4 text-left text-white font-bold">{t('1xbetReview.comparisonTable.headers.1xbet')}</th>
                  <th className="border border-gray-700 p-4 text-left text-white font-bold bg-brand/10">{t('1xbetReview.comparisonTable.headers.bigwin959')}</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr>
                  <td className="border border-gray-700 p-4 font-semibold text-white">{t('1xbetReview.comparisonTable.rows.interface.label')}</td>
                  <td className="border border-gray-700 p-4">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                      <span>{t('1xbetReview.comparisonTable.rows.interface.1xbet')}</span>
                    </div>
                  </td>
                  <td className="border border-gray-700 p-4 bg-green-900/10">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span className="font-semibold">{t('1xbetReview.comparisonTable.rows.interface.bigwin959')}</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-4 font-semibold text-white">{t('1xbetReview.comparisonTable.rows.bonus.label')}</td>
                  <td className="border border-gray-700 p-4">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-400" />
                      <span>{t('1xbetReview.comparisonTable.rows.bonus.1xbet')}</span>
                    </div>
                  </td>
                  <td className="border border-gray-700 p-4 bg-green-900/10">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span className="font-semibold">{t('1xbetReview.comparisonTable.rows.bonus.bigwin959')}</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-4 font-semibold text-white">{t('1xbetReview.comparisonTable.rows.withdrawal.label')}</td>
                  <td className="border border-gray-700 p-4">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                      <span>{t('1xbetReview.comparisonTable.rows.withdrawal.1xbet')}</span>
                    </div>
                  </td>
                  <td className="border border-gray-700 p-4 bg-green-900/10">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span className="font-semibold">{t('1xbetReview.comparisonTable.rows.withdrawal.bigwin959')}</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-4 font-semibold text-white">{t('1xbetReview.comparisonTable.rows.support.label')}</td>
                  <td className="border border-gray-700 p-4">
                    <span>{t('1xbetReview.comparisonTable.rows.support.1xbet')}</span>
                  </td>
                  <td className="border border-gray-700 p-4 bg-green-900/10">
                    <span className="font-semibold">{t('1xbetReview.comparisonTable.rows.support.bigwin959')}</span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-4 font-semibold text-white">{t('1xbetReview.comparisonTable.rows.verification.label')}</td>
                  <td className="border border-gray-700 p-4">
                    <span>{t('1xbetReview.comparisonTable.rows.verification.1xbet')}</span>
                  </td>
                  <td className="border border-gray-700 p-4 bg-green-900/10">
                    <span className="font-semibold">{t('1xbetReview.comparisonTable.rows.verification.bigwin959')}</span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-4 font-semibold text-white">{t('1xbetReview.comparisonTable.rows.stability.label')}</td>
                  <td className="border border-gray-700 p-4">
                    <span>{t('1xbetReview.comparisonTable.rows.stability.1xbet')}</span>
                  </td>
                  <td className="border border-gray-700 p-4 bg-green-900/10">
                    <span className="font-semibold">{t('1xbetReview.comparisonTable.rows.stability.bigwin959')}</span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-4 font-semibold text-white">{t('1xbetReview.comparisonTable.rows.reputation.label')}</td>
                  <td className="border border-gray-700 p-4">
                    <span>{t('1xbetReview.comparisonTable.rows.reputation.1xbet')}</span>
                  </td>
                  <td className="border border-gray-700 p-4 bg-green-900/10">
                    <span className="font-semibold">{t('1xbetReview.comparisonTable.rows.reputation.bigwin959')}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DETAILED ISSUES */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* 1. Complex Interface */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">{t('1xbetReview.sections.interface.title')}</h2>

            <div className="bg-red-900/20 border border-red-700/30 p-6 rounded-xl mb-6">
              <h3 className="text-xl font-bold text-white mb-4">{t('1xbetReview.sections.interface.1xbetProblems.title')}</h3>
              <p className="text-gray-300 mb-4">
                {t('1xbetReview.sections.interface.1xbetProblems.intro')}
              </p>
              <ul className="space-y-3">
                {(t('1xbetReview.sections.interface.1xbetProblems.points', { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-900/20 border border-green-700/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">{t('1xbetReview.sections.interface.bigwin959Design.title')}</h3>
              <p className="text-gray-300 mb-4">
                {t('1xbetReview.sections.interface.bigwin959Design.intro')}
              </p>
              <ul className="space-y-3">
                {(t('1xbetReview.sections.interface.bigwin959Design.points', { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2. Bonus Terms Trap */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">{t('1xbetReview.sections.bonus.title')}</h2>

            <div className="bg-gray-800 p-6 rounded-xl mb-6">
              <h3 className="text-xl font-bold text-white mb-4">{t('1xbetReview.sections.bonus.1xbetProblems.title')}</h3>
              <p className="text-gray-300 mb-4">
                {t('1xbetReview.sections.bonus.1xbetProblems.intro')}
              </p>
              <div className="space-y-4">
                {(t('1xbetReview.sections.bonus.1xbetProblems.items', { returnObjects: true }) as Array<{ title: string, desc: string }>).map((item, i) => (
                  <div key={i} className="border-l-4 border-red-400 pl-4">
                    <p className="text-white font-semibold mb-2">{item.title}</p>
                    <p className="text-gray-400 text-sm">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-900/20 border border-green-700/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">{t('1xbetReview.sections.bonus.bigwin959Bonuses.title')}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">{t('1xbetReview.sections.bonus.bigwin959Bonuses.clearTerms.title')}</h4>
                  <ul className="space-y-2">
                    {(t('1xbetReview.sections.bonus.bigwin959Bonuses.clearTerms.items', { returnObjects: true }) as string[]).map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">{t('1xbetReview.sections.bonus.bigwin959Bonuses.playerFriendly.title')}</h4>
                  <ul className="space-y-2">
                    {(t('1xbetReview.sections.bonus.bigwin959Bonuses.playerFriendly.items', { returnObjects: true }) as string[]).map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Withdrawal Issues */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">{t('1xbetReview.sections.withdrawal.title')}</h2>

            <div className="bg-red-900/20 border border-red-700/30 p-6 rounded-xl mb-6">
              <h3 className="text-xl font-bold text-white mb-4">{t('1xbetReview.sections.withdrawal.1xbetProblems.title')}</h3>
              <p className="text-gray-300 mb-4">
                {t('1xbetReview.sections.withdrawal.1xbetProblems.intro')}
              </p>
              <div className="space-y-4">
                {(t('1xbetReview.sections.withdrawal.1xbetProblems.items', { returnObjects: true }) as Array<{ title: string, desc: string }>).map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Ban className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-semibold mb-1">{item.title}</p>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-900/20 border border-green-700/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">{t('1xbetReview.sections.withdrawal.bigwin959Reliable.title')}</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <Zap className="w-8 h-8 text-green-400 mb-2" />
                  <p className="text-white font-bold mb-1">{t('1xbetReview.sections.withdrawal.bigwin959Reliable.fast.title')}</p>
                  <p className="text-gray-400 text-xs">{t('1xbetReview.sections.withdrawal.bigwin959Reliable.fast.desc')}</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <Shield className="w-8 h-8 text-green-400 mb-2" />
                  <p className="text-white font-bold mb-1">{t('1xbetReview.sections.withdrawal.bigwin959Reliable.transparent.title')}</p>
                  <p className="text-gray-400 text-xs">{t('1xbetReview.sections.withdrawal.bigwin959Reliable.transparent.desc')}</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <CheckCircle2 className="w-8 h-8 text-green-400 mb-2" />
                  <p className="text-white font-bold mb-1">{t('1xbetReview.sections.withdrawal.bigwin959Reliable.reliable.title')}</p>
                  <p className="text-gray-400 text-xs">{t('1xbetReview.sections.withdrawal.bigwin959Reliable.reliable.desc')}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* FINAL VERDICT */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            {t('1xbetReview.finalVerdict.title')}
          </h2>

          <div className="bg-yellow-900/20 border border-yellow-600/30 p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">{t('1xbetReview.finalVerdict.bottomLine.title')}</h3>
            <p className="text-gray-300 text-lg mb-4">
              {t('1xbetReview.finalVerdict.bottomLine.para1')}
            </p>
            <p className="text-gray-300 text-lg" dangerouslySetInnerHTML={{ __html: t('1xbetReview.finalVerdict.bottomLine.para2') }} />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-900/20 border border-red-700/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">{t('1xbetReview.finalVerdict.1xbetIssues.title')}</h3>
              <ul className="space-y-3">
                {(t('1xbetReview.finalVerdict.1xbetIssues.items', { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-brand/20 to-yellow-500/10 border border-brand/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">{t('1xbetReview.finalVerdict.bigwin959Advantages.title')}</h3>
              <ul className="space-y-3">
                {(t('1xbetReview.finalVerdict.bigwin959Advantages.items', { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <strong>{item}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-brand/10 border border-brand/30 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">{t('1xbetReview.finalVerdict.recommendation.title')}</h3>
            <p className="text-gray-300 text-lg mb-6">
              {t('1xbetReview.finalVerdict.recommendation.para1')}
            </p>
            <p className="text-gray-300 mb-8">
              {t('1xbetReview.finalVerdict.recommendation.para2')}
            </p>
            <a
              href={OFFICIAL_DOMAIN}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand hover:bg-yellow-300 text-black font-bold py-4 px-10 rounded-full transition-all shadow-lg text-lg"
            >
              {t('1xbetReview.finalVerdict.recommendation.cta')} <ExternalLink className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">{t('1xbetReview.faq.title')}</h2>

          <div className="space-y-6">
            {(t('1xbetReview.faq.items', { returnObjects: true }) as Array<{ q: string, a: string }>).map((faq, i) => (
              <div key={i} className="bg-gray-800 border border-gray-700 p-6 rounded-xl">
                <h3 className="text-white font-bold mb-3 flex items-start gap-2">
                  <span className="text-brand">Q:</span> {faq.q}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-6">
                  <strong className="text-brand">A:</strong> {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default OnexBetBangladeshReview;

