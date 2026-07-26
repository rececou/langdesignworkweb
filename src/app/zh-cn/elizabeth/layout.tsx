import type { Metadata } from "next";

const SITE_URL = "https://www.langdesignwork.com";
const PAGE_PATH = "/zh-cn/elizabeth";
const TITLE = "伊丽莎白·晓月·郎 | 艺术与定制设计 | LangDesignWork";
const DESCRIPTION = "探索伊丽莎白·晓月·郎的创作旅程，包括受周围人和事物启发的艺术作品，邀请您发现更多。";
const OG_IMAGE = "/images/og-elizabeth.png";
const OG_IMAGE_ALT = "伊丽莎白·晓月·郎艺术与定制设计";

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

export default function ZhCnElizabethLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
