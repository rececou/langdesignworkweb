'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useContactModal } from '@/components/ContactModal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
};

export default function ChineseLilianePage() {
  return (
    <>
      <Header locale="zh" />

      {/* Hero */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">莉莉安 Lang 探索频道</h1>
          <p className="text-gray-600 max-w-2xl">
            很高兴在这里与你相遇。这是我的探索，这里记录着我的探索旅程，装满沿途的思考，希望你能常来看看，更期待听到你的声音
          </p>
          <p className="text-sm text-gray-400 mt-2">@莉莉安 - 晓旭 - Lang</p>
        </div>
      </section>

      {/* REME Collaboration */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-100 aspect-video rounded-lg flex items-center justify-center">
              <span className="text-gray-400">制作人工智能小项目</span>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">与伊丽莎白一起学</h2>
              <p className="text-sm text-gray-500 mb-2">
                <strong>人工智能应用</strong>
              </p>
              <p className="text-gray-600 mb-6">
                我们与妹妹伊丽莎白 晓月 Lang 共同开发的 REME 智能家居设备获得了 2024 年全球科技创新女生竞赛半决赛奖（少年组）。
              </p>
              <Link href="/liliane-create" className="text-[#FF6B6B] hover:text-[#ff5252] font-medium inline-flex items-center gap-1">
                了解更多 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* REME */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">REME</h2>
          <p className="text-gray-600 mb-6">
            来认识一下REME吧！它是守护长辈的智能家居小帮手，让每一天的生活都更轻松、更自在。我们的介绍视频正在从油管运到抖音的路上，马上就到，记得关注哦！😉
          </p>
          <div className="bg-black rounded-lg aspect-video max-w-3xl flex items-center justify-center">
            <span className="text-white text-sm">Video player - REME 智能家居设备</span>
          </div>
        </div>
      </section>

      {/* AI Paradox */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-100 aspect-video rounded-lg flex items-center justify-center">
              <span className="text-gray-400">莉莉安的思考</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">莉莉安的思考</h3>
              <p className="text-gray-600 mb-4">
                学习AI的应用使我不断地思考，AI会对未来人类，水资源和环境将有什么影响。
              </p>
              <h2 className="text-2xl font-bold mb-4">
                <strong>人工智能悖论：赋能与依赖</strong>
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                <p>
                  在当今时代，人工智能是一种强大的工具，它可以帮助我们很快的创建生成图像、视频、内容和各种计算。但是，如果我们过度使用这一工具，我们慢慢地依赖于它，依靠它完成很多简单的事情，而如果没有它，我们将无法完成或者很难完成本可以轻松做完的任务。而现在，知名公司也在悄悄的使用这一工具，将其纳入自己的产品中。随着人工智能逐渐成为我们日常生活的一部分，无论我们喜欢与否，我们都必须知道使用这一强大工具的后果。
                </p>
                <p>
                  你知道吗，你发送给人工智能的每一个问题或每一张照片，往往会耗费大约 0.26-3.5 毫米的水？它每天使用数十亿加仑的水，而不是用来帮助需要水的人。当前和预计的消耗量会引发严重的环境问题，尤其是在已经面临水资源短缺的地区。
                </p>
                <p>
                  用于人工智能的高性能处理器会产生大量热量。数据中心依赖于大型水冷却系统，每年往往要蒸发数百万加仑的淡水来调节温度，防止服务器损坏。
                </p>
                <p>
                  我并非否定AI的价值，人工智能既有帮助，也有危害。我只是在分享我的认知和想法。下次当你打算生成一张无意义的图片时，请记得它背后真实的"数字水足迹"。
                </p>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                原文请浏览：https://www.langdesignwork.com/discover
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 mb-8">
            下面是我的一些作品。我的博客和画廊仍在建设之中，敬请期待！
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="bg-gray-200 aspect-square flex items-center justify-center">
                <span className="text-gray-400">创意笔记</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">创意笔记</h3>
                <p className="text-gray-600 text-sm italic">天马行空，乐趣自在混沌。</p>
              </div>
            </article>
            <article className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="bg-gray-200 aspect-square flex items-center justify-center">
                <span className="text-gray-400">创造</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">创造</h3>
                <p className="text-gray-600 text-sm italic">探索中感知世界，创造中表达自我。</p>
              </div>
            </article>
            <article className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="bg-gray-200 aspect-square flex items-center justify-center">
                <span className="text-gray-400">橄榄球</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">运动精神</h3>
                <p className="text-gray-600 text-sm italic">我和我的团队。</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4 text-center">关注我，常联系</h2>
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-gray-400 text-xs">微信</span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                <span className="text-gray-400 text-xs">抖音 QR</span>
              </div>
            </div>
          </div>
          <div className="max-w-xl mx-auto">
            <h3 className="text-xl font-bold mb-6 text-center">
              如果有问题或想讨论话题，我期待你的来信！
            </h3>
            <div className="text-center">
              <ContactButton text="给我留言 →" />
            </div>
          </div>
        </div>
      </section>

      <Footer locale="zh" />
    </>
  );
}

function ContactButton({ text }: { text: string }) {
  const open = useContactModal((state) => state.open);
  return (
    <button
      onClick={open}
      className="inline-block bg-[#FF6B6B] text-white px-6 py-3 rounded hover:bg-[#ff5252] transition-colors font-medium"
    >
      {text}
    </button>
  );
}
