import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

export default function ChineseElizabethPage() {
  return (
    <>
      <Header locale="zh" />

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">OUR CREATORS</p>
          <h1 className="text-4xl font-bold mb-4">伊丽莎白 · 晓月 · Lang</h1>
          <p className="text-gray-600 max-w-2xl mb-6">
            艺术和定制设计 —— 受情感和色彩启发的油画、插画和手工作品。
          </p>
          <div className="flex gap-4">
            <Link href="/zh-cn/elizabeth" className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors font-medium">
              查看作品
            </Link>
            <Link href="/elizabeth-custom-design" className="border border-gray-900 text-gray-900 px-6 py-3 rounded hover:bg-gray-100 transition-colors font-medium">
              定制设计
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">作品集</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-100 aspect-square rounded-lg flex items-center justify-center">
                <span className="text-gray-400">作品 {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer locale="zh" />
    </>
  );
}
