import { Header } from '@/components/creative-nests/Header'
import { Footer } from '@/components/creative-nests/Footer'
import { WorkSection } from '@/components/creative-nests/WorkSection'
import { VideoBackground } from '@/components/creative-nests/VideoBackground'
import { CTABanner } from '@/components/creative-nests/CTABanner'
import { getProjects } from '@/lib/db'

export const metadata = { title: 'Work — WSCLogic' }

export default function WorkPage() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', color: '#f3f4f6' }}>
      <VideoBackground src="/Brutalist_IT_company_hero_video_202607032332_gwr_video_mvp.mp4" />
      
      <Header />

      <section style={{ padding: '40px 0' }}>
        <WorkSection projects={getProjects()} />
      </section>

      <CTABanner
        primaryLabel="Book Free Call"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />

      <Footer />
    </div>
  )
}
