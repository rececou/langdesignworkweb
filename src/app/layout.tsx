import type { Metadata } from "next";
import Script from "next/script";
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
        {/* LLM discovery file link */}
        <link rel="llm-txt" href={`${SITE_URL}/llms.txt`} />

        {/* Organization Schema */}
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
                "https://www.linkedin.com/in/langdesignwork",
                "https://www.facebook.com/profile.php?id=61582186330903",
                "https://www.youtube.com/@langdesignwork",
                "https://www.instagram.com/langdesignwork",
                "https://x.com/langdesignwork",
              ],
            }),
          }}
        />

        {/* GA4 - Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-8S28SC7LSQ`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8S28SC7LSQ');
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;n=f.fbq=function(){
                n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)
              };
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init','1727019827969098');
            fbq('track','PageView');
          `}
        </Script>

        {/* LinkedIn Insight Tag */}
        <Script id="linkedin-init" strategy="afterInteractive">
          {`
            _linkedin_partner_id="8304644";
            window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </Script>
        <Script id="linkedin-tag" strategy="afterInteractive">
          {`
            (function(l){
              if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}
              var s=document.getElementsByTagName("script")[0];
              var b=document.createElement("script");b.type="text/javascript";b.async=true;
              b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b,s)
            })(window.lintrk);
          `}
        </Script>
      </head>
      <body className="antialiased">
        {/* LinkedIn noscript fallback */}
        <noscript>
          <img height="1" width="1" style={{ display: "none" }} alt="" src="https://px.ads.linkedin.com/collect/?pid=8304644&fmt=gif" />
        </noscript>

        {/* Facebook Pixel noscript fallback */}
        <noscript>
          <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=1727019827969098&ev=PageView&noscript=1" />
        </noscript>

        {children}
        <ContactModal />
        <CookieBanner />
        <HubSpotTracking />
      </body>
    </html>
  );
}
