'use client';

import SeoMeta from '@/components/SeoMeta';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useContactModal } from '@/components/ContactModal';
import { useState } from 'react';

export default function ToteBagBlogPage() {
  return (
    <>
      <SeoMeta
        title="Looking for Your Next Creative Idea? Discover Inspiration Through Everyday Design | LangDesignWork"
        description="Liliane Xiaoxu Lang explores how inspiration can be found in the simple designs and everyday moments around us. From tote bags to personal expression."
        ogImage="/images/og-liliane.png"
        canonical="https://www.langdesignwork.com/en/liliane/blog/tote-bag"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: 'Looking for Your Next Creative Idea? Discover Inspiration Through Everyday Design',
            author: {
              '@type': 'Person',
              name: 'Liliane Xiaoxu Lang',
              url: 'https://www.langdesignwork.com/liliane',
            },
            datePublished: '2025-11-04',
            publisher: {
              '@type': 'Organization',
              name: 'LangDesignWork',
              url: 'https://www.langdesignwork.com',
            },
            description: 'Liliane Xiaoxu Lang explores how inspiration can be found in the simple designs and everyday moments around us.',
            mainEntityOfPage: 'https://www.langdesignwork.com/en/liliane/blog/tote-bag',
          }),
        }}
      />
      <Header locale="en" />

      <article className="bg-white">
        {/* Hero header */}
        <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-pink-950 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
            <div className="absolute top-32 right-20 w-3 h-3 bg-rose-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <Link href="/en/home/blog" className="text-sm text-gray-300 hover:text-white mb-6 inline-flex items-center gap-1 transition-colors">
              <span>←</span> Back to Blog
            </Link>
            <div className="flex gap-2 mb-4">
              <span className="text-xs bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full font-medium">Tote Bag</span>
              <span className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full font-medium">Personalised Design</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
              Looking for Your Next Creative Idea?<br />Discover Inspiration Through Everyday Design
            </h1>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-pink-400/50">
                <Image
                  src="/images/author-liliane.jpg"
                  alt="Liliane Xiaoxu Lang"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-sm">Liliane Xiaoxu Lang</p>
                <p className="text-sm text-gray-400">November 4, 2025</p>
              </div>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              Ever wondered where creative ideas really come from? Liliane explores how inspiration can be found in the simple designs and everyday moments around us. From a stylish tote bag made by her Auntie Shantell to the stories behind personal expression.
            </p>
          </div>
        </section>

        {/* Content */}
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
            <h2 className="text-2xl font-bold text-gray-900">Finding Inspiration in Everyday Moments</h2>

            <p>
              When people find inspiration and ideas to write about and share their feelings, they tend to look around and wait for the right thing to pop up in their brain, which could take some time. For me, this idea popped up in my brain when I was reuniting with my Auntie Shantell. Auntie Shantell is this amazing, outgoing person who happens to make adorable tote bags. These tote bags don't just display an image but share a message, a message Shantell would like to share:
            </p>

            {/* Tote bag showcase cards */}
            <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
              <ToteBagCard
                image="/blog-tote-shoe.jpg"
                quote="A little glam never hurt anyone, right? This chic tote is the perfect mix of class and femininity. Whether you're heading to brunch, shopping, or just strutting through your day, this bag brings instant confidence to any outfit."
                label="Shoe Tote"
              />
              <ToteBagCard
                image="/blog-tote-flower.jpg"
                quote="Bring a touch of sunshine wherever you go with this vibrant floral tote. Featuring a whimsical bouquet tired with a baby blue bow, it's the perfect accessory for adding colour and charm to everyday errands or casual outings."
                label="Flower Tote"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10">Why These Tote Bags Matter to Me</h2>

            <p>
              What I find most inspiring isn't just how beautiful the bags look, it's how each design means something. Every pattern, image, and word shares a small piece of who she is and what she values.
            </p>

            <p>
              I think Shantell deserves more recognition for her creativity. Her tote bags aren't just cute or affordable, they express identity. Something as simple as a tote bag can show who you are and what you love. As someone who loves fashion, I instantly connected with the shoe tote. The intricate details on the shoes may be small but do so much for the shoes and really compliment the whole theme.
            </p>

            {/* Book tote card */}
            <div className="my-8 not-prose">
              <ToteBagCard
                image="/blog-tote-book.jpg"
                quote="For the girl who finds happiness in good stories and strong coffee. A must have companion for library trips, cafes or study days."
                label="Book Tote"
              />
            </div>

            <p>
              As for this tote bag, I relate to this in so many ways. Reading books is probably the only thing I do all day apart from going to school, doing my homework, eating, and sleeping. Knowing I can portray myself as a reader without having to tell people I read is a thing I would really like and this tote is just thing. Even though I'm not a coffee drinker (I might even say I <em>"dislike"</em> it!), the whole idea is there and I absolutely love the art style and how the text and image balance each other out and doesn't look too busy while still looking stylish. I feel I can really connect with this tote because it can show my hobbies and can go with any outfit!
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10">Inspiration Is Everywhere: Tell Stories Through Design</h2>

            <p>
              Inspiration hides in our everyday life, a tote bag, a colour, a conversation. What really matters is the story behind them, the meaning you find, and how you turn those moments into new discoveries.
            </p>

            {/* Shantell's story card */}
            <div className="my-10 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-100">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden relative flex-shrink-0 bg-gray-200">
                  <Image
                    src="/blog-shantell.jpg"
                    alt="Shantell Morrison"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">A little about Shantell and her shop</h3>
                  <p className="text-gray-700 italic mb-3">
                    What started as a small side project soon became a true passion. I find joy in discovering unique designs and adding my own personal touch, as well as watching my own creations come to life. Inspired by vibrant colours, fashion, and the little moments that make life feel special. I create pieces that celebrate individuality and joy. Each bag is printed by hand and made with care, bringing creativity to everyday style.
                  </p>
                  <p className="text-sm font-medium text-gray-500">— Shantell Morrison</p>
                </div>
              </div>
            </div>

            <p>
              You can find more inspirational ideas from{' '}
              <a href="https://www.etsy.com/shop/ShantellsShop" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-500 font-medium hover:underline">
                Shantell's shop at Etsy
              </a>{' '}
              or view more on{' '}
              <a href="https://www.instagram.com/langdesignwork/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-500 font-medium hover:underline">
                Instagram
              </a>
              .
            </p>
          </div>

          {/* Let's Connect */}
          <div className="mt-16 pt-10 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Connect</h3>
            <p className="text-gray-600 mb-6">
              Interested in what you see or want to exchange ideas? Follow me or send a message to connect! I'll be sharing more blogs as I progress.
            </p>
            <ContactButton />
          </div>
        </div>
      </article>

      <Footer locale="en" />
    </>
  );
}

/* ── Components ── */

function ToteBagCard({
  image,
  quote,
  label,
}: {
  image: string;
  quote: string;
  label: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={label}
          fill
          className={`object-cover transition-transform duration-500 ${hovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full text-gray-700">{label}</span>
        </div>
      </div>
      <div className="p-5">
        <p className="text-gray-600 text-sm italic leading-relaxed">{quote}</p>
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
