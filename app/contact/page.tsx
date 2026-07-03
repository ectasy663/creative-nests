import { Header } from '@/components/creative-nests/Header'
import { Footer } from '@/components/creative-nests/Footer'
import { VideoBackground } from '@/components/creative-nests/VideoBackground'

export const metadata = { title: 'Contact — Creative Nests' }

export default function ContactPage() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', color: '#f3f4f6' }}>
      <VideoBackground src="/Brutalist_IT_company_hero_video_202607032332_gwr_video_mvp.mp4" />
      
      <Header />

      {/* CONTACT SECTION */}
      <section style={{ background: 'rgba(8, 7, 13, 0.45)', padding: '80px 28px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <div style={{ background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)', display: 'inline-block', padding: '6px 16px', borderRadius: '99px', marginBottom: '16px' }}>
                <span style={{ fontSize: '9px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700, color: '#6366f1' }}>Get In Touch</span>
              </div>
              <div className="cn-bebas" style={{ fontSize: 'clamp(38px, 6vw, 64px)', letterSpacing: '1px', color: '#fff', lineHeight: 0.9 }}>
                Start Your <span style={{ background: 'linear-gradient(135deg, #6366f1, #d946ef)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Journey</span>
              </div>
            </div>
            <div style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#9ca3af', fontWeight: 600, textAlign: 'right' }}>
              Zero Risk.<br />Pure Value.
            </div>
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginTop: '44px' }}>

            {/* Info Panel */}
            <div className="glass-card" style={{ padding: '36px', display: 'flex', flexDirection: 'column', gap: '28px', background: 'rgba(255, 255, 255, 0.02)' }}>
              <div>
                <div className="cn-syne" style={{ fontSize: '22px', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>Contact Details</div>
                <div style={{ width: '40px', height: '3px', background: '#6366f1', borderRadius: '99px' }} />
              </div>
              {[
                { label: 'Email',    value: 'hello@creativenests.in' },
                { label: 'WhatsApp', value: '+91 98765 43210' },
                { label: 'Instagram', value: '@creativenests' },
                { label: 'Based In', value: 'India — Serving Worldwide' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: '#d946ef', fontWeight: 700, marginBottom: '4px' }}>{label}</div>
                  <div className="cn-syne" style={{ fontSize: '16px', fontWeight: 700, color: '#fff' }}>{value}</div>
                </div>
              ))}
              <div style={{ marginTop: 'auto' }}>
                <div style={{ background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.2)', padding: '6px 16px', borderRadius: '4px', display: 'inline-block' }}>
                  <span style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: '#6366f1', fontWeight: 700 }}>India&apos;s #1 Creative Agency</span>
                </div>
              </div>
            </div>

            {/* Form Panel */}
            <div className="glass-card" style={{ padding: '36px' }}>
              <form action="#" method="post" noValidate style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <FormField id="name"  label="Name"  type="text"  placeholder="Your full name" />
                  <FormField id="email" label="Email" type="email" placeholder="you@example.com" />
                </div>
                <FormField id="subject" label="Subject" type="text" placeholder="What's this about?" />
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="message" style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: '#9ca3af', fontWeight: 700 }}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell us about your project, goals, or any questions..."
                    className="neon-input"
                    style={{
                      resize: 'vertical',
                      minHeight: '120px',
                      lineHeight: 1.6,
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="gradient-btn-primary"
                  style={{
                    alignSelf: 'flex-start',
                    border: 'none',
                    cursor: 'pointer',
                    marginTop: '12px',
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function FormField({
  id, label, type, placeholder,
}: {
  id: string; label: string; type: string; placeholder: string
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label htmlFor={id} style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: '#9ca3af', fontWeight: 700 }}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="neon-input"
      />
    </div>
  )
}
