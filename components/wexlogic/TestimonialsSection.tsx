'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const testimonials = [
  {
    text: "WexLogic took our vision and amplified it by 10x. The cinematic CGI ads they produced resulted in our biggest sales quarter ever, driving massive engagement on Instagram and TikTok.",
    author: "Sarah Jenkins",
    role: "CMO, TechNova",
    metrics: "+340% Traffic Lift",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    glow: '#dfb76c',
    rating: 5
  },
  {
    text: "Their approach to digital layouts helped us stand out in a sea of boring corporate templates. They built a custom Next.js storefront that loads in 0.8 seconds and cut our bounce rate in half.",
    author: "David Chen",
    role: "Founder, Disrupt Corp",
    metrics: "-45% Bounce Rate",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    glow: '#c5a059',
    rating: 5
  },
  {
    text: "The custom CRM integrations they executed solved our lead leakage problem completely. Their workflow automations run flawlessly and save our remote sales agents hours of work every day.",
    author: "Emily Ross",
    role: "Director of Ops, Solara",
    metrics: "+42% Conversion Speed",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    glow: '#e5c185',
    rating: 5
  },
  {
    text: "Nova Logistics' ledger and tracking systems are now fast and secure. The offline-first design allows our warehouse operators to record fleet activities without any sync delay.",
    author: "Marcus Vance",
    role: "COO, Nova Logistics",
    metrics: "99.98% Inventory Sync",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    glow: '#a37f3d',
    rating: 5
  }
]

export function TestimonialsSection() {
  return (
    <section id="testimonies" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(223, 183, 108, 0.04) 0%, #040307 70%)', padding: '80px 28px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '56px', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <div style={{ background: 'rgba(223, 183, 108, 0.08)', border: '1px solid rgba(223, 183, 108, 0.3)', display: 'inline-block', padding: '6px 18px', borderRadius: '99px', marginBottom: '16px' }}>
            <span style={{ fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 700, color: '#dfb76c' }}>
              Feedback
            </span>
          </div>
          <h2 className="cn-bebas" style={{ fontSize: 'clamp(42px, 6vw, 68px)', letterSpacing: '1px', color: '#fff', lineHeight: 1 }}>
            Client <span style={{ background: 'linear-gradient(135deg, #dfb76c, #b89047)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Testimonies</span>
          </h2>
        </div>
        <div style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#9ca3af', fontWeight: 600, textAlign: 'right' }}>
          Real Outcomes · Industry Leaders
        </div>
      </div>

      {/* Swiper Slider */}
      <div style={{ position: 'relative', width: '100%' }} className="testimonials-swiper-container">
        <style dangerouslySetInnerHTML={{__html: `
          .testimonials-swiper-container .swiper-pagination-bullet {
            background: rgba(255, 255, 255, 0.15) !important;
            opacity: 1 !important;
            width: 8px;
            height: 8px;
            transition: all 0.3s ease;
          }
          .testimonials-swiper-container .swiper-pagination-bullet-active {
            background: #dfb76c !important;
            width: 24px;
            border-radius: 99px;
          }
        `}} />
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={32}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          style={{ paddingBottom: '56px' }}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i} style={{ height: 'auto' }}>
              <div 
                className="glass-card"
                style={{ 
                  padding: '40px 32px', 
                  position: 'relative',
                  overflow: 'hidden',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '380px'
                }}
              >
                {/* Corner backglow */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100px', height: '100px', background: item.glow, opacity: 0.05, filter: 'blur(35px)', pointerEvents: 'none' }} />
                
                <div>
                  {/* Rating Stars and Quote Icon */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      {Array.from({ length: item.rating }).map((_, idx) => (
                        <span key={idx} style={{ color: '#fbbf24', fontSize: '14px' }}>★</span>
                      ))}
                    </div>
                    <div style={{ fontSize: '42px', background: 'linear-gradient(135deg, #dfb76c, #b89047)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1, fontFamily: 'serif', fontWeight: 'bold' }}>“</div>
                  </div>

                  <p className="cn-syne" style={{ fontSize: '15px', fontWeight: 500, color: '#f3f4f6', marginBottom: '28px', lineHeight: 1.6 }}>
                    {item.text}
                  </p>
                </div>

                {/* Footer details with Avatar & Metrics */}
                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ position: 'relative', width: '38px', height: '38px', borderRadius: '50%', overflow: 'hidden', border: '1.5px solid rgba(255, 255, 255, 0.12)' }}>
                      <Image 
                        src={item.avatar} 
                        alt={item.author} 
                        fill 
                        style={{ objectFit: 'cover' }} 
                        sizes="38px"
                      />
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{item.author}</div>
                      <div style={{ fontSize: '10px', color: '#9ca3af', marginTop: '1px' }}>{item.role}</div>
                    </div>
                  </div>
                  <div style={{ background: 'rgba(223, 183, 108, 0.08)', border: '1px solid rgba(223, 183, 108, 0.25)', padding: '4px 10px', borderRadius: '6px' }}>
                    <span style={{ fontSize: '9px', fontWeight: 700, color: '#dfb76c', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{item.metrics}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Philosophy Quote */}
      <div 
        className="glass-card"
        style={{ 
          marginTop: '40px', 
          padding: '60px 40px', 
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '150px', background: 'linear-gradient(135deg, #dfb76c, #b89047)', opacity: 0.05, filter: 'blur(50px)', pointerEvents: 'none' }} />
        
        <div className="cn-bebas" style={{ fontSize: 'clamp(28px, 5vw, 48px)', color: '#fff', letterSpacing: '2px', lineHeight: 1.2, position: 'relative', zIndex: 1 }}>
          “Design is not just what it looks like.<br/>
          <span style={{ background: 'linear-gradient(135deg, #dfb76c, #b89047)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Design is how it works.</span>”
        </div>
      </div>
    </section>
  )
}
