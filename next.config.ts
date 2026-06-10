import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['organic-train-jg596q75pv92qv7j-3000.app.github.dev'],
    },
  },
};

export default nextConfig;
