'use client';

import SeoMeta from '@/components/SeoMeta';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useContactModal } from '@/components/ContactModal';
import YouTubeVideo from '@/components/YouTubeVideo';
import { useState } from 'react';

export default function LilianePage() {
  return (
    <>
      <SeoMeta
        title="Liliane Xiaoxu Lang | Ideas & Prototyping | LangDesignWork"
        description="Join Liliane Xiaoxu Lang on the Discover Channel! Explore debates, creative projects, and inspirational insights."
        ogTitle="Liliane Xiaoxu Lang | Ideas & Prototyping | LangDesignWork"
        ogDescription="Join Liliane Xiaoxu Lang on the Discover Channel! Explore debates, creative projects, and inspirational insights."
        ogImage="/images/og-liliane.png"
        ogImageAlt="Liliane Xiaoxu Lang Discover Channel – creativity, debates, and insights"
        canonical="https://www.langdesignwork.com/liliane"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Person',
                name: 'Liliane Xiaoxu Lang',
                jobTitle: 'Creator & Prototyper',
                description: 'Liliane Xiaoxu Lang explores creativity and innovation through a process of discovery, creation, and self-reflection, combining hands-on experimentation to generate insights.',
                image: 'https://www.langdesignwork.com/images/og-liliane.png',
                url: 'https://www.langdesignwork.com/liliane',
                affiliation: {
                  '@type': 'Organization',
                  name: 'LangDesignWork',
                },
              },
              {
                '@type': 'VideoObject',
                '@id': 'https://www.langdesignwork.com/liliane#video',
                name: 'Liliane Lang Discover Channel, AI powered prototype',
                description: 'Liliane Xiaoxu Lang explores creativity, AI, and design through projects like the REME smart home prototype, in collaboration with Elizabeth Xiaoyue Lang.',
                thumbnailUrl: 'https://www.langdesignwork.com/images/REME-1.png',
                uploadDate: '2025-10-20T00:00:00+08:00',
                duration: 'PT2M28S',
                contentUrl: 'https://www.youtube.com/watch?v=nZ6znfTmR3g',
                embedUrl: 'https://www.youtube.com/embed/nZ6znfTmR3g',
                hasPart: {
                  '@type': 'CreativeWork',
                  name: 'Video Transcript',
                  text: "Welcome to Lang Design Work's Discover Channel. In this video, Liliane Xiaoxu Lang shares how she developed REME with Elizabeth Xiaoyue Lang. REME is a smart home device designed to help seniors live more independently. It provides a dependable, easy-to-use solution for managing daily routines and responding to emergencies.",
                },
                publisher: {
                  '@type': 'Organization',
                  name: 'LangDesignWork',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://www.langdesignwork.com/images/og-home.png',
                  },
                },
              },
              {
                '@type': 'ImageObject',
                '@id': 'https://www.langdesignwork.com/liliane#hero-image',
                url: 'https://www.langdesignwork.com/images/lili-remake.jpg',
                caption: 'Liliane Xiaoxu Lang exploring creative project ideas',
                description: 'The main visual for Lang Design Work Discover Channel featuring creative projects and inspirational insights.',
                representativeOfPage: true,
                publisher: { '@type': 'Organization', name: 'LangDesignWork' },
              },
              {
                '@type': 'ImageObject',
                '@id': 'https://www.langdesignwork.com/liliane#reme-image',
                url: 'https://www.langdesignwork.com/images/lili-remake.jpg',
                caption: 'REME Smart Home Prototype',
                description: 'REME AI-powered smart home prototype developed by Liliane Xiaoxu Lang and Elizabeth Xiaoyue Lang.',
                publisher: { '@type': 'Organization', name: 'LangDesignWork' },
              },
              {
                '@type': 'ImageObject',
                '@id': 'https://www.langdesignwork.com/liliane#reflections-image',
                url: 'https://www.langdesignwork.com/images/lili-reflections.jpg',
                caption: 'Liliane Xiaoxu Lang Reflections',
                description: 'Liliane Xiaoxu Lang reflects on her creative projects, sharing inspiration and lessons learned.',
                author: { '@type': 'Person', name: 'Liliane Xiaoxu Lang' },
                publisher: { '@type': 'Organization', name: 'LangDesignWork' },
              },
              {
                '@type': 'ImageObject',
                '@id': 'https://www.langdesignwork.com/liliane#ideas-image',
                url: 'https://www.langdesignwork.com/images/lili-ideas.jpg',
                caption: "Liliane's creative brainstorming session",
                description: 'Liliane Xiaoxu Lang shares her visual ideas and creative process in this concept sketching.',
                publisher: { '@type': 'Organization', name: 'LangDesignWork' },
              },
              {
                '@type': 'ImageObject',
                '@id': 'https://www.langdesignwork.com/liliane#rugby-image',
                url: 'https://www.langdesignwork.com/images/lili-rugby.jpg',
                caption: 'Liliane Lang Discover Team Spirit Through Sport',
                description: 'Discovery is an activity — through teamwork and collaboration, Liliane Xiaoxu Lang explores how shared effort drives success.',
                author: { '@type': 'Person', name: 'Liliane Xiaoxu Lang' },
                publisher: { '@type': 'Organization', name: 'LangDesignWork' },
              },
              {
                '@type': 'WebPage',
                '@id': 'https://www.langdesignwork.com/liliane',
                url: 'https://www.langdesignwork.com/liliane',
                name: 'Liliane Xiaoxu Lang | Ideas & Prototyping | LangDesignWork',
                description: 'Explore Liliane Xiaoxu Lang\'s Discover Channel, a space for debate, inspirational ideas, and insights.',
                primaryImageOfPage: { '@id': 'https://www.langdesignwork.com/liliane#hero-image' },
                inLanguage: 'en',
              },
            ],
          }),
        }}
      />
      <Header locale="en" />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-red-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-2 h-2 bg-red-400 rounded-full animate-pulse" />
          <div className="absolute top-32 right-20 w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-red-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <p className="text-sm text-red-400 uppercase tracking-widest mb-2">OUR CREATORS</p>
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">Liliane Lang Discover Channel</h1>
          <p className="text-xl text-gray-300 max-w-xl mb-8">
            From AI prototypes to handmade crafts — a world of ideas in motion.
          </p>
          <HeroCTAs />
        </div>
      </section>

      {/* Creator intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Liliane Xiaoxu Lang</h2>
          <p className="text-gray-600 max-w-2xl mb-6">
            From AI prototypes to handmade crafts — a world of ideas in motion. Jump in, explore, and share your perspective.
          </p>
        </div>
      </section>

      {/* Collaboration with Elizabeth — interactive card */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <InteractiveImageCard
              src="/images/lili-remake.jpg"
              alt="Liliane Xiaoxu Lang AI prototype REME Smart Home Device"
              accent="from-red-500 to-orange-500"
            />
            <div>
              <h3 className="text-xl font-bold mb-2">Collaboration with Elizabeth</h3>
              <p className="text-sm text-gray-500 mb-2">
                <strong>AI-powered prototype</strong>
              </p>
              <p className="text-gray-600 mb-6">
                Developed with my sister Elizabeth Xiaoyue Lang, our REME smart home device won the 2024{' '}
              <a href="https://technovationchallenge.org/?utm_source=website&utm_medium=content&utm_campaign=technovation" target="_blank" rel="noopener noreferrer" className="text-[#FF6B6B] hover:underline">Global Technovation Girls</a>{' '}
              Competition Semi-finalist award (Junior Division).
              </p>
              <Link href="/en/home/blog/ai-creativity-learning?utm_source=website&utm_medium=button&utm_campaign=button-explore" className="text-[#FF6B6B] hover:text-[#ff5252] font-medium inline-flex items-center gap-1 group">
                Explore more
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* REME section — interactive card */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 group">
            <h2 className="text-2xl font-bold mb-4 group-hover:text-red-600 transition-colors">REME</h2>
            <p className="text-gray-600 mb-4">
              REME is a smart home device designed to help seniors live more independently.
              It provides a dependable, easy-to-use solution for managing daily routines and responding to emergencies.
              As the global senior population grows, we hope this idea can make a difference.
            </p>
            <p className="text-gray-600 mb-6">
              See how it works in our YouTube video.
            </p>
            <div className="max-w-3xl">
              <YouTubeVideo
                videoId="nZ6znfTmR3g"
                thumbnail="/images/reme-video-thumb.png"
                title="REME Smart Home Device | Technovation Semi-Finalist | Liliane Lang"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Through My Lens — interactive card */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Through My Lens: Liliane's Reflections</h3>
              <p className="text-gray-600 mb-6">
                I am exploring how to use AI as a creative tool while staying aware of its limitations and costs - both to our society and our planet.
              </p>
            </div>
            <InteractiveImageCard
              src="/images/lili-reflections.jpg"
              alt="Liliane Reflections on AI usage"
              accent="from-orange-500 to-yellow-500"
              flipOrder
            />
          </div>
        </div>
      </section>

      {/* The AI Paradox */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">
              <strong>The AI Paradox</strong>
            </h2>
            <p className="text-sm text-gray-400 mt-1">October 2025</p>
          </div>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>
              AI is a powerful tool in these modern days, where it helps us create generated images, videos, content and calculations.
              But as we continue to overuse this tool, we slowly rely on it, depending on it, to serve us with competing simple tasks
              we could've easily done without it. And now, with well-known companies using this tool by including it in their products
              without us noticing. As AI gradually becomes a part of our daily lives, whether we like it or not, we have to know the
              consequences of using this powerful tool.
            </p>
            <p>
              Did you know, every question or photo you send to AI uses often to about 0.26-3.5 millimeters of water per message?
              It uses billions of gallons of water each day instead of being used to assist people in need. This is due to the operation
              of its energy-intensive data centers. While AI is also being developed to help conserve water, its current and projected
              consumption raises significant environmental concerns, especially in regions already facing water scarcity.
            </p>
            <p>
              Performance processors used for AI generate immense heat. Data centers rely on large, water-based cooling systems,
              often evaporating millions of gallons of fresh water annually to regulate temperatures and prevent server damage.
            </p>
            <p>
              Now I'm not saying that AI is horrible and you should never use it again. It can be as helpful as it is harmful.
              I am just sharing my knowledge and the impacts AI has. Just keep what I said in mind for next time you think of
              using AI to generate some silly brain rot photo.
            </p>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Original: https://www.langdesignwork.com/discover
          </p>
        </div>
      </section>

      {/* Works — Interactive cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 mb-8">
            Here are a few of my works. My blog & gallery is still in progress, so stay tuned for more!
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Idea & Prototyping */}
            <InteractiveWorkCard
              src="/images/lili-ideas.jpg"
              alt="Liliane Xiaoxu Lang ideas"
              title="Idea & Prototyping"
              poem={
                <>
                  Brainstorming with Beth,<br />
                  Where wild ideas run,<br />
                  Some brilliant, some so so...<br />
                  The chaos is the fun.
                </>
              }
              accent="from-red-500 to-pink-500"
            />

            {/* Explore & Create */}
            <InteractiveWorkCard
              src="/images/lili-artwork-home.jpg"
              alt="Liliane Xiaoxu Lang artwork home"
              title="Explore & Create"
              poem={
                <>
                  Explore with my hands.<br />
                  Create with my heart.
                </>
              }
              accent="from-orange-500 to-yellow-500"
            />

            {/* Sports & Run */}
            <InteractiveWorkCard
              src="/images/lili-rugby.jpg"
              alt="Liliane Xiaoxu Lang rugby"
              title="Sports & Run"
              poem="All about the squad vibe."
              accent="from-yellow-500 to-green-500"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Let's Connect!</h2>
          <h3 className="text-xl mb-6">
            If you have a question, an insight or a topic you would like to discuss, I'd love to hear it from you!
          </h3>
          <ContactButton text="Send me a message →" />
        </div>
      </section>

      <Footer locale="en" />
    </>
  );
}

/* ── Interactive Components ── */

function InteractiveImageCard({
  src,
  alt,
  accent,
  flipOrder = false,
}: {
  src: string;
  alt: string;
  accent: string;
  flipOrder?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  const imageEl = (
    <div
      className={`relative rounded-xl overflow-hidden aspect-video group cursor-pointer transition-all duration-300 ${hovered ? 'shadow-lg -translate-y-1' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accent} z-10`} />
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-transform duration-500 ${hovered ? 'scale-110' : 'scale-100'}`}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {/* Overlay on hover */}
      <div className={`absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300`} />
    </div>
  );

  // flipOrder puts image on right
  return flipOrder ? (
    <>{imageEl}</>
  ) : (
    <>{imageEl}</>
  );
}

function InteractiveWorkCard({
  src,
  alt,
  title,
  poem,
  accent,
}: {
  src: string;
  alt: string;
  title: string;
  poem: React.ReactNode;
  accent: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-default group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`relative aspect-square overflow-hidden`}>
        {/* Top accent line */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accent} z-10`} />
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover transition-transform duration-500 ${hovered ? 'scale-110' : 'scale-100'}`}
        />
        {/* Hover overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      </div>
      <div className="p-6">
        <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${hovered ? 'text-[#FF6B6B]' : ''}`}>{title}</h3>
        <p className={`text-gray-600 text-sm italic transition-colors duration-300 ${hovered ? 'text-gray-800' : ''}`}>{poem}</p>
      </div>
    </article>
  );
}

function HeroCTAs() {
  const open = useContactModal((state) => state.open);
  return (
    <div className="flex gap-4">
      <Link
        href="/liliane-create"
        className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all hover:scale-105 font-medium border border-white/20"
      >
        See the work
      </Link>
      <button
        onClick={open}
        className="bg-[#FF6B6B] text-white px-6 py-3 rounded-lg hover:bg-[#ff5252] transition-all hover:scale-105 font-medium"
      >
        Partner with us
      </button>
    </div>
  );
}

function ContactButton({ text }: { text: string }) {
  const open = useContactModal((state) => state.open);
  return (
    <button
      onClick={open}
      className="inline-block bg-[#FF6B6B] text-white px-6 py-3 rounded hover:bg-[#ff5252] transition-all hover:scale-105 font-medium"
    >
      {text}
    </button>
  );
}
