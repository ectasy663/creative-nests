import { Header } from '@/components/wsclogic/Header'
import { Footer } from '@/components/wsclogic/Footer'
import { WorkSection } from '@/components/wsclogic/WorkSection'
import { CTABanner } from '@/components/wsclogic/CTABanner'
import { getProjects } from '@/lib/db'

export const metadata = {
  title: 'Portfolio & Case Studies — WSCLogic',
  description: 'Explore the WSCLogic portfolio featuring high-fidelity CGI ads, Next.js web platforms, custom dashboards, paid ad scaling, and tech branding systems.',
  alternates: {
    canonical: 'https://wsclogic.com/work'
  }
}

export default function WorkPage() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', color: '#f3f4f6', backgroundColor: '#000' }}>
      
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
