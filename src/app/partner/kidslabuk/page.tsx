import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useContactModal } from '@/components/ContactModal';

const products = [
  {
    name: "Pick & Mix DIY Kit",
    description: "4-in-1 STEM DIY wooden Montessori toy — build, learn, and have fun!",
    image: "/kidlab-pick-and-mix.jpg",
  },
  {
    name: "DIY STEM Drone",
    description: "Wooden educational drone quadcopter aircraft with remote control.",
    image: "/kidlab-pick-and-mix.jpg",
  },
  {
    name: "DIY STEM Music Box",
    description: "Build-your-own musical piano — wooden science experiment kit.",
    image: "/kidlab-pick-and-mix.jpg",
  },
  {
    name: "DIY STEM RC Car",
    description: "Wooden remote control car racer — engineering meets fun.",
    image: "/kidlab-pick-and-mix.jpg",
  },
  {
    name: "DIY STEM Tensile Structure",
    description: "Defy gravity with a floating wooden sculpture — hands-on physics.",
    image: "/kidlab-pick-and-mix.jpg",
  },
  {
    name: "DIY STEM Newton's Pendulum",
    description: "Discover the laws of motion with a wooden pendulum kit.",
    image: "/kidlab-pick-and-mix.jpg",
  },
  {
    name: "DIY STEM Electric Tank",
    description: "Wooden tracked tank with motor — engineering adventure.",
    image: "/kidlab-pick-and-mix.jpg",
  },
  {
    name: "DIY STEM Solar Rover",
    description: "Wooden solar-powered rover — learn about renewable energy.",
    image: "/kidlab-pick-and-mix.jpg",
  },
];

export default function KidlabPage() {
  return (
    <>
      <Header locale="en" />

      {/* Hero */}
      <section className="bg-yellow-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center overflow-hidden relative shadow-sm">
              <Image
                src="/kidlab-logo.jpg"
                alt="Kidlab UK"
                width={80}
                height={80}
                className="object-cover"
              />
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
            <Link href="https://kidlabuk.etsy.com/" target="_blank" rel="noopener noreferrer" className="bg-[#FF6B6B] text-white px-6 py-3 rounded hover:bg-[#ff5252] transition-colors font-medium">
              Shop on Etsy →
            </Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-2">Memories are built, not scrolled</h2>
          <p className="text-gray-600 mb-8">Wooden DIY Stem Kits — hands-on fun for curious minds.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.name} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">Join the community</h2>
          <p className="text-gray-600 mb-8">
            New kits, behind-the-scenes builds, and learning tips — follow Kidlab UK across platforms for exclusive previews and updates.
          </p>
          <div className="flex gap-6">
            <Link href="https://www.etsy.com/shop/kidlabuk/" target="_blank" rel="noopener noreferrer" className="bg-white px-6 py-3 rounded shadow-sm hover:shadow-md transition-shadow font-medium text-gray-800">
              Etsy UK
            </Link>
            <Link href="https://www.tiktok.com/@kidlab.uk" target="_blank" rel="noopener noreferrer" className="bg-white px-6 py-3 rounded shadow-sm hover:shadow-md transition-shadow font-medium text-gray-800">
              TikTok Shop UK
            </Link>
            <Link href="https://www.ebay.co.uk/sch/i.html?item=147257686081&rt=nc&_trksid=p4429486.m3561.l161211&_ssn=phonedoctor_uk" target="_blank" rel="noopener noreferrer" className="bg-white px-6 py-3 rounded shadow-sm hover:shadow-md transition-shadow font-medium text-gray-800">
              eBay UK
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Become our partner or have questions?</h2>
          <p className="text-gray-600 mb-8">Get in touch now!</p>
          <ContactButton />
        </div>
      </section>

      <Footer locale="en" />
    </>
  );
}

function ContactButton() {
  const { open } = useContactModal();

  return (
    <button
      onClick={open}
      className="bg-[#FF6B6B] text-white px-6 py-3 rounded hover:bg-[#ff5252] transition-colors font-medium"
    >
      Send a message →
    </button>
  );
}
