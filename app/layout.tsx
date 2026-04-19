import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG, buildMetadata } from "@/lib/seo";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"], display: "optional", variable: "--font-inter" });

// Explicit viewport export (Next.js App Router recommendation)
export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  ...buildMetadata({
    title: SITE_CONFIG.tagline,
    description: SITE_CONFIG.description,
    path: "/",
    keywords: [
      "3 Patti Blue",
      "3 Patti Blue APK",
      "3 Patti Blue download",
      "3 Patti Blue Pakistan",
      "Teen Patti Blue",
      "3 Patti Blue real money",
      "3 Patti Blue online",
      "3 Patti Blue register",
      "3 Patti Blue EasyPaisa",
      "3 Patti Blue JazzCash",
    ],
  }),
  // Single canonical favicon declaration — avoids duplicate <link> tags
  icons: {
    icon: [{ url: "/3-patti-blue-logo.webp", type: "image/webp" }],
    apple: "/3-patti-blue-logo.webp",
  },
};

// Organization JSON-LD — helps Google understand the entity behind this site
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "3 Patti Blue",
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/3-patti-blue-logo.webp`,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: SITE_CONFIG.organization.email,
  },
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-PK">
      <head>
        {/* Preconnect to GTM / GA4 so analytics scripts load faster */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        {/* Organization schema — JSON-LD is safe in <head> and avoids hydration mismatches */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.variable} flex flex-col min-h-screen font-sans bg-white`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-brand-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />

        {/* Google Analytics GA4 — replace G-XXXXXXXXXX with your Measurement ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}</Script>
      </body>
    </html>
  );
}
