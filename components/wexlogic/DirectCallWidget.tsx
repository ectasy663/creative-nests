'use client'

import { useState } from 'react'

export function DirectCallWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 9999,
        fontFamily: "'Space Grotesk', sans-serif"
      }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-pulse {
          0%, 100% {
            box-shadow: 0 0 15px rgba(223, 183, 108, 0.4);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 25px rgba(184, 144, 71, 0.6);
            transform: scale(1.05);
          }
        }
        .pulse-button {
          animation: float-pulse 3s infinite ease-in-out;
        }
      `}} />

      {isOpen ? (
        <div
          className="glass-card"
          style={{
            padding: '20px',
            width: '260px',
            background: 'rgba(8, 7, 13, 0.95)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '16px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            animation: 'scaleUp 0.2s ease-out'
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#dfb76c', fontWeight: 700 }}>
              Direct Line
            </span>
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#9ca3af',
                cursor: 'pointer',
                fontSize: '14px',
                padding: '4px'
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseOut={(e) => (e.currentTarget.style.color = '#9ca3af')}
            >
              ✕
            </button>
          </div>

          <div style={{ fontSize: '13px', color: '#9ca3af', lineHeight: 1.5 }}>
            Have questions? Call or chat with our team directly.
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a 
              href="tel:+917737297548" 
              className="gradient-btn-primary"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '12px',
                borderRadius: '8px',
                fontSize: '11px',
                textAlign: 'center',
                textDecoration: 'none'
              }}
            >
              {/* Phone Icon */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call Us Now
            </a>

            <a 
              href="https://wa.me/917737297548" 
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn-secondary"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '12px',
                borderRadius: '8px',
                fontSize: '11px',
                textAlign: 'center',
                textDecoration: 'none',
                borderColor: 'rgba(223, 183, 108, 0.4)',
                color: '#dfb76c'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(223, 183, 108, 0.1)'
                e.currentTarget.style.borderColor = '#dfb76c'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                e.currentTarget.style.borderColor = 'rgba(223, 183, 108, 0.4)'
              }}
            >
              {/* WhatsApp Icon */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              WhatsApp Chat
            </a>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="pulse-button"
          aria-label="Direct Call Menu"
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #b89047 0%, #dfb76c 100%)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(223, 183, 108, 0.4)',
            transition: 'transform 0.2s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          {/* Phone Icon */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#08070d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </button>
      )}
    </div>
  )
}
