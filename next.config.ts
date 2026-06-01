import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/zh-cn/discover/:path*',
        destination: '/zh-cn/liliane/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
