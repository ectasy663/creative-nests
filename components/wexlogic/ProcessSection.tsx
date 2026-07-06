'use client'

interface ProcessStep {
  step: string
  title: string
  desc: string
  color: string
  shadowColor: string
}

const steps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery & Audit',
    desc: 'In-depth analysis of your current infrastructure, bottlenecks, and strategic goals.',
    color: '#dfb76c',
    shadowColor: 'rgba(223, 183, 108, 0.15)'
  },
  {
    step: '02',
    title: 'Architecture Blueprint',
    desc: 'Detailed wireframes, technical stack selection, and UI/UX design system mapping.',
    color: '#c5a059',
    shadowColor: 'rgba(197, 160, 89, 0.15)'
  },
  {
    step: '03',
    title: 'High-Fidelity Execution',
    desc: 'Agile development and precise rendering using the latest robust frameworks.',
    color: '#e5c185',
    shadowColor: 'rgba(229, 193, 133, 0.15)'
  },
  {
    step: '04',
    title: 'Stress Testing & Q/A',
    desc: 'Rigorous performance checks, security audits, and cohort testing before rollout.',
    color: '#a37f3d',
    shadowColor: 'rgba(163, 127, 61, 0.15)'
  },
  {
    step: '05',
    title: 'Launch & Scale',
    desc: 'Seamless deployment with continuous post-launch optimization and metric tracking.',
    color: '#dfb76c',
    shadowColor: 'rgba(223, 183, 108, 0.15)'
  }
]

export function ProcessSection() {
  return (
    <section
      id="process"
      style={{
        background: 'radial-gradient(circle at 50% 0%, rgba(223, 183, 108, 0.15) 0%, #040307 70%)',
        padding: '96px 28px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glowing blurred circles for futuristic tech vibe */}
      <div style={{ position: 'absolute', top: '10%', left: '5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(223, 183, 108, 0.18) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(184, 144, 71, 0.12) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(223, 183, 108, 0.24)', border: '1px solid rgba(223, 183, 108, 0.3)', padding: '6px 18px', borderRadius: '99px', marginBottom: '16px' }}>
            <span style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700, color: '#dfb76c' }}>Our Methodology</span>
          </div>
          <h2 className="cn-bebas" style={{ fontSize: 'clamp(38px, 5vw, 60px)', color: '#fff', letterSpacing: '2px', lineHeight: 1.1 }}>
            Process of <span style={{ background: 'linear-gradient(135deg, #dfb76c, #b89047)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Work</span>
          </h2>
          <p style={{ fontSize: '15px', color: '#9ca3af', maxWidth: '600px', margin: '16px auto 0', lineHeight: 1.6 }}>
            We follow a rigorous, metric-driven workflow designed to eliminate guesswork and deliver precise, enterprise-grade digital products.
          </p>
        </div>

        {/* Process Steps Staggered/Connected Layout */}
        <div style={{ position: 'relative' }}>
          {/* Connecting Line for timeline (Desktop only via CSS) */}
          <div 
            style={{
              position: 'absolute',
              top: '55px',
              left: '50px',
              right: '50px',
              height: '3px',
              background: 'linear-gradient(90deg, #b89047, #dfb76c, #b89047)',
              opacity: 0.25,
              zIndex: 1
            }}
            className="hidden lg:block"
          />

          <div className="process-steps-grid">
            {steps.map((item, idx) => (
              <div 
                key={idx} 
                className="glass-card"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.01)', 
                  border: '1px solid rgba(255, 255, 255, 0.05)', 
                  borderRadius: '16px', 
                  padding: '36px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
              >
                {/* Timeline node marker above each card on Desktop */}
                <div 
                  style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: item.color,
                    boxShadow: `0 0 10px ${item.color}`,
                    border: '3px solid #040307',
                    position: 'absolute',
                    top: '-43px',
                    left: '24px',
                    zIndex: 3
                  }}
                  className="hidden lg:block"
                />

                {/* Stained-glass colored border highlight at the top */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${item.color}, transparent)` }} />

                {/* Step Number with Glow */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <span className="cn-bebas" style={{ fontSize: '36px', color: item.color, letterSpacing: '1px', lineHeight: 1 }}>
                    {item.step}
                  </span>
                  <div 
                    style={{ 
                      width: '8px', 
                      height: '8px', 
                      borderRadius: '50%', 
                      background: item.color, 
                      boxShadow: `0 0 8px 2px ${item.color}` 
                    }} 
                  />
                </div>

                <h3 className="cn-syne" style={{ fontSize: '18px', fontWeight: 800, color: '#fff', marginBottom: '12px', letterSpacing: '-0.5px' }}>
                  {item.title}
                </h3>
                
                <p style={{ fontSize: '13.5px', color: '#9ca3af', lineHeight: 1.6, marginTop: 'auto' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
