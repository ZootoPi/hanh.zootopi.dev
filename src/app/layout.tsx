import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

export const runtime = "edge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Hanh's Portfolio`,
  metadataBase: new URL("https://hanh.zootopi.dev"),
  openGraph: {
    images: "/images/Screenshot.png",
    title: `Hanh's Portfolio`,
    description: `Hanh's Portfolio`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <Header />
        <div className="pt-14 min-h-screen flex flex-col overflow-hidden">
          <main className="h-full flex-1 pb-14">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
