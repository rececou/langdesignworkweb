import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ToteBagBlogPage() {
  return (
    <>
      <Header locale="en" />

      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/en/home/blog" className="text-sm text-gray-500 hover:text-[#FF6B6B] mb-4 inline-block">
            ← Back to Blog
          </Link>
          <p className="text-sm text-[#FF6B6B] mb-2">Liliane</p>
          <h1 className="text-3xl font-bold mb-4">
            Looking for Your Next Creative Idea? Discover Inspiration Through Everyday Design
          </h1>
          <p className="text-sm text-gray-400 mb-8">by Liliane Xiaoxu Lang</p>

          <div className="bg-gray-100 aspect-video rounded-lg mb-8 flex items-center justify-center">
            <span className="text-gray-400">Featured Image</span>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>
              Liliane Xiaoxu Lang on finding creative inspiration through everyday design — including handmade tote bags that tell personal stories through wearable art.
            </p>
            <p>
              Creativity doesn't always come from grand gestures. Sometimes it's in the small details of daily life — a pattern on a coffee cup, the way light falls through a window, or the texture of a worn leather bag.
            </p>
          </div>
        </div>
      </article>

      <Footer locale="en" />
    </>
  );
}
