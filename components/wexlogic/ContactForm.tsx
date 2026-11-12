'use client'

import { useState } from 'react'
import { Sparkles, ArrowRight, CheckCircle2, HelpCircle } from 'lucide-react'

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
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* CONTACT SECTION */}
      <section
        style={{
          backgroundColor: '#FFFDF5',
          padding: '16px 16px 40px',
          borderBottom: '2px solid #1E293B',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '1560px',
            margin: '0 auto',
            padding: '0 6px',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '24px', gap: '12px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <span className="badge-pill badge-yellow">
                <Sparkles size={13} className="text-[#1E293B]" />
                GET IN TOUCH
              </span>
            </div>
            <h1
              style={{
                fontFamily: "'Outfit', system-ui, sans-serif",
                fontSize: 'clamp(38px, 6vw, 64px)',
                fontWeight: 900,
                color: '#1E293B',
                letterSpacing: '-1px',
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Start Your{' '}
              <span
                style={{
                  backgroundColor: '#8B5CF6',
                  color: '#FFFFFF',
                  padding: '2px 14px',
                  borderRadius: '14px',
                  border: '2px solid #1E293B',
                  boxShadow: '3px 3px 0px #1E293B',
                  display: 'inline-block',
                  transform: 'rotate(-1deg)',
                }}
              >
                Journey
              </span>
            </h1>
            <div
              style={{
                fontFamily: "'Outfit', system-ui, sans-serif",
                fontSize: '13px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: '#64748B',
                fontWeight: 700,
              }}
            >
              Zero Risk · Pragmatic Value
            </div>
          </div>

          {/* Grid Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', marginTop: '48px' }}>
            {/* Info Panel */}
            <div
              className="sticker-card"
              style={{
                backgroundColor: '#FFFFFF',
                border: '2px solid #1E293B',
                borderRadius: '24px',
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                boxShadow: '6px 6px 0px #1E293B',
              }}
            >
              <div>
                <h2
                  style={{
                    fontFamily: "'Outfit', system-ui, sans-serif",
                    fontSize: '24px',
                    fontWeight: 800,
                    color: '#1E293B',
                    marginBottom: '8px',
                  }}
                >
                  Contact Details
                </h2>
                <div style={{ width: '48px', height: '4px', backgroundColor: '#FBBF24', borderRadius: '9999px', border: '1px solid #1E293B' }} />
              </div>

              {[
                { label: 'Email Address', value: 'info@wexlogic.com', link: 'mailto:info@wexlogic.com', badge: '#8B5CF6' },
                { label: 'WhatsApp Chat', value: '+91 77372 97548', link: 'https://wa.me/917737297548', badge: '#34D399' },
                { label: 'Social Channels', value: '@wexlogicofficial', link: 'https://www.instagram.com/wexlogicofficial?utm_source=qr&igsh=cGo5dmxuaDJqejdy', badge: '#F472B6' },
                { label: 'Primary Studio', value: 'Rajasthan — Serving Global Accounts', link: null, badge: '#FBBF24' },
              ].map(({ label, value, link, badge }) => (
                <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: badge }} />
                    <span style={{ fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#64748B', fontWeight: 700, fontFamily: "'Outfit'" }}>
                      {label}
                    </span>
                  </div>
                  {link ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: 'none',
                        color: '#1E293B',
                        fontFamily: "'Outfit', system-ui, sans-serif",
                        fontSize: '17px',
                        fontWeight: 700,
                      }}
                      className="hover:text-purple-600 hover:underline"
                    >
                      {value}
                    </a>
                  ) : (
                    <div style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontSize: '17px', fontWeight: 700, color: '#1E293B' }}>
                      {value}
                    </div>
                  )}
                </div>
              ))}

              <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                <span className="badge-pill badge-mint" style={{ fontSize: '11px' }}>
                  WexLogic Digital Studio
                </span>
              </div>
            </div>

            {/* Form Panel */}
            <div
              className="sticker-card"
              style={{
                backgroundColor: '#FFFFFF',
                border: '2px solid #1E293B',
                borderRadius: '24px',
                padding: '36px',
                boxShadow: '6px 6px 0px #1E293B',
              }}
            >
              {status === 'success' ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '320px', textAlign: 'center', gap: '18px' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: '#ECFDF5',
                      border: '2px solid #1E293B',
                      boxShadow: '3px 3px 0px #1E293B',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '28px',
                      color: '#059669',
                    }}
                  >
                    ✓
                  </div>
                  <h3 style={{ fontFamily: "'Outfit'", fontSize: '24px', fontWeight: 800, color: '#1E293B' }}>Message Sent!</h3>
                  <p style={{ fontSize: '15px', color: '#64748B', lineHeight: 1.6, maxWidth: '320px', fontWeight: 500 }}>
                    Thank you! We received your inquiry and our team will get back to you within 12 hours.
                  </p>
                  <button onClick={() => setStatus('idle')} className="candy-btn-secondary" style={{ padding: '10px 24px', fontSize: '13px', marginTop: '12px' }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label htmlFor="name" style={{ fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#1E293B', fontWeight: 800, fontFamily: "'Outfit'" }}>
                        Name
                      </label>
                      <input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange} placeholder="Your name" className="playful-input" />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label htmlFor="email" style={{ fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#1E293B', fontWeight: 800, fontFamily: "'Outfit'" }}>
                        Email
                      </label>
                      <input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="you@example.com" className="playful-input" />
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label htmlFor="subject" style={{ fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#1E293B', fontWeight: 800, fontFamily: "'Outfit'" }}>
                      Subject
                    </label>
                    <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleInputChange} placeholder="What's this about?" className="playful-input" />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label htmlFor="message" style={{ fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#1E293B', fontWeight: 800, fontFamily: "'Outfit'" }}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, goals, or specifications..."
                      className="playful-input"
                      style={{ resize: 'vertical', minHeight: '120px', lineHeight: 1.6 }}
                    />
                  </div>

                  {validationError && (
                    <div style={{ color: '#DC2626', fontSize: '13px', fontWeight: 700, fontFamily: "'Outfit'" }}>
                      ⚠️ {validationError}
                    </div>
                  )}

                  {status === 'error' && (
                    <div style={{ color: '#DC2626', fontSize: '13px', fontWeight: 700, fontFamily: "'Outfit'" }}>
                      ❌ There was a problem submitting your message. Please try again or WhatsApp us.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="candy-btn-primary"
                    style={{
                      alignSelf: 'flex-start',
                      marginTop: '8px',
                      opacity: status === 'submitting' ? 0.7 : 1,
                    }}
                  >
                    <span>{status === 'submitting' ? 'Sending Message...' : 'Send Message'}</span>
                    <div
                      style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        backgroundColor: '#FFFFFF',
                        color: '#1E293B',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <ArrowRight size={13} strokeWidth={3} />
                    </div>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section
        style={{
          padding: '48px 16px',
          width: '100%',
          maxWidth: '1560px',
          margin: '0 auto',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span className="badge-pill badge-pink">
              <HelpCircle size={13} className="text-white" />
              CLEAR ANSWERS
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Outfit', system-ui, sans-serif",
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 900,
              color: '#1E293B',
              letterSpacing: '-1px',
            }}
          >
            Frequently Asked{' '}
            <span
              style={{
                backgroundColor: '#FBBF24',
                padding: '2px 14px',
                borderRadius: '12px',
                border: '2px solid #1E293B',
                boxShadow: '3px 3px 0px #1E293B',
                display: 'inline-block',
                transform: 'rotate(1deg)',
              }}
            >
              Questions
            </span>
          </h2>
        </div>

        <div style={{ maxWidth: '1080px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqData.map((faq, index) => {
            const isOpen = activeFaq === index
            return (
              <div
                key={index}
                className="sticker-card"
                style={{
                  backgroundColor: isOpen ? '#FEF08A' : '#FFFFFF',
                  border: '2px solid #1E293B',
                  borderRadius: '18px',
                  padding: '22px 26px',
                  boxShadow: isOpen ? '5px 5px 0px #1E293B' : '3px 3px 0px #1E293B',
                  cursor: 'pointer',
                  transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
                onClick={() => setActiveFaq(isOpen ? null : index)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                  <h3
                    style={{
                      fontFamily: "'Outfit', system-ui, sans-serif",
                      fontSize: '16px',
                      fontWeight: 800,
                      color: '#1E293B',
                      margin: 0,
                    }}
                  >
                    {faq.question}
                  </h3>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: '#FFFFFF',
                      border: '1.5px solid #1E293B',
                      boxShadow: '1.5px 1.5px 0px #1E293B',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '16px',
                      fontWeight: 900,
                      color: '#1E293B',
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                      transition: 'transform 0.2s ease',
                      flexShrink: 0,
                    }}
                  >
                    ＋
                  </div>
                </div>
                {isOpen && (
                  <div
                    style={{
                      marginTop: '14px',
                      fontSize: '14px',
                      lineHeight: 1.65,
                      color: '#334155',
                      borderTop: '2px solid #1E293B',
                      paddingTop: '14px',
                      fontWeight: 500,
                    }}
                  >
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
