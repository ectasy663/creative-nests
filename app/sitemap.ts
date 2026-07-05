import { MetadataRoute } from 'next'
import { getBlogPosts, getServices, getProjects } from '@/lib/db'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://wsclogic.com'

  // Static routes
  const routes = ['', '/services', '/work', '/blog', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // Dynamic routes
  try {
    const blogs = getBlogPosts().map((post) => {
      // Parse or default date
      let postDate = new Date()
      if (post.date) {
        const parsed = Date.parse(post.date)
        if (!isNaN(parsed)) {
          postDate = new Date(parsed)
        }
      }
      return {
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: postDate,
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      }
    })

    const services = getServices().map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

    const projects = getProjects().map((project) => ({
      url: `${baseUrl}/work/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

    return [...routes, ...blogs, ...services, ...projects]
  } catch (e) {
    return routes
  }
}
