import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { SEOMetadata } from '../types';

interface SEOProps {
  metadata: SEOMetadata;
}

const SEO: React.FC<SEOProps> = ({ metadata }) => {
  const { i18n } = useTranslation();
  const baseTitle = metadata.title || '';
  const fullTitle = baseTitle.includes('Bigwin959')
    ? baseTitle
    : `${baseTitle} | Bigwin959`;
  const keywords = Array.isArray(metadata.keywords)
    ? metadata.keywords.join(', ')
    : (typeof metadata.keywords === 'string'
      ? metadata.keywords
      : 'Bigwin959, Online Casino, Bangladesh, Myanmar, Online Betting, Cricket Betting Site, Casino Guide');
  const ogImage = metadata.ogImage || 'https://bw959image.netlify.app/seo-og1.png';
  const canonicalUrl = metadata.canonicalUrl || window.location.href;
  const ogType = metadata.ogType || 'website';

  const localeMap: Record<string, string> = {
    en: 'en_US',
    bn: 'bn_BD',
    mm: 'my_MM'
  };
  const currentLang = i18n.language;
  const currentLocale = localeMap[currentLang] || 'en_US';
  const baseUrl = `${window.location.origin}${window.location.pathname.toLowerCase()}`;

  // Each language version should canonical to itself to be indexed correctly
  // Allow override from metadata if provided
  const pageCanonicalUrl = metadata.canonicalUrl || (currentLang === 'en'
    ? baseUrl
    : `${baseUrl}?lang=${currentLang}`);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={keywords} />
      {metadata.author && <meta name="author" content={metadata.author} />}

      {/* Robots */}
      {metadata.noindex && <meta name="robots" content="noindex, nofollow" />}
      {!metadata.noindex && <meta name="robots" content="index, follow" />}
      <meta name="googlebot" content={metadata.noindex ? "noindex, nofollow" : "index, follow"} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={pageCanonicalUrl} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Bigwin959 Guide" />
      <meta property="og:locale" content={currentLocale} />

      {/* Article Specific OG Tags */}
      {ogType === 'article' && metadata.publishedTime && (
        <meta property="article:published_time" content={metadata.publishedTime} />
      )}
      {ogType === 'article' && metadata.modifiedTime && (
        <meta property="article:modified_time" content={metadata.modifiedTime} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={pageCanonicalUrl} />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={pageCanonicalUrl} />

      {/* Alternate Languages for SEO (Hreflang) */}
      <link rel="alternate" hrefLang="en" href={`${baseUrl}?lang=en`} />
      <link rel="alternate" hrefLang="bn" href={`${baseUrl}?lang=bn`} />
      <link rel="alternate" hrefLang="x-default" href={baseUrl} />

      {/* JSON-LD Structured Data */}
      {metadata.schema && (
        <script type="application/ld+json">
          {JSON.stringify(metadata.schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
