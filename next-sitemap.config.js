/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mitchellbreust.com',
  generateRobotsTxt: true, // generates robots.txt
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/server-sitemap.xml'], // exclude dynamic routes if any
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
} 