'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from './Logo'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header
      style={{
        background: 'rgba(8, 7, 13, 0.5)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '16px 28px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
        <Logo size={40} />
        <div>
          <div className="cn-syne" style={{ fontSize: '18px', fontWeight: 800, color: '#fff', letterSpacing: '1px' }}>
            <span style={{ background: 'linear-gradient(135deg, #6366f1, #d946ef)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>WSCLogic</span>
          </div>
          <div style={{ fontSize: '8px', letterSpacing: '4px', textTransform: 'uppercase', color: '#a855f7', fontWeight: 600 }}>
            Premium Agency
          </div>
        </div>
      </Link>

      <nav style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }} aria-label="Main navigation">
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))
          return (
            <Link
              key={href}
              href={href}
              className={isActive ? 'nav-link-active' : 'nav-link'}
            >
              {label}
            </Link>
          )
        })}
        <Link
          href="/contact"
          className="gradient-btn-primary"
          style={{
            padding: '10px 24px',
            fontSize: '10px',
            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
          }}
        >
          Free Call
        </Link>
      </nav>
    </header>
  )
}
