'use client';

import SeoMeta from '@/components/SeoMeta';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useContactModal } from '@/components/ContactModal';
import { useState } from 'react';
import FluffyCat from '@/components/FluffyCat';

const SITE_URL = "https://www.langdesignwork.com";

export default function ChineseElizabethPage() {
  return (
    <>
      <SeoMeta
        title="伊丽莎白·晓月·郎 | 艺术与定制设计 | LangDesignWork"
        description="探索伊丽莎白·晓月·郎的创作旅程，包括受周围人和事物启发的艺术作品，邀请您发现更多。"
        ogTitle="伊丽莎白·晓月·郎 | 艺术与定制设计 | LangDesignWork"
        ogDescription="探索伊丽莎白·晓月·郎的创作旅程，包括受周围人和事物启发的艺术作品，邀请您发现更多。"
        ogImage="/images/og-elizabeth.png"
        ogImageAlt="伊丽莎白·晓月·郎艺术与定制设计"
        canonical={`${SITE_URL}/zh-cn/elizabeth`}
      />

      <Header locale="zh" />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950 text-white overflow-hidden">
        <FluffyCat />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
          <div className="absolute top-32 right-20 w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32" style={{ zIndex: 25 }}>
          <p className="text-sm text-purple-400 uppercase tracking-widest mb-2">创作者</p>
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">伊丽莎白·郎的艺术旅程</h1>
          <p className="text-xl text-gray-300 max-w-xl mb-8">
            色彩、情感与形式。油画、插画与手工设计。
          </p>
          <div className="flex gap-4">
            <Link href="/elizabeth-custom-design" className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all hover:scale-105 font-medium border border-white/20">
              查看定制设计
            </Link>
            <ContactButton text="与我们合作" />
          </div>
        </div>
      </section>

      {/* Creator intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">伊丽莎白·晓月·郎</h2>
          <p className="text-gray-600 max-w-2xl mb-6">
            色彩、情感与形式。油画、插画与手工设计 —— 在言语之前，艺术已经发声。
          </p>
        </div>
      </section>

      {/* Railway — interactive card */}
      <section className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <InteractiveImageCard
                src="/images/elizabeth-railway.jpg"
                alt="回收材料制作的火车站模型"
                accent="from-purple-500 to-indigo-500"
              />
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">伊丽莎白·郎火车站模型</h3>
                <p className="text-gray-600 mb-4">
                  2025年夏天，我在伦敦的{' '}
                  <a href="https://www.arts.ac.uk/study-at-ual/short-courses/stories/exploring-architecture-with-a-short-course-elizabeths-story" target="_blank" rel="noopener noreferrer" className="text-[#FF6B6B] hover:underline">中央圣马丁艺术学院</a>{' '}
                  暑期课程期间设计了这座火车站。
                </p>
                <p className="text-gray-600">
                  这座火车站主要由纸板和回收材料建造。我很喜欢在学习建筑概念的同时制作这个原型。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Silent Eyes — interactive card */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 group">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <InteractiveImageCard
                src="/images/elizabeth-silent-eyes.jpg"
                alt="水彩画《沉默的眼睛》"
                accent="from-pink-500 to-rose-500"
                aspect="aspect-[3/4]"
              />
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-pink-600 transition-colors">沉默的眼睛</h3>
                <p className="text-gray-600 mb-4">
                  这件作品在2024年香港科技大学"共融色彩"艺术展上展出。
                </p>
                <p className="text-gray-600 mb-6">
                  它结合了水彩和纸艺，创造出迷人的3D效果。我为这件作品感到非常自豪，因为它反映了我通过设计对艺术探索和情感的持续实验。
                </p>
                <a href="https://deo.hkust.edu.hk/events/colors-inclusion-artwork-exhibition?utm_source=website&utm_medium=button&utm_campaign=button-hkust" target="_blank" rel="noopener noreferrer" className="text-[#FF6B6B] hover:text-[#ff5252] font-medium inline-flex items-center gap-1 group/link">
                  港科大DEI活动
                  <span className="transition-transform group-hover/link:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleeting Moment — interactive card */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">瞬间</h3>
                <p className="text-gray-600 mb-6">
                  我的第一幅油画，2025年在香港艺术学院创作。
                </p>
                <Link href="/en/elizabeth/blog/oil-painting" className="text-[#FF6B6B] hover:text-[#ff5252] font-medium inline-flex items-center gap-1 group/link">
                  阅读博客
                  <span className="transition-transform group-hover/link:translate-x-1">→</span>
                </Link>
              </div>
              <InteractiveImageCard
                src="/images/elizabeth-oil-painting.jpg"
                alt="瞬间 男孩油画"
                accent="from-indigo-500 to-purple-500"
                aspect="aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Land of Ma — interactive card */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 group">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <InteractiveImageCard
                src="/images/elizabeth-land-of-ma.jpg"
                alt="伊丽莎白·郎 大地之色 彩笔"
                accent="from-yellow-500 to-orange-500"
                aspect="aspect-[3/4]"
              />
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-600 transition-colors">大地之色</h3>
                <p className="text-gray-600">
                  这幅彩笔画是为妈妈的生日创作的 💫。我也想表达对所有父母的感激之情！
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery — Interactive cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-2">"我爱艺术，我爱把想法变成现实 🎨"</h2>
          <p className="text-gray-600 mb-8">
            以下是我的一些作品，全部创作于2023年以来。如果想看更多，请通过{' '}
            <ContactLink /> 表单给我发消息！
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <InteractiveGalleryCard
              src="/images/elizabeth-joy.jpg"
              alt="快乐肖像粉彩"
              title="喜悦"
              subtitle="粉彩，香港"
              accent="from-pink-500 to-rose-500"
            />
            <InteractiveGalleryCard
              src="/images/elizabeth-yeye.jpg"
              alt="爷爷静物铅笔"
              title="惊奇"
              subtitle="铅笔，北京"
              accent="from-purple-500 to-indigo-500"
            />
            <InteractiveGalleryCard
              src="/images/elizabeth-girl.jpg"
              alt="女孩肖像粉彩"
              title="宁静"
              subtitle="粉彩，香港"
              accent="from-blue-500 to-cyan-500"
            />
            <InteractiveGalleryCard
              src="/images/elizabeth-cherished.jpg"
              alt="珍爱马克笔"
              title="珍爱"
              subtitle="马克笔，德国米尔海姆"
              accent="from-orange-500 to-red-500"
            />
            <InteractiveGalleryCard
              src="/images/elizabeth-moon-cheese.svg"
              alt="月亮奶酪水彩"
              title="月亮奶酪"
              accent="from-yellow-500 to-green-500"
            />
            <InteractiveGalleryCard
              src="/images/elizabeth-penguin.jpg"
              alt="企鹅素描"
              title="企鹅"
              accent="from-gray-600 to-gray-800"
            />
            <InteractiveGalleryCard
              src="/images/elizabeth-butterfly.svg"
              alt="蝴蝶丙烯"
              title="蝴蝶"
              accent="from-fuchsia-500 to-purple-500"
            />
            <InteractiveGalleryCard
              src="/images/elizabeth-heart.jpg"
              alt="心形钢笔画"
              title="心形钢笔画"
              accent="from-red-500 to-pink-500"
            />
          </div>
        </div>
      </section>

      {/* CTA — interactive cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">探索伊丽莎白·郎设计的创意世界</h2>
          <p className="text-gray-600 mb-8">
            深入伊丽莎白·晓月·郎的艺术旅程，想象力与工艺在这里相遇。
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <InteractiveCTACard
              title="艺术作品"
              desc="体验独家精选的原创绘画、插画和混合媒体作品。"
              accent="from-purple-500 to-pink-500"
              emoji="🎨"
            />
            <InteractiveCTACard
              title="定制设计"
              desc="将想法变为现实的定制设计服务。"
              accent="from-indigo-500 to-blue-500"
              emoji="✨"
            />
            <InteractiveCTACard
              title="手工创作"
              desc="浏览各种手工创作，包括手绘装饰和配饰。"
              accent="from-pink-500 to-rose-500"
              emoji="🧶"
            />
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="py-16 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">联系我</h2>
          <p className="text-gray-600 mb-6">
            对艺术作品、设计、手工创作感兴趣，或者有什么好想法？我很想听到你的声音！
          </p>
          <ContactButton text="给我发消息 →" />
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
  aspect = "aspect-video",
}: {
  src: string;
  alt: string;
  accent: string;
  aspect?: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative rounded-xl overflow-hidden ${aspect} group cursor-pointer transition-all duration-300 ${hovered ? 'shadow-lg -translate-y-1' : ''}`}
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
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
    </div>
  );
}

function InteractiveGalleryCard({
  src,
  alt,
  title,
  subtitle,
  accent,
}: {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  accent: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-default group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accent} z-10`} />
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover transition-transform duration-500 ${hovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-3">
        <h3 className={`font-bold transition-colors duration-300 ${hovered ? 'text-purple-600' : ''}`}>{title}</h3>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
    </article>
  );
}

function InteractiveCTACard({
  title,
  desc,
  accent,
  emoji,
}: {
  title: string;
  desc: string;
  accent: string;
  emoji: string;
}) {
  const open = useContactModal((state) => state.open);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative bg-white rounded-2xl p-6 shadow-sm cursor-pointer transition-all duration-300 overflow-hidden ${hovered ? 'shadow-xl -translate-y-2' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={open}
    >
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accent}`} />
      <div className="text-3xl mb-3">{emoji}</div>
      <h3 className={`font-bold text-lg mb-2 transition-colors duration-300 ${hovered ? 'text-purple-600' : ''}`}>{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function ContactButton({ text }: { text: string }) {
  const open = useContactModal((state) => state.open);
  return (
    <button
      onClick={open}
      className="bg-[#FF6B6B] text-white px-6 py-3 rounded hover:bg-[#ff5252] transition-all hover:scale-105 font-medium"
    >
      {text}
    </button>
  );
}

function ContactLink() {
  return (
    <button
      onClick={useContactModal((state) => state.open)}
      className="text-[#FF6B6B] hover:underline"
    >
      联系表单
    </button>
  );
}
