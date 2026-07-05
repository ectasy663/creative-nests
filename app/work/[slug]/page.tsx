import { Header } from '@/components/wsclogic/Header'
import { Footer } from '@/components/wsclogic/Footer'
import { VideoBackground } from '@/components/wsclogic/VideoBackground'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getProjectBySlug } from '@/lib/db'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: 'Project Not Found — WSCLogic' }
  return {
    title: `${project.title} — WSCLogic`,
    description: project.desc.slice(0, 155) + '...',
    alternates: {
      canonical: `https://wsclogic.com/work/${slug}`
    }
  }
}

export default async function WorkProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = getProjectBySlug(slug)

  if (!data) {
    notFound()
  }

  const client = 'WSCLogic Client'
  const year = '2026'
  const services = data.tags
  const tag = data.tags.join(' · ')
  const intro = data.about

  return (
    <div style={{ position: 'relative', minHeight: '100vh', color: '#f3f4f6' }}>
      <VideoBackground src="/Brutalist_IT_company_hero_video_202607032332_gwr_video_mvp.mp4" />
      
      <Header />

      <section style={{ padding: '80px 28px', background: 'rgba(8, 7, 13, 0.45)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          
          {/* Back Navigation */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
            <Link href="/work" className="glass-btn-secondary" style={{ padding: '6px 16px', fontSize: '10px' }}>
              ← ALL WORK
            </Link>
            <div style={{ background: 'rgba(217, 70, 239, 0.1)', border: '1px solid rgba(217, 70, 239, 0.3)', padding: '6px 16px', borderRadius: '99px' }}>
              <span style={{ fontSize: '9px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700, color: '#d946ef' }}>
                Case Study
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="cn-bebas" style={{ fontSize: 'clamp(44px, 7vw, 80px)', lineHeight: 0.9, marginBottom: '8px', color: '#fff' }}>
            {data.title}
          </h1>
          <p className="cn-syne" style={{ fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 700, color: '#06b6d4', marginBottom: '44px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {tag}
          </p>

          {/* Running Demo Video Player */}
          <div style={{ width: '100%', height: 'clamp(280px, 45vw, 500px)', position: 'relative', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', marginBottom: '56px', overflow: 'hidden', background: '#000' }}>
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

          {/* Details Sidebar / Meta Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', marginBottom: '56px' }}>
            
            {/* Left: Summary and Meta details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="glass-card" style={{ padding: '36px 32px' }}>
                <h3 className="cn-syne" style={{ fontSize: '20px', fontWeight: 800, color: '#fff', marginBottom: '20px' }}>Project Metrics</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <div style={{ fontSize: '8px', letterSpacing: '2px', textTransform: 'uppercase', color: '#d946ef', fontWeight: 700 }}>Client</div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>{client}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '8px', letterSpacing: '2px', textTransform: 'uppercase', color: '#d946ef', fontWeight: 700 }}>Year</div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>{year}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '8px', letterSpacing: '2px', textTransform: 'uppercase', color: '#d946ef', fontWeight: 700 }}>Scope of Services</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                      {services.map((serv, idx) => (
                        <span key={idx} style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#fff', fontSize: '10px', padding: '4px 10px', borderRadius: '4px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                          {serv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The Story */}
            <div className="glass-card" style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div>
                <h2 className="cn-syne" style={{ fontSize: '22px', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
                  Intro
                </h2>
                <p style={{ fontSize: '14px', lineHeight: 1.8, color: '#9ca3af', marginBottom: '24px' }}>
                  {intro}
                </p>
                <h2 className="cn-syne" style={{ fontSize: '22px', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
                  The Challenge
                </h2>
                <p style={{ fontSize: '14px', lineHeight: 1.8, color: '#9ca3af' }}>
                  {data.challenge}
                </p>
              </div>

              <div>
                <h2 className="cn-syne" style={{ fontSize: '22px', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
                  Our Solution
                </h2>
                <p style={{ fontSize: '14px', lineHeight: 1.8, color: '#9ca3af' }}>
                  {data.solution}
                </p>
              </div>
            </div>

          </div>

          {/* Results Block */}
          <div className="glass-card" style={{ padding: '40px 32px', background: 'rgba(6, 182, 212, 0.04)', borderColor: 'rgba(6, 182, 212, 0.25)', boxShadow: '0 8px 32px rgba(6, 182, 212, 0.05)' }}>
            <h2 className="cn-bebas" style={{ fontSize: '36px', letterSpacing: '2px', color: '#fff', marginBottom: '24px' }}>
              The Impact
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {data.results.map((res, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#06b6d4', boxShadow: '0 0 10px #06b6d4', flexShrink: 0 }} />
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#f3f4f6' }}>{res}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Call to Action */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '64px' }}>
            <Link href="/contact" className="gradient-btn-primary">
              Book a Call to Build Yours →
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
