import { Header } from '@/components/creative-nests/Header'
import { Footer } from '@/components/creative-nests/Footer'
import { VideoBackground } from '@/components/creative-nests/VideoBackground'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getServiceBySlug } from '@/lib/db'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return { title: 'Service Not Found — Creative Nests' }
  return { title: `${service.title} — Creative Nests` }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = getServiceBySlug(slug)

  if (!data) {
    notFound()
  }

  return (
    <div style={{ position: 'relative', minHeight: '100vh', color: '#f3f4f6' }}>
      <VideoBackground src="/Brutalist_IT_company_hero_video_202607032332_gwr_video_mvp.mp4" />
      
      <Header />

      <section style={{ padding: '80px 28px', background: 'rgba(8, 7, 13, 0.45)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          
          {/* Breadcrumbs */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
            <Link href="/services" className="glass-btn-secondary" style={{ padding: '6px 16px', fontSize: '10px' }}>
              ← ALL SERVICES
            </Link>
            <div style={{ background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)', padding: '6px 16px', borderRadius: '99px' }}>
              <span style={{ fontSize: '9px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700, color: '#6366f1' }}>
                Service Overview
              </span>
            </div>
          </div>

          {/* Title and subtitle */}
          <h1 className="cn-bebas" style={{ fontSize: 'clamp(48px, 8vw, 84px)', lineHeight: 0.9, marginBottom: '8px', color: '#fff' }}>
            {data.title}
          </h1>
          <p className="cn-syne" style={{ fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: 700, color: '#d946ef', marginBottom: '44px' }}>
            {data.subtitle}
          </p>

          {/* Service Showcase Video Player */}
          <div style={{ width: '100%', height: 'clamp(250px, 45vw, 480px)', position: 'relative', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', marginBottom: '56px', overflow: 'hidden', background: '#000' }}>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            >
              <source src={data.videoUrl} type="video/mp4" />
            </video>
          </div>

          {/* Details Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px' }}>
            
            {/* Philosophy */}
            <div className="glass-card" style={{ padding: '36px 32px' }}>
              <h2 className="cn-syne" style={{ fontSize: '24px', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
                The Philosophy
              </h2>
              <div style={{ fontSize: '15px', lineHeight: 1.8, color: '#9ca3af', marginBottom: '36px' }}>
                {data.desc}
              </div>

              <h2 className="cn-syne" style={{ fontSize: '24px', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
                What We Deliver
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {data.features.map((feature, i) => (
                  <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center', fontSize: '14px', color: '#f3f4f6' }}>
                    <span style={{ color: '#06b6d4', fontSize: '18px' }}>✦</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Workflow */}
            <div className="glass-card" style={{ padding: '36px 32px' }}>
              <h2 className="cn-syne" style={{ fontSize: '24px', fontWeight: 800, color: '#fff', marginBottom: '20px' }}>
                Modern Digital Workflow
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {data.process.map((step, i) => (
                  <div key={i} style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', padding: '20px', display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <div className="cn-bebas" style={{ fontSize: '28px', color: '#6366f1' }}>0{i+1}</div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>{step}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Pricing Table */}
          <div style={{ marginTop: '80px' }}>
            <h2 className="cn-bebas" style={{ fontSize: '40px', letterSpacing: '2px', textAlign: 'center', marginBottom: '40px', color: '#fff' }}>
              Simple, Transparent Pricing
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'center' }}>
              {data.pricing.map((tier, i) => (
                <div 
                  key={i} 
                  className="glass-card" 
                  style={{ 
                    padding: '40px 32px', 
                    width: '350px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between',
                    minHeight: '420px',
                    background: i % 2 === 1 ? 'rgba(99, 102, 241, 0.06)' : 'rgba(255, 255, 255, 0.03)',
                    borderColor: i % 2 === 1 ? 'rgba(99, 102, 241, 0.25)' : 'rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <div>
                    <div className="cn-bebas" style={{ fontSize: '22px', letterSpacing: '2px', color: i % 2 === 0 ? '#6366f1' : '#d946ef', textTransform: 'uppercase', marginBottom: '8px' }}>
                      {tier.name}
                    </div>
                    <div className="cn-bebas" style={{ fontSize: '48px', lineHeight: 1, margin: '16px 0 24px', color: '#fff' }}>
                      {tier.price}
                    </div>
                    <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)', marginBottom: '24px' }} />
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      {tier.features.map((feat, idx) => (
                        <li key={idx} style={{ fontSize: '13px', display: 'flex', gap: '10px', alignItems: 'center', color: '#9ca3af' }}>
                          <span style={{ color: '#10b981' }}>✓</span> {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    href="/contact" 
                    className={i % 2 === 1 ? 'gradient-btn-primary' : 'glass-btn-secondary'}
                    style={{ 
                      display: 'block', 
                      textAlign: 'center', 
                      marginTop: '36px',
                    }}
                  >
                    Get Started →
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
