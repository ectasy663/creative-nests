const items = [
  'CGI & VFX',
  'Branding',
  'Web & App Dev',
  'SEO & Marketing',
  'Video Editing',
  'Paid Ads',
]

function TickerItem({ text, i }: { text: string; i: number }) {
  return (
    <>
      <span
        className="cn-syne"
        style={{
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: i % 2 === 0 ? '#fff' : '#9ca3af',
          padding: '0 24px',
        }}
      >
        {text}
      </span>
      <span style={{ color: i % 2 === 0 ? '#d946ef' : '#06b6d4', padding: '0 8px', fontSize: '14px', textShadow: '0 0 8px rgba(217, 70, 239, 0.5)' }}>✦</span>
    </>
  )
}

export function Ticker() {
  // Duplicate items so the seamless loop works
  const doubled = [...items, ...items, ...items, ...items]

  return (
    <div
      style={{
        background: 'rgba(8, 7, 13, 0.65)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '16px 0',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      <div className="animate-ticker" style={{ display: 'inline-flex', whiteSpace: 'nowrap' }}>
        {doubled.map((text, i) => (
          <TickerItem key={i} text={text} i={i} />
        ))}
      </div>
    </div>
  )
}
