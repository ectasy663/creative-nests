'use client'

import { useEffect, useRef } from 'react'

export function VideoBackground({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Defer video playback until after the page is interactive
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Only start loading + playing after everything else is done
    const loadVideo = () => {
      video.src = src
      video.load()
      video.play().catch(() => {/* autoplay blocked, silent fail */})
    }

    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadVideo, { timeout: 2000 })
    } else {
      setTimeout(loadVideo, 1000)
    }
  }, [src])

  return (
    <>
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="none"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -2,
          pointerEvents: 'none',
          opacity: 0.35,
        }}
      />
      {/* Radial vignette overlay blending video into the dark background */}
      <div className="video-overlay-vignette" />
    </>
  )
}
