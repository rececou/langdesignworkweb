'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useContactModal } from '@/components/ContactModal';

interface Product {
  name: string;
  shortDesc: string;
  price: string;
  image: string;
  link: string;
}

// Pinned Surreal Art Tote Bags (always first)
const pinnedTotes: Product[] = [
  {
    name: "Surreal Art Tote Bag — Statement Canvas",
    shortDesc: "Bold surreal artwork printed on durable canvas — make a statement wherever you go",
    price: "Shop Now",
    image: "https://i.etsystatic.com/56112249/r/il/db3dce/7680860369/il_570xN.7680860369_g45e.jpg",
    link: "https://www.etsy.com/uk/listing/4426475502/surreal-art-tote-bag-statement-canvas",
  },
  {
    name: "Surreal Art Tote Bag — Limited Edition",
    shortDesc: "Unique artistic design printed by hand — wearable art for creative minds",
    price: "Shop Now",
    image: "https://i.etsystatic.com/56112249/r/il/8e21b1/7943473378/il_570xN.7949253075_jwcl.jpg",
    link: "https://www.etsy.com/uk/listing/4426397775/surreal-art-tote-bag-statement-canvas",
  },
];

// Real tote bags from Etsy shop
const toteBags: Product[] = [
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
];

function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href={product.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
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
          <div className="flex items-center justify-center h-full text-gray-400">
            No image
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold mb-1 group-hover:text-[#FF6B6B] transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.shortDesc}</p>
        {product.price && (
          <span className="text-lg font-bold text-[#FF6B6B]">{product.price}</span>
        )}
      </div>
    </a>
  );
}

export default function VelvetEssencePage() {
  const { open } = useContactModal();

  return (
    <>
      <Header locale="en" />

      {/* Hero */}
      <section className="bg-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-pink-100">
              <Image
                src="/images/velvet-essence-logo.jpg"
                alt="Velvet Essence Design"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-widest">FASHION & PRINT</p>
              <h1 className="text-4xl font-bold">Velvet Essence Design</h1>
            </div>
          </div>
          <p className="text-gray-600 max-w-2xl mb-8">
            Hand-printed t-shirts and tote bags, wearable art made with care and creativity.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://www.etsy.com/shop/VelvetEssenceDesign?etsrc=sdt&search_query=tshirt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF6B6B] text-white px-6 py-3 rounded hover:bg-[#ff5252] transition-colors font-medium"
            >
              Shop T-Shirts on Etsy →
            </Link>
            <Link
              href="https://www.tiktok.com/@velvetessencetotebags"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors font-medium flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.18z"/>
              </svg>
              Follow on TikTok
            </Link>
            <button
              onClick={open}
              className="border-2 border-[#FF6B6B] text-[#FF6B6B] px-6 py-3 rounded hover:bg-[#FF6B6B] hover:text-white transition-colors font-medium"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* T-Shirts Section */}
      <section className="py-12 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-2">T-Shirt Collection</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Hand-printed wearable art on premium cotton — browse all unique t-shirt designs on Etsy
          </p>
          <Link
            href="https://www.etsy.com/shop/VelvetEssenceDesign?etsrc=sdt&search_query=tshirt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FF6B6B] text-white px-8 py-3 rounded hover:bg-[#ff5252] transition-colors font-medium"
          >
            Shop T-Shirts on Etsy →
          </Link>
        </div>
      </section>

      {/* Tote Bags — pinned first, then rest */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-2">Tote Bags</h2>
          <p className="text-sm text-gray-500 mb-8">
            Featured picks + handpicked selection from Etsy
          </p>
          
          {/* Pinned items first */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {pinnedTotes.map((product, i) => (
              <ProductCard key={`pinned-${i}`} product={product} />
            ))}
          </div>
          
          {/* Rest of tote bags */}
          <div className="grid md:grid-cols-3 gap-8">
            {toteBags.map((product, i) => (
              <ProductCard key={`tote-${i}`} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Become our partner CTA */}
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
