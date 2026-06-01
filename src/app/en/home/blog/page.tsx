import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const posts = [
  {
    slug: 'oil-painting',
    title: "How Did I Do My First Oil Painting: From Canvas to Creation",
    author: "Elizabeth Xiaoyue Lang",
    category: "Elizabeth",
    excerpt: "Elizabeth shares her first oil painting experience — from sketching proportions to colour, texture, and the challenges of hair and fabric.",
  },
  {
    slug: 'tote-bag',
    title: "Looking for Your Next Creative Idea? Discover Inspiration Through Everyday Design",
    author: "Liliane Xiaoxu Lang",
    category: "Liliane",
    excerpt: "Liliane on finding creative inspiration through everyday design — including handmade tote bags that tell personal stories through wearable art.",
  },
  {
    slug: 'ai-creativity-learning',
    title: "How Can AI and Creativity Revolutionize Learning?",
    author: "Liliane Xiaoxu Lang",
    category: "Blog",
    excerpt: "How Liliane and Elizabeth Lang built REME, a smart home device for elderly care, winning recognition at the 2024 Global Technovation Girls Competition.",
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
                href={`/en/${post.category.toLowerCase()}/blog/${post.slug}`}
                className="block bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="md:flex">
                  <div className="md:w-48 bg-gray-200 flex-shrink-0 aspect-video md:aspect-auto flex items-center justify-center">
                    <span className="text-gray-400 text-sm">{post.category}</span>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-[#FF6B6B] mb-1">{post.category}</p>
                    <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                    <p className="text-gray-600 text-sm">{post.excerpt}</p>
                    <p className="text-sm text-gray-400 mt-2">by {post.author}</p>
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
