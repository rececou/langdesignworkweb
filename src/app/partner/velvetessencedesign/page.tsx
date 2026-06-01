'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useContactModal } from '@/components/ContactModal';
import { useEffect, useState } from 'react';

interface Product {
  name: string;
  shortDesc: string;
  price: string;
  image: string;
  link: string;
}

// Parse Etsy RSS feed and filter for t-shirts only
async function fetchVelvetEssenceProducts(): Promise<Product[]> {
  try {
    const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://www.etsy.com/shop/VelvetEssenceDesign/rss');
    const data = await res.json();
    
    if (!data.items) return [];
    
    const tshirtKeywords = ['t shirt', 't-shirt', 'tshirt', 'graphic tee', 'tee shirt'];
    
    return data.items
      .filter((item: any) => {
        const title = item.title?.toLowerCase() || '';
        return tshirtKeywords.some(kw => title.includes(kw));
      })
      .map((item: any) => {
        // Extract image from description HTML
        const imgMatch = item.description?.match(/src="([^"]+)"/);
        const image = imgMatch ? imgMatch[1] : '';
        
        // Extract price
        const priceMatch = item.description?.match(/(\d+\.\d+)\s*GBP/);
        const price = priceMatch ? `£${priceMatch[1]}` : '';
        
        // Clean up title
        const name = item.title?.replace(/ by VelvetEssenceDesign$/, '') || '';
        
        // Short description (first 100 chars)
        const cleanDesc = item.description?.replace(/<[^>]*>/g, '').substring(0, 120) + '...' || '';
        
        return {
          name,
          shortDesc: cleanDesc,
          price,
          image,
          link: item.link || '',
        };
      });
  } catch (error) {
    console.error('Failed to fetch Velvet Essence products:', error);
    return [];
  }
}

// Fallback products if RSS doesn't have t-shirts yet
const fallbackProducts: Product[] = [
  {
    name: "Graphic T-Shirt Collection",
    shortDesc: "Hand-printed designs on premium cotton tees — unique wearable art",
    price: "From £12.99",
    image: "https://i.etsystatic.com/56112249/r/il/db3dce/7680860369/il_570xN.7680860369_g45e.jpg",
    link: "https://www.etsy.com/shop/VelvetEssenceDesign?etsrc=sdt&search_query=tshirt",
  },
  {
    name: "Custom Print Tees",
    shortDesc: "Made to order with care — bold prints that express your personality",
    price: "From £12.99",
    image: "https://i.etsystatic.com/56112249/r/il/8e21b1/7943473378/il_570xN.7943473378_fzdp.jpg",
    link: "https://www.etsy.com/shop/VelvetEssenceDesign?etsrc=sdt&search_query=tshirt",
  },
  {
    name: "Seasonal Designs",
    shortDesc: "Rotating collection of limited edition t-shirt prints — check back often",
    price: "From £12.99",
    image: "https://i.etsystatic.com/56112249/r/il/ab1c3b/7690665237/il_570xN.7690665237_r3j0.jpg",
    link: "https://www.etsy.com/shop/VelvetEssenceDesign?etsrc=sdt&search_query=tshirt",
  },
];

export default function VelvetEssencePage() {
  const { open } = useContactModal();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVelvetEssenceProducts().then((items) => {
      setProducts(items.length > 0 ? items : fallbackProducts);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Header locale="en" />

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

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-2">T-Shirt Collection</h2>
          <p className="text-sm text-gray-500 mb-8">
            {products.length > 0 && products !== fallbackProducts
              ? 'Auto-synced from Etsy • Updates daily'
              : 'Browse our curated selection — new designs added regularly'}
          </p>
          
          {loading ? (
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-50 rounded-lg overflow-hidden animate-pulse">
                  <div className="bg-gray-200 aspect-square" />
                  <div className="p-4 space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-3 bg-gray-200 rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {products.map((product, i) => (
                <a
                  key={i}
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
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer locale="en" />
    </>
  );
}
