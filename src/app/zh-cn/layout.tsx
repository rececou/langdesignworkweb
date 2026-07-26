import type { Metadata } from "next";

const SITE_URL = "https://www.langdesignwork.com";
const PAGE_PATH = "/zh-cn";
const TITLE = "LangDesignWork | 创造・社区・商务";
const DESCRIPTION = "创造。实验。乐趣。LangDesignWork 汇聚独立创作者、合作品牌与受众，打造真实产品的发布平台。";
const OG_IMAGE = "/images/og-home.png";
const OG_IMAGE_ALT = "LangDesignWork";

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

export default function ZhCnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
