import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RemecouPage() {
  return (
    <>
      <Header locale="en" />

      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">About Remecou</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Remecou bridges the gap between independent brands and the audiences through community, content, and strategic e-commerce partnerships.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Remecou is the commerce arm of LangDesignWork — a platform built to connect independent creators and brands with the audiences they deserve.
            </p>
            <p>
              Through strategic partnerships, community-building, and content-driven marketing, we help brands grow their reach and build lasting relationships with their customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="font-bold mb-2">Community</h3>
              <p className="text-sm text-gray-600">Building connections between creators and audiences</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="font-bold mb-2">Content</h3>
              <p className="text-sm text-gray-600">Storytelling that resonates and inspires action</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="font-bold mb-2">Partnerships</h3>
              <p className="text-sm text-gray-600">Strategic e-commerce collaborations for growth</p>
            </div>
          </div>
        </div>
      </section>

      <Footer locale="en" />
    </>
  );
}
