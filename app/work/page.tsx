import { Header } from '@/components/wexlogic/Header'
import { Footer } from '@/components/wexlogic/Footer'
import { WorkSection } from '@/components/wexlogic/WorkSection'
import { CTABanner } from '@/components/wexlogic/CTABanner'
import { getProjects } from '@/lib/db'

export const metadata = {
  title: 'Portfolio & Case Studies — WexLogic',
  description: 'Explore the WexLogic portfolio featuring high-fidelity CGI ads, Next.js web platforms, custom dashboards, paid ad scaling, and tech branding systems.',
  alternates: {
    canonical: 'https://wexlogic.com/work'
  }
}

export default function WorkPage() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', color: '#1E293B', backgroundColor: '#FFFDF5' }}>
      <Header />

      <WorkSection projects={getProjects()} isFirstSection={true} />

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
