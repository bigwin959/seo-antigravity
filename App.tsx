import React, { useEffect, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';

// Eager load only critical pages
import Home from './pages/Home';

// Lazy load all other pages
const AboutPage = lazy(() => import('./pages/AboutPageComprehensive').then(m => ({ default: m.AboutPageComprehensive })));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CricketGuide = lazy(() => import('./pages/CricketGuide'));
const CricketSettlementRules = lazy(() => import('./pages/CricketSettlementRules'));
const AviatorGuide = lazy(() => import('./pages/AviatorGuide'));
const TopSlotGames = lazy(() => import('./pages/TopSlotGames'));
const DepositGuide = lazy(() => import('./pages/DepositGuide'));
const WithdrawalGuide = lazy(() => import('./pages/WithdrawalGuide'));
const PromotionsToday = lazy(() => import('./pages/PromotionsToday'));
const BkashDepositGuide = lazy(() => import('./pages/BkashDepositGuide'));
const KbzpayDepositGuide = lazy(() => import('./pages/KbzpayDepositGuide'));
const IsBigwin959Legit = lazy(() => import('./pages/IsBigwin959Legit'));
const AppDownload = lazy(() => import('./pages/AppDownload'));
const OnlineGamingBangladesh = lazy(() => import('./pages/blogs/OnlineGamingBangladesh'));
const BeginnersGuide = lazy(() => import('./pages/blogs/BeginnersGuide'));
const MyanmarPaymentGuide = lazy(() => import('./pages/blogs/MyanmarPaymentGuide'));
const RtpVolatilityGuide = lazy(() => import('./pages/blogs/RtpVolatilityGuide'));
const AviatorMythsFacts = lazy(() => import('./pages/blogs/AviatorMythsFacts'));
const CricketBettingTips = lazy(() => import('./pages/blogs/CricketBettingTips'));
const AppVsBrowser = lazy(() => import('./pages/blogs/AppVsBrowserOnly'));
const PaymentTroubleshooting = lazy(() => import('./pages/blogs/PaymentTroubleshooting'));
const CommonMistakes = lazy(() => import('./pages/blogs/CommonMistakes'));
const SafetyChecklist = lazy(() => import('./pages/blogs/SafetyChecklist'));
const BkashVsNagad = lazy(() => import('./pages/blogs/BkashVsNagad'));
const CricketBetTypes = lazy(() => import('./pages/CricketBetTypes'));
const CricketExchangeVsSportsbook = lazy(() => import('./pages/CricketExchangeVsSportsbook'));
const CricketConfusingSituations = lazy(() => import('./pages/CricketConfusingSituations'));
const CricketFAQ = lazy(() => import('./pages/CricketFAQ'));
const CricketHowToBet = lazy(() => import('./pages/CricketHowToBet'));
const SportsBettingGuide = lazy(() => import('./pages/SportsBettingGuide'));
const LiveCasinoGuide = lazy(() => import('./pages/LiveCasinoGuide'));
const EvolutionGamingProvider = lazy(() => import('./pages/EvolutionGamingProvider'));
const SAGamingProvider = lazy(() => import('./pages/SAGamingProvider'));
const SexyGamingProvider = lazy(() => import('./pages/SexyGamingProvider'));
const ExchangeSportsProvider = lazy(() => import('./pages/ExchangeSportsProvider'));
const IBCSportsProvider = lazy(() => import('./pages/IBCSportsProvider'));
const SBOSportsProvider = lazy(() => import('./pages/SBOSportsProvider'));
const AffiliatePage = lazy(() => import('./pages/AffiliatePage'));
const FirstDepositBonus = lazy(() => import('./pages/FirstDepositBonus'));
const DailyBonus = lazy(() => import('./pages/DailyBonus'));
const VIPProgram = lazy(() => import('./pages/VIPProgram'));
const Bet365BangladeshReview = lazy(() => import('./pages/comparisons/Bet365BangladeshReview'));
const OnexBetBangladeshReview = lazy(() => import('./pages/comparisons/1xBetBangladeshReview'));
const ComparisonsPage = lazy(() => import('./pages/ComparisonsPage'));

// Lazy load generic pages
const BonusesPageNew = lazy(() => import('./pages/BonusesPageNew'));
const GuidesPage = lazy(() => import('./pages/GenericPages').then(m => ({ default: m.GuidesPage })));
const ProvidersPage = lazy(() => import('./pages/GenericPages').then(m => ({ default: m.ProvidersPage })));
const BlogPage = lazy(() => import('./pages/GenericPages').then(m => ({ default: m.BlogPage })));
const RegistrationGuidePage = lazy(() => import('./pages/GenericPages').then(m => ({ default: m.RegistrationGuidePage })));
const PragmaticPlayProvider = lazy(() => import('./pages/PragmaticPlayProvider'));
const JiliProvider = lazy(() => import('./pages/JiliProvider'));
const JdbProvider = lazy(() => import('./pages/JdbProvider'));
const FaChaiProvider = lazy(() => import('./pages/FaChaiProvider'));
const BngProvider = lazy(() => import('./pages/BngProvider'));
const SpribeProvider = lazy(() => import('./pages/SpribeProvider'));
const PgSoftProvider = lazy(() => import('./pages/PgSoftProvider'));
const BtGamingProvider = lazy(() => import('./pages/BtGamingProvider'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Dynamic / Admin Blog components
const AdminBlog = lazy(() => import('./pages/AdminBlog'));
const AdminBlogEdit = lazy(() => import('./pages/AdminBlogEdit'));
const DynamicBlogPost = lazy(() => import('./pages/DynamicBlogPost'));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div>
      <p className="text-gray-400 mt-4">Loading...</p>
    </div>
  </div>
);

// Sync language with URL query param
const LanguageSync = () => {
  const { search } = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const lang = params.get('lang');
    if (lang && ['en', 'bn'].includes(lang) && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [search, i18n]);

  return null;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <LanguageSync />
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/bonuses" element={<BonusesPageNew />} />
            <Route path="/bonuses/:type" element={<BonusesPageNew />} />
            <Route path="/bonuses/first-deposit" element={<FirstDepositBonus />} />
            <Route path="/bonuses/daily" element={<DailyBonus />} />
            <Route path="/bonuses/vip" element={<VIPProgram />} />
            <Route path="/bonuses/today" element={<PromotionsToday />} />
            <Route path="/promotions/today" element={<PromotionsToday />} /> {/* Redirect old URL */}
            <Route path="/guides" element={<GuidesPage />} />
            <Route path="/guides/registration" element={<RegistrationGuidePage />} />
            <Route path="/guides/deposit" element={<DepositGuide />} />
            <Route path="/guides/bkash-deposit" element={<BkashDepositGuide />} />
            <Route path="/guides/kbzpay-deposit" element={<KbzpayDepositGuide />} />
            <Route path="/guides/withdrawal" element={<WithdrawalGuide />} />
            <Route path="/guides/cricket" element={<CricketGuide />} />
            <Route path="/guides/cricket/confusing-situations" element={<CricketConfusingSituations />} />
            <Route path="/guides/cricket/bet-types" element={<CricketBetTypes />} />
            <Route path="/guides/cricket/exchange-vs-sportsbook" element={<CricketExchangeVsSportsbook />} />
            <Route path="/guides/cricket/settlement-rules" element={<CricketSettlementRules />} />
            <Route path="/guides/cricket/faq" element={<CricketFAQ />} />
            <Route path="/guides/cricket/how-to-bet" element={<CricketHowToBet />} />
            <Route path="/guides/sports-betting" element={<SportsBettingGuide />} />
            <Route path="/guides/live-casino" element={<LiveCasinoGuide />} />
            <Route path="/guides/aviator-game" element={<AviatorGuide />} />
            <Route path="/top-slot-games" element={<TopSlotGames />} />
            <Route path="/settlement-rules" element={<CricketSettlementRules />} />
            <Route path="/is-bigwin959-legit" element={<IsBigwin959Legit />} />
            <Route path="/providers" element={<ProvidersPage />} />
            <Route path="/providers/exchange-sports" element={<ExchangeSportsProvider />} />
            <Route path="/providers/ibc-sports" element={<IBCSportsProvider />} />
            <Route path="/providers/sbo-sports" element={<SBOSportsProvider />} />
            <Route path="/providers/evolution-gaming" element={<EvolutionGamingProvider />} />
            <Route path="/providers/sa-gaming" element={<SAGamingProvider />} />
            <Route path="/providers/sexy-gaming" element={<SexyGamingProvider />} />
            <Route path="/providers/pragmatic" element={<PragmaticPlayProvider />} />
            <Route path="/providers/jili" element={<JiliProvider />} />
            <Route path="/providers/jdb" element={<JdbProvider />} />
            <Route path="/providers/fc" element={<FaChaiProvider />} />
            <Route path="/providers/bng" element={<BngProvider />} />
            <Route path="/providers/spribe" element={<SpribeProvider />} />
            <Route path="/providers/bt" element={<BtGamingProvider />} />
            <Route path="/providers/pgsoft" element={<PgSoftProvider />} />
            <Route path="/app-download" element={<AppDownload />} />
            <Route path="/affiliate" element={<AffiliatePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/online-gaming-bangladesh-local-payments" element={<OnlineGamingBangladesh />} />
            <Route path="/blog/beginners-guide-bd-mm-2025" element={<BeginnersGuide />} />
            <Route path="/blog/myanmar-kbzpay-wavepay-guide" element={<MyanmarPaymentGuide />} />
            <Route path="/blog/rtp-volatility-slots-explained" element={<RtpVolatilityGuide />} />
            <Route path="/blog/aviator-myths-facts-responsible-tips" element={<AviatorMythsFacts />} />
            <Route path="/blog/cricket-betting-tips-beginners-honest" element={<CricketBettingTips />} />
            <Route path="/blog/app-vs-browser-comparison" element={<AppVsBrowser />} />
            <Route path="/blog/payment-troubleshooting-delays" element={<PaymentTroubleshooting />} />
            <Route path="/blog/10-common-mistakes-avoid" element={<CommonMistakes />} />
            <Route path="/blog/safety-checklist-online-gaming" element={<SafetyChecklist />} />
            <Route path="/blog/bkash-vs-nagad-betting-payment-comparison" element={<BkashVsNagad />} />
            
            {/* Dynamic Blog Route */}
            <Route path="/blog/post/:slug" element={<DynamicBlogPost />} />

            <Route path="/comparisons" element={<ComparisonsPage />} />
            <Route path="/comparisons/bet365-bangladesh-review" element={<Bet365BangladeshReview />} />
            <Route path="/comparisons/1xbet-bangladesh-review" element={<OnexBetBangladeshReview />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Admin Routes */}
            <Route path="/admin/blog" element={<AdminBlog />} />
            <Route path="/admin/blog/new" element={<AdminBlogEdit />} />
            <Route path="/admin/blog/edit/:slug" element={<AdminBlogEdit />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;