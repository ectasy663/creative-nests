'use client'

import { useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { WorkProject } from '@/lib/db'
import { useUIStore } from '@/lib/store'

// ── Project Modal Detail View ──────────────────────────────────────────────────
function ProjectModal({ project, onClose }: { project: WorkProject; onClose: () => void }) {
  const activeImage = useUIStore(state => state.activeImage)
  const setActiveImage = useUIStore(state => state.setActiveImage)
  const activeVideo = useUIStore(state => state.activeVideo)
  const setActiveVideo = useUIStore(state => state.setActiveVideo)

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(4, 3, 7, 0.95)',
        backdropFilter: 'blur(16px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.25s ease',
        cursor: 'zoom-out'
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'rgba(20, 18, 25, 0.85)',
          border: '1px solid rgba(223, 183, 108, 0.2)',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
          width: '100%', maxWidth: '1000px', maxHeight: '90vh',
          borderRadius: '20px', overflowY: 'auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          cursor: 'default',
          animation: 'scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Left Side: Media Section */}
        <div style={{ padding: '32px', borderRight: '1px solid rgba(255, 255, 255, 0.06)', background: 'rgba(0, 0, 0, 0.2)' }}>
          {project.videos && project.videos.length > 0 ? (
            <div>
              <div style={{ fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#dfb76c', marginBottom: '12px', fontWeight: 600 }}>
                CGI & VFX Showcases (Select to play)
              </div>
              
              {/* Main Active Video Player */}
              <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden', background: '#000', marginBottom: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <video
                  key={activeVideo || project.videos[0]}
                  src={activeVideo || project.videos[0]}
                  controls
                  autoPlay={!!activeVideo}
                  style={{ width: '100%', display: 'block' }}
                />
              </div>

              {/* Video Selectors */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '8px' }}>
                {project.videos.map((vid, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveVideo(vid)}
                    style={{
                      padding: '10px 14px',
                      border: (activeVideo === vid || (!activeVideo && idx === 0)) ? '2px solid #dfb76c' : '1px solid rgba(255, 255, 255, 0.1)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      cursor: 'pointer',
                      borderRadius: '8px',
                      color: (activeVideo === vid || (!activeVideo && idx === 0)) ? '#dfb76c' : '#9ca3af',
                      fontSize: '11px',
                      fontWeight: 600,
                      textAlign: 'center',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      transition: 'all 0.2s'
                    }}
                  >
                    ▶ Showcase {idx + 1}
                  </button>
                ))}
              </div>
            </div>
          ) : project.gallery && project.gallery.length > 0 ? (
            <div>
              <div style={{ fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#dfb76c', marginBottom: '12px', fontWeight: 600 }}>
                Image Gallery (Click to enlarge)
              </div>
              
              {/* Main Preview */}
              <div style={{ position: 'relative', width: '100%', height: '320px', borderRadius: '12px', overflow: 'hidden', background: '#0f0e15', marginBottom: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <Image
                  src={activeImage || project.gallery[0]}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1000px) 100vw, 50vw"
                  style={{ objectFit: 'contain' }}
                />
              </div>

              {/* Thumbnails */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(70px, 1fr))', gap: '8px' }}>
                {project.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    style={{
                      position: 'relative', padding: 0, border: activeImage === img || (!activeImage && idx === 0) ? '2px solid #dfb76c' : '1px solid rgba(255, 255, 255, 0.1)',
                      background: 'none', cursor: 'pointer', borderRadius: '6px', overflow: 'hidden', aspectRatio: '1'
                    }}
                  >
                    <Image src={img} alt="thumbnail" fill sizes="100px" style={{ objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div style={{ position: 'relative', width: '100%', height: '360px', borderRadius: '12px', overflow: 'hidden', background: '#0a0a0f', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <Image src={project.image} alt={project.title} fill sizes="(max-width: 1000px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            </div>
          )}
        </div>

        {/* Right Side: Information Panel */}
        <div style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            {/* Header tags */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <span style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#dfb76c', fontWeight: 700 }}>
                {project.category}
              </span>
              <button
                onClick={onClose}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)', border: 'none', color: '#9ca3af',
                  cursor: 'pointer', padding: '6px 12px', borderRadius: '6px', fontSize: '11px',
                  fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', transition: 'all 0.2s'
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(223, 183, 108, 0.2)'; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.color = '#9ca3af' }}
              >
                Close ✕
              </button>
            </div>

            <h3 className="cn-syne" style={{ fontSize: '28px', fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: '12px' }}>
              {project.title}
            </h3>
            <p style={{ fontSize: '14px', color: '#9ca3af', lineHeight: 1.6, marginBottom: '24px' }}>
              {project.desc}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
              <div>
                <div style={{ fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#dfb76c', fontWeight: 600, marginBottom: '4px' }}>About the Project</div>
                <div style={{ fontSize: '13px', color: '#9ca3af', lineHeight: 1.5 }}>{project.about}</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#dfb76c', fontWeight: 600, marginBottom: '4px' }}>The Challenge</div>
                <div style={{ fontSize: '13px', color: '#9ca3af', lineHeight: 1.5 }}>{project.challenge}</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#dfb76c', fontWeight: 600, marginBottom: '4px' }}>Our Solution</div>
                <div style={{ fontSize: '13px', color: '#9ca3af', lineHeight: 1.5 }}>{project.solution}</div>
              </div>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#dfb76c', fontWeight: 600, marginBottom: '8px' }}>Key Deliverables</div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {project.results.map((res, i) => (
                <span key={i} style={{ fontSize: '11px', color: '#fff', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', padding: '6px 14px', borderRadius: '8px' }}>
                  ✓ {res}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Main Component ────────────────────────────────────────────────────────────
export function WorkSection({ projects, featuredOnly = false }: { projects: WorkProject[], featuredOnly?: boolean }) {
  const allProjects = projects
  const selectedCategory = useUIStore(state => state.workCategory)
  const setSelectedCategory = useUIStore(state => state.setWorkCategory)
  const activeProject = useUIStore(state => state.activeProject)
  const setActiveProject = useUIStore(state => state.setActiveProject)

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
        @keyframes scaleUp { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .work-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          background: linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
          backdrop-filter: blur(4px);
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .work-card:hover {
          transform: translateY(-4px);
          border-color: rgba(223, 183, 108, 0.25);
          box-shadow: 0 24px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(223,183,108,0.08);
        }
        .cat-btn { transition: all 0.25s ease; }
        .cat-btn:hover { background: rgba(223,183,108,0.12) !important; color: #fff !important; }
      `}</style>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}

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
            <div key={project.slug} className="work-card" onClick={() => setActiveProject(project)}>
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

                {/* Card Placeholder Cover Image */}
                <div style={{ position: 'relative', width: '100%', height: '200px', borderRadius: '10px', overflow: 'hidden', marginBottom: '16px', background: '#0a0a0f', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    className="hover-zoom"
                    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)' }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
                  />
                </div>

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
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveProject(project);
                    }}
                    style={{
                      fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase',
                      color: '#dfb76c', fontWeight: 700,
                      background: 'rgba(223, 183, 108, 0.08)',
                      border: '1px solid rgba(223, 183, 108, 0.2)',
                      padding: '6px 16px', borderRadius: '6px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      whiteSpace: 'nowrap'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(223, 183, 108, 0.15)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(223, 183, 108, 0.08)' }}
                  >
                    View Project →
                  </button>
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
