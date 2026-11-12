import { Header } from '@/components/wexlogic/Header'
import { Footer } from '@/components/wexlogic/Footer'
import { ServicesSection } from '@/components/wexlogic/ServicesSection'
import { CTABanner } from '@/components/wexlogic/CTABanner'
import { ProcessSection } from '@/components/wexlogic/ProcessSection'
import { getServices } from '@/lib/db'

export const metadata = {
  title: 'Our Services — WexLogic',
  description: 'From scroll-stopping CGI/VFX campaigns to world-class React web development, technical SEO, social video edits, and database integrations.',
  alternates: {
    canonical: 'https://wexlogic.com/services'
  }
}

export default function ServicesPage() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', color: '#1E293B', backgroundColor: '#FFFDF5' }}>
      <Header />

      <ServicesSection services={getServices()} isFirstSection={true} />

      <ProcessSection />

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
