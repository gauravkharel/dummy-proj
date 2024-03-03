import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/Toaster";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dummy App",
  description: "Shop for the aderlaine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <base href="/" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Navbar />
        <div className='container max-w-7xl mx-auto h-full pt-12' suppressHydrationWarning>
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
