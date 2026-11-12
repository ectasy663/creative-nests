import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/wexlogic/Header'
import { Footer } from '@/components/wexlogic/Footer'
import { CTABanner } from '@/components/wexlogic/CTABanner'
import { getBlogPosts } from '@/lib/db'
import { ArrowRight, Sparkles } from 'lucide-react'

export const metadata = {
  title: 'Insights & Technical Blog — WexLogic',
  description: 'Read the latest guides and engineering insights on CGI animation, Next.js setups, paid advertising, and bespoke database architectures from WexLogic.',
  alternates: {
    canonical: 'https://wexlogic.com/blog'
  }
}

export default function BlogListingPage() {
  const posts = getBlogPosts()

  return (
    <div style={{ position: 'relative', minHeight: '100vh', color: '#1E293B', backgroundColor: '#FFFDF5' }}>
      <Header />

      {/* Hero Section with Vibrant Flanked Neobrutalist Stickers Layout */}
      <section
        style={{
          backgroundColor: '#FFFFFF',
          padding: '20px 16px 32px',
          borderBottom: '2px solid #1E293B',
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {/* Decorative Memphis Background Accents */}
        <div
          style={{
            position: 'absolute',
            top: '-20px',
            left: '2%',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: '#FEF08A',
            border: '2px solid #1E293B',
            boxShadow: '3px 3px 0px #1E293B',
            opacity: 0.6,
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-20px',
            right: '2%',
            width: '74px',
            height: '74px',
            borderRadius: '16px',
            backgroundColor: '#FBCFE8',
            border: '2px solid #1E293B',
            boxShadow: '3px 3px 0px #1E293B',
            transform: 'rotate(12deg)',
            opacity: 0.6,
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />

        <div
          style={{
            maxWidth: '1560px',
            width: '100%',
            margin: '0 auto',
            padding: '0 6px',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            position: 'relative',
            zIndex: 2,
            flexWrap: 'wrap',
          }}
        >
          {/* Left Flank Card: Knowledge Base Highlights */}
          <div
            className="hidden xl:block"
            style={{
              flex: '0 0 260px',
              backgroundColor: '#FEFCE8',
              border: '2px solid #1E293B',
              borderRadius: '20px',
              padding: '18px 16px',
              boxShadow: '5px 5px 0px #1E293B',
              transform: 'rotate(-2deg)',
            }}
          >
            <div style={{ marginBottom: '10px' }}>
              <span
                style={{
                  fontSize: '10px',
                  fontFamily: "'Outfit'",
                  fontWeight: 900,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  color: '#854D0E',
                  backgroundColor: '#FDE047',
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  border: '1.5px solid #1E293B',
                }}
              >
                KNOWLEDGE BASE
              </span>
            </div>
            <div style={{ fontFamily: "'Outfit'", fontSize: '18px', fontWeight: 900, color: '#1E293B', lineHeight: 1.2, marginBottom: '8px' }}>
              Production Blueprints
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {['CGI & VFX Breakdowns', 'Next.js 16 Web Apps', 'Paid Acquisition ROI'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: '#1E293B' }}>
                  <span style={{ color: '#8B5CF6', fontWeight: 900 }}>✦</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Center: Main Headline, Badge, Subtitle & Topic Pills */}
          <div style={{ flex: '1 1 500px', textAlign: 'center', minWidth: '280px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <span className="badge-pill badge-violet">
                <Sparkles size={13} className="text-white" />
                INSIGHTS & GUIDES
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Outfit', system-ui, sans-serif",
                fontSize: 'clamp(38px, 5.5vw, 68px)',
                fontWeight: 900,
                lineHeight: 1.05,
                marginBottom: '14px',
                color: '#1E293B',
                letterSpacing: '-1.5px',
              }}
            >
              WexLogic{' '}
              <span
                style={{
                  backgroundColor: '#FBBF24',
                  padding: '2px 14px',
                  borderRadius: '16px',
                  border: '3px solid #1E293B',
                  boxShadow: '4px 4px 0px #1E293B',
                  display: 'inline-block',
                  transform: 'rotate(-1deg)',
                }}
              >
                Blog
              </span>
            </h1>

            <p
              style={{
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                fontSize: 'clamp(15px, 1.8vw, 17px)',
                color: '#1E293B',
                maxWidth: '600px',
                margin: '0 auto 18px',
                lineHeight: 1.6,
                fontWeight: 600,
              }}
            >
              Our team shares actionable guides, production blueprints, and growth case histories
              across CGI ads, Next.js architecture, and high-conversion funnels.
            </p>

            {/* Topic Badges row */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
              {[
                { tag: 'CGI & VFX', bg: '#F5F3FF', border: '#8B5CF6' },
                { tag: 'Next.js 16', bg: '#FFF1F2', border: '#F472B6' },
                { tag: 'Meta Ads', bg: '#FEFCE8', border: '#FBBF24' },
                { tag: 'Growth SEO', bg: '#ECFDF5', border: '#34D399' },
                { tag: 'Brand Systems', bg: '#F5F3FF', border: '#8B5CF6' },
              ].map((topic, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    fontFamily: "'Outfit'",
                    backgroundColor: topic.bg,
                    border: `1.5px solid ${topic.border}`,
                    color: '#1E293B',
                    padding: '3px 10px',
                    borderRadius: '9999px',
                    boxShadow: '2px 2px 0px #1E293B',
                  }}
                >
                  #{topic.tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Flank Card: Engineering & Standards */}
          <div
            className="hidden xl:block"
            style={{
              flex: '0 0 260px',
              backgroundColor: '#F5F3FF',
              border: '2px solid #1E293B',
              borderRadius: '20px',
              padding: '18px 16px',
              boxShadow: '5px 5px 0px #1E293B',
              transform: 'rotate(2deg)',
            }}
          >
            <div style={{ marginBottom: '10px' }}>
              <span
                style={{
                  fontSize: '10px',
                  fontFamily: "'Outfit'",
                  fontWeight: 900,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  color: '#6D28D9',
                  backgroundColor: '#DDD6FE',
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  border: '1.5px solid #1E293B',
                }}
              >
                WEEKLY DROPS
              </span>
            </div>
            <div style={{ fontFamily: "'Outfit'", fontSize: '18px', fontWeight: 900, color: '#1E293B', lineHeight: 1.2, marginBottom: '8px' }}>
              Zero Bloat Guides
            </div>
            <p style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5, margin: '0 0 10px', fontWeight: 600 }}>
              Practical strategies straight from live client deployments & VFX pipelines.
            </p>
            <div style={{ fontSize: '11px', fontWeight: 800, color: '#8B5CF6', fontFamily: "'Outfit'" }}>
              UPDATED WEEKLY →
            </div>
          </div>
        </div>
      </section>

      {/* Grid listing */}
      <section
        style={{
          padding: '44px 16px 64px',
          maxWidth: '1560px',
          width: '100%',
          margin: '0 auto',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          {posts.map((post) => (
            <article
              key={post.slug}
              className="sticker-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '480px',
                backgroundColor: '#FFFFFF',
                border: '2px solid #1E293B',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '6px 6px 0px #1E293B',
              }}
            >
              {/* Image Container with 2px border */}
              <div style={{ position: 'relative', width: '100%', height: '210px', borderBottom: '2px solid #1E293B' }}>
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
                  <span className="badge-pill badge-yellow" style={{ fontSize: '10px', padding: '4px 10px' }}>
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content Panel */}
              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', gap: '8px', fontSize: '12px', color: '#64748B', marginBottom: '10px', fontWeight: 600 }}>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h2
                  style={{
                    fontFamily: "'Outfit', system-ui, sans-serif",
                    fontSize: '22px',
                    fontWeight: 800,
                    color: '#1E293B',
                    lineHeight: 1.3,
                    marginBottom: '10px',
                    letterSpacing: '-0.5px',
                  }}
                >
                  <Link href={`/blog/${post.slug}`} style={{ color: '#1E293B', textDecoration: 'none' }} className="hover:text-purple-600">
                    {post.title}
                  </Link>
                </h2>

                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#64748B', marginBottom: '24px', flexGrow: 1, fontWeight: 500 }}>
                  {post.excerpt}
                </p>

                {/* Author row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTop: '2px solid #F1F5F9',
                    paddingTop: '16px',
                    marginTop: 'auto',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        position: 'relative',
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '1.5px solid #1E293B',
                      }}
                    >
                      <Image src={post.author.avatar} alt={post.author.name} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: 800, color: '#1E293B', fontFamily: "'Outfit'" }}>{post.author.name}</div>
                      <div style={{ fontSize: '10px', color: '#64748B', fontWeight: 600 }}>{post.author.role}</div>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="candy-btn-secondary"
                    style={{ padding: '6px 14px', fontSize: '11px', boxShadow: '2px 2px 0px #1E293B' }}
                  >
                    <span>Read</span>
                    <ArrowRight size={12} strokeWidth={3} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABanner
        primaryLabel="Book Free Call"
        primaryHref="/contact"
        secondaryLabel="View Work"
        secondaryHref="/work"
      />

      <Footer />
    </div>
  )
}
