import React from 'react';
import { NavLink } from 'react-router-dom';
import { LocalizedLink } from './LocalizedLink';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaText = "Play Now", ctaLink = "/", backgroundImage }) => {
  return (
    <section className="relative bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-30">
        <img
          src={backgroundImage || "https://res.cloudinary.com/dmyocpyxd/image/upload/f_auto,q_auto:eco/v1767689040/HOME-PAGE-IMAGES.png"}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-lg">
          {title}
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto drop-shadow-md">
          {subtitle}
        </p>
        <div className="flex justify-center gap-4">
          <LocalizedLink
            to={ctaLink}
            className="bg-brand hover:bg-brand-dark text-black font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105"
          >
            {ctaText}
          </LocalizedLink>
        </div>
      </div>
    </section>
  );
};

export const ContentBlock: React.FC<{ title: string; children: React.ReactNode; id?: string }> = ({ title, children, id }) => (
  <section id={id} className="py-12 border-b border-gray-800 last:border-0">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-brand pl-4">{title}</h2>
      <div className="prose prose-invert prose-lg text-gray-300">
        {children}
      </div>
    </div>
  </section>
);

export const InfoCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-sm hover:border-brand transition-colors">
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <div className="text-gray-400">
      {children}
    </div>
  </div>
);

const stripTags = (str: string) => str.replace(/<[^>]*>?/gm, '');

export const Breadcrumbs: React.FC<{ items: { label: string; path: string }[] }> = ({ items }) => {
  const { t } = useTranslation();
  return (
    <nav className="flex py-4 text-sm text-gray-500 max-w-7xl mx-auto px-4">
      <LocalizedLink to="/" className="hover:text-brand">{t('nav.home')}</LocalizedLink>
      {items.map((item, index) => (
        <React.Fragment key={item.path}>
          <ChevronRight className="w-4 h-4 mx-2" />
          <LocalizedLink
            to={item.path}
            className={`${index === items.length - 1 ? 'text-brand font-medium' : 'hover:text-brand'}`}
          >
            {stripTags(item.label)}
          </LocalizedLink>
        </React.Fragment>
      ))}
    </nav>
  );
};
