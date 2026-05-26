import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SplashScreen from "./components/SplashScreen";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Xhanti AutoSales | Drive the Best",
  description: "Lusaka's premier car dealership. Quality new and used vehicles at competitive prices.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="preload" as="image" href="/hero-car.webp" />
        <link rel="preload" as="image" href="/logo.png" />
      </head>
      <body>
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
