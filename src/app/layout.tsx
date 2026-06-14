import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { profile } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Portfolio of Lakshman Arun P - full-stack developer and tech sales professional specializing in the MERN stack, Next.js, and AI-assisted development.";

export const metadata: Metadata = {
  metadataBase: new URL("https://lakshmanarun.dev"),
  title: {
    default: "Lakshman Arun P | Full-Stack Developer & Tech Sales",
    template: "%s | Lakshman Arun P",
  },
  description,
  keywords: [
    "Lakshman Arun P",
    "Full-Stack Developer",
    "MERN Stack",
    "Next.js",
    "Tech Sales",
    "Software Developer Portfolio",
    "Chennai",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    title: "Lakshman Arun P | Full-Stack Developer & Tech Sales",
    description,
    url: "/",
    siteName: "Lakshman Arun P",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lakshman Arun P | Full-Stack Developer & Tech Sales",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0e14" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.tagline,
  url: "https://lakshmanarundev.vercel.app/",
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.location,
  },
  sameAs: [profile.linkedin, profile.github],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
