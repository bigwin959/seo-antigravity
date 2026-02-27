import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { Breadcrumbs } from '../components/Section';
import { OFFICIAL_DOMAIN } from '../constants';
import {
  Smartphone,
  Download,
  CheckCircle2,
  AlertTriangle,
  Shield,
  RefreshCw,
  Monitor,
  Apple,
  Chrome,
  Settings,
  HelpCircle,
  ExternalLink,
  Zap,
  Lock,
  Globe,
  AlertCircle
} from 'lucide-react';

const safeMap = (data: any) => Array.isArray(data) ? data : [];

const AppDownload: React.FC = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);


  return (
    <>
      <SEO
        metadata={{
          title: t('appDownload.seo.title'),
          description: t('appDownload.seo.description'),
          keywords: safeMap(t('appDownload.seo.keywords', { returnObjects: true })),
          canonicalUrl: "https://bigwinofficial.com/app-download",
          ogType: 'article',
          publishedTime: '2025-01-01T00:00:00+06:00',
          modifiedTime: new Date().toISOString(),
          author: 'Bigwin959 Guide',
          "schema": {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": t('appDownload.schema.howTo.name'),
            "description": t('appDownload.schema.howTo.description'),
            "step": [
              {
                "@type": "HowToStep",
                "name": t('appDownload.schema.howTo.step1.name'),
                "text": t('appDownload.schema.howTo.step1.text'),
                "url": "https://bigwinofficial.com"
              },
              {
                "@type": "HowToStep",
                "name": t('appDownload.schema.howTo.step2.name'),
                "text": t('appDownload.schema.howTo.step2.text')
              },
              {
                "@type": "HowToStep",
                "name": t('appDownload.schema.howTo.step3.name'),
                "text": t('appDownload.schema.howTo.step3.text')
              },
              {
                "@type": "HowToStep",
                "name": t('appDownload.schema.howTo.step4.name'),
                "text": t('appDownload.schema.howTo.step4.text')
              }
            ]
          }
        }}
      />

      <Breadcrumbs items={[{ label: t('nav.appDownload'), path: '/app-download' }]} />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-purple-900 via-gray-900 to-gray-950 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>


        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t('appDownload.hero.title')}
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              {t('appDownload.hero.subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-900/80 backdrop-blur-md p-8 rounded-xl border border-gray-800">
            <p className="text-gray-300 text-lg mb-6">
              {t('appDownload.hero.description1')}
            </p>
            <p className="text-gray-300 mb-6">
              {t('appDownload.hero.description2')}
            </p>
            <div className="bg-yellow-900/20 border border-yellow-600/30 p-4 rounded-lg">
              <p className="text-yellow-300 flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span><strong>{t('appDownload.hero.warning')}</strong> {OFFICIAL_DOMAIN} — {t('appDownload.hero.warningText')}</span>
              </p>
            </div>
            <div className="mt-6 text-center">
              <a
                href={OFFICIAL_DOMAIN}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-purple-900 font-bold py-3 px-8 rounded-full transition-all shadow-lg"
              >
                <Download className="w-5 h-5" />
                {t('appDownload.hero.downloadButton')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY USE THE APP */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
            {t('appDownload.whyUse.title')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Zap, index: 0 },
              { icon: Smartphone, index: 1 },
              { icon: Lock, index: 2 },
              { icon: Download, index: 3 },
              { icon: Globe, index: 4 },
              { icon: Shield, index: 5 }
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <feature.icon className="w-12 h-12 text-brand mb-3 mx-auto" />
                <h3 className="text-white font-bold mb-2 text-lg">{t(`appDownload.whyUse.features.${feature.index}.title`)}</h3>
                <p className="text-gray-400 text-sm">{t(`appDownload.whyUse.features.${feature.index}.desc`)}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <h3 className="text-xl font-bold text-white mb-6">{t('appDownload.whyUse.availableFor')}</h3>
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              {[
                { icon: Smartphone, index: 0 },
                { icon: Smartphone, index: 1 },
                { icon: Monitor, index: 2 }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" />
                  <item.icon className="w-5 h-5 text-gray-400" />
                  <p className="text-white">{t(`appDownload.whyUse.devices.${item.index}`)}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400">
              {t('appDownload.whyUse.iosNote')}
            </p>
          </div>
        </div>
      </section>

      {/* ANDROID DOWNLOAD STEPS */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            {t('appDownload.androidSteps.title')}
          </h2>

          <div className="bg-yellow-900/20 border border-yellow-600/30 p-5 rounded-xl mb-10">
            <p className="text-yellow-300 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span><strong>{t('appDownload.androidSteps.warning')}</strong> {t('appDownload.androidSteps.warningText')}</span>
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="pb-6 border-b border-gray-800">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand text-black font-bold flex items-center justify-center text-lg flex-shrink-0">1</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">{t('appDownload.androidSteps.step1.title')}</h3>
                  <p className="text-gray-300 mb-2">{t('appDownload.androidSteps.step1.desc')}</p>
                  <p className="text-brand font-bold text-lg mb-2">{OFFICIAL_DOMAIN}</p>
                  <p className="text-gray-400 text-sm">{t('appDownload.androidSteps.step1.note')}</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="pb-6 border-b border-gray-800">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand text-black font-bold flex items-center justify-center text-lg flex-shrink-0">2</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">{t('appDownload.androidSteps.step2.title')}</h3>
                  <p className="text-gray-300 mb-3">{t('appDownload.androidSteps.step2.desc')}</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                      <span>{t('appDownload.androidSteps.step2.item1')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                      <span>{t('appDownload.androidSteps.step2.item2')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="pb-6 border-b border-gray-800">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand text-black font-bold flex items-center justify-center text-lg flex-shrink-0">3</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">{t('appDownload.androidSteps.step3.title')}</h3>
                  <p className="text-gray-300 mb-3">{t('appDownload.androidSteps.step3.desc')}</p>
                  <p className="text-gray-300 mb-2">{t('appDownload.androidSteps.step3.warning')}</p>
                  <p className="text-yellow-300 italic mb-2">{t('appDownload.androidSteps.step3.warningMessage')}</p>
                  <p className="text-gray-400 text-sm">{t('appDownload.androidSteps.step3.note')}</p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="pb-6 border-b border-gray-800">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand text-black font-bold flex items-center justify-center text-lg flex-shrink-0">4</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">{t('appDownload.androidSteps.step4.title')}</h3>
                  <p className="text-gray-300 mb-3">{t('appDownload.androidSteps.step4.desc')}</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-brand font-bold">•</span>
                      <span>{t('appDownload.androidSteps.step4.item1')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-brand font-bold">•</span>
                      <span>{t('appDownload.androidSteps.step4.item2')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-brand font-bold">•</span>
                      <span>{t('appDownload.androidSteps.step4.item3')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-brand font-bold">•</span>
                      <span>{t('appDownload.androidSteps.step4.item4')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <span className="text-brand font-bold">•</span>
                      <span>{t('appDownload.androidSteps.step4.item5')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="pb-6 border-b border-gray-800">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand text-black font-bold flex items-center justify-center text-lg flex-shrink-0">5</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">{t('appDownload.androidSteps.step5.title')}</h3>
                  <p className="text-gray-300 mb-3">{t('appDownload.androidSteps.step5.desc')}</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                      <span>{t('appDownload.androidSteps.step5.item1')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                      <span>{t('appDownload.androidSteps.step5.item2')}</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                      <span>{t('appDownload.androidSteps.step5.item3')}</span>
                    </li>
                  </ul>
                  <div className="mt-3">
                    <p className="text-blue-300 text-sm">
                      {t('appDownload.androidSteps.step5.note')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* iOS USERS */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            {t('appDownload.ios.title')}
          </h2>

          <p className="text-gray-300 text-center mb-10">
            {t('appDownload.ios.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="text-center">
              <Apple className="w-12 h-12 text-brand mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-white mb-4">{t('appDownload.ios.forIphone')}</h3>
              <ul className="space-y-2 text-left inline-block">
                {[0, 1].map((index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span>{index === 1 ? `${t(`appDownload.ios.steps.${index}`).replace('bigwin959.vip', OFFICIAL_DOMAIN)}` : t(`appDownload.ios.steps.${index}`)}</span>
                  </li>
                ))}
                <li className="flex items-start gap-2 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span>{OFFICIAL_DOMAIN}</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Smartphone className="w-12 h-12 text-brand mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-white mb-4">{t('appDownload.ios.shortcut')}</h3>
              <ul className="space-y-2 text-left inline-block">
                {[0, 1, 2].map((index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <span className="text-brand font-bold">{index + 1}.</span>
                    <span>{t(`appDownload.ios.shortcutSteps.${index}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PC / LAPTOP */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            {t('appDownload.pc.title')}
          </h2>

          <p className="text-gray-300 text-center mb-10">
            {t('appDownload.pc.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="text-center">
              <Monitor className="w-12 h-12 text-brand mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-white mb-4">{t('appDownload.pc.forPC')}</h3>
              <ul className="space-y-2 text-left inline-block">
                {[0, 1].map((index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span>{index === 1 ? OFFICIAL_DOMAIN : t(`appDownload.pc.steps.${index}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <Settings className="w-12 h-12 text-gray-400 mb-4 mx-auto" />
              <h3 className="text-lg font-bold text-white mb-4">{t('appDownload.pc.advanced')}</h3>
              <p className="text-gray-300">
                {t('appDownload.pc.advancedText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UPDATE APP */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            {t('appDownload.update.title')}
          </h2>

          <div className="flex items-center gap-3 mb-8 justify-center">
            <RefreshCw className="w-8 h-8 text-brand" />
            <p className="text-gray-300">
              {t('appDownload.update.subtitle')}
            </p>
          </div>

          <h3 className="text-lg font-bold text-white mb-4 text-center">{t('appDownload.update.toUpdate')}</h3>
          <div className="space-y-3 mb-6 max-w-2xl mx-auto">
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="flex items-start gap-3 pb-3 border-b border-gray-800">
                <div className="w-6 h-6 rounded-full bg-brand text-black font-bold flex items-center justify-center text-sm flex-shrink-0">{index + 1}</div>
                <p className="text-gray-300">{index === 0 ? t('appDownload.update.steps.0').replace('bigwin959.vip', OFFICIAL_DOMAIN) : t(`appDownload.update.steps.${index}`)}</p>
              </div>
            ))}
          </div>

          <p className="text-green-300 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            {t('appDownload.update.note')}
          </p>
        </div>
      </section>

      {/* SAFETY TIPS */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            {t('appDownload.safety.title')}
          </h2>

          <h3 className="text-lg font-bold text-white mb-6 flex items-center justify-center gap-3">
            <Shield className="w-7 h-7 text-green-400" />
            {t('appDownload.safety.subtitle')}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: CheckCircle2, index: 0, color: "text-green-400" },
              { icon: AlertTriangle, index: 1, color: "text-red-400" },
              { icon: CheckCircle2, index: 2, color: "text-green-400" },
              { icon: CheckCircle2, index: 3, color: "text-green-400" },
              { icon: CheckCircle2, index: 4, color: "text-green-400" },
              { icon: AlertCircle, index: 5, color: "text-yellow-400" }
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-2 pb-3 border-b border-gray-800">
                <tip.icon className={`w-5 h-5 ${tip.color} flex-shrink-0 mt-0.5`} />
                <span className="text-gray-300 text-sm">{t(`appDownload.safety.tips.${tip.index}`).replace('bigwin959.vip', OFFICIAL_DOMAIN)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TROUBLESHOOTING */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            {t('appDownload.troubleshooting.title')}
          </h2>

          <div className="space-y-6">
            {[0, 1, 2].map((index) => (
              <div key={index} className="pb-5 border-b border-gray-800">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand" />
                  {t(`appDownload.troubleshooting.issues.${index}.question`)}
                </h3>
                <ul className="space-y-2 ml-7">
                  {[0, 1, 2].slice(0, index === 2 ? 2 : 3).map((solIndex) => (
                    <li key={solIndex} className="flex items-start gap-2 text-gray-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                      <span>{t(`appDownload.troubleshooting.issues.${index}.solutions.${solIndex}`).replace('bigwin959.vip', OFFICIAL_DOMAIN)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            {t('appDownload.faq.title')}
          </h2>

          <div className="space-y-4">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className="border-b border-gray-800"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full py-4 text-left flex items-start justify-between gap-4 transition-colors"
                >
                  <div className="flex items-start gap-2 flex-1">
                    <HelpCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-white font-bold">{t(`appDownload.faq.items.${index}.q`)}</span>
                  </div>
                  <span className="text-brand text-xl flex-shrink-0">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="pb-4 pl-7">
                    <p className="text-gray-300 text-sm">{t(`appDownload.faq.items.${index}.a`).replace('bigwin959.vip', OFFICIAL_DOMAIN)}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-gradient-to-br from-purple-900 via-gray-900 to-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Download className="w-14 h-14 text-brand mx-auto mb-5" />
          <h2 className="text-3xl font-bold text-white mb-4">
            {t('appDownload.finalCTA.title')}
          </h2>
          <p className="text-gray-300 mb-8">
            {t('appDownload.finalCTA.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={OFFICIAL_DOMAIN}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand/90 text-black font-bold py-3 px-8 rounded-full transition-all shadow-lg"
            >
              <Download className="w-5 h-5" />
              {t('appDownload.finalCTA.downloadButton')}
            </a>
            <a
              href={OFFICIAL_DOMAIN}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-purple-900 font-bold py-3 px-8 rounded-full transition-all shadow-lg"
            >
              {t('appDownload.finalCTA.loginButton')} <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER DISCLAIMER */}
      <section className="bg-gray-950 py-12 border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-2">
            {t('appDownload.footer.copyright')}
          </p>
          <p className="text-gray-500 text-sm">
            {t('appDownload.footer.disclaimer').replace('bigwin959.vip', OFFICIAL_DOMAIN)}
          </p>
        </div>
      </section>
    </>
  );
};

export default AppDownload;

