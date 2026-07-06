'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { WorkProject } from '@/lib/db'

// ── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.92)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '24px',
        backdropFilter: 'blur(8px)',
        cursor: 'zoom-out',
        animation: 'fadeIn 0.2s ease'
      }}
    >
      <img
        src={src}
        alt={alt}
        loading="eager"
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: '90vw', maxHeight: '90vh',
          objectFit: 'contain',
          borderRadius: '12px',
          boxShadow: '0 32px 80px rgba(0,0,0,0.8)',
          cursor: 'default'
        }}
      />
      <button
        onClick={onClose}
        style={{
          position: 'fixed', top: '20px', right: '24px',
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
          color: '#fff', fontSize: '20px',
          width: '44px', height: '44px',
          borderRadius: '50%', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backdropFilter: 'blur(8px)'
        }}
      >✕</button>
    </div>
  )
}

// ── Gallery Grid ──────────────────────────────────────────────────────────────
function GalleryGrid({ images, title }: { images: string[]; title: string }) {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <>
      {lightbox && (
        <Lightbox src={lightbox} alt={title} onClose={() => setLightbox(null)} />
      )}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        gap: '6px',
        marginBottom: '20px'
      }}>
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setLightbox(img)}
            style={{
              padding: 0, border: 'none', background: 'none',
              cursor: 'zoom-in', borderRadius: '6px', overflow: 'hidden',
              aspectRatio: '1',
              display: 'block'
            }}
          >
            <img
              src={img}
              alt={`${title} ${idx + 1}`}
              loading="lazy"
              decoding="async"
              style={{
                width: '100%', height: '100%', objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.3s ease, filter 0.3s ease',
                filter: 'brightness(0.9)'
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.08)'
                ;(e.currentTarget as HTMLImageElement).style.filter = 'brightness(1.1)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'
                ;(e.currentTarget as HTMLImageElement).style.filter = 'brightness(0.9)'
              }}
            />
          </button>
        ))}
      </div>
    </>
  )
}

// ── Video Thumbnail ───────────────────────────────────────────────────────────
function VideoCard({ src, idx }: { src: string; idx: number }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden', background: '#000', marginBottom: '12px' }}>
      {!playing ? (
        <button
          onClick={() => setPlaying(true)}
          style={{
            position: 'relative', width: '100%', padding: 0,
            border: 'none', background: 'none', cursor: 'pointer',
            display: 'block'
          }}
        >
          {/* Poster frame via meta src */}
          <video
            src={src}
            preload="metadata"
            muted
            style={{ width: '100%', display: 'block', borderRadius: '10px' }}
          />
          {/* Play button overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(0,0,0,0.35)',
            transition: 'background 0.2s'
          }}>
            <div style={{
              width: '52px', height: '52px',
              background: 'rgba(223,183,108,0.9)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 24px rgba(223,183,108,0.4)'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#000"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </div>
          </div>
          <div style={{
            position: 'absolute', bottom: '10px', left: '12px',
            fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.7)', fontWeight: 600
          }}>
            Video {idx + 1}
          </div>
        </button>
      ) : (
        <video
          src={src}
          controls
          autoPlay
          muted
          playsInline
          preload="auto"
          style={{ width: '100%', display: 'block', borderRadius: '10px' }}
        />
      )}
    </div>
  )
}

// ── Main Component ────────────────────────────────────────────────────────────
export function WorkSection({ projects, featuredOnly = false }: { projects: WorkProject[], featuredOnly?: boolean }) {
  const allProjects = projects
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = ['All', ...Array.from(new Set(allProjects.map(p => p.category)))]

  let displayedProjects = allProjects
  if (selectedCategory !== 'All') {
    displayedProjects = displayedProjects.filter(p => p.category === selectedCategory)
  }
  if (featuredOnly) {
    displayedProjects = displayedProjects.slice(0, 3)
  }

  return (
    <>
      <style>{`
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
        .work-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          background: linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
          backdrop-filter: blur(4px);
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .work-card:hover {
          transform: translateY(-4px);
          border-color: rgba(223,183,108,0.25);
          box-shadow: 0 24px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(223,183,108,0.08);
        }
        .cat-btn { transition: all 0.25s ease; }
        .cat-btn:hover { background: rgba(223,183,108,0.12) !important; color: #fff !important; }
      `}</style>

      <section id="portfolio" style={{
        background: 'radial-gradient(circle at 50% 0%, rgba(223,183,108,0.05) 0%, #040307 60%)',
        padding: '80px 28px',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ background: 'rgba(223,183,108,0.08)', border: '1px solid rgba(223,183,108,0.25)', display: 'inline-block', padding: '6px 18px', borderRadius: '99px', marginBottom: '14px' }}>
              <span style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700, color: '#dfb76c' }}>
                {featuredOnly ? 'Featured Portfolio' : 'Complete Showcase'}
              </span>
            </div>
            <h2 className="cn-bebas" style={{ fontSize: 'clamp(40px, 6vw, 64px)', letterSpacing: '1px', color: '#fff', lineHeight: 1, paddingTop: '4px' }}>
              Our <span style={{ background: 'linear-gradient(135deg, #dfb76c, #b89047)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Work</span>
            </h2>
          </div>
          <div style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#6b7280', fontWeight: 600 }}>
            {displayedProjects.length} Projects
          </div>
        </div>

        {/* Category Filter */}
        {!featuredOnly && (
          <div style={{ display: 'flex', gap: '10px', marginBottom: '40px', overflowX: 'auto', paddingBottom: '6px', scrollbarWidth: 'none' }}>
            {categories.map(category => (
              <button
                key={category}
                className="cat-btn"
                onClick={() => setSelectedCategory(category)}
                style={{
                  background: selectedCategory === category ? 'rgba(223,183,108,0.15)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${selectedCategory === category ? 'rgba(223,183,108,0.5)' : 'rgba(255,255,255,0.08)'}`,
                  color: selectedCategory === category ? '#dfb76c' : '#9ca3af',
                  padding: '8px 22px', borderRadius: '99px',
                  fontSize: '11px', fontWeight: 600, letterSpacing: '1px',
                  cursor: 'pointer', whiteSpace: 'nowrap'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '28px'
        }}>
          {displayedProjects.length > 0 ? displayedProjects.map((project) => (
            <div key={project.slug} className="work-card">
              {/* Glow */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: '160px', height: '160px', background: 'radial-gradient(circle, rgba(223,183,108,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

              <div style={{ padding: '24px 22px' }}>
                {/* Category badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{
                    fontSize: '9px', letterSpacing: '2.5px', textTransform: 'uppercase',
                    color: '#dfb76c', fontWeight: 700,
                    background: 'rgba(223,183,108,0.1)',
                    border: '1px solid rgba(223,183,108,0.2)',
                    padding: '3px 12px', borderRadius: '99px'
                  }}>
                    {project.category}
                  </span>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} style={{ fontSize: '8px', letterSpacing: '1px', textTransform: 'uppercase', color: '#6b7280', fontWeight: 600 }}>{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Media: Videos */}
                {project.videos && project.videos.length > 0 ? (
                  <div style={{ marginBottom: '16px' }}>
                    {project.videos.map((vid, idx) => (
                      <VideoCard key={idx} src={vid} idx={idx} />
                    ))}
                  </div>
                ) : project.gallery && project.gallery.length > 0 ? (
                  /* Lazy gallery grid */
                  <GalleryGrid images={project.gallery} title={project.title} />
                ) : (
                  <div style={{ width: '100%', height: '200px', borderRadius: '10px', overflow: 'hidden', marginBottom: '16px', background: '#0a0a0f' }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                )}

                {/* Text */}
                <h3 className="cn-syne" style={{ fontSize: '20px', fontWeight: 800, color: '#fff', lineHeight: 1.3, marginBottom: '6px' }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.6, marginBottom: '20px' }}>
                  {project.desc}
                </p>

                {/* Footer */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {project.tags.map(tag => (
                      <span key={tag} style={{
                        fontSize: '8px', letterSpacing: '1px', textTransform: 'uppercase',
                        color: '#4b5563', fontWeight: 600,
                        background: 'rgba(255,255,255,0.04)',
                        padding: '2px 8px', borderRadius: '4px'
                      }}>#{tag}</span>
                    ))}
                  </div>
                  <Link
                    href={`/work/${project.slug}`}
                    style={{
                      fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase',
                      color: '#dfb76c', fontWeight: 700,
                      background: 'rgba(223,183,108,0.08)',
                      border: '1px solid rgba(223,183,108,0.2)',
                      padding: '6px 16px', borderRadius: '6px',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    View →
                  </Link>
                </div>
              </div>
            </div>
          )) : (
            <div style={{ padding: '60px', textAlign: 'center', color: '#6b7280', gridColumn: '1 / -1', fontSize: '14px' }}>
              No projects in this category.
            </div>
          )}
        </div>

        {featuredOnly && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '56px' }}>
            <Link href="/work" className="gradient-btn-primary" style={{ padding: '14px 40px', fontSize: '11px', letterSpacing: '2.5px' }}>
              View All Projects →
            </Link>
          </div>
        )}
      </section>
    </>
  )
}
