import React from 'react';
import { LocalizedLink } from '../components/LocalizedLink';
import SEO from '../components/SEO';
import { Breadcrumbs } from '../components/Section';
import { useTranslation, Trans } from 'react-i18next';
import {
  HelpCircle,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Users,
  Shield,
  Zap,
  Activity,
  Target
} from 'lucide-react';

const OFFICIAL_DOMAIN = "https://bigwin959.vip";

const CricketFAQ: React.FC = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  const faqs = t('cricketFAQ.faqList.questions', { returnObjects: true }) as any[];

  return (
    <>
      <SEO
        metadata={{
          title: t('cricketFAQ.seo.title'),
          description: t('cricketFAQ.seo.description'),
          keywords: (t('cricketFAQ.seo.keywords') as string).split(', '),
          canonicalUrl: `${OFFICIAL_DOMAIN}/guides/cricket/faq`,
          ogType: 'article',
          publishedTime: '2025-01-01T00:00:00+06:00',
          modifiedTime: new Date().toISOString(),
          author: t('cricketFAQ.seo.author'),
          schema: {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          }
        }}
      />

      <Breadcrumbs items={[
        { label: t('breadcrumbs.guides'), path: '/guides' },
        { label: t('cricketBettingGuide.hero.title'), path: '/guides/cricket' },
        { label: t('cricketFAQ.hero.title'), path: '/guides/cricket/faq' }
      ]} />


      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-purple-900 via-gray-900 to-gray-950 py-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {t('cricketFAQ.hero.title')}
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            {t('cricketFAQ.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* SECTION 1: PROVIDERS */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <Shield className="w-10 h-10 text-brand" />
            <h2 className="text-3xl font-bold text-white">
              {t('cricketFAQ.providers.title')}
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              {t('cricketFAQ.providers.intro')}
            </p>

            <div className="overflow-x-auto">
              <table className="w-full bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
                <thead className="bg-gray-900">
                  <tr>
                    {(t('cricketFAQ.providers.table.headers', { returnObjects: true }) as string[]).map((header, i) => (
                      <th key={i} className="px-6 py-4 text-left text-white font-bold">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {(t('cricketFAQ.providers.table.rows', { returnObjects: true }) as any[]).map((row, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4 text-brand font-bold">{row.provider}</td>
                      <td className="px-6 py-4 text-gray-300">{row.type}</td>
                      <td className="px-6 py-4 text-gray-300">{row.knownFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-blue-900/20 border border-blue-700/30 p-5 rounded-xl">
              <p className="text-blue-300 text-sm">
                <Trans i18nKey="cricketFAQ.providers.whyMultiple" components={{ strong: <strong /> }} />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FAQ */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <HelpCircle className="w-10 h-10 text-brand" />
            <h2 className="text-3xl font-bold text-white">
              {t('cricketFAQ.faqList.title')}
            </h2>
          </div>

          <p className="text-gray-300 mb-8">
            {t('cricketFAQ.faqList.intro')}
          </p>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border-b border-gray-800"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full py-5 text-left flex items-start justify-between gap-4 transition-colors hover:bg-gray-800/50 px-4 rounded-t-xl"
                >
                  <div className="flex items-start gap-3 flex-1">
                    <HelpCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-white font-bold text-lg">{faq.question}</span>
                  </div>
                  <span className="text-brand text-2xl flex-shrink-0">
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-6 bg-gray-800/30">
                    <div className="pl-8 pt-4">
                      {faq.answer.split('\n\n').map((paragraph: string, j: number) => (
                        <p key={j} className="text-gray-300 leading-relaxed mb-4 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: EDUCATIONAL DISCLAIMER */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-yellow-900/20 to-transparent p-8 rounded-2xl border border-yellow-600/30">
            <h2 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-3">
              <AlertTriangle className="w-8 h-8 text-yellow-400" />
              {t('cricketFAQ.disclaimer.title')}
            </h2>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                {t('cricketFAQ.disclaimer.p1')}
              </p>
              <p className="leading-relaxed">
                {t('cricketFAQ.disclaimer.p2')}
              </p>
              <p className="leading-relaxed">
                {t('cricketFAQ.disclaimer.p3')}
              </p>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400 italic text-center">
                  {t('cricketFAQ.disclaimer.final')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED GUIDES */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">{t('cricketFAQ.relatedGuides.title')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <LocalizedLink to="/guides/cricket/bet-types" className="bg-gray-800 hover:bg-gray-700 border border-gray-700 p-5 rounded-xl transition-colors text-center">
              <Target className="w-8 h-8 text-brand mb-3 mx-auto" />
              <p className="text-white font-bold mb-2">{t('cricketFAQ.relatedGuides.betTypes.title')}</p>
              <p className="text-gray-400 text-sm">{t('cricketFAQ.relatedGuides.betTypes.desc')}</p>
            </LocalizedLink>
            <LocalizedLink to="/guides/cricket#step-by-step" className="bg-gray-800 hover:bg-gray-700 border border-gray-700 p-5 rounded-xl transition-colors text-center">
              <Zap className="w-8 h-8 text-brand mb-3 mx-auto" />
              <p className="text-white font-bold mb-2">{t('cricketFAQ.relatedGuides.howToBet.title')}</p>
              <p className="text-gray-400 text-sm">{t('cricketFAQ.relatedGuides.howToBet.desc')}</p>
            </LocalizedLink>
            <LocalizedLink to="/guides/cricket/confusing-situations" className="bg-gray-800 hover:bg-gray-700 border border-gray-700 p-5 rounded-xl transition-colors text-center">
              <Activity className="w-8 h-8 text-brand mb-3 mx-auto" />
              <p className="text-white font-bold mb-2">{t('cricketFAQ.relatedGuides.confusingSituations.title')}</p>
              <p className="text-gray-400 text-sm">{t('cricketFAQ.relatedGuides.confusingSituations.desc')}</p>
            </LocalizedLink>
            <LocalizedLink to="/guides/cricket/exchange-vs-sportsbook" className="bg-gray-800 hover:bg-gray-700 border border-gray-700 p-5 rounded-xl transition-colors text-center">
              <Users className="w-8 h-8 text-brand mb-3 mx-auto" />
              <p className="text-white font-bold mb-2">{t('cricketFAQ.relatedGuides.exchangeVsSportsbook.title')}</p>
              <p className="text-gray-400 text-sm">{t('cricketFAQ.relatedGuides.exchangeVsSportsbook.desc')}</p>
            </LocalizedLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default CricketFAQ;

