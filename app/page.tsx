import Link from 'next/link'
import { Header } from '@/components/wexlogic/Header'
import dynamic from 'next/dynamic'
import { VideoBackground } from '@/components/wexlogic/VideoBackground'

const ProcessSection = dynamic(() => import('@/components/wexlogic/ProcessSection').then(mod => mod.ProcessSection))
const Ticker = dynamic(() => import('@/components/wexlogic/Ticker').then(mod => mod.Ticker))
const ServicesSection = dynamic(() => import('@/components/wexlogic/ServicesSection').then(mod => mod.ServicesSection))
const WorkSection = dynamic(() => import('@/components/wexlogic/WorkSection').then(mod => mod.WorkSection))
const TestimonialsSection = dynamic(() => import('@/components/wexlogic/TestimonialsSection').then(mod => mod.TestimonialsSection))
const CTABanner = dynamic(() => import('@/components/wexlogic/CTABanner').then(mod => mod.CTABanner))
const Footer = dynamic(() => import('@/components/wexlogic/Footer').then(mod => mod.Footer))
import { getProjects, getServices } from '@/lib/db'

export const metadata = {
  title: 'WexLogic — CGI & VFX Ads, Web & App Development, Branding',
  description: 'WexLogic is India\'s premium digital studio delivering cinematic CGI ads, high-performance Next.js architectures, paid acquisition, and bespoke ERP/CRM dashboards.',
  alternates: {
    canonical: 'https://wexlogic.com'
  }
}

export default function HomePage() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', color: '#f3f4f6' }}>
      <Header />

      {/* HERO SECTION */}
      <section
        id="home"
        style={{
          background: 'rgba(8, 7, 13, 0.45)', /* Soft dark-tint overlay */
          padding: '80px 28px 72px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <VideoBackground src="/Brutalist_IT_company_hero_video_202607032332_gwr_video_mvp.mp4" />
        {/* Soft background neon glows */}
        <div style={{ position: 'absolute', top: '10%', right: '10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(223, 183, 108, 0.15) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: '250px', height: '250px', background: 'radial-gradient(circle, rgba(184, 144, 71, 0.08) 0%, transparent 70%)', filter: 'blur(45px)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Left: Text & CTAs */}
          <div style={{ flex: '1 1 550px', zIndex: 10 }}>
            {/* Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ background: 'rgba(223, 183, 108, 0.1)', border: '1px solid rgba(223, 183, 108, 0.3)', borderRadius: '99px', padding: '6px 16px' }}>
                <span style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700, color: '#dfb76c' }}>
                  Next-Gen Digital Production Studio
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="cn-syne" style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, color: '#fff', lineHeight: 1.25, paddingTop: '10px', marginBottom: '24px', letterSpacing: '-1px' }}>
              Where Brands Become<br />
              <span style={{ background: 'linear-gradient(135deg, #dfb76c, #b89047)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', paddingBottom: '0.12em', paddingRight: '0.15em' }}>Legends.</span>
            </h1>

            {/* Description Paragraph */}
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#9ca3af', maxWidth: '480px', marginBottom: '32px', fontWeight: 400 }}>
              We build high-performance digital platforms, orchestrate scroll-stopping CGI campaigns, and scale conversion funnels designed for rapid growth.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
              <Link href="#contact" className="gradient-btn-primary">Get Started →</Link>
              <Link href="#portfolio" className="glass-btn-secondary">View Work</Link>
            </div>
          </div>

          {/* Right: Vertical Scrolling Showcase of All Services */}
          <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div 
              className="glass-card" 
              style={{ 
                width: '100%', 
                maxWidth: '380px', 
                padding: '24px 20px', 
                position: 'relative', 
                background: 'rgba(255, 255, 255, 0.02)',
                overflow: 'hidden'
              }}
            >
              {/* Card Title */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '12px' }}>
                <span style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#9ca3af', fontWeight: 700 }}>OUR SERVICES</span>
                <span style={{ fontSize: '9px', color: '#dfb76c', fontWeight: 600 }}>EXPERTISE</span>
              </div>

              {/* Scrolling Window with vertical fades */}
              <div 
                style={{ 
                  height: '220px', 
                  overflow: 'hidden', 
                  position: 'relative',
                  maskImage: 'linear-gradient(to bottom, transparent 0%, white 15%, white 85%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, white 15%, white 85%, transparent 100%)'
                }}
              >
                {/* Scroll Track (doubled for seamless loop) */}
                <div 
                  className="animate-scroll-vertical" 
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '12px',
                  }}
                >
                  {[
                    { num: '01', title: 'CGI & VFX Ads', color: '#dfb76c' },
                    { num: '02', title: 'Web & App Dev', color: '#c5a059' },
                    { num: '03', title: 'Branding & Logo', color: '#e5c185' },
                    { num: '04', title: 'SEO & Marketing', color: '#a37f3d' },
                    { num: '05', title: 'Video Editing', color: '#dfb76c' },
                    { num: '06', title: 'Paid Ads', color: '#c5a059' },
                    { num: '07', title: 'Resonance 2k25', color: '#e5c185' },
                    { num: '08', title: 'Vibrant Gujarat', color: '#a37f3d' },
                  ].concat([
                    { num: '01', title: 'CGI & VFX Ads', color: '#dfb76c' },
                    { num: '02', title: 'Web & App Dev', color: '#c5a059' },
                    { num: '03', title: 'Branding & Logo', color: '#e5c185' },
                    { num: '04', title: 'SEO & Marketing', color: '#a37f3d' },
                    { num: '05', title: 'Video Editing', color: '#dfb76c' },
                    { num: '06', title: 'Paid Ads', color: '#c5a059' },
                    { num: '07', title: 'Resonance 2k25', color: '#e5c185' },
                    { num: '08', title: 'Vibrant Gujarat', color: '#a37f3d' },
                  ]).map((item, idx) => (
                    <Link
                      key={idx}
                      href="/services"
                      className="scrolling-capsule"
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 700, color: item.color, letterSpacing: '1px' }}>{item.num}</span>
                        <span className="cn-syne" style={{ fontSize: '13px', fontWeight: 700, color: '#fff' }}>{item.title}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '9px', color: '#9ca3af', fontWeight: 600 }}>VIEW →</span>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: item.color, boxShadow: `0 0 6px ${item.color}` }} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Stat Bar */}
        <div
          style={{
            maxWidth: '1200px',
            margin: '64px auto 0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
          }}
        >
          {[
            { value: '30+',   label: 'Projects Completed', valueColor: '#dfb76c' },
            { value: '20+',   label: 'Happy Clients',      valueColor: '#c5a059' },
            { value: '10X',   label: 'Revenue Growth',     valueColor: '#e5c185' },
            { value: '100%',  label: 'Satisfaction Rate',  valueColor: '#a37f3d' },
          ].map(({ value, label, valueColor }) => (
            <div
              key={label}
              className="glass-card"
              style={{
                padding: '24px 20px',
                textAlign: 'center',
                background: 'rgba(255, 255, 255, 0.02)',
              }}
            >
              <div className="cn-bebas" style={{ fontSize: '42px', color: valueColor, letterSpacing: '1px', lineHeight: 1 }}>{value}</div>
              <div style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: '#9ca3af', fontWeight: 600, marginTop: '8px' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      <ProcessSection />

      <Ticker />

      <ServicesSection services={getServices()} featuredOnly={true} />
      
      <WorkSection projects={getProjects()} featuredOnly={true} />
      
      <TestimonialsSection />

      <div id="contact">
        <CTABanner
          primaryLabel="Book Free Call"
          primaryHref="/contact"
          secondaryLabel="View Portfolio"
          secondaryHref="/work"
        />
      </div>

      <Footer />
    </main>
  )
}
