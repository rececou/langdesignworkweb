import type { Metadata } from "next";

const SITE_URL = "https://www.langdesignwork.com";
const PAGE_PATH = "/liliane";
const TITLE = "Liliane Xiaoxu Lang | Ideas & Prototyping | LangDesignWork";
const DESCRIPTION = "Join Liliane Xiaoxu Lang on the Discover Channel! Explore debates, creative projects, and inspirational insights.";
const OG_IMAGE = "/images/og-liliane.png";
const OG_IMAGE_ALT = "Liliane Xiaoxu Lang Discover Channel – creativity, debates, and insights";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, alt: OG_IMAGE_ALT }],
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
};

export default function LilianeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
