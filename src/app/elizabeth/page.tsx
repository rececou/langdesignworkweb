import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function ElizabethPage() {
  return (
    <>
      <Header locale="en" />

      {/* Hero */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Designing Journey of Elizabeth Lang</h1>
        </div>
      </section>

      {/* Creator intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">OUR CREATORS</p>
          <h2 className="text-3xl font-bold mb-4">Elizabeth Xiaoyue Lang</h2>
          <p className="text-gray-600 max-w-2xl mb-6">
            Colour, emotion, and form. Oil painting, illustration, and handmade design — art that speaks before words do.
          </p>
          <div className="flex gap-4">
            <Link href="/elizabeth-custom-design" className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors font-medium">
              Explore Custom Design
            </Link>
            <Link href="/remecou" className="border border-gray-900 text-gray-900 px-6 py-3 rounded hover:bg-gray-100 transition-colors font-medium">
              Partner with us
            </Link>
          </div>
        </div>
      </section>

      {/* Railway */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden aspect-video">
              <Image
                src="/images/elizabeth-railway.jpg"
                alt="recycled materials railway UAL"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Elizabeth Xiaoyue Railway</h3>
              <p className="text-gray-600 mb-4">
                Designed during my time at{' '}
                <Link href="#" className="text-[#FF6B6B] hover:underline">Central Saint Martins College of Art</Link>{' '}
                in London in the summer of 2025.
              </p>
              <p className="text-gray-600">
                This railway station was primarily constructed from cardboard and recycled materials. I really enjoyed learning architectural concepts while building this prototype.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Silent Eyes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden aspect-[3/4]">
              <Image
                src="/images/elizabeth-silent-eyes.jpg"
                alt="water colour painting silent eyes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Silent Eyes</h3>
              <p className="text-gray-600 mb-4">
                This work was presented at the The Hong Kong University of Science and Technology Colors of Inclusion Artwork Exhibition in 2024.
              </p>
              <p className="text-gray-600 mb-6">
                It features a combination of water colour and paper crafts, creating a captivating 3D effect. I am very proud of this piece, as it reflects my ongoing experimentation with artistic exploration and emotion through design.
              </p>
              <Link href="#" className="text-[#FF6B6B] hover:text-[#ff5252] font-medium inline-flex items-center gap-1">
                HKUST DEI event →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fleeting Moment */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Fleeting Moment</h3>
              <p className="text-gray-600 mb-6">
                My first oil painting, created during my time at the Hong Kong Art School in 2025.
              </p>
              <Link href="/en/elizabeth/blog/oil-painting" className="text-[#FF6B6B] hover:text-[#ff5252] font-medium inline-flex items-center gap-1">
                Read the blog →
              </Link>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-[3/4]">
              <Image
                src="/images/elizabeth-oil-painting.jpg"
                alt="fleeting moment boy oil painting"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Land of Ma */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden aspect-[3/4]">
              <Image
                src="/images/elizabeth-land-of-ma.jpg"
                alt="elizabeth lang land of ma colour pens"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Land of Ma</h3>
              <p className="text-gray-600">
                This pen drawing was created for my mum's birthday 💫. I also wanted to express my appreciation for all the parents out there!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-2">"I love art, and I love to bring ideas to life 🎨"</h2>
          <p className="text-gray-600 mb-8">
            Here are some of my artworks, all created since 2023. If you'd like to see more, please send me a message through the{' '}
            <a href="#contact" className="contact-modal-trigger text-[#FF6B6B] hover:underline font-medium">Get in Touch</a> form!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Joy */}
            <article className="rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="/images/elizabeth-joy.jpg"
                  alt="Happy Portrait Pastels"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-bold">Joy</h3>
                <p className="text-sm text-gray-500">Pastels, Hong Kong</p>
              </div>
            </article>

            {/* Wonder */}
            <article className="rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="/images/elizabeth-yeye.jpg"
                  alt="yeye still life pencil"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-bold">Wonder</h3>
                <p className="text-sm text-gray-500">Pencil, Beijing</p>
              </div>
            </article>

            {/* Peaceful */}
            <article className="rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="/images/elizabeth-girl.jpg"
                  alt="girl portrait pastels"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-bold">Peaceful</h3>
                <p className="text-sm text-gray-500">Pastels, Hong Kong</p>
              </div>
            </article>

            {/* Cherished */}
            <article className="rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="/images/elizabeth-cherished.jpg"
                  alt="Cherished marker art"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-bold">Cherished</h3>
                <p className="text-sm text-gray-500">Marker, Mülheim Germany</p>
              </div>
            </article>

            {/* Moon Cheese */}
            <article className="rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="/images/elizabeth-moon-cheese.svg"
                  alt="Moon Cheese water color"
                  fill
                  className="object-cover"
                />
              </div>
            </article>

            {/* Penguin */}
            <article className="rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="/images/elizabeth-penguin.jpg"
                  alt="penguin sketch"
                  fill
                  className="object-cover"
                />
              </div>
            </article>

            {/* Butterfly */}
            <article className="rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="/images/elizabeth-butterfly.svg"
                  alt="butterfly acrylic colour"
                  fill
                  className="object-cover"
                />
              </div>
            </article>

            {/* Heart Pen */}
            <article className="rounded-lg overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src="/images/elizabeth-heart.jpg"
                  alt="Heart Pen"
                  fill
                  className="object-cover"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Explore the Creative World of Elizabeth Lang's Design</h2>
          <p className="text-gray-600 mb-8">
            Delve into the artistic journey of Elizabeth Xiaoyue Lang, where imagination meets craftsmanship.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold mb-2">Artworks</h3>
              <p className="text-sm text-gray-500">Experience an exclusive selection of original paintings, illustrations, and mixed-media pieces.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold mb-2">Custom Design</h3>
              <p className="text-sm text-gray-500">Transform ideas into reality with bespoke design.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-bold mb-2">Handmade Crafts</h3>
              <p className="text-sm text-gray-500">Browse a delightful range of homemade crafts, including hand-painted decor and accessories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="py-16 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Interested in artworks, designs, handcrafted creations or got a cool idea? I'd love to hear from you!
          </p>
          <a
            href="#contact"
            className="contact-modal-trigger inline-block bg-[#FF6B6B] text-white px-6 py-3 rounded hover:bg-[#ff5252] transition-colors font-medium"
          >
            Send me a message →
          </a>
        </div>
      </section>

      <Footer locale="en" />
    </>
  );
}
