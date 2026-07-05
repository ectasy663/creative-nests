import { Header } from '@/components/wsclogic/Header'
import { Footer } from '@/components/wsclogic/Footer'
import { ServicesSection } from '@/components/wsclogic/ServicesSection'
import { CTABanner } from '@/components/wsclogic/CTABanner'
import { ProcessSection } from '@/components/wsclogic/ProcessSection'

export const metadata = {
  title: 'Our Services — WSCLogic',
  description: 'From scroll-stopping CGI/VFX campaigns to world-class React web development, technical SEO, social video edits, and database integrations.',
  alternates: {
    canonical: 'https://wsclogic.com/services'
  }
}

export default function ServicesPage() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', color: '#f3f4f6', backgroundColor: '#000' }}>
      
      <Header />

      <section style={{ padding: '40px 0' }}>
        <ServicesSection />
      </section>

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
