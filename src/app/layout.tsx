import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import HubSpotTracking from "@/components/HubSpotTracking";
import ContactModal from "@/components/ContactModal";

const SITE_URL = "https://www.langdesignwork.com";
const DEFAULT_OG_IMAGE = "/images/og-home.png";

export const metadata: Metadata = {
  title: "LangDesignWork | Home",
  description: "Creativity. Community. Commerce. LangDesignWork brings together independent makers, partner brands, and the audiences in one place.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "LangDesignWork",
    title: "LangDesignWork | Home",
    description: "Creativity. Community. Commerce. LangDesignWork brings together independent makers, partner brands, and the audiences in one place.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 300, height: 175, alt: "LangDesignWork" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LangDesignWork | Home",
    description: "Creativity. Community. Commerce. LangDesignWork brings together independent makers, partner brands, and the audiences in one place.",
    images: [DEFAULT_OG_IMAGE],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "LangDesignWork",
              url: SITE_URL,
              description: "Creative platform built around three pillars: Create, Community, and Commerce.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hong Kong",
                addressCountry: "HK",
              },
              sameAs: [
                "https://www.facebook.com/langdesignwork",
                "https://www.instagram.com/langdesignwork",
                "https://www.linkedin.com/company/langdesignwork",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <ContactModal />
        <CookieBanner />
        <HubSpotTracking />
      </body>
    </html>
  );
}
