import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function VelvetEssencePage() {
  return (
    <>
      <Header locale="en" />

      <section className="bg-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-pink-200 rounded-full flex items-center justify-center">
              <span className="text-3xl">🎨</span>
            </div>
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-widest">FASHION & PRINT</p>
              <h1 className="text-4xl font-bold">Velvet Essence Design</h1>
            </div>
          </div>
          <p className="text-gray-600 max-w-2xl mb-8">
            Hand-printed t-shirts and tote bags, wearable art made with care and creativity.
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
          <h2 className="text-2xl font-bold mb-8">Collection</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="bg-gray-200 aspect-square flex items-center justify-center">
                  <span className="text-gray-400">Design {i}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-1">Hand-Printed Design {i}</h3>
                  <p className="text-sm text-gray-600">T-shirt / Tote Bag</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer locale="en" />
    </>
  );
}
