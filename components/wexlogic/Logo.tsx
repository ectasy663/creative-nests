import Image from 'next/image'

export function Logo({ size = 40 }: { size?: number }) {
  return (
    <div style={{ position: 'relative', width: size, height: size, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <Image 
        src="/company-logo.png" 
        alt="WexLogic Logo" 
        fill
        sizes={`${size}px`}
        style={{ objectFit: 'contain' }}
        priority
      />
    </div>
  )
}

export function LogoSmall() {
  return (
    <div style={{ position: 'relative', width: 24, height: 24, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <Image 
        src="/company-logo.png" 
        alt="WexLogic Logo" 
        fill
        sizes="24px"
        style={{ objectFit: 'contain' }}
      />
    </div>
  )
}
