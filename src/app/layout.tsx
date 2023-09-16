import Navbar from "@/components/Shared/Navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Shared/Footer/Footer";
import { Providers } from "@/Redux/Providers";
import Nav from "@/components/Shared/Navbar/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dramatic movie",
  description: "Created by Shafaet Hossen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`dark  ${inter.className}`}>
        <Providers>
          <Nav />
          <div className="min-h-[calc(80vh-220px)]">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
