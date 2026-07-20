import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteLayout } from "@/components/layout/site-layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dotcampaign.org"),
  title:
    "SURV. David Olaniyi Taiwo (DOT) | Candidate for Assistant General Secretary | Ikeja Club",
  description:
    "Campaign website for SURV. David Olaniyi Taiwo (DOT), candidate for Assistant General Secretary of Ikeja Club 1966.",
  openGraph: {
    title:
      "SURV. David Olaniyi Taiwo (DOT) | Candidate for Assistant General Secretary | Ikeja Club",
    description:
      "Campaign website for SURV. David Olaniyi Taiwo (DOT), candidate for Assistant General Secretary of Ikeja Club 1966.",
    type: "website",
    locale: "en_NG",
    siteName: "DOT Campaign Website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SURV. David Olaniyi Taiwo (DOT) | Candidate for Assistant General Secretary | Ikeja Club",
    description:
      "Campaign website for SURV. David Olaniyi Taiwo (DOT), candidate for Assistant General Secretary of Ikeja Club 1966.",
  },
  alternates: {
    canonical: "/",
  },
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
    >
      <body className="min-h-full bg-[#F7F8F4] font-sans text-slate-700">
        <a
          href="#content"
          className="sr-only z-[90] rounded-full bg-[#0B5D3B] px-5 py-3 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
