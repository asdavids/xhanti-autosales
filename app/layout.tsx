import type { Metadata } from "next";
import "./globals.css";
import SplashScreen from "./components/SplashScreen";

export const metadata: Metadata = {
  title: "Xhanti AutoSales | Drive the Best",
  description: "Lusaka's premier car dealership. Quality new and used vehicles.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
