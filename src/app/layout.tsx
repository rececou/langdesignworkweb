import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import HubSpotTracking from "@/components/HubSpotTracking";
import ContactModal from "@/components/ContactModal";

export const metadata: Metadata = {
  title: "LangDesignWork | Create. Experiment. Fun.",
  description: "LangDesignWork is a creative platform built around three pillars: Create, Community, and Commerce. It brings together independent makers, partner brands, and audiences in one place. Based in Hong Kong.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <ContactModal />
        <CookieBanner />
        <HubSpotTracking />
      </body>
    </html>
  );
}
