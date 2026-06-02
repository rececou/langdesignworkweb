import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import SeoMeta from '@/components/SeoMeta';

export default function ElizabethCustomDesignPage() {
  return (
    <>
      <SeoMeta
        title="Custom Design by Elizabeth Xiaoyue Lang | LangDesignWork"
        description="Explore the custom illustration & design portfolio of Elizabeth Xiaoyue Lang. Discover unique, playful, and colourful work."
        ogTitle="Custom Design by Elizabeth Xiaoyue Lang | LangDesignWork"
        ogDescription="Explore the custom illustration & design portfolio of Elizabeth Xiaoyue Lang. Discover unique, playful, and colourful work."
        ogImage="/images/velvet-essence-logo.jpg"
        ogImageAlt="Elizabeth Xiaoyue Lang Custom Design"
        canonical="https://www.langdesignwork.com/elizabeth-custom-design"
      />
      <Header locale="en" />

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Elizabeth — Custom Design</h1>
          <p className="text-gray-600 max-w-2xl">
            Custom illustration and design portfolio by Elizabeth Xiaoyue Lang. Commission pieces and personal projects.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-100 aspect-[4/3] rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Custom Design {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer locale="en" />
    </>
  );
}
