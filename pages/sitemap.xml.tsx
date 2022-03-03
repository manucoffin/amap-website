import { getAllArticles } from 'lib/articles';
import { getAllContracts } from 'lib/contracts';
import { getStaticPages } from 'lib/pages';

const Sitemap = () => <></>;

export const getServerSideProps = async ({ res }) => {
  const baseUrl = {
    development: 'http://localhost:3000',
    production: 'https://amap-goutte-eau.fr',
  }[process.env.NODE_ENV];

  const staticPages = getStaticPages();
  const newsArticles = (await getAllArticles()) || [];
  const contracts = getAllContracts() || [];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${staticPages
            .map(({ slug }) => {
              return `
                <url>
                  <loc>${baseUrl}/${slug}</loc>
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
