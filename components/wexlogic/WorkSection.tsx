'use client'

import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import Image from 'next/image'
import { WorkProject } from '@/lib/db'
import { useUIStore } from '@/lib/store'
import { Sparkles, ArrowRight, Play, ExternalLink, X } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'

// ── Project Modal Detail View ──────────────────────────────────────────────────
function ProjectModal({ project, onClose }: { project: WorkProject; onClose: () => void }) {
  const [mounted, setMounted] = useState(false)
  const activeImage = useUIStore(state => state.activeImage)
  const setActiveImage = useUIStore(state => state.setActiveImage)
  const activeVideo = useUIStore(state => state.activeVideo)
  const setActiveVideo = useUIStore(state => state.setActiveVideo)

  useEffect(() => {
    setMounted(true)
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  if (!mounted) return null

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: 'rgba(30, 41, 59, 0.7)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        cursor: 'zoom-out',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          backgroundColor: '#FFFDF5',
          border: '3px solid #1E293B',
          boxShadow: '12px 12px 0px 0px #1E293B',
          width: '100%',
          maxWidth: '1000px',
          maxHeight: '90vh',
          borderRadius: '24px',
          overflowY: 'auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          cursor: 'default',
        }}
      >
        {/* Left Side: Media Section */}
        <div style={{ padding: 'clamp(16px, 4vw, 32px)', borderRight: '2px solid #1E293B', backgroundColor: '#F8FAFC' }}>
          {project.videos && project.videos.length > 0 ? (
            <div>
              <div
                style={{
                  fontFamily: "'Outfit', system-ui, sans-serif",
                  fontSize: '12px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  color: '#8B5CF6',
                  marginBottom: '12px',
                  fontWeight: 800,
                }}
              >
                CGI & VFX Showcases (Select to play)
              </div>

              {/* Main Active Video Player */}
              <div
                style={{
                  width: '100%',
                  height: '320px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  backgroundColor: '#000000',
                  marginBottom: '16px',
                  border: '2px solid #1E293B',
                  boxShadow: '4px 4px 0px #1E293B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <video
                  key={activeVideo || project.videos[0]}
                  src={activeVideo || project.videos[0]}
                  controls
                  autoPlay={!!activeVideo}
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    maxHeight: '320px',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </div>

              {/* Video Selectors */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '8px' }}>
                {project.videos.map((vid, idx) => {
                  const isSelected = activeVideo === vid || (!activeVideo && idx === 0)
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveVideo(vid)}
                      style={{
                        padding: '10px 12px',
                        border: '2px solid #1E293B',
                        backgroundColor: isSelected ? '#FBBF24' : '#FFFFFF',
                        boxShadow: isSelected ? '3px 3px 0px #1E293B' : '2px 2px 0px #CBD5E1',
                        cursor: 'pointer',
                        borderRadius: '12px',
                        color: '#1E293B',
                        fontSize: '12px',
                        fontWeight: 800,
                        fontFamily: "'Outfit'",
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        transition: 'all 0.2s',
                      }}
                    >
                      ▶ Clip {idx + 1}
                    </button>
                  )
                })}
              </div>
            </div>
          ) : project.gallery && project.gallery.length > 0 ? (
            <div>
              <div
                style={{
                  fontFamily: "'Outfit', system-ui, sans-serif",
                  fontSize: '12px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  color: '#8B5CF6',
                  marginBottom: '12px',
                  fontWeight: 800,
                }}
              >
                Image Gallery (Click to preview)
              </div>

              {/* Main Preview */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '320px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  marginBottom: '16px',
                  border: '2px solid #1E293B',
                  boxShadow: '4px 4px 0px #1E293B',
                }}
              >
                <img
                  src={encodeURI(activeImage || project.gallery[0])}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement
                    target.onerror = null
                    target.src = '/cgi-vfx-thumbnail.jpeg'
                  }}
                />
              </div>

              {/* Thumbnails */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(64px, 1fr))', gap: '8px' }}>
                {project.gallery.map((img, idx) => {
                  const isSelected = activeImage === img || (!activeImage && idx === 0)
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      style={{
                        position: 'relative',
                        padding: 0,
                        border: '2px solid #1E293B',
                        backgroundColor: '#FFFFFF',
                        boxShadow: isSelected ? '3px 3px 0px #8B5CF6' : 'none',
                        cursor: 'pointer',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        aspectRatio: '1',
                      }}
                    >
                      <img
                        src={encodeURI(img)}
                        alt="thumbnail"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement
                          target.onerror = null
                          target.src = '/cgi-vfx-thumbnail.jpeg'
                        }}
                      />
                    </button>
                  )
                })}
              </div>
            </div>
          ) : (
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '360px',
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                border: '2px solid #1E293B',
                boxShadow: '4px 4px 0px #1E293B',
              }}
            >
              <img
                src={encodeURI(project.image)}
                alt={project.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement
                  target.onerror = null
                  target.src = '/cgi-vfx-thumbnail.jpeg'
                }}
              />
            </div>
          )}
        </div>

        {/* Right Side: Information Panel */}
        <div style={{ padding: 'clamp(16px, 4vw, 36px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#FFFDF5' }}>
          <div>
            {/* Header tags */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <span className="badge-pill badge-yellow">
                {project.category}
              </span>
              <button
                onClick={onClose}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '2px solid #1E293B',
                  boxShadow: '2px 2px 0px #1E293B',
                  color: '#1E293B',
                  cursor: 'pointer',
                  padding: '6px 12px',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  fontWeight: 800,
                  fontFamily: "'Outfit'",
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <span>Close</span>
                <X size={14} strokeWidth={3} />
              </button>
            </div>

            <h3
              style={{
                fontFamily: "'Outfit', system-ui, sans-serif",
                fontSize: '28px',
                fontWeight: 900,
                color: '#1E293B',
                lineHeight: 1.2,
                marginBottom: '12px',
              }}
            >
              {project.title}
            </h3>
            <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.6, marginBottom: '24px', fontWeight: 500 }}>
              {project.desc}
            </p>

            {project.liveUrl && (
              <div style={{ marginBottom: '24px' }}>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="candy-btn-secondary"
                  style={{ padding: '8px 18px', fontSize: '13px' }}
                >
                  <span>Visit Live Site</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
              <div>
                <div style={{ fontFamily: "'Outfit'", fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase', color: '#8B5CF6', fontWeight: 800, marginBottom: '4px' }}>
                  About the Project
                </div>
                <div style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6, fontWeight: 500 }}>{project.about}</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Outfit'", fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase', color: '#F472B6', fontWeight: 800, marginBottom: '4px' }}>
                  The Challenge
                </div>
                <div style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6, fontWeight: 500 }}>{project.challenge}</div>
              </div>
              <div>
                <div style={{ fontFamily: "'Outfit'", fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase', color: '#34D399', fontWeight: 800, marginBottom: '4px' }}>
                  Our Solution
                </div>
                <div style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6, fontWeight: 500 }}>{project.solution}</div>
              </div>
            </div>
          </div>

          <div>
            <div style={{ fontFamily: "'Outfit'", fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase', color: '#1E293B', fontWeight: 800, marginBottom: '10px' }}>
              Key Deliverables
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {project.results.map((res, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#1E293B',
                    backgroundColor: '#FFFFFF',
                    border: '1.5px solid #1E293B',
                    boxShadow: '2px 2px 0px #CBD5E1',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                  }}
                >
                  ✓ {res}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

// ── Main Component ────────────────────────────────────────────────────────────
export function WorkSection({
  projects,
  featuredOnly = false,
}: {
  projects: WorkProject[]
  featuredOnly?: boolean
}) {
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
    displayedProjects = displayedProjects.slice(0, 4)
  }

  return (
    <>
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}

      <section
        id="portfolio"
        style={{
          backgroundColor: '#FFFDF5',
          padding: '36px 16px 56px',
          borderBottom: '2px solid #1E293B',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ width: '100%', maxWidth: '1560px', margin: '0 auto', padding: '0 6px', boxSizing: 'border-box' }}>
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: '48px',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span className="badge-pill badge-yellow">
                  <Sparkles size={13} className="text-[#1E293B]" />
                  {featuredOnly ? 'Featured Portfolio' : 'Complete Showcase'}
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "'Outfit', system-ui, sans-serif",
                  fontSize: 'clamp(36px, 5.5vw, 60px)',
                  fontWeight: 900,
                  color: '#1E293B',
                  letterSpacing: '-1px',
                  lineHeight: 1.1,
                }}
              >
                Selected{' '}
                <span
                  style={{
                    backgroundColor: '#F472B6',
                    color: '#FFFFFF',
                    padding: '2px 14px',
                    borderRadius: '14px',
                    border: '2px solid #1E293B',
                    boxShadow: '3px 3px 0px #1E293B',
                    display: 'inline-block',
                    transform: 'rotate(1deg)',
                  }}
                >
                  Work
                </span>
              </h2>
            </div>
            <div
              style={{
                fontFamily: "'Outfit', system-ui, sans-serif",
                fontSize: '13px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: '#64748B',
                fontWeight: 700,
              }}
            >
              {displayedProjects.length} Projects Shown
            </div>
          </div>

          {/* Category Filter */}
          {!featuredOnly && (
            <div
              style={{
                display: 'flex',
                gap: '12px',
                marginBottom: '48px',
                overflowX: 'auto',
                paddingBottom: '8px',
                scrollbarWidth: 'none',
              }}
            >
              {categories.map(category => {
                const isSelected = selectedCategory === category
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    style={{
                      backgroundColor: isSelected ? '#FBBF24' : '#FFFFFF',
                      border: '2px solid #1E293B',
                      boxShadow: isSelected ? '4px 4px 0px #1E293B' : '2px 2px 0px #CBD5E1',
                      color: '#1E293B',
                      padding: '8px 22px',
                      borderRadius: '9999px',
                      fontFamily: "'Outfit', system-ui, sans-serif",
                      fontSize: '13px',
                      fontWeight: 800,
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          )}

          {/* Projects Grid: 4 in one row on laptop / desktop */}
          <div className="work-projects-grid">
            {displayedProjects.length > 0 ? (
              displayedProjects.map((project, idx) => (
                <ScrollReveal key={project.slug} delay={idx * 90} style={{ height: '100%' }}>
                  <div
                    className="sticker-card group"
                    onClick={() => setActiveProject(project)}
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '2px solid #1E293B',
                      borderRadius: '20px',
                      padding: '16px 14px',
                      boxShadow: '5px 5px 0px 0px #1E293B',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '100%',
                    }}
                  >
                    <div>
                      {/* Category and tag pills */}
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '12px',
                        }}
                      >
                        <span className="badge-pill badge-mint" style={{ fontSize: '10.5px', padding: '3px 9px' }}>
                          {project.category}
                        </span>
                        <div style={{ display: 'flex', gap: '4px' }}>
                          {project.tags.slice(0, 2).map(tag => (
                            <span
                              key={tag}
                              style={{
                                fontSize: '10px',
                                fontWeight: 700,
                                color: '#64748B',
                                backgroundColor: '#F1F5F9',
                                padding: '2px 6px',
                                borderRadius: '6px',
                              }}
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Image Preview Box with FULL SHOW contain rendering */}
                      <div
                        style={{
                          position: 'relative',
                          width: '100%',
                          height: '180px',
                          borderRadius: '14px',
                          overflow: 'hidden',
                          marginBottom: '14px',
                          backgroundColor: '#F8FAFC',
                          border: '2px solid #1E293B',
                          boxShadow: '2px 2px 0px #1E293B',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '6px',
                          boxSizing: 'border-box',
                        }}
                      >
                        <img
                          src={encodeURI(project.image)}
                          alt={project.title}
                          loading="lazy"
                          style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            width: 'auto',
                            height: 'auto',
                            objectFit: 'contain',
                            objectPosition: 'center',
                            display: 'block',
                            margin: 'auto',
                            transition: 'transform 0.35s ease',
                          }}
                          className="group-hover:scale-105"
                          onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement
                            target.onerror = null
                            target.src = '/cgi-vfx-thumbnail.jpeg'
                          }}
                        />
                      </div>

                      {/* Title */}
                      <h3
                        style={{
                          fontFamily: "'Outfit', system-ui, sans-serif",
                          fontSize: '20px',
                          fontWeight: 800,
                          color: '#1E293B',
                          lineHeight: 1.25,
                        marginBottom: '8px',
                        letterSpacing: '-0.5px',
                      }}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: '14px',
                        color: '#64748B',
                        lineHeight: 1.6,
                        marginBottom: '20px',
                        fontWeight: 500,
                      }}
                    >
                      {project.desc}
                    </p>
                  </div>

                  {/* Card Footer with candy view button */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingTop: '16px',
                      borderTop: '2px solid #F1F5F9',
                    }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#8B5CF6' }}>
                      Case Study
                    </span>
                    <button
                      onClick={e => {
                        e.stopPropagation()
                        setActiveProject(project)
                      }}
                      className="candy-btn-secondary"
                      style={{
                        padding: '6px 16px',
                        fontSize: '12px',
                        boxShadow: '2px 2px 0px #1E293B',
                      }}
                    >
                      <span>View Project</span>
                      <ArrowRight size={12} strokeWidth={3} />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))
            ) : (
              <div
                style={{
                  padding: '60px',
                  textAlign: 'center',
                  color: '#64748B',
                  gridColumn: '1 / -1',
                  fontSize: '16px',
                  fontFamily: "'Outfit'",
                  fontWeight: 700,
                }}
              >
                No projects found in this category.
              </div>
            )}
          </div>

          {featuredOnly && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '64px' }}>
              <Link
                href="/work"
                className="candy-btn-pink"
                style={{ padding: '14px 36px', fontSize: '15px' }}
              >
                <span>View All Projects</span>
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    backgroundColor: '#FFFFFF',
                    color: '#1E293B',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ArrowRight size={13} strokeWidth={3} />
                </div>
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
