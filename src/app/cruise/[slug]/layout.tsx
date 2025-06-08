import { Metadata } from "next";
import { getCruiseBySlug, getAllCruiseSlugs } from "@/data/cruises";
import Footer from "@/components/layout/Footer";
import { Header } from "@/components/layout";
import { use } from "react";

interface CruiseLayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cruise = getCruiseBySlug(slug);

  if (!cruise) {
    return {
      title: "Cruise Not Found | Halong Bay Tours",
      description: "The requested cruise package could not be found.",
    };
  }

  return {
    title: cruise.seo.title,
    description: cruise.seo.description,
    keywords: cruise.seo.keywords.join(", "),
    openGraph: {
      title: cruise.seo.title,
      description: cruise.seo.description,
      type: "website",
      url: `https://halongbaytours.com/cruise/${cruise.slug}`,
      images: [
        {
          url: cruise.images.main,
          width: 1200,
          height: 630,
          alt: cruise.name,
        },
      ],
      siteName: "Halong Bay Tours - Asia Pacific Travel",
    },
    twitter: {
      card: "summary_large_image",
      title: cruise.seo.title,
      description: cruise.seo.description,
      images: [cruise.images.main],
    },
    alternates: {
      canonical: `https://halongbaytours.com/cruise/${cruise.slug}`,
    },
    other: {
      "price:amount": cruise.currentPrice.toString(),
      "price:currency": "USD",
      "product:price:amount": cruise.currentPrice.toString(),
      "product:price:currency": "USD",
      "product:availability": "in stock",
      "product:condition": "new",
      "product:retailer_item_id": cruise.id,
      "og:price:amount": cruise.currentPrice.toString(),
      "og:price:currency": "USD",
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllCruiseSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default function CruiseLayout({ children }: CruiseLayoutProps) {
  return (
    <>
      <Header />

      {children}
      <Footer />
    </>
  );
}
