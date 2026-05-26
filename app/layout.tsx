import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SplashScreen from "./components/SplashScreen";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: { default: "Xhanti AutoSales | Drive the Best", template: "%s | Xhanti AutoSales" },
  description: "Lusaka's premier car dealership. Quality used vehicles including Lexus, Land Rover, Mercedes-Benz and Toyota at competitive prices in Zambia.",
  keywords: ["cars for sale Lusaka", "used cars Zambia", "Xhanti AutoSales", "Lexus Zambia", "Land Rover Zambia"],
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  openGraph: {
    title: "Xhanti AutoSales | Drive the Best",
    description: "Lusaka's premier car dealership. Quality vehicles at competitive prices.",
    url: "https://xhantiautosales.vercel.app",
    siteName: "Xhanti AutoSales",
    locale: "en_ZM",
    type: "website",
  },
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
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
