import type { Metadata } from "next";

const SITE_URL = "https://www.langdesignwork.com";
const PAGE_PATH = "/partner/velvetessencedesign";
const TITLE = "Velvet Essence Design | Hand-Printed T-Shirts & Tote Bags | LangDesignWork Partner";
const DESCRIPTION = "Hand-printed t-shirts and tote bags, wearable art made with care and creativity by Velvet Essence Design in London. Available on Etsy UK.";
const OG_IMAGE = "/images/velvet-essence-logo.jpg";
const OG_IMAGE_ALT = "Velvet Essence Design hand-printed tote bags";

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

export default function VelvetEssenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
