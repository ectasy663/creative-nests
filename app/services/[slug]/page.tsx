import { Header } from '@/components/wsclogic/Header'
import { Footer } from '@/components/wsclogic/Footer'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getServiceBySlug } from '@/lib/db'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return { title: 'Service Not Found — WSCLogic' }
  return {
    title: `${service.title} — WSCLogic`,
    description: service.desc.slice(0, 155) + '...',
    alternates: {
      canonical: `https://wsclogic.com/services/${slug}`
    }
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = getServiceBySlug(slug)

  if (!data) {
    notFound()
  }

  return (
    <div style={{ position: 'relative', minHeight: '100vh', color: '#f3f4f6', backgroundColor: '#000' }}>
      
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



        </div>
      </section>

      <Footer />
    </div>
  )
}
