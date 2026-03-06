import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { seoKeywords, siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Sistemas digitales para automatizar negocios | botflow.top",
    template: "%s | botflow.top"
  },
  description: siteConfig.description,
  keywords: seoKeywords,
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: siteConfig.brand,
    title: "Sistemas digitales para automatizar negocios | botflow.top",
    description: siteConfig.description,
    images: [
      {
        url: "/open-graph-botflow.jpeg",
        width: 1312,
        height: 736,
        alt: "botflow.top - Sistemas digitales para automatizar negocios"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistemas digitales para automatizar negocios | botflow.top",
    description: siteConfig.description,
    images: ["/open-graph-botflow.jpeg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.brand,
  url: siteConfig.siteUrl,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.whatsappDisplay,
  areaServed: "ES",
  founder: siteConfig.owner
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="relative min-h-screen overflow-x-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]"
          />
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
