'use client'

import { useState, useEffect } from 'react'

const phrases = [
  'We Build Digital Experiences',
  'We Engineer Intelligent Solutions',
  'We Plan & Produce Grand Events',
  'We Transform Ideas Into Reality',
  'We Create Powerful Web Platforms',
]

export function TypewriterText() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]
    const typingSpeed = isDeleting ? 38 : 75
    const pauseTime = isDeleting ? 300 : 1800

    if (!isDeleting && displayedText === currentPhrase) {
      const timer = setTimeout(() => setIsDeleting(true), pauseTime)
      return () => clearTimeout(timer)
    }

    if (isDeleting && displayedText === '') {
      setIsDeleting(false)
      setPhraseIndex((prev) => (prev + 1) % phrases.length)
      return
    }

    const timer = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? currentPhrase.substring(0, prev.length - 1)
          : currentPhrase.substring(0, prev.length + 1)
      )
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, phraseIndex])

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '18px',
        minHeight: '38px',
        backgroundColor: '#FFFFFF',
        border: '2px solid #1E293B',
        borderRadius: '12px',
        padding: '6px 14px',
        boxShadow: '3px 3px 0px #1E293B',
        maxWidth: '100%',
        boxSizing: 'border-box',
      }}
      aria-live="polite"
    >
      <span
        style={{
          fontFamily: "'Outfit', system-ui, sans-serif",
          fontSize: '11px',
          fontWeight: 900,
          backgroundColor: '#8B5CF6',
          color: '#FFFFFF',
          padding: '2px 8px',
          borderRadius: '9999px',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          flexShrink: 0,
        }}
      >
        WEXLOGIC
      </span>
      <span
        style={{
          fontFamily: "'Outfit', system-ui, sans-serif",
          fontSize: 'clamp(14px, 2.2vw, 17px)',
          fontWeight: 800,
          color: '#1E293B',
          letterSpacing: '-0.3px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {displayedText}
        <span
          style={{
            display: 'inline-block',
            width: '2px',
            height: '1.1em',
            backgroundColor: '#8B5CF6',
            marginLeft: '3px',
            verticalAlign: 'middle',
            animation: 'cursorBlink 1s infinite',
          }}
        />
      </span>
      <style>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}
