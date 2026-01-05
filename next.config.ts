import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
      },
    ],
  },
  rewrites: () => [
    {
      source: '/blog',
      destination: 'https://blog.trysteakhouse.com',
    },
    {
      source: '/blog/:path*',
      destination: 'https://blog.trysteakhouse.com/:path*',
    },
  ],
};

export default nextConfig;
