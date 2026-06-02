'use client';

import SeoMeta from '@/components/SeoMeta';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MatrixRain from '@/components/MatrixRain';
import Link from 'next/link';
import Image from 'next/image';
import { useContactModal } from '@/components/ContactModal';



export default function Home() {
  return (
    <>
      <SeoMeta
        title="LangDesignWork | Home"
        description="Creativity. Community. Commerce. LangDesignWork brings together independent makers, partner brands, and the audiences in one place."
        ogTitle="LangDesignWork | Home"
        ogDescription="Creativity. Community. Commerce. LangDesignWork brings together independent makers, partner brands, and the audiences in one place."
        ogImage="/images/og-home.png"
        ogImageAlt="Lang Design Work Social Media"
        canonical="https://www.langdesignwork.com"
      />
      <Header locale="en" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white py-20 md:py-28 relative overflow-hidden">
        {/* Matrix rain animation */}
        <MatrixRain speed={40} opacity="opacity-20" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[10%] w-1 h-1 bg-[#FF6B6B] rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
          <div className="absolute top-[25%] right-[15%] w-2 h-2 bg-[#FF6B6B] rounded-full animate-pulse" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
          <div className="absolute top-[60%] left-[25%] w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          <div className="absolute bottom-[25%] right-[30%] w-1 h-1 bg-[#FF6B6B] rounded-full animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '1.5s' }} />
          <div className="absolute top-[40%] left-[60%] w-2 h-2 bg-white/50 rounded-full animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '0.3s' }} />
          <div className="absolute bottom-[40%] left-[15%] w-1 h-1 bg-white/70 rounded-full animate-pulse" style={{ animationDuration: '2s', animationDelay: '2s' }} />
          {/* Glow orbs */}
          <div className="absolute top-[20%] right-[20%] w-32 h-32 bg-[#FF6B6B]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[20%] left-[20%] w-24 h-24 bg-white/5 rounded-full blur-2xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
            <span className="text-white">Create.</span>{' '}\n            <span className="text-white">Experiment.</span>{' '}\n            <span className="text-[#FF6B6B]">Fun.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            A portfolio community for makers and creators, a launchpad for real products everyone can enjoy.
          </p>
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <HeroCTAs />
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 1s ease-out forwards;
            opacity: 0;
          }
        `}</style>
      </section>

      {/* Portfolio Section */}
      <section id="meet-the-creators" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">OUR PORTFOLIO</p>
          <h2 className="text-3xl font-bold mb-8">Meet the creators</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Liliane */}
            <Link href="/liliane" className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/3] block hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 group-hover:from-black/40 transition-all duration-300" />
              <Image
                src="/images/liliane-discover.jpg"
                alt="Liliane Xiaoxu Lang"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <p className="text-xs text-white/80 uppercase tracking-widest mb-1">IDEAS & PROTOTYPING</p>
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">Liliane Xiaoxu Lang</h3>
              </div>
            </Link>

            {/* Elizabeth */}
            <Link href="/elizabeth" className="group relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/3] block hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 group-hover:from-black/40 transition-all duration-300" />
              <Image
                src="/images/elizabeth-mingrige.jpg"
                alt="Elizabeth Xiaoyue Lang"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <p className="text-xs text-white/80 uppercase tracking-widest mb-1">ART & CUSTOM DESIGN</p>
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">Elizabeth Xiaoyue Lang</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">OUR PARTNERS</p>
          <h2 className="text-3xl font-bold mb-8">Partner brands</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Kidlab UK */}
            <Link href="/partner/kidslabuk" className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 block border-t-4 border-transparent hover:border-yellow-400">
              <div className="w-16 h-16 rounded-full mb-4 overflow-hidden relative group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/kidlab-logo.jpg"
                  alt="Kidlab UK"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">EDUCATIONAL TOYS</p>
              <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-600 transition-colors">Kidlab UK</h3>
              <p className="text-gray-600 mb-4">
                DIY wooden STEM kits that get children building, thinking, and exploring through hands-on play.
              </p>
              <span className="text-[#FF6B6B] group-hover:text-yellow-600 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Find out more →
              </span>
            </Link>

            {/* Velvet Essence */}
            <Link href="/partner/velvetessencedesign" className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 block border-t-4 border-transparent hover:border-pink-400">
              <div className="w-16 h-16 rounded-full mb-4 overflow-hidden relative group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/velvet-essence-logo.jpg"
                  alt="Velvet Essence Design"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">FASHION & PRINT</p>
              <h3 className="text-xl font-bold mb-2 group-hover:text-pink-600 transition-colors">Velvet Essence Design</h3>
              <p className="text-gray-600 mb-4">
                Hand-printed t-shirts and tote bags, wearable art made with care and creativity.
              </p>
              <span className="text-[#FF6B6B] group-hover:text-pink-600 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Find out more →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="work-with-us" className="py-16 bg-black text-white relative overflow-hidden">
        {/* Matrix rain animation - subtle dark version */}
        <MatrixRain color="#FF6B6B" speed={50} opacity="opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">WORK WITH US</p>
          <h2 className="text-3xl font-bold mb-4">
            Great brands deserve{' '}
            <span className="text-[#FF6B6B]">greater reach.</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl">
            Remecou bridges the gap between independent brands and the audiences through community, content, and strategic partnerships.
          </p>
          <PartnershipCTA />
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
      <a
        href="#meet-the-creators"
        className="bg-[#FF6B6B] text-white px-6 py-3 rounded hover:bg-[#ff5252] transition-colors font-medium"
      >
        Explore the Portfolio
      </a>
      <button
        onClick={open}
        className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-black transition-colors font-medium"
      >
        Partner with us
      </button>
    </div>
  );
}

function PartnershipCTA() {
  const open = useContactModal((state) => state.open);
  return (
    <button
      onClick={open}
      className="text-[#FF6B6B] hover:text-[#ff5252] font-medium inline-flex items-center gap-1"
    >
      Explore partnership opportunities →
    </button>
  );
}
