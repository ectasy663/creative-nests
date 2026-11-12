import Link from 'next/link'
import { LogoSmall } from './Logo'

export function Footer() {
  const socials = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/wexlogicofficial?utm_source=qr&igsh=cGo5dmxuaDJqejdy',
      bg: '#F472B6',
      color: '#FFFFFF',
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/917737297548',
      bg: '#34D399',
      color: '#1E293B',
    },
    {
      name: 'Email',
      href: 'mailto:info@wexlogic.com',
      bg: '#8B5CF6',
      color: '#FFFFFF',
    },
  ]

  return (
    <footer
      style={{
        backgroundColor: '#0F172A',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '52px 16px 32px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1560px',
          margin: '0 auto',
          padding: '0 6px',
          boxSizing: 'border-box',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          marginBottom: '44px',
        }}
      >
        {/* Col 1: Brand details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <LogoSmall />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Outfit', system-ui, sans-serif",
                  fontSize: '22px',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  letterSpacing: '-0.5px',
                  lineHeight: 1.1,
                }}
              >
                WexLogic
              </div>
            </div>
          </Link>
          <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#94A3B8', fontWeight: 500 }}>
            Next-gen IT studio building high-performance digital platforms, CGI campaigns, and scalable custom enterprise systems.
          </p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '4px', flexWrap: 'wrap' }}>
            {socials.map((social) => {
              const isEmail = social.name === 'Email'
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target={isEmail ? undefined : '_blank'}
                  rel={isEmail ? undefined : 'noopener noreferrer'}
                  style={{
                    fontSize: '12px',
                    letterSpacing: '0.5px',
                    fontWeight: 800,
                    fontFamily: "'Outfit', system-ui, sans-serif",
                    textDecoration: 'none',
                    color: social.color,
                    backgroundColor: social.bg,
                    border: '1.5px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '2px 2px 0px rgba(0, 0, 0, 0.4)',
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                  className="hover:-translate-y-0.5 active:translate-y-0.5"
                >
                  {social.name}
                </a>
              )
            })}
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div>
          <h3
            style={{
              fontFamily: "'Outfit', system-ui, sans-serif",
              fontSize: '15px',
              fontWeight: 800,
              color: '#F8FAFC',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '18px',
            }}
          >
            Quick Navigation
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { label: 'Home Page', href: '/' },
              { label: 'Selected Work', href: '/work' },
              { label: 'Our Services', href: '/services' },
              { label: 'Insights Blog', href: '/blog' },
              { label: 'Get In Touch', href: '/contact' },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  style={{
                    fontSize: '14px',
                    color: '#94A3B8',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  className="hover:text-white hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Services List */}
        <div>
          <h3
            style={{
              fontFamily: "'Outfit', system-ui, sans-serif",
              fontSize: '15px',
              fontWeight: 800,
              color: '#F8FAFC',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '18px',
            }}
          >
            Core Services
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { label: 'CGI & VFX Advertisements', href: '/services/cgi-vfx-ads' },
              { label: 'Next.js Web Engineering', href: '/services/web-app-dev' },
              { label: 'Custom CRM Automations', href: '/services/crm-systems' },
              { label: 'Enterprise ERP Systems', href: '/services/erp-solutions' },
              { label: 'High Intent SEO Campaigns', href: '/services/seo-marketing' },
            ].map((srv) => (
              <li key={srv.label}>
                <Link
                  href={srv.href}
                  style={{
                    fontSize: '14px',
                    color: '#94A3B8',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  className="hover:text-white hover:underline"
                >
                  {srv.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Contact & Office Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3
            style={{
              fontFamily: "'Outfit', system-ui, sans-serif",
              fontSize: '15px',
              fontWeight: 800,
              color: '#F8FAFC',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '2px',
            }}
          >
            Contact & HQ
          </h3>
          <div style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.6, fontWeight: 500 }}>
            <div>Email: <span style={{ color: '#F8FAFC', fontWeight: 700 }}>info@wexlogic.com</span></div>
            <div style={{ marginTop: '4px' }}>Phone: <span style={{ color: '#F8FAFC', fontWeight: 700 }}>+91 77372 97548</span></div>
            <div style={{ marginTop: '4px' }}>Office: <span style={{ color: '#F8FAFC', fontWeight: 700 }}>Rajasthan, India</span></div>
          </div>
          <div>
            <div
              style={{
                backgroundColor: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.35)',
                padding: '6px 12px',
                borderRadius: '12px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981' }} />
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#34D399', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: "'Outfit'" }}>
                Accepting Q3 Enquiries
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row Panel */}
      <div
        style={{
          width: '100%',
          maxWidth: '1560px',
          margin: '0 auto',
          padding: '24px 6px 0',
          boxSizing: 'border-box',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <div style={{ fontSize: '13px', fontWeight: 600, color: '#64748B', fontFamily: "'Outfit'" }}>
          © WexLogic {new Date().getFullYear()} — We Create the Impossible
        </div>
        <div style={{ display: 'flex', gap: '20px', fontSize: '13px', fontWeight: 600 }}>
          <a href="#" style={{ color: '#64748B', textDecoration: 'none' }} className="hover:text-slate-300">
            Privacy Policy
          </a>
          <a href="#" style={{ color: '#64748B', textDecoration: 'none' }} className="hover:text-slate-300">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  )
}
