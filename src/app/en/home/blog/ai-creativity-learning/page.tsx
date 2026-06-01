import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AiCreativityBlogPage() {
  return (
    <>
      <Header locale="en" />

      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/en/home/blog" className="text-sm text-gray-500 hover:text-[#FF6B6B] mb-4 inline-block">
            ← Back to Blog
          </Link>
          <p className="text-sm text-[#FF6B6B] mb-2">Blog</p>
          <h1 className="text-3xl font-bold mb-4">
            How Can AI and Creativity Revolutionize Learning?
          </h1>
          <p className="text-sm text-gray-400 mb-8">by Liliane Xiaoxu Lang</p>

          <div className="bg-gray-100 aspect-video rounded-lg mb-8 flex items-center justify-center">
            <span className="text-gray-400">Featured Image</span>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>
              How Liliane and Elizabeth Lang built REME, a smart home device for elderly care, winning recognition at the 2024 Global Technovation Girls Competition — a case study in learning through action.
            </p>
            <p>
              AI and creativity together can transform how we approach learning. When young minds combine technology with imagination, the possibilities are endless.
            </p>
          </div>
        </div>
      </article>

      <Footer locale="en" />
    </>
  );
}
