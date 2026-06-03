'use client';

import SeoMeta from '@/components/SeoMeta';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useContactModal } from '@/components/ContactModal';
import { useEffect, useState } from 'react';


// Products from Etsy shop: https://www.etsy.com/shop/VelvetEssenceDesign
const products = [
  {
    name: "Pink Guitar Tote Bag",
    shortDesc: "Rock girl aesthetic shopper — perfect for music lovers",
    price: "£11.99",
    image: "https://i.etsystatic.com/56112249/r/il/db3dce/7680860369/il_570xN.7680860369_g45e.jpg",
    link: "https://www.etsy.com/listing/4445932040/pink-guitar-acoustic-tote-bag-rock-girl",
  },
  {
    name: "Dog Lover Tote Bag",
    shortDesc: "Easily distracted by dogs and books — gift for bookworms",
    price: "£11.99",
    image: "https://i.etsystatic.com/56112249/r/il/8e21b1/7943473378/il_570xN.7943473378_fzdp.jpg",
    link: "https://www.etsy.com/listing/4355938777/easily-distracted-by-dogs-and-books-tote",
  },
  {
    name: "Galaxy Tote Bag",
    shortDesc: "Colourful planet canvas shopper — space aesthetic art",
    price: "£11.99",
    image: "https://i.etsystatic.com/56112249/r/il/ab1c3b/7690665237/il_570xN.7690665237_r3j0.jpg",
    link: "https://www.etsy.com/listing/4447431926/galaxy-tote-bag-colourful-planet-canvas",
  },
  {
    name: "Space Quote Tote Bag",
    shortDesc: "All I Need Is Space — astronaut quote canvas shopper",
    price: "£11.99",
    image: "https://i.etsystatic.com/56112249/r/il/85215a/7642674506/il_570xN.7642674506_94y6.jpg",
    link: "https://www.etsy.com/listing/4447424395/space-tote-bag-o-astronaut-quote-shopper",
  },
  {
    name: "Dark Romance Tote Bag",
    shortDesc: "Gothic rose aesthetic shopper — dramatic art canvas",
    price: "£11.99",
    image: "https://i.etsystatic.com/56112249/r/il/2c216a/7991432097/il_570xN.7991432097_k4io.jpg",
    link: "https://www.etsy.com/listing/4446004575/dark-romance-tote-bag-gothic-rose",
  },
  {
    name: "Bird Tote Bag",
    shortDesc: "Cute Kingfisher canvas tote — nature lover gift",
    price: "£11.99",
    image: "https://i.etsystatic.com/56112249/r/il/0afbae/7635859759/il_570xN.7635859759_qoj0.jpg",
    link: "https://www.etsy.com/listing/4438927415/bird-tote-bag-cute-kingfisher-canvas",
  },
  {
    name: "Witchy Tote Bag",
    shortDesc: "Dark feminine gothic autumn art canvas — gifts for witchy friends",
    price: "£11.99",
    image: "https://i.etsystatic.com/56112249/r/il/baa891/7681888563/il_570xN.7681888563_ka97.jpg",
    link: "https://www.etsy.com/listing/4446085627/gifts-for-witchy-friends-witchy-tote-bag",
  },
  {
    name: "Champagne Coaster Set",
    shortDesc: "Pink champagne ceramic coasters set of 4 — elegant home decor",
    price: "£14.99",
    image: "https://i.etsystatic.com/56112249/r/il/0e298c/8039177077/il_570xN.8039177077_7vva.jpg",
    link: "https://www.etsy.com/listing/4500552833/champagne-ceramic-coaster-set-gift-for",
  },
];

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <a
      href={product.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow block"
    >
      <div className="relative aspect-square bg-gray-100">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">No image</div>
        )}
      </div>
      <div className="p-3">
        <h3 className="font-bold mb-1 text-sm leading-tight group-hover:text-[#FF6B6B] transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 mb-2 line-clamp-2">{product.shortDesc}</p>
        {product.price && (
          <span className="text-sm font-semibold text-[#FF6B6B]">{product.price}</span>
        )}
      </div>
    </a>
  );
}

export default function VelvetEssencePage() {
  const { open } = useContactModal();

  return (
    <>
      <SeoMeta
        title="Velvet Essence Design | Hand-Printed T-Shirts & Tote Bags | LangDesignWork Partner"
        description="Hand-printed t-shirts and tote bags, wearable art made with care and creativity by Velvet Essence Design in London. Available on Etsy UK."
        ogTitle="Velvet Essence Design | Hand-Printed T-Shirts & Tote Bags | LangDesignWork Partner"
        ogDescription="Hand-printed t-shirts and tote bags, wearable art made with care and creativity by Velvet Essence Design in London. Available on Etsy UK."
        ogImage="/images/velvet-essence-logo.jpg"
        ogImageAlt="Velvet Essence Design hand-printed tote bags"
        canonical="https://www.langdesignwork.com/partner/velvetessencedesign"
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
                name: "Velvet Essence Design",
                url: "https://www.etsy.com/shop/VelvetEssenceDesign",
                logo: "https://www.langdesignwork.com/images/velvet-essence-logo.jpg",
                sameAs: [
                  "https://www.etsy.com/shop/VelvetEssenceDesign",
                  "https://www.tiktok.com/@velvetessencetotebags",
                ],
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "London",
                  addressCountry: "GB",
                },
              },
              {
                "@type": "WebPage",
                "@id": "https://www.langdesignwork.com/partner/velvetessencedesign",
                url: "https://www.langdesignwork.com/partner/velvetessencedesign",
                name: "Velvet Essence Design | Hand-Printed T-Shirts & Tote Bags | LangDesignWork Partner",
                description: "Hand-printed t-shirts and tote bags, wearable art made with care and creativity by Velvet Essence Design in London.",
                mainEntity: { "@type": "Organization", name: "Velvet Essence Design" },
              },
              {
                "@type": "ItemList",
                name: "Velvet Essence Design Collection",
                description: "Handpicked tote bags, accessories, and home decor from Velvet Essence Design on Etsy UK.",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Pink Guitar Tote Bag" },
                  { "@type": "ListItem", position: 2, name: "Dog Lover Tote Bag" },
                  { "@type": "ListItem", position: 3, name: "Galaxy Tote Bag" },
                  { "@type": "ListItem", position: 4, name: "Space Quote Tote Bag" },
                  { "@type": "ListItem", position: 5, name: "Dark Romance Tote Bag" },
                  { "@type": "ListItem", position: 6, name: "Bird Tote Bag" },
                  { "@type": "ListItem", position: 7, name: "Witchy Tote Bag" },
                  { "@type": "ListItem", position: 8, name: "Champagne Coaster Set" },
                ],
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-950 via-pink-950 to-rose-900 text-white overflow-hidden">
        {/* Cinematic particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-80">
          <div className="absolute top-[15%] right-[15%] w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDuration: '2s' }} />
          <div className="absolute top-[30%] left-[25%] w-1.5 h-1.5 bg-rose-300 rounded-full animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
          <div className="absolute bottom-[20%] right-[30%] w-2 h-2 bg-pink-300 rounded-full animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '1s' }} />
          <div className="absolute top-[45%] left-[15%] w-1 h-1 bg-rose-400 rounded-full animate-pulse" style={{ animationDuration: '4s', animationDelay: '1.5s' }} />
          <div className="absolute bottom-[35%] right-[20%] w-1.5 h-1.5 bg-pink-500 rounded-full animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '0.8s' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm shadow-2xl relative">
              <Image
                src="/images/velvet-essence-logo.jpg"
                alt="Velvet Essence Design"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-pink-400 uppercase tracking-widest">FASHION & PRINT</p>
              <h1 className="text-4xl font-bold">Velvet Essence Design</h1>
            </div>
          </div>
          <p className="text-gray-300 max-w-2xl mb-8">
            Hand-printed t-shirts and tote bags, wearable art made with care and creativity.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://www.etsy.com/shop/VelvetEssenceDesign?etsrc=sdt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF6B6B] text-white px-6 py-3 rounded hover:bg-[#ff5252] transition-all hover:scale-105 font-medium"
            >
              Shop on Etsy →
            </Link>
            <Link
              href="https://www.tiktok.com/@velvetessencetotebags"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded hover:bg-white/20 transition-all hover:scale-105 font-medium flex items-center gap-2 border border-white/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.18z"/>
              </svg>
              Follow on TikTok
            </Link>
            <button
              onClick={open}
              className="border-2 border-[#FF6B6B] text-[#FF6B6B] px-6 py-3 rounded hover:bg-[#FF6B6B] hover:text-white transition-all hover:scale-105 font-medium"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-2">Collection</h2>
          <p className="text-sm text-gray-500 mb-8">Handpicked from Etsy — tote bags and accessories</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-2">See It In Action</h2>
          <p className="text-sm text-gray-500 mb-8">Hand-printed designs — watch the process</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="relative aspect-[9/16] max-w-[260px] mx-auto rounded-xl overflow-hidden shadow-lg bg-black">
              <iframe
                src="https://www.youtube.com/embed/xMy1x127OrI"
                title="Velvet Essence Design video 1"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="relative aspect-[9/16] max-w-[260px] mx-auto rounded-xl overflow-hidden shadow-lg bg-black">
              <iframe
                src="https://www.youtube.com/embed/T9_axyS5kxc?rel=0"
                title="Velvet Essence Design video 2"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
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
