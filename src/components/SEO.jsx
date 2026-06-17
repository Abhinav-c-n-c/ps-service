import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://psservices.in';
const SITE_NAME = 'PS Services';
const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/img/og-image.png`;

/**
 * Reusable SEO component — injects <head> meta tags + JSON-LD schema(s) per page.
 *
 * Props:
 *  title         – Page <title>
 *  description   – Meta description (max ~155 chars recommended)
 *  keywords      – Comma-separated keyword string
 *  canonical     – Canonical URL path, e.g. "/about"
 *  ogImage       – OG image URL (defaults to site og-image)
 *  schemas       – Array of JSON-LD schema objects to inject
 */
const SEO = ({
  title,
  description,
  keywords,
  canonical = '/',
  ogImage = DEFAULT_OG_IMAGE,
  schemas = [],
}) => {
  const fullTitle = `${title} | PS Services – Staffing & Recruitment Agency India`;
  const canonicalUrl = `${SITE_URL}${canonical}`;

  return (
    <Helmet>
      {/* Basic */}
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Schemas */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
