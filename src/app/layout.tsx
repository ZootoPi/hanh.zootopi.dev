import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import config from "@/config";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${config.info.name}`,
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
        <div className="pt-14 min-h-screen flex flex-col">
          <main className="h-full flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
