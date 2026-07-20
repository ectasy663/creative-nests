import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/r/', '/portal/'],
    },
    sitemap: 'https://wexlogic.com/sitemap.xml',
  }
}
