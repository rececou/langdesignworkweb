import type { Metadata } from "next";

const SITE_URL = "https://www.langdesignwork.com";
const PAGE_PATH = "/remecou";
const TITLE = "Remecou | Sustainable Goods Operations | LangDesignWork";
const DESCRIPTION = "Hong Kong operations model for sustainable goods. AI-assisted sourcing from China, content co-creation with local partners, and in-market distribution.";
const OG_IMAGE = "/images/og-remecou.jpeg";
const OG_IMAGE_ALT = "Remecou — sustainable goods operations";

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

export default function RemecouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
