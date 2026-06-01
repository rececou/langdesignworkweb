'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useContactModal } from '@/components/ContactModal';
import YouTubeVideo from '@/components/YouTubeVideo';

export default function LilianePage() {
  return (
    <>
      <Header locale="en" />

      {/* Hero */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Liliane Lang Discover Channel</h1>
        </div>
      </section>

      {/* Creator intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">OUR CREATORS</p>
          <h2 className="text-3xl font-bold mb-4">Liliane Xiaoxu Lang</h2>
          <p className="text-gray-600 max-w-2xl mb-6">
            From AI prototypes to handmade crafts — a world of ideas in motion. Jump in, explore, and share your perspective.
          </p>
          <HeroCTAs />
        </div>
      </section>

      {/* Collaboration with Elizabeth */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden aspect-video">
              <Image
                src="/images/lili-remake.jpg"
                alt="Liliane Xiaoxu Lang AI prototype REME Smart Home Device"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
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
            <Link href="/en/home/blog/ai-creativity-learning?utm_source=website&utm_medium=button&utm_campaign=button-explore" className="text-[#FF6B6B] hover:text-[#ff5252] font-medium inline-flex items-center gap-1">
              Explore more →
            </Link>
            </div>
          </div>
        </div>
      </section>

      {/* REME section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">REME</h2>
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
      </section>

      {/* Through My Lens */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden aspect-video">
              <Image
                src="/images/lili-reflections.jpg"
                alt="Liliane Reflections on AI usage"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Through My Lens: Liliane's Reflections</h3>
              <p className="text-gray-600 mb-6">
                I am exploring how to use AI as a creative tool while staying aware of its limitations and costs - both to our society and our planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The AI Paradox */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">
            <strong>The AI Paradox</strong>
          </h2>
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

      {/* Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 mb-8">
            Here are a few of my works. My blog & gallery is still in progress, so stay tuned for more!
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Idea & Prototyping */}
            <article className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="/images/lili-ideas.jpg"
                  alt="Liliane Xiaoxu Lang ideas"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">Idea & Prototyping</h3>
                <p className="text-gray-600 text-sm italic">
                  Brainstorming with Beth,<br />
                  Where wild ideas run,<br />
                  Some brilliant, some so-so...<br />
                  The chaos is the fun.
                </p>
              </div>
            </article>

            {/* Explore & Create */}
            <article className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="/images/lili-artwork-home.jpg"
                  alt="Liliane Xiaoxu Lang artwork home"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">Explore & Create</h3>
                <p className="text-gray-600 text-sm italic">
                  Explore with my hands.<br />
                  Create with my heart.
                </p>
              </div>
            </article>

            {/* Sports & Run */}
            <article className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="/images/lili-rugby.jpg"
                  alt="Liliane Xiaoxu Lang rugby"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">Sports & Run</h3>
                <p className="text-gray-600 text-sm italic">
                  All about the squad vibe.
                </p>
              </div>
            </article>
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

function HeroCTAs() {
  const open = useContactModal((state) => state.open);
  return (
    <div className="flex gap-4">
      <Link
        href="/liliane-create"
        className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors font-medium"
      >
        See the work
      </Link>
      <button
        onClick={open}
        className="border border-gray-900 text-gray-900 px-6 py-3 rounded hover:bg-gray-100 transition-colors font-medium"
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
      className="inline-block bg-[#FF6B6B] text-white px-6 py-3 rounded hover:bg-[#ff5252] transition-colors font-medium"
    >
      {text}
    </button>
  );
}
