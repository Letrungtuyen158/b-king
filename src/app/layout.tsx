import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Halong Bay Tours - Premium Cruise Packages | Asia Pacific Travel",
  description:
    "Experience unforgettable Halong Bay cruises with Asia Pacific Travel. Luxury cruise packages, 5-star hotels, and premium tours since 2002. Book your dream Vietnam adventure today!",
  keywords: [
    "halong bay tours",
    "halong bay cruise",
    "vietnam travel",
    "asia pacific travel",
    "luxury cruise vietnam",
    "halong bay packages",
    "vietnam tour operator",
    "oriental jade hotel",
    "stellar of the seas",
    "paradise elegance cruise",
    "vietnam adventure travel",
    "halong bay booking",
    "vietnam cruise packages",
    "luxury halong bay tours",
  ].join(", "),
  authors: [{ name: "Asia Pacific Travel" }],
  creator: "Asia Pacific Travel",
  publisher: "Halong Bay Tours",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://halongbaytours.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Halong Bay Tours - Premium Cruise Packages | Asia Pacific Travel",
    description:
      "Experience unforgettable Halong Bay cruises with Asia Pacific Travel. Luxury cruise packages, 5-star hotels, and premium tours since 2002.",
    url: "https://halongbaytours.com",
    siteName: "Halong Bay Tours - Asia Pacific Travel",
    images: [
      {
        url: "/api/placeholder/1200/630",
        width: 1200,
        height: 630,
        alt: "Halong Bay Tours - Premium Cruise Experience",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Halong Bay Tours - Premium Cruise Packages | Asia Pacific Travel",
    description:
      "Experience unforgettable Halong Bay cruises with Asia Pacific Travel. Luxury cruise packages, 5-star hotels, and premium tours since 2002.",
    images: ["/api/placeholder/1200/630"],
    creator: "@halongbaytours",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "travel",
  classification: "Travel & Tourism",
  other: {
    "geo.region": "VN-HN",
    "geo.placename": "Hanoi, Vietnam",
    "geo.position": "21.0285;105.8542",
    ICBM: "21.0285, 105.8542",
    "business:contact_data:locality": "Hanoi",
    "business:contact_data:region": "Vietnam",
    "business:contact_data:country_name": "Vietnam",
    "business:contact_data:phone_number": "+84 24 38364212",
    "business:contact_data:email": "info@halongbaytours.com",
    "business:contact_data:website": "https://halongbaytours.com",
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
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "Halong Bay Tours - Asia Pacific Travel",
              description:
                "Premium cruise and tour booking service for Halong Bay, Vietnam. Over 20 years of expertise in crafting memorable journeys.",
              url: "https://halongbaytours.com",
              logo: "https://halongbaytours.com/logo.png",
              image: "https://halongbaytours.com/api/placeholder/1200/630",
              telephone: "+84 24 38364212",
              email: "info@halongbaytours.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "5-87 Hoang Quoc Viet Street",
                addressLocality: "Cau Giay District",
                addressRegion: "Hanoi",
                addressCountry: "Vietnam",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "21.0285",
                longitude: "105.8542",
              },
              foundingDate: "2002",
              slogan: "Unforgettable Halong Bay Cruises since 2002",
              areaServed: {
                "@type": "Country",
                name: "Vietnam",
              },
              serviceType: "Travel Agency",
              priceRange: "$250-$800",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Halong Bay Cruise Packages",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "TouristTrip",
                      name: "Orchid Classic Cruise 2 Days/1 Night",
                      description:
                        "Luxurious Halong Bay experience with Oriental Jade Hotel",
                    },
                  },
                ],
              },
              sameAs: [
                "https://www.facebook.com/halongbaytours",
                "https://www.instagram.com/halongbaytours",
                "https://www.linkedin.com/company/halongbaytours",
              ],
            }),
          }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="color-scheme" content="light" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Halong Bay Tours" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

