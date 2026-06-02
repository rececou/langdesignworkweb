import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SeoMeta from '@/components/SeoMeta';
import FluffyCat from '@/components/FluffyCat';

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
    src: "/images/elizabeth-custom-design/girl_with_umbrella.jpeg",
    name: "Girl with Umbrella",
    desc: "Playful character design in the rain",
    date: "2021",
  },
  {
    src: "/images/elizabeth-custom-design/girl_stands.jpeg",
    name: "Standing Tall",
    desc: "Confident pose with bold lines",
    date: "2021",
  },
  {
    src: "/images/elizabeth-custom-design/girl_sitting_on_a_chair.jpeg",
    name: "Seated Grace",
    desc: "Relaxed character illustration",
    date: "2021",
  },
  {
    src: "/images/elizabeth-custom-design/girl_handstand.jpeg",
    name: "Upside-Down Energy",
    desc: "Dynamic movement & balance",
    date: "2021",
  },
  {
    src: "/images/elizabeth-custom-design/girls_reading.jpeg",
    name: "Quiet Moments",
    desc: "Reading and reflection",
    date: "2021",
  },
  {
    src: "/images/elizabeth-custom-design/butterfly_legs.jpeg",
    name: "Whimsical Butterfly",
    desc: "Custom fashion character illustration",
    date: "2020",
  },
  {
    src: "/images/elizabeth-custom-design/girl_listening_music.jpeg",
    name: "Daydreams in Stereo",
    desc: "Lost in the music",
    date: "2021",
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
                knowsAbout: ['Custom Illustration', 'Digital Art', 'Character Design', 'Product Design', 'Graphic Design'],
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
                name: 'Design Portfolio - Custom Illustration by Elizabeth Xiaoyue Lang',
                description: 'A collection of custom illustration and character design pieces by Elizabeth Xiaoyue Lang, created between 2020 and 2021.',
                url: 'https://www.langdesignwork.com/elizabeth-custom-design',
                image: galleryItems.map((item) => ({
                  '@type': 'ImageObject',
                  '@id': `https://www.langdesignwork.com/elizabeth-custom-design#${item.name.toLowerCase().replace(/\s+/g, '-')}`,
                  contentUrl: `https://www.langdesignwork.com${item.src}`,
                  name: item.name,
                  description: item.desc,
                  dateCreated: item.date,
                  creator: { '@type': 'Person', name: 'Elizabeth Xiaoyue Lang' },
                  inLanguage: 'en',
                })),
              },
            ],
          }),
        }}
      />

      <Header locale="en" />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950 text-white overflow-hidden">
        <FluffyCat />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
          <div className="absolute top-32 right-20 w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32" style={{ zIndex: 25 }}>
          <span className="inline-block font-inter text-xs font-medium tracking-[1.5px] uppercase text-[#FF6B6B] mb-3">
            CUSTOM DESIGN
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">Elizabeth — Custom Design</h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
            Custom illustration and design portfolio by Elizabeth Xiaoyue Lang. Commission pieces and personal projects.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 font-space text-center">Design Portfolio</h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryItems.map((item, i) => (
              <article key={i} className="group break-inside-avoid bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="relative overflow-hidden bg-gray-100">
                  <img
                    src={item.src}
                    alt={item.name}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1 font-space">{item.name}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                  <p className="text-gray-400 text-xs mt-2 italic">Created: {item.date}</p>
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
