import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*.replit.dev", "*.sisko.replit.dev"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
  serverExternalPackages: ["@prisma/client", "prisma"],
};

export default nextConfig;
