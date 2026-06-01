'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useContactModal } from '@/components/ContactModal';
import { useState, useEffect } from 'react';

// Animated counter component
function Counter({ target, suffix = '' }: { target: string; suffix?: string }) {
  return (
    <span className="inline-block">
      {target}{suffix}
    </span>
  );
}

// Fade-in on scroll wrapper
function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {children}
    </div>
  );
}

export default function RemecouPage() {
  const { open } = useContactModal();

  return (
    <>
      <Header locale="en" />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-emerald-950 text-white overflow-hidden">
        {/* Animated background dots */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <div className="absolute top-32 right-20 w-3 h-3 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-10 right-10 w-2 h-2 bg-teal-300 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="w-24 h-24 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm p-2 shadow-2xl">
              <Image
                src="/images/remecou-logo.jpeg"
                alt="Remecou Trading Limited"
                width={80}
                height={80}
                className="object-cover rounded-xl"
              />
            </div>
            <div>
              <p className="text-sm text-emerald-400 uppercase tracking-widest mb-2">Sustainable Goods Operations</p>
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                The Remecou Story
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-xl mb-8">
                Source well. Create together. Deliver locally.
              </p>
              <button
                onClick={open}
                className="bg-emerald-500 text-white px-8 py-3 rounded-lg hover:bg-emerald-400 transition-all hover:scale-105 font-medium text-lg"
              >
                Explore Partnership
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What Remecou Does */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-sm text-emerald-600 uppercase tracking-widest mb-2">THE REMECOU STORY</p>
            <h2 className="text-3xl font-bold mb-6">Brands have ideas. Remecou makes them happen.</h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { emoji: '🌿', label: 'Sustainable goods' },
              { emoji: '🏭', label: 'Manufacturer sourcing' },
              { emoji: '🤖', label: 'AI-assisted operations' },
              { emoji: '🤝', label: 'Local partnerships' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="bg-gray-50 rounded-xl p-6 text-center hover:bg-emerald-50 hover:shadow-md transition-all hover:-translate-y-1 cursor-default">
                  <span className="text-4xl mb-3 block">{item.emoji}</span>
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How Remecou Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-sm text-emerald-600 uppercase tracking-widest mb-2">OUR METHOD</p>
            <h2 className="text-3xl font-bold mb-4">How Remecou works.</h2>
            <p className="text-gray-600 max-w-2xl mb-12">
              Remecou is an operations and partnership model built around four connected stages: sourcing, co-creation, local execution, and continuous optimisation. Hong Kong sits at the centre — a geographic and logistical advantage that makes the whole model work.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                label: 'SOURCE',
                title: 'HK → mainland supply chain',
                desc: 'Direct access to trusted manufacturers in mainland China, with quality control and compliance managed through our Hong Kong base.',
                color: 'from-emerald-500 to-teal-500',
              },
              {
                step: '02',
                label: 'CO-CREATE',
                title: 'Content built together',
                desc: 'Campaign content is co-created with local partners — not produced by Remecou alone. AI agents and AI partnerships support efficiency across the workflow: content production, operations, and communication.',
                color: 'from-teal-500 to-cyan-500',
              },
              {
                step: '03',
                label: 'DISTRIBUTE',
                title: 'Local partners on the ground',
                desc: 'Strategic partnerships with local brands, creators, and retailers ensure products reach the right audiences through trusted channels.',
                color: 'from-cyan-500 to-blue-500',
              },
              {
                step: '04',
                label: 'OPTIMISE',
                title: 'Close the loop',
                desc: 'Continuous feedback and data-driven optimisation ensure every partnership improves over time, creating a sustainable growth cycle.',
                color: 'from-blue-500 to-indigo-500',
              },
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 150}>
                <div className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-2 group relative overflow-hidden">
                  {/* Gradient accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color}`} />
                  
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${step.color} text-white text-xs font-bold mb-4`}>
                    {step.step} — {step.label}
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-emerald-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Partners */}
          <FadeIn delay={600}>
            <div className="mt-12 text-center">
              <p className="text-gray-600">
                Current partners:{' '}
                <Link href="/partner/kidslabuk/" className="text-emerald-600 hover:text-emerald-500 font-medium">
                  Kidlab UK
                </Link>
                {' · '}
                <Link href="/partner/velvetessencedesign/" className="text-emerald-600 hover:text-emerald-500 font-medium">
                  Velvet Essence Design
                </Link>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Founder's Vision */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-48 h-48 bg-emerald-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-sm text-emerald-300 uppercase tracking-widest mb-4">FOUNDER'S VISION</p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Sustainability as self-expression.</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Remecou believes that sustainability isn't just about being eco-friendly — it's about empowering brands to express their values through every product, every partnership, and every story they tell.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-sm text-emerald-600 uppercase tracking-widest mb-4">WORK WITH REMECOU</p>
            <h2 className="text-3xl font-bold mb-4">Interested in partnering with us?</h2>
            <p className="text-sm text-gray-500 mb-8">Contact: lucy@langdesignwork.com</p>
            <button
              onClick={open}
              className="bg-emerald-500 text-white px-10 py-4 rounded-lg hover:bg-emerald-400 transition-all hover:scale-105 font-medium text-lg shadow-lg hover:shadow-xl"
            >
              Explore Partnership →
            </button>
          </FadeIn>
        </div>
      </section>

      <Footer locale="en" />
    </>
  );
}
