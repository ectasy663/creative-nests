import Link from 'next/link'
import { Header } from '@/components/wsclogic/Header'
import { Footer } from '@/components/wsclogic/Footer'
import { Ticker } from '@/components/wsclogic/Ticker'
import { CTABanner } from '@/components/wsclogic/CTABanner'
import { VideoBackground } from '@/components/wsclogic/VideoBackground'
import { ServicesSection } from '@/components/wsclogic/ServicesSection'
import { WorkSection } from '@/components/wsclogic/WorkSection'
import { TestimonialsSection } from '@/components/wsclogic/TestimonialsSection'
import { getProjects } from '@/lib/db'

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
                <span style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#9ca3af', fontWeight: 700 }}>OUR CAPABILITIES</span>
                <span style={{ fontSize: '9px', color: '#06b6d4', fontWeight: 600 }}>ROLLING PREVIEW</span>
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
                    { num: '01', title: 'CGI & VFX Ads', color: '#6366f1', href: '/services/cgi-vfx-ads' },
                    { num: '02', title: 'Web & App Dev', color: '#d946ef', href: '/services/web-app-dev' },
                    { num: '03', title: 'Branding & Logo', color: '#06b6d4', href: '/services/branding-logo' },
                    { num: '04', title: 'SEO & Marketing', color: '#6366f1', href: '/services/seo-marketing' },
                    { num: '05', title: 'Paid Ads & Meta', color: '#d946ef', href: '/services/paid-ads-meta' },
                    { num: '06', title: 'Video Editing', color: '#06b6d4', href: '/services/video-editing' },
                    { num: '07', title: 'CRM Systems', color: '#6366f1', href: '/services/crm-systems' },
                    { num: '08', title: 'ERP Solutions', color: '#d946ef', href: '/services/erp-solutions' },
                  ].concat([
                    { num: '01', title: 'CGI & VFX Ads', color: '#6366f1', href: '/services/cgi-vfx-ads' },
                    { num: '02', title: 'Web & App Dev', color: '#d946ef', href: '/services/web-app-dev' },
                    { num: '03', title: 'Branding & Logo', color: '#06b6d4', href: '/services/branding-logo' },
                    { num: '04', title: 'SEO & Marketing', color: '#6366f1', href: '/services/seo-marketing' },
                    { num: '05', title: 'Paid Ads & Meta', color: '#d946ef', href: '/services/paid-ads-meta' },
                    { num: '06', title: 'Video Editing', color: '#06b6d4', href: '/services/video-editing' },
                    { num: '07', title: 'CRM Systems', color: '#6366f1', href: '/services/crm-systems' },
                    { num: '08', title: 'ERP Solutions', color: '#d946ef', href: '/services/erp-solutions' },
                  ]).map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="scrolling-capsule"
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 700, color: item.color, letterSpacing: '1px' }}>{item.num}</span>
                        <span className="cn-syne" style={{ fontSize: '13px', fontWeight: 700, color: '#fff' }}>{item.title}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '9px', color: '#9ca3af', fontWeight: 600 }}>GO →</span>
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

      {/* PROCESS OF WORK SECTION */}
      <section
        id="process"
        style={{
          background: '#040307', /* Solid dark color */
          padding: '96px 28px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ display: 'inline-block', background: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.3)', padding: '6px 18px', borderRadius: '99px', marginBottom: '16px' }}>
              <span style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700, color: '#06b6d4' }}>Our Methodology</span>
            </div>
            <h2 className="cn-bebas" style={{ fontSize: 'clamp(36px, 5vw, 56px)', color: '#fff', letterSpacing: '1px', lineHeight: 1.1 }}>
              Process of <span style={{ background: 'linear-gradient(135deg, #06b6d4, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Work</span>
            </h2>
            <p style={{ fontSize: '15px', color: '#9ca3af', maxWidth: '600px', margin: '16px auto 0' }}>
              We follow a rigorous, metric-driven workflow designed to eliminate guesswork and deliver precise enterprise-grade solutions.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {[
              { step: '01', title: 'Discovery & Audit', desc: 'In-depth analysis of your current infrastructure, bottlenecks, and strategic goals.', color: '#6366f1' },
              { step: '02', title: 'Architecture Blueprint', desc: 'Detailed wireframes, technical stack selection, and UI/UX design system mapping.', color: '#d946ef' },
              { step: '03', title: 'High-Fidelity Execution', desc: 'Agile development and precise rendering using the latest robust frameworks.', color: '#06b6d4' },
              { step: '04', title: 'Stress Testing & Q/A', desc: 'Rigorous performance checks, security audits, and cohort testing before rollout.', color: '#10b981' },
              { step: '05', title: 'Launch & Scale', desc: 'Seamless deployment with continuous post-launch optimization and metric tracking.', color: '#6366f1' },
            ].map((item, idx) => (
              <div 
                key={idx} 
                style={{ 
                  background: 'rgba(255, 255, 255, 0.02)', 
                  border: '1px solid rgba(255, 255, 255, 0.05)', 
                  borderRadius: '16px', 
                  padding: '32px 24px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '3px', background: item.color }} />
                <div className="cn-bebas" style={{ fontSize: '32px', color: item.color, marginBottom: '16px', opacity: 0.8 }}>
                  {item.step}
                </div>
                <h3 className="cn-syne" style={{ fontSize: '18px', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#9ca3af', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
