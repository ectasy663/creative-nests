import Link from 'next/link'
import { Header } from '@/components/wsclogic/Header'
import { Footer } from '@/components/wsclogic/Footer'
import { Ticker } from '@/components/wsclogic/Ticker'
import { CTABanner } from '@/components/wsclogic/CTABanner'
import { VideoBackground } from '@/components/wsclogic/VideoBackground'
import { ServicesSection } from '@/components/wsclogic/ServicesSection'
import { WorkSection } from '@/components/wsclogic/WorkSection'
import { TestimonialsSection } from '@/components/wsclogic/TestimonialsSection'
import { ProcessSection } from '@/components/wsclogic/ProcessSection'
import { getProjects } from '@/lib/db'

export const metadata = {
  title: 'WSCLogic — CGI & VFX Ads, Web & App Development, Branding',
  description: 'WSCLogic is India\'s premium digital studio delivering cinematic CGI ads, high-performance Next.js architectures, paid acquisition, and bespoke ERP/CRM dashboards.',
  alternates: {
    canonical: 'https://wsclogic.com'
  }
}

export default function HomePage() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', color: '#f3f4f6' }}>
      <VideoBackground src="/Brutalist_IT_company_hero_video_202607032332_gwr_video_mvp.mp4" />
      
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
        {/* Soft background neon glows */}
        <div style={{ position: 'absolute', top: '10%', right: '10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: '250px', height: '250px', background: 'radial-gradient(circle, rgba(217, 70, 239, 0.1) 0%, transparent 70%)', filter: 'blur(45px)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Left: Text & CTAs */}
          <div style={{ flex: '1 1 550px', zIndex: 10 }}>
            {/* Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)', borderRadius: '99px', padding: '6px 16px' }}>
                <span style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700, color: '#6366f1' }}>
                  Next-Gen Digital Production Studio
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="cn-syne" style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, color: '#fff', lineHeight: 1.25, paddingTop: '10px', marginBottom: '24px', letterSpacing: '-1px' }}>
              Where Brands Become<br />
              <span style={{ background: 'linear-gradient(135deg, #6366f1, #d946ef)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Legends</span>.
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
                <span style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#9ca3af', fontWeight: 700 }}>OUR PROCESS</span>
                <span style={{ fontSize: '9px', color: '#06b6d4', fontWeight: 600 }}>METHODOLOGY</span>
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
                    { num: '01', title: 'Discovery & Audit', color: '#6366f1' },
                    { num: '02', title: 'Architecture Blueprint', color: '#d946ef' },
                    { num: '03', title: 'High-Fidelity Execution', color: '#06b6d4' },
                    { num: '04', title: 'Stress Testing & Q/A', color: '#10b981' },
                    { num: '05', title: 'Launch & Scale', color: '#6366f1' },
                  ].concat([
                    { num: '01', title: 'Discovery & Audit', color: '#6366f1' },
                    { num: '02', title: 'Architecture Blueprint', color: '#d946ef' },
                    { num: '03', title: 'High-Fidelity Execution', color: '#06b6d4' },
                    { num: '04', title: 'Stress Testing & Q/A', color: '#10b981' },
                    { num: '05', title: 'Launch & Scale', color: '#6366f1' },
                  ]).map((item, idx) => (
                    <Link
                      key={idx}
                      href="#process"
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
            { value: '30+',   label: 'Projects Completed', valueColor: '#6366f1' },
            { value: '20+',   label: 'Happy Clients',      valueColor: '#d946ef' },
            { value: '10X',   label: 'Revenue Growth',     valueColor: '#06b6d4' },
            { value: '100%',  label: 'Satisfaction Rate',  valueColor: '#10b981' },
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

      <ServicesSection featuredOnly={true} />
      
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
