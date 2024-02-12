import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "./components/NavBar/NavBar";
import "./globals.scss";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Landing Page Design By Maanil Verma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
