import Link from 'next/link'

interface CTABannerProps {
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  /** When true, hides the action buttons (used as a page intro) */
  introOnly?: boolean
}

function BgDecor() {
  return (
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.1 }} aria-hidden="true">
      <svg width="340" height="340" viewBox="0 0 280 280" fill="none">
        <circle cx="140" cy="140" r="120" stroke="#dfb76c" strokeWidth="2" strokeDasharray="200 60" />
        <circle cx="140" cy="140" r="70" stroke="#b89047" strokeWidth="1" />
        <line x1="56" y1="224" x2="140" y2="56" stroke="#e5c185" strokeWidth="3" />
        <line x1="140" y1="56" x2="224" y2="224" stroke="#e5c185" strokeWidth="3" />
      </svg>
    </div>
  )
}

export function CTABanner({
  primaryLabel = 'Book Free Call →',
  primaryHref = '/contact',
  secondaryLabel,
  secondaryHref,
  introOnly = false,
}: CTABannerProps) {
  return (
    <section
      style={{
        background: 'radial-gradient(circle at 50% 0%, rgba(223, 183, 108, 0.05) 0%, rgba(8, 7, 13, 0.95) 75%)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '80px 28px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <BgDecor />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            background: 'rgba(223, 183, 108, 0.08)',
            border: '1px solid rgba(223, 183, 108, 0.3)',
            borderRadius: '99px',
            display: 'inline-block',
            padding: '6px 18px',
            marginBottom: '24px',
          }}
        >
          <span style={{ fontSize: '9px', letterSpacing: '5px', textTransform: 'uppercase', fontWeight: 700, color: '#dfb76c' }}>
            Let&apos;s Work Together
          </span>
        </div>

        <div
          className="cn-syne"
          style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: '20px', letterSpacing: '-1px' }}
        >
          READY TO
          <br />
          <span style={{ background: 'linear-gradient(135deg, #dfb76c, #b89047)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>DOMINATE</span>
          <br />
          YOUR MARKET?
        </div>

        <div style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '36px' }}>
          One Free Call. Zero Risk. Pure Value.
        </div>

        {!introOnly && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link href={primaryHref} className="gradient-btn-primary">{primaryLabel}</Link>
            {secondaryLabel && secondaryHref && (
              <Link href={secondaryHref} className="glass-btn-secondary">{secondaryLabel}</Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
