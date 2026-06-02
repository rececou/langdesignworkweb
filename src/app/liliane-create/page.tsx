import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SeoMeta from '@/components/SeoMeta';

export default function LilianeCreatePage() {
  return (
    <>
      <SeoMeta
        title="Liliane Xiaoxu Lang — Creation | LangDesignWork"
        description="Liliane Xiaoxu Lang's video gallery showcasing her ideas, creative process, and the path from ideation to creation."
        ogTitle="Liliane Xiaoxu Lang — Creation | LangDesignWork"
        ogDescription="Liliane Xiaoxu Lang's video gallery showcasing her ideas, creative process, and the path from ideation to creation."
        ogImage="/images/og-liliane.png"
        ogImageAlt="Hand-crafted clay raccoon by Liliane Xiaoxu Lang"
        canonical="https://www.langdesignwork.com/liliane-create"
        noindex={true}
      />

      {/* JSON-LD Person Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Liliane Xiaoxu Lang',
            jobTitle: 'Creator & Student',
            description: "Liliane Xiaoxu Lang's video gallery showcasing her ideas, creative process, and the path from ideation to creation.",
            image: 'https://www.langdesignwork.com/images/og-liliane.png',
            url: 'https://www.langdesignwork.com/liliane-create',
            affiliation: {
              '@type': 'Organization',
              name: 'LangDesignWork',
            },
          }),
        }}
      />

      <Header locale="en" />

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Liliane — Creation</h1>
          <p className="text-gray-600">Video gallery showcasing Liliane's creative process and projects from ideation to creation.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-black aspect-video rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">Video {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer locale="en" />
    </>
  );
}
