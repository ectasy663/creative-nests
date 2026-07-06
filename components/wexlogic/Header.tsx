'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from './Logo'
import { useUIStore } from '@/lib/store'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const pathname = usePathname()
  const isMobileMenuOpen = useUIStore((s) => s.isMobileMenuOpen)
  const toggleMobileMenu = useUIStore((s) => s.toggleMobileMenu)
  const closeMobileMenu = useUIStore((s) => s.closeMobileMenu)

  return (
    <>
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
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }} onClick={closeMobileMenu}>
          <Logo size={40} />
          <div>
            <div className="cn-syne" style={{ fontSize: '18px', fontWeight: 800, color: '#fff', letterSpacing: '1px' }}>
              <span style={{ background: 'linear-gradient(135deg, #dfb76c, #b89047)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>WexLogic</span>
            </div>
            <div style={{ fontSize: '8px', letterSpacing: '4px', textTransform: 'uppercase', color: '#dfb76c', fontWeight: 600 }}>
              IT company
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '24px', alignItems: 'center' }} aria-label="Main navigation">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))
            return (
              <Link key={href} href={href} className={isActive ? 'nav-link-active' : 'nav-link'}>
                {label}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className="gradient-btn-primary"
            style={{ padding: '10px 24px', fontSize: '10px', boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)' }}
          >
            Free Call
          </Link>
        </nav>

        {/* Hamburger button — mobile only */}
        <button
          className="hamburger-btn"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMobileMenu}
          style={{
            display: 'none',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '8px',
            padding: '8px 10px',
            cursor: 'pointer',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          <span style={{ width: 22, height: 2, background: '#dfb76c', display: 'block', borderRadius: 2, transition: 'all 0.25s', transform: isMobileMenuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <span style={{ width: 22, height: 2, background: '#dfb76c', display: 'block', borderRadius: 2, transition: 'all 0.25s', opacity: isMobileMenuOpen ? 0 : 1 }} />
          <span style={{ width: 22, height: 2, background: '#dfb76c', display: 'block', borderRadius: 2, transition: 'all 0.25s', transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </header>

      {/* Mobile drawer */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'fixed', top: 73, left: 0, right: 0, zIndex: 49,
            background: 'rgba(8, 7, 13, 0.97)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            padding: '24px 28px 32px',
            display: 'flex', flexDirection: 'column', gap: '8px',
            animation: 'fadeIn 0.2s ease'
          }}
        >
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))
            return (
              <Link
                key={href}
                href={href}
                onClick={closeMobileMenu}
                className={isActive ? 'nav-link-active' : 'nav-link'}
                style={{ padding: '12px 0', fontSize: '15px', display: 'block', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
              >
                {label}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className="gradient-btn-primary"
            onClick={closeMobileMenu}
            style={{ marginTop: '12px', textAlign: 'center', padding: '14px', fontSize: '11px', letterSpacing: '2px' }}
          >
            Book Free Call
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
