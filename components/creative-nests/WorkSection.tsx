import Link from 'next/link'
import Image from 'next/image'

export function WorkSection({ featuredOnly = false }: { featuredOnly?: boolean }) {
  return (
    <section id="portfolio" style={{ background: 'transparent', padding: '72px 28px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '44px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div style={{ background: 'rgba(217, 70, 239, 0.1)', border: '1px solid rgba(217, 70, 239, 0.3)', display: 'inline-block', padding: '6px 16px', borderRadius: '99px', marginBottom: '16px' }}>
            <span style={{ fontSize: '9px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700, color: '#d946ef' }}>
              {featuredOnly ? 'Featured Portfolio' : 'Case Studies'}
            </span>
          </div>
          <div className="cn-bebas" style={{ fontSize: 'clamp(38px, 6vw, 64px)', letterSpacing: '1px', color: '#fff', lineHeight: 1.1, paddingTop: '8px' }}>
            Selected <span style={{ background: 'linear-gradient(135deg, #d946ef, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Projects</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
        
        {/* Featured */}
        <div 
          className="glass-card"
          style={{ 
            padding: '32px 28px', 
            minHeight: '450px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            position: 'relative', 
            overflow: 'hidden',
          }}
        >
          <div style={{ position: 'absolute', top: '0', right: '0', width: '120px', height: '120px', background: '#d946ef', opacity: 0.05, filter: 'blur(40px)', pointerEvents: 'none' }} />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ background: 'rgba(217, 70, 239, 0.15)', border: '1px solid rgba(217, 70, 239, 0.3)', display: 'inline-block', padding: '4px 12px', borderRadius: '99px', marginBottom: '16px' }}>
              <span style={{ fontSize: '8px', letterSpacing: '3px', textTransform: 'uppercase' as const, color: '#d946ef', fontWeight: 700 }}>Featured · CGI</span>
            </div>
            
            {/* Featured Image */}
            <div style={{ width: '100%', height: '220px', position: 'relative', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', margin: '8px 0 20px', overflow: 'hidden' }}>
              <Image 
                src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80" 
                alt="Creative Nests Launch" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>

            <h3 className="cn-syne" style={{ fontSize: '22px', fontWeight: 800, color: '#fff', lineHeight: 1.25, paddingTop: '4px' }}>
              Creative Nests Launch 2024
            </h3>
            <p style={{ fontSize: '13px', color: '#9ca3af', marginTop: '6px', lineHeight: 1.5 }}>
              Immersive 3D/CGI visual branding mapping the modern frontier.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1, marginTop: '24px' }}>
            <span style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase' as const, color: '#06b6d4', fontWeight: 600 }}>CGI · VFX · Motion</span>
            <Link href="/work/creative-nests-launch" className="gradient-btn-primary" style={{ padding: '8px 20px', fontSize: '9px' }}>
              View Case Study →
            </Link>
          </div>
        </div>

        {/* Branding */}
        <div 
          className="glass-card"
          style={{ 
            padding: '32px 28px', 
            minHeight: '450px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between', 
            position: 'relative', 
            overflow: 'hidden',
          }}
        >
          <div style={{ position: 'absolute', top: '0', right: '0', width: '120px', height: '120px', background: '#06b6d4', opacity: 0.05, filter: 'blur(40px)', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ background: 'rgba(6, 182, 212, 0.15)', border: '1px solid rgba(6, 182, 212, 0.3)', display: 'inline-block', padding: '4px 12px', borderRadius: '99px', marginBottom: '16px' }}>
              <span style={{ fontSize: '8px', letterSpacing: '3px', textTransform: 'uppercase' as const, color: '#06b6d4', fontWeight: 700 }}>Identity System</span>
            </div>
            
            {/* Project Image */}
            <div style={{ width: '100%', height: '220px', position: 'relative', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', margin: '8px 0 20px', overflow: 'hidden' }}>
              <Image 
                src="https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?auto=format&fit=crop&w=600&q=80" 
                alt="Identity Design" 
                fill 
                style={{ objectFit: 'cover' }} 
              />
            </div>

            <h3 className="cn-syne" style={{ fontSize: '22px', fontWeight: 800, color: '#fff', lineHeight: 1.25, paddingTop: '4px' }}>
              Apex Brand Identity 
            </h3>
            <p style={{ fontSize: '13px', color: '#9ca3af', marginTop: '6px', lineHeight: 1.5 }}>
              Minimalist tech-driven logo patterns and core design system.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1, marginTop: '24px' }}>
            <span style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase' as const, color: '#6366f1', fontWeight: 600 }}>Design · Identity</span>
            <Link href="/work/identity-design" className="gradient-btn-primary" style={{ padding: '8px 20px', fontSize: '9px' }}>
              View Case Study →
            </Link>
          </div>
        </div>

        {/* Ecomm - Only show if not featuredOnly */}
        {!featuredOnly && (
          <div 
            className="glass-card"
            style={{ 
              padding: '32px 28px', 
              minHeight: '450px', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between', 
              position: 'relative', 
              overflow: 'hidden',
            }}
          >
            <div style={{ position: 'absolute', top: '0', right: '0', width: '120px', height: '120px', background: '#6366f1', opacity: 0.05, filter: 'blur(40px)', pointerEvents: 'none' }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ background: 'rgba(99, 102, 241, 0.15)', border: '1px solid rgba(99, 102, 241, 0.3)', display: 'inline-block', padding: '4px 12px', borderRadius: '99px', marginBottom: '16px' }}>
                <span style={{ fontSize: '8px', letterSpacing: '3px', textTransform: 'uppercase' as const, color: '#6366f1', fontWeight: 700 }}>NextJS Dev</span>
              </div>
              
              {/* Project Image */}
              <div style={{ width: '100%', height: '220px', position: 'relative', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', margin: '8px 0 20px', overflow: 'hidden' }}>
                <Image 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" 
                  alt="Ecomm Platform" 
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
              </div>

              <h3 className="cn-syne" style={{ fontSize: '22px', fontWeight: 800, color: '#fff', lineHeight: 1.25, paddingTop: '4px' }}>
                TrendHQ Platform Dev
              </h3>
              <p style={{ fontSize: '13px', color: '#9ca3af', marginTop: '6px', lineHeight: 1.5 }}>
                Sub-second page speeds driving e-commerce conversions.
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1, marginTop: '24px' }}>
              <span style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase' as const, color: '#d946ef', fontWeight: 600 }}>Web · React · Dev</span>
              <Link href="/work/ecomm-platform" className="gradient-btn-primary" style={{ padding: '8px 20px', fontSize: '9px' }}>
                View Case Study →
              </Link>
            </div>
          </div>
        )}
      </div>

      {featuredOnly && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '56px' }}>
          <Link href="/work" className="gradient-btn-primary">
            View All Projects
          </Link>
        </div>
      )}
    </section>
  )
}
