import type { Metadata } from "next";

const SITE_URL = "https://www.langdesignwork.com";
const PAGE_PATH = "/partner/kidslabuk";
const TITLE = "Kidlab UK | DIY STEM Kits | LangDesignWork Partner";
const DESCRIPTION = "Swap screen time for hands-on discovery. KidLab UK DIY STEM kits and educational toys for curious kids — fun, practical, eco-friendly. From £9.99.";
const OG_IMAGE = "/images/og-kidlab.jpeg";
const OG_IMAGE_ALT = "kidlab logo";

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
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
};

export default function KidslabukLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
