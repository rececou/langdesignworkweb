import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MatrixRain from '@/components/MatrixRain';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header locale="en" />

      {/* Hero Section */}
      <section className="bg-black text-white py-20 relative overflow-hidden">
        {/* Matrix rain animation */}
        <MatrixRain />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Create.</span>{' '}
            <span className="text-white">Experiment.</span>{' '}
            <span className="text-[#FF6B6B]">Fun.</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mb-8">
            A portfolio community for makers and creators, a launchpad for real products everyone can enjoy.
          </p>
          <div className="flex gap-4">
            <Link
              href="/liliane"
              className="bg-[#FF6B6B] text-white px-6 py-3 rounded hover:bg-[#ff5252] transition-colors font-medium"
            >
              Explore the Portfolio
            </Link>
            <a
              href="#contact"
              className="contact-modal-trigger border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-black transition-colors font-medium"
            >
              Partner with us
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">OUR PORTFOLIO</p>
          <h2 className="text-3xl font-bold mb-8">Meet the creators</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Liliane */}
            <Link href="/liliane" className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3] block">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <Image
                src="/images/liliane-discover.jpg"
                alt="Liliane Xiaoxu Lang"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <p className="text-xs text-white/80 uppercase tracking-widest mb-1">IDEAS & PROTOTYPING</p>
                <h3 className="text-xl font-bold text-white">Liliane Xiaoxu Lang</h3>
              </div>
            </Link>

            {/* Elizabeth */}
            <Link href="/elizabeth" className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3] block">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <Image
                src="/images/elizabeth-mingrige.jpg"
                alt="Elizabeth Xiaoyue Lang"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <p className="text-xs text-white/80 uppercase tracking-widest mb-1">ART & CUSTOM DESIGN</p>
                <h3 className="text-xl font-bold text-white">Elizabeth Xiaoyue Lang</h3>
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
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-16 h-16 rounded-full mb-4 overflow-hidden relative">
                <Image
                  src="/images/kidlab-logo.jpg"
                  alt="Kidlab UK"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">EDUCATIONAL TOYS</p>
              <h3 className="text-xl font-bold mb-2">Kidlab UK</h3>
              <p className="text-gray-600 mb-4">
                DIY wooden STEM kits that get children building, thinking, and exploring through hands-on play.
              </p>
              <Link
                href="/partner/kidslabuk"
                className="text-[#FF6B6B] hover:text-[#ff5252] font-medium inline-flex items-center gap-1"
              >
                Shop on Etsy →
              </Link>
            </div>

            {/* Velvet Essence */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-16 h-16 rounded-full mb-4 overflow-hidden relative">
                <Image
                  src="/images/velvet-essence-logo.jpg"
                  alt="Velvet Essence Design"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">FASHION & PRINT</p>
              <h3 className="text-xl font-bold mb-2">Velvet Essence Design</h3>
              <p className="text-gray-600 mb-4">
                Hand-printed t-shirts and tote bags, wearable art made with care and creativity.
              </p>
              <Link
                href="/partner/velvetessencedesign"
                className="text-[#FF6B6B] hover:text-[#ff5252] font-medium inline-flex items-center gap-1"
              >
                Shop on Etsy →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="work-with-us" className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">WORK WITH US</p>
          <h2 className="text-3xl font-bold mb-4">
            Great brands deserve{' '}
            <span className="text-[#FF6B6B]">greater reach.</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl">
            Remecou bridges the gap between independent brands and the audiences through community, content, and strategic partnerships.
          </p>
          <a
            href="#contact"
            className="contact-modal-trigger text-[#FF6B6B] hover:text-[#ff5252] font-medium inline-flex items-center gap-1"
          >
            Explore partnership opportunities →
          </a>
        </div>
      </section>

      <Footer locale="en" />
    </>
  );
}
