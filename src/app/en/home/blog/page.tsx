import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

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
    category: "Blog",
    excerpt: "How Liliane and Elizabeth Lang built REME, a smart home device for elderly care, winning recognition at the 2024 Global Technovation Girls Competition.",
    image: "/blog-reme-profile.jpg",
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <Header locale="en" />

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-gray-600">Creative ideas, design inspiration, and insights from the LangDesignWork community.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={post.category === 'Blog' ? `/en/home/blog/${post.slug}` : `/en/${post.category.toLowerCase()}/blog/${post.slug}`}
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
