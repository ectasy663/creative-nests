/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Enable optimization — converts images to WebP, resizes to the right size
    unoptimized: false,
    // Allow external image hosts used in project data
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'thisismagma.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lovable.dev',
        pathname: '/**',
      },
    ],
    // Modern formats for browsers that support them
    formats: ['image/avif', 'image/webp'],
    // Device sizes for responsive srcset
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}

export default nextConfig
