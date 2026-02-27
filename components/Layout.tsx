import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Download, ExternalLink, MessageCircle, Send, Facebook, Mail, Headphones } from 'lucide-react';
import { NAVIGATION, BRAND_NAME, OFFICIAL_DOMAIN, CONTACT_INFO, LOGO_URL } from '../constants';
import { LocalizedLink } from './LocalizedLink';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const getNavLabel = (label: string) => {
    const key = label.toLowerCase().replace(' ', '');
    const map: Record<string, string> = {
      'home': 'nav.home',
      'about': 'nav.about',
      'bonuses': 'nav.bonuses',
      'guides': 'nav.guides',
      'providers': 'nav.providers',
      'affiliate': 'nav.affiliate',
      'blog': 'nav.blog',
      'contact': 'nav.contact'
    };
    return map[key] ? t(map[key]) : label;
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  React.useEffect(() => {
    setIsOpen(false);
  }, [location]);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header className="bg-brand-surface border-b border-gray-800 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <LocalizedLink to="/" className="flex items-center gap-3 group">
              <img
                src={LOGO_URL}
                alt={`${BRAND_NAME} Logo`}
                title={`${BRAND_NAME} Logo`}
                className="h-10 w-auto object-contain"
                width="160"
                height="40"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const textFallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (textFallback) textFallback.style.display = 'block';
                }}
              />
              <span className="hidden text-2xl font-bold text-brand tracking-tighter group-hover:text-white transition-colors">
                {BRAND_NAME}
              </span>
            </LocalizedLink>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            {NAVIGATION.map((item) => (
              <div key={item.path} className="relative group">
                <LocalizedLink
                  to={item.path}
                  className={({ isActive }: { isActive: boolean }) =>
                    `flex items-center text-sm font-medium transition-colors ${isActive ? 'text-brand' : 'text-gray-300 hover:text-white'}`
                  }
                >
                  {getNavLabel(item.label)}
                  {item.subItems && <ChevronDown className="ml-1 w-4 h-4" />}
                </LocalizedLink>

                {item.subItems && (
                  <div className={`absolute left-0 mt-2 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform z-50 ${item.label === 'Providers' ? 'w-96' : item.label === 'Guides' ? 'w-56' : 'w-48'}`}>
                    <div className={`py-1 ${item.label === 'Providers' ? 'grid grid-cols-2 gap-x-1' : ''}`} role="menu">
                      {item.subItems.map((sub) => {
                        if (sub.label === '---') {
                          return <div key={sub.path} role="separator" className="border-t border-gray-700 my-1"></div>;
                        }
                        if (sub.label === 'Platform Comparisons') {
                          return (
                            <div key={sub.path} className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                              {sub.label}
                            </div>
                          );
                        }
                        return (
                          <LocalizedLink
                            key={sub.path}
                            to={sub.path}
                            role="menuitem"
                            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                          >
                            {sub.label}
                          </LocalizedLink>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <a
              href={OFFICIAL_DOMAIN}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="bg-brand hover:bg-brand-dark text-black font-bold py-2 px-4 rounded-full transition-colors flex items-center gap-2"
            >
              Login / Sign Up <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none touch-manipulation"
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto overscroll-contain">
          <div className="px-2 pt-2 pb-24 space-y-1 sm:px-3 will-change-scroll">
            <div className="px-3 py-2">
              <LanguageSwitcher />
            </div>
            {NAVIGATION.map((item) => (
              <React.Fragment key={item.path}>
                <LocalizedLink
                  to={item.path}
                  className={({ isActive }: { isActive: boolean }) =>
                    `block px-3 py-2 rounded-md text-base font-medium touch-manipulation ${isActive ? 'bg-gray-800 text-white' : 'text-gray-300 active:bg-gray-700 active:text-white'}`
                  }
                >
                  {getNavLabel(item.label)}
                </LocalizedLink>
                {item.subItems && (
                  <div className="pl-4 space-y-1 border-l-2 border-gray-700 ml-2">
                    {item.subItems.map(sub => {
                      if (sub.label === '---') {
                        return <div key={sub.path} className="border-t border-gray-700 my-2"></div>;
                      }
                      if (sub.label === 'Platform Comparisons') {
                        return (
                          <div key={sub.path} className="px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                            {sub.label}
                          </div>
                        );
                      }
                      return (
                        <LocalizedLink
                          key={sub.path}
                          to={sub.path}
                          className="block px-3 py-2 rounded-md text-sm font-medium text-gray-400 active:text-white active:bg-gray-800 touch-manipulation"
                        >
                          {sub.label}
                        </LocalizedLink>
                      );
                    })}
                  </div>
                )}
              </React.Fragment>
            ))}
            <a
              href={OFFICIAL_DOMAIN}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="block w-full text-center mt-4 bg-brand text-black font-bold py-3 rounded-md"
            >
              Play Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-800 mt-auto pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <LocalizedLink to="/" className="inline-block mb-4">
              <img
                src={LOGO_URL}
                alt={`${BRAND_NAME} Logo`}
                title={`${BRAND_NAME} Logo`}
                className="h-10 w-auto object-contain"
                width="160"
                height="40"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const textFallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (textFallback) textFallback.style.display = 'block';
                }}
              />
              <h3 className="hidden text-white text-lg font-bold">{BRAND_NAME}</h3>
            </LocalizedLink>
            <p className="text-sm mb-4">
              {t('hero.subtitle')}
            </p>
            <div className="flex gap-3">
              <a href={CONTACT_INFO.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-gray-400 hover:text-brand transition-colors">
                <Send className="w-5 h-5" />
              </a>
              <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-400 hover:text-brand transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-brand transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} aria-label="Email" className="text-gray-400 hover:text-brand transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-sm">
              <li><LocalizedLink to="/about" className="hover:text-brand">{t('footer.aboutUs')}</LocalizedLink></li>
              <li><LocalizedLink to="/is-bigwin959-legit" className="hover:text-brand">{t('footer.isLegit')}</LocalizedLink></li>
              <li><LocalizedLink to="/guides" className="hover:text-brand">{t('footer.guides')}</LocalizedLink></li>
              <li><LocalizedLink to="/bonuses" className="hover:text-brand">{t('footer.promotions')}</LocalizedLink></li>
              <li><LocalizedLink to="/app-download" className="hover:text-brand">{t('footer.appDownload')}</LocalizedLink></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.contactUs')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={CONTACT_INFO.livechat} target="_blank" rel="noopener noreferrer" className="hover:text-brand flex items-center gap-2">
                  <Headphones className="w-4 h-4" /> {t('footer.liveChat')}
                </a>
              </li>
              <li>
                <a href={CONTACT_INFO.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-brand flex items-center gap-2">
                  <Send className="w-4 h-4" /> {t('footer.telegram')}
                </a>
              </li>
              <li>
                <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-brand flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" /> {t('footer.whatsapp')}
                </a>
              </li>
              <li>
                <LocalizedLink to="/contact" className="hover:text-brand">{t('footer.viewAllContact')}</LocalizedLink>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.securePayments')}</h4>
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: 'Bkash', icon: 'https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767001772/payment-bkash.png' },
                { name: 'Nagad', icon: 'https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767001773/payment-nagad.png' },
                { name: 'Rocket', icon: 'https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767001774/payment-rocket.png' },
                { name: 'Upay', icon: 'https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767001774/payment-upay.png' },
                { name: 'USDT', icon: 'https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767001775/payment-usdt.png' },
                { name: 'Bitcoin', icon: 'https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767001772/payment-bitcoin.png' }
              ].map(p => (
                <div key={p.name} className="bg-gray-800 rounded-lg p-2 flex items-center justify-center hover:bg-gray-700 transition-colors" title={p.name}>
                  <img
                    src={p.icon}
                    alt={p.name}
                    title={p.name}
                    className="h-6 w-auto object-contain"
                    width="48"
                    height="24"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const textSpan = document.createElement('span');
                        textSpan.className = 'text-xs text-gray-300';
                        textSpan.textContent = p.name;
                        parent.appendChild(textSpan);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <h4 className="text-white font-semibold mb-4 text-center md:text-left">{t('footer.gameProviders')}</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 text-xs">
            <LocalizedLink to="/providers/exchange-sports" className="hover:text-brand transition-colors">Exchange Sports</LocalizedLink>
            <LocalizedLink to="/providers/ibc-sports" className="hover:text-brand transition-colors">IBC Sports (SABA)</LocalizedLink>
            <LocalizedLink to="/providers/sbo-sports" className="hover:text-brand transition-colors">SBO Sports</LocalizedLink>
            <LocalizedLink to="/providers/pragmatic" className="hover:text-brand transition-colors">Pragmatic Play</LocalizedLink>
            <LocalizedLink to="/providers/jili" className="hover:text-brand transition-colors">JILI Gaming</LocalizedLink>
            <LocalizedLink to="/providers/jdb" className="hover:text-brand transition-colors">JDB Gaming</LocalizedLink>
            <LocalizedLink to="/providers/fc" className="hover:text-brand transition-colors">FC Gaming (Fa Chai)</LocalizedLink>
            <LocalizedLink to="/providers/bng" className="hover:text-brand transition-colors">BNG (Booongo)</LocalizedLink>
            <LocalizedLink to="/providers/spribe" className="hover:text-brand transition-colors">Spribe (Aviator)</LocalizedLink>
            <LocalizedLink to="/providers/pgsoft" className="hover:text-brand transition-colors">PG Soft</LocalizedLink>
            <LocalizedLink to="/providers/bt" className="hover:text-brand transition-colors">BT Gaming</LocalizedLink>
            <LocalizedLink to="/providers/evolution-gaming" className="hover:text-brand transition-colors">Evolution Gaming</LocalizedLink>
            <LocalizedLink to="/providers/sa-gaming" className="hover:text-brand transition-colors">SA Gaming</LocalizedLink>
            <LocalizedLink to="/providers/sexy-gaming" className="hover:text-brand transition-colors">Sexy Gaming (AE Sexy)</LocalizedLink>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-gray-800 text-center text-xs">
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

const StickyCTA: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-3 z-40 flex gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.5)]">
      <a
        href={OFFICIAL_DOMAIN}
        className="flex-1 bg-brand text-black font-bold py-3 px-4 rounded-lg text-center shadow-lg active:scale-95 transition-transform"
      >
        Login
      </a>
      <LocalizedLink
        to="/app-download"
        className="flex-1 bg-gray-800 text-white font-bold py-3 px-4 rounded-lg text-center border border-gray-700 flex items-center justify-center gap-2 active:scale-95 transition-transform"
      >
        <Download className="w-4 h-4" /> App
      </LocalizedLink>
    </div>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};
