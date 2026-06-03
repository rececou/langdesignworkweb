'use client';

import SeoMeta from '@/components/SeoMeta';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useContactModal } from '@/components/ContactModal';



// Pulled automatically from Etsy RSS feed: https://www.etsy.com/shop/kidlabuk/rss
const products = [
  {
    name: "DIY STEM Drone",
    shortDesc: "Wooden quadcopter with remote control and night-flight LEDs",
    price: "£18.00",
    image: "https://i.etsystatic.com/65159532/r/il/43038d/7904845705/il_570xN.7904845705_bf4q.jpg",
    link: "https://www.etsy.com/listing/4479841381",
  },
  {
    name: "DIY STEM Electric Train",
    shortDesc: "Build a motorized locomotive with trailing carriages",
    price: "£6.50",
    image: "https://i.etsystatic.com/65159532/r/il/7b17e7/7949253075/il_570xN.7949253075_jwcl.jpg",
    link: "https://www.etsy.com/listing/4486938805",
  },
  {
    name: "Pick & Mix STEM Kit",
    shortDesc: "4-in-1 bundle — mix and match from 16 different kits",
    price: "£6.00",
    image: "https://i.etsystatic.com/65159532/r/il/8e22b3/7902687466/il_570xN.7902687466_dm8t.jpg",
    link: "https://www.etsy.com/listing/4486953490",
  },
  {
    name: "DIY STEM Electric Tank (Tracks)",
    shortDesc: "Rubber track belt system with multi-wheel transmission",
    price: "£6.00",
    image: "https://i.etsystatic.com/65159532/r/il/3be447/8045129881/il_570xN.8045129881_3npd.jpg",
    link: "https://www.etsy.com/listing/4501479034",
  },
  {
    name: "DIY STEM Crawler Tank",
    shortDesc: "Armored explorer with pulley and belt propulsion",
    price: "£6.00",
    image: "https://i.etsystatic.com/65159532/r/il/4dbd91/8045082757/il_570xN.8045082757_ks0l.jpg",
    link: "https://www.etsy.com/listing/4501475648",
  },
  {
    name: "DIY STEM Crab Robot",
    shortDesc: "Bionic walking robot with motorized scuttling movement",
    price: "£6.50",
    image: "https://i.etsystatic.com/65159532/r/il/8c6d6a/7949272769/il_570xN.7949272769_ftol.jpg",
    link: "https://www.etsy.com/listing/4486952462",
  },
  {
    name: "DIY STEM Aircraft",
    shortDesc: "Single propeller aircraft with motorized thrust",
    price: "£6.50",
    image: "https://i.etsystatic.com/65159532/r/il/9edf86/7949314537/il_570xN.7949314537_7ljg.jpg",
    link: "https://www.etsy.com/listing/4486947817",
  },
  {
    name: "DIY STEM Electric Tank",
    shortDesc: "Motorized explorer with reduction gear box system",
    price: "£5.50",
    image: "https://i.etsystatic.com/65159532/r/il/5908d0/7949262891/il_570xN.7949262891_fie7.jpg",
    link: "https://www.etsy.com/listing/4486940015",
  },
];

export default function KidlabPage() {
  return (
    <>
      <SeoMeta
        title="Kidlab UK | DIY STEM Kits | LangDesignWork Partner"
        description="Swap screen time for hands-on discovery. KidLab UK DIY STEM kits and educational toys for curious kids — fun, practical, eco-friendly. From £9.99."
        ogTitle="Kidlab UK | DIY STEM Kits | LangDesignWork Partner"
        ogDescription="Swap screen time for hands-on discovery. KidLab UK DIY STEM kits and educational toys for curious kids — fun, practical, eco-friendly. From £9.99."
        ogImage="/images/og-kidlab.jpeg"
        ogImageAlt="kidlab logo"
        canonical="https://www.langdesignwork.com/partner/kidslabuk"
        twitterCard="summary"
      />
      <Header locale="en" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                name: "Kidlab UK",
                url: "https://www.langdesignwork.com/partner/kidslabuk",
                description: "DIY wooden STEM kits and educational toys for curious kids. Hands-on learning from £9.99.",
                logo: "https://www.langdesignwork.com/kidlab-logo.jpg",
                sameAs: [
                  "https://kidlabuk.etsy.com/",
                  "https://www.tiktok.com/@kidlab.uk",
                ],
              },
              {
                "@type": "WebPage",
                "@id": "https://www.langdesignwork.com/partner/kidslabuk",
                url: "https://www.langdesignwork.com/partner/kidslabuk",
                name: "Kidlab UK | DIY STEM Kits & Educational Toys | LangDesignWork Partner",
                description: "Swap screen time for hands-on discovery. KidLab UK DIY STEM kits and educational toys for curious kids — fun, practical, eco-friendly.",
                mainEntity: {
                  "@type": "Service",
                  name: "Kidlab UK STEM Discovery Community",
                  description: "A community focused on hands-on building, reducing screen time, and discovering engineering through practical DIY gadgets.",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-950 via-yellow-950 to-amber-900 text-white overflow-hidden">
        {/* Cinematic particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-80">
          <div className="absolute top-[15%] left-[15%] w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDuration: '2s' }} />
          <div className="absolute top-[30%] right-[25%] w-1.5 h-1.5 bg-amber-300 rounded-full animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
          <div className="absolute bottom-[20%] left-[30%] w-2 h-2 bg-yellow-300 rounded-full animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '1s' }} />
          <div className="absolute top-[45%] right-[15%] w-1 h-1 bg-amber-400 rounded-full animate-pulse" style={{ animationDuration: '4s', animationDelay: '1.5s' }} />
          <div className="absolute bottom-[35%] left-[20%] w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '0.8s' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm shadow-2xl relative">
              <Image
                src="/kidlab-logo.jpg"
                alt="Kidlab UK"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-yellow-400 uppercase tracking-widest">EDUCATIONAL TOYS</p>
              <h1 className="text-4xl font-bold">Kidlab UK</h1>
            </div>
          </div>
          <p className="text-gray-300 max-w-2xl mb-8">
            DIY wooden STEM kits that get children building, thinking, and exploring through hands-on play. Starting from just £5.50.
          </p>
          <div className="flex gap-4">
            <Link href="https://kidlabuk.etsy.com/" target="_blank" rel="noopener noreferrer" className="bg-[#FF6B6B] text-white px-6 py-3 rounded hover:bg-[#ff5252] transition-all hover:scale-105 font-medium">
              Shop on Etsy →
            </Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-2">Memories are built, not scrolled</h2>
          <p className="text-gray-600 mb-8">Wooden DIY STEM Kits — hands-on fun for curious minds. All items stocked in the UK for fast delivery.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <a
                key={product.name}
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow group block"
              >
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-bold mb-1 text-sm leading-tight">{product.name}</h3>
                  <p className="text-xs text-gray-500 mb-2">{product.shortDesc}</p>
                  <p className="text-sm font-semibold text-[#FF6B6B]">{product.price}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-2">See It In Action</h2>
          <p className="text-sm text-gray-500 mb-8">Kids building STEM kits — watch the fun</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="relative aspect-[9/16] max-w-[260px] mx-auto rounded-xl overflow-hidden shadow-lg bg-black">
              <iframe
                src="https://www.youtube.com/embed/yZenvfh05No"
                title="Kidlab UK video 1"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="relative aspect-[9/16] max-w-[260px] mx-auto rounded-xl overflow-hidden shadow-lg bg-black">
              <iframe
                src="https://www.youtube.com/embed/3OID15SZx30"
                title="Kidlab UK video 2"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">Join the community</h2>
          <p className="text-gray-600 mb-8">
            New kits, behind-the-scenes builds, and learning tips — follow Kidlab UK across platforms for exclusive previews and updates.
          </p>
          <div className="flex gap-6">
            <Link href="https://kidlabuk.etsy.com" target="_blank" rel="noopener noreferrer" className="bg-white px-6 py-3 rounded shadow-sm hover:shadow-md transition-shadow font-medium text-gray-800">
              Etsy UK
            </Link>
            <Link href="https://www.tiktok.com/@kidlab.uk" target="_blank" rel="noopener noreferrer" className="bg-white px-6 py-3 rounded shadow-sm hover:shadow-md transition-shadow font-medium text-gray-800">
              TikTok Shop UK
            </Link>
            <Link href="https://www.ebay.co.uk/sch/i.html?item=147257686081&rt=nc&_trksid=p4429486.m3561.l161211&_ssn=phonedoctor_uk" target="_blank" rel="noopener noreferrer" className="bg-white px-6 py-3 rounded shadow-sm hover:shadow-md transition-shadow font-medium text-gray-800">
              eBay UK
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Become our partner or have questions?</h2>
          <p className="text-gray-600 mb-8">Get in touch now!</p>
          <ContactButton />
        </div>
      </section>

      <Footer locale="en" />
    </>
  );
}

function ContactButton() {
  const { open } = useContactModal();

  return (
    <button
      onClick={open}
      className="bg-[#FF6B6B] text-white px-6 py-3 rounded hover:bg-[#ff5252] transition-colors font-medium"
    >
      Send a message →
    </button>
  );
}
