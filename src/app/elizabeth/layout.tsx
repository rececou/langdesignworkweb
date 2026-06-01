import type { Metadata } from "next";

const SITE_URL = "https://www.langdesignwork.com";
const PAGE_PATH = "/elizabeth";

export const metadata: Metadata = {
  title: "Elizabeth Xiaoyue Lang | Art & Custom Design | LangDesignWork",
  description: "Explore the creative journey of Elizabeth Xiaoyue Lang, featuring artworks inspired by those around her and inviting you to discover more.",
  openGraph: {
    title: "Elizabeth Xiaoyue Lang | Art & Custom Design | LangDesignWork",
    description: "Explore the creative journey of Elizabeth Xiaoyue Lang, featuring artworks inspired by those around her and inviting you to discover more.",
    images: ["/images/og-elizabeth.png"],
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elizabeth Xiaoyue Lang | Art & Custom Design | LangDesignWork",
    description: "Explore the creative journey of Elizabeth Xiaoyue Lang, featuring artworks inspired by those around her and inviting you to discover more.",
    images: ["/images/og-elizabeth.png"],
  },
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
};

export default function ElizabethLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
