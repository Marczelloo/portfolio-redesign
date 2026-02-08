import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";
import PrivacyBanner from "./_components/PrivacyBanner";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marczelloo.dev"),
  title: {
    default: "Marczelloo — Full-Stack Developer",
    template: "%s | Marczelloo",
  },
  description:
    "Portfolio of Marczelloo — full-stack developer specializing in Next.js, React, Node.js and TypeScript. Explore projects, tech stack, and ways to get in touch.",
  keywords: [
    "Marczelloo",
    "Marcel Moskwa",
    "Portfolio",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Web Developer",
    "JavaScript",
  ],
  applicationName: "marczelloo.dev",
  authors: [{ name: "Marczelloo", url: "https://marczelloo.dev" }],
  creator: "Marczelloo",
  publisher: "Marczelloo",
  category: "technology",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "https://marczelloo.dev",
  },
  openGraph: {
    type: "website",
    url: "https://marczelloo.dev",
    title: "Marczelloo — Full-Stack Developer",
    siteName: "marczelloo.dev",
    description: "Portfolio of Marczelloo — full-stack developer specializing in Next.js, React, and Node.js.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marczelloo.dev — Portfolio",
      },
    ],
    locale: "en_US",
    alternateLocale: ["pl_PL"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marczelloo — Full-Stack Developer",
    description: "Portfolio of Marczelloo — full-stack developer specializing in Next.js, React, and Node.js.",
    images: ["/og-image.jpg"],
    site: "@marczelloo_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#050814" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Marczelloo",
              url: "https://marczelloo.dev",
              sameAs: ["https://github.com/Marczelloo", "https://linkedin.com/in/Marczelloo"],
              jobTitle: "Full-Stack Developer",
            }),
          }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        {children}
        <Navbar />
        <PrivacyBanner />
      </body>
    </html>
  );
}
