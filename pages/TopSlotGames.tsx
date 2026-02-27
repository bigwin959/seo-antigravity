import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { Breadcrumbs } from '../components/Section';
import { OFFICIAL_DOMAIN } from '../constants';
import {
  Sparkles,
  Trophy,
  Zap,
  Star,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  Gamepad2,
  DollarSign,
  Clock,
  HelpCircle,
  ExternalLink,
  PlayCircle,
  Shield,
  Target
} from 'lucide-react';

const TopSlotGames: React.FC = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  const slotGames = [
    {
      rank: 1,
      name: "Sweet Bonanza",
      provider: "Pragmatic Play",
      theme: "Colorful candy theme",
      features: ["Scatter Free Spins", "High win potential", "Multiplier bombs (x2–x100)"],
      whyLove: ["Colorful candy theme", "Huge tumble wins", "Free Spins with x100 multiplier bombs", "Very popular in BD & MM"],
      description: "Great for players who enjoy fast, explosive gameplay.",
      color: "from-pink-500 to-purple-500"
    },
    {
      rank: 2,
      name: "Gates of Olympus",
      provider: "Pragmatic Play",
      theme: "Zeus dropping multipliers",
      features: ["Tumble system", "Random multipliers", "High volatility"],
      whyLove: ["Zeus dropping multipliers", "Free Spins with unlimited multiplier potential", "Extremely popular worldwide"],
      description: "This is one of the most iconic PP slots ever made.",
      color: "from-blue-500 to-cyan-500"
    },

    {
      rank: 3,
      name: "boxing king",
      provider: "JILI",
      theme: "Tiger-themed bonus game",
      features: ["Bonus mini-games", "Free spins", "Balanced volatility"],
      whyLove: ["Tiger-themed bonus game", "Frequent mini-wins", "Clean graphics", "Strong regional popularity"],
      description: "Perfect for players who prefer stable gameplay.",
      color: "from-orange-500 to-red-500"
    },
    {
      rank: 4,
      name: "Lucky Goldbricks",
      provider: "JILI",
      theme: "Clicking gold bricks to win prizes",
      features: ["Prize selection game", "High RTP feel", "Low-risk gameplay"],
      whyLove: ["Clicking gold bricks to win prizes", "Simple but very addictive", "Many BD/MM players prefer it over normal slots"],
      description: "Simple but very addictive gameplay.",
      color: "from-yellow-500 to-amber-500"
    },
    {
      rank: 5,
      name: "Dragon Treasure",
      provider: "JILI",
      theme: "Chest-cracking bonus",
      features: ["Breakable treasure boxes", "Instant cash rewards", "Smooth gameplay"],
      whyLove: ["Chest-cracking bonus", "Strong Asian theme", "Good mid-volatility balance"],
      description: "Strong Asian theme with balanced volatility.",
      color: "from-green-500 to-emerald-500"
    },
    {
      rank: 6,
      name: "Fortune Tiger",
      provider: "PG Soft",
      theme: "Simple, one-screen game",
      features: ["Mini bonuses", "Multiplier re-spins", "Fast spin mechanics"],
      whyLove: ["Very simple, one-screen game", "Massive win potential in multiplier mode", "Viral in many Asian markets"],
      description: "Great for players who enjoy simple, high-risk fun.",
      color: "from-red-500 to-orange-500"
    },
    {
      rank: 7,
      name: "Fortune Ox",
      provider: "PG Soft",
      theme: "Random full-screen multipliers",
      features: ["Lucky spins", "Random x10 multipliers", "Perfect for beginners"],
      whyLove: ["Very similar to Fortune Tiger", "Random full-screen multipliers", "Easy to understand"],
      description: "Perfect for beginners.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      rank: 8,
      name: "Crazy Hunter",
      provider: "FC",
      theme: "Skill shooting game",
      features: ["Shooting game mechanics", "Boss levels", "High entertainment value"],
      whyLove: ["More like a skill shooting game", "Fresh gameplay type", "Loved by younger BD/MM players"],
      description: "Great for players who enjoy arcade-style gaming.",
      color: "from-teal-500 to-cyan-500"
    },
    {
      rank: 9,
      name: "Boom Legend",
      provider: "JDB",
      theme: "Explosive bonuses",
      features: ["Special Boom feature", "Free spins", "Easy-to-understand layout"],
      whyLove: ["Explosive bonuses", "Smooth graphics", "Reliable win pacing"],
      description: "Reliable win pacing with smooth graphics.",
      color: "from-violet-500 to-purple-500"
    },
    {
      rank: 10,
      name: "Super Ace",
      provider: "JILI",
      theme: "Big symbol drops",
      features: ["Symbol removal", "Big Ace wins", "Endless tumbling rounds"],
      whyLove: ["Big symbol drops", "High volatility", "Clean, modern theme"],
      description: "A favorite among players who chase big multiplier wins.",
      color: "from-rose-500 to-pink-500"
    }
  ];

  return (
    <>
      <SEO
        metadata={{
          title: t('topSlotGames.seo.title'),
          description: t('topSlotGames.seo.description'),
          keywords: ["bigwin959 slots", "best slot games", "sweet bonanza", "gates of olympus", "JILI slots", "pragmatic play slots"],
          canonicalUrl: "https://bigwinofficial.com/top-slot-games"
        }}
      />

      <Breadcrumbs items={[{ label: 'Top Slot Games', path: '/top-slot-games' }]} />


      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-purple-900 via-gray-900 to-gray-950 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/30 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-brand" />
              <span className="text-brand font-semibold">{t('topSlotGames.hero.badge')}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t('topSlotGames.hero.title')}
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              {t('topSlotGames.hero.subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-900/80 backdrop-blur-md p-8 rounded-xl border border-gray-800">
            <p className="text-gray-300 text-lg mb-6">
              {t('topSlotGames.hero.intro')}
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {(t('topSlotGames.hero.criteria', { returnObjects: true }) as string[]).map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-800 p-3 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-yellow-900/20 border border-yellow-600/30 p-4 rounded-lg mb-6">
              <p className="text-yellow-300 flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{t('topSlotGames.hero.disclaimer')}</span>
              </p>
            </div>
            <div className="text-center">
              <a
                href={OFFICIAL_DOMAIN}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-purple-900 font-bold py-3 px-8 rounded-full transition-all shadow-lg"
              >
                <PlayCircle className="w-5 h-5" />
                {t('topSlotGames.hero.playButton')}
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* WHY SLOTS ARE POPULAR */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('topSlotGames.whyPopular.title')}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(t('topSlotGames.whyPopular.features', { returnObjects: true }) as Array<{ title: string; desc: string }>).map((feature, i) => {
              const icons = [Gamepad2, Sparkles, Zap, Trophy, DollarSign, Star, Target, Clock];
              const Icon = icons[i] || Gamepad2;
              return (
                <div key={i} className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
                  <Icon className="w-10 h-10 text-brand mx-auto mb-4" />
                  <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TOP 10 SLOTS LIST */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('topSlotGames.topGames.title')} <span className="text-brand">{t('topSlotGames.topGames.titleHighlight')}</span>
          </h2>

          <div className="space-y-8">
            {slotGames.map((game, i) => (
              <div key={i} className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden hover:border-brand/50 transition-all">
                <div className={`h-2 bg-gradient-to-r ${game.color}`}></div>
                <div className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${game.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <span className="text-white font-bold text-2xl">#{game.rank}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-2xl font-bold text-white">{game.name}</h3>
                        <span className="bg-gray-900 px-3 py-1 rounded-full text-brand text-sm font-bold">{game.provider}</span>
                      </div>
                      <p className="text-gray-400 mb-4">{game.theme}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-900/50 p-5 rounded-xl">
                      <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                        <Star className="w-5 h-5 text-brand" />
                        {t('topSlotGames.topGames.whyLove')}
                      </h4>
                      <ul className="space-y-2">
                        {game.whyLove.map((reason, j) => (
                          <li key={j} className="flex items-start gap-2 text-gray-300 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                            {reason}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-900/50 p-5 rounded-xl">
                      <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-brand" />
                        {t('topSlotGames.topGames.keyFeatures')}
                      </h4>
                      <ul className="space-y-2">
                        {game.features.map((feature, j) => (
                          <li key={j} className="flex items-start gap-2 text-gray-300 text-sm">
                            <TrendingUp className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <p className="text-gray-400 text-sm mt-4 italic">{game.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* HOW TO START PLAYING */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('topSlotGames.howToStart.title')}
          </h2>

          <div className="space-y-6">
            {(t('topSlotGames.howToStart.steps', { returnObjects: true }) as Array<{ step: string; title: string; desc: string }>).map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-gray-900 p-6 rounded-xl border border-gray-800">
                <div className="w-12 h-12 rounded-full bg-brand text-black font-bold flex items-center justify-center text-xl flex-shrink-0">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSIBLE GAMING TIPS */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            {t('topSlotGames.responsibleGaming.title')}
          </h2>
          <p className="text-gray-400 text-center mb-12">
            {t('topSlotGames.responsibleGaming.subtitle')}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {(t('topSlotGames.responsibleGaming.tips', { returnObjects: true }) as string[]).map((tip, i) => (
              <div key={i} className="flex items-start gap-3 bg-gray-800 p-5 rounded-xl border border-gray-700">
                <Shield className="w-6 h-6 text-brand flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{tip}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-red-900/20 border border-red-700/30 p-6 rounded-xl">
            <p className="text-red-300 text-lg text-center flex items-center justify-center gap-3">
              <AlertTriangle className="w-6 h-6" />
              <span><strong>{t('topSlotGames.responsibleGaming.warning')}</strong></span>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('topSlotGames.faq.title')}
          </h2>

          <div className="space-y-6">
            {(t('topSlotGames.faq.items', { returnObjects: true }) as Array<{ question: string; answer: string }>).map((faq, i) => (

              <div
                key={i}
                className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-gray-850 transition-colors"
                >
                  <div className="flex items-start gap-3 flex-1">
                    <HelpCircle className="w-6 h-6 text-brand flex-shrink-0 mt-0.5" />
                    <span className="text-white font-bold text-lg">{faq.question}</span>
                  </div>
                  <span className="text-brand text-2xl flex-shrink-0">
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 border-t border-gray-800">
                    <p className="text-gray-300 pl-9 pt-4">{faq.answer}</p>
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
          <div className="bg-gray-900/80 backdrop-blur-md p-10 rounded-2xl border border-gray-800">
            <Sparkles className="w-16 h-16 text-brand mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">
              {t('topSlotGames.finalCta.title')}
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              {t('topSlotGames.finalCta.subtitle')}
            </p>
            <a
              href={OFFICIAL_DOMAIN}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand/90 text-black font-bold py-4 px-10 rounded-full transition-all shadow-lg text-lg"
            >
              <PlayCircle className="w-6 h-6" />
              {t('topSlotGames.finalCta.button')}
            </a>
            <p className="text-gray-400 mt-6">
              {t('topSlotGames.finalCta.disclaimer')}
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER DISCLAIMER */}
      <section className="bg-gray-950 py-12 border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-2">
            {t('topSlotGames.footer.copyright')}
          </p>
          <p className="text-gray-500 text-sm">
            {t('topSlotGames.footer.disclaimer')}
          </p>
        </div>
      </section>
    </>
  );
};

export default TopSlotGames;

