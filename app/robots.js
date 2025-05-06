
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/about',
          '/projects',
          '/blog',
          '/contact',
          '/skills'
        ],
        disallow: [
          '/private/',
          '/api/',
          '/_next/',
          '/admin/',
          '*.json',
          '/cdn-cgi/',
          '/*.js$',
          '/*.css$'
        ],
        crawlDelay: 10
      },
      {
        userAgent: 'GPTBot',
        disallow: ['/']
      },
      {
        userAgent: 'CCBot',
        disallow: ['/']
      }
    ],
    sitemap: 'https://brianriant.vercel.app/sitemap.xml',
    host: 'https://brianriant.vercel.app'
  }
}