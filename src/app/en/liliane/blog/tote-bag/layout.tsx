import type { Metadata } from "next";

const SITE_URL = "https://www.langdesignwork.com";
const PAGE_PATH = "/en/liliane/blog/tote-bag";
const TITLE = "Looking for Your Next Creative Idea? Discover Inspiration Through Everyday Design | LangDesignWork";
const OG_TITLE = "Looking for Your Next Creative Idea? Discover Inspiration Through Everyday Design";
const DESCRIPTION = "Liliane Xiaoxu Lang explores how everyday design inspires creativity, turning simple ideas into stylish personalized tote bags.";
const OG_IMAGE = "/images/og-liliane.png";
const OG_IMAGE_ALT = "Shantell Morrison book tote bag";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: OG_TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, alt: OG_IMAGE_ALT }],
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
};

export default function ToteBagLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
