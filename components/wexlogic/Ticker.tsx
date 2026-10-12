'use client'

const items = [
  'CGI & VFX Ads',
  'Web & App Dev',
  'Brand Identity',
  'Event Planning & Mgmt',
  'SEO Growth',
  'Paid Meta & TikTok',
  'Bespoke CRM / ERP',
]

function TickerItem({ text, i }: { text: string; i: number }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center' }}>
      <span
        style={{
          fontFamily: "'Outfit', system-ui, sans-serif",
          fontSize: '15px',
          fontWeight: 800,
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
          color: i % 2 === 0 ? '#1E293B' : '#475569',
          padding: '0 20px',
        }}
      >
        {text}
      </span>
      <span
        style={{
          color: '#1E293B',
          padding: '0 8px',
          fontSize: '14px',
          fontWeight: 900,
          opacity: 0.4,
        }}
        aria-hidden="true"
      >
        /
      </span>
    </div>
  )
}

export function Ticker() {
  const doubled = [...items, ...items, ...items, ...items]

  return (
    <div
      style={{
        backgroundColor: '#FBBF24',
        borderBottom: '2px solid #1E293B',
        borderTop: '2px solid #1E293B',
        padding: '14px 0',
        overflow: 'hidden',
        boxShadow: '0 4px 0px rgba(30, 41, 59, 0.08)',
        position: 'relative',
        width: '100%',
      }}
      aria-hidden="true"
    >
      <div
        className="animate-ticker-ltr"
        style={{
          display: 'inline-flex',
          whiteSpace: 'nowrap',
          width: 'max-content',
          animation: 'tickerMoveLTR 22s linear infinite',
          willChange: 'transform',
        }}
      >
        {doubled.map((text, i) => (
          <TickerItem key={i} text={text} i={i} />
        ))}
      </div>
    </div>
  )
}
