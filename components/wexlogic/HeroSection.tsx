'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'
import { TypewriterText } from './TypewriterText'
import { ScrollReveal } from './ScrollReveal'

export function HeroSection() {
  return (
    <>
      {/* Embedded Animations for 100% Reliability */}
      <style>{`
        @keyframes heroCardUpDown {
          0% {
            transform: translateY(14px);
          }
          50% {
            transform: translateY(-14px);
          }
          100% {
            transform: translateY(14px);
          }
        }
        .hero-floating-card {
          animation: heroCardUpDown 3.8s ease-in-out infinite !important;
          will-change: transform;
        }
        .hero-floating-card:hover {
          animation-play-state: paused !important;
        }

        @keyframes scrollVerticalDownToUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-scroll-vertical {
          animation: scrollVerticalDownToUp 14s linear infinite !important;
          will-change: transform;
        }
        .animate-scroll-vertical:hover {
          animation-play-state: paused !important;
        }

        /* KPI Card Animation */
        @keyframes kpiEnter {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .kpi-animated-card {
          animation: kpiEnter 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .kpi-animated-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 6px 6px 0px 0px rgba(0, 0, 0, 0.6) !important;
        }

        /* Mobile 2x2 Grid for KPIs */
        @media (max-width: 640px) {
          .kpi-grid-container {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
          .kpi-animated-card {
            padding: 14px 10px !important;
          }
          .kpi-animated-card .kpi-value {
            font-size: 26px !important;
          }
          .kpi-animated-card .kpi-label {
            font-size: 10px !important;
            letter-spacing: 0.5px !important;
          }
        }
      `}</style>

      {/* HERO SECTION — New Dark Dynamic Studio Background */}
      <section
        id="home"
        style={{
          position: 'relative',
          minHeight: 'calc(100vh - 65px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '16px 16px 24px',
          borderBottom: '2px solid rgba(255, 255, 255, 0.1)',
          overflow: 'hidden',
          backgroundColor: '#0F172A',
          boxSizing: 'border-box',
        }}
      >
        {/* Dynamic Studio Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.18,
            pointerEvents: 'none',
            zIndex: 0,
          }}
          src="/Brutalist_IT_company_hero_video_202607032332_gwr_video_mvp.mp4"
        />

        {/* Cinematic Ambient Glow & Tech Grid Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 70% 30%, rgba(139, 92, 246, 0.18) 0%, transparent 65%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
          aria-hidden="true"
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '500px',
            height: '400px',
            background: 'radial-gradient(circle at bottom left, rgba(251, 191, 36, 0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
          aria-hidden="true"
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.08) 1.2px, transparent 1.2px)',
            backgroundSize: '24px 24px',
            pointerEvents: 'none',
            zIndex: 1,
          }}
          aria-hidden="true"
        />

        {/* Main Content Area */}
        <div
          style={{
            maxWidth: '1560px',
            margin: '0 auto',
            width: '100%',
            padding: '0 6px',
            boxSizing: 'border-box',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '32px',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            zIndex: 10,
          }}
        >
          {/* Left: Headline, Badge, Paragraph & Candy Buttons */}
          <div style={{ flex: '1 1 500px' }}>
            {/* Pill Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span className="badge-pill badge-yellow">
                <Sparkles size={13} className="text-[#1E293B]" />
                Next-Gen Creative Studio
              </span>
              <span className="badge-pill badge-pink" style={{ fontSize: '11px' }}>
                Est. 2026
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontFamily: "'Outfit', system-ui, sans-serif",
                fontSize: 'clamp(34px, 4.4vw, 56px)',
                fontWeight: 900,
                color: '#FFFFFF',
                lineHeight: 1.1,
                letterSpacing: '-1px',
                marginBottom: '16px',
              }}
            >
              Where Brands Become{' '}
              <span
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  color: '#8B5CF6',
                }}
              >
                Legends.
                {/* Memphis SVG Squiggle Underline */}
                <svg
                  style={{
                    position: 'absolute',
                    left: 0,
                    bottom: '-8px',
                    width: '100%',
                    height: '12px',
                  }}
                  viewBox="0 0 200 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 10C35 2 65 14 98 8C130 2 165 14 197 7"
                    stroke="#F472B6"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Animated Rotating Typewriter Effect */}
            <div>
              <TypewriterText />
            </div>

            {/* Description Paragraph with High-Contrast Legibility Backdrop */}
            <div
              style={{
                backgroundColor: 'rgba(30, 41, 59, 0.85)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1.5px solid rgba(255, 255, 255, 0.16)',
                borderRadius: '16px',
                padding: '14px 18px',
                boxShadow: '3px 3px 0px rgba(0, 0, 0, 0.4)',
                maxWidth: '520px',
                marginBottom: '24px',
                display: 'inline-block',
              }}
            >
              <p
                style={{
                  fontSize: '15.5px',
                  lineHeight: 1.6,
                  color: '#F1F5F9',
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                From scroll-stopping CGI & VFX campaigns to high-performance web applications, viral brand identities, performance marketing, and grand-scale event planning & management — we engineer unmissable experiences that drive real growth.
              </p>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '22px', alignItems: 'center', flexWrap: 'wrap', marginLeft: '12px', marginTop: '6px' }}>
              <Link href="#contact" className="candy-btn-primary" style={{ padding: '13px 26px', fontSize: '15px' }}>
                <span>Get Started</span>
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: '#FFFFFF',
                    color: '#1E293B',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginLeft: '4px',
                  }}
                >
                  <ArrowRight size={12} strokeWidth={3} />
                </div>
              </Link>
              <Link href="#portfolio" className="candy-btn-secondary" style={{ padding: '13px 26px', fontSize: '15px' }}>
                <span>View Work</span>
              </Link>
            </div>

            {/* Trust Proof */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '22px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} className="text-[#34D399]" />
                <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#F8FAFC' }}>Zero Bloat Code</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} className="text-[#A78BFA]" />
                <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#F8FAFC' }}>Milestone-Backed</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} className="text-[#F472B6]" />
                <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#F8FAFC' }}>Top 1% Execution</span>
              </div>
            </div>
          </div>

          {/* Right: Tactile Sticker Showcase Card (Original Structure) */}
          <div style={{ flex: '1 1 380px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div
              className="sticker-card hero-floating-card"
              style={{
                width: '100%',
                maxWidth: '390px',
                padding: '22px 20px',
                position: 'relative',
                backgroundColor: '#FFFFFF',
                boxShadow: '8px 8px 0px 0px rgba(0, 0, 0, 0.6)',
                animation: 'heroCardUpDown 3.8s ease-in-out infinite',
                willChange: 'transform',
                borderRadius: '16px',
                border: '2px solid #1E293B',
              }}
            >
              {/* Corner Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '12px',
                  backgroundColor: '#FBBF24',
                  border: '2px solid #1E293B',
                  borderRadius: '9999px',
                  padding: '4px 12px',
                  boxShadow: '2px 2px 0px #1E293B',
                  transform: 'rotate(5deg)',
                  zIndex: 20,
                }}
              >
                <span style={{ fontFamily: "'Outfit'", fontSize: '10px', fontWeight: 800, color: '#1E293B' }}>
                  OUR STACK
                </span>
              </div>

              {/* Card Title */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '14px',
                  borderBottom: '2px solid #E2E8F0',
                  paddingBottom: '10px',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Outfit', system-ui, sans-serif",
                    fontSize: '14px',
                    fontWeight: 800,
                    color: '#1E293B',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  Services & Pillars
                </span>
                <span
                  style={{
                    fontSize: '10px',
                    backgroundColor: '#8B5CF6',
                    color: '#FFFFFF',
                    padding: '2px 8px',
                    borderRadius: '9999px',
                    fontWeight: 800,
                    fontFamily: "'Outfit'",
                  }}
                >
                  9 SPECIALTIES
                </span>
              </div>

              {/* Scrolling Window with vertical mask */}
              <div
                style={{
                  height: '190px',
                  overflow: 'hidden',
                  position: 'relative',
                  maskImage: 'linear-gradient(to bottom, transparent 0%, white 12%, white 88%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, white 12%, white 88%, transparent 100%)',
                }}
              >
                <div
                  className="animate-scroll-vertical"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    animation: 'scrollVerticalDownToUp 14s linear infinite',
                    willChange: 'transform',
                  }}
                >
                  {[
                    { num: '01', title: 'CGI & VFX Ads', bg: '#F5F3FF', border: '#8B5CF6', tag: 'CGI' },
                    { num: '02', title: 'Web & App Dev', bg: '#FFF1F2', border: '#F472B6', tag: 'CODE' },
                    { num: '03', title: 'Branding & Identity', bg: '#FEFCE8', border: '#FBBF24', tag: 'DESIGN' },
                    { num: '04', title: 'SEO & Marketing', bg: '#ECFDF5', border: '#34D399', tag: 'GROWTH' },
                    { num: '05', title: 'Paid Ads & Meta', bg: '#F5F3FF', border: '#8B5CF6', tag: 'PAID' },
                    { num: '06', title: 'Video Editing', bg: '#FFF1F2', border: '#F472B6', tag: 'EDIT' },
                    { num: '07', title: 'CRM Systems', bg: '#FEFCE8', border: '#FBBF24', tag: 'CRM' },
                    { num: '08', title: 'ERP Solutions', bg: '#ECFDF5', border: '#34D399', tag: 'ERP' },
                    { num: '09', title: 'Event Planning & Mgmt', bg: '#FDF2F8', border: '#EC4899', tag: 'EVENTS' },
                  ].concat([
                    { num: '01', title: 'CGI & VFX Ads', bg: '#F5F3FF', border: '#8B5CF6', tag: 'CGI' },
                    { num: '02', title: 'Web & App Dev', bg: '#FFF1F2', border: '#F472B6', tag: 'CODE' },
                    { num: '03', title: 'Branding & Identity', bg: '#FEFCE8', border: '#FBBF24', tag: 'DESIGN' },
                    { num: '04', title: 'SEO & Marketing', bg: '#ECFDF5', border: '#34D399', tag: 'GROWTH' },
                    { num: '05', title: 'Paid Ads & Meta', bg: '#F5F3FF', border: '#8B5CF6', tag: 'PAID' },
                    { num: '06', title: 'Video Editing', bg: '#FFF1F2', border: '#F472B6', tag: 'EDIT' },
                    { num: '07', title: 'CRM Systems', bg: '#FEFCE8', border: '#FBBF24', tag: 'CRM' },
                    { num: '08', title: 'ERP Solutions', bg: '#ECFDF5', border: '#34D399', tag: 'ERP' },
                    { num: '09', title: 'Event Planning & Mgmt', bg: '#FDF2F8', border: '#EC4899', tag: 'EVENTS' },
                  ]).map((item, idx) => (
                    <Link
                      key={idx}
                      href="/services"
                      className="scrolling-capsule"
                      style={{
                        backgroundColor: item.bg,
                        padding: '8px 14px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span
                          style={{
                            fontFamily: "'Outfit'",
                            fontSize: '12px',
                            fontWeight: 800,
                            color: item.border,
                          }}
                        >
                          {item.num}
                        </span>
                        <span
                          style={{
                            fontFamily: "'Outfit', system-ui, sans-serif",
                            fontSize: '13px',
                            fontWeight: 700,
                            color: '#1E293B',
                          }}
                        >
                          {item.title}
                        </span>
                      </div>
                      <span
                        style={{
                          fontSize: '9px',
                          fontWeight: 800,
                          backgroundColor: '#FFFFFF',
                          border: '1.5px solid #1E293B',
                          borderRadius: '9999px',
                          padding: '1px 6px',
                          color: '#1E293B',
                          boxShadow: '1px 1px 0px #1E293B',
                        }}
                      >
                        {item.tag}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stat Bar in Playful Sticker Cards (Original Structure) ── */}
        <div
          className="kpi-grid-container"
          style={{
            maxWidth: '1560px',
            margin: '20px auto 0',
            width: '100%',
            padding: '0 6px',
            boxSizing: 'border-box',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            position: 'relative',
            zIndex: 10,
          }}
        >
          {[
            { value: '30+', label: 'Projects Completed', color: '#8B5CF6', bg: '#F5F3FF' },
            { value: '20+', label: 'Happy Clients', color: '#F472B6', bg: '#FFF1F2' },
            { value: '10X', label: 'Revenue Growth', color: '#FBBF24', bg: '#FEFCE8' },
            { value: '100%', label: 'Satisfaction Rate', color: '#34D399', bg: '#ECFDF5' },
          ].map(({ value, label, color, bg }, idx) => (
            <ScrollReveal key={label} delay={idx * 90} style={{ height: '100%' }}>
              <div
                className="sticker-card kpi-animated-card"
                style={{
                  padding: '18px 16px',
                  textAlign: 'center',
                  backgroundColor: bg,
                  border: '2px solid #1E293B',
                  boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.5)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  boxSizing: 'border-box',
                  borderRadius: '14px',
                }}
              >
                <div
                  className="kpi-value"
                  style={{
                    fontFamily: "'Outfit', system-ui, sans-serif",
                    fontSize: '34px',
                    fontWeight: 900,
                    color: color,
                    lineHeight: 1,
                    letterSpacing: '-1px',
                  }}
                >
                  {value}
                </div>
                <div
                  className="kpi-label"
                  style={{
                    fontSize: '11px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: '#1E293B',
                    fontWeight: 800,
                    marginTop: '6px',
                    fontFamily: "'Outfit', system-ui, sans-serif",
                  }}
                >
                  {label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  )
}

