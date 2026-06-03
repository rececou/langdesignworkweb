'use client';

import SeoMeta from '@/components/SeoMeta';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useContactModal } from '@/components/ContactModal';
import YouTubeVideo from '@/components/YouTubeVideo';
import { useState } from 'react';
import SingleButterfly from '@/components/SingleButterfly';

export default function ChineseLilianePage() {
  return (
    <>
      <SeoMeta
        title="莉莉安·晓旭·郎 | 创意与原型 | LangDesignWork"
        description="加入莉莉安·晓旭·郎的发现频道！探索辩论、创意项目和灵感见解。"
        ogTitle="莉莉安·晓旭·郎 | 创意与原型 | LangDesignWork"
        ogDescription="加入莉莉安·晓旭·郎的发现频道！探索辩论、创意项目和灵感见解。"
        ogImage="/images/og-liliane.png"
        ogImageAlt="莉莉安·晓旭·郎发现频道 — 创意、辩论和见解"
        canonical="https://www.langdesignwork.com/zh-cn/liliane"
      />

      <Header locale="zh" />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-red-950 text-white overflow-hidden">
        <SingleButterfly />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-2 h-2 bg-red-400 rounded-full animate-pulse" />
          <div className="absolute top-32 right-20 w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-red-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <p className="text-sm text-red-400 uppercase tracking-widest mb-2">创作者</p>
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">莉莉安·郎探索频道</h1>
          <p className="text-xl text-gray-300 max-w-xl mb-8">
            从AI原型到手工创作 —— 一个充满想法的世界。
          </p>
          <HeroCTAs />
        </div>
      </section>

      {/* Creator intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">莉莉安·晓旭·郎</h2>
          <p className="text-gray-600 max-w-2xl mb-6">
            从AI原型到手工创作 —— 一个充满想法的世界。来探索，来分享你的观点。
          </p>
        </div>
      </section>

      {/* Collaboration with Elizabeth — interactive card */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <InteractiveImageCard
              src="/images/lili-remake.jpg"
              alt="莉莉安·晓旭·郎 AI原型 REME智能家居设备"
              accent="from-red-500 to-orange-500"
            />
            <div>
              <h3 className="text-xl font-bold mb-2">与伊丽莎白的合作</h3>
              <p className="text-sm text-gray-500 mb-2">
                <strong>AI驱动的原型</strong>
              </p>
              <p className="text-gray-600 mb-6">
                我们与妹妹伊丽莎白·晓月·郎共同开发的 REME 智能家居设备获得了 2024 年{' '}
                <a href="https://technovationchallenge.org/?utm_source=website&utm_medium=content&utm_campaign=technovation" target="_blank" rel="noopener noreferrer" className="text-[#FF6B6B] hover:underline">全球科技创新女生竞赛</a>{' '}
                半决赛奖（少年组）。
              </p>
              <Link href="/en/home/blog/ai-creativity-learning?utm_source=website&utm_medium=button&utm_campaign=button-explore" className="text-[#FF6B6B] hover:text-[#ff5252] font-medium inline-flex items-center gap-1 group">
                了解更多
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* REME section — interactive card */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 group">
            <h2 className="text-2xl font-bold mb-4 group-hover:text-red-600 transition-colors">REME</h2>
            <p className="text-gray-600 mb-4">
              REME 是一款智能家居设备，旨在帮助长者更独立地生活。它提供了一个可靠、易用的解决方案，用于管理日常事务和应对紧急情况。
              随着全球老年人口的增长，我们希望这个想法能带来改变。
            </p>
            <p className="text-gray-600 mb-6">
              在我们的YouTube视频中了解它的工作原理。
            </p>
            <div className="max-w-3xl">
              <YouTubeVideo
                videoId="nZ6znfTmR3g"
                thumbnail="/images/reme-video-thumb.png"
                title="REME智能家居设备 | 科技创新半决赛 | 莉莉安·郎"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Through My Lens — interactive card */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">透过我的镜头：莉莉安的思考</h3>
              <p className="text-gray-600 mb-6">
                我正在探索如何将AI作为一种创意工具使用，同时保持对其局限性和成本的意识 —— 无论是对社会还是对地球。
              </p>
            </div>
            <InteractiveImageCard
              src="/images/lili-reflections.jpg"
              alt="莉莉安对AI使用的思考"
              accent="from-orange-500 to-yellow-500"
              flipOrder
            />
          </div>
        </div>
      </section>

      {/* The AI Paradox */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">
              <strong>人工智能悖论：赋能与依赖</strong>
            </h2>
            <p className="text-sm text-gray-400 mt-1">2025年10月</p>
          </div>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
            <p>
              在当今时代，人工智能是一种强大的工具，它可以帮助我们很快地创建生成图像、视频、内容和各种计算。但是，如果我们过度使用这一工具，我们慢慢地依赖于它，依靠它完成很多简单的事情，而如果没有它，我们将无法完成或者很难完成本可以轻松做完的任务。而现在，知名公司也在悄悄的使用这一工具，将其纳入自己的产品中。随着人工智能逐渐成为我们日常生活的一部分，无论我们喜欢与否，我们都必须知道使用这一强大工具的后果。
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
          <p className="text-sm text-gray-400 mt-6">
            原文：https://www.langdesignwork.com/discover
          </p>
        </div>
      </section>

      {/* Works — Interactive cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 mb-8">
            下面是我的一些作品。我的博客和画廊仍在建设之中，敬请期待！
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <InteractiveWorkCard
              src="/images/lili-ideas.jpg"
              alt="莉莉安·晓旭·郎 创意"
              title="创意与原型"
              poem={
                <>
                  天马行空，<br />
                  乐趣自在混沌。<br />
                  有些精彩，有些平淡……<br />
                  这就是乐趣所在。
                </>
              }
              accent="from-red-500 to-pink-500"
            />

            <InteractiveWorkCard
              src="/images/lili-artwork-home.jpg"
              alt="莉莉安·晓旭·郎 创作"
              title="探索与创造"
              poem={
                <>
                  用双手去探索。<br />
                  用心去创造。
                </>
              }
              accent="from-orange-500 to-yellow-500"
            />

            <InteractiveWorkCard
              src="/images/lili-rugby.jpg"
              alt="莉莉安·晓旭·郎 运动"
              title="运动精神"
              poem="团队合作，这就是全部。"
              accent="from-yellow-500 to-green-500"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">关注我，常联系</h2>
          <h3 className="text-xl mb-6">
            如果有问题或想讨论话题，我期待你的来信！
          </h3>
          <ContactButton text="给我留言 →" />
        </div>
      </section>

      <Footer locale="zh" />
    </>
  );
}

/* ── Interactive Components ── */

function InteractiveImageCard({
  src,
  alt,
  accent,
  flipOrder = false,
}: {
  src: string;
  alt: string;
  accent: string;
  flipOrder?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  const imageEl = (
    <div
      className={`relative rounded-xl overflow-hidden aspect-video group cursor-pointer transition-all duration-300 ${hovered ? 'shadow-lg -translate-y-1' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accent} z-10`} />
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-transform duration-500 ${hovered ? 'scale-110' : 'scale-100'}`}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className={`absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300`} />
    </div>
  );

  return flipOrder ? <>{imageEl}</> : <>{imageEl}</>;
}

function InteractiveWorkCard({
  src,
  alt,
  title,
  poem,
  accent,
}: {
  src: string;
  alt: string;
  title: string;
  poem: React.ReactNode;
  accent: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-default group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`relative aspect-square overflow-hidden`}>
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accent} z-10`} />
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover transition-transform duration-500 ${hovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      </div>
      <div className="p-6">
        <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${hovered ? 'text-[#FF6B6B]' : ''}`}>{title}</h3>
        <p className={`text-gray-600 text-sm italic transition-colors duration-300 ${hovered ? 'text-gray-800' : ''}`}>{poem}</p>
      </div>
    </article>
  );
}

function HeroCTAs() {
  const open = useContactModal((state) => state.open);
  return (
    <div className="flex gap-4">
      <Link
        href="/liliane-create"
        className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all hover:scale-105 font-medium border border-white/20"
      >
        查看作品
      </Link>
      <button
        onClick={open}
        className="bg-[#FF6B6B] text-white px-6 py-3 rounded-lg hover:bg-[#ff5252] transition-all hover:scale-105 font-medium"
      >
        与我们合作
      </button>
    </div>
  );
}

function ContactButton({ text }: { text: string }) {
  const open = useContactModal((state) => state.open);
  return (
    <button
      onClick={open}
      className="inline-block bg-[#FF6B6B] text-white px-6 py-3 rounded hover:bg-[#ff5252] transition-all hover:scale-105 font-medium"
    >
      {text}
    </button>
  );
}
