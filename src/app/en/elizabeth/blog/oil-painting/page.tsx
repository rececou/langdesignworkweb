'use client';

import SeoMeta from '@/components/SeoMeta';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useContactModal } from '@/components/ContactModal';
import { useState } from 'react';

export default function OilPaintingBlogPage() {
  return (
    <>
      <SeoMeta
        title="How Did I Do My First Oil Painting: From Canvas to Creation | LangDesignWork"
        description="Elizabeth Xiaoyue Lang shares her journey of creating her first oil painting — a portrait of a little boy inspired by classes at the Hong Kong Art School."
        ogImage="/images/og-elizabeth.png"
        canonical="https://www.langdesignwork.com/en/elizabeth/blog/oil-painting"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: 'How Did I Do My First Oil Painting: From Canvas to Creation',
            author: {
              '@type': 'Person',
              name: 'Elizabeth Xiaoyue Lang',
              url: 'https://www.langdesignwork.com/elizabeth',
            },
            datePublished: '2025-11-02',
            publisher: {
              '@type': 'Organization',
              name: 'LangDesignWork',
              url: 'https://www.langdesignwork.com',
            },
            description: 'Elizabeth Xiaoyue Lang shares her journey of creating her first oil painting at the Hong Kong Art School.',
            mainEntityOfPage: 'https://www.langdesignwork.com/en/elizabeth/blog/oil-painting',
          }),
        }}
      />
      <Header locale="en" />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-amber-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
          <div className="absolute top-32 right-20 w-3 h-3 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-amber-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <Link href="/en/home/blog" className="text-sm text-gray-300 hover:text-white mb-6 inline-flex items-center gap-1 transition-colors">
            <span>←</span> Back to Blog
          </Link>
          <div className="flex gap-2 mb-4">
            <span className="text-xs bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full font-medium">Oil Painting</span>
            <span className="text-xs bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full font-medium">Creative Journey</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            How Did I Do My First Oil Painting:<br />From Canvas to Creation
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-amber-400/50">
              <Image
                src="/images/author-elizabeth.jpg"
                alt="Elizabeth Xiaoyue Lang"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-sm">Elizabeth Xiaoyue Lang</p>
              <p className="text-sm text-gray-400">November 2, 2025</p>
            </div>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
            A portrait of a little boy, inspired by classes at the Hong Kong Art School — and a ton of advice from great-uncle Thomas, an amazing artist.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Social share */}
          <div className="flex gap-4 mb-10 pb-8 border-b border-gray-200">
            <a href="https://www.facebook.com/profile.php?id=61582186330903" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.instagram.com/langdesignwork/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/langdesignwork/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>

          {/* Featured Image — interactive */}
          <FeaturedImageCard
            src="/boy-oil-painting.jpg"
            alt="Elizabeth's first oil painting - portrait of a little boy"
          />

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mt-10">
            <h2 className="text-2xl font-bold text-gray-900">From Canvas to Creation</h2>

            <p>
              My first oil painting was a portrait of a little boy, and I got inspired after starting my classes at the Hong Kong Art School. I was very keen to learn the techniques, I also received a ton of advice from my great-uncle Thomas, who's an amazing artist!
            </p>

            <p>
              I started with sketching basic shapes to get the rough proportions, then used yellow ochre and a lot of oil to create the underpaint. I mixed in a lot of skin tones (even more so during the painting process) and started with the face and skin, then the fabric, then the background, and then the hair. My skill on fabric and hair definitely needs improvement, but that's for another time.
            </p>

            {/* Process steps */}
            <div className="my-8 not-prose">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">The Painting Process</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <ProcessStep number="1" title="Sketch" desc="Basic shapes for rough proportions" icon="✏️" />
                  <ProcessStep number="2" title="Underpaint" desc="Yellow ochre + lots of oil" icon="🎨" />
                  <ProcessStep number="3" title="Face & Skin" desc="Mixed skin tones, started here first" icon="👤" />
                  <ProcessStep number="4" title="Details" desc="Fabric, background, then hair" icon="🖌️" />
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10">The Best Part</h2>

            <p>
              To me, the best part was painting the face, that's why I started with it. Painting the textures, bumps, and asymmetrical features and understanding undertones is what I love about painting faces, unlike legs or arms. The most challenging parts were the fabric and the hair. I'm used to drawing faces and have a fairly good understanding of them and so it comes easier to me. However I still have much to learn.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10">Behind The Scenes Video</h2>

            <p>
              I made a video to show the behind the scenes work for this painting. You can see the process, and everything in between! I hope you enjoy watching it as much as I enjoyed creating the painting.
            </p>

            <div className="my-8 not-prose">
              <YouTubeVideo videoId="1JkgOeQgKdM" title="Behind the Scenes: From Canvas to Creation" />
            </div>

            {/* Let's Connect */}
            <div className="mt-16 pt-10 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Connect</h3>
              <p className="text-gray-600 mb-6">
                Interested in what you see? I'll be sharing more blogs as I progress. Follow me or send me a message to connect, and I'll share my work as soon as I can! Stay creative! 🌟
              </p>
              <ContactButton />
            </div>
          </div>
        </div>
      </article>

      <Footer locale="en" />
    </>
  );
}

/* ── Components ── */

function FeaturedImageCard({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 z-10" />
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-transform duration-500 ${hovered ? 'scale-105' : 'scale-100'}`}
        priority
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-300" />
      {/* Caption overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-sm font-medium">{alt}</p>
      </div>
    </div>
  );
}

function ProcessStep({
  number,
  title,
  desc,
  icon,
}: {
  number: string;
  title: string;
  desc: string;
  icon: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-xl p-4 border border-amber-100 hover:border-amber-300 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`text-2xl mb-2 transition-transform duration-300 ${hovered ? 'scale-125' : ''}`}>{icon}</div>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-bold">Step {number}</span>
        <h4 className={`font-bold text-sm transition-colors ${hovered ? 'text-amber-700' : 'text-gray-900'}`}>{title}</h4>
      </div>
      <p className="text-xs text-gray-600">{desc}</p>
    </div>
  );
}

function YouTubeVideo({ videoId, title }: { videoId: string; title: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);

  if (isPlaying) {
    return (
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    );
  }

  return (
    <div
      className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
      onClick={() => setIsPlaying(true)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail with proper URL */}
      <img
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover"
      />
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center`}>
        {/* Play button */}
        <div className={`w-20 h-20 bg-red-600/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${hovered ? 'scale-110 shadow-red-500/50' : ''}`}>
          <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      {/* Label */}
      <div className="absolute top-4 left-4">
        <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">▶ Behind the Scenes</span>
      </div>
    </div>
  );
}

function ContactButton() {
  const { open } = useContactModal();

  return (
    <button
      onClick={open}
      className="bg-[#FF6B6B] text-white px-6 py-3 rounded-lg hover:bg-[#ff5252] transition-all hover:scale-105 font-medium"
    >
      Send a message →
    </button>
  );
}
