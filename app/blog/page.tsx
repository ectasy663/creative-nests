import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/wexlogic/Header'
import { Footer } from '@/components/wexlogic/Footer'
import { CTABanner } from '@/components/wexlogic/CTABanner'
import { getBlogPosts } from '@/lib/db'

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
    <div style={{ position: 'relative', minHeight: '100vh', color: '#f3f4f6', backgroundColor: '#000' }}>
      
      <Header />

      {/* Hero Section */}
      <section style={{ background: 'rgba(8, 7, 13, 0.45)', padding: '80px 28px 48px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ background: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.3)', display: 'inline-block', padding: '6px 16px', borderRadius: '99px', marginBottom: '16px' }}>
            <span style={{ fontSize: '9px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700, color: '#a855f7' }}>
              Insights & Articles
            </span>
          </div>
          <h1 className="cn-bebas" style={{ fontSize: 'clamp(48px, 8vw, 84px)', lineHeight: 0.9, marginBottom: '16px', color: '#fff' }}>
            <span style={{ background: 'linear-gradient(135deg, #a855f7, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>WexLogic Blog</span>
          </h1>
          <p className="cn-syne" style={{ fontSize: 'clamp(14px, 2.5vw, 18px)', color: '#9ca3af', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.6 }}>
            Our team shares guides, insights, and case histories about CGI ads, engineering SaaS platforms, scaling marketing funnels, and enterprise ERP strategy.
          </p>
        </div>
      </section>

      {/* Grid listing */}
      <section style={{ padding: '64px 28px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {posts.map((post) => (
            <article 
              key={post.slug}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '480px',
                overflow: 'hidden'
              }}
            >
              {/* Image Container */}
              <div style={{ position: 'relative', width: '100%', height: '200px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <Image 
                  src={post.coverImage} 
                  alt={post.title} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(8, 7, 13, 0.8)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '4px 12px', borderRadius: '99px', backdropFilter: 'blur(4px)' }}>
                  <span style={{ fontSize: '9px', fontWeight: 700, color: '#06b6d4', textTransform: 'uppercase', letterSpacing: '1px' }}>{post.category}</span>
                </div>
              </div>

              {/* Content Panel */}
              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', gap: '12px', fontSize: '11px', color: '#9ca3af', marginBottom: '12px' }}>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="cn-syne" style={{ fontSize: '20px', fontWeight: 800, color: '#fff', lineHeight: 1.3, marginBottom: '12px', flexShrink: 0 }}>
                  <Link href={`/blog/${post.slug}`} style={{ color: '#fff', textDecoration: 'none', transition: 'color 0.2s' }} className="hover:text-purple-400">
                    {post.title}
                  </Link>
                </h2>

                <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#9ca3af', marginBottom: '24px', flexGrow: 1 }}>
                  {post.excerpt}
                </p>

                {/* Author row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '16px', marginTop: 'auto' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ position: 'relative', width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <Image src={post.author.avatar} alt={post.author.name} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 700, color: '#fff' }}>{post.author.name}</div>
                      <div style={{ fontSize: '9px', color: '#6b7280' }}>{post.author.role}</div>
                    </div>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="glass-btn-secondary" style={{ padding: '6px 16px', fontSize: '9px', letterSpacing: '1px' }}>
                    Read →
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
