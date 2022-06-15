const withPlugins = require('next-compose-plugins');

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx'],
  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader',
    });
    return configuration;
  },
};

module.exports = withPlugins([], nextConfig);
