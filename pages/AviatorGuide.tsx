import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import SEO from '../components/SEO';
import { Breadcrumbs } from '../components/Section';
import { OFFICIAL_DOMAIN } from '../constants';
import {
  Plane,
  TrendingUp,
  DollarSign,
  Clock,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Shield,
  Smartphone,
  Monitor,
  HelpCircle,
  ExternalLink,
  Zap,
  Target,
  AlertCircle,
  BarChart3,
  PlayCircle
} from 'lucide-react';

const AviatorGuide: React.FC = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);
  const [multiplier, setMultiplier] = React.useState(1.00);
  const [isFlying, setIsFlying] = React.useState(false);
  const [crashed, setCrashed] = React.useState(false);
  const planeRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (planeRef.current) {
      const x = Math.min((multiplier - 1) * 33, 90);
      const y = Math.min((multiplier - 1) * 20 + 10, 80);
      planeRef.current.style.left = `${x}%`;
      planeRef.current.style.bottom = `${y}%`;
      planeRef.current.style.transform = 'translate(10px, -10px) rotate(-10deg)';
    }
  }, [multiplier]);

  const startDemo = () => {
    setMultiplier(1.00);
    setIsFlying(true);
    setCrashed(false);

    let current = 1.00;
    // Slower speed: Update every 50ms, smaller increment
    const interval = setInterval(() => {
      // Growth rate: ~0.15 per second (very visual/easy to follow)
      current += 0.005 + Math.random() * 0.01;
      setMultiplier(current);

      // Random crash between 1.50x and 3.50x for demo purposes
      if (current > (1.5 + Math.random() * 2.0)) {
        clearInterval(interval);
        setCrashed(true);
        setIsFlying(false);
      }
    }, 50);

    // Auto stop safety after 15 seconds
    setTimeout(() => {
      clearInterval(interval);
      if (!crashed) {
        setCrashed(true);
        setIsFlying(false);
      }
    }, 15000);
  };

  return (
    <>
      <SEO
        metadata={{
          title: t('aviatorGuide.seo.title'),
          description: t('aviatorGuide.seo.description'),
          keywords: ["Aviator game", "crash game", "how to play aviator", "aviator strategy", "aviator tips", "bigwin959 aviator", "spribe aviator"],
          canonicalUrl: "https://bigwinofficial.com/guides/aviator",
          ogType: 'article',
          publishedTime: '2025-01-01T00:00:00+06:00',
          modifiedTime: new Date().toISOString(),
          author: 'Bigwin959 Guide',
          schema: {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": t('aviatorGuide.seo.title'),
            "description": t('aviatorGuide.seo.description'),
            "step": [
              {
                "@type": "HowToStep",
                "name": t('aviatorGuide.howToPlay.step2.title'),
                "text": t('aviatorGuide.howToPlay.step2.desc')
              },
              {
                "@type": "HowToStep",
                "name": t('aviatorGuide.howToPlay.step3.title'),
                "text": t('aviatorGuide.howToPlay.step3.desc')
              },
              {
                "@type": "HowToStep",
                "name": t('aviatorGuide.howToPlay.step4.title'),
                "text": t('aviatorGuide.howToPlay.step4.win') + " " + t('aviatorGuide.howToPlay.step4.winDesc')
              }
            ],
            "publisher": {
              "@type": "Organization",
              "name": "Bigwin959 Guide",
              "logo": {
                "@type": "ImageObject",
                "url": "https://bw959image.netlify.app/logo1.png"
              }
            },
            "datePublished": "2025-01-01",
            "dateModified": new Date().toISOString()
          }
        }}
      />

      <Breadcrumbs items={[
        { label: t('nav.guides'), path: '/guides' },
        { label: t('aviatorGuide.hero.title'), path: '/guides/aviator-game' }
      ]} />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-900 via-gray-900 to-gray-950 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>


        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/30 px-4 py-2 rounded-full mb-6">
              <Plane className="w-5 h-5 text-brand" />
              <span className="text-brand font-semibold">{t('aviatorGuide.hero.badge')}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t('aviatorGuide.hero.title')}
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              {t('aviatorGuide.hero.subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-900/80 backdrop-blur-md p-8 rounded-xl border border-gray-800">
            <p className="text-gray-300 text-lg mb-6">
              {t('aviatorGuide.hero.desc')}
            </p>
            <div className="bg-gray-800 p-6 rounded-lg mb-6">
              <h3 className="text-white font-bold mb-3">{t('aviatorGuide.hero.guideIncludes')}</h3>
              <ul className="space-y-2">
                {(t('aviatorGuide.hero.items', { returnObjects: true }) as string[]).map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-yellow-900/20 border border-yellow-600/30 p-4 rounded-lg mb-6">
              <p className="text-yellow-300 flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{t('aviatorGuide.hero.disclaimer')}</span>
              </p>
            </div>
            <div className="text-center">
              <a
                href={OFFICIAL_DOMAIN}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-blue-900 font-bold py-3 px-8 rounded-full transition-all shadow-lg"
              >
                <PlayCircle className="w-5 h-5" />
                {t('aviatorGuide.hero.playButton')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS AVIATOR */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('aviatorGuide.whatIs.title')}
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 mb-8">
              <p className="text-gray-300 text-lg mb-6">
                {t('aviatorGuide.whatIs.desc')}
              </p>
              <div className="space-y-4">
                {(t('aviatorGuide.whatIs.items', { returnObjects: true }) as string[]).map((text, i) => {
                  const icons = [Plane, TrendingUp, AlertCircle, DollarSign, XCircle];
                  const Icon = icons[i] || Plane;
                  return (
                    <div key={i} className="flex items-start gap-4 bg-gray-800 p-4 rounded-lg">
                      <Icon className="w-6 h-6 text-brand flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300">{text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand/10 to-transparent p-8 rounded-2xl border border-brand/30">
              <h3 className="text-2xl font-bold text-white mb-6">{t('aviatorGuide.whatIs.example.title')}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-gray-900/50 p-4 rounded-lg">
                  <span className="text-gray-400">{t('aviatorGuide.whatIs.example.bet')}</span>
                  <span className="text-white font-bold text-xl">100 BDT</span>
                </div>
                <div className="flex items-center gap-4 bg-gray-900/50 p-4 rounded-lg">
                  <span className="text-gray-400">{t('aviatorGuide.whatIs.example.cashOut')}</span>
                  <span className="text-brand font-bold text-xl">2.00x</span>
                </div>
                <div className="flex items-center gap-4 bg-green-900/30 p-4 rounded-lg border border-green-700/30">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                  <span className="text-white">{t('aviatorGuide.whatIs.example.receive')}</span>
                  <span className="text-green-400 font-bold text-xl">200 BDT (100 × 2.00)</span>
                </div>
                <div className="flex items-center gap-4 bg-red-900/30 p-4 rounded-lg border border-red-700/30">
                  <XCircle className="w-6 h-6 text-red-400" />
                  <span className="text-gray-300">{t('aviatorGuide.whatIs.example.loss')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE GRAPH DEMO */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            {t('aviatorGuide.demo.title')}
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            {t('aviatorGuide.demo.subtitle')}
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-2xl">
              {/* Graph Display */}
              {/* Graph Display */}
              <div className="relative bg-gray-950 rounded-xl p-8 mb-6 h-80 overflow-hidden">
                {/* Grid Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="h-full w-full aviator-grid"></div>
                </div>

                {/* Multiplier Display */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center">
                  <div className={`text-7xl font-bold transition-all duration-100 tabular-nums tracking-tight ${crashed ? 'text-red-500 scale-110' : isFlying ? 'text-white drop-shadow-lg' : 'text-gray-600'
                    }`}>
                    {multiplier.toFixed(2)}x
                  </div>
                  {crashed && (
                    <div className="mt-4 animate-bounce">
                      <span className="bg-red-600 text-white px-6 py-2 rounded-full text-lg font-bold uppercase tracking-wide">
                        {t('aviatorGuide.demo.crashed')}
                      </span>
                    </div>
                  )}
                  {!isFlying && !crashed && (
                    <div className="mt-4">
                      <p className="text-gray-500 text-sm uppercase tracking-widest">Ready to Start</p>
                    </div>
                  )}
                </div>

                {/* Animated Plane & Graph Line */}
                <div className="absolute inset-0 z-10">
                  {/* Clean Quadratic Curve */}
                  {isFlying && (
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#e11d48" stopOpacity="0" />
                          <stop offset="50%" stopColor="#e11d48" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="#e11d48" stopOpacity="1" />
                        </linearGradient>
                      </defs>
                      {/* 
                         Math logic: 
                         - X moves from 0 to 100% based on (multiplier - 1) * SCALING_FACTOR
                         - Y moves from bottom to top
                      */}
                      <path
                        d={`M -20 340 Q ${Math.min((multiplier - 1) * 150, 400)} 300 ${Math.min((multiplier - 1) * 300, 800)} ${320 - Math.min((multiplier - 1) * 180, 280)}`}
                        stroke="url(#lineGradient)"
                        strokeWidth="6"
                        fill="none"
                        strokeLinecap="round"
                        className="drop-shadow-lg"
                      />
                    </svg>
                  )}

                  {/* Plane Icon */}
                  {isFlying && !crashed && (
                    <div
                      ref={planeRef}
                      className="absolute transition-none will-change-transform"
                    >
                      <Plane className="w-16 h-16 text-brand drop-shadow-2xl fill-brand/20" />
                    </div>
                  )}
                </div>

                {/* Axis Labels */}
                <div className="absolute bottom-4 left-4 text-gray-600 font-mono text-xs">1.00x</div>
                <div className="absolute bottom-4 right-4 text-gray-600 font-mono text-xs">TIME</div>
              </div>

              {/* Controls */}
              <div className="flex flex-col items-center gap-4">
                <button
                  onClick={startDemo}
                  disabled={isFlying}
                  className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all ${isFlying
                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    : 'bg-brand hover:bg-brand/90 text-black shadow-lg hover:shadow-xl transform hover:scale-105'
                    }`}
                >
                  <PlayCircle className="w-6 h-6" />
                  {isFlying ? t('aviatorGuide.demo.inProgress') : crashed ? t('aviatorGuide.demo.newRound') : t('aviatorGuide.demo.startBtn')}
                </button>

                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-brand rounded-full"></div>
                    <span className="text-gray-400">{t('aviatorGuide.demo.rising')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-gray-400">{t('aviatorGuide.demo.crashed')}</span>
                  </div>
                </div>

                <p className="text-gray-500 text-sm text-center max-w-md">
                  {t('aviatorGuide.demo.disclaimer')}
                </p>
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center">
                <TrendingUp className="w-10 h-10 text-brand mb-4 mx-auto" />
                <h3 className="text-white font-bold mb-2">{t('aviatorGuide.demo.takeaways.increase.title')}</h3>
                <p className="text-gray-400 text-sm">{t('aviatorGuide.demo.takeaways.increase.desc')}</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center">
                <AlertTriangle className="w-10 h-10 text-yellow-400 mb-4 mx-auto" />
                <h3 className="text-white font-bold mb-2">{t('aviatorGuide.demo.takeaways.crash.title')}</h3>
                <p className="text-gray-400 text-sm">{t('aviatorGuide.demo.takeaways.crash.desc')}</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center">
                <Target className="w-10 h-10 text-green-400 mb-4 mx-auto" />
                <h3 className="text-white font-bold mb-2">{t('aviatorGuide.demo.takeaways.cashOut.title')}</h3>
                <p className="text-gray-400 text-sm">{t('aviatorGuide.demo.takeaways.cashOut.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* HOW TO OPEN AVIATOR */}
      < section className="py-20 bg-gray-900" >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('aviatorGuide.howToOpen.title')}
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-brand text-black font-bold flex items-center justify-center text-xl flex-shrink-0">1</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">{t('aviatorGuide.howToOpen.step1.title')}</h3>
                  <p className="text-gray-300 mb-4">Go to:</p>
                  <div className="bg-gray-900 p-4 rounded-lg mb-4">
                    <p className="text-brand font-bold text-lg">{OFFICIAL_DOMAIN}</p>
                  </div>
                  <p className="text-gray-300">{t('aviatorGuide.howToOpen.step1.desc')}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-brand text-black font-bold flex items-center justify-center text-xl flex-shrink-0">2</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">{t('aviatorGuide.howToOpen.step2.title')}</h3>
                  <p className="text-gray-300 mb-4">{t('aviatorGuide.howToOpen.step2.desc')}</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {(t('aviatorGuide.howToOpen.step2.items', { returnObjects: true }) as string[]).map((location, i) => (
                      <div key={i} className="bg-gray-900 p-4 rounded-lg text-center border border-gray-700">
                        <p className="text-white font-semibold">{location}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-300 mt-4">{t('aviatorGuide.howToOpen.step2.tap')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* GAME SCREEN ELEMENTS */}
      < section className="py-20 bg-gray-950" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('aviatorGuide.gameScreen.title')}
          </h3>

          <p className="text-gray-300 text-lg mb-8 text-center max-w-3xl mx-auto">
            {t('aviatorGuide.gameScreen.desc')}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(t('aviatorGuide.gameScreen.items', { returnObjects: true }) as Array<{ title: string; desc: string }>).map((element, i) => {
              const icons = [DollarSign, Target, BarChart3, Clock, Clock, Zap];
              const Icon = icons[i] || DollarSign;
              return (
                <div key={i} className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
                  <Icon className="w-10 h-10 text-brand mb-4 mx-auto" />
                  <h3 className="text-white font-bold mb-2">{element.title}</h3>
                  <p className="text-gray-400 text-sm">{element.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section >

      {/* HOW TO PLAY STEP BY STEP */}
      < section className="py-20 bg-gray-900" >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('aviatorGuide.howToPlay.title')}
          </h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle2 className="w-8 h-8 text-brand flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">{t('aviatorGuide.howToPlay.step1.title')}</h3>
                  <p className="text-gray-300 mb-4">
                    {t('aviatorGuide.howToPlay.step1.desc')}
                  </p>
                  <div className="bg-green-900/20 border border-green-700/30 p-4 rounded-lg">
                    <p className="text-green-300 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      <strong>Tip:</strong> {t('aviatorGuide.howToPlay.step1.tip')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle2 className="w-8 h-8 text-brand flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">{t('aviatorGuide.howToPlay.step2.title')}</h3>
                  <p className="text-gray-300 mb-4">
                    {t('aviatorGuide.howToPlay.step2.desc')}
                  </p>
                  <ul className="space-y-2">
                    {(t('aviatorGuide.howToPlay.step2.items', { returnObjects: true }) as string[]).map((text, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <span className="text-brand">•</span>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle2 className="w-8 h-8 text-brand flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">{t('aviatorGuide.howToPlay.step3.title')}</h3>
                  <p className="text-gray-300 mb-4">
                    {t('aviatorGuide.howToPlay.step3.desc')}
                  </p>
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <div className="flex flex-wrap gap-3">
                      {['1.05x', '1.20x', '1.50x', '2.00x', '3.00x', '10.00x', 'sometimes even higher...'].map((mult, i) => (
                        <span key={i} className="bg-gray-800 px-4 py-2 rounded-lg text-brand font-bold">{mult}</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-400 mt-4">
                    {t('aviatorGuide.howToPlay.step3.crashDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle2 className="w-8 h-8 text-brand flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">{t('aviatorGuide.howToPlay.step4.title')}</h3>
                  <div className="space-y-4 mb-6">
                    <div className="bg-green-900/20 border border-green-700/30 p-4 rounded-lg">
                      <p className="text-green-300 mb-2"><strong>{t('aviatorGuide.howToPlay.step4.win')}</strong></p>
                      <p className="text-white font-bold">{t('aviatorGuide.howToPlay.step4.winDesc')}</p>
                    </div>
                    <div className="bg-red-900/20 border border-red-700/30 p-4 rounded-lg">
                      <p className="text-red-300 mb-2"><strong>{t('aviatorGuide.howToPlay.step4.lose')}</strong></p>
                      <p className="text-white font-bold">{t('aviatorGuide.howToPlay.step4.loseDesc')}</p>
                    </div>
                  </div>

                  <div className="bg-gray-900 p-6 rounded-lg">
                    <h4 className="text-white font-bold mb-4">{t('aviatorGuide.howToPlay.step4.example.title')}</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">{t('aviatorGuide.howToPlay.step4.example.bet')}</span>
                      </div>
                      <div className="flex items-center justify-between bg-green-900/20 p-3 rounded">
                        <span className="text-gray-300">{t('aviatorGuide.howToPlay.step4.example.win1')}</span>
                      </div>
                      <div className="flex items-center justify-between bg-green-900/20 p-3 rounded">
                        <span className="text-gray-300">{t('aviatorGuide.howToPlay.step4.example.win2')}</span>
                      </div>
                      <div className="flex items-center justify-between bg-red-900/20 p-3 rounded">
                        <span className="text-gray-300">{t('aviatorGuide.howToPlay.step4.example.lose')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* NO GUARANTEE SECTION */}
      < section className="py-20 bg-gray-950" >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            {t('aviatorGuide.noGuarantee.title')}
          </h3>

          <div className="bg-gradient-to-br from-red-900/20 to-transparent p-8 rounded-2xl border border-red-700/30">
            <p className="text-gray-300 text-lg mb-6">
              {t('aviatorGuide.noGuarantee.desc')}
            </p>
            <p className="text-white font-bold text-xl mb-6">{t('aviatorGuide.noGuarantee.meaning')}</p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {(t('aviatorGuide.noGuarantee.items', { returnObjects: true }) as string[]).map((point, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{point}</span>
                </div>
              ))}
            </div>
            <div className="bg-yellow-900/20 border border-yellow-600/30 p-6 rounded-lg">
              <p className="text-yellow-300 text-lg">
                <strong>{t('aviatorGuide.noGuarantee.warning')}</strong>
              </p>
            </div>
          </div>
        </div>
      </section >

      {/* TIPS & BEST PRACTICES */}
      < section className="py-20 bg-gray-900" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            {t('aviatorGuide.tips.title')}
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            {t('aviatorGuide.tips.subtitle')}
          </p>

          <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            {t('aviatorGuide.tips.intro')}
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {(t('aviatorGuide.tips.items', { returnObjects: true }) as Array<{ title: string; points: string[] }>).map((tip, i) => (
              <div key={i} className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand text-black font-bold flex items-center justify-center text-xl flex-shrink-0">
                    {i + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{tip.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{t('aviatorGuide.tips.decide')}</p>
                <ul className="space-y-2">
                  {tip.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* COMMON MISTAKES */}
      < section className="py-20 bg-gray-950" >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('aviatorGuide.mistakes.title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-900/20 border border-red-700/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <XCircle className="w-8 h-8 text-red-400" />
                {t('aviatorGuide.mistakes.dont.title')}
              </h3>
              <ul className="space-y-3">
                {(t('aviatorGuide.mistakes.dont.items', { returnObjects: true }) as string[]).map((mistake, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    {mistake}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-900/20 border border-green-700/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-green-400" />
                {t('aviatorGuide.mistakes.do.title')}
              </h3>
              <ul className="space-y-3">
                {(t('aviatorGuide.mistakes.do.items', { returnObjects: true }) as string[]).map((practice, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    {practice}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section >

      {/* MOBILE VS DESKTOP */}
      < section className="py-20 bg-gray-900" >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('aviatorGuide.mobileVsDesktop.title')}
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 text-center">
              <Smartphone className="w-12 h-12 text-brand mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-white mb-6">{t('aviatorGuide.mobileVsDesktop.mobile.title')}</h3>
              <ul className="space-y-3">
                {(t('aviatorGuide.mobileVsDesktop.mobile.items', { returnObjects: true }) as string[]).map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 text-center">
              <Monitor className="w-12 h-12 text-brand mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-white mb-6">{t('aviatorGuide.mobileVsDesktop.desktop.title')}</h3>
              <ul className="space-y-3">
                {(t('aviatorGuide.mobileVsDesktop.desktop.items', { returnObjects: true }) as string[]).map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-gray-400 text-center mt-8">
            {t('aviatorGuide.mobileVsDesktop.conclusion')}
          </p>
        </div>
      </section >

      {/* IS AVIATOR FAIR */}
      < section className="py-20 bg-gray-950" >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('aviatorGuide.fairness.title')}
          </h2>

          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 mb-8">
            <p className="text-gray-300 text-lg mb-6">
              {t('aviatorGuide.fairness.desc')}
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-800 p-6 rounded-xl text-center">
                <Shield className="w-10 h-10 text-brand mb-4 mx-auto" />
                <h3 className="text-white font-bold mb-2">{t('aviatorGuide.fairness.rng.title')}</h3>
                <p className="text-gray-400 text-sm">{t('aviatorGuide.fairness.rng.desc')}</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl text-center">
                <Shield className="w-10 h-10 text-brand mb-4 mx-auto" />
                <h3 className="text-white font-bold mb-2">{t('aviatorGuide.fairness.provably.title')}</h3>
                <p className="text-gray-400 text-sm">{t('aviatorGuide.fairness.provably.desc')}</p>
              </div>
            </div>

            <p className="text-white font-bold text-lg mb-4">{t('aviatorGuide.fairness.meaning')}</p>
            <ul className="space-y-2 mb-6">
              {(t('aviatorGuide.fairness.items', { returnObjects: true }) as string[]).map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-yellow-900/20 border border-yellow-600/30 p-6 rounded-lg">
              <p className="text-yellow-300 mb-4"><strong>{t('aviatorGuide.fairness.risk.text')}</strong></p>
              <ul className="space-y-2">
                {(t('aviatorGuide.fairness.risk.items', { returnObjects: true }) as string[]).map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-yellow-300">
                    <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section >

      {/* RESPONSIBLE GAMING */}
      < section className="py-20 bg-gray-900" >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('aviatorGuide.responsible.title')}
          </h2>

          <div className="bg-gradient-to-br from-red-900/20 to-transparent p-8 rounded-2xl border border-red-700/30">
            <p className="text-gray-300 text-lg mb-8 text-center">
              {t('aviatorGuide.responsible.desc')}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {(t('aviatorGuide.responsible.items', { returnObjects: true }) as string[]).map((reminder, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-900/50 p-5 rounded-lg">
                  <Shield className="w-6 h-6 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{reminder}</span>
                </div>
              ))}
            </div>

            <div className="bg-red-900/30 border border-red-700/50 p-6 rounded-lg">
              <p className="text-red-300 text-lg flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 flex-shrink-0 mt-1" />
                <span>
                  <strong>{t('aviatorGuide.responsible.warning')}</strong>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section >

      {/* FAQ */}
      < section className="py-20 bg-gray-950" >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            {t('aviatorGuide.faq.title')}
          </h3>

          <div className="space-y-6">
            {(t('aviatorGuide.faq.items', { returnObjects: true }) as Array<{ q: string; a: string }>).map((faq, i) => (
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
                    <span className="text-white font-bold text-lg">{faq.q}</span>
                  </div>
                  <span className="text-brand text-2xl flex-shrink-0">
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 border-t border-gray-800">
                    <p className="text-gray-300 pl-9 pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* FINAL CTA */}
      < section className="py-20 bg-gradient-to-br from-blue-900 via-gray-900 to-gray-950" >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-900/80 backdrop-blur-md p-10 rounded-2xl border border-gray-800">
            <Plane className="w-16 h-16 text-brand mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">
              {t('aviatorGuide.cta.title')}
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              {t('aviatorGuide.cta.desc')}
            </p>
            <a
              href={OFFICIAL_DOMAIN}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand/90 text-black font-bold py-4 px-10 rounded-full transition-all shadow-lg text-lg"
            >
              <PlayCircle className="w-6 h-6" />
              {t('aviatorGuide.cta.button')}
            </a>
            <p className="text-gray-400 mt-6">
              {t('aviatorGuide.cta.footer')}
            </p>
          </div>
        </div>
      </section >

      {/* FOOTER DISCLAIMER */}
      < section className="bg-gray-950 py-12 border-t border-gray-800" >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-2">
            {t('aviatorGuide.pageFooter.copyright')}
          </p>
          <p className="text-gray-500 text-sm">
            {t('aviatorGuide.pageFooter.disclaimer')}
          </p>
        </div>
      </section >
    </>
  );
};

export default AviatorGuide;

