import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SeoMeta from '@/components/SeoMeta';
import VideoPlayer from '@/components/VideoPlayer';
import SingleButterfly from '@/components/SingleButterfly';

const TITLE = "Liliane Xiaoxu Lang — Creation | LangDesignWork";
const DESC = "Liliane Xiaoxu Lang's video gallery showcasing her ideas, creative process, and the path from ideation to creation.";
const HS = "https://www.langdesignwork.com/hubfs";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: DESC,
    type: 'website',
    url: 'https://www.langdesignwork.com/liliane-create',
    images: [{ url: `${HS}/raccoon_social.jpeg`, alt: 'Hand-crafted clay raccoon by Liliane Xiaoxu Lang' }],
    siteName: 'LangDesignWork',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: [`${HS}/raccoon_social.jpeg`],
  },
  alternates: {
    canonical: 'https://www.langdesignwork.com/liliane-create',
  },
};

const videos = [
  {
    title: "Sew and Style Your Top with Colorful Button Straps",
    desc: "Easy Sewing Tutorial for Making Colorful Strap Top",
    src: "/videos/liliane-create/sew-video.mp4",
    poster: "/videos/liliane-create/sew-cover.jpeg",
    duration: "PT2M46S",
    date: "2025",
  },
  {
    title: "Make an Adorable Clay Raccoon from Scratch",
    desc: "Video of making hand crafted clay raccoon",
    src: "/videos/liliane-create/raccoon-video.mp4",
    poster: "/videos/liliane-create/raccoon-cover.jpg",
    duration: "PT1M26S",
    date: "2025",
  },
];

export default function LilianeCreatePage() {
  return (
    <>
      <SeoMeta
        title={TITLE}
        description={DESC}
        ogTitle={TITLE}
        ogDescription={DESC}
        ogImage={`${HS}/raccoon_social.jpeg`}
        ogImageAlt="Hand-crafted clay raccoon by Liliane Xiaoxu Lang"
        canonical="https://www.langdesignwork.com/liliane-create"
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
                name: 'Liliane Xiaoxu Lang',
                jobTitle: 'Creator & Student',
                description: DESC,
                image: `${HS}/raccoon_social.jpeg`,
                url: 'https://www.langdesignwork.com/liliane-create',
                affiliation: {
                  '@type': 'Organization',
                  name: 'LangDesignWork',
                },
              },
              {
                '@type': 'WebPage',
                url: 'https://www.langdesignwork.com/liliane-create',
                name: TITLE,
                description: DESC,
                inLanguage: 'en-GB',
                primaryImageOfPage: {
                  '@type': 'ImageObject',
                  url: `${HS}/raccoon_social.jpeg`,
                },
              },
              ...videos.map((v) => ({
                '@type': 'VideoObject' as const,
                name: v.title,
                description: v.desc,
                contentUrl: v.src,
                thumbnailUrl: v.poster,
                duration: v.duration,
                width: 800,
                height: 480,
                publisher: {
                  '@type': 'Organization' as const,
                  name: 'LangDesignWork',
                  logo: { '@type': 'ImageObject' as const, url: `${HS}/LangDesignWorkLogo.svg` },
                },
                mainEntityOfPage: 'https://www.langdesignwork.com/liliane-create',
              })),
            ],
          }),
        }}
      />

      <Header locale="en" />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-red-950 text-white overflow-hidden">
        <SingleButterfly />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-2 h-2 bg-red-400 rounded-full animate-pulse" />
          <div className="absolute top-32 right-20 w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-red-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <span className="inline-block font-inter text-xs font-medium tracking-[1.5px] uppercase text-[#FF6B6B] mb-3">
            CREATION
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">Liliane — Creation</h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
            Video gallery showcasing Liliane&apos;s creative process and projects from ideation to creation.
          </p>
        </div>
      </section>

      {/* Videos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video, i) => (
              <article key={i} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-video bg-black">
                  <VideoPlayer
                    src={video.src}
                    poster={video.poster}
                    title={video.title}
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1 font-space">{video.title}</h3>
                  <p className="text-gray-500 text-sm">{video.desc}</p>
                  <p className="text-gray-400 text-xs mt-2 italic">Created: {video.date}</p>
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
