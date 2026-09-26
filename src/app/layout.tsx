import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';
import Link from "next/link";
import { getNavItems } from '@/lib/getNavItems';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Canadian Arab Federation",
    template: "%s",
  },
  description:
    "The Canadian Arab Federation is a national, non-partisan, non-profit and membership-based organization established in 1967.",
  icons: {
    icon: [
      { url: "/caf/favicon_io/favicon.ico" },
      { url: "/caf/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/caf/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/caf/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/caf/favicon_io/site.webmanifest",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch nav items at build time
  const [headerItems, footerItems] = await Promise.all([
    getNavItems('header'),
    getNavItems('footer'),
  ]);
  
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-white text-neutral-900 antialiased`}
      > 
        <Link href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-white focus:text-black">
          Skip to main content
        </Link>
        <Header navItems={headerItems} />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer navItems={footerItems} />
      </body>
    </html>
  );
}
