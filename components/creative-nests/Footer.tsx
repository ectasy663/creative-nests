import Link from 'next/link'
import { LogoSmall } from './Logo'

export function Footer() {
  const colors = ['#6366f1', '#d946ef', '#06b6d4']
  const hrefs = [
    'https://instagram.com/creativenests',
    'https://wa.me/919876543210',
    'mailto:hello@creativenests.in'
  ]

  return (
    <footer
      style={{
        background: 'rgba(8, 7, 13, 0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '80px 28px 40px',
        position: 'relative',
        zIndex: 10
      }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        .social-btn-0:hover { background: #6366f1 !important; color: #fff !important; box-shadow: 0 0 12px #6366f1; }
        .social-btn-1:hover { background: #d946ef !important; color: #fff !important; box-shadow: 0 0 12px #d946ef; }
        .social-btn-2:hover { background: #06b6d4 !important; color: #fff !important; box-shadow: 0 0 12px #06b6d4; }
        .footer-link {
          font-size: 13px;
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #fff !important;
        }
      `}} />

      <div 
        style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '48px',
          marginBottom: '56px'
        }}
      >
        {/* Col 1: Brand details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <LogoSmall />
            <span className="cn-syne" style={{ fontSize: '18px', fontWeight: 800, color: '#fff' }}>
              Creative <span style={{ background: 'linear-gradient(135deg, #6366f1, #d946ef)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Nests</span>
            </span>
          </Link>
          <p style={{ fontSize: '13px', lineHeight: 1.6, color: '#9ca3af', fontWeight: 400 }}>
            Premium production studio building high-performance digital platforms, CGI campaigns, and scalable custom enterprise systems.
          </p>
          <div style={{ display: 'flex', gap: '14px', marginTop: '8px' }}>
            {['Instagram', 'WhatsApp', 'Email'].map((social, idx) => (
              <a 
                key={social} 
                href={hrefs[idx]}
                target="_blank" 
                rel="noopener noreferrer"
                className={`social-btn-${idx}`}
                style={{ 
                  fontSize: '11px', 
                  letterSpacing: '1px', 
                  textTransform: 'uppercase', 
                  fontWeight: 700, 
                  textDecoration: 'none', 
                  color: colors[idx], 
                  border: `1.5px solid ${colors[idx]}`,
                  padding: '6px 14px',
                  borderRadius: '99px',
                  transition: 'all 0.2s ease',
                  background: 'transparent'
                }}
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div>
          <h3 className="cn-syne" style={{ fontSize: '15px', fontWeight: 800, color: '#fff', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px' }}>
            Quick Navigation
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { label: 'Home Page', href: '/' },
              { label: 'Selected Work', href: '/work' },
              { label: 'Our Services', href: '/services' },
              { label: 'Insights Blog', href: '/blog' },
              { label: 'Get In Touch', href: '/contact' }
            ].map((link) => (
              <li key={link.label}>
                <Link 
                  href={link.href} 
                  className="footer-link"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Services List */}
        <div>
          <h3 className="cn-syne" style={{ fontSize: '15px', fontWeight: 800, color: '#fff', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px' }}>
            Core Services
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { label: 'CGI & VFX Advertisements', href: '/services/cgi-vfx-ads' },
              { label: 'NextJS Web Engineering', href: '/services/web-app-dev' },
              { label: 'Custom CRM Automations', href: '/services/crm-systems' },
              { label: 'Enterprise ERP Systems', href: '/services/erp-solutions' },
              { label: 'High Intent SEO Campaigns', href: '/services/seo-marketing' }
            ].map((srv) => (
              <li key={srv.label}>
                <Link 
                  href={srv.href} 
                  className="footer-link"
                >
                  {srv.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Contact & Office Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 className="cn-syne" style={{ fontSize: '15px', fontWeight: 800, color: '#fff', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
            Contact & HQ
          </h3>
          <div style={{ fontSize: '13px', color: '#9ca3af', lineHeight: 1.6 }}>
            <div>Email: <span style={{ color: '#fff', fontWeight: 600 }}>hello@creativenests.in</span></div>
            <div style={{ marginTop: '4px' }}>Phone: <span style={{ color: '#fff', fontWeight: 600 }}>+91 98765 43210</span></div>
            <div style={{ marginTop: '4px' }}>Office: <span style={{ color: '#fff', fontWeight: 600 }}>Bangalore & Mumbai, India</span></div>
          </div>
          <div>
            <div 
              style={{ 
                background: 'rgba(16, 185, 129, 0.08)', 
                border: '1px solid rgba(16, 185, 129, 0.25)', 
                padding: '8px 16px', 
                borderRadius: '8px', 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
              <span style={{ fontSize: '10px', fontWeight: 700, color: '#10b981', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                Accepting Q3 Enquiries
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row Panel */}
      <div 
        style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          borderTop: '1px solid rgba(255, 255, 255, 0.06)', 
          paddingTop: '32px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: '20px'
        }}
      >
        <div style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#6b7280' }}>
          © WSCLogic {new Date().getFullYear()} — We Create the Impossible
        </div>
        <div style={{ display: 'flex', gap: '24px', fontSize: '11px' }}>
          <a href="#" className="text-[#6b7280] hover:text-white transition-colors duration-200" style={{ textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" className="text-[#6b7280] hover:text-white transition-colors duration-200" style={{ textDecoration: 'none' }}>Terms & Conditions</a>
        </div>
      </div>
    </footer>
  )
}
