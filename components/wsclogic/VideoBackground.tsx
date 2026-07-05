export function VideoBackground({ src }: { src: string }) {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -2,
          pointerEvents: 'none',
          opacity: 0.35, /* Higher opacity for premium active feel */
        }}
      >
        <source src={src} type="video/mp4" />
      </video>
      {/* Radial vignette overlay blending video into the dark background */}
      <div className="video-overlay-vignette" />
    </>
  )
}
