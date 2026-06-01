'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useContactModal } from '@/components/ContactModal';
import { useState } from 'react';

const SITE_URL = "https://www.langdesignwork.com";
const PAGE_PATH = "/elizabeth";

export default function ElizabethPage() {
  return (
    <>
      {/* JSON-LD Person Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Elizabeth Xiaoyue Lang",
            url: `${SITE_URL}${PAGE_PATH}`,
            jobTitle: "Artist & Designer",
            description: "Explore the creative journey of Elizabeth Xiaoyue Lang, featuring artworks inspired by those around her and inviting you to discover more.",
          }),
        }}
      />

      <Header locale="en" />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
          <div className="absolute top-32 right-20 w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <p className="text-sm text-purple-400 uppercase tracking-widest mb-2">OUR CREATORS</p>
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">Designing Journey of Elizabeth Lang</h1>
          <p className="text-xl text-gray-300 max-w-xl mb-8">
            Colour, emotion, and form. Oil painting, illustration, and handmade design.
          </p>
          <div className="flex gap-4">
            <Link href="/elizabeth-custom-design" className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all hover:scale-105 font-medium border border-white/20">
              Explore Custom Design
            </Link>
            <ContactButton text="Partner with us" />
          </div>
        </div>
      </section>

      {/* Creator intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Elizabeth Xiaoyue Lang</h2>
          <p className="text-gray-600 max-w-2xl mb-6">
            Colour, emotion, and form. Oil painting, illustration, and handmade design — art that speaks before words do.
          </p>
        </div>
      </section>

      {/* Railway — interactive card */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <InteractiveImageCard
                src="/images/elizabeth-railway.jpg"
                alt="recycled materials railway UAL"
                accent="from-purple-500 to-indigo-500"
              />
              <div>
                <h3 className={`text-xl font-bold mb-2 transition-colors ${'group-hover:text-purple-600'}`}>Elizabeth Xiaoyue Railway</h3>
                <p className="text-gray-600 mb-4">
                  Designed during my time at{' '}
                  <a href="https://www.arts.ac.uk/study-at-ual/short-courses/stories/exploring-architecture-with-a-short-course-elizabeths-story" target="_blank" rel="noopener noreferrer" className="text-[#FF6B6B] hover:underline">Central Saint Martins College of Art</a>{' '}
                  in London in the summer of 2025.
                </p>
                <p className="text-gray-600">
                  This railway station was primarily constructed from cardboard and recycled materials. I really enjoyed learning architectural concepts while building this prototype.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Silent Eyes — interactive card */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 group">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <InteractiveImageCard
                src="/images/elizabeth-silent-eyes.jpg"
                alt="water colour painting silent eyes"
                accent="from-pink-500 to-rose-500"
                aspect="aspect-[3/4]"
              />
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-pink-600 transition-colors">Silent Eyes</h3>
                <p className="text-gray-600 mb-4">
                  This work was presented at the The Hong Kong University of Science and Technology Colors of Inclusion Artwork Exhibition in 2024.
                </p>
                <p className="text-gray-600 mb-6">
                  It features a combination of water colour and paper crafts, creating a captivating 3D effect. I am very proud of this piece, as it reflects my ongoing experimentation with artistic exploration and emotion through design.
                </p>
                <a href="https://deo.hkust.edu.hk/events/colors-inclusion-artwork-exhibition?utm_source=website&utm_medium=button&utm_campaign=button-hkust" target="_blank" rel="noopener noreferrer" className="text-[#FF6B6B] hover:text-[#ff5252] font-medium inline-flex items-center gap-1 group/link">
                  HKUST DEI event
                  <span className="transition-transform group-hover/link:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleeting Moment — interactive card */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">Fleeting Moment</h3>
                <p className="text-gray-600 mb-6">
                  My first oil painting, created during my time at the Hong Kong Art School in 2025.
                </p>
                <Link href="/en/elizabeth/blog/oil-painting" className="text-[#FF6B6B] hover:text-[#ff5252] font-medium inline-flex items-center gap-1 group/link">
                  Read the blog
                  <span className="transition-transform group-hover/link:translate-x-1">→</span>
                </Link>
              </div>
              <InteractiveImageCard
                src="/images/elizabeth-oil-painting.jpg"
                alt="fleeting moment boy oil painting"
                accent="from-indigo-500 to-purple-500"
                aspect="aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Land of Ma — interactive card */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 group">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <InteractiveImageCard
                src="/images/elizabeth-land-of-ma.jpg"
                alt="elizabeth lang land of ma colour pens"
                accent="from-yellow-500 to-orange-500"
                aspect="aspect-[3/4]"
              />
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-600 transition-colors">Land of Ma</h3>
                <p className="text-gray-600">
                  This pen drawing was created for my mum's birthday 💫. I also wanted to express my appreciation for all the parents out there!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery — Interactive cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-2">"I love art, and I love to bring ideas to life 🎨"</h2>
          <p className="text-gray-600 mb-8">
            Here are some of my artworks, all created since 2023. If you'd like to see more, please send me a message through the{' '}
            <ContactLink /> form!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <InteractiveGalleryCard
              src="/images/elizabeth-joy.jpg"
              alt="Happy Portrait Pastels"
              title="Joy"
              subtitle="Pastels, Hong Kong"
              accent="from-pink-500 to-rose-500"
            />
            <InteractiveGalleryCard
              src="/images/elizabeth-yeye.jpg"
              alt="yeye still life pencil"
              title="Wonder"
              subtitle="Pencil, Beijing"
              accent="from-purple-500 to-indigo-500"
            />
            <InteractiveGalleryCard
              src="/images/elizabeth-girl.jpg"
              alt="girl portrait pastels"
              title="Peaceful"
              subtitle="Pastels, Hong Kong"
              accent="from-blue-500 to-cyan-500"
            />
            <InteractiveGalleryCard
              src="/images/elizabeth-cherished.jpg"
              alt="Cherished marker art"
              title="Cherished"
              subtitle="Marker, Mülheim Germany"
              accent="from-orange-500 to-red-500"
            />
            <InteractiveGalleryCard
              src="/images/elizabeth-moon-cheese.svg"
              alt="Moon Cheese water color"
              title="Moon Cheese"
              accent="from-yellow-500 to-green-500"
            />
            <InteractiveGalleryCard
              src="/images/elizabeth-penguin.jpg"
              alt="penguin sketch"
              title="Penguin"
              accent="from-gray-600 to-gray-800"
            />
            <InteractiveGalleryCard
              src="/images/elizabeth-butterfly.svg"
              alt="butterfly acrylic colour"
              title="Butterfly"
              accent="from-fuchsia-500 to-purple-500"
            />
            <InteractiveGalleryCard
              src="/images/elizabeth-heart.jpg"
              alt="Heart Pen"
              title="Heart Pen"
              accent="from-red-500 to-pink-500"
            />
          </div>
        </div>
      </section>

      {/* CTA — interactive cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Explore the Creative World of Elizabeth Lang's Design</h2>
          <p className="text-gray-600 mb-8">
            Delve into the artistic journey of Elizabeth Xiaoyue Lang, where imagination meets craftsmanship.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <InteractiveCTACard
              title="Artworks"
              desc="Experience an exclusive selection of original paintings, illustrations, and mixed-media pieces."
              accent="from-purple-500 to-pink-500"
              emoji="🎨"
            />
            <InteractiveCTACard
              title="Custom Design"
              desc="Transform ideas into reality with bespoke design."
              accent="from-indigo-500 to-blue-500"
              emoji="✨"
            />
            <InteractiveCTACard
              title="Handmade Crafts"
              desc="Browse a delightful range of homemade crafts, including hand-painted decor and accessories."
              accent="from-pink-500 to-rose-500"
              emoji="🧶"
            />
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="py-16 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Interested in artworks, designs, handcrafted creations or got a cool idea? I'd love to hear from you!
          </p>
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
  aspect = "aspect-video",
}: {
  src: string;
  alt: string;
  accent: string;
  aspect?: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative rounded-xl overflow-hidden ${aspect} group cursor-pointer transition-all duration-300 ${hovered ? 'shadow-lg -translate-y-1' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accent} z-10`} />
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-transform duration-500 ${hovered ? 'scale-110' : 'scale-100'}`}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
    </div>
  );
}

function InteractiveGalleryCard({
  src,
  alt,
  title,
  subtitle,
  accent,
}: {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  accent: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-default group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accent} z-10`} />
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover transition-transform duration-500 ${hovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-3">
        <h3 className={`font-bold transition-colors duration-300 ${hovered ? 'text-purple-600' : ''}`}>{title}</h3>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
    </article>
  );
}

function InteractiveCTACard({
  title,
  desc,
  accent,
  emoji,
}: {
  title: string;
  desc: string;
  accent: string;
  emoji: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`bg-white rounded-2xl p-6 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-default group`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${accent} text-white text-xl mb-4 transition-transform duration-300 ${hovered ? 'scale-110 rotate-3' : ''}`}>
        {emoji}
      </div>
      <h3 className={`font-bold mb-2 transition-colors duration-300 ${hovered ? 'text-purple-600' : ''}`}>{title}</h3>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  );
}

function ContactLink() {
  const open = useContactModal((state) => state.open);
  return (
    <button onClick={open} className="text-[#FF6B6B] hover:underline font-medium">
      Get in Touch
    </button>
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
