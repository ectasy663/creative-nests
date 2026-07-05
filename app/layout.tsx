import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DirectCallWidget } from '@/components/wsclogic/DirectCallWidget'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://wsclogic.com'),
  title: {
    default: 'WSCLogic — India\'s #1 Creative Studio',
    template: '%s | WSCLogic'
  },
  description: 'CGI & VFX Ads, Web & App Development, Branding, SEO & Marketing, Paid Ads, Video Editing, custom CRM/ERP integrations — premium digital solutions.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'WSCLogic — India\'s #1 Creative Studio',
    description: 'CGI & VFX Ads, Web & App Development, Branding, SEO & Marketing, Paid Ads, Video Editing, custom CRM/ERP integrations — premium digital solutions.',
    url: 'https://wsclogic.com',
    siteName: 'WSCLogic',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WSCLogic — India\'s #1 Creative Studio',
    description: 'CGI & VFX Ads, Web & App Development, Branding, SEO & Marketing, Paid Ads, Video Editing, custom CRM/ERP integrations — premium digital solutions.',
  }
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
