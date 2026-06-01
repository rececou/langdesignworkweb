import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ElizabethPage() {
  return (
    <>
      <Header locale="en" />

      {/* Hero */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">OUR CREATORS</p>
          <h1 className="text-4xl font-bold mb-4">Elizabeth Xiaoyue Lang</h1>
          <p className="text-gray-600 max-w-2xl mb-6">
            Art and custom design — oil painting, illustration, and handmade work inspired by emotion and colour.
          </p>
          <div className="flex gap-4">
            <Link href="/elizabeth" className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors font-medium">
              See the work
            </Link>
            <Link href="/elizabeth-custom-design" className="border border-gray-900 text-gray-900 px-6 py-3 rounded hover:bg-gray-100 transition-colors font-medium">
              Custom Design
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Portfolio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-100 aspect-square rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Artwork {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer locale="en" />
    </>
  );
}
