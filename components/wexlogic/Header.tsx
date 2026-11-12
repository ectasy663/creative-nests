'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from './Logo'
import { useUIStore } from '@/lib/store'
import { ArrowRight } from 'lucide-react'

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
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        style={{
          backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.96)' : '#0F172A',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'sticky',
          top: 0,
          zIndex: 50,
          transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
          boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.35)' : 'none',
        }}
      >
        <div
          style={{
            maxWidth: '1560px',
            margin: '0 auto',
            width: '100%',
            padding: '0 16px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
          }}
        >
          {/* Brand Identity */}
          <Link
            href="/"
            style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
            onClick={closeMobileMenu}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Logo size={32} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  fontFamily: "'Outfit', system-ui, sans-serif",
                  fontSize: '21px',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '-0.5px',
                  lineHeight: 1,
                }}
              >
                WexLogic
              </span>

            </div>
          </Link>

          {/* Quiet Desktop Navigation */}
          <nav
            className="desktop-nav"
            style={{
              display: 'flex',
              gap: '4px',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '12px',
              padding: '4px 6px',
            }}
            aria-label="Main navigation"
          >
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))
              return (
                <Link
                  key={href}
                  href={href}
                  style={{
                    fontFamily: "'Outfit', system-ui, sans-serif",
                    fontSize: '13.5px',
                    fontWeight: isActive ? 700 : 600,
                    textDecoration: 'none',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    color: isActive ? '#0F172A' : '#E2E8F0',
                    backgroundColor: isActive ? '#FBBF24' : 'transparent',
                    border: isActive ? '1px solid #FBBF24' : '1px solid transparent',
                    boxShadow: isActive ? '0 1px 4px rgba(0, 0, 0, 0.2)' : 'none',
                    transition: 'all 0.15s ease',
                  }}
                  className={isActive ? '' : 'hover:bg-white/10 hover:text-white'}
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop Action */}
          <div className="desktop-cta" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link
              href="/contact"
              className="candy-btn-primary"
              style={{
                padding: '8px 18px',
                fontSize: '13px',
                boxShadow: '2px 2px 0px rgba(0, 0, 0, 0.4)',
              }}
            >
              <span>Book a Call</span>
              <ArrowRight size={13} strokeWidth={2.5} />
            </Link>
          </div>

          {/* Hamburger button — mobile only */}
          <button
            className="hamburger-btn"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
            style={{
              display: 'none',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '8px',
              padding: '8px',
              cursor: 'pointer',
              flexDirection: 'column',
              gap: '4px',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
            }}
          >
            <span
              style={{
                width: 18,
                height: 2,
                backgroundColor: '#FFFFFF',
                display: 'block',
                borderRadius: 1,
                transition: 'all 0.2s ease',
                transform: isMobileMenuOpen ? 'rotate(45deg) translateY(4.5px)' : 'none',
              }}
            />
            <span
              style={{
                width: 18,
                height: 2,
                backgroundColor: '#FFFFFF',
                display: 'block',
                borderRadius: 1,
                transition: 'all 0.2s ease',
                opacity: isMobileMenuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                width: 18,
                height: 2,
                backgroundColor: '#FFFFFF',
                display: 'block',
                borderRadius: 1,
                transition: 'all 0.2s ease',
                transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-4.5px)' : 'none',
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 61,
            left: 0,
            right: 0,
            zIndex: 49,
            backgroundColor: '#0F172A',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 12px 28px rgba(0, 0, 0, 0.45)',
            padding: '16px 20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            animation: 'fadeIn 0.15s ease',
          }}
        >
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))
            return (
              <Link
                key={href}
                href={href}
                onClick={closeMobileMenu}
                style={{
                  padding: '10px 14px',
                  fontSize: '14.5px',
                  fontWeight: isActive ? 700 : 600,
                  fontFamily: "'Outfit', system-ui, sans-serif",
                  borderRadius: '10px',
                  border: isActive ? '1px solid #FBBF24' : '1px solid rgba(255, 255, 255, 0.08)',
                  backgroundColor: isActive ? '#FBBF24' : 'rgba(255, 255, 255, 0.04)',
                  color: isActive ? '#0F172A' : '#E2E8F0',
                  boxShadow: isActive ? '0 1px 4px rgba(0, 0, 0, 0.2)' : 'none',
                  textDecoration: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>{label}</span>
                {isActive && (
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      backgroundColor: '#0F172A',
                      display: 'inline-block',
                    }}
                  />
                )}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className="candy-btn-primary"
            onClick={closeMobileMenu}
            style={{
              marginTop: '8px',
              textAlign: 'center',
              padding: '11px',
              fontSize: '14px',
              boxShadow: '2px 2px 0px rgba(0, 0, 0, 0.4)',
              justifyContent: 'center',
            }}
          >
            <span>Book a Call</span>
            <ArrowRight size={14} strokeWidth={2.5} />
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
