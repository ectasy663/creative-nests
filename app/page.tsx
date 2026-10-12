import Link from 'next/link'
import { Header } from '@/components/wexlogic/Header'
import dynamic from 'next/dynamic'
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'
import { ScrollReveal } from '@/components/wexlogic/ScrollReveal'

const ProcessSection = dynamic(() => import('@/components/wexlogic/ProcessSection').then(mod => mod.ProcessSection))
const Ticker = dynamic(() => import('@/components/wexlogic/Ticker').then(mod => mod.Ticker))
import { TypewriterText } from '@/components/wexlogic/TypewriterText'
const ServicesSection = dynamic(() => import('@/components/wexlogic/ServicesSection').then(mod => mod.ServicesSection))
const WorkSection = dynamic(() => import('@/components/wexlogic/WorkSection').then(mod => mod.WorkSection))
const TestimonialsSection = dynamic(() => import('@/components/wexlogic/TestimonialsSection').then(mod => mod.TestimonialsSection))
const CTABanner = dynamic(() => import('@/components/wexlogic/CTABanner').then(mod => mod.CTABanner))
const Footer = dynamic(() => import('@/components/wexlogic/Footer').then(mod => mod.Footer))
import { getProjects, getServices } from '@/lib/db'

export const metadata = {
  title: 'WexLogic — India\'s #1 Creative Studio',
  description: 'WexLogic is a creative studio delivering cinematic CGI ads, high-performance Next.js architectures, paid acquisition, and bespoke ERP/CRM dashboards.',
  alternates: {
    canonical: 'https://wexlogic.com'
  }
}

export default function HomePage() {
  return (
    <main style={{ position: 'relative', minHeight: '100vh', color: '#1E293B', backgroundColor: '#FFFDF5' }}>
      <Header />

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
          box-shadow: 6px 6px 0px 0px #1E293B !important;
        }
      `}</style>

      {/* HERO SECTION — Auto Full-Fit to Screen on Open */}
      <section
        id="home"
        style={{
          position: 'relative',
          minHeight: 'calc(100vh - 65px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '24px 16px 20px',
          borderBottom: '2px solid #1E293B',
          overflow: 'hidden',
          backgroundColor: '#FFFDF5',
          boxSizing: 'border-box',
        }}
      >
        {/* Warm paper gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 70% 30%, rgba(251, 191, 36, 0.08) 0%, transparent 60%)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
          aria-hidden="true"
        />

        {/* ── Geometric Decorative Shapes & Confetti ── */}
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            left: '-60px',
            width: '380px',
            height: '380px',
            borderRadius: '50%',
            backgroundColor: '#FBBF24',
            opacity: 0.85,
            zIndex: 1,
            pointerEvents: 'none',
            border: '2px solid #1E293B',
            boxShadow: '6px 6px 0px #1E293B',
          }}
          aria-hidden="true"
        />

        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '46%',
            width: 0,
            height: 0,
            borderLeft: '14px solid transparent',
            borderRight: '14px solid transparent',
            borderBottom: '24px solid #F472B6',
            transform: 'rotate(25deg)',
            zIndex: 2,
            pointerEvents: 'none',
            filter: 'drop-shadow(2px 2px 0px #1E293B)',
          }}
          aria-hidden="true"
        />

        <div
          style={{
            position: 'absolute',
            bottom: '22%',
            left: '6%',
            width: '26px',
            height: '26px',
            borderRadius: '50%',
            backgroundColor: '#34D399',
            border: '2px solid #1E293B',
            boxShadow: '2px 2px 0px #1E293B',
            zIndex: 2,
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />

        {/* Main Content Area */}
        <div
          style={{
            maxWidth: '1560px',
            margin: 'auto auto',
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
                color: '#1E293B',
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
                backgroundColor: 'rgba(255, 255, 255, 0.94)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '2px solid #1E293B',
                borderRadius: '16px',
                padding: '12px 18px',
                boxShadow: '3px 3px 0px #1E293B',
                maxWidth: '520px',
                marginBottom: '24px',
                display: 'inline-block',
              }}
            >
              <p
                style={{
                  fontSize: '15.5px',
                  lineHeight: 1.6,
                  color: '#0F172A',
                  fontWeight: 650,
                  margin: 0,
                }}
              >
                From scroll-stopping CGI & VFX campaigns to high-performance web applications, viral brand identities, performance marketing, and grand-scale event planning & management — we engineer unmissable experiences that drive real growth.
              </p>
            </div>

            {/* CTA Buttons (No emojis) */}
            <div style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap' }}>
              <Link href="#contact" className="candy-btn-primary">
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
                  }}
                >
                  <ArrowRight size={12} strokeWidth={3} />
                </div>
              </Link>
              <Link href="#portfolio" className="candy-btn-secondary">
                <span>View Work</span>
              </Link>
            </div>

            {/* Trust Proof */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '22px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} className="text-[#34D399]" />
                <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#1E293B' }}>Zero Bloat Code</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} className="text-[#8B5CF6]" />
                <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#1E293B' }}>Milestone-Backed</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} className="text-[#F472B6]" />
                <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#1E293B' }}>Top 1% Execution</span>
              </div>
            </div>
          </div>

          {/* Right: Tactile Sticker Showcase Card (Moves Down to Up in Repeated Cycle) */}
          <div style={{ flex: '1 1 380px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div
              className="sticker-card hero-floating-card"
              style={{
                width: '100%',
                maxWidth: '390px',
                padding: '22px 20px',
                position: 'relative',
                backgroundColor: '#FFFFFF',
                boxShadow: '8px 8px 0px 0px #1E293B',
                animation: 'heroCardUpDown 3.8s ease-in-out infinite',
                willChange: 'transform',
              }}
            >
              {/* Corner Badge (No rocket or star icons) */}
              <div
                style={{
                  position: 'absolute',
                  top: '-14px',
                  right: '-12px',
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

        {/* ── Stat Bar in Playful Sticker Cards (NO EMOJIS / ICONS) ── */}
        <div
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
            <ScrollReveal key={label} delay={idx * 90}>
              <div
                className="sticker-card kpi-animated-card"
                style={{
                  padding: '16px 16px',
                  textAlign: 'center',
                  backgroundColor: bg,
                  border: '2px solid #1E293B',
                  boxShadow: '4px 4px 0px #1E293B',
                  animationDelay: `${idx * 100}ms`,
                }}
              >
                <div
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
                  style={{
                    fontSize: '11px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: '#475569',
                    fontWeight: 700,
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

      {/* PROCESS SECTION */}
      <ScrollReveal>
        <ProcessSection />
      </ScrollReveal>

      {/* TICKER MARQUEE */}
      <Ticker />

      {/* SERVICES SECTION */}
      <ScrollReveal>
        <ServicesSection services={getServices()} featuredOnly={true} />
      </ScrollReveal>

      {/* WORK / PORTFOLIO SECTION */}
      <WorkSection projects={getProjects()} featuredOnly={true} />

      {/* TESTIMONIALS SECTION */}
      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>

      {/* CTA BANNER */}
      <ScrollReveal>
        <div id="contact">
          <CTABanner
            primaryLabel="Book Free Call"
            primaryHref="/contact"
            secondaryLabel="View Portfolio"
            secondaryHref="/work"
          />
        </div>
      </ScrollReveal>

      {/* FOOTER */}
      <Footer />
    </main>
  )
}
