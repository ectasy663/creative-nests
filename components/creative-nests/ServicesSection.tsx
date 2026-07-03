import Link from 'next/link'
import Image from 'next/image'

const services = [
  { num: '01', slug: 'cgi-vfx-ads', title: 'CGI & VFX Ads',    desc: 'Cinematic ads that stop the scroll & burn into memory',       bar: 'linear-gradient(135deg, #6366f1, #d946ef)', numColor: '#6366f1', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80' },
  { num: '02', slug: 'web-app-dev', title: 'Web & App Dev',    desc: 'World-class digital platforms built for growth',              bar: 'linear-gradient(135deg, #d946ef, #06b6d4)', numColor: '#d946ef', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80' },
  { num: '03', slug: 'branding-logo', title: 'Branding & Logo',  desc: 'Identities that speak before words are needed',               bar: 'linear-gradient(135deg, #06b6d4, #6366f1)', numColor: '#06b6d4', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80' },
  { num: '04', slug: 'seo-marketing', title: 'SEO & Marketing',  desc: 'Precision strategy that makes you impossible to ignore',      bar: 'linear-gradient(135deg, #6366f1, #06b6d4)', numColor: '#6366f1', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80' },
  { num: '05', slug: 'paid-ads-meta', title: 'Paid Ads & Meta',  desc: 'Data-driven spend delivering maximum ROI',                    bar: 'linear-gradient(135deg, #d946ef, #6366f1)', numColor: '#d946ef', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80' },
  { num: '06', slug: 'video-editing', title: 'Video Editing',    desc: 'Frame-perfect storytelling that moves audiences',             bar: 'linear-gradient(135deg, #06b6d4, #d946ef)', numColor: '#06b6d4', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80' },
]

export function ServicesSection({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const displayedServices = featuredOnly ? services.slice(0, 3) : services

  return (
    <section id="services" style={{ background: 'transparent', padding: '72px 28px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '44px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div style={{ background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)', display: 'inline-block', padding: '6px 16px', borderRadius: '99px', marginBottom: '16px' }}>
            <span style={{ fontSize: '9px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700, color: '#6366f1' }}>
              {featuredOnly ? 'Core Capabilities' : 'What We Do'}
            </span>
          </div>
          <div className="cn-bebas" style={{ fontSize: 'clamp(38px, 6vw, 64px)', letterSpacing: '1px', color: '#fff', lineHeight: 1.1, paddingTop: '8px' }}>
            Our Agency <span style={{ background: 'linear-gradient(135deg, #6366f1, #d946ef)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Services</span>
          </div>
        </div>
        <div style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#9ca3af', fontWeight: 600, textAlign: 'right' }}>
          {featuredOnly ? 'Futuristic Solutions' : 'Next-Gen Performance'}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
        {displayedServices.map(({ num, slug, title, desc, numColor, bar, image }) => (
          <div
            key={num}
            className="glass-card"
            style={{
              padding: '32px 28px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '440px',
            }}
          >
            {/* Soft background glow */}
            <div style={{ position: 'absolute', top: '20px', right: '20px', width: '80px', height: '80px', background: numColor, opacity: 0.04, filter: 'blur(30px)', pointerEvents: 'none' }} />

            <div>
              {/* Image Frame with Glass border */}
              <div style={{ width: '100%', height: '180px', position: 'relative', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', marginBottom: '24px', overflow: 'hidden' }}>
                <Image 
                  src={image} 
                  alt={title} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="cn-bebas" style={{ fontSize: '28px', color: numColor, letterSpacing: '1px' }}>{num}</span>
                <div style={{ width: '36px', height: '3px', background: bar, borderRadius: '99px' }} />
              </div>

              <h3 className="cn-syne" style={{ fontSize: '20px', fontWeight: 800, color: '#fff', margin: '12px 0 8px', lineHeight: 1.25, paddingTop: '4px' }}>{title}</h3>
              <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#9ca3af', fontWeight: 400 }}>{desc}</p>
            </div>

            <Link
              href={`/services/${slug}`}
              className="glass-btn-secondary"
              style={{
                alignSelf: 'flex-start',
                marginTop: '28px',
                padding: '10px 24px',
                fontSize: '10px',
              }}
            >
              Explore Info →
            </Link>
          </div>
        ))}
      </div>

      {featuredOnly && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '56px' }}>
          <Link href="/services" className="gradient-btn-primary">
            View All Services
          </Link>
        </div>
      )}
    </section>
  )
}
