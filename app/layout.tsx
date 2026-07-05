import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DirectCallWidget } from '@/components/creative-nests/DirectCallWidget'
import './globals.css'

export const metadata: Metadata = {
  title: 'Creative Nests — India\'s #1 Creative Agency',
  description: 'CGI, VFX, Branding, Web & App Development, SEO, Paid Ads, Video Editing — all under one roof.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#08070d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{ background: 'transparent' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased text-[#f3f4f6]" style={{ fontFamily: "'Space Grotesk', sans-serif", background: 'transparent' }}>
        <div className="bg-grid-overlay" />
        {children}
        <DirectCallWidget />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
