import { Header } from '@/components/creative-nests/Header'
import { Footer } from '@/components/creative-nests/Footer'
import { ServicesSection } from '@/components/creative-nests/ServicesSection'
import { VideoBackground } from '@/components/creative-nests/VideoBackground'
import { CTABanner } from '@/components/creative-nests/CTABanner'

export const metadata = { title: 'Services — Creative Nests' }

export default function ServicesPage() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', color: '#f3f4f6' }}>
      <VideoBackground src="/Brutalist_IT_company_hero_video_202607032332_gwr_video_mvp.mp4" />
      
      <Header />

      <section style={{ padding: '40px 0' }}>
        <ServicesSection />
      </section>

      <CTABanner
        primaryLabel="Book Free Call"
        primaryHref="/contact"
        secondaryLabel="View Portfolio"
        secondaryHref="/work"
      />

      <Footer />
    </div>
  )
}
