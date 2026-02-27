import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import SEO from '../components/SEO';
import { Breadcrumbs } from '../components/Section';
import { OFFICIAL_DOMAIN } from '../constants';
import {
  Wallet,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Shield,
  ExternalLink,
  Globe,
  Lock,
  XCircle,
  FileCheck,
  ArrowRight,
  Ban,
  AlertCircle
} from 'lucide-react';

const WithdrawalGuide: React.FC = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <>
      <SEO
        metadata={{
          title: t('withdrawalGuide.seo.title'),
          description: t('withdrawalGuide.seo.description'),
          keywords: t('withdrawalGuide.seo.keywords', { returnObjects: true }) as string[],
          canonicalUrl: `https://${OFFICIAL_DOMAIN}/guides/withdrawal`,
          ogImage: "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000519/withdraw.jpg",
          ogType: 'article',
          publishedTime: '2025-01-01T00:00:00+06:00',
          modifiedTime: new Date().toISOString(),
          author: 'Bigwin959 Guide',
          schema: {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": t('withdrawalGuide.seo.howTo.name'),
            "description": t('withdrawalGuide.seo.howTo.description'),
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": t('withdrawalGuide.seo.howTo.steps.login.name'),
                "text": t('withdrawalGuide.seo.howTo.steps.login.text')
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": t('withdrawalGuide.seo.howTo.steps.openWithdraw.name'),
                "text": t('withdrawalGuide.seo.howTo.steps.openWithdraw.text')
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": t('withdrawalGuide.seo.howTo.steps.chooseMethod.name'),
                "text": t('withdrawalGuide.seo.howTo.steps.chooseMethod.text')
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": t('withdrawalGuide.seo.howTo.steps.enterAmount.name'),
                "text": t('withdrawalGuide.seo.howTo.steps.enterAmount.text')
              },
              {
                "@type": "HowToStep",
                "position": 5,
                "name": t('withdrawalGuide.seo.howTo.steps.enterDetails.name'),
                "text": t('withdrawalGuide.seo.howTo.steps.enterDetails.text')
              },
              {
                "@type": "HowToStep",
                "position": 6,
                "name": t('withdrawalGuide.seo.howTo.steps.confirm.name'),
                "text": t('withdrawalGuide.seo.howTo.steps.confirm.text')
              },
              {
                "@type": "HowToStep",
                "position": 7,
                "name": t('withdrawalGuide.seo.howTo.steps.wait.name'),
                "text": t('withdrawalGuide.seo.howTo.steps.wait.text')
              }
            ]
          }
        }}
      />

      <Breadcrumbs items={[{ label: t('nav.guides'), path: '/guides' }, { label: t('withdrawalGuide.hero.breadcrumb'), path: '/guides/withdrawal' }]} />

      {/* SECTION 1 — HERO / INTRO */}
      <section className="relative min-h-[60vh] flex items-center bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000520/WithdrawalGuide.jpg"
            srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_600,f_auto,q_auto/v1767000520/WithdrawalGuide.jpg 600w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_1200,f_auto,q_auto/v1767000520/WithdrawalGuide.jpg 1200w"
            sizes="100vw"
            width="1200"
            height="600"
            alt={t('withdrawalGuide.hero.title')}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <Trans i18nKey="withdrawalGuide.hero.title" components={{ br: <br />, span: <span className="text-brand" /> }}>
              How to Withdraw Money<br />
              from <span className="text-brand">Bigwin959</span>
            </Trans>
          </h1>

          <div className="max-w-3xl bg-gray-900/80 backdrop-blur-md p-6 rounded-xl">
            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
              {t('withdrawalGuide.hero.description')}
            </p>
            <p className="text-gray-400 text-sm mb-4">
              {t('withdrawalGuide.hero.descriptionSmall')}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-950/50 py-2 px-3 rounded-lg w-fit">
              <AlertTriangle className="w-4 h-4" /> {t('withdrawalGuide.hero.infoGuide', { domain: OFFICIAL_DOMAIN })}
            </div>
          </div>

          <div className="mt-8">
            <a
              href={OFFICIAL_DOMAIN}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand hover:bg-white text-black font-bold py-4 px-8 rounded-full transition-all shadow-lg"
            >
              {t('withdrawalGuide.hero.cta')} <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2 — SUPPORTED WITHDRAWAL METHODS */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('withdrawalGuide.methods.title')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Bangladesh */}
            <div className="bg-gray-800 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700">
                <img src="https://flagcdn.com/bd.svg" alt="Bangladesh" width="40" height="28" className="w-10 h-7 rounded shadow-sm" />
                <h3 className="text-xl font-bold text-white">{t('withdrawalGuide.methods.bangladesh.title')}</h3>
              </div>
              <div className="space-y-3 mb-6">
                {['bKash', 'Nagad', 'Rocket', 'Bank Transfer'].map(method => (
                  <div key={method} className="flex items-center justify-between bg-gray-900 p-3 rounded-lg border border-gray-800">
                    <span className="text-white font-medium">{method}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                <p className="text-xs text-gray-500 mb-1">{t('withdrawalGuide.methods.minLabel')}</p>
                <p className="text-brand font-bold">{t('withdrawalGuide.methods.bangladesh.min')}</p>
              </div>
            </div>

            {/* Myanmar */}
            <div className="bg-gray-800 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700">
                <img src="https://flagcdn.com/mm.svg" alt="Myanmar" width="40" height="28" className="w-10 h-7 rounded shadow-sm" />
                <h3 className="text-xl font-bold text-white">{t('withdrawalGuide.methods.myanmar.title')}</h3>
              </div>
              <div className="space-y-3 mb-6">
                {['KBZPay', 'WavePay', 'Bank Transfer'].map(method => (
                  <div key={method} className="flex items-center justify-between bg-gray-900 p-3 rounded-lg border border-gray-800">
                    <span className="text-white font-medium">{method}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                <p className="text-xs text-gray-500 mb-1">{t('withdrawalGuide.methods.minLabel')}</p>
                <p className="text-brand font-bold">{t('withdrawalGuide.methods.myanmar.min')}</p>
              </div>
            </div>

            {/* USDT */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand text-black text-[10px] font-bold px-3 py-1 rounded-bl-xl">
                {t('withdrawalGuide.methods.crypto.fastest')}
              </div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-700">
                <Globe className="w-10 h-10 text-brand" />
                <h3 className="text-xl font-bold text-white">{t('withdrawalGuide.methods.crypto.title')}</h3>
              </div>
              <div className="space-y-3 mb-6">
                <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-800">
                  <p className="text-white font-medium">{t('withdrawalGuide.methods.crypto.network')}</p>
                  <p className="text-xs text-gray-500 mt-1">{t('withdrawalGuide.methods.crypto.desc')}</p>
                </div>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                <p className="text-xs text-gray-500 mb-1">{t('withdrawalGuide.methods.minLabel')}</p>
                <p className="text-brand font-bold">{t('withdrawalGuide.methods.crypto.min')}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400">
              <strong className="text-white">{t('withdrawalGuide.methods.processingTime.label')}</strong> {t('withdrawalGuide.methods.processingTime.value')}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — BEFORE YOU WITHDRAW */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('withdrawalGuide.requirements.title')}
          </h2>

          <div className="bg-gradient-to-br from-red-900/20 to-transparent p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-red-400" />
              <h3 className="text-2xl font-bold text-white">{t('withdrawalGuide.requirements.security.title')}</h3>
            </div>

            <p className="text-gray-300 mb-6">
              {t('withdrawalGuide.requirements.security.intro')}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {(t('withdrawalGuide.requirements.security.items', { returnObjects: true }) as string[]).map((req, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{req}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-yellow-900/20 border border-yellow-600/30 p-4 rounded-lg">
              <p className="text-yellow-200 text-sm flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                <span>{t('withdrawalGuide.requirements.security.bonusWarning')}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3.5 — USDT WITHDRAWAL (CRYPTO OPTION) */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand/10 to-transparent p-8 md:p-12 rounded-3xl">
            <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
              <div className="flex-1">
                <span className="text-brand font-bold text-sm tracking-widest uppercase mb-2 block">{t('withdrawalGuide.usdt.badge')}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {t('withdrawalGuide.usdt.title')}
                </h2>
                <p className="text-gray-300 text-lg">
                  {t('withdrawalGuide.usdt.description')}
                </p>
                <p className="text-gray-400 mt-4">
                  {t('withdrawalGuide.usdt.description2')}
                </p>
              </div>
              <div className="bg-gray-900/80 p-6 rounded-xl flex-shrink-0">
                <Globe className="w-16 h-16 text-brand mx-auto mb-4" />
                <div className="text-center">
                  <p className="text-xs text-gray-500 uppercase mb-1">{t('withdrawalGuide.usdt.network.label')}</p>
                  <p className="text-white font-bold font-mono text-lg">{t('withdrawalGuide.usdt.network.value')}</p>
                </div>
              </div>
            </div>

            {/* Why USDT */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">{t('withdrawalGuide.usdt.why.title')}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(t('withdrawalGuide.usdt.why.items', { returnObjects: true }) as { title: string, desc: string }[]).map((item, i) => (
                  <div key={i} className="bg-gray-900/50 p-6 rounded-xl">
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-brand" />
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* USDT Network Info */}
            <div className="bg-gray-900/50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-white mb-4">{t('withdrawalGuide.usdt.networkInfo.title')}</h3>
              <p className="text-gray-300 mb-4">
                <Trans i18nKey="withdrawalGuide.usdt.networkInfo.intro" components={{ strong: <strong className="text-brand" /> }} />
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {(t('withdrawalGuide.usdt.networkInfo.items', { returnObjects: true }) as string[]).map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-brand" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 bg-red-900/20 border border-red-700/30 p-4 rounded-lg">
                <p className="text-red-300 text-sm flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                  <span><Trans i18nKey="withdrawalGuide.usdt.networkInfo.warning" components={{ strong: <strong /> }} /></span>
                </p>
              </div>
            </div>

            {/* USDT Overview Table */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4">{t('withdrawalGuide.usdt.overview.title')}</h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-gray-900/50 rounded-xl overflow-hidden">
                  <thead className="bg-gray-950">
                    <tr>
                      <th className="px-6 py-4 text-left text-brand font-bold">{t('withdrawalGuide.usdt.overview.headers.item')}</th>
                      <th className="px-6 py-4 text-left text-brand font-bold">{t('withdrawalGuide.usdt.overview.headers.details')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {(t('withdrawalGuide.usdt.overview.items', { returnObjects: true }) as { item: string, detail: string }[]).map((row, i) => (
                      <tr key={i} className="hover:bg-gray-800/50">
                        <td className="px-6 py-4 text-white font-medium">{row.item}</td>
                        <td className="px-6 py-4 text-gray-300">{row.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Step-by-Step USDT Withdrawal */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-6">{t('withdrawalGuide.usdt.steps.title')}</h3>
              <div className="space-y-4">
                {(t('withdrawalGuide.usdt.steps.items', { returnObjects: true }) as string[]).map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-900/50 p-4 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-brand text-black font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-gray-300 mt-1">{step}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 mt-4 text-sm italic">
                {t('withdrawalGuide.usdt.steps.footer')}
              </p>
            </div>

            {/* USDT Safety Tips */}
            <div className="bg-red-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-red-400" />
                {t('withdrawalGuide.usdt.safety.title')}
              </h3>
              <div className="space-y-3">
                {(t('withdrawalGuide.usdt.safety.items', { returnObjects: true }) as string[]).map((tip, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{tip}</span>
                  </div>
                ))}
              </div>
              <p className="text-red-300 mt-4 font-bold text-sm">
                {t('withdrawalGuide.usdt.safety.footer')}
              </p>
            </div>

            {/* When USDT is Better */}
            <div className="mt-8 bg-gray-900/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">{t('withdrawalGuide.usdt.whenBetter.title')}</h3>
              <p className="text-gray-300 mb-4">{t('withdrawalGuide.usdt.whenBetter.intro')}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {(t('withdrawalGuide.usdt.whenBetter.items', { returnObjects: true }) as string[]).map((reason, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{reason}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 mt-4 text-sm italic">
                {t('withdrawalGuide.usdt.whenBetter.footer')}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 4 — WITHDRAWAL OVERVIEW TABLE */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('withdrawalGuide.overview.title')}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
              <thead className="bg-gray-950">
                <tr>
                  <th className="px-6 py-4 text-left text-brand font-bold">{t('withdrawalGuide.overview.headers.step')}</th>
                  <th className="px-6 py-4 text-left text-brand font-bold">{t('withdrawalGuide.overview.headers.action')}</th>
                  <th className="px-6 py-4 text-left text-brand font-bold">{t('withdrawalGuide.overview.headers.happens')}</th>
                  <th className="px-6 py-4 text-left text-brand font-bold">{t('withdrawalGuide.overview.headers.issues')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {(t('withdrawalGuide.overview.items', { returnObjects: true }) as { step: string, action: string, happens: string, issues: string }[]).map((row, i) => (
                  <tr key={i} className="hover:bg-gray-750">
                    <td className="px-6 py-4 text-white font-bold">{row.step}</td>
                    <td className="px-6 py-4 text-gray-300">{row.action}</td>
                    <td className="px-6 py-4 text-gray-300">{row.happens}</td>
                    <td className="px-6 py-4 text-gray-400 text-sm">{row.issues}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 5 — STEP-BY-STEP WITHDRAWAL (BANGLADESH) */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('withdrawalGuide.walkthroughBD.title')} <span className="text-brand">{t('withdrawalGuide.walkthroughBD.titleSpan')}</span>
          </h2>

          <div className="space-y-6">
            {(t('withdrawalGuide.walkthroughBD.items', { returnObjects: true }) as { step: number, title: string, desc: string }[]).map((item) => (
              <div key={item.step} className="bg-gray-800 p-6 rounded-xl transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand text-black font-bold text-xl flex items-center justify-center flex-shrink-0">
                    {item.step}
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

      {/* SECTION 6 — STEP-BY-STEP WITHDRAWAL (MYANMAR) */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('withdrawalGuide.walkthroughMM.title')} <span className="text-brand">{t('withdrawalGuide.walkthroughMM.titleSpan')}</span>
          </h2>

          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {(t('withdrawalGuide.walkthroughMM.items', { returnObjects: true }) as string[]).map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-gray-900 border border-gray-700 text-brand font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-gray-300">{step}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <h4 className="text-white font-bold mb-4">{t('withdrawalGuide.walkthroughMM.limits.title')}</h4>
                <div className="space-y-4">
                  <div>
                    <span className="text-gray-500 text-sm">{t('withdrawalGuide.walkthroughMM.limits.min')}</span>
                    <p className="text-brand font-bold">{t('withdrawalGuide.walkthroughMM.limits.minValue')}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">{t('withdrawalGuide.walkthroughMM.limits.max')}</span>
                    <p className="text-brand font-bold">{t('withdrawalGuide.walkthroughMM.limits.maxValue')}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-800">
                    <p className="text-gray-400 text-sm">
                      <Trans i18nKey="withdrawalGuide.walkthroughMM.limits.footer" components={{ strong: <strong className="text-white" /> }} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — PROCESSING TIMES TABLE */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('withdrawalGuide.times.title')}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
              <thead className="bg-gray-950">
                <tr>
                  <th className="px-6 py-4 text-left text-brand font-bold">{t('withdrawalGuide.times.headers.method')}</th>
                  <th className="px-6 py-4 text-left text-brand font-bold">{t('withdrawalGuide.times.headers.time')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {(t('withdrawalGuide.times.items', { returnObjects: true }) as { method: string, time: string }[]).map((row, i) => (
                  <tr key={i} className="hover:bg-gray-750">
                    <td className="px-6 py-4 text-white font-medium">{row.method}</td>
                    <td className="px-6 py-4 text-gray-300">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-gray-400 mt-6 text-sm">
            {t('withdrawalGuide.times.footer')}
          </p>
        </div>
      </section>

      {/* SECTION 8 — COMMON DELAYS & REASONS */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('withdrawalGuide.delays.title')}
          </h2>

          <div className="bg-yellow-900/20 border border-yellow-600/30 p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-yellow-400" />
              <h3 className="text-2xl font-bold text-white">{t('withdrawalGuide.delays.factorTitle')}</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {(t('withdrawalGuide.delays.items', { returnObjects: true }) as string[]).map((reason, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg">
                  <Ban className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{reason}</span>
                </div>
              ))}
            </div>

            <p className="text-yellow-200 mt-6 text-sm">
              {t('withdrawalGuide.delays.footer')}
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9 — TIPS FOR FAST & SAFE WITHDRAWALS */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('withdrawalGuide.tips.title')}
          </h2>

          <div className="bg-gradient-to-br from-brand/10 to-transparent p-8 rounded-2xl border border-brand/30">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-brand" />
              <h3 className="text-2xl font-bold text-white">{t('withdrawalGuide.tips.bestPractices')}</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {(t('withdrawalGuide.tips.items', { returnObjects: true }) as string[]).map((tip, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — FAQ */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('withdrawalGuide.faq.title')}
          </h2>

          <div className="space-y-4">
            {(t('withdrawalGuide.faq.items', { returnObjects: true }) as { q: string, a: string }[]).map((item, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl overflow-hidden">
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

      {/* SECTION 11 — FINAL CTA */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t('withdrawalGuide.finalCta.title')}</h2>
          <p className="text-gray-400 mb-8 text-lg">
            {t('withdrawalGuide.finalCta.description')}
          </p>
          <a
            href={OFFICIAL_DOMAIN}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand hover:bg-white text-black font-bold py-4 px-8 rounded-full transition-all shadow-lg"
          >
            {t('withdrawalGuide.finalCta.cta')} <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  );
};

export default WithdrawalGuide;

