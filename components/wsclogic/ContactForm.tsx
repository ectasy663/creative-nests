'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What is the typical turnaround time for a CGI video?",
    answer: "A standard 15-second high-fidelity CGI campaign typically takes 10 to 14 days. This covers storyboarding, texturing 3D digital twins, lighting setup, and final frame compositions."
  },
  {
    question: "Do you build custom integrations for CRM and ERP?",
    answer: "Yes. We build bespoke client pipelines and logistics worksheets from scratch using Next.js and secure APIs, or integrate Salesforce/HubSpot to automate messaging triggers."
  },
  {
    question: "What is your pricing model for engineering platforms?",
    answer: "We structure projects on milestone-based scoping. You receive a transparent outline of requirements and split payments across staging check-ins before final production release."
  },
  {
    question: "Do you sign Non-Disclosure Agreements (NDA)?",
    answer: "Absolutely. We protect intellectual property and telemetry data for all clients. NDAs are completed before technical specifications or asset sheets are exchanged."
  },
  {
    question: "How does the SEO and marketing methodology work?",
    answer: "We perform a technical SEO audit to fix codebase-level crawlability issues, map high-intent commercial keywords, and publish optimized content to capture organic traffic without dependency on paid ads."
  },
  {
    question: "What technologies do you use for web and app development?",
    answer: "We build our digital applications using Next.js, React, TypeScript, TailwindCSS, and Node.js. For database systems, we integrate robust architectures like PostgreSQL, Prisma, and serverless edge databases to ensure sub-second rendering speeds."
  },
  {
    question: "Can you optimize or redesign our existing legacy systems?",
    answer: "Yes. We specialize in refactoring slow monolithic sites into modern edge-rendered applications, migrating databases with zero downtime, and streamlining operational ERP flow sheets."
  },
  {
    question: "Do we get ownership of the source code and assets?",
    answer: "Absolutely. Once the project milestones are completed and approved, full ownership of the source code, design systems, CGI project files, and marketing assets is transferred entirely to your organization."
  },
  {
    question: "How do you ensure project updates and communication?",
    answer: "We operate on staging-based workflows. We set up private staging URLs where you can inspect real-time progress, run cohort check-ins, and communicate directly with our engineering team via dedicated Slack or WhatsApp channels."
  }
]

export function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [validationError, setValidationError] = useState('')
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setValidationError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simple validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setValidationError('Please fill out Name, Email, and Message.')
      return
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setValidationError('Please enter a valid email address.')
      return
    }

    setStatus('submitting')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <>
      {/* CONTACT SECTION */}
      <section style={{ background: 'rgba(8, 7, 13, 0.45)', padding: '80px 28px 48px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div style={{ background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)', display: 'inline-block', padding: '6px 18px', borderRadius: '99px', marginBottom: '16px' }}>
                <span style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700, color: '#6366f1' }}>Get In Touch</span>
              </div>
              <h1 className="cn-bebas" style={{ fontSize: 'clamp(38px, 6vw, 64px)', letterSpacing: '1px', color: '#fff', lineHeight: 1 }}>
                Start Your <span style={{ background: 'linear-gradient(135deg, #6366f1, #d946ef)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Journey</span>
              </h1>
            </div>
            <div style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#9ca3af', fontWeight: 600, textAlign: 'right' }}>
              Zero Risk.<br />Pragmatic Value.
            </div>
          </div>

          {/* Grid Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginTop: '44px' }}>

            {/* Info Panel */}
            <div className="glass-card" style={{ padding: '36px', display: 'flex', flexDirection: 'column', gap: '28px', background: 'rgba(255, 255, 255, 0.02)' }}>
              <div>
                <h2 className="cn-syne" style={{ fontSize: '24px', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>Contact Details</h2>
                <div style={{ width: '40px', height: '3px', background: '#6366f1', borderRadius: '99px' }} />
              </div>
              {[
                { label: 'Email Address', value: 'hello@wsclogic.com', link: 'mailto:hello@wsclogic.com' },
                { label: 'WhatsApp Chat', value: '+91 98765 43210', link: 'https://wa.me/919876543210' },
                { label: 'Social Channels', value: '@wsclogic', link: 'https://instagram.com/wsclogic' },
                { label: 'Primary Office', value: 'Bangalore — Serving Global Accounts', link: null },
              ].map(({ label, value, link }) => (
                <div key={label}>
                  <div style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#d946ef', fontWeight: 700, marginBottom: '4px' }}>{label}</div>
                  {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#fff', transition: 'color 0.2s' }} onMouseOver={(e) => (e.currentTarget.style.color = '#6366f1')} onMouseOut={(e) => (e.currentTarget.style.color = '#fff')}>
                      <div className="cn-syne" style={{ fontSize: '17px', fontWeight: 700 }}>{value}</div>
                    </a>
                  ) : (
                    <div className="cn-syne" style={{ fontSize: '17px', fontWeight: 700, color: '#fff' }}>{value}</div>
                  )}
                </div>
              ))}
              <div style={{ marginTop: 'auto' }}>
                <div style={{ background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.25)', padding: '8px 16px', borderRadius: '6px', display: 'inline-block' }}>
                  <span style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: '#6366f1', fontWeight: 700 }}>WSCLogic Digital Studio</span>
                </div>
              </div>
            </div>

            {/* Form Panel */}
            <div className="glass-card" style={{ padding: '36px' }}>
              {status === 'success' ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px', textAlign: 'center', gap: '20px' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', border: '2px solid #10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', color: '#10b981', animation: 'scaleUp 0.3s ease' }}>✓</div>
                  <h3 className="cn-syne" style={{ fontSize: '22px', fontWeight: 800, color: '#fff' }}>Message Sent!</h3>
                  <p style={{ fontSize: '14px', color: '#9ca3af', lineHeight: 1.6, maxWidth: '300px' }}>
                    Thank you. We have received your query and will reach out to you within the next 12 hours.
                  </p>
                  <button onClick={() => setStatus('idle')} className="glass-btn-secondary" style={{ padding: '10px 24px', fontSize: '10px', marginTop: '12px' }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label htmlFor="name" style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#9ca3af', fontWeight: 700 }}>Name</label>
                      <input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange} placeholder="Your name" className="neon-input" />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label htmlFor="email" style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#9ca3af', fontWeight: 700 }}>Email</label>
                      <input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="you@example.com" className="neon-input" />
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label htmlFor="subject" style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#9ca3af', fontWeight: 700 }}>Subject</label>
                    <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleInputChange} placeholder="What's this about?" className="neon-input" />
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label htmlFor="message" style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#9ca3af', fontWeight: 700 }}>Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, timelines, or specifications..."
                      className="neon-input"
                      style={{ resize: 'vertical', minHeight: '120px', lineHeight: 1.6 }}
                    />
                  </div>

                  {validationError && (
                    <div style={{ color: '#ef4444', fontSize: '12px', fontWeight: 600 }}>
                      ⚠️ {validationError}
                    </div>
                  )}

                  {status === 'error' && (
                    <div style={{ color: '#ef4444', fontSize: '12px', fontWeight: 600 }}>
                      ❌ There was a problem submitting your message. Please try again.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="gradient-btn-primary"
                    style={{
                      alignSelf: 'flex-start',
                      border: 'none',
                      cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                      marginTop: '10px',
                      opacity: status === 'submitting' ? 0.7 : 1
                    }}
                  >
                    {status === 'submitting' ? 'Sending Message...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{ padding: '64px 28px 80px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div style={{ background: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.3)', display: 'inline-block', padding: '6px 16px', borderRadius: '99px', marginBottom: '16px' }}>
            <span style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700, color: '#a855f7' }}>FAQ</span>
          </div>
          <h2 className="cn-bebas" style={{ fontSize: '38px', color: '#fff', letterSpacing: '1px' }}>
            Frequently Asked <span style={{ background: 'linear-gradient(135deg, #a855f7, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Questions</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqData.map((faq, index) => {
            const isOpen = activeFaq === index
            return (
              <div 
                key={index} 
                className="glass-card" 
                style={{ 
                  padding: '24px 28px', 
                  cursor: 'pointer',
                  transition: 'background 0.3s ease, border-color 0.3s'
                }}
                onClick={() => setActiveFaq(isOpen ? null : index)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 className="cn-syne" style={{ fontSize: '15px', fontWeight: 700, color: '#fff', margin: 0 }}>
                    {faq.question}
                  </h3>
                  <span style={{ fontSize: '18px', color: '#06b6d4', transition: 'transform 0.3s ease', transform: isOpen ? 'rotate(45deg)' : 'none' }}>
                    ＋
                  </span>
                </div>
                {isOpen && (
                  <div style={{ marginTop: '16px', fontSize: '13px', lineHeight: 1.7, color: '#9ca3af', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px' }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
