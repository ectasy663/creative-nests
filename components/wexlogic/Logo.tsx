export function Logo({ size = 40 }: { size?: number }) {
  return (
    <div style={{ position: 'relative', width: size, height: size, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <img 
        src="/company-logo.png" 
        alt="WexLogic Logo" 
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </div>
  )
}

export function LogoSmall() {
  return (
    <div style={{ position: 'relative', width: 24, height: 24, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <img 
        src="/company-logo.png" 
        alt="WexLogic Logo" 
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </div>
  )
}
