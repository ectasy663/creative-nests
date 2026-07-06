'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'


// Lazy video card — only loads the video when hovered
function ServiceCard({ num, slug, title, desc, numColor, bar, videoUrl, image }: {
  num: string; slug: string; title: string; desc: string
  numColor: string; bar: string; videoUrl: string; image: string
}) {
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <div
      className="glass-card"
      style={{
        padding: '36px 32px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '480px',
        overflow: 'hidden'
      }}
    >
      {/* Soft background glow */}
      <div style={{ position: 'absolute', top: '20px', right: '20px', width: '120px', height: '120px', background: numColor, opacity: 0.05, filter: 'blur(35px)', pointerEvents: 'none' }} />

      <div>
        {/* Hover-triggered video / cover image frame */}
        <div
          style={{
            width: '100%',
            height: '200px',
            position: 'relative',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            marginBottom: '28px',
            overflow: 'hidden',
            background: '#040307',
            cursor: 'pointer'
          }}
          onMouseEnter={() => setVideoLoaded(true)}
          onFocus={() => setVideoLoaded(true)}
        >
          {/* Always-visible cover image — replaced by video on hover */}
          {!videoLoaded && (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover', transition: 'opacity 0.3s ease' }}
            />
          )}
          {videoLoaded && (
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          )}
          {/* Play hint overlay */}
          {!videoLoaded && (
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(0,0,0,0.2)'
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: '50%',
                background: 'rgba(223,183,108,0.15)',
                border: '1px solid rgba(223,183,108,0.35)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 16, color: '#dfb76c'
              }}>▶</div>
            </div>
          )}
        </div>

        {/* Number and accent line */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <span className="cn-bebas" style={{ fontSize: '32px', color: numColor, letterSpacing: '1px', lineHeight: 1 }}>{num}</span>
          <div style={{ width: '48px', height: '3px', background: bar, borderRadius: '99px' }} />
        </div>

        {/* Title & Description */}
        <h3 className="cn-syne" style={{ fontSize: '22px', fontWeight: 800, color: '#fff', margin: '8px 0 12px', lineHeight: 1.25, letterSpacing: '-0.5px' }}>
          {title}
        </h3>
        <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#9ca3af', fontWeight: 400 }}>
          {desc}
        </p>
      </div>

      <Link
        href={`/services/${slug}`}
        className="glass-btn-secondary"
        style={{
          alignSelf: 'flex-start',
          marginTop: '32px',
          padding: '10px 28px',
          fontSize: '10px',
          letterSpacing: '2px'
        }}
      >
        Explore Capabilities →
      </Link>
    </div>
  )
}

export function ServicesSection({ services, featuredOnly = false }: { services: any[], featuredOnly?: boolean }) {
  const displayedServices = featuredOnly ? services.slice(0, 3) : services

  return (
    <section id="services" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(223, 183, 108, 0.12) 0%, #040307 70%)', padding: '80px 28px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
      {/* Section Header */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '56px', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <div style={{ background: 'rgba(223, 183, 108, 0.24)', border: '1px solid rgba(223, 183, 108, 0.3)', display: 'inline-block', padding: '6px 18px', borderRadius: '99px', marginBottom: '16px' }}>
            <span style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700, color: '#dfb76c' }}>
              {featuredOnly ? 'Core Capabilities' : 'Full Suite Capabilities'}
            </span>
          </div>
          <h2 className="cn-bebas" style={{ fontSize: 'clamp(42px, 6vw, 68px)', letterSpacing: '1px', color: '#fff', lineHeight: 1, paddingTop: '4px' }}>
            Our Next-Gen <span style={{ background: 'linear-gradient(135deg, #dfb76c, #b89047)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Services</span>
          </h2>
        </div>
        <div style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#9ca3af', fontWeight: 600, textAlign: 'right', lineHeight: 1.5 }}>
          {featuredOnly ? 'Scale-Ready Solutions' : 'Premium Execution Models'}
        </div>
      </div>

      {/* Services Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
        {displayedServices.map(({ num, slug, title, desc, numColor, bar, videoUrl, image }) => (
          <ServiceCard
            key={num}
            num={num}
            slug={slug}
            title={title}
            desc={desc}
            numColor={numColor}
            bar={bar}
            videoUrl={videoUrl}
            image={image}
          />
        ))}
      </div>

      {featuredOnly && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '64px' }}>
          <Link href="/services" className="gradient-btn-primary" style={{ padding: '14px 40px', fontSize: '11px', letterSpacing: '2.5px' }}>
            View All Services
          </Link>
        </div>
      )}
    </section>
  )
}
