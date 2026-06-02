import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import SeoMeta from '@/components/SeoMeta';
import Image from 'next/image';

const TITLE = "Custom Design by Elizabeth Xiaoyue Lang | LangDesignWork";
const DESC = "Explore the custom illustration & design portfolio of Elizabeth Xiaoyue Lang. Discover unique, playful, and colourful work.";
const HS = "https://www.langdesignwork.com/hubfs";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: DESC,
    type: 'website',
    url: 'https://www.langdesignwork.com/elizabeth-custom-design',
    images: [{ url: `${HS}/girl%20with%20umbrella_social.jpeg`, alt: 'Elizabeth Xiaoyue Lang Custom Design' }],
    siteName: 'LangDesignWork',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: [`${HS}/girl%20with%20umbrella_social.jpeg`],
  },
  alternates: {
    canonical: 'https://www.langdesignwork.com/elizabeth-custom-design',
  },
};

const galleryItems = [
  {
    src: `${HS}/butterfly%20legs.jpeg`,
    name: "Whimsical Butterfly",
    desc: "Custom fashion character illustration",
  },
  {
    src: `${HS}/girl%20handstand%20moment.jpeg`,
    name: "Upside-Down Energy",
    desc: "Custom character illustration",
  },
  {
    src: `${HS}/girl%20listens%20to%20the%20music%20moment.jpeg`,
    name: "Daydreams in Stereo",
    desc: "Custom character illustration",
  },
];

const products = [
  {
    name: "Whimsical Butterfly Tote Bag",
    desc: "This reusable cotton tote features an imaginative illustration, designed for those who love bold, expressive style, blends fashion and art into everyday accessory.",
    image: `${HS}/butterfly%20legs_tote_sku001.jpeg`,
    price: "13.99",
    etsy: "https://www.etsy.com/listing/4426365006",
  },
  {
    name: "Daydreams in Stereo Tote Bag",
    desc: "Hand-printed tote bag with Daydreams in Stereo design by Elizabeth Xiaoyue Lang.",
    image: `${HS}/girl%20listens%20to%20the%20music%20moment_tote.jpeg`,
    price: "13.99",
    etsy: "https://www.etsy.com/listing/4426475502",
  },
];

export default function ElizabethCustomDesignPage() {
  return (
    <>
      <SeoMeta
        title={TITLE}
        description={DESC}
        ogTitle={TITLE}
        ogDescription={DESC}
        ogImage={`${HS}/girl%20with%20umbrella_social.jpeg`}
        ogImageAlt="Elizabeth Xiaoyue Lang Custom Design"
        canonical="https://www.langdesignwork.com/elizabeth-custom-design"
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Person',
                name: 'Elizabeth Xiaoyue Lang',
                jobTitle: 'Creator & Designer',
                description: DESC,
                image: `${HS}/girl%20with%20umbrella_social.jpeg`,
                url: 'https://www.langdesignwork.com/elizabeth-custom-design',
                knowsAbout: ["Custom Illustration", "Digital Art", "Character Design", "Product Design", "Graphic Design"],
              },
              {
                '@type': 'WebPage',
                url: 'https://www.langdesignwork.com/elizabeth-custom-design',
                name: TITLE,
                description: DESC,
                primaryImageOfPage: {
                  '@type': 'ImageObject',
                  url: `${HS}/girl%20with%20umbrella_social.jpeg`,
                },
              },
              {
                '@type': 'ImageGallery',
                name: 'Design Examples - Custom Illustration Portfolio',
                description: 'Examples of custom illustration work showcasing unique designs',
                url: 'https://www.langdesignwork.com/elizabeth-custom-design',
                image: galleryItems.map((item) => ({
                  '@type': 'ImageObject',
                  contentUrl: item.src,
                  name: item.name,
                  description: item.desc,
                })),
              },
              ...products.map((p) => ({
                '@type': 'Product',
                name: p.name,
                description: p.desc,
                image: p.image,
                offers: {
                  '@type': 'Offer',
                  price: p.price,
                  priceCurrency: 'GBP',
                  availability: 'https://schema.org/InStock',
                  url: p.etsy,
                },
              })),
            ],
          }),
        }}
      />

      <Header locale="en" />

      {/* Hero */}
      <section className="bg-black text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-block font-inter text-xs font-medium tracking-[1.5px] uppercase text-[#FF6B6B] mb-3">
            CUSTOM DESIGN
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-space">Elizabeth — Custom Design</h1>
          <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
            Custom illustration and design portfolio by Elizabeth Xiaoyue Lang. Commission pieces and personal projects.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 font-space">Design Portfolio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, i) => (
              <article key={i} className="group bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-square overflow-hidden bg-gray-200">
                  <img
                    src={item.src}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1 font-space">{item.name}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer locale="en" />
    </>
  );
}
