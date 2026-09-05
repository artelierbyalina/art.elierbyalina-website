import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

// Display serif for headlines — has real personality (elegant, slightly
// editorial) without being a default "AI aesthetic" pick like Playfair.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

// Warm, humanist sans for body text and UI — pairs quietly with Fraunces.
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"), // TODO: replace with your real domain once you have one
  title: {
    default: site.seo.metaTitle,
    template: `%s — ${site.brandName} ${site.brandSuffix}`,
  },
  description: site.seo.metaDescription,
  keywords: site.seo.keywords,
  openGraph: {
    title: site.seo.metaTitle,
    description: site.seo.metaDescription,
    siteName: `${site.brandName} ${site.brandSuffix}`,
    type: "website",
    images: ["/images/og-cover.jpg"], // [PAINTING IMAGE] — add a 1200x630 image here
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.metaTitle,
    description: site.seo.metaDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
