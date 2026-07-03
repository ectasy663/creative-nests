import Link from 'next/link'
import { LogoSmall } from './Logo'

export function Footer() {
  return (
    <footer
      style={{
        background: 'rgba(8, 7, 13, 0.9)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '32px 28px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '24px',
      }}
    >
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        <LogoSmall />
        <span className="cn-syne" style={{ fontSize: '15px', fontWeight: 800, color: '#fff' }}>
          Creative <span style={{ background: 'linear-gradient(135deg, #6366f1, #d946ef)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Nests</span>
        </span>
      </Link>

      <div style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#6b7280' }}>
        We Create the Impossible — 2026
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="#" style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none', color: '#6366f1', transition: 'color 0.2s' }}>Instagram</a>
        <a href="#" style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none', color: '#d946ef', transition: 'color 0.2s' }}>WhatsApp</a>
        <a href="#" style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none', color: '#06b6d4', transition: 'color 0.2s' }}>Email</a>
      </div>
    </footer>
  )
}
