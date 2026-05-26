import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 31536000,
  },
  compress: true,
  poweredByHeader: false,
  headers: async () => [
    {
      source: "/(.*)\\.(webp|png|jpg|jpeg|svg|ico|woff2)",
      headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
    },
  ],
};

export default nextConfig;
