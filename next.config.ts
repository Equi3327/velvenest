import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  /// TODO: Remove these once i have my domain ready and can set up proper hosting with a custom server
  // basePath: '/velvenest', 
  // assetPrefix: '/velvenest',
};

export default nextConfig;
