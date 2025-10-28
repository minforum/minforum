/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true
  },
  compiler: {
    removeConsole: true
  },
  webpack: (config, { isServer }) => {
    // Exclude .md files from being processed by Webpack
    config.module.rules.push({
      test: /\.md$/,
      loader: 'ignore-loader'
    });

    return config;
  }
};

module.exports = nextConfig;
