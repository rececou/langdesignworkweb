import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "LangDesignWork Blog",
  description: "Explore ideas, creative projects, and reflections from Lang Design Work authors. Follow their journeys of art, craft, and discovery as they share inspiration, insights, and creations drawn from everyday life.",
  openGraph: {
    title: "LangDesignWork Blog",
    description: "Explore ideas, creative projects, and reflections from Lang Design Work authors. Follow their journeys of art, craft, and discovery as they share inspiration, insights, and creations drawn from everyday life.",
    images: [{ url: "/images/og-home.png", alt: "LangDesignWork Blog — creative projects and design inspiration" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LangDesignWork Blog",
    description: "Explore ideas, creative projects, and reflections from Lang Design Work authors. Follow their journeys of art, craft, and discovery as they share inspiration, insights, and creations drawn from everyday life.",
    images: ["/images/og-home.png"],
  },
  alternates: {
    canonical: "https://www.langdesignwork.com/en/home/blog",
  },
};

const posts = [
  {
    slug: 'oil-painting',
    title: "How Did I Do My First Oil Painting: From Canvas to Creation",
    author: "Elizabeth Xiaoyue Lang",
    date: "November 2, 2025",
    category: "Elizabeth",
    excerpt: "Elizabeth shares her first oil painting experience — from sketching proportions to colour, texture, and the challenges of hair and fabric.",
    image: "/blog-elizabeth.jpg",
  },
  {
    slug: 'tote-bag',
    title: "Looking for Your Next Creative Idea? Discover Inspiration Through Everyday Design",
    author: "Liliane Xiaoxu Lang",
    date: "November 14, 2025",
    category: "Liliane",
    excerpt: "Liliane on finding creative inspiration through everyday design — including handmade tote bags that tell personal stories through wearable art.",
    image: "/blog-lily-tote.jpg",
  },
  {
    slug: 'ai-creativity-learning',
    title: "How Can AI and Creativity Revolutionize Learning?",
    author: "Liliane Xiaoxu Lang",
    date: "November 14, 2025",
    category: "Qian",
    excerpt: "How Liliane and Elizabeth Lang built REME, a smart home device for elderly care, winning recognition at the 2024 Global Technovation Girls Competition.",
    image: "/blog-reme-profile.jpg",
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <Header locale="en" />

      {/* Blog schema: CollectionPage + ItemList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "CollectionPage",
                "@id": "https://www.langdesignwork.com/en/home/blog",
                url: "https://www.langdesignwork.com/en/home/blog",
                name: "LangDesignWork Blog",
                description: "Explore ideas, creative projects, and reflections from LangDesignWork authors.",
                inLanguage: "en-GB",
              },
              {
                "@type": "ItemList",
                name: "Blog Posts",
                description: "Latest blog posts from LangDesignWork.",
                itemListElement: [
                  { "@type": "ListItem", position: 1, url: "https://www.langdesignwork.com/en/elizabeth/blog/oil-painting", name: "How Did I Do My First Oil Painting: From Canvas to Creation" },
                  { "@type": "ListItem", position: 2, url: "https://www.langdesignwork.com/en/liliane/blog/tote-bag", name: "Looking for Your Next Creative Idea? Discover Inspiration Through Everyday Design" },
                  { "@type": "ListItem", position: 3, url: "https://www.langdesignwork.com/en/home/blog/ai-creativity-learning", name: "How Can AI and Creativity Revolutionize Learning?" },
                ],
              },
            ],
          }),
        }}
      />

      <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white py-20 lg:py-28 overflow-hidden">
        {/* Cinematic glow orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] right-[15%] w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[15%] left-[20%] w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
          {/* Floating particles */}
          <div className="absolute top-[15%] left-[15%] w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{ animationDuration: '2s' }} />
          <div className="absolute top-[30%] right-[25%] w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
          <div className="absolute bottom-[20%] left-[30%] w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '1s' }} />
          <div className="absolute top-[45%] right-[15%] w-1 h-1 bg-indigo-300 rounded-full animate-pulse" style={{ animationDuration: '4s', animationDelay: '1.5s' }} />
          <div className="absolute bottom-[35%] right-[30%] w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '0.8s' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-gray-300 max-w-2xl">Creative ideas, design inspiration, and insights from the LangDesignWork community.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={post.category === 'Qian' ? `/en/home/blog/${post.slug}` : `/en/${post.category.toLowerCase()}/blog/${post.slug}`}
                className="block bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="md:flex">
                  <div className="md:w-48 flex-shrink-0 relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={384}
                      height={216}
                      className="w-full h-full object-cover aspect-video md:aspect-auto"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-[#FF6B6B] mb-1">{post.category}</p>
                    <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                    <p className="text-gray-600 text-sm">{post.excerpt}</p>
                    <p className="text-sm text-gray-400 mt-2">by {post.author} · {post.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer locale="en" />
    </>
  );
}
