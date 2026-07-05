import { Header } from '@/components/creative-nests/Header'
import { Footer } from '@/components/creative-nests/Footer'
import { VideoBackground } from '@/components/creative-nests/VideoBackground'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getBlogPostBySlug } from '@/lib/db'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return { title: 'Post Not Found — WSCLogic' }
  return { title: `${post.title} — WSCLogic` }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Helper to render markdown paragraphs/headers simply
  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('### ')) {
        return (
          <h3 
            key={index} 
            className="cn-syne" 
            style={{ 
              fontSize: '22px', 
              fontWeight: 800, 
              color: '#fff', 
              marginTop: '32px', 
              marginBottom: '16px' 
            }}
          >
            {paragraph.replace('### ', '')}
          </h3>
        )
      }
      if (paragraph.startsWith('## ')) {
        return (
          <h2 
            key={index} 
            className="cn-syne" 
            style={{ 
              fontSize: '26px', 
              fontWeight: 800, 
              color: '#fff', 
              marginTop: '40px', 
              marginBottom: '20px' 
            }}
          >
            {paragraph.replace('## ', '')}
          </h2>
        )
      }
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').map(item => item.replace('- ', ''))
        return (
          <ul 
            key={index} 
            style={{ 
              paddingLeft: '20px', 
              marginBottom: '24px', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '8px', 
              color: '#9ca3af',
              fontSize: '15px',
              lineHeight: 1.7
            }}
          >
            {items.map((it, idx) => (
              <li key={idx} style={{ listStyleType: 'square' }}>{it}</li>
            ))}
          </ul>
        )
      }
      
      // Check for numbered lists
      if (/^\d+\.\s/.test(paragraph)) {
        const items = paragraph.split('\n').map(item => item.replace(/^\d+\.\s/, ''))
        return (
          <ol 
            key={index} 
            style={{ 
              paddingLeft: '20px', 
              marginBottom: '24px', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '8px', 
              color: '#9ca3af',
              fontSize: '15px',
              lineHeight: 1.7
            }}
          >
            {items.map((it, idx) => (
              <li key={idx}>{it}</li>
            ))}
          </ol>
        )
      }

      return (
        <p 
          key={index} 
          style={{ 
            fontSize: '15px', 
            lineHeight: 1.8, 
            color: '#9ca3af', 
            marginBottom: '24px' 
          }}
        >
          {paragraph}
        </p>
      )
    })
  }

  return (
    <div style={{ position: 'relative', minHeight: '100vh', color: '#f3f4f6' }}>
      <VideoBackground src="/Brutalist_IT_company_hero_video_202607032332_gwr_video_mvp.mp4" />
      
      <Header />

      <article style={{ padding: '80px 28px', background: 'rgba(8, 7, 13, 0.45)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          {/* Breadcrumb */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
            <Link href="/blog" className="glass-btn-secondary" style={{ padding: '6px 16px', fontSize: '10px' }}>
              ← ALL ARTICLES
            </Link>
            <div style={{ background: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.3)', padding: '6px 16px', borderRadius: '99px' }}>
              <span style={{ fontSize: '9px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700, color: '#a855f7' }}>
                {post.category}
              </span>
            </div>
          </div>

          {/* Title and stats */}
          <h1 className="cn-bebas" style={{ fontSize: 'clamp(36px, 6vw, 64px)', lineHeight: 1.05, marginBottom: '24px', color: '#fff' }}>
            {post.title}
          </h1>

          {/* Author Details Card */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255, 255, 255, 0.08)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', padding: '16px 0', marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ position: 'relative', width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <Image src={post.author.avatar} alt={post.author.name} fill style={{ objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff' }}>{post.author.name}</div>
                <div style={{ fontSize: '10px', color: '#9ca3af' }}>{post.author.role}</div>
              </div>
            </div>
            <div style={{ fontSize: '11px', color: '#9ca3af' }}>
              <span>Published on {post.date}</span>
              <span style={{ margin: '0 8px' }}>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Cover Image */}
          <div style={{ width: '100%', height: 'clamp(220px, 35vw, 420px)', position: 'relative', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', marginBottom: '48px', overflow: 'hidden' }}>
            <Image src={post.coverImage} alt={post.title} fill style={{ objectFit: 'cover' }} priority />
          </div>

          {/* Article Text Content */}
          <div style={{ fontSize: '16px', color: '#9ca3af' }}>
            {renderContent(post.content)}
          </div>

        </div>
      </article>

      <Footer />
    </div>
  )
}
