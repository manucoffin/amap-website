import fs from 'fs';
import { getAllArticles } from 'lib/articles';
import { getAllContracts } from 'lib/contracts';

const Sitemap = () => <></>;

export const getServerSideProps = async ({ res }) => {
  const baseUrl = {
    development: 'http://localhost:3000',
    production: 'https://amap-goutte-eau.fr',
  }[process.env.NODE_ENV];

  const staticPages = fs
    .readdirSync(
      {
        development: 'pages',
        production: './.next',
      }[process.env.NODE_ENV]
    )
    .filter((staticPage) => {
      return ![
        '_app.tsx',
        '_document.tsx',
        '_error.tsx',
        'sitemap.xml.tsx',
        'admin.tsx',
        '404.tsx',
        '500.tsx',
        'actus',
        'contrats',
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath.split('.tsx')[0]}`;
    });

  const newsArticles = (await getAllArticles()) || [];
  const contracts = getAllContracts() || [];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${staticPages
            .map((url) => {
              return `
                <url>
                  <loc>${url}</loc>
                  <lastmod>${new Date().toISOString()}</lastmod>
                  <changefreq>monthly</changefreq>
                  <priority>1.0</priority>
                </url>
              `;
            })
            .join('')}
            ${newsArticles
              .map(({ slug, date }) => {
                return `
                    <url>
                      <loc>${baseUrl}/actus/${slug}</loc>
                      <lastmod>${date}</lastmod>
                      <changefreq>monthly</changefreq>
                      <priority>1.0</priority>
                    </url>
                  `;
              })
              .join('')}
            ${contracts
              .map(({ slug }) => {
                return `
                    <url>
                      <loc>${baseUrl}/contrats/${slug}</loc>
                      <lastmod>${new Date().toISOString()}</lastmod>
                      <changefreq>monthly</changefreq>
                      <priority>1.0</priority>
                    </url>
                  `;
              })
              .join('')}
        </urlset>
      `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
