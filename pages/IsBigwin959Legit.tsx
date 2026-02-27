import { useTranslation } from 'react-i18next';
import React from 'react';
import { NavLink } from 'react-router-dom';
import SEO from '../components/SEO';
import { Breadcrumbs } from '../components/Section';
import { OFFICIAL_DOMAIN } from '../constants';
import {
  CheckCircle2,
  AlertTriangle,
  Shield,
  ExternalLink,
  Lock,
  Users,
  Clock,
  Wallet,
  HelpCircle,
  XCircle,
  TrendingUp,
  Globe,
  AlertCircle,
  FileCheck,
  Star,
  CheckCircle,
  ChevronRight
} from 'lucide-react';

const IsBigwin959Legit: React.FC = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <>
      <SEO
        metadata={{
          title: t('legitimacy.seo.title'),
          description: t('legitimacy.seo.description'),
          keywords: ["bigwin959 legit", "bigwin959 scam", "bigwin959 review", "is bigwin959 safe", "online casino license", "payment security", "fair gaming"],
          canonicalUrl: "https://bigwinofficial.com/is-bigwin959-legit",
          ogType: 'article',
          publishedTime: '2025-01-01T00:00:00+06:00',
          modifiedTime: new Date().toISOString(),
          author: 'Bigwin959 Guide',
          schema: {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": t('legitimacy.seo.title'),
            "description": t('legitimacy.seo.description'),
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
              "@id": "https://bigwinofficial.com/is-bigwin959-legit"
            }
          }
        }}
      />

      <Breadcrumbs items={[{ label: 'Is Bigwin959 Legit?', path: '/is-bigwin959-legit' }]} />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-purple-900 via-gray-900 to-gray-950 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t('legitimacy.hero.title')}
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              {t('legitimacy.hero.subtitle')}
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-gray-900/80 backdrop-blur-md p-8 rounded-xl border border-gray-800">
            <p className="text-gray-300 text-lg mb-4">
              {t('legitimacy.hero.intro')}
            </p>
            <div className="space-y-2 mb-6">
              {(Array.isArray(t('legitimacy.hero.queries', { returnObjects: true }) as any) ? (t('legitimacy.hero.queries', { returnObjects: true }) as any) : [] as string[]).map((query: any, index: number) => (
                <p key={index} className="text-gray-400 italic">"{query}"</p>
              ))}
            </div>
            <p className="text-gray-300 mb-4">
              {t('legitimacy.hero.analysis')}
            </p>
            <p className="text-gray-300">
              {t('legitimacy.hero.independence')}
            </p>
            <div className="mt-6 text-center">
              <a
                href={OFFICIAL_DOMAIN}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-purple-900 font-bold py-3 px-8 rounded-full transition-all shadow-lg"
              >
                {t('legitimacy.hero.cta')} <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('legitimacy.summary.title')}
          </h2>

          <div className="bg-yellow-900/20 border border-yellow-600/30 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">{t('legitimacy.summary.executive.title')}</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              {t('legitimacy.summary.executive.p1')}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('legitimacy.summary.executive.p2')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Positives */}
            <div className="bg-green-900/20 border border-green-700/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-8 h-8 text-green-400" />
                {t('legitimacy.summary.positives.title')}
              </h3>
              <ul className="space-y-3">
                {(Array.isArray(t('legitimacy.summary.positives.items', { returnObjects: true }) as any) ? (t('legitimacy.summary.positives.items', { returnObjects: true }) as any) : [] as string[]).map((item: any, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Things to Consider */}
            <div className="bg-red-900/20 border border-red-700/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <AlertTriangle className="w-8 h-8 text-red-400" />
                {t('legitimacy.summary.considerations.title')}
              </h3>
              <ul className="space-y-3">
                {(Array.isArray(t('legitimacy.summary.considerations.items', { returnObjects: true }) as any) ? (t('legitimacy.summary.considerations.items', { returnObjects: true }) as any) : [] as string[]).map((item: any, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND AMBASSADOR CREDIBILITY */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 via-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-brand/20 border border-brand/30 px-5 py-2 rounded-full mb-4">
              <Star className="w-5 h-5 text-brand" />
              <span className="text-brand text-sm font-bold">{t('legitimacy.ambassador.badge')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('legitimacy.ambassador.title')}
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              {t('legitimacy.ambassador.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-brand/10 blur-3xl rounded-full"></div>
              <img
                src="https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000504/model2.png"
                srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_300,f_auto,q_auto/v1767000504/model2.png 300w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_600,f_auto,q_auto/v1767000504/model2.png 600w"
                sizes="(max-width: 768px) 100vw, 50vw"
                alt="Payal Rajput - Bigwin959 Brand Ambassador"
                title="Payal Rajput - Bigwin959 Brand Ambassador"
                width="500"
                height="600"
                loading="lazy"
                className="relative z-10 w-full rounded-2xl border-4 border-brand/50 shadow-2xl"
                onError={(e) => {
                  e.currentTarget.src = "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000504/model2.png";
                }}
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">{t('legitimacy.ambassador.name')}</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                {t('legitimacy.ambassador.p1')}
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                {t('legitimacy.ambassador.p2')}
              </p>
              <div className="bg-purple-900/20 border border-purple-600/30 rounded-xl p-6 mb-6">
                <p className="text-gray-300 italic leading-relaxed mb-3">
                  "{t('legitimacy.ambassador.quote')}"
                </p>
                <p className="text-brand font-semibold">{t('legitimacy.ambassador.quoteAuthor')}</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-white font-bold mb-3">{t('legitimacy.ambassador.importance.title')}</h4>
                {(Array.isArray(t('legitimacy.ambassador.importance.items', { returnObjects: true }) as any) ? (t('legitimacy.ambassador.importance.items', { returnObjects: true }) as any) : [] as any[]).map((item: any, i: number) => (
                  <div key={i} className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold text-sm">{item.title}</p>
                      <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-blue-900/20 border border-blue-700/30 p-6 rounded-xl">
            <h4 className="text-white font-bold mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-blue-400" />
              {t('legitimacy.ambassador.assessment.title')}
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('legitimacy.ambassador.assessment.text')}
            </p>
          </div>
        </div>
      </section>

      {/* 1. PLATFORM BACKGROUND */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {t('legitimacy.background.title')}
          </h2>

          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <p className="text-gray-300 mb-4 text-lg">
              {t('legitimacy.background.p1')}
            </p>

            <h3 className="text-xl font-bold text-white mb-4 mt-6">{t('legitimacy.background.marketFocus.title')}</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {(Array.isArray(t('legitimacy.background.marketFocus.items', { returnObjects: true }) as any) ? (t('legitimacy.background.marketFocus.items', { returnObjects: true }) as any) : [] as any[]).map((item: any, i: number) => (
                <div key={i} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                  <Globe className="w-8 h-8 text-brand mx-auto mb-2" />
                  <p className="text-white font-bold text-center mb-1">{item.region}</p>
                  <p className="text-gray-400 text-sm text-center">{item.details}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-white mb-4 mt-6">{t('legitimacy.background.accessibility.title')}</h3>
            <p className="text-gray-300 mb-4">
              {t('legitimacy.background.accessibility.desc')}
            </p>
            <ul className="space-y-3 mb-6">
              {(Array.isArray(t('legitimacy.background.accessibility.items', { returnObjects: true, domain: OFFICIAL_DOMAIN }) as any) ? (t('legitimacy.background.accessibility.items', { returnObjects: true, domain: OFFICIAL_DOMAIN }) as any) : [] as any[]).map((item: any, i: number) => (
                <li key={i} className="flex items-start gap-3 bg-gray-800 p-4 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">{item.title}</p>
                    <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="text-gray-300 mb-4">
              {t('legitimacy.background.model')}
            </p>

            <div className="mt-6 bg-blue-900/20 border border-blue-700/30 p-4 rounded-lg">
              <p className="text-blue-300 text-sm flex items-start gap-2">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span>{t('legitimacy.background.notice')}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECURITY & ACCOUNT PROTECTION */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {t('legitimacy.security.title')}
          </h2>

          <div className="space-y-8">
            {/* Connection Security */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-brand" />
                {t('legitimacy.security.transmission.title')}
              </h3>
              <p className="text-gray-300 mb-4">
                {t('legitimacy.security.transmission.p1')}
              </p>
              <p className="text-gray-300">
                {t('legitimacy.security.transmission.p2')}
              </p>
            </div>

            {/* Account Security */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-brand" />
                {t('legitimacy.security.account.title')}
              </h3>
              <p className="text-gray-300 mb-4">
                {t('legitimacy.security.account.desc')}
              </p>
              <ul className="space-y-3">
                {(Array.isArray(t('legitimacy.security.account.items', { returnObjects: true }) as any) ? (t('legitimacy.security.account.items', { returnObjects: true }) as any) : [] as any[]).map((item: any, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended Safety Practices */}
            <div className="bg-gradient-to-br from-brand/10 to-transparent p-6 rounded-xl border border-brand/30">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-brand" />
                {t('legitimacy.security.practices.title')}
              </h3>
              <p className="text-gray-300 mb-4">
                {t('legitimacy.security.practices.desc')}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {(Array.isArray(t('legitimacy.security.practices.items', { returnObjects: true }) as any) ? (t('legitimacy.security.practices.items', { returnObjects: true }) as any) : [] as any[]).map((item: any, i: number) => (
                  <div key={i} className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white text-sm">{item.title}</p>
                      <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PAYMENTS */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {t('legitimacy.payments.title')}
          </h2>

          <p className="text-gray-300 text-lg mb-4">
            {t('legitimacy.payments.p1')}
          </p>
          <p className="text-gray-300 mb-8">
            {t('legitimacy.payments.p2')}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Bangladesh Payments */}
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <img src="https://flagcdn.com/bd.svg" alt="Bangladesh" title="Bangladesh" width="40" height="28" className="w-10 h-7 rounded shadow-sm" />
                <h3 className="text-2xl font-bold text-white">{t('legitimacy.payments.bd.title')}</h3>
              </div>
              <ul className="space-y-3">
                {(Array.isArray(t('legitimacy.payments.bd.items', { returnObjects: true }) as any) ? (t('legitimacy.payments.bd.items', { returnObjects: true }) as any) : [] as string[]).map((method: any, i: number) => (
                  <li key={i} className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg">
                    <Wallet className="w-5 h-5 text-brand" />
                    <span className="text-gray-300">{method}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Myanmar Payments */}
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <img src="https://flagcdn.com/mm.svg" alt="Myanmar" title="Myanmar" width="40" height="28" className="w-10 h-7 rounded shadow-sm" />
                <h3 className="text-2xl font-bold text-white">{t('legitimacy.payments.mm.title')}</h3>
              </div>
              <ul className="space-y-3">
                {(Array.isArray(t('legitimacy.payments.mm.items', { returnObjects: true }) as any) ? (t('legitimacy.payments.mm.items', { returnObjects: true }) as any) : [] as string[]).map((method: any, i: number) => (
                  <li key={i} className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg">
                    <Wallet className="w-5 h-5 text-brand" />
                    <span className="text-gray-300">{method}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Typical Experience */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Clock className="w-8 h-8 text-brand" />
              {t('legitimacy.payments.performance.title')}
            </h3>
            <p className="text-gray-300 mb-6">
              {t('legitimacy.payments.performance.desc')}
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <p className="text-gray-400 mb-3 text-sm font-semibold">{t('legitimacy.payments.performance.deposit.label')}</p>
                <p className="text-white font-bold text-xl mb-3">{t('legitimacy.payments.performance.deposit.value')}</p>
                <p className="text-gray-400 text-sm">{t('legitimacy.payments.performance.deposit.desc')}</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <p className="text-gray-400 mb-3 text-sm font-semibold">{t('legitimacy.payments.performance.withdrawal.label')}</p>
                <p className="text-white font-bold text-xl mb-3">{t('legitimacy.payments.performance.withdrawal.value')}</p>
                <p className="text-gray-400 text-sm">{t('legitimacy.payments.performance.withdrawal.desc')}</p>
              </div>
            </div>
            <div className="bg-blue-900/20 border border-blue-700/30 p-4 rounded-lg">
              <p className="text-blue-300 text-sm">
                <strong>Note:</strong> {t('legitimacy.payments.performance.note').replace('Note: ', '')}
              </p>
            </div>
          </div>

          {/* Warning */}
          <div className="bg-yellow-900/20 border border-yellow-600/30 p-6 rounded-xl">
            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-yellow-400" />
              {t('legitimacy.payments.warning.title')}
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {(Array.isArray(t('legitimacy.payments.warning.items', { returnObjects: true }) as any) ? (t('legitimacy.payments.warning.items', { returnObjects: true }) as any) : [] as string[]).map((item: any, i: number) => (
                <div key={i} className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-300 mt-4">
              {t('legitimacy.payments.warning.instruction')}
            </p>
          </div>
        </div>
      </section>

      {/* 4. GAME FAIRNESS & PROVIDERS */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {t('legitimacy.fairness.title')}
          </h2>

          <p className="text-gray-300 text-lg mb-4">
            {t('legitimacy.fairness.p1')}
          </p>

          <h3 className="text-xl font-bold text-white mb-4">{t('legitimacy.fairness.providers.title')}</h3>
          <p className="text-gray-300 mb-6">
            {t('legitimacy.fairness.providers.desc')}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {(Array.isArray(t('legitimacy.fairness.providers.items', { returnObjects: true }) as any) ? (t('legitimacy.fairness.providers.items', { returnObjects: true }) as any) : [] as any[]).map((provider: any, i: number) => (
              <div key={i} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <p className="text-white font-semibold text-center mb-1">{provider.name}</p>
                <p className="text-gray-400 text-xs text-center">{provider.cert}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-white mb-4">{t('legitimacy.fairness.rng.title')}</h3>
          <p className="text-gray-300 mb-4">
            {t('legitimacy.fairness.rng.p1')}
          </p>
          <p className="text-gray-300 mb-6">
            {t('legitimacy.fairness.rng.p2')}
          </p>

          <div className="bg-yellow-900/20 border border-yellow-600/30 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-yellow-400" />
              {t('legitimacy.fairness.risk.title')}
            </h3>
            <p className="text-gray-300 mb-4">
              {t('legitimacy.fairness.risk.desc')}
            </p>
            <ul className="space-y-3">
              {(Array.isArray(t('legitimacy.fairness.risk.items', { returnObjects: true }) as any) ? (t('legitimacy.fairness.risk.items', { returnObjects: true }) as any) : [] as any[]).map((item: any, i: number) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. CUSTOMER SUPPORT & SERVICE */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {t('legitimacy.support.title')}
          </h2>

          <p className="text-gray-300 text-lg mb-4">
            {t('legitimacy.support.p1')}
          </p>
          <p className="text-gray-300 mb-8">
            {t('legitimacy.support.p2')}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <Clock className="w-10 h-10 text-brand mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{t('legitimacy.support.channels.availability.title')}</h3>
              <p className="text-gray-300 mb-3">{t('legitimacy.support.channels.availability.desc1')}</p>
              <p className="text-gray-400 text-sm">{t('legitimacy.support.channels.availability.desc2')}</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <Users className="w-10 h-10 text-brand mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{t('legitimacy.support.channels.chat.title')}</h3>
              <p className="text-gray-300 mb-3">{t('legitimacy.support.channels.chat.desc1')}</p>
              <p className="text-gray-400 text-sm">{t('legitimacy.support.channels.chat.desc2')}</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <Globe className="w-10 h-10 text-brand mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{t('legitimacy.support.channels.multi.title')}</h3>
              <p className="text-gray-300 mb-3">{t('legitimacy.support.channels.multi.desc1')}</p>
              <p className="text-gray-400 text-sm">{t('legitimacy.support.channels.multi.desc2')}</p>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">{t('legitimacy.support.assessment.title')}</h3>
            <p className="text-gray-300 mb-4">
              {t('legitimacy.support.assessment.desc')}
            </p>
            <ul className="space-y-2">
              {(Array.isArray(t('legitimacy.support.assessment.items', { returnObjects: true }) as any) ? (t('legitimacy.support.assessment.items', { returnObjects: true }) as any) : [] as string[]).map((item: any, i: number) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-400 text-sm mt-4">
              {t('legitimacy.support.assessment.note')}
            </p>
          </div>
        </div>
      </section>

      {/* 6. RESPONSIBLE GAMING & RISKS */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {t('legitimacy.responsible.title')}
          </h2>

          <div className="bg-red-900/20 border border-red-700/30 p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-bold text-white mb-4">{t('legitimacy.responsible.understanding.title')}</h3>
            <p className="text-gray-300 text-lg mb-4">
              {t('legitimacy.responsible.understanding.p1')}
            </p>
            <p className="text-gray-300 text-lg">
              {t('legitimacy.responsible.understanding.p2')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Risks */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                {t('legitimacy.responsible.risks.title')}
              </h3>
              <ul className="space-y-3">
                {(Array.isArray(t('legitimacy.responsible.risks.items', { returnObjects: true }) as any) ? (t('legitimacy.responsible.risks.items', { returnObjects: true }) as any) : [] as string[]).map((item: any, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Responsible Practices */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
                {t('legitimacy.responsible.practices.title')}
              </h3>
              <ul className="space-y-3">
                {(Array.isArray(t('legitimacy.responsible.practices.items', { returnObjects: true }) as any) ? (t('legitimacy.responsible.practices.items', { returnObjects: true }) as any) : [] as string[]).map((item: any, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-yellow-900/20 border border-yellow-600/30 p-6 rounded-xl">
            <p className="text-gray-300 text-lg flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
              <span>
                <strong className="text-white">{t('legitimacy.responsible.recommendation.strong')}</strong> {t('legitimacy.responsible.recommendation.text')}
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* 7. LEGAL & JURISDICTION */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {t('legitimacy.legal.title')}
          </h2>

          <p className="text-gray-300 text-lg mb-4">
            {t('legitimacy.legal.p1')}
          </p>
          <p className="text-gray-300 mb-8">
            {t('legitimacy.legal.p2')}
          </p>

          <h3 className="text-xl font-bold text-white mb-6">{t('legitimacy.legal.landscape.title')}</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <FileCheck className="w-10 h-10 text-green-400 mx-auto mb-4" />
              <p className="text-white font-bold mb-3 text-center">{t('legitimacy.legal.landscape.licensed.title')}</p>
              <p className="text-gray-400 text-sm mb-3">{t('legitimacy.legal.landscape.licensed.desc')}</p>
              <p className="text-gray-500 text-xs">{t('legitimacy.legal.landscape.licensed.examples')}</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <HelpCircle className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
              <p className="text-white font-bold mb-3 text-center">{t('legitimacy.legal.landscape.grey.title')}</p>
              <p className="text-gray-400 text-sm mb-3">{t('legitimacy.legal.landscape.grey.desc')}</p>
              <p className="text-gray-500 text-xs">{t('legitimacy.legal.landscape.grey.note')}</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <TrendingUp className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <p className="text-white font-bold mb-3 text-center">{t('legitimacy.legal.landscape.evolving.title')}</p>
              <p className="text-gray-400 text-sm mb-3">{t('legitimacy.legal.landscape.evolving.desc')}</p>
              <p className="text-gray-500 text-xs">{t('legitimacy.legal.landscape.evolving.note')}</p>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">{t('legitimacy.legal.regional.title')}</h3>
            <div className="space-y-4">
              <div>
                <p className="text-white font-semibold mb-2">{t('legitimacy.legal.regional.bd.title')}</p>
                <p className="text-gray-300 text-sm">
                  {t('legitimacy.legal.regional.bd.desc')}
                </p>
              </div>
              <div>
                <p className="text-white font-semibold mb-2">{t('legitimacy.legal.regional.mm.title')}</p>
                <p className="text-gray-300 text-sm">
                  {t('legitimacy.legal.regional.mm.desc')}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-900/20 border border-yellow-600/30 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-yellow-400" />
              {t('legitimacy.legal.disclaimer.title')}
            </h3>
            <ul className="space-y-3">
              {(Array.isArray(t('legitimacy.legal.disclaimer.items', { returnObjects: true }) as any) ? (t('legitimacy.legal.disclaimer.items', { returnObjects: true }) as any) : [] as any[]).map((item: any, i: number) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 8. PROS & CONS SUMMARY */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('legitimacy.prosCons.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pros */}
            <div className="bg-green-900/20 border border-green-700/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-8 h-8 text-green-400" />
                {t('legitimacy.prosCons.pros.title')}
              </h3>
              <ul className="space-y-3">
                {(Array.isArray(t('legitimacy.prosCons.pros.items', { returnObjects: true }) as any) ? (t('legitimacy.prosCons.pros.items', { returnObjects: true }) as any) : [] as string[]).map((item: any, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="bg-red-900/20 border border-red-700/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <AlertTriangle className="w-8 h-8 text-red-400" />
                {t('legitimacy.prosCons.cons.title')}
              </h3>
              <ul className="space-y-3">
                {(Array.isArray(t('legitimacy.prosCons.cons.items', { returnObjects: true }) as any) ? (t('legitimacy.prosCons.cons.items', { returnObjects: true }) as any) : [] as string[]).map((item: any, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL VERDICT */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {t('legitimacy.verdict.title')}
          </h2>

          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">{t('legitimacy.verdict.assessment.title')}</h3>
            <p className="text-gray-300 text-lg mb-6">
              {t('legitimacy.verdict.assessment.desc')}
            </p>

            <h4 className="text-xl font-bold text-white mb-4">{t('legitimacy.verdict.indicators.title')}</h4>
            <p className="text-gray-300 mb-4">
              {t('legitimacy.verdict.indicators.desc')}
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {(Array.isArray(t('legitimacy.verdict.indicators.items', { returnObjects: true }) as any) ? (t('legitimacy.verdict.indicators.items', { returnObjects: true }) as any) : [] as any[]).map((item: any, i: number) => {
                const Icon = CheckCircle2;
                return (
                  <div key={i} className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                    <Icon className="w-6 h-6 text-brand mb-3" />
                    <p className="text-white font-semibold mb-2">{item.title}</p>
                    <p className="text-gray-400 text-sm">{item.text}</p>
                  </div>
                );
              })}
            </div>

            <h4 className="text-xl font-bold text-white mb-4 mt-8">{t('legitimacy.verdict.safety.title')}</h4>
            <p className="text-gray-300 mb-4">
              {t('legitimacy.verdict.safety.desc')}
            </p>
            <div className="space-y-3">
              {(Array.isArray(t('legitimacy.verdict.safety.items', { returnObjects: true }) as any) ? (t('legitimacy.verdict.safety.items', { returnObjects: true }) as any) : [] as any[]).map((item: any, i: number) => (
                <div key={i} className="flex items-start gap-3 bg-gray-800 p-4 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold">{item.title}</p>
                    <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-900/20 border border-blue-700/30 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-4">
              {t('legitimacy.verdict.decision.title')}
            </h3>
            <ul className="space-y-2">
              {(Array.isArray(t('legitimacy.verdict.recommendation.items', { returnObjects: true }) as any) ? (t('legitimacy.verdict.recommendation.items', { returnObjects: true }) as any) : [] as string[]).map((item: any, i: number) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('legitimacy.faq.title')}
          </h2>

          <div className="space-y-4">
            {(Array.isArray(t('legitimacy.faq.items', { returnObjects: true }) as any) ? (t('legitimacy.faq.items', { returnObjects: true }) as any) : [] as any[]).map((faq: any, index: number) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-800 transition-colors"
                >
                  <span className="text-white font-bold">{faq.q}</span>
                  <ChevronRight className={`w-5 h-5 text-brand transition-transform ${openFaq === index ? 'rotate-90' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="p-6 bg-gray-800/50 border-t border-gray-800">
                    <p className="text-gray-300 leading-relaxed italic border-l-4 border-brand pl-4">
                      {faq.a.replace('{{domain}}', OFFICIAL_DOMAIN)}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-gray-900 to-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('legitimacy.informed.title')}
          </h2>
          <p className="text-gray-300 text-lg mb-4">
            {t('legitimacy.informed.p1')}
          </p>
          <p className="text-gray-300 text-lg mb-8">
            {t('legitimacy.informed.p2')}
          </p>
          <a
            href={OFFICIAL_DOMAIN}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-purple-900 font-bold py-4 px-10 rounded-full transition-all shadow-lg text-lg"
          >
            {t('legitimacy.informed.cta')} <ExternalLink className="w-6 h-6" />
          </a>
          <div className="mt-8 bg-red-900/20 border border-red-700/30 p-6 rounded-xl max-w-2xl mx-auto">
            <p className="text-gray-300 font-semibold mb-2">
              {t('legitimacy.informed.reminders.title')}
            </p>
            <ul className="text-gray-400 text-sm space-y-1">
              {(Array.isArray(t('legitimacy.informed.reminders.items', { returnObjects: true }) as any) ? (t('legitimacy.informed.reminders.items', { returnObjects: true }) as any) : [] as string[]).map((item: any, i: number) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER DISCLAIMER */}
      <section className="bg-gray-950 py-12 border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-2">
            {t('legitimacy.footer.copyright')}
          </p>
          <p className="text-gray-500 text-sm mb-2">
            {t('legitimacy.footer.disclaimer')}
          </p>
          <p className="text-gray-500 text-sm">
            {t('legitimacy.footer.risk')}
          </p>
        </div>
      </section>
    </>
  );
};

export default IsBigwin959Legit;

