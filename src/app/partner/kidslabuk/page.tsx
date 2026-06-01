import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function KidlabPage() {
  return (
    <>
      <Header locale="en" />

      <section className="bg-yellow-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-yellow-200 rounded-full flex items-center justify-center">
              <span className="text-3xl">💡</span>
            </div>
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-widest">EDUCATIONAL TOYS</p>
              <h1 className="text-4xl font-bold">Kidlab UK</h1>
            </div>
          </div>
          <p className="text-gray-600 max-w-2xl mb-8">
            DIY wooden STEM kits that get children building, thinking, and exploring through hands-on play. Starting from just £9.99.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="bg-[#FF6B6B] text-white px-6 py-3 rounded hover:bg-[#ff5252] transition-colors font-medium">
              Shop on Etsy →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Our Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="bg-gray-200 aspect-square flex items-center justify-center">
                  <span className="text-gray-400">Product {i}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-1">STEM Kit {i}</h3>
                  <p className="text-sm text-gray-600">Educational wooden toy</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">Available On</h2>
          <div className="flex gap-6">
            <Link href="#" className="bg-white px-6 py-3 rounded shadow-sm hover:shadow-md transition-shadow font-medium">
              Etsy UK
            </Link>
            <Link href="#" className="bg-white px-6 py-3 rounded shadow-sm hover:shadow-md transition-shadow font-medium">
              TikTok Shop UK
            </Link>
            <Link href="#" className="bg-white px-6 py-3 rounded shadow-sm hover:shadow-md transition-shadow font-medium">
              eBay UK
            </Link>
          </div>
        </div>
      </section>

      <Footer locale="en" />
    </>
  );
}
