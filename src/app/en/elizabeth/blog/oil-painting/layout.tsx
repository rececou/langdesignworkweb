import type { Metadata } from "next";

const SITE_URL = "https://www.langdesignwork.com";
const PAGE_PATH = "/en/elizabeth/blog/oil-painting";
const TITLE = "How Did I Do My First Oil Painting: From Canvas to Creation | LangDesignWork";
const DESCRIPTION = "Elizabeth Xiaoyue Lang shares her journey of creating her first oil painting — a portrait of a little boy inspired by classes at the Hong Kong Art School.";
const OG_IMAGE = "/images/og-elizabeth.png";
const OG_IMAGE_ALT = "elizabeth lang oil painting";

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
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
};

export default function OilPaintingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
