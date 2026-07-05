'use client'

import { useState } from 'react'
import Link from 'next/link'
import { WorkProject } from '@/lib/db'

export function WorkSection({ projects, featuredOnly = false }: { projects: WorkProject[], featuredOnly?: boolean }) {
  const allProjects = projects
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  
  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(allProjects.map(p => p.category)))]

  // Filter projects
  let displayedProjects = allProjects
  if (selectedCategory !== 'All') {
    displayedProjects = displayedProjects.filter(p => p.category === selectedCategory)
  }
  if (featuredOnly) {
    displayedProjects = displayedProjects.slice(0, 3)
  }

  return (
    <section id="portfolio" style={{ background: 'transparent', padding: '80px 28px' }}>
      {/* Header Panel */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '56px', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <div style={{ background: 'rgba(217, 70, 239, 0.1)', border: '1px solid rgba(217, 70, 239, 0.3)', display: 'inline-block', padding: '6px 18px', borderRadius: '99px', marginBottom: '16px' }}>
            <span style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700, color: '#d946ef' }}>
              {featuredOnly ? 'Featured Portfolio' : 'Complete Showcase'}
            </span>
          </div>
          <h2 className="cn-bebas" style={{ fontSize: 'clamp(42px, 6vw, 68px)', letterSpacing: '1px', color: '#fff', lineHeight: 1, paddingTop: '4px' }}>
            Selected Case <span style={{ background: 'linear-gradient(135deg, #d946ef, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Studies</span>
          </h2>
        </div>
        <div style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#9ca3af', fontWeight: 600, textAlign: 'right' }}>
          {featuredOnly ? 'Active Production' : 'Delivered Excellence'}
        </div>
      </div>

      {/* Categories Filter Bar (Only show if not featuredOnly) */}
      {!featuredOnly && (
        <div style={{ display: 'flex', gap: '12px', marginBottom: '40px', overflowX: 'auto', paddingBottom: '8px', scrollbarWidth: 'none' }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                background: selectedCategory === category ? 'rgba(217, 70, 239, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                border: `1px solid ${selectedCategory === category ? 'rgba(217, 70, 239, 0.5)' : 'rgba(255, 255, 255, 0.1)'}`,
                color: selectedCategory === category ? '#fff' : '#9ca3af',
                padding: '8px 24px',
                borderRadius: '99px',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '1px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Projects Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
        {displayedProjects.length > 0 ? displayedProjects.map((project) => (
          <div 
            key={project.slug}
            className="glass-card"
            style={{ 
              padding: '32px 28px', 
              minHeight: '480px', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between', 
              position: 'relative', 
              overflow: 'hidden',
            }}
          >
            {/* Background neon accent */}
            <div style={{ position: 'absolute', top: '0', right: '0', width: '120px', height: '120px', background: '#d946ef', opacity: 0.04, filter: 'blur(35px)', pointerEvents: 'none' }} />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ background: 'rgba(217, 70, 239, 0.15)', border: '1px solid rgba(217, 70, 239, 0.3)', display: 'inline-block', padding: '4px 14px', borderRadius: '99px', marginBottom: '20px' }}>
                <span style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: '#d946ef', fontWeight: 700 }}>
                  {project.category}
                </span>
              </div>
              
              {/* Project Video Frame */}
              <div 
                style={{ 
                  width: '100%', 
                  height: '220px', 
                  position: 'relative', 
                  border: '1px solid rgba(255, 255, 255, 0.08)', 
                  borderRadius: '12px', 
                  marginBottom: '24px', 
                  overflow: 'hidden',
                  background: '#040307'
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="hover:scale-105 transition-transform duration-500 ease-out"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              <h3 className="cn-syne" style={{ fontSize: '22px', fontWeight: 800, color: '#fff', lineHeight: 1.3, letterSpacing: '-0.5px' }}>
                {project.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#9ca3af', marginTop: '8px', lineHeight: 1.6 }}>
                {project.desc}
              </p>
            </div>

            {/* Bottom Row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1, marginTop: '32px' }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {project.tags.map((tag) => (
                  <span key={tag} style={{ fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', color: '#06b6d4', fontWeight: 600 }}>
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={`/work/${project.slug}`} className="gradient-btn-primary" style={{ padding: '8px 22px', fontSize: '9px', letterSpacing: '1.5px' }}>
                Case Study →
              </Link>
            </div>
          </div>
        )) : (
          <div style={{ padding: '40px', textAlign: 'center', color: '#9ca3af', gridColumn: '1 / -1' }}>
            No projects found in this category.
          </div>
        )}
      </div>

      {featuredOnly && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '64px' }}>
          <Link href="/work" className="gradient-btn-primary" style={{ padding: '14px 40px', fontSize: '11px', letterSpacing: '2.5px' }}>
            View All Projects
          </Link>
        </div>
      )}

      {/* About sub-section inside the Projects/Work list page/section */}
      <div 
        className="glass-card"
        style={{
          marginTop: '80px',
          padding: '48px 40px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(217, 70, 239, 0.08) 0%, transparent 70%)', filter: 'blur(45px)', pointerEvents: 'none' }} />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', position: 'relative', zIndex: 1 }}>
          <div>
            <div style={{ background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)', display: 'inline-block', padding: '4px 12px', borderRadius: '99px', marginBottom: '16px' }}>
              <span style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', color: '#6366f1', fontWeight: 700 }}>About Our Portfolio</span>
            </div>
            <h3 className="cn-bebas" style={{ fontSize: '38px', color: '#fff', letterSpacing: '1px', lineHeight: 1 }}>
              How We Deliver <span style={{ background: 'linear-gradient(135deg, #6366f1, #d946ef)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Unmatched Results</span>
            </h3>
            <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#9ca3af', marginTop: '16px' }}>
              Every brand transformation in our catalog represents a strategic mixture of high-fidelity engineering, immersive visuals, and conversion optimization pipelines. We don't just build code; we deploy digital solutions that drive metric-centered enterprise growth.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {[
              { 
                title: 'Sub-Second Speeds', 
                desc: 'Pre-rendered layouts and optimized edge routing for instant load times.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '12px', filter: 'drop-shadow(0 0 4px rgba(6, 182, 212, 0.5))' }}>
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                )
              },
              { 
                title: 'Cinematic Precision', 
                desc: 'Physically accurate rendering engines mapping assets for CGI and VFX ads.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d946ef" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '12px', filter: 'drop-shadow(0 0 4px rgba(217, 70, 239, 0.5))' }}>
                    <path d="M23 7l-7 5 7 5V7z" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                )
              },
              { 
                title: 'Metric-Driven Audits', 
                desc: 'Rigorous A/B user cohort testing across landing pages and ad scripts.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '12px', filter: 'drop-shadow(0 0 4px rgba(16, 185, 129, 0.5))' }}>
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                )
              },
              { 
                title: 'Full Integration', 
                desc: 'Secure custom endpoints connecting lead databases, CRM dashboards, and HR ERPs.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '12px', filter: 'drop-shadow(0 0 4px rgba(99, 102, 241, 0.5))' }}>
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                )
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="glass-card"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.01)', 
                  border: '1px solid rgba(255, 255, 255, 0.05)', 
                  borderRadius: '12px', 
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
              >
                {item.icon}
                <h4 className="cn-syne" style={{ fontSize: '15px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>{item.title}</h4>
                <p style={{ fontSize: '12px', lineHeight: 1.6, color: '#9ca3af' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
