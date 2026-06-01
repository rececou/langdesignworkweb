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
  {
    name: "DIY STEM Music Box",
    shortDesc: "Build-your-own mechanical piano music box",
    price: "£6.00",
    image: "https://i.etsystatic.com/65159532/r/il/48a414/7901292124/il_570xN.7901292124_jawr.jpg",
    link: "https://www.etsy.com/listing/4486943920",
  },
  {
    name: "DIY STEM Newton's Pendulum",
    shortDesc: "Classic Newton's Cradle with polished steel spheres",
    price: "£6.00",
    image: "https://i.etsystatic.com/65159532/r/il/251fbe/7949224381/il_570xN.7949224381_9lbi.jpg",
    link: "https://www.etsy.com/listing/4486934303",
  },
];

export default function KidlabPage() {
  return (
    <>
      <SeoMeta
        title="Kidlab UK | DIY STEM Kits | LangDesignWork Partner"
        description="Swap screen time for hands-on discovery. KidLab UK DIY STEM kits and educational toys for curious kids — fun, practical, eco-friendly. From £9.99."
        ogImage="/images/og-kidlab.jpeg"
        canonical="https://www.langdesignwork.com/partner/kidslabuk"
        twitterCard="summary"
      />
      <Header locale="en" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Kidlab UK",
            url: "https://www.langdesignwork.com/partner/kidslabuk",
            description: "DIY wooden STEM kits and educational toys for curious kids. Hands-on learning from £9.99.",
            logo: "/kidlab-logo.jpg",
            sameAs: [
              "https://kidlabuk.etsy.com/",
              "https://www.tiktok.com/@kidlab.uk",
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-yellow-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center overflow-hidden relative shadow-sm">
              <Image
                src="/kidlab-logo.jpg"
                alt="Kidlab UK"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-widest">EDUCATIONAL TOYS</p>
              <h1 className="text-4xl font-bold">Kidlab UK</h1>
            </div>
          </div>
          <p className="text-gray-600 max-w-2xl mb-8">
            DIY wooden STEM kits that get children building, thinking, and exploring through hands-on play. Starting from just £5.50.
          </p>
          <div className="flex gap-4">
            <Link href="https://kidlabuk.etsy.com/" target="_blank" rel="noopener noreferrer" className="bg-[#FF6B6B] text-white px-6 py-3 rounded hover:bg-[#ff5252] transition-colors font-medium">
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
            {products.slice(0, 8).map((product) => (
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
