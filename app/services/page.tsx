import { Header } from '@/components/creative-nests/Header'
import { Footer } from '@/components/creative-nests/Footer'
import { ServicesSection } from '@/components/creative-nests/ServicesSection'
import { VideoBackground } from '@/components/creative-nests/VideoBackground'
import { CTABanner } from '@/components/creative-nests/CTABanner'

export const metadata = { title: 'Services — WSCLogic' }

export default function ServicesPage() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', color: '#f3f4f6' }}>
      <VideoBackground src="/Brutalist_IT_company_hero_video_202607032332_gwr_video_mvp.mp4" />
      
      <Header />

      <section style={{ padding: '40px 0' }}>
        <ServicesSection />
      </section>

      {/* PROCESS OF WORK SECTION */}
      <section
        id="process"
        style={{
          background: '#040307',
          padding: '96px 28px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
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
