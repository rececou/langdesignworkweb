import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function OilPaintingBlogPage() {
  return (
    <>
      <Header locale="en" />

      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/en/home/blog" className="text-sm text-gray-500 hover:text-[#FF6B6B] mb-4 inline-block">
            ← Back to Blog
          </Link>
          <p className="text-sm text-[#FF6B6B] mb-2">Elizabeth</p>
          <h1 className="text-3xl font-bold mb-4">
            How Did I Do My First Oil Painting: From Canvas to Creation
          </h1>
          <p className="text-sm text-gray-400 mb-8">by Elizabeth Xiaoyue Lang</p>

          <div className="bg-gray-100 aspect-video rounded-lg mb-8 flex items-center justify-center">
            <span className="text-gray-400">Featured Image</span>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>
              Elizabeth Xiaoyue Lang shares her first oil painting experience — from sketching proportions to colour, texture, and the challenges of hair and fabric. Created at the Hong Kong Art School.
            </p>
            <p>
              The journey from a blank canvas to a finished oil painting is both exciting and challenging. Every stroke matters, every colour choice tells a story.
            </p>
          </div>
        </div>
      </article>

      <Footer locale="en" />
    </>
  );
}
