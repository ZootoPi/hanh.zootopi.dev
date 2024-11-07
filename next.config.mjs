import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdncms.tihado.com",
      },
      {
        protocol: "https",
        hostname: "cdn.zootopi.dev",
      },
    ],
  },
  output: "standalone",
};

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

export default nextConfig;
