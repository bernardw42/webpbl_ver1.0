import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer";
import logo from "../../public/navbar/logo1.png"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Panca Budi Logistindo",
  description: "Logistics and Cargo",
  icons: {
    icon: "../../public/navbar/logo1.png",
  },
};

declare global {
  interface Window {
    fnames: string[];
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={inter.className}>
      <link rel="icon" href="../../public/navbar/logo1.png" sizes="any" />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
