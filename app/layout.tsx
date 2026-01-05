import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nimbusRom = localFont({
  src: [
    {
      path: "./fonts/NimbusRomNo9L-Reg.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NimbusRomNo9L-RegIta.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/NimbusRomNo9L-Med.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/NimbusRomNo9L-MedIta.otf",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-nimbus-rom",
});

export const metadata: Metadata = {
  title: "SteakHouse: The Thoughtless Content Creation Stack",
  description: "SteakHouse is the first end-to-end content engineering platform that helps brands create and scale quality content that wins AI search.",
  icons: {
    icon: [
      { url: "/favicon.ico/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.ico/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico/favicon.ico",
    apple: [
      { url: "/favicon.ico/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  appleWebApp: {
    title: "SteakHouse",
  },
  manifest: "/favicon.ico/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SteakHouse",
    "url": "https://trysteakhouse.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://trysteakhouse.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const sitelinksJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "Home",
        "url": "https://trysteakhouse.com"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "Download Extension",
        "url": "https://trysteakhouse.com#download"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "Blog",
        "url": "https://trysteakhouse.com/blog"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "Talk to Sales Team",
        "url": "https://cal.com/shaan-steakhouse/30min"
      }
    ]
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://trysteakhouse.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Download Extension",
        "item": "https://trysteakhouse.com#download"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Blog",
        "item": "https://trysteakhouse.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact Us",
        "item": "https://calendly.com/sam-nimbushq/30min"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(sitelinksJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/dheereshag/coloured-icons@1.9.6/app/ci.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nimbusRom.variable} dark antialiased`}
      >
        <Script src="https://cdn.jsdelivr.net/gh/dheereshag/coloured-icons@1.9.6/app/ci.min.js" strategy="afterInteractive" />
        {children}
      </body>
    </html>
  );
}
