// import withPlugins from 'next-compose-plugins';
// import optimizedImages from 'next-optimized-images';
const withPlugins = require('next-compose-plugins');
// const optimizedImages = require('next-optimized-images');

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts'],
  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader',
    });
    return configuration;
  },
};

// Not necessary when using next/image component
// More infos about plugin configuration here:
// https://github.com/cyrilwanner/next-optimized-images
// const nextOptimizedImagesPlugin = [
//   optimizedImages,
//   {
//     mozjpeg: { quality: 80 },
//     optipng: {
//       optimizationLevel: 3,
//     },
//   },
// ];

module.exports = withPlugins([], nextConfig);
