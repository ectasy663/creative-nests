'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Sparkles, Star } from 'lucide-react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const testimonials = [
  {
    text: "WexLogic took our vision and amplified it by 10x. The cinematic CGI ads they produced resulted in our biggest sales quarter ever, driving massive viral engagement across Instagram and TikTok.",
    author: "Sarah Jenkins",
    role: "CMO, TechNova",
    metrics: "+340% Traffic Lift",
    metricColor: '#8B5CF6',
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
  },
  {
    text: "Their approach to digital layouts helped us stand out in a sea of boring corporate templates. They built a custom Next.js storefront that loads in 0.8 seconds and cut our bounce rate in half.",
    author: "David Chen",
    role: "Founder, Disrupt Corp",
    metrics: "-45% Bounce Rate",
    metricColor: '#F472B6',
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
  },
  {
    text: "The custom CRM integrations they executed solved our lead leakage problem completely. Their workflow automations run flawlessly and save our remote sales agents hours of manual work every single day.",
    author: "Emily Ross",
    role: "Director of Ops, Solara",
    metrics: "+42% Conversion Speed",
    metricColor: '#FBBF24',
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
  },
  {
    text: "Nova Logistics' ledger and tracking systems are now lightning fast and rock solid. The offline-first design allows our warehouse operators to record fleet activities without any sync delay.",
    author: "Marcus Vance",
    role: "COO, Nova Logistics",
    metrics: "99.98% Inventory Sync",
    metricColor: '#34D399',
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section
      id="testimonies"
      style={{
        backgroundColor: '#FFFDF5',
        padding: '56px 16px',
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
        {/* Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '56px',
            gap: '12px',
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span className="badge-pill badge-yellow">
              <Sparkles size={13} className="text-[#1E293B]" />
              CLIENT STORIES
            </span>
          </div>
          <h2
            style={{
              fontFamily: "'Outfit', system-ui, sans-serif",
              fontSize: 'clamp(36px, 5.5vw, 60px)',
              fontWeight: 900,
              color: '#1E293B',
              letterSpacing: '-1px',
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Client{' '}
            <span
              style={{
                backgroundColor: '#34D399',
                color: '#1E293B',
                padding: '2px 14px',
                borderRadius: '14px',
                border: '2px solid #1E293B',
                boxShadow: '3px 3px 0px #1E293B',
                display: 'inline-block',
              }}
            >
              Testimonies
            </span>
          </h2>
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
            Verified Outcomes · Real Founders
          </div>
        </div>

        {/* Swiper Slider */}
        <div style={{ position: 'relative', width: '100%' }} className="testimonials-swiper-container">
          <style
            dangerouslySetInnerHTML={{
              __html: `
            .testimonials-swiper-container .swiper-pagination-bullet {
              background: #CBD5E1 !important;
              border: 1.5px solid #1E293B !important;
              opacity: 1 !important;
              width: 10px;
              height: 10px;
              transition: all 0.3s ease;
            }
            .testimonials-swiper-container .swiper-pagination-bullet-active {
              background: #8B5CF6 !important;
              width: 28px;
              border-radius: 99px;
            }
          `,
            }}
          />
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1360: { slidesPerView: 4, spaceBetween: 20 },
            }}
            style={{ paddingBottom: '60px' }}
          >
            {testimonials.map((item, i) => (
              <SwiperSlide key={i} style={{ height: 'auto' }}>
                <div
                  className="sticker-card"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '2px solid #1E293B',
                    borderRadius: '24px',
                    padding: '36px 28px',
                    position: 'relative',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '390px',
                    boxShadow: '6px 6px 0px #1E293B',
                  }}
                >
                  <div>
                    {/* Rating Stars and Quote Icon */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '20px',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          gap: '4px',
                          backgroundColor: '#FEF08A',
                          border: '1.5px solid #1E293B',
                          padding: '4px 10px',
                          borderRadius: '9999px',
                          boxShadow: '2px 2px 0px #1E293B',
                        }}
                      >
                        {Array.from({ length: item.rating }).map((_, idx) => (
                          <span key={idx} style={{ color: '#D97706', fontSize: '13px' }}>
                            ★
                          </span>
                        ))}
                      </div>
                      <div
                        style={{
                          fontSize: '44px',
                          color: '#8B5CF6',
                          lineHeight: 0.8,
                          fontFamily: 'serif',
                          fontWeight: 'bold',
                        }}
                      >
                        “
                      </div>
                    </div>

                    <p
                      style={{
                        fontSize: '15px',
                        fontWeight: 500,
                        color: '#334155',
                        marginBottom: '24px',
                        lineHeight: 1.65,
                      }}
                    >
                      {item.text}
                    </p>
                  </div>

                  {/* Footer details with Avatar & Metrics */}
                  <div
                    style={{
                      borderTop: '2px solid #F1F5F9',
                      paddingTop: '18px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: 'auto',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div
                        style={{
                          position: 'relative',
                          width: '42px',
                          height: '42px',
                          borderRadius: '50%',
                          overflow: 'hidden',
                          border: '2px solid #1E293B',
                          boxShadow: '2px 2px 0px #1E293B',
                        }}
                      >
                        <Image
                          src={item.avatar}
                          alt={item.author}
                          fill
                          style={{ objectFit: 'cover' }}
                          sizes="42px"
                        />
                      </div>
                      <div>
                        <div
                          style={{
                            fontFamily: "'Outfit', system-ui, sans-serif",
                            fontSize: '14px',
                            fontWeight: 800,
                            color: '#1E293B',
                          }}
                        >
                          {item.author}
                        </div>
                        <div style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>
                          {item.role}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1.5px solid #1E293B',
                        boxShadow: '2px 2px 0px #1E293B',
                        padding: '4px 10px',
                        borderRadius: '9999px',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 800,
                          color: item.metricColor,
                          fontFamily: "'Outfit'",
                        }}
                      >
                        {item.metrics}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Philosophy Quote Banner */}
        <div
          className="sticker-card"
          style={{
            marginTop: '32px',
            padding: '50px 36px',
            textAlign: 'center',
            backgroundColor: '#FEF08A',
            border: '3px solid #1E293B',
            boxShadow: '8px 8px 0px 0px #1E293B',
            borderRadius: '28px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >

          <div
            style={{
              fontFamily: "'Outfit', system-ui, sans-serif",
              fontSize: 'clamp(26px, 4vw, 44px)',
              color: '#1E293B',
              fontWeight: 900,
              letterSpacing: '-0.5px',
              lineHeight: 1.25,
            }}
          >
            “Design is not just what it looks like.{' '}
            <span
              style={{
                backgroundColor: '#8B5CF6',
                color: '#FFFFFF',
                padding: '2px 14px',
                borderRadius: '12px',
                border: '2px solid #1E293B',
                boxShadow: '3px 3px 0px #1E293B',
                display: 'inline-block',
                transform: 'rotate(-1deg)',
              }}
            >
              Design is how it works.
            </span>
            ”
          </div>
        </div>
      </div>
    </section>
  )
}
