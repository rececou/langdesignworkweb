import type { Metadata } from "next";

const SITE_URL = "https://www.langdesignwork.com";
const PAGE_PATH = "/en/home/blog/ai-creativity-learning";
const TITLE = "How Can AI and Creativity Revolutionize Learning?";
const DESCRIPTION = "Reflection on the future of education, discover how Liliane Lang and Elizabeth Lang used AI to create a smart device for seniors.";
const OG_IMAGE = "/images/og-blog-ai-learning.png";
const OG_IMAGE_ALT = "Liliane Lang and Elizabeth Lang and their REME smart device prototype.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, alt: OG_IMAGE_ALT }],
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "article",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
};

export default function AiCreativityLearningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
