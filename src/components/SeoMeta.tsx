'use client';

import { useEffect } from 'react';

interface SeoMetaProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: string;
  canonical?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

export default function SeoMeta({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage = '/images/og-home.png',
  ogImageAlt,
  ogType = 'website',
  canonical,
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
}: SeoMetaProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setProp = (name: string, content: string) => setMeta(name, content, 'property');

    setMeta('description', description);
    setMeta('robots', 'index, follow');
    setProp('og:title', ogTitle || title);
    setProp('og:description', ogDescription || description);
    setProp('og:type', ogType);
    setProp('og:image', ogImage);
    setProp('og:site_name', 'LangDesignWork');
    if (ogImageAlt) {
      setProp('og:image:alt', ogImageAlt);
    }

    // Twitter Card
    setMeta('twitter:card', twitterCard);
    setMeta('twitter:title', twitterTitle || ogTitle || title);
    setMeta('twitter:description', twitterDescription || ogDescription || description);
    setMeta('twitter:image', twitterImage || ogImage);

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }
  }, [title, description, ogTitle, ogDescription, ogImage, ogImageAlt, ogType, canonical, twitterCard, twitterTitle, twitterDescription, twitterImage]);

  return null;
}
