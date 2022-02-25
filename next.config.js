const optimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  reactStrictMode: true,
  // pageExtensions: ["page.tsx", "page.ts"],
  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader',
    });
    return configuration;
  },
};

// More infos about plugin configuration here:
// https://github.com/cyrilwanner/next-optimized-images
const nextOptimizedImagesPlugin = [
  optimizedImages,
  {
    mozjpeg: { quality: 80 },
    optipng: {
      optimizationLevel: 3,
    },
  },
];

module.exports = withPlugins([nextOptimizedImagesPlugin], nextConfig);
