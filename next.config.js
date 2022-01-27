module.exports = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts"],
  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: "frontmatter-markdown-loader",
    });
    return configuration;
  },
};
