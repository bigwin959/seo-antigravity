import React from 'react';
import { LocalizedLink } from '../components/LocalizedLink';
import SEO from '../components/SEO';
import { Breadcrumbs } from '../components/Section';
import { OFFICIAL_DOMAIN } from '../constants';
import { useTranslation, Trans } from 'react-i18next';
import {
  Wallet,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Shield,
  ExternalLink,
  Smartphone,
  Upload,
  Zap,
  XCircle,
  TrendingUp,
  Globe
} from 'lucide-react';

const KbzpayDepositGuide: React.FC = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <>
      <SEO
        metadata={{
          title: t('kbzpayDepositGuide.seo.title'),
          description: t('kbzpayDepositGuide.seo.description'),
          keywords: t('kbzpayDepositGuide.seo.keywords', { returnObjects: true }) as string[],
          canonicalUrl: "https://bigwinofficial.com/guides/kbzpay-deposit"
        }}
      />

      <Breadcrumbs items={[
        { label: t('nav.guides'), path: '/guides' },
        { label: t('breadcrumbs.depositGuide'), path: '/guides/deposit' },
        { label: t('breadcrumbs.kbzpayDeposit'), path: '/guides/kbzpay-deposit' }
      ]} />

      {/* HERO SECTION */}
      <section className="relative bg-gray-950 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000501/KbzpayDepositGuide.jpg"
            srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_600,f_auto,q_auto/v1767000501/KbzpayDepositGuide.jpg 600w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_1200,f_auto,q_auto/v1767000501/KbzpayDepositGuide.jpg 1200w"
            sizes="100vw"
            width="1200"
            height="600"
            alt={t('kbzpayDepositGuide.hero.imgAlt')}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <img src="https://flagcdn.com/mm.svg" alt={t('kbzpayDepositGuide.hero.flagAlt')} className="w-10 h-7 rounded shadow-sm" />
            <span className="text-brand font-bold text-lg">{t('kbzpayDepositGuide.hero.badge')}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t('kbzpayDepositGuide.hero.title')}<br />
            <span className="text-brand">{t('kbzpayDepositGuide.hero.highlight')}</span>
          </h1>

          <div className="max-w-3xl bg-gray-900/80 backdrop-blur-md p-6 rounded-xl border border-gray-800">
            <p className="text-gray-300 text-lg mb-4">
              {t('kbzpayDepositGuide.hero.desc')}
            </p>

            <div className="mb-4">
              <p className="text-gray-400 mb-2">{t('kbzpayDepositGuide.hero.listTitle')}</p>
              <ul className="space-y-2">
                {(t('kbzpayDepositGuide.hero.items', { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-950/50 py-2 px-3 rounded-lg w-fit border border-gray-700">
              <AlertTriangle className="w-4 h-4" />
              {t('kbzpayDepositGuide.hero.disclaimer', { domain: OFFICIAL_DOMAIN })}
            </div>
          </div>
        </div>
      </section>

      {/* WHY USE KBZPAY */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('kbzpayDepositGuide.why.title')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(t('kbzpayDepositGuide.why.items', { returnObjects: true }) as Array<{ title: string, desc: string }>).map((item, i) => {
              const icons = [Zap, Smartphone, Clock, Shield, Wallet, CheckCircle2];
              const Icon = icons[i] || Zap;
              return (
                <div key={i} className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center hover:border-brand transition-colors">
                  <Icon className="w-12 h-12 text-brand mx-auto mb-4" />
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-300 text-lg">
              <Trans i18nKey="kbzpayDepositGuide.why.message" components={{ strong: <strong className="text-brand" /> }}>
                For many Bigwin959 Myanmar players, KBZPay is the <strong className="text-brand">#1 deposit method</strong>.
              </Trans>
            </p>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('kbzpayDepositGuide.requirements.title')}
          </h2>

          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <p className="text-gray-300 mb-6">{t('kbzpayDepositGuide.requirements.subtitle')}</p>

            <div className="grid md:grid-cols-2 gap-6">
              {(t('kbzpayDepositGuide.requirements.items', { returnObjects: true }) as Array<{ title: string, desc: string }>).map((item, i) => {
                const icons = [Wallet, CheckCircle2, TrendingUp, Smartphone];
                const Icon = icons[i] || Wallet;
                return (
                  <div key={i} className="flex items-start gap-4 bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <Icon className="w-8 h-8 text-brand flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-bold mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* STEP-BY-STEP GUIDE */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('kbzpayDepositGuide.steps.title')} <span className="text-brand">{t('kbzpayDepositGuide.steps.subtitle')}</span>
          </h2>

          <div className="space-y-6">
            {(t('kbzpayDepositGuide.steps.items', { returnObjects: true }) as Array<{ title: string, desc: string }>).map((item, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-brand transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand text-black font-bold text-xl flex items-center justify-center flex-shrink-0">
                    {index + 1}
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

      {/* DEPOSIT TIME & LIMITS */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('kbzpayDepositGuide.limits.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Processing Time */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
              <div className="bg-gray-950 p-4 border-b border-gray-800">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Clock className="w-6 h-6 text-brand" />
                  {t('kbzpayDepositGuide.limits.processing.title')}
                </h3>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-800">
                    <tr>
                      <td className="py-3 text-gray-300">{t('kbzpayDepositGuide.limits.processing.p1')}</td>
                      <td className="py-3 text-brand font-bold text-right">{t('kbzpayDepositGuide.limits.processing.t1')}</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-gray-300">{t('kbzpayDepositGuide.limits.processing.p2')}</td>
                      <td className="py-3 text-brand font-bold text-right">{t('kbzpayDepositGuide.limits.processing.t2')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Limits */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
              <div className="bg-gray-950 p-4 border-b border-gray-800">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Wallet className="w-6 h-6 text-brand" />
                  {t('kbzpayDepositGuide.limits.amount.title')}
                </h3>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-800">
                    <tr>
                      <td className="py-3 text-gray-300">{t('kbzpayDepositGuide.limits.amount.min')}</td>
                      <td className="py-3 text-brand font-bold text-right">{t('kbzpayDepositGuide.limits.amount.minAmt')}</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-gray-300">{t('kbzpayDepositGuide.limits.amount.max')}</td>
                      <td className="py-3 text-brand font-bold text-right">{t('kbzpayDepositGuide.limits.amount.maxAmt')}</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-gray-500 text-xs mt-4">{t('kbzpayDepositGuide.limits.amount.note')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIPS FOR SAFE DEPOSITS */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('kbzpayDepositGuide.tips.title')}
          </h2>

          <div className="bg-gradient-to-br from-brand/10 to-transparent p-8 rounded-2xl border border-brand/30">
            <div className="space-y-4">
              {(t('kbzpayDepositGuide.tips.items', { returnObjects: true }) as string[]).map((tip, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMMON PROBLEMS & SOLUTIONS */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('kbzpayDepositGuide.issues.title')}
          </h2>

          <div className="space-y-6">
            {(t('kbzpayDepositGuide.issues.items', { returnObjects: true }) as Array<{ issue: string, solutions: string[] }>).map((item, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-400" />
                  {item.issue}
                </h4>
                <div className="space-y-2">
                  {item.solutions.map((solution, j) => (
                    <div key={j} className="flex items-start gap-3 bg-gray-900 p-3 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300">{solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO CHECK DEPOSIT HISTORY */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('kbzpayDepositGuide.history.title')}
          </h2>

          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
            <div className="space-y-4">
              {(t('kbzpayDepositGuide.history.steps', { returnObjects: true }) as string[]).map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gray-900 border border-gray-700 text-brand font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-gray-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IS KBZPAY SAFE */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('kbzpayDepositGuide.safe.title')}
          </h2>

          <div className="bg-green-900/20 border border-green-700/30 p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-green-400" />
              <h3 className="text-2xl font-bold text-white">{t('kbzpayDepositGuide.safe.subtitle')}</h3>
            </div>

            <p className="text-gray-300 mb-6">{t('kbzpayDepositGuide.safe.listTitle')}</p>

            <div className="space-y-3">
              {(t('kbzpayDepositGuide.safe.items', { returnObjects: true }) as string[]).map((tip, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESPONSIBLE DEPOSIT REMINDER */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('kbzpayDepositGuide.responsible.title')}
          </h2>

          <div className="bg-red-900/20 border border-red-700/30 p-8 rounded-2xl">
            <p className="text-gray-300 mb-6">{t('kbzpayDepositGuide.responsible.subtitle')}</p>

            <div className="grid md:grid-cols-2 gap-4">
              {(t('kbzpayDepositGuide.responsible.items', { returnObjects: true }) as string[]).map((warning, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{warning}</span>
                </div>
              ))}
            </div>

            <p className="text-red-300 mt-6 text-center text-sm">
              {t('kbzpayDepositGuide.responsible.foot')}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('kbzpayDepositGuide.faq.title')}
          </h2>

          <div className="space-y-4">
            {(t('kbzpayDepositGuide.faq.items', { returnObjects: true }) as Array<{ q: string, a: string }>).map((item, idx) => (
              <div key={idx} className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
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

      {/* FINAL CTA */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t('kbzpayDepositGuide.cta.title')}</h2>
          <p className="text-gray-400 mb-8 text-lg">
            {t('kbzpayDepositGuide.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={OFFICIAL_DOMAIN}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand hover:bg-white text-black font-bold py-4 px-8 rounded-full transition-all shadow-lg"
            >
              {t('kbzpayDepositGuide.cta.play')} <ExternalLink className="w-5 h-5" />
            </a>
            <LocalizedLink
              to="/guides/deposit"
              className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 hover:border-white font-bold py-4 px-8 rounded-full transition-all"
            >
              {t('kbzpayDepositGuide.cta.methods')}
            </LocalizedLink>
          </div>
          <p className="text-gray-500 mt-6 text-sm">
            {t('kbzpayDepositGuide.cta.disclaimer', { domain: OFFICIAL_DOMAIN })}
          </p>
        </div>
      </section>
    </>
  );
};

export default KbzpayDepositGuide;


