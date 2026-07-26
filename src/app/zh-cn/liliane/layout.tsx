import type { Metadata } from "next";

const SITE_URL = "https://www.langdesignwork.com";
const PAGE_PATH = "/zh-cn/liliane";
const TITLE = "莉莉安·晓旭·郎 | 创意与原型 | LangDesignWork";
const DESCRIPTION = "加入莉莉安·晓旭·郎的发现频道！探索辩论、创意项目和灵感见解。";
const OG_IMAGE = "/images/og-liliane.png";
const OG_IMAGE_ALT = "莉莉安·晓旭·郎发现频道 — 创意、辩论和见解";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, alt: OG_IMAGE_ALT }],
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "website",
    locale: "zh_CN",
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

export default function ZhCnLilianeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
