import type { Metadata } from "next";
import { getSiteConfig } from "@cms/utils/sanity-utils";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const siteConfigData = await getSiteConfig();
  const siteConfig = siteConfigData?.[0];

  const seo = siteConfig?.globalSEO;

  return {
    title: seo?.metaTitle || siteConfig?.title || "Default Title",
    description: seo?.metaDescription || "Default site description",
    keywords: seo?.keywords || [],
    openGraph: {
      images: seo?.["og-image"] ? [{ url: seo["og-image"] }] : undefined,
      title: seo?.metaTitle || siteConfig?.title,
      description: seo?.metaDescription,
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}