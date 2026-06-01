import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MatrixRain from '@/components/MatrixRain';
import Link from 'next/link';

export default function ChineseHomePage() {
  return (
    <>
      <Header locale="zh" />

      {/* Hero Section */}
      <section className="bg-black text-white py-20 relative overflow-hidden">
        {/* Matrix rain animation */}
        <MatrixRain />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">创造。</span>{' '}
            <span className="text-white">实验。</span>{' '}
            <span className="text-[#FF6B6B]">乐趣。</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mb-8">
            一个为创客和创作者打造的作品集社区，一个每个人都能享受的真实产品发射平台。
          </p>
          <div className="flex gap-4">
            <Link
              href="/zh-cn/liliane"
              className="bg-[#FF6B6B] text-white px-6 py-3 rounded hover:bg-[#ff5252] transition-colors font-medium"
            >
              探索作品集
            </Link>
            <a
              href="#contact"
              className="contact-modal-trigger border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-black transition-colors font-medium"
            >
              与我们合作
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">我们的创作者</p>
          <h2 className="text-3xl font-bold mb-8">认识创作者</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Liliane */}
            <Link href="/zh-cn/liliane" className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3] block">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-sm">莉莉安 晓旭 Lang</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <p className="text-xs text-white/80 uppercase tracking-widest mb-1">创意与原型设计</p>
                <h3 className="text-xl font-bold text-white">莉莉安 晓旭 Lang</h3>
              </div>
            </Link>

            {/* Elizabeth */}
            <Link href="/zh-cn/elizabeth" className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3] block">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-sm">伊丽莎白 晓月 Lang</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <p className="text-xs text-white/80 uppercase tracking-widest mb-1">艺术与定制设计</p>
                <h3 className="text-xl font-bold text-white">伊丽莎白 晓月 Lang</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">我们的合作伙伴</p>
          <h2 className="text-3xl font-bold mb-8">合作品牌</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Kidlab UK */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-16 h-16 bg-yellow-100 rounded-full mb-4 flex items-center justify-center">
                <span className="text-2xl">💡</span>
              </div>
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">教育玩具</p>
              <h3 className="text-xl font-bold mb-2">Kidlab UK</h3>
              <p className="text-gray-600 mb-4">
                DIY木质STEM套件，让孩子们通过动手游戏搭建、思考和探索。
              </p>
              <Link
                href="/partner/kidslabuk"
                className="text-[#FF6B6B] hover:text-[#ff5252] font-medium inline-flex items-center gap-1"
              >
                在Etsy上购买 →
              </Link>
            </div>

            {/* Velvet Essence */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="w-16 h-16 bg-pink-100 rounded-full mb-4 flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">时尚与印花</p>
              <h3 className="text-xl font-bold mb-2">Velvet Essence Design</h3>
              <p className="text-gray-600 mb-4">
                手工印花T恤和帆布袋，用心和创意制作的可穿戴艺术。
              </p>
              <Link
                href="/partner/velvetessencedesign"
                className="text-[#FF6B6B] hover:text-[#ff5252] font-medium inline-flex items-center gap-1"
              >
                在Etsy上购买 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="work-with-us" className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">与我们合作</p>
          <h2 className="text-3xl font-bold mb-4">
            优秀的品牌值得拥有{' '}
            <span className="text-[#FF6B6B]">更广阔的视野。</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl">
            Remecou通过社区、内容和战略合作伙伴关系，搭建独立品牌与受众之间的桥梁。
          </p>
          <a
            href="#contact"
            className="contact-modal-trigger text-[#FF6B6B] hover:text-[#ff5252] font-medium inline-flex items-center gap-1"
          >
            探索合作机会 →
          </a>
        </div>
      </section>

      <Footer locale="zh" />
    </>
  );
}
