import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title = 'JK Interiors - Premium Interior Design Services',
  description = 'Transform your space with JK Interiors. Expert interior design services for residential and commercial spaces. Luxury designs, professional consultation, and exceptional craftsmanship.',
  keywords = 'interior design, home decor, luxury interiors, residential design, commercial interiors, interior designer, home renovation, space planning, interior decoration',
  image = '/og-image.jpg',
  url = 'https://www.thejkinteriors.com',
  canonicalUrl = null
}) => {
  const location = useLocation();
  const baseUrl = 'https://www.thejkinteriors.com';
  
  // Construct canonical URL
  const finalCanonicalUrl = canonicalUrl || `${baseUrl}${location.pathname}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="JK Interiors" />
      <meta name="robots" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}${image}`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={finalCanonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${baseUrl}${image}`} />

      {/* Additional Meta Tags for Duplicate Content Prevention */}
      <meta property="og:site_name" content="JK Interiors" />
      <meta name="twitter:site" content="@jkinteriors" />
      <meta name="twitter:creator" content="@jkinteriors" />
      
      {/* Language and Region */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="hi_IN" />
    </Helmet>
  );
};

export default SEO; 