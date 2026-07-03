export function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="17" stroke="#6366f1" strokeWidth="3" strokeDasharray="70 20" strokeLinecap="round" />
      <line x1="9" y1="31" x2="20" y2="9" stroke="#d946ef" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="20" y1="9" x2="31" y2="31" stroke="#d946ef" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="9" y1="31" x2="31" y2="31" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 4" />
    </svg>
  )
}

export function LogoSmall() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="#6366f1" strokeWidth="2" strokeDasharray="22 8" strokeLinecap="round" />
      <line x1="5" y1="19" x2="12" y2="5" stroke="#d946ef" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="12" y1="5" x2="19" y2="19" stroke="#d946ef" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}
