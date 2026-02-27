import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import ContactSection from '../components/ContactSection';
import { BRAND_NAME } from '../constants';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        metadata={{
          title: t('contact.seo.title', { brand: BRAND_NAME }),
          description: t('contact.seo.description', { brand: BRAND_NAME }),
          keywords: ['bigwin959 support', 'customer service', 'contact bigwin959', 'help', 'telegram support', 'whatsapp support', 'live chat'],
          canonicalUrl: 'https://bigwin959.vip/contact',
          ogType: 'website',
          publishedTime: '2025-01-01T00:00:00+06:00',
          modifiedTime: new Date().toISOString(),
          author: 'Bigwin959 Guide',
          schema: {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": `Contact ${BRAND_NAME} Support`,
            "description": "24/7 Customer Support for Bigwin959 players.",
            "mainEntity": {
              "@type": "Organization",
              "name": BRAND_NAME,
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "availableLanguage": ["English", "Bengali", "Burmese"],
                  "email": "support@bigwin959.vip"
                }
              ]
            }
          }
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-brand/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <Trans
              i18nKey="contact.hero.title"
              values={{ brand: BRAND_NAME }}
              components={{ 1: <span className="text-brand" /> }}
            />
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            {t('contact.hero.desc')}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
};

export default ContactPage;
