import Link from 'next/link'
import { Header } from '@/components/wexlogic/Header'
import dynamic from 'next/dynamic'
import { ScrollReveal } from '@/components/wexlogic/ScrollReveal'
import { HeroSection } from '@/components/wexlogic/HeroSection'

const ProcessSection = dynamic(() => import('@/components/wexlogic/ProcessSection').then(mod => mod.ProcessSection))
const Ticker = dynamic(() => import('@/components/wexlogic/Ticker').then(mod => mod.Ticker))
const ServicesSection = dynamic(() => import('@/components/wexlogic/ServicesSection').then(mod => mod.ServicesSection))
const WorkSection = dynamic(() => import('@/components/wexlogic/WorkSection').then(mod => mod.WorkSection))
const TestimonialsSection = dynamic(() => import('@/components/wexlogic/TestimonialsSection').then(mod => mod.TestimonialsSection))
const CTABanner = dynamic(() => import('@/components/wexlogic/CTABanner').then(mod => mod.CTABanner))
const Footer = dynamic(() => import('@/components/wexlogic/Footer').then(mod => mod.Footer))
import { getProjects, getServices } from '@/lib/db'

export const metadata = {
  title: 'WexLogic — India\'s #1 Creative Studio',
  description: 'WexLogic is a creative studio delivering cinematic CGI ads, high-performance Next.js architectures, paid acquisition, and bespoke ERP/CRM dashboards.',
  alternates: {
    canonical: 'https://wexlogic.com'
  }
}

export default function HomePage() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', color: '#1E293B', backgroundColor: '#FFFDF5' }}>
      <Header />

      {/* HERO SECTION */}
      <HeroSection />

      {/* PROCESS SECTION */}
      <ScrollReveal>
        <ProcessSection />
      </ScrollReveal>

      {/* TICKER MARQUEE */}
      <Ticker />

      {/* SERVICES SECTION */}
      <ScrollReveal>
        <ServicesSection services={getServices()} featuredOnly={true} />
      </ScrollReveal>

      {/* WORK / PORTFOLIO SECTION */}
      <WorkSection projects={getProjects()} featuredOnly={true} />

      {/* TESTIMONIALS SECTION */}
      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>

      {/* CTA BANNER */}
      <ScrollReveal>
        <div id="contact">
          <CTABanner
            primaryLabel="Book Free Call"
            primaryHref="/contact"
            secondaryLabel="View Portfolio"
            secondaryHref="/work"
          />
        </div>
      </ScrollReveal>

      {/* FOOTER */}
      <Footer />
    </main>
  )
}
