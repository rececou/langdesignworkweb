'use client';

import SeoMeta from '@/components/SeoMeta';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useContactModal } from '@/components/ContactModal';
import { useState, useRef, useEffect } from 'react';

export default function AiCreativityBlogPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "How Can AI and Creativity Revolutionize Learning?",
    description: "Reflection on the future of education, discover how Liliane Lang and Elizabeth Lang used AI to create a smart device for seniors.",
    image: "https://www.langdesignwork.com/hubfs/REME-1.png",
    author: {
      "@type": "Person",
      name: "Liliane Xiaoxu Lang",
    },
    publisher: {
      "@type": "Organization",
      name: "LangDesignWork",
      logo: { "@type": "ImageObject", url: "https://www.langdesignwork.com/hubfs/LangDesignWorkLogo.svg" },
    },
    datePublished: "2024-12-01",
    dateModified: "2024-12-01",
    mainEntityOfPage: "https://www.langdesignwork.com/en/home/blog/ai-creativity-learning",
  };

  return (
    <>
      <SeoMeta
        title="How Can AI and Creativity Revolutionize Learning?"
        description="Reflection on the future of education, discover how Liliane Lang and Elizabeth Lang used AI to create a smart device for seniors."
        ogImage="/images/og-blog-ai-learning.png"
        canonical="https://www.langdesignwork.com/en/home/blog/ai-creativity-learning"
        twitterCard="summary"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Header locale="en" />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
          <div className="absolute top-32 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-indigo-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <Link href="/en/home/blog" className="text-sm text-gray-300 hover:text-white mb-6 inline-flex items-center gap-1 transition-colors">
            <span>←</span> Back to Blog
          </Link>
          <div className="flex gap-2 mb-4">
            <span className="text-xs bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full font-medium">AI and Creativity</span>
            <span className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full font-medium">Critical Thinking</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            How Can AI and Creativity<br />Revolutionize Learning?
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-indigo-400/50">
              <Image
                src="/images/author-qian-liu.jpg"
                alt="Qian Liu"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-sm">Qian Liu</p>
              <p className="text-sm text-gray-400">November 14, 2025</p>
            </div>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
            When Liliane Lang and Elizabeth Lang embarked on their REME project, it wasn't about winning an award — it was about answering a fundamental question: How can technology serve our community?
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

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">The Value of Learning By Taking Action</h2>

            <p>
              When Liliane Lang and Elizabeth Lang embarked on their REME project, it wasn't about winning an award — it was about answering a fundamental question: <strong>How can technology serve our community?</strong>
            </p>

            <p>
              Their project, the REME smart home device, which earned recognition from the 2024 Global Technovation Girls Competition, is a great case for how modern education could operate. It wasn't taught in a textbook — it was learned through action. The greatest value came from connecting abstract knowledge (like coding and machine learning) to tangible, positive social impact.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8">The Power of Small Steps and Empathy</h3>

            <p>
              The journey of the REME project begins with simple observation. The need for REME stemmed from recognizing the growing elderly demographic in Hong Kong and the challenges faced by seniors living alone.{' '}
              <a href="https://datastory.hkbu.edu.hk/2023/budget2023" target="_blank" rel="noopener noreferrer" className="text-[#FF6B6B] hover:underline">
                Hong Kong government projections
              </a>{' '}
              indicate the elderly demographic is set to reach 31% by 2039.
            </p>

            {/* Video 1: REME Story */}
            <div className="my-8 not-prose">
              <InteractiveVideoCard
                src="/ai-creativity-learning.mp4"
                poster="/ai-creativity-learning-thumb.jpg"
                caption="REME Story"
                label="Story"
                accent="from-indigo-500 to-blue-500"
              />
            </div>

            <p>
              Liliane and Elizabeth didn't start with a complex AI model — they broke down the problem into manageable steps:
            </p>

            {/* Process steps card */}
            <div className="my-8 not-prose">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">The REME Journey</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <ProcessStep number="1" title="Identify" desc="Loneliness, forgotten daily essentials, medication" icon="🔍" />
                  <ProcessStep number="2" title="Design" desc="A companion device for seniors" icon="💡" />
                  <ProcessStep number="3" title="Build" desc="Coding, NLP, easy-to-use interface" icon="🛠️" />
                </div>
              </div>
            </div>

            <p>
              This learn-while-doing approach ensured that every technical hurdle, from implementing Natural Language Processing (NLP) for voice commands to designing a simple interface, was overcome out of necessity, not abstract assignment. The REME project forced the girls to use both creative and critical thinking during their creation journey.
            </p>

            {/* Video 2: REME Research */}
            <div className="my-8 not-prose">
              <InteractiveVideoCard
                src="/ai-creativity-research.mp4"
                poster="/ai-creativity-research-thumb.jpg"
                caption="REME Research"
                label="Research"
                accent="from-purple-500 to-pink-500"
              />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mt-10">Looking Forward: The Future of Learning</h3>

            <p>
              The greatest reward of the Technovation process was watching them connect abstract knowledge to tangible, positive social impact. They learned coding, machine learning, and hardware integration, all while keeping their focus firmly on helping others.
            </p>

            <p>
              Elizabeth and Liliane say that the deepest satisfaction was applying creative problem-solving to a genuine social need — they were hopeful their idea could be beneficial. I can't help but wonder: could such empathetic solutions become standard in every household?
            </p>

            <p>
              REME is just one prototype, but it reminds me that innovation guided by compassion creates a sustainable, inclusive future. As the world of technology rapidly evolves, the principles of encouraging independence, critical analysis, and empathy remain paramount in preparing the younger generation for the challenges of tomorrow.
            </p>

            <p className="text-sm text-gray-500">
              Relevant discussions and resources:{' '}
              <a href="https://westhealthmosaic.com/articles/aging-well-with-ai-empowering-care-through-innovation" target="_blank" rel="noopener noreferrer" className="text-[#FF6B6B] hover:underline">Aging Well with AI</a>{' '}
              |{' '}
              <a href="https://forbes.com/councils/forbestechcouncil/2024/01/30/ai-to-benefit-humanity-innovations-in-senior-care/" target="_blank" rel="noopener noreferrer" className="text-[#FF6B6B] hover:underline">Forbes: AI in Senior Care</a>.
            </p>

            {/* Video 3: REME Learning */}
            <div className="my-8 not-prose">
              <InteractiveVideoCard
                src="/ai-creativity-technical.mp4"
                poster="/ai-creativity-technical-thumb.jpg"
                caption="REME Learning"
                label="Technical"
                accent="from-blue-500 to-cyan-500"
              />
            </div>

            {/* Let's Connect */}
            <div className="mt-16 pt-10 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Connect</h3>
              <p className="text-gray-600 mb-6">
                Interested in what you see or want to exchange ideas? Follow me or send me a message to connect! I'll be sharing more blogs as I progress.
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

function InteractiveVideoCard({
  src,
  poster,
  caption,
  label,
  accent,
}: {
  src: string;
  poster: string;
  caption: string;
  label: string;
  accent: string;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('ended', () => setIsPlaying(false));
    }
  }, []);

  if (isPlaying) {
    return (
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
        <video
          ref={videoRef}
          controls
          autoPlay
          className="w-full"
          poster={poster}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {caption && (
          <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
            <p className="text-sm text-gray-500 italic text-center">{caption}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group border border-gray-100"
      onClick={() => setIsPlaying(true)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        {/* Top accent line */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accent} z-10`} />
        {/* Poster image */}
        <Image
          src={poster}
          alt={caption}
          fill
          className={`object-cover transition-transform duration-500 ${hovered ? 'scale-105' : 'scale-100'}`}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors flex items-center justify-center">
          {/* Play button */}
          <div className={`w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${hovered ? 'scale-110' : ''}`}>
            <svg className="w-10 h-10 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        {/* Label badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">▶ {label}</span>
        </div>
      </div>
      {caption && (
        <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
          <p className="text-sm text-gray-500 italic text-center">{caption}</p>
        </div>
      )}
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
      className="bg-white rounded-xl p-4 border border-indigo-100 hover:border-indigo-300 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`text-2xl mb-2 transition-transform duration-300 ${hovered ? 'scale-125' : ''}`}>{icon}</div>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-bold">Step {number}</span>
        <h4 className={`font-bold text-sm transition-colors ${hovered ? 'text-indigo-700' : 'text-gray-900'}`}>{title}</h4>
      </div>
      <p className="text-xs text-gray-600">{desc}</p>
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
