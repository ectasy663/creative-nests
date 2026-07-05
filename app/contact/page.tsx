import { Header } from '@/components/wsclogic/Header'
import { Footer } from '@/components/wsclogic/Footer'
import { VideoBackground } from '@/components/wsclogic/VideoBackground'
import { ContactForm } from '@/components/wsclogic/ContactForm'

export const metadata = {
  title: 'Contact Us — WSCLogic',
  description: 'Have a project in mind? Reach out to WSCLogic for custom CGI campaigns, Next.js web applications, paid ads, SEO, and CRM/ERP integrations.',
  alternates: {
    canonical: 'https://wsclogic.com/contact'
  }
}

export default function ContactPage() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', color: '#f3f4f6' }}>
      <VideoBackground src="/Brutalist_IT_company_hero_video_202607032332_gwr_video_mvp.mp4" />
      
      <Header />

      <ContactForm />

      <Footer />
    </div>
  )
}
