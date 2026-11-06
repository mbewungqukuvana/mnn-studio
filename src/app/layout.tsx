import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mngqukuvana.devs.li"),

  title: "Mbewukazi Nozipho Ngqukuvana | Data Science Portfolio",

  description:
    "Explore my journey in Data Science, software development, and building technology-driven solutions.",

  openGraph: {
    title: "Mbewukazi Nozipho Ngqukuvana | Data Science Portfolio",
    description:
      "Exploring data science, software development, and the possibilities of technology.",
    url: "https://mngqukuvana.devs.li",
    siteName: "MNN Studio",
    images: [
      {
        url: "/social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Mbewukazi Nozipho Ngqukuvana — Data Science Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mbewukazi Nozipho Ngqukuvana | Data Science Portfolio",
    images: ["/social-preview.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
