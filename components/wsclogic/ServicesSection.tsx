import Link from 'next/link'
import { getServices } from '@/lib/db'

export function ServicesSection({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const allServices = getServices()
  const displayedServices = featuredOnly ? allServices.slice(0, 3) : allServices

  return (
    <section id="services" style={{ background: 'transparent', padding: '80px 28px' }}>
      {/* Section Header */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '56px', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <div style={{ background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)', display: 'inline-block', padding: '6px 18px', borderRadius: '99px', marginBottom: '16px' }}>
            <span style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700, color: '#6366f1' }}>
              {featuredOnly ? 'Core Capabilities' : 'Full Suite Capabilities'}
            </span>
          </div>
          <h2 className="cn-bebas" style={{ fontSize: 'clamp(42px, 6vw, 68px)', letterSpacing: '1px', color: '#fff', lineHeight: 1, paddingTop: '4px' }}>
            Our Next-Gen <span style={{ background: 'linear-gradient(135deg, #6366f1, #d946ef)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Services</span>
          </h2>
        </div>
        <div style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#9ca3af', fontWeight: 600, textAlign: 'right', lineHeight: 1.5 }}>
          {featuredOnly ? 'Scale-Ready Solutions' : 'Premium Execution Models'}
        </div>
      </div>

      {/* Services Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
        {displayedServices.map(({ num, slug, title, desc, numColor, bar, videoUrl }) => (
          <div
            key={num}
            className="glass-card"
            style={{
              padding: '36px 32px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '480px',
              overflow: 'hidden'
            }}
          >
            {/* Soft background glow */}
            <div style={{ position: 'absolute', top: '20px', right: '20px', width: '120px', height: '120px', background: numColor, opacity: 0.05, filter: 'blur(35px)', pointerEvents: 'none' }} />

            <div>
              {/* Interactive Video Frame */}
              <div 
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  position: 'relative', 
                  border: '1px solid rgba(255, 255, 255, 0.08)', 
                  borderRadius: '12px', 
                  marginBottom: '28px', 
                  overflow: 'hidden',
                  background: '#040307'
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="hover:scale-105 transition-transform duration-500 ease-out"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                >
                  <source src={videoUrl} type="video/mp4" />
                </video>
              </div>

              {/* Number and accent line */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span className="cn-bebas" style={{ fontSize: '32px', color: numColor, letterSpacing: '1px', lineHeight: 1 }}>{num}</span>
                <div style={{ width: '48px', height: '3px', background: bar, borderRadius: '99px' }} />
              </div>

              {/* Title & Description with Improved Typography */}
              <h3 className="cn-syne" style={{ fontSize: '22px', fontWeight: 800, color: '#fff', margin: '8px 0 12px', lineHeight: 1.25, letterSpacing: '-0.5px' }}>
                {title}
              </h3>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#9ca3af', fontWeight: 400 }}>
                {desc}
              </p>
            </div>

            <Link
              href={`/services/${slug}`}
              className="glass-btn-secondary"
              style={{
                alignSelf: 'flex-start',
                marginTop: '32px',
                padding: '10px 28px',
                fontSize: '10px',
                letterSpacing: '2px'
              }}
            >
              Explore Capabilities →
            </Link>
          </div>
        ))}
      </div>

      {featuredOnly && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '64px' }}>
          <Link href="/services" className="gradient-btn-primary" style={{ padding: '14px 40px', fontSize: '11px', letterSpacing: '2.5px' }}>
            View All Services
          </Link>
        </div>
      )}
    </section>
  )
}
