'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Sparkles, Play } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'

// Color palette rotation for Playful Geometric cards
const cardColors = [
  { accent: '#8B5CF6', tagBg: '#F5F3FF', shadow: '#8B5CF6' },
  { accent: '#F472B6', tagBg: '#FFF1F2', shadow: '#F472B6' },
  { accent: '#FBBF24', tagBg: '#FEFCE8', shadow: '#FBBF24' },
  { accent: '#34D399', tagBg: '#ECFDF5', shadow: '#34D399' },
]

function ServiceCard({
  num,
  slug,
  title,
  desc,
  videoUrl,
  image,
  index = 0,
}: {
  num: string
  slug: string
  title: string
  desc: string
  numColor?: string
  bar?: string
  videoUrl: string
  image: string
  index?: number
}) {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const theme = cardColors[index % cardColors.length]

  return (
    <ScrollReveal delay={index * 100} style={{ height: '100%' }}>
      <div
        className="sticker-card group"
      style={{
        backgroundColor: '#FFFFFF',
        border: '2px solid #1E293B',
        borderRadius: '24px',
        padding: '36px 28px 30px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '490px',
        boxShadow: '6px 6px 0px 0px #1E293B',
      }}
    >
      {/* Floating circular number badge half-in/half-out */}
      <div
        style={{
          position: 'absolute',
          top: '-22px',
          left: '24px',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          backgroundColor: theme.accent,
          color: theme.accent === '#FBBF24' || theme.accent === '#34D399' ? '#1E293B' : '#FFFFFF',
          border: '2px solid #1E293B',
          boxShadow: '3px 3px 0px #1E293B',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "'Outfit', system-ui, sans-serif",
          fontSize: '15px',
          fontWeight: 900,
          zIndex: 10,
        }}
      >
        {num}
      </div>

      <div>
        {/* Cover image / Interactive video container with 2px chunky border */}
        <div
          style={{
            width: '100%',
            height: '210px',
            position: 'relative',
            border: '2px solid #1E293B',
            borderRadius: '16px',
            marginBottom: '24px',
            overflow: 'hidden',
            backgroundColor: '#F1F5F9',
            boxShadow: '3px 3px 0px #1E293B',
            cursor: 'pointer',
          }}
          onMouseEnter={() => setVideoLoaded(true)}
          onFocus={() => setVideoLoaded(true)}
        >
          {!videoLoaded && (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
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

          {/* Play badge overlay */}
          {!videoLoaded && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(30, 41, 59, 0.25)',
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  border: '2px solid #1E293B',
                  boxShadow: '2px 2px 0px #1E293B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#1E293B',
                  transition: 'transform 0.2s',
                }}
                className="group-hover:scale-110"
              >
                <Play size={18} fill="#1E293B" className="ml-0.5" />
              </div>
            </div>
          )}
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "'Outfit', system-ui, sans-serif",
            fontSize: '24px',
            fontWeight: 800,
            color: '#1E293B',
            marginBottom: '10px',
            lineHeight: 1.25,
            letterSpacing: '-0.5px',
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: '14.5px',
            lineHeight: 1.6,
            color: '#64748B',
            fontWeight: 500,
          }}
        >
          {desc}
        </p>
      </div>

      {/* Action link */}
      <Link
        href={`/services/${slug}`}
        className="candy-btn-secondary"
        style={{
          alignSelf: 'flex-start',
          marginTop: '28px',
          padding: '8px 20px',
          fontSize: '13px',
        }}
      >
        <span>Explore Capabilities</span>
        <ArrowRight size={14} strokeWidth={2.5} />
      </Link>
    </div>
  </ScrollReveal>
)
}

export function ServicesSection({
  services,
  featuredOnly = false,
}: {
  services: any[]
  featuredOnly?: boolean
}) {
  const displayedServices = featuredOnly ? services.slice(0, 3) : services

  return (
    <section
      id="services"
      style={{
        backgroundColor: '#FFFDF5',
        padding: '40px 16px 56px',
        borderBottom: '2px solid #1E293B',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ width: '100%', maxWidth: '1560px', margin: '0 auto', padding: '0 6px', boxSizing: 'border-box' }}>
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '56px',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span className="badge-pill badge-pink">
                <Sparkles size={13} className="text-white" />
                {featuredOnly ? 'Core Capabilities' : 'All 9 Services'}
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
              Our Next-Gen{' '}
              <span
                style={{
                  backgroundColor: '#8B5CF6',
                  color: '#FFFFFF',
                  padding: '2px 14px',
                  borderRadius: '14px',
                  border: '2px solid #1E293B',
                  boxShadow: '3px 3px 0px #1E293B',
                  display: 'inline-block',
                }}
              >
                Services
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
              textAlign: 'right',
            }}
          >
            {featuredOnly ? 'Scale-Ready Solutions' : 'Full Digital Production'}
          </div>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}
        >
          {displayedServices.map((service, index) => (
            <ServiceCard
              key={service.num}
              num={service.num}
              slug={service.slug}
              title={service.title}
              desc={service.desc}
              numColor={service.numColor}
              bar={service.bar}
              videoUrl={service.videoUrl}
              image={service.image}
              index={index}
            />
          ))}
        </div>

        {featuredOnly && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '64px' }}>
            <Link
              href="/services"
              className="candy-btn-primary"
              style={{ padding: '14px 36px', fontSize: '15px' }}
            >
              <span>View All Services</span>
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
  )
}
