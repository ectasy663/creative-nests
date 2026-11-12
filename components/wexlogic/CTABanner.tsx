import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

interface CTABannerProps {
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  /** When true, hides the action buttons (used as a page intro) */
  introOnly?: boolean
}

function MemphisConfetti() {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }} aria-hidden="true">
      {/* Circle Top Left */}
      <div
        style={{
          position: 'absolute',
          top: '-40px',
          left: '-40px',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          backgroundColor: '#FBBF24',
          border: '3px solid #1E293B',
          boxShadow: '4px 4px 0px #1E293B',
        }}
      />
      {/* Triangle Right */}
      <div
        style={{
          position: 'absolute',
          top: '30px',
          right: '8%',
          width: 0,
          height: 0,
          borderLeft: '22px solid transparent',
          borderRight: '22px solid transparent',
          borderBottom: '40px solid #34D399',
          transform: 'rotate(20deg)',
          filter: 'drop-shadow(3px 3px 0px #1E293B)',
        }}
      />
      {/* Pink Square Bottom Left */}
      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '10%',
          width: '42px',
          height: '42px',
          backgroundColor: '#F472B6',
          border: '2px solid #1E293B',
          borderRadius: '10px',
          boxShadow: '3px 3px 0px #1E293B',
          transform: 'rotate(-15deg)',
        }}
      />
      {/* Squiggle Divider */}
      <svg
        style={{
          position: 'absolute',
          bottom: '15px',
          right: '15%',
          width: '100px',
          height: '24px',
        }}
        viewBox="0 0 100 24"
        fill="none"
      >
        <path
          d="M2 12C15 2 25 22 40 12C55 2 65 22 80 12C90 5 95 18 98 12"
          stroke="#1E293B"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

export function CTABanner({
  primaryLabel = 'Book Free Call',
  primaryHref = '/contact',
  secondaryLabel,
  secondaryHref,
  introOnly = false,
}: CTABannerProps) {
  return (
    <section
      style={{
        backgroundColor: '#8B5CF6',
        borderTop: '2px solid #1E293B',
        borderBottom: '2px solid #1E293B',
        padding: '48px 16px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        color: '#FFFFFF',
      }}
    >
      <MemphisConfetti />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 6px',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
            <span className="badge-pill badge-yellow">
              <Sparkles size={13} className="text-[#1E293B]" />
              LET&apos;S WORK TOGETHER
            </span>
          </div>

        <h2
          style={{
            fontFamily: "'Outfit', system-ui, sans-serif",
            fontSize: 'clamp(40px, 6.5vw, 72px)',
            fontWeight: 900,
            color: '#FFFFFF',
            lineHeight: 1.05,
            marginBottom: '20px',
            letterSpacing: '-1.5px',
            textShadow: '3px 3px 0px #1E293B',
          }}
        >
          READY TO{' '}
          <span
            style={{
              backgroundColor: '#FBBF24',
              color: '#1E293B',
              padding: '2px 16px',
              borderRadius: '16px',
              border: '3px solid #1E293B',
              boxShadow: '4px 4px 0px #1E293B',
              display: 'inline-block',
              transform: 'rotate(-1.5deg)',
              textShadow: 'none',
            }}
          >
            DOMINATE
          </span>{' '}
          YOUR MARKET?
        </h2>

        <p
          style={{
            fontSize: '17px',
            fontWeight: 600,
            color: '#F1F5F9',
            marginBottom: '40px',
            fontFamily: "'Outfit', system-ui, sans-serif",
            letterSpacing: '0.5px',
          }}
        >
          One Free 20-Min Call. Zero Risk. Pure High-Performance Value.
        </p>
        </div>

        {!introOnly && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link
              href={primaryHref}
              className="candy-btn-secondary"
              style={{
                padding: '14px 36px',
                fontSize: '16px',
                boxShadow: '5px 5px 0px #1E293B',
              }}
            >
              <span>{primaryLabel}</span>
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: '#8B5CF6',
                  color: '#FFFFFF',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <ArrowRight size={14} strokeWidth={3} />
              </div>
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className="candy-btn-pink"
                style={{
                  padding: '14px 32px',
                  fontSize: '16px',
                  boxShadow: '5px 5px 0px #1E293B',
                }}
              >
                <span>{secondaryLabel}</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
