export function TestimonialsSection() {
  return (
    <section id="testimonies" style={{ background: 'transparent', padding: '72px 28px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '44px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div style={{ background: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.3)', display: 'inline-block', padding: '6px 16px', borderRadius: '99px', marginBottom: '16px' }}>
            <span style={{ fontSize: '9px', letterSpacing: '4px', textTransform: 'uppercase' as const, fontWeight: 700, color: '#06b6d4' }}>Feedback</span>
          </div>
          <div className="cn-bebas" style={{ fontSize: 'clamp(38px, 6vw, 64px)', letterSpacing: '1px', color: '#fff', lineHeight: 0.9 }}>
            Client <span style={{ background: 'linear-gradient(135deg, #06b6d4, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Testimonies</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
        {[
          { text: "Creative Nests took our vision and amplified it by 10x. The cinematic ads they produced resulted in our biggest quarter ever.", author: "Sarah Jenkins", role: "CMO, TechNova", glow: '#6366f1' },
          { text: "Their approach to digital layouts helped us stand out in a sea of boring corporate templates. Absolutely legendary team.", author: "David Chen", role: "Founder, Disrupt", glow: '#d946ef' },
        ].map((item, i) => (
          <div 
            key={i} 
            className="glass-card"
            style={{ 
              padding: '40px 32px', 
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Corner backglow */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100px', height: '100px', background: item.glow, opacity: 0.05, filter: 'blur(35px)', pointerEvents: 'none' }} />
            
            <div style={{ fontSize: '48px', background: 'linear-gradient(135deg, #6366f1, #d946ef)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1, marginBottom: '8px', fontFamily: 'serif', fontWeight: 'bold' }}>“</div>
            <p className="cn-syne" style={{ fontSize: '16px', fontWeight: 500, color: '#f3f4f6', marginBottom: '28px', lineHeight: 1.5 }}>
              {item.text}
            </p>
            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '16px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.author}</div>
              <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '2px' }}>{item.role}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Quote Section */}
      <div 
        className="glass-card"
        style={{ 
          marginTop: '72px', 
          padding: '60px 40px', 
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '150px', background: 'linear-gradient(135deg, #6366f1, #d946ef)', opacity: 0.05, filter: 'blur(50px)', pointerEvents: 'none' }} />
        
        <div className="cn-bebas" style={{ fontSize: 'clamp(28px, 5vw, 48px)', color: '#fff', letterSpacing: '2px', lineHeight: 1.2, position: 'relative', zIndex: 1 }}>
          “Design is not just what it looks like.<br/>
          <span style={{ background: 'linear-gradient(135deg, #6366f1, #d946ef)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Design is how it works.</span>”
        </div>
      </div>
    </section>
  )
}
