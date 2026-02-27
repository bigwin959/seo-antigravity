import React from 'react';
import { useTranslation } from 'react-i18next';
import { LocalizedLink } from '../components/LocalizedLink';
import SEO from '../components/SEO';
import ScrollFadeIn from '../components/ScrollFadeIn';
import { OFFICIAL_DOMAIN } from '../constants';
import {
  ShieldCheck,
  Zap,
  Gift,
  Smartphone,
  ChevronRight,
  Globe,
  Headphones,
  Gamepad2,
  CreditCard,
  CheckCircle2,
  HelpCircle,
  ExternalLink,
  Download,
  Trophy,
  Activity,
  Anchor,
  Dices,
  Coins,
  AlertCircle,
  Users,
  Sparkles
} from 'lucide-react';

const SectionHeader: React.FC<{ title: string; subtitle?: string; level?: 'h2' | 'h3' }> = ({ title, subtitle, level = 'h2' }) => {
  const Heading = level;
  return (
    <div className="mb-12 text-center md:text-left">
      <Heading className={`${level === 'h2' ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'} font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400`}>
        {title}
      </Heading>
      {subtitle && <p className="text-gray-300 max-w-2xl text-lg">{subtitle}</p>}
    </div>
  );
};

const FeatureChip: React.FC<{ label: string }> = ({ label }) => (
  <span className="inline-flex items-center gap-2 text-brand text-sm font-bold">
    <CheckCircle2 className="w-4 h-4" /> {label}
  </span>
);

const GameCard: React.FC<{ title: string; desc: string; link: string; bgImage: string; icon: React.ElementType; imageClassName?: string }> = ({ title, desc, link, bgImage, icon: Icon, imageClassName = "object-cover" }) => {
  const { t } = useTranslation();

  // generated responsive srcset if it's a cloudinary image
  // Helper to construct optimized Cloudinary URL
  const getOptimizedUrl = (url: string, transform: string) => {
    if (!url.includes('cloudinary')) return url;
    // Strip existing common transforms but KEEP the 'v' to avoid duplication/conflicts
    const cleanUrl = url.replace(/\/upload\/.*\/v/, '/upload/v');
    // Inject new transform
    return cleanUrl.replace('/upload/', `/upload/${transform}/`);
  };

  const isCloudinary = bgImage.includes('cloudinary');
  // Use q_auto:eco for aggressive compression on thumbnails
  // Add 600w breakpoint for better responsiveness
  const srcSet = isCloudinary
    ? `${getOptimizedUrl(bgImage, 'w_400,c_scale,f_auto,q_auto:eco')} 400w, ${getOptimizedUrl(bgImage, 'w_600,c_scale,f_auto,q_auto:eco')} 600w, ${getOptimizedUrl(bgImage, 'w_800,c_scale,f_auto,q_auto:eco')} 800w`
    : undefined;

  return (
    <div className="relative group overflow-hidden rounded-2xl transition-all h-full bg-gray-900 border border-gray-800 hover:border-brand/50">
      <div className="absolute inset-0">
        <img
          src={isCloudinary ? getOptimizedUrl(bgImage, 'f_auto,q_auto:eco') : bgImage}
          srcSet={srcSet}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={title}
          title={title}
          width="600"
          height="400"
          loading="lazy"
          className={`w-full h-full ${imageClassName} opacity-40 group-hover:opacity-50 transition-opacity`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
      </div>
      <div className="relative z-10 p-6 flex flex-col h-full justify-end">
        <div className="bg-brand w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-black shadow-lg">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{desc}</p>
        {link.startsWith('/') ? (
          <LocalizedLink to={link} className="inline-flex items-center text-brand font-bold hover:text-white transition-colors" aria-label={`Learn more about ${title}`}>
            {t('common.learnMore')} <ChevronRight className="w-4 h-4 ml-1" />
          </LocalizedLink>
        ) : (
          <a href={link} className="inline-flex items-center text-brand font-bold hover:text-white transition-colors" aria-label={`Learn more about ${title}`}>
            {t('common.learnMore')} <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        )}
      </div>
    </div>
  );
};

const FAQAccordion: React.FC<{ items: { q: string; a: string }[] }> = ({ items }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="space-y-6">
      {items.map((item, idx) => (
        <div key={idx} className="border-b border-gray-800 pb-4">
          <button
            className="w-full flex items-center justify-between py-3 text-left focus:outline-none group"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            <span className="text-base font-semibold text-white group-hover:text-brand transition-colors">{item.q}</span>
            <ChevronRight className={`w-5 h-5 text-brand transition-transform ${openIndex === idx ? 'rotate-90' : ''}`} />
          </button>
          {openIndex === idx && (
            <div className="pt-3 text-gray-400 leading-relaxed text-sm">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEO
        metadata={{
          title: t('homePage.seo.title'),
          description: t('homePage.seo.description'),
          keywords: t('homePage.seo.keywords', { returnObjects: true }) as string[],
          ogType: 'website',
          schema: [
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Bigwin959 Guide",
              "url": "https://bigwinofficial.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://bigwinofficial.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Bigwin959 Guide",
              "url": "https://bigwinofficial.com",
              "logo": "https://res.cloudinary.com/dmyocpyxd/image/upload/v1767784202/icon.png",
              "sameAs": [
                "https://facebook.com/bigwin959",
                "https://twitter.com/bigwin959"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is the official site of Bigwin959?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The official gaming platform can be accessed at Bigwin959.vip, while Bigwinofficial.com provides the comprehensive guide and tips."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Bigwin959 safe for Bangladesh users?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Bigwin959 is a leading platform in Bangladesh, supporting local payment methods like bKash and Nagad."
                  }
                }
              ]
            }
          ]
        }}
      />

      {/* SECTION 1: HERO */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-brand/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Top badge */}
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 text-brand text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('hero.officialBadge')}</span>
            </div>
          </div>

          {/* Main heading */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-3 font-inter">
              <span className="block md:inline-block font-extrabold">{t('hero.mainHeading1')}</span>{' '}
              <span className="block md:inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand via-yellow-300 to-brand font-semibold">
                {t('hero.mainHeading2')}
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-300 mb-4 max-w-2xl mx-auto">
              {t('hero.description')}
            </p>

            <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-6">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{t('hero.disclaimer.text')} <span className="text-brand font-semibold">{t('hero.disclaimer.link')}</span></span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <a
              href={OFFICIAL_DOMAIN}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="group bg-brand hover:bg-yellow-300 text-black text-base font-bold py-3 px-8 rounded-full shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all flex items-center justify-center gap-2"
            >
              <span>{t('hero.cta.official')}</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <LocalizedLink
              to="/app-download"
              className="bg-gray-800/50 hover:bg-gray-700/50 text-white border border-gray-700 hover:border-brand text-base font-bold py-3 px-8 rounded-full transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>{t('hero.cta.download')}</span>
            </LocalizedLink>
          </div>

          {/* Feature cards grid - Transparent style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Fast Deposits */}
            <div className="text-center group">
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                  <Zap className="w-5 h-5 text-brand" />
                </div>
              </div>
              <h2 className="text-white font-semibold text-sm mb-2">{t('hero.features.deposits.title')}</h2>
              <div className="flex flex-wrap gap-1.5 justify-center">
                {(t('hero.features.deposits.items', { returnObjects: true }) as string[]).map(m => (
                  <span key={m} className="text-gray-300 text-xs">{m}</span>
                ))}
              </div>
            </div>

            {/* Popular Games */}
            <div className="text-center group">
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                  <Trophy className="w-5 h-5 text-brand" />
                </div>
              </div>
              <h2 className="text-white font-semibold text-sm mb-2">{t('hero.features.games.title')}</h2>
              <div className="flex flex-wrap gap-1.5 justify-center">
                {(t('hero.features.games.items', { returnObjects: true }) as string[]).map(g => (
                  <span key={g} className="text-gray-300 text-xs">{g}</span>
                ))}
              </div>
            </div>

            {/* Safe & Secure */}
            <div className="text-center group">
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                  <ShieldCheck className="w-5 h-5 text-brand" />
                </div>
              </div>
              <h2 className="text-white font-semibold text-sm mb-2">{t('hero.features.security.title')}</h2>
              <p className="text-gray-300 text-xs max-w-[200px] mx-auto">
                {t('hero.features.security.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND AMBASSADOR SECTION */}
      <section className="py-16 bg-gradient-to-br from-purple-900/20 via-gray-900 to-gray-950 border-y border-purple-600/20">
        <ScrollFadeIn>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand/20 blur-3xl rounded-full"></div>
                  <img
                    src="https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767689040/HOME-PAGE-IMAGES.png"
                    srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_300,f_auto,q_auto:eco/v1767689040/HOME-PAGE-IMAGES.png 300w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_400,f_auto,q_auto:eco/v1767689040/HOME-PAGE-IMAGES.png 400w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_600,f_auto,q_auto:eco/v1767689040/HOME-PAGE-IMAGES.png 600w"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                    alt="Payal Rajput - Bigwin959 Brand Ambassador"
                    title="Payal Rajput - Bigwin959 Brand Ambassador"
                    width="500"
                    height="600"
                    loading="lazy"
                    className="relative z-10 w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
                    onError={(e) => {
                      e.currentTarget.src = "https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto/v1767000504/model2.png";
                    }}
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 bg-brand/20 border border-brand/30 px-4 py-2 rounded-full mb-4">
                  <Users className="w-5 h-5 text-brand" />
                  <span className="text-brand text-sm font-bold">{t('ambassador.badge')}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {t('ambassador.title')}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {t('ambassador.desc')}
                </p>
                <div className="bg-purple-900/20 border border-purple-600/30 rounded-xl p-6 mb-6">
                  <p className="text-gray-300 italic leading-relaxed mb-3">
                    "{t('ambassador.quote')}"
                  </p>
                  <p className="text-brand font-semibold">— Payal Rajput</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <LocalizedLink
                    to="/about"
                    className="inline-flex items-center gap-2 bg-brand hover:bg-yellow-300 text-black font-bold py-3 px-6 rounded-full transition-all"
                    aria-label="Learn more about our brand ambassador"
                  >
                    {t('ambassador.cta.learnMore')} <ChevronRight className="w-4 h-4" />
                  </LocalizedLink>
                  <LocalizedLink
                    to="/is-bigwin959-legit"
                    className="inline-flex items-center gap-2 border-2 border-brand text-brand hover:bg-brand hover:text-black font-bold py-3 px-6 rounded-full transition-all"
                  >
                    {t('ambassador.cta.review')}
                  </LocalizedLink>
                </div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>
      </section>

      {/* SECTION 2: WHY POPULAR - EXTENDED WITH DETAILED EXPLANATIONS */}
      <section className="py-16 bg-gray-900 overflow-hidden">
        <ScrollFadeIn>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('whyPopular.title')}
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                {t('whyPopular.subtitle')}
              </p>
            </div>

            {/* Three Key Factors - Row by Row Layout */}
            <div className="space-y-6 mb-12">
              {/* Factor 1: Payment Integration */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-800/50 border border-gray-700/50 rounded-2xl hover:border-brand/30 transition-all shadow-lg">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row items-start gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-brand/20 to-brand/5 rounded-2xl flex items-center justify-center shadow-lg">
                        <CreditCard className="w-10 h-10 text-brand" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="text-white font-bold text-2xl md:text-3xl">{t('whyPopular.cards.payment.title')}</h3>
                      <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                        {t('whyPopular.cards.payment.desc')}
                      </p>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        {t('whyPopular.cards.payment.detail')}
                      </p>
                    </div>

                  </div>
                </div>
              </div>

              {/* Factor 2: Sports & Cultural Alignment */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-800/50 border border-gray-700/50 rounded-2xl hover:border-brand/30 transition-all shadow-lg">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row items-start gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-brand/20 to-brand/5 rounded-2xl flex items-center justify-center shadow-lg">
                        <Trophy className="w-10 h-10 text-brand" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="text-white font-bold text-2xl md:text-3xl">{t('whyPopular.cards.sports.title')}</h3>
                      <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                        {t('whyPopular.cards.sports.desc')}
                      </p>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        {t('whyPopular.cards.sports.detail')}
                      </p>
                    </div>

                  </div>
                </div>
              </div>

              {/* Factor 3: Mobile-First Experience */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-800/50 border border-gray-700/50 rounded-2xl hover:border-brand/30 transition-all shadow-lg">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row items-start gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-brand/20 to-brand/5 rounded-2xl flex items-center justify-center shadow-lg">
                        <Smartphone className="w-10 h-10 text-brand" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <h3 className="text-white font-bold text-2xl md:text-3xl">{t('whyPopular.cards.mobile.title')}</h3>
                      <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                        {t('whyPopular.cards.mobile.desc')}
                      </p>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        {t('whyPopular.cards.mobile.detail')}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Additional Popularity Factors */}
            <div className="bg-gradient-to-r from-brand/5 to-transparent border border-brand/20 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-bold text-white mb-6">{t('whyPopular.additional.title')}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {(t('whyPopular.additional.items', { returnObjects: true }) as any[]).map((item, i) => {
                  const icons = [Gift, ShieldCheck, Gamepad2, Zap];
                  const Icon = icons[i] || Gift; // fallback
                  return (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-brand" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-2">{item.title}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>


            {/* Feature Chips */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {(t('whyPopular.featureChips', { returnObjects: true }) as string[]).map((label, i) => (
                <FeatureChip key={i} label={label} />
              ))}
            </div>


            {/* CTA */}
            <div className="text-center">
              <LocalizedLink to="/about" className="inline-flex items-center text-white bg-gray-800 border border-gray-600 hover:border-brand px-8 py-3 rounded-full font-bold transition-all mr-4">
                Learn More About Platform <ChevronRight className="w-4 h-4 ml-2" />
              </LocalizedLink>
              <LocalizedLink to="/guides" className="inline-flex items-center bg-brand text-black px-8 py-3 rounded-full font-bold hover:bg-white transition-all">
                View All Guides <ChevronRight className="w-4 h-4 ml-2" />
              </LocalizedLink>
            </div>
          </div>
        </ScrollFadeIn>
      </section>

      {/* SECTION 3: 3 BIG CATEGORY CARDS */}
      <section className="py-20 bg-gray-950">
        <ScrollFadeIn>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <GameCard
                title={t('games.sports.title')}
                desc={t('games.sports.desc')}
                link="/guides/cricket"
                bgImage="https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000497/game-category.png"
                icon={Trophy}
              />
              <GameCard
                title={t('games.slots.title')}
                desc={t('games.slots.desc')}
                link="/providers"
                bgImage="https://res.cloudinary.com/dmyocpyxd/image/upload/v1767000514/slot-games.png"
                icon={Gamepad2}
              />
              <GameCard
                title={t('games.live.title')}
                desc={t('games.live.desc')}
                link="/guides"
                bgImage="https://res.cloudinary.com/dmyocpyxd/image/upload/v1767007730/live-casino1.png"
                icon={Dices}
              />

            </div>
          </div>
        </ScrollFadeIn>
      </section>

      {/* SECTION 4: BONUSES - RESTRUCTURED */}
      <section className="py-16 bg-gray-900 border-y border-gray-800">
        <ScrollFadeIn>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('bonuses.title')}
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                {t('bonuses.subtitle')}
              </p>
            </div>

            {/* Bonus Types Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {(t('bonuses.types', { returnObjects: true }) as any[]).map((b, i) => {
                const icons = [Gift, ShieldCheck, Trophy, Sparkles];
                const colors = ["text-green-400", "text-blue-400", "text-yellow-400", "text-purple-400"];
                const Icon = icons[i] || Gift;
                return (
                  <div key={i} className="bg-gray-800 p-6 rounded-xl text-center group transition-colors">
                    <div className={`${colors[i]} group-hover:scale-110 transition-transform mb-4 flex justify-center`}>
                      <Icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-white font-bold mb-2">{b.title}</h3>
                    <p className="text-gray-300 text-sm">{b.desc}</p>
                  </div>
                );
              })}
            </div>


            {/* Detailed Explanation Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {(t('bonuses.strategies', { returnObjects: true }) as any[]).map((s, i) => (
                <div key={i} className="bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-brand font-bold mb-3">{s.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LocalizedLink to="/bonuses/today" className="bg-brand text-black font-bold py-3 px-8 rounded-full hover:bg-white transition-colors text-center">
                Today's Promotions
              </LocalizedLink>
              <LocalizedLink to="/bonuses" className="bg-gray-800 text-white border border-gray-600 font-bold py-3 px-8 rounded-full hover:bg-gray-700 transition-colors text-center">
                View All Bonuses
              </LocalizedLink>
            </div>
          </div>
        </ScrollFadeIn>
      </section>

      {/* SECTION 5: HOW TO REGISTER */}
      <section id="how-to-start" className="py-20 bg-gray-950">
        <ScrollFadeIn>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1">
                <SectionHeader title={t('register.title')} />
                <div className="space-y-6 relative">
                  <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-800" />
                  {[
                    ...(t('register.steps', { returnObjects: true }) as string[])
                  ].map((step, i) => (
                    <div key={i} className="relative flex items-center gap-6">
                      <div className="w-8 h-8 rounded-full bg-brand text-black font-bold flex items-center justify-center relative z-10 text-sm">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-300 font-medium">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <LocalizedLink to="/guides" className="text-brand font-bold flex items-center gap-2 hover:underline">
                    {t('common.learnMoreRegistration')} <ChevronRight className="w-4 h-4" />
                  </LocalizedLink>
                </div>
              </div>

              <div className="flex-1 flex justify-center">
                <img
                  src="https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767000510/Register.jpg"
                  srcSet="https://res.cloudinary.com/dmyocpyxd/image/upload/w_300,f_auto,q_auto:eco/v1767000510/Register.jpg 300w, https://res.cloudinary.com/dmyocpyxd/image/upload/w_600,f_auto,q_auto:eco/v1767000510/Register.jpg 600w"
                  sizes="(max-width: 768px) 100vw, 400px"
                  alt="Registration Mobile Mockup"
                  title="Registration Mobile Mockup"
                  width="400"
                  height="800"
                  loading="lazy"
                  className="rounded-[3rem] border-8 border-gray-800 shadow-2xl w-full max-w-md h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </ScrollFadeIn>
      </section>

      {/* SECTION 6: PAYMENT METHODS - RESTRUCTURED */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('payments.title')}
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              {t('payments.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {(t('payments.features', { returnObjects: true }) as any[]).map((f, i) => {
              const icons = [Zap, ShieldCheck, Coins, Globe];
              const colors = ["text-green-400", "text-blue-400", "text-yellow-400", "text-purple-400"];
              const bgs = ["bg-green-500/10", "bg-blue-500/10", "bg-yellow-500/10", "bg-purple-500/10"];
              const Icon = icons[i] || Zap;
              return (
                <div key={i} className="text-center">
                  <div className={`w-12 h-12 ${bgs[i]} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <Icon className={`w-6 h-6 ${colors[i]}`} />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2">{f.title}</h3>
                  <p className="text-gray-300 text-xs">{f.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Payment Methods by Country */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Bangladesh */}
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-6">
                <img src="https://flagcdn.com/bd.svg" alt="BD" title="Bangladesh" width="32" height="24" className="w-8 h-6 rounded" />
                <h3 className="text-xl font-bold text-white">{t('common.bangladesh')}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {(t('payments.methods.bd', { returnObjects: true }) as any[]).map(m => (
                  <div key={m.name} className="bg-gray-900 p-3 rounded-lg">
                    <p className="text-brand font-bold text-sm">{m.name}</p>
                    <p className="text-gray-300 text-xs">{m.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gray-900 p-3 rounded-lg">
                <p className="text-gray-300 text-xs">
                  <span className="text-white font-bold">{t('common.minDeposit')}:</span> 200-500 BDT •
                  <span className="text-white font-bold"> {t('common.processing')}:</span> 30s - 2min
                </p>
              </div>
            </div>

            {/* Myanmar */}
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-6">
                <img src="https://flagcdn.com/mm.svg" alt="MM" title="Myanmar" width="32" height="24" className="w-8 h-6 rounded" />
                <h3 className="text-xl font-bold text-white">{t('common.myanmar')}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {(t('payments.methods.mm', { returnObjects: true }) as any[]).map(m => (
                  <div key={m.name} className="bg-gray-900 p-3 rounded-lg">
                    <p className="text-brand font-bold text-sm">{m.name}</p>
                    <p className="text-gray-300 text-xs">{m.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gray-900 p-3 rounded-lg">
                <p className="text-gray-300 text-xs">
                  <span className="text-white font-bold">{t('common.minDeposit')}:</span> 5,000-10,000 MMK •
                  <span className="text-white font-bold"> {t('common.processing')}:</span> 1-3min
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <LocalizedLink to="/guides/deposit" className="inline-flex items-center bg-brand text-black font-bold px-8 py-3 rounded-full hover:bg-white transition-colors">
              {t('common.viewDepositGuide')} <ChevronRight className="w-4 h-4 ml-2" />
            </LocalizedLink>
          </div>
        </div>
      </section>

      {/* SECTION 7: RECOMMENDED GAMES */}
      <section id="sports-cricket" className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-brand pl-4">{t('common.recommendedCategories')}</h2>

            <div className="mb-12 bg-gradient-to-r from-brand/10 to-transparent border border-brand/30 rounded-xl overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{t('recommended.cricketGuide.title')}</h3>
                    <p className="text-brand text-sm">{t('recommended.cricketGuide.subtitle')}</p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {t('recommended.cricketGuide.desc')}
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {(t('recommended.cricketGuide.items', { returnObjects: true }) as any[]).map((itm, i) => (
                    <div key={i} className="bg-gray-800/50 p-4 rounded-lg">
                      <h4 className="text-white font-bold text-sm mb-2">{itm.title}</h4>
                      <p className="text-gray-300 text-xs">{itm.desc}</p>
                    </div>
                  ))}
                </div>

                <LocalizedLink
                  to="/guides/cricket"
                  className="inline-flex items-center gap-2 bg-brand text-black font-bold px-6 py-3 rounded-full hover:bg-white transition-colors"
                >
                  {t('recommended.cricketGuide.cta')} <ChevronRight className="w-4 h-4" />
                </LocalizedLink>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {(t('recommended.categories', { returnObjects: true }) as any[]).map((c, i) => {
                const icons = [Activity, Trophy, Sparkles];
                const links = ["/guides/aviator-game", "/guides/cricket", "/top-slot-games"];
                const Icon = icons[i] || Activity;
                return (
                  <div key={i} className="text-center group">
                    <Icon className="w-10 h-10 text-brand mb-3 mx-auto" />
                    <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
                    <p className="text-gray-300 mb-3 text-sm">{c.desc}</p>
                    <LocalizedLink to={links[i]} className="text-xs font-bold text-brand uppercase tracking-wider hover:text-white transition-colors">{c.linkText} &rarr;</LocalizedLink>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-brand pl-4">{t('recommended.liveTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {(t('recommended.liveCategories', { returnObjects: true }) as any[]).map((g, i) => {
                const icons = [Users, Dices, Coins];
                const Icon = icons[i] || Users;
                return (
                  <div key={i} className="text-center group">
                    <Icon className="w-10 h-10 text-blue-400 mb-3 mx-auto" />
                    <h3 className="text-lg font-bold text-white mb-2">{g.title}</h3>
                    <p className="text-gray-300 mb-3 text-sm">{g.desc}</p>
                    <LocalizedLink to="/guides" className="text-xs font-bold text-blue-400 uppercase tracking-wider hover:text-white transition-colors">{g.linkText} &rarr;</LocalizedLink>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: SMART GAMING - EXTENDED WITH DETAILED EXPLANATIONS */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('smartGaming.title')}
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              {t('smartGaming.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {(t('smartGaming.cards', { returnObjects: true }) as any) && [
              { ...(t('smartGaming.cards', { returnObjects: true }) as any).loyalty, icon: Coins },
              { ...(t('smartGaming.cards', { returnObjects: true }) as any).events, icon: Trophy },
              { ...(t('smartGaming.cards', { returnObjects: true }) as any).payment, icon: CreditCard },
              { ...(t('smartGaming.cards', { returnObjects: true }) as any).safety, icon: ShieldCheck },
              { ...(t('smartGaming.cards', { returnObjects: true }) as any).terms, icon: CheckCircle2 },
              { ...(t('smartGaming.cards', { returnObjects: true }) as any).responsible, icon: Users }
            ].map((item, i) => (
              <div key={i} className="bg-gray-800 border border-gray-700 p-6 rounded-xl group hover:border-brand/50 transition-all">
                <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand/20 transition-colors">
                  <item.icon className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                <p className="text-gray-400 text-xs mb-3">{item.desc}</p>
                <p className="text-gray-300 text-xs leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Additional Smart Gaming Tips */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">{t('smartGaming.proTips.title')}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {(t('smartGaming.proTips.items', { returnObjects: true }) as any[]).map((tip, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-brand/10 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-brand" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-2">{tip.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {tip.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <LocalizedLink to="/blog" className="inline-flex items-center bg-brand text-black font-bold px-8 py-3 rounded-full hover:bg-white transition-colors">
              {t('smartGaming.button')} <ChevronRight className="w-4 h-4 ml-2" />
            </LocalizedLink>
          </div>
        </div>
      </section>

      {/* SECTION 9: PROVIDERS & PAYMENT */}
      <section className="py-16 bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h3 className="text-2xl font-bold text-gray-400 mb-8 uppercase tracking-widest">{t('providers.title')}</h3>
            <div className="flex flex-wrap justify-center gap-8 opacity-70 hover:opacity-100 transition-opacity">
              {['Pragmatic Play', 'PG Soft', 'Jili Games', 'Evolution', 'Spribe', 'JDB Gaming'].map(name => (
                <div key={name} className="w-24 h-12 bg-gray-800 rounded flex items-center justify-center border border-gray-700 hover:border-brand/50 transition-colors px-2 text-center">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter leading-tight">{name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-400 mb-8 uppercase tracking-widest">{t('providers.paymentTitle')}</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {(t('homePage.paymentProviders', { returnObjects: true }) as string[]).map(p => (
                <div key={p} className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-black font-bold text-[10px]">{p}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9.5: RESPONSIBLE GAMING & SAFETY */}
      <section className="py-16 bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('responsibleGaming.title')}
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              {t('responsibleGaming.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Responsible Gaming */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t('responsibleGaming.tools.title')}</h3>
              </div>

              <div className="space-y-4">
                {(t('responsibleGaming.tools.items', { returnObjects: true }) as any[]).map((tool, i) => (
                  <div key={i}>
                    <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand" />
                      {tool.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {tool.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                <p className="text-yellow-200 text-xs leading-relaxed">
                  {t('responsibleGaming.reminder')}
                </p>
              </div>
            </div>

            {/* Platform Security */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{t('responsibleGaming.security.title')}</h3>
              </div>

              <div className="space-y-4">
                {(t('responsibleGaming.security.items', { returnObjects: true }) as any[]).map((sec, i) => (
                  <div key={i}>
                    <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand" />
                      {sec.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {sec.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-gradient-to-r from-brand/5 to-transparent border border-brand/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">{t('responsibleGaming.bestPractices.title')}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {(t('responsibleGaming.bestPractices.items', { returnObjects: true }) as any[]).map((bp, i) => {
                const icons = [ShieldCheck, Globe, Users];
                const Icon = icons[i] || ShieldCheck;
                return (
                  <div key={i} className="text-center">
                    <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-brand" />
                    </div>
                    <h4 className="text-white font-bold text-sm mb-2">{bp.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {bp.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: FAQ - EXTENDED WITH DETAILED EXPLANATIONS */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t('faq.title')} subtitle={t('faq.subtitle')} level="h3" />

          <FAQAccordion items={t('faq.items', { returnObjects: true }) as any} />

          {/* Additional Help Resources */}
          <div className="mt-16 bg-gray-800 border border-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">{t('help.title')}</h3>
            <p className="text-gray-300 text-center mb-6 max-w-2xl mx-auto">
              {t('help.desc')}
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {(t('help.items', { returnObjects: true }) as any[]).map((h, i) => {
                const icons = [Gamepad2, CreditCard, Gift];
                const links = ["/guides", "/guides/deposit", "/bonuses/today"];
                const Icon = icons[i] || Gamepad2;
                return (
                  <LocalizedLink key={i} to={links[i]} className="bg-gray-900 hover:bg-gray-700 border border-gray-600 hover:border-brand p-4 rounded-lg text-center transition-all group">
                    <Icon className="w-8 h-8 text-brand mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <h4 className="text-white font-bold text-sm mb-1">{h.title}</h4>
                    <p className="text-gray-400 text-xs">{h.desc}</p>
                  </LocalizedLink>
                );
              })}
            </div>
          </div>
        </div>
      </section >
    </>
  );
};

export default Home;
