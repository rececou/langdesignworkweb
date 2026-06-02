import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SeoMeta from '@/components/SeoMeta';
import VideoPlayer from '@/components/VideoPlayer';

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
    src: `${HS}/Sew%20and%20Style%20Your%20Top%20with%20Colorful%20Button%20Straps.mp4`,
    poster: `${HS}/sew%20and%20style%20straps%20top.jpeg`,
    duration: "PT2M46S",
  },
  {
    title: "Make an Adorable Clay Raccoon from Scratch",
    desc: "Video of making hand crafted clay raccoon",
    src: `${HS}/gift%20idea%20hand%20crafted%20clay%20raccoon.mp4`,
    poster: `${HS}/raccoon_social.jpeg`,
    duration: "PT1M26S",
  },
];

export default function LilianeCreatePage() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

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
      <section className="bg-black text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-block font-inter text-xs font-medium tracking-[1.5px] uppercase text-[#FF6B6B] mb-3">
            CREATION
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-space">Liliane — Creation</h1>
          <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
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
