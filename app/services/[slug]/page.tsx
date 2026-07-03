import { Header } from '@/components/creative-nests/Header'
import { Footer } from '@/components/creative-nests/Footer'
import { VideoBackground } from '@/components/creative-nests/VideoBackground'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface ServiceDetail {
  title: string
  subtitle: string
  desc: string
  image: string
  features: string[]
  process: string[]
  pricing: { name: string; price: string; features: string[] }[]
}

const serviceData: Record<string, ServiceDetail> = {
  'cgi-vfx-ads': {
    title: 'CGI & VFX Ads',
    subtitle: 'Cinematic ads that stop the scroll & burn into memory.',
    desc: 'In a digital world crowded with average content, our CGI & VFX advertisements are designed to grab attention instantly. We blend high-fidelity 3D assets, fluid dynamics, and realistic animations to create visual narratives that defy gravity and command engagement.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Scroll-Stopping 3D Visual Effects',
      'Realistic Simulation & Fluid Dynamics',
      'High-Impact Social Media Hook Integration',
      'Flawless Motion Tracking & Green Screen Compositing'
    ],
    process: [
      'Concept Scripting & Storyboarding',
      '3D Modelling & Texturing Assets',
      'VFX Animation & Simulation rendering',
      'Sound Design & Final Compositing'
    ],
    pricing: [
      { name: 'Core Campaign', price: '₹49k', features: ['1 VFX Ad (15s)', 'Storyboarding', '2 Rounds of Revision', '1080p Resolution'] },
      { name: 'Domination Tier', price: '₹120k', features: ['3 VFX Ads (15-30s)', 'Detailed Storyboarding', 'Unlimited Revisions', '4K Rendering + Social Hooks'] }
    ]
  },
  'web-app-dev': {
    title: 'Web & App Dev',
    subtitle: 'World-class digital platforms built for scale & rapid growth.',
    desc: 'We construct blazing fast, secure, and visually stunning web applications utilizing Next.js, React, and robust backend architectures. Our products are not just code; they are conversion engines designed to load instantly and scale seamlessly as your user base grows.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Next.js 15 App Router Architectures',
      'Responsive Fluid Layouts & Tailwind Integration',
      'Blazing Fast SEO-optimized Performance',
      'Robust API Integrations & State Management'
    ],
    process: [
      'Wireframing & UI/UX Design System Mapping',
      'Component Architecture Planning',
      'Front & Backend Code Implementation',
      'Performance Optimization & Hosting Deployment'
    ],
    pricing: [
      { name: 'Startup Launch', price: '₹89k', features: ['5 Responsive Pages', 'SEO Configuration', 'Contact Form Integration', '1 Month Support'] },
      { name: 'Enterprise SaaS', price: '₹250k', features: ['Custom App Logic', 'Interactive Dashboard', 'Full API Integrations', '3 Months Support'] }
    ]
  },
  'branding-logo': {
    title: 'Branding & Logo',
    subtitle: 'Brand identities that speak before words are ever spoken.',
    desc: 'Your brand is not just a logo; it is the gut feeling a customer has about your product. We design cohesive, memorable visual identity systems that evoke emotion and build long-term trust. From custom logos to comprehensive brand books, we ensure your agency looks premium.',
    image: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Memorable Custom Logo Designs',
      'Curated Typography & Color Palette Selection',
      'Brand Identity Guidelines (Brand Book)',
      'Digital & Print Stationeries Design'
    ],
    process: [
      'Brand Discovery & Competitive Analysis',
      'Moodboarding & Concept Presentation',
      'Logo Iteration & Refinement',
      'Brand Asset Packaging & Exporting'
    ],
    pricing: [
      { name: 'Essential Identity', price: '₹35k', features: ['Primary Logo + Palette', 'Typography System', 'Letterhead & Card Design', 'Basic Guidelines'] },
      { name: 'Total Brand Universe', price: '₹95k', features: ['Full Identity System', 'Comprehensive Brand Book', 'Social Media Templates', 'Packaging Design'] }
    ]
  },
  'seo-marketing': {
    title: 'SEO & Marketing',
    subtitle: 'Precision search strategies that make you impossible to ignore.',
    desc: 'Getting traffic is easy; getting high-intent, converting traffic is the challenge. We run technical SEO campaigns, content strategies, and link building programs that position your brand at the absolute top of search results. Dominate your market share and capture leads organicially.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    features: [
      'In-Depth Technical SEO Auditing',
      'Keyword Research targeting High-Intent Searches',
      'High-Quality Content Marketing Strategies',
      'Authoritative White-Hat Link Building'
    ],
    process: [
      'Technical SEO Audit & Setup',
      'Keyword Mapping & Content Calendar Outline',
      'Content Production & Optimization',
      'Monthly Ranking & Traffic Audit Reports'
    ],
    pricing: [
      { name: 'Growth Kickstart', price: '₹29k/mo', features: ['Keyword Mapping', 'On-Page Optimization', '4 SEO-optimized Articles/mo', 'Monthly Performance Report'] },
      { name: 'Market Domination', price: '₹75k/mo', features: ['Advanced Competitor Audits', 'Full Technical Cleanups', '8 Premium Articles/mo', 'Dedicated Account Lead'] }
    ]
  },
  'paid-ads-meta': {
    title: 'Paid Ads & Meta',
    subtitle: 'Data-driven paid spend designed to return maximum ROI.',
    desc: 'Stop wasting money on campaigns that don\'t convert. We construct strategic funnel-based ads on Meta (Facebook, Instagram), Google, and LinkedIn. We combine highly engaging ad creatives with hyper-targeted audience testing to scale your acquisition profitabilty.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    features: [
      'High-Converting Ad Copywriting',
      'Hyper-Targeted Lookalike & Custom Audiences',
      'Rigorous A/B Creative & Headline Testing',
      'Remarketing Funnels & Pixel Configuration'
    ],
    process: [
      'Funnel Architecture & Budget Allocation',
      'Ad Creative Design & Copywriting',
      'Campaign Launch & Initial Testing Phase',
      'Daily Optimization & Profit Scaling'
    ],
    pricing: [
      { name: 'Starter Campaign', price: '₹40k/mo', features: ['Campaign Setup', 'Weekly Creative Edits', 'Ad Spend Optimization', 'Monthly Reports'] },
      { name: 'Scale Tier', price: '₹90k/mo', features: ['Multi-Channel Funnel Setup', 'Unlimited Ad Creative Assets', 'Daily Scaling & Budgets', 'Weekly Direct Synced Calls'] }
    ]
  },
  'video-editing': {
    title: 'Video Editing',
    subtitle: 'Frame-perfect storytelling that moves audiences and triggers actions.',
    desc: 'Video editing is the art of manipulating time and emotion. We turn raw footage into high-retention stories, cinematic promotional films, or engaging short-form TikToks and Reels. Our editing hooks viewers within the first 3 seconds and holds them until the final frame.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80',
    features: [
      'High-Retention Cinematic Cuts',
      'Dynamic Sound Design & Sound Effects',
      'Custom Motion Graphics & Text Tracking',
      'Social Media Specific Hooks & Subtitles'
    ],
    process: [
      'Footage Ingestion & Script Analysis',
      'First Rough Cut Review Session',
      'Sound Design, Color Grading & VFX Overlay',
      'Final Rendering & Asset Delivery'
    ],
    pricing: [
      { name: 'Short-Form Bundle', price: '₹25k', features: ['10 Reels/TikToks/Shorts', 'Hook Development', 'Subtitles & Sound Effects', '2 Rounds of Revision'] },
      { name: 'Cinematic Promos', price: '₹60k', features: ['1 Premium Brand Video (2m)', 'Color Grading & Soundscapes', 'Motion Graphics Overlay', '3 Rounds of Revision'] }
    ]
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = serviceData[slug]

  if (!data) {
    notFound()
  }

  return (
    <div style={{ position: 'relative', minHeight: '100vh', color: '#f3f4f6' }}>
      <VideoBackground src="/Brutalist_IT_company_hero_video_202607032332_gwr_video_mvp.mp4" />
      
      <Header />

      <section style={{ padding: '80px 28px', background: 'rgba(8, 7, 13, 0.45)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          
          {/* Navigation link / breadcrumb */}
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

          {/* Hero Banner Image */}
          <div style={{ width: '100%', height: 'clamp(250px, 40vw, 450px)', position: 'relative', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', marginBottom: '56px', overflow: 'hidden' }}>
            <Image src={data.image} alt={data.title} fill style={{ objectFit: 'cover' }} priority />
          </div>

          {/* Grid Layout for Detailed Content */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px' }}>
            
            {/* Left: Description & Features */}
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

            {/* Right: The Process */}
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

          {/* Pricing Section */}
          <div style={{ marginTop: '72px' }}>
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
