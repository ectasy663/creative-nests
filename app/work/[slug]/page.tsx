import { Header } from '@/components/creative-nests/Header'
import { Footer } from '@/components/creative-nests/Footer'
import { VideoBackground } from '@/components/creative-nests/VideoBackground'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface ProjectDetail {
  title: string
  tag: string
  client: string
  services: string[]
  year: string
  image: string
  intro: string
  challenge: string
  solution: string
  results: string[]
}

const projectData: Record<string, ProjectDetail> = {
  'creative-nests-launch': {
    title: 'Creative Nests Launch 2024',
    tag: 'CGI & VFX Motion Campaign',
    client: 'Creative Nests Agency',
    services: ['Scripting', '3D VFX Modeling', 'Audio Production', 'Compositing'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80',
    intro: 'To mark the launching of India\'s most daring creative agency, we wanted to build a visual experience that broke away from flat web designs. We crafted a highly immersive CGI promo that defied gravity and set a bold standard.',
    challenge: 'Typical agency launch campaigns are overlooked because they feel uniform. We needed to capture undivided attention and drive massive traffic to our client bookings system within a 48-hour launch window.',
    solution: 'We conceptualized a high-impact brutalist video featuring abstract 3D elements colliding and morphing. By using heavy sound design and fast-paced frames, we built a digital spectacle that kept retention above 85% on social channels.',
    results: [
      'Over 2.5 Million impressions organically',
      '85%+ average video retention rate',
      'Over 120 client consultations booked in launch week'
    ]
  },
  'identity-design': {
    title: 'Brand Identity Redesign 2024',
    tag: 'Comprehensive Visual Identity System',
    client: 'Apex Analytics',
    services: ['Competitive Mapping', 'Logo System', 'Typography Guide', 'SaaS Dashboards Layouts'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?auto=format&fit=crop&w=1200&q=80',
    intro: 'Apex Analytics needed a visual brand system that conveyed precision engineering and absolute stability without looking like a dry corporate template. We designed an identity from the ground up.',
    challenge: 'The client was struggling to appeal to modern tech founders. Their legacy logo felt dated and didn\'t scale down cleanly to mobile app icons or favicons.',
    solution: 'We created a custom modern logo system based on modular grids and bold, high-contrast colors (Electric Purple and Orange Cream). We mapped this across a cohesive digital brand book, presentation slides, and user dashboard styles.',
    results: [
      '300% increase in inbound startup leads',
      '100% brand guide compliance globally',
      'Flawless scaling of the logo across portals'
    ]
  },
  'ecomm-platform': {
    title: 'E-commerce Platform Dev',
    tag: 'Next.js & React Conversion Optimization',
    client: 'TrendHQ Apparel',
    services: ['Front-end Development', 'SEO Optimization', 'Payment Gateways Integration', 'Analytics Dashboard'],
    year: '2024',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    intro: 'We re-architected TrendHQ\'s entire online store to convert visitors into loyal customers at double the industry average rate. Built fully custom, fast, and secure.',
    challenge: 'The legacy platform took over 5 seconds to load on mobile devices, resulting in a staggering 62% shopping cart abandonment rate.',
    solution: 'We engineered a highly optimized headless Next.js ecommerce storefront. By utilizing ISR (Incremental Static Regeneration) and image optimization, we brought loading times down to sub-1 second and simplified the checkout flow to a 2-step process.',
    results: [
      'Mobile checkout conversions up by 140%',
      'Page load times reduced to 0.8s',
      'Cart abandonment decreased by 45%'
    ]
  }
}

export default async function WorkProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = projectData[slug]

  if (!data) {
    notFound()
  }

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
            {data.tag}
          </p>

          {/* Featured Image */}
          <div style={{ width: '100%', height: 'clamp(280px, 45vw, 500px)', position: 'relative', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', marginBottom: '56px', overflow: 'hidden' }}>
            <Image src={data.image} alt={data.title} fill style={{ objectFit: 'cover' }} priority />
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
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>{data.client}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '8px', letterSpacing: '2px', textTransform: 'uppercase', color: '#d946ef', fontWeight: 700 }}>Year</div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>{data.year}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '8px', letterSpacing: '2px', textTransform: 'uppercase', color: '#d946ef', fontWeight: 700 }}>Scope of Services</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                      {data.services.map((serv, idx) => (
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
            <Link href="/#contact" className="gradient-btn-primary">
              Book a Call to Build Yours →
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
