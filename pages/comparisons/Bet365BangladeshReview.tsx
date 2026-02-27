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
  CreditCard,
  Globe,
  Smartphone,
  Users,
  TrendingUp,
  ArrowRight,
  ExternalLink,
  Shield,
  Zap,
  DollarSign,
  Trophy
} from 'lucide-react';

const Bet365BangladeshReview: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        metadata={{
          title: t('bet365Review.seo.title'),
          description: t('bet365Review.seo.description'),
          keywords: t('bet365Review.seo.keywords', { returnObjects: true }) as string[],
          canonicalUrl: "https://bigwinofficial.com/comparisons/bet365-bangladesh-review",
          schema: {
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
              "@type": "Organization",
              "name": "Bet365",
              "image": "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000392/bigwin959/providers/sbo.png"
            },
            "author": {
              "@type": "Organization",
              "name": "Bigwin959 Guide",
              "url": "https://bigwinofficial.com"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "3.0",
              "bestRating": "5",
              "worstRating": "1"
            },
            "datePublished": "2025-01-07",
            "reviewBody": "Bet365 is a global giant but lacks local payment methods like bKash and Nagad for Bangladesh players, making withdrawals difficult and slow."
          }
        }}
      />

      <Breadcrumbs items={[
        { label: t('bet365Review.breadcrumbs.comparisons'), path: '/comparisons' },
        { label: t('bet365Review.breadcrumbs.bet365Review'), path: '/comparisons/bet365-bangladesh-review' }
      ]} />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-blue-900 via-gray-900 to-gray-950 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t('bet365Review.hero.title')}
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              {t('bet365Review.hero.subtitle')}
            </p>
            <p className="text-lg text-gray-400">
              {t('bet365Review.hero.comparison')}
            </p>
          </div>
        </div>
      </section>


      {/* QUICK VERDICT */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-900/20 border border-yellow-600/30 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">{t('bet365Review.quickVerdict.title')}</h2>
            <p className="text-gray-300 text-lg mb-4" dangerouslySetInnerHTML={{ __html: t('bet365Review.quickVerdict.para1') }} />
            <p className="text-gray-300">
              {t('bet365Review.quickVerdict.para2')}
            </p>
          </div>
        </div>
      </section>

      {/* DETAILED COMPARISON TABLE */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('bet365Review.comparisonTable.title')}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-800">
                  <th className="border border-gray-700 p-4 text-left text-white font-bold">{t('bet365Review.comparisonTable.headers.feature')}</th>
                  <th className="border border-gray-700 p-4 text-left text-white font-bold">{t('bet365Review.comparisonTable.headers.bet365')}</th>
                  <th className="border border-gray-700 p-4 text-left text-white font-bold bg-brand/10">{t('bet365Review.comparisonTable.headers.bigwin959')}</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr>
                  <td className="border border-gray-700 p-4 font-semibold text-white">{t('bet365Review.comparisonTable.rows.bkash.label')}</td>
                  <td className="border border-gray-700 p-4">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-400" />
                      <span>{t('bet365Review.comparisonTable.rows.bkash.bet365')}</span>
                    </div>
                  </td>
                  <td className="border border-gray-700 p-4 bg-green-900/10">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span className="font-semibold">{t('bet365Review.comparisonTable.rows.bkash.bigwin959')}</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-4 font-semibold text-white">{t('bet365Review.comparisonTable.rows.nagad.label')}</td>
                  <td className="border border-gray-700 p-4">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-400" />
                      <span>{t('bet365Review.comparisonTable.rows.nagad.bet365')}</span>
                    </div>
                  </td>
                  <td className="border border-gray-700 p-4 bg-green-900/10">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span className="font-semibold">{t('bet365Review.comparisonTable.rows.nagad.bigwin959')}</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-4 font-semibold text-white">{t('bet365Review.comparisonTable.rows.rocket.label')}</td>
                  <td className="border border-gray-700 p-4">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-400" />
                      <span>{t('bet365Review.comparisonTable.rows.rocket.bet365')}</span>
                    </div>
                  </td>
                  <td className="border border-gray-700 p-4 bg-green-900/10">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span className="font-semibold">{t('bet365Review.comparisonTable.rows.rocket.bigwin959')}</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-4 font-semibold text-white">{t('bet365Review.comparisonTable.rows.withdrawal.label')}</td>
                  <td className="border border-gray-700 p-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-yellow-400" />
                      <span>{t('bet365Review.comparisonTable.rows.withdrawal.bet365')}</span>
                    </div>
                  </td>
                  <td className="border border-gray-700 p-4 bg-green-900/10">
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-green-400" />
                      <span className="font-semibold">{t('bet365Review.comparisonTable.rows.withdrawal.bigwin959')}</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-4 font-semibold text-white">{t('bet365Review.comparisonTable.rows.kyc.label')}</td>
                  <td className="border border-gray-700 p-4">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                      <span>{t('bet365Review.comparisonTable.rows.kyc.bet365')}</span>
                    </div>
                  </td>
                  <td className="border border-gray-700 p-4 bg-green-900/10">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span className="font-semibold">{t('bet365Review.comparisonTable.rows.kyc.bigwin959')}</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-4 font-semibold text-white">{t('bet365Review.comparisonTable.rows.language.label')}</td>
                  <td className="border border-gray-700 p-4">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-400" />
                      <span>{t('bet365Review.comparisonTable.rows.language.bet365')}</span>
                    </div>
                  </td>
                  <td className="border border-gray-700 p-4 bg-green-900/10">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                      <span className="font-semibold">{t('bet365Review.comparisonTable.rows.language.bigwin959')}</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-4 font-semibold text-white">{t('bet365Review.comparisonTable.rows.support.label')}</td>
                  <td className="border border-gray-700 p-4">
                    <span>{t('bet365Review.comparisonTable.rows.support.bet365')}</span>
                  </td>
                  <td className="border border-gray-700 p-4 bg-green-900/10">
                    <span className="font-semibold">{t('bet365Review.comparisonTable.rows.support.bigwin959')}</span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-700 p-4 font-semibold text-white">{t('bet365Review.comparisonTable.rows.minDeposit.label')}</td>
                  <td className="border border-gray-700 p-4">
                    <span>{t('bet365Review.comparisonTable.rows.minDeposit.bet365')}</span>
                  </td>
                  <td className="border border-gray-700 p-4 bg-green-900/10">
                    <span className="font-semibold">{t('bet365Review.comparisonTable.rows.minDeposit.bigwin959')}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>


      {/* DETAILED SECTIONS */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* 1. Payment Methods */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">{t('bet365Review.sections.payment.title')}</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-red-900/20 border border-red-700/30 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-red-400" />
                  {t('bet365Review.sections.payment.bet365Issues.title')}
                </h3>
                <p className="text-gray-300 mb-4">
                  {t('bet365Review.sections.payment.bet365Issues.intro')}
                </p>
                <ul className="space-y-2">
                  {(t('bet365Review.sections.payment.bet365Issues.points', { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                      <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-900/20 border border-green-700/30 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                  {t('bet365Review.sections.payment.bigwin959Advantages.title')}
                </h3>
                <p className="text-gray-300 mb-4">
                  {t('bet365Review.sections.payment.bigwin959Advantages.intro')}
                </p>
                <ul className="space-y-2">
                  {(t('bet365Review.sections.payment.bigwin959Advantages.points', { returnObjects: true }) as string[]).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-900/20 border border-blue-700/30 p-6 rounded-xl">
              <h4 className="text-white font-bold mb-3">{t('bet365Review.sections.payment.whyMatters.title')}</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t('bet365Review.sections.payment.whyMatters.text')}
              </p>
            </div>
          </div>

          {/* 2. Withdrawal Times */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">{t('bet365Review.sections.withdrawal.title')}</h2>

            <div className="bg-gray-800 p-6 rounded-xl mb-6">
              <h3 className="text-xl font-bold text-white mb-4">{t('bet365Review.sections.withdrawal.bet365Process.title')}</h3>
              <p className="text-gray-300 mb-4">
                {t('bet365Review.sections.withdrawal.bet365Process.intro')}
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold mb-1">{t('bet365Review.sections.withdrawal.bet365Process.processingTime.title')}</p>
                    <p className="text-gray-400 text-sm">
                      {t('bet365Review.sections.withdrawal.bet365Process.processingTime.desc')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold mb-1">{t('bet365Review.sections.withdrawal.bet365Process.verificationDelays.title')}</p>
                    <p className="text-gray-400 text-sm">
                      {t('bet365Review.sections.withdrawal.bet365Process.verificationDelays.desc')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold mb-1">{t('bet365Review.sections.withdrawal.bet365Process.conversionFees.title')}</p>
                    <p className="text-gray-400 text-sm">
                      {t('bet365Review.sections.withdrawal.bet365Process.conversionFees.desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-900/20 border border-green-700/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">{t('bet365Review.sections.withdrawal.bigwin959Advantages.title')}</h3>
              <p className="text-gray-300 mb-4">
                {t('bet365Review.sections.withdrawal.bigwin959Advantages.intro')}
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <Zap className="w-8 h-8 text-green-400 mb-2" />
                  <p className="text-white font-bold mb-1">{t('bet365Review.sections.withdrawal.bigwin959Advantages.fast.title')}</p>
                  <p className="text-gray-400 text-xs">{t('bet365Review.sections.withdrawal.bigwin959Advantages.fast.desc')}</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <CheckCircle2 className="w-8 h-8 text-green-400 mb-2" />
                  <p className="text-white font-bold mb-1">{t('bet365Review.sections.withdrawal.bigwin959Advantages.simplifiedKYC.title')}</p>
                  <p className="text-gray-400 text-xs">{t('bet365Review.sections.withdrawal.bigwin959Advantages.simplifiedKYC.desc')}</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <DollarSign className="w-8 h-8 text-green-400 mb-2" />
                  <p className="text-white font-bold mb-1">{t('bet365Review.sections.withdrawal.bigwin959Advantages.noFees.title')}</p>
                  <p className="text-gray-400 text-xs">{t('bet365Review.sections.withdrawal.bigwin959Advantages.noFees.desc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. KYC Requirements */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">{t('bet365Review.sections.kyc.title')}</h2>

            <p className="text-gray-300 text-lg mb-6">
              {t('bet365Review.sections.kyc.intro')}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4">{t('bet365Review.sections.kyc.bet365Challenges.title')}</h3>
                <ul className="space-y-3">
                  {(t('bet365Review.sections.kyc.bet365Challenges.items', { returnObjects: true }) as Array<{ title: string, desc: string }>).map((item, i) => (
                    <li key={i} className="border-l-2 border-red-400 pl-3">
                      <p className="text-white font-semibold text-sm">{item.title}</p>
                      <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-900/20 border border-green-700/30 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4">{t('bet365Review.sections.kyc.bigwin959Process.title')}</h3>
                <ul className="space-y-3">
                  {(t('bet365Review.sections.kyc.bigwin959Process.items', { returnObjects: true }) as Array<{ title: string, desc: string }>).map((item, i) => (
                    <li key={i} className="border-l-2 border-green-400 pl-3">
                      <p className="text-white font-semibold text-sm">{item.title}</p>
                      <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>


          {/* 4. Language & Support */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">{t('bet365Review.sections.language.title')}</h2>

            <div className="bg-gray-800 p-6 rounded-xl mb-6">
              <h3 className="text-xl font-bold text-white mb-4">{t('bet365Review.sections.language.bet365Limitations.title')}</h3>
              <p className="text-gray-300 mb-4">
                {t('bet365Review.sections.language.bet365Limitations.intro')}
              </p>
              <div className="space-y-3">
                {(t('bet365Review.sections.language.bet365Limitations.points', { returnObjects: true }) as string[]).map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-400 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-900/20 border border-green-700/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">{t('bet365Review.sections.language.bigwin959Support.title')}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">{t('bet365Review.sections.language.bigwin959Support.platformFeatures.title')}</h4>
                  <ul className="space-y-2">
                    {(t('bet365Review.sections.language.bigwin959Support.platformFeatures.items', { returnObjects: true }) as string[]).map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">{t('bet365Review.sections.language.bigwin959Support.supportAdvantages.title')}</h4>
                  <ul className="space-y-2">
                    {(t('bet365Review.sections.language.bigwin959Support.supportAdvantages.items', { returnObjects: true }) as string[]).map((item, i) => (
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

          {/* 5. What Bet365 Does Well */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">{t('bet365Review.sections.bet365Strengths.title')}</h2>

            <p className="text-gray-300 mb-6">
              {t('bet365Review.sections.bet365Strengths.intro')}
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-6 rounded-xl">
                <Trophy className="w-10 h-10 text-blue-400 mb-4" />
                <h4 className="text-white font-bold mb-2">{t('bet365Review.sections.bet365Strengths.globalReputation.title')}</h4>
                <p className="text-gray-400 text-sm">
                  {t('bet365Review.sections.bet365Strengths.globalReputation.desc')}
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl">
                <Globe className="w-10 h-10 text-blue-400 mb-4" />
                <h4 className="text-white font-bold mb-2">{t('bet365Review.sections.bet365Strengths.sportsCoverage.title')}</h4>
                <p className="text-gray-400 text-sm">
                  {t('bet365Review.sections.bet365Strengths.sportsCoverage.desc')}
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-xl">
                <Smartphone className="w-10 h-10 text-blue-400 mb-4" />
                <h4 className="text-white font-bold mb-2">{t('bet365Review.sections.bet365Strengths.advancedPlatform.title')}</h4>
                <p className="text-gray-400 text-sm">
                  {t('bet365Review.sections.bet365Strengths.advancedPlatform.desc')}
                </p>
              </div>
            </div>

            <div className="mt-6 bg-yellow-900/20 border border-yellow-600/30 p-6 rounded-xl">
              <p className="text-gray-300 text-sm" dangerouslySetInnerHTML={{ __html: t('bet365Review.sections.bet365Strengths.however') }} />
            </div>
          </div>

        </div>
      </section >

      {/* FINAL VERDICT */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            {t('bet365Review.finalVerdict.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800 border border-gray-700 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">{t('bet365Review.finalVerdict.chooseBet365.title')}</h3>
              <ul className="space-y-3">
                {(t('bet365Review.finalVerdict.chooseBet365.items', { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <ArrowRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-brand/20 to-yellow-500/10 border border-brand/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">{t('bet365Review.finalVerdict.chooseBigwin959.title')}</h3>
              <ul className="space-y-3">
                {(t('bet365Review.finalVerdict.chooseBigwin959.items', { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <strong>{item}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-brand/10 border border-brand/30 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">{t('bet365Review.finalVerdict.recommendation.title')}</h3>
            <p className="text-gray-300 text-lg mb-6" dangerouslySetInnerHTML={{ __html: t('bet365Review.finalVerdict.recommendation.para1') }} />
            <p className="text-gray-300 mb-8">
              {t('bet365Review.finalVerdict.recommendation.para2')}
            </p>
            <a
              href={OFFICIAL_DOMAIN}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand hover:bg-yellow-300 text-black font-bold py-4 px-10 rounded-full transition-all shadow-lg text-lg"
            >
              {t('bet365Review.finalVerdict.recommendation.cta')} <ExternalLink className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section >

      {/* FAQ */}
      < section className="py-16 bg-gray-900" >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">{t('bet365Review.faq.title')}</h2>

          <div className="space-y-6">
            {(t('bet365Review.faq.items', { returnObjects: true }) as Array<{ q: string, a: string }>).map((faq, i) => (
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
      </section >

    </>
  );
};

export default Bet365BangladeshReview;

