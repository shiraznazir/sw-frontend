import { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: 'export',
  // domain: 'https://servicewalah.com/',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    esmExternals: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  publicRuntimeConfig: {
    STATIC_PATH: '/static',
  },
  reactStrictMode: true,
  trailingSlash: false, // Adjust if you have issues with slashes in URLs
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/index.html', // Fallback for static hosting
      },
    ];
  },
  
  // async headers() {
  //   return [
  //     {
  //       source: '/service',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=3600',
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
