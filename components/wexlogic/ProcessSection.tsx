'use client'

import { Sparkles } from 'lucide-react'
import { ScrollReveal } from './ScrollReveal'

interface ProcessStep {
  step: string
  title: string
  desc: string
  color: string
  bg: string
}

const steps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery & Audit',
    desc: 'In-depth analysis of your current infrastructure, bottlenecks, and growth opportunities.',
    color: '#8B5CF6',
    bg: '#F5F3FF',
  },
  {
    step: '02',
    title: 'Architecture Blueprint',
    desc: 'Interactive wireframes, modern technical stack selection, and playful UI/UX design mapping.',
    color: '#F472B6',
    bg: '#FFF1F2',
  },
  {
    step: '03',
    title: 'High-Fidelity Build',
    desc: 'Agile development, Next.js optimization, and photorealistic 3D CGI frame compositions.',
    color: '#FBBF24',
    bg: '#FEFCE8',
  },
  {
    step: '04',
    title: 'Stress Testing & Q/A',
    desc: 'Rigorous cross-device performance testing, security audits, and sub-second speed tuning.',
    color: '#34D399',
    bg: '#ECFDF5',
  },
  {
    step: '05',
    title: 'Launch & Scale',
    desc: 'Zero-downtime deployment with live cohort tracking, post-launch analytics, and growth iteration.',
    color: '#8B5CF6',
    bg: '#F5F3FF',
  },
]

export function ProcessSection() {
  return (
    <section
      id="process"
      style={{
        backgroundColor: '#FFFDF5',
        padding: '56px 16px',
        borderBottom: '2px solid #1E293B',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Decorative Memphis Background Elements */}
      <div
        style={{
          position: 'absolute',
          top: '30px',
          right: '5%',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          border: '4px dashed #CBD5E1',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '3%',
          width: '80px',
          height: '80px',
          backgroundColor: '#FEF08A',
          borderRadius: '16px',
          transform: 'rotate(12deg)',
          opacity: 0.5,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      <div style={{ width: '100%', maxWidth: '1560px', margin: '0 auto', padding: '0 6px', boxSizing: 'border-box', position: 'relative', zIndex: 2 }}>
        {/* Title */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span className="badge-pill badge-violet">
              <Sparkles size={13} className="text-white" />
              HOW WE BUILD
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Outfit', system-ui, sans-serif",
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 900,
              color: '#1E293B',
              letterSpacing: '-1px',
              lineHeight: 1.15,
            }}
          >
            Process of{' '}
            <span
              style={{
                backgroundColor: '#FBBF24',
                padding: '2px 14px',
                borderRadius: '12px',
                border: '2px solid #1E293B',
                boxShadow: '3px 3px 0px #1E293B',
                display: 'inline-block',
                transform: 'rotate(-1deg)',
              }}
            >
              Work
            </span>
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: '#475569',
              maxWidth: '620px',
              margin: '18px auto 0',
              lineHeight: 1.6,
              fontWeight: 500,
            }}
          >
            We follow a transparent, metric-driven workflow designed to remove friction,
            eliminate guesswork, and deliver delightful digital products.
          </p>
        </div>

        {/* Process Steps Staggered/Connected Layout */}
        <div style={{ position: 'relative' }}>
          {/* Dashed Connecting Line on Desktop */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              left: '60px',
              right: '60px',
              height: '3px',
              borderTop: '3px dashed #1E293B',
              zIndex: 1,
            }}
            className="hidden lg:block"
            aria-hidden="true"
          />

          <div className="process-steps-grid" style={{ paddingTop: '28px' }}>
            {steps.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 110} style={{ height: '100%' }}>
                <div
                  className="sticker-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '2px solid #1E293B',
                  borderRadius: '20px',
                  padding: '36px 22px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  position: 'relative',
                  boxShadow: '5px 5px 0px #1E293B',
                  zIndex: 2,
                }}
              >
                {/* Floating circular sticker number sitting half-in/half-out */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-24px',
                    left: '20px',
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    backgroundColor: item.color,
                    color: item.color === '#FBBF24' || item.color === '#34D399' ? '#1E293B' : '#FFFFFF',
                    border: '2px solid #1E293B',
                    boxShadow: '3px 3px 0px #1E293B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Outfit', system-ui, sans-serif",
                    fontSize: '16px',
                    fontWeight: 900,
                    zIndex: 10,
                  }}
                >
                  {item.step}
                </div>

                {/* Card Top Spacing */}
                <div style={{ height: '8px' }} />

                <h3
                  style={{
                    fontFamily: "'Outfit', system-ui, sans-serif",
                    fontSize: '19px',
                    fontWeight: 800,
                    color: '#1E293B',
                    marginBottom: '10px',
                    letterSpacing: '-0.3px',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '14px',
                    color: '#64748B',
                    lineHeight: 1.6,
                    fontWeight: 500,
                    marginTop: 'auto',
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
