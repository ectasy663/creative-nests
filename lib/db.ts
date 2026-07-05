import fs from 'fs'
import path from 'path'

// Database schemas/types
export interface BlogPost {
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  readTime: string
  date: string
  author: { name: string; avatar: string; role: string }
  coverImage: string
}

export interface ServiceDetail {
  num: string
  slug: string
  title: string
  subtitle: string
  desc: string
  image: string
  videoUrl: string
  features: string[]
  process: string[]
  pricing: { name: string; price: string; features: string[] }[]
  numColor: string
  bar: string
}

export interface WorkProject {
  title: string
  slug: string
  category: string
  desc: string
  image: string
  videoUrl: string
  tags: string[]
  featured: boolean
  about: string
  challenge: string
  solution: string
  results: string[]
}

export interface ContactSubmission {
  id: string
  name: string
  email: string
  subject: string
  message: string
  date: string
}

const DATA_DIR = path.join(process.cwd(), 'data')
const BLOG_PATH = path.join(DATA_DIR, 'blog.json')
const SERVICES_PATH = path.join(DATA_DIR, 'services.json')
const WORK_PATH = path.join(DATA_DIR, 'work.json')
const SUBMISSIONS_PATH = path.join(DATA_DIR, 'submissions.json')

// Helper to ensure data directory and files exist
function ensureDb() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }

  // Seed Blog if empty
  if (!fs.existsSync(BLOG_PATH)) {
    const defaultBlogs: BlogPost[] = [
      {
        title: "How CGI & VFX Ads are Dominating Social Feeds in 2026",
        slug: "cgi-vfx-ads-dominating-social",
        excerpt: "Traditional video ads no longer grab attention. We look at the rise of CGI marketing and why physical-defying visuals are driving 10x engagement.",
        content: `In an era of hyper-stimulated users and sub-second attention spans, static images or standard video footage are struggling to capture the thumb-stop moments. Enter CGI (Computer Generated Imagery) and VFX ads. By bending reality directly on social media, brands are generating massive viral lift without conventional spending.

### The Physics of Thumb-Stopping Power
Why does CGI work? Human brains are hardwired to notice anomalies. When a giant handbag rolls down the streets of Paris or a virtual shoe leaps off a billboard, our pattern recognition breaks. We pause, we inspect, we share. That initial 3-second hook is the difference between an impression and a conversion.

### Cost-Efficiency in the Virtual Studio
Contrary to popular belief, scaling high-fidelity CGI can be far more cost-effective than traditional commercial film shoots. There's:
1. No travel logistics.
2. Unlimited lighting configurations at the click of a button.
3. Perfect product geometry that cannot be captured by cameras.

By constructing a reusable digital twin of your product, you can launch infinite creative variations across channels, scaling your paid advertising strategy with precision.`,
        category: "CGI & Production",
        readTime: "4 min read",
        date: "July 2, 2026",
        author: {
          name: "Rohan Sen",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
          role: "Creative Director"
        },
        coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Why Modern SaaS Architectures Need Next.js 16 and RSCs",
        slug: "modern-saas-architectures-nextjs",
        excerpt: "React Server Components are no longer optional. Learn how server-centric rendering eliminates client layout shifts and boosts conversions.",
        content: `Speed is a metric of revenue. Double-digit delays in page load speeds correlates directly to high bounce rates. Modern SaaS applications must load instantly, maintain dynamic client states, and offer pristine SEO. Next.js 16, combined with React Server Components (RSC), delivers this exact recipe.

### Zero-Bundle-Size Components
By rendering pages on the server and serving static HTML to the client, React Server Components bypass traditional hydration cycles. Heavy dependencies, Markdown parsers, and database operations are kept server-side, reducing the JavaScript payload sent to the browser to nearly zero.

### The Hybrid Layout Power
With Next.js App Router, you can blend static, dynamic, and client-heavy interactive layouts seamlessly:
- **Server components** handle heavy data-fetching and SEO markup.
- **Client components** take care of micro-animations, input state, and real-time sockets.

By utilizing this hybrid layout, your digital product scales globally, rendering perfectly on standard mobile devices even with poor connectivity.`,
        category: "Web & Dev",
        readTime: "6 min read",
        date: "June 28, 2026",
        author: {
          name: "Arjun Verma",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
          role: "Chief Architect"
        },
        coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Building Customer Pipelines: CRM vs Bespoke Systems",
        slug: "building-customer-pipelines-crm",
        excerpt: "Every business needs a CRM, but off-the-shelf packages can become expensive bloat. We weigh Salesforce and HubSpot against custom solutions.",
        content: `A business without a structured customer relationship management pipeline is bleeding leads. As companies scale, their CRM needs evolve from basic spreadsheets to automated platforms. But choosing between established SaaS ecosystems like HubSpot/Salesforce or building a custom database dashboard is a critical fork in the road.

### The Custom Advantage
Off-the-shelf products charge per-user licenses that scale aggressively. B2B enterprises often only need specific features:
- Integrated lead distribution.
- Simple WhatsApp automation triggers.
- Direct telemetry reports.

Building a lightweight, custom CRM dashboard using Next.js allows you to pay purely for serverless execution, avoiding license fees and maintaining total security over client telemetry.

### Our Strategy for Pipeline Success
At WexLogic, we don't believe in one-size-fits-all. We audit your existing pipelines, integrate custom hooks to capture leads, and automate client follow-ups to maximize operational velocity.`,
        category: "CRM & ERP",
        readTime: "5 min read",
        date: "June 15, 2026",
        author: {
          name: "Sarah Jenkins",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
          role: "Lead CRM Analyst"
        },
        coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
      }
    ]
    fs.writeFileSync(BLOG_PATH, JSON.stringify(defaultBlogs, null, 2))
  }

  // Seed Services if empty
  if (!fs.existsSync(SERVICES_PATH)) {
    const defaultServices: ServiceDetail[] = [
      {
        num: '01',
        slug: 'cgi-vfx-ads',
        title: 'CGI & VFX Ads',
        subtitle: 'Cinematic ads that defy gravity and command engagement.',
        desc: 'In a digital world crowded with average content, our CGI & VFX advertisements are designed to grab attention instantly. We blend high-fidelity 3D assets, fluid dynamics, and realistic animations to create visual narratives that defy gravity and command engagement.',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
        videoUrl: '/videos/CGI_VFX_showcase_luxury_car_202607051948_gwr_video_mvp.mp4',
        features: [
          'Scroll-Stopping 3D Visual Effects',
          'Realistic Simulation & Fluid Dynamics',
          'High-Impact Social Media Hook Integration',
          'Flawless Motion Tracking & Green Screen Compositing'
        ],
        process: [
          'Concept Scripting & Storyboarding',
          '3D Modelling & Texturing Assets',
          'VFX Animation & Simulation rendering',
          'Sound Design & Final Compositing'
        ],
        pricing: [
          { name: 'Core Campaign', price: '₹49k', features: ['1 VFX Ad (15s)', 'Storyboarding', '2 Rounds of Revision', '1080p Resolution'] },
          { name: 'Domination Tier', price: '₹120k', features: ['3 VFX Ads (15-30s)', 'Detailed Storyboarding', 'Unlimited Revisions', '4K Rendering + Social Hooks'] }
        ],
        numColor: '#6366f1',
        bar: 'linear-gradient(135deg, #6366f1, #d946ef)'
      },
      {
        num: '02',
        slug: 'web-app-dev',
        title: 'Web & App Dev',
        subtitle: 'World-class digital platforms built for scale & rapid growth.',
        desc: 'We construct blazing fast, secure, and visually stunning web applications utilizing Next.js, React, and robust backend architectures. Our products are not just code; they are conversion engines designed to load instantly and scale seamlessly as your user base grows.',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
        videoUrl: '/videos/Web_app_development_showcase_202607051935_gwr_video_mvp.mp4',
        features: [
          'Next.js App Router Architectures',
          'Responsive Fluid Layouts & Tailwind Integration',
          'Blazing Fast SEO-optimized Performance',
          'Robust API Integrations & State Management'
        ],
        process: [
          'Wireframing & UI/UX Design System Mapping',
          'Component Architecture Planning',
          'Front & Backend Code Implementation',
          'Performance Optimization & Hosting Deployment'
        ],
        pricing: [
          { name: 'Startup Launch', price: '₹89k', features: ['5 Responsive Pages', 'SEO Configuration', 'Contact Form Integration', '1 Month Support'] },
          { name: 'Enterprise SaaS', price: '₹250k', features: ['Custom App Logic', 'Interactive Dashboard', 'Full API Integrations', '3 Months Support'] }
        ],
        numColor: '#d946ef',
        bar: 'linear-gradient(135deg, #d946ef, #06b6d4)'
      },
      {
        num: '03',
        slug: 'branding-logo',
        title: 'Branding & Logo',
        subtitle: 'Brand identities that speak before words are ever spoken.',
        desc: 'Your brand is not just a logo; it is the gut feeling a customer has about your product. We design cohesive, memorable visual identity systems that evoke emotion and build long-term trust. From custom logos to comprehensive brand books, we ensure your agency looks premium.',
        image: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?auto=format&fit=crop&w=1200&q=80',
        videoUrl: '/videos/Luxury_brand_identity_animation_202607051938_gwr_video_mvp.mp4',
        features: [
          'Memorable Custom Logo Designs',
          'Curated Typography & Color Palette Selection',
          'Brand Identity Guidelines (Brand Book)',
          'Digital & Print Stationeries Design'
        ],
        process: [
          'Brand Discovery & Competitive Analysis',
          'Moodboarding & Concept Presentation',
          'Logo Iteration & Refinement',
          'Brand Asset Packaging & Exporting'
        ],
        pricing: [
          { name: 'Essential Identity', price: '₹35k', features: ['Primary Logo + Palette', 'Typography System', 'Letterhead & Card Design', 'Basic Guidelines'] },
          { name: 'Total Brand Universe', price: '₹95k', features: ['Full Identity System', 'Comprehensive Brand Book', 'Social Media Templates', 'Packaging Design'] }
        ],
        numColor: '#06b6d4',
        bar: 'linear-gradient(135deg, #06b6d4, #6366f1)'
      },
      {
        num: '04',
        slug: 'seo-marketing',
        title: 'SEO & Marketing',
        subtitle: 'Precision search strategies that make you impossible to ignore.',
        desc: 'Getting traffic is easy; getting high-intent, converting traffic is the challenge. We run technical SEO campaigns, content strategies, and link building programs that position your brand at the absolute top of search results. Dominate your market share and capture leads organically.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        videoUrl: '/videos/Business_growth_SEO_digital_mark…_202607051937_gwr_video_mvp.mp4',
        features: [
          'In-Depth Technical SEO Auditing',
          'Keyword Research targeting High-Intent Searches',
          'High-Quality Content Marketing Strategies',
          'Authoritative White-Hat Link Building'
        ],
        process: [
          'Technical SEO Audit & Setup',
          'Keyword Mapping & Content Calendar Outline',
          'Content Production & Optimization',
          'Monthly Ranking & Traffic Audit Reports'
        ],
        pricing: [
          { name: 'Growth Kickstart', price: '₹29k/mo', features: ['Keyword Mapping', 'On-Page Optimization', '4 SEO-optimized Articles/mo', 'Monthly Performance Report'] },
          { name: 'Market Domination', price: '₹75k/mo', features: ['Advanced Competitor Audits', 'Full Technical Cleanups', '8 Premium Articles/mo', 'Dedicated Account Lead'] }
        ],
        numColor: '#6366f1',
        bar: 'linear-gradient(135deg, #6366f1, #06b6d4)'
      },
      {
        num: '05',
        slug: 'paid-ads-meta',
        title: 'Paid Ads & Meta',
        subtitle: 'Data-driven paid spend designed to return maximum ROI.',
        desc: 'Stop wasting money on campaigns that don\'t convert. We construct strategic funnel-based ads on Meta (Facebook, Instagram), Google, and LinkedIn. We combine highly engaging ad creatives with hyper-targeted audience testing to scale your acquisition profitability.',
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
        videoUrl: '/videos/Social_media_advertising_power_c…_202607051941_gwr_video_mvp.mp4',
        features: [
          'High-Converting Ad Copywriting',
          'Hyper-Targeted Lookalike & Custom Audiences',
          'Rigorous A/B Creative & Headline Testing',
          'Remarketing Funnels & Pixel Configuration'
        ],
        process: [
          'Funnel Architecture & Budget Allocation',
          'Ad Creative Design & Copywriting',
          'Campaign Launch & Initial Testing Phase',
          'Daily Optimization & Profit Scaling'
        ],
        pricing: [
          { name: 'Starter Campaign', price: '₹40k/mo', features: ['Campaign Setup', 'Weekly Creative Edits', 'Ad Spend Optimization', 'Monthly Reports'] },
          { name: 'Scale Tier', price: '₹90k/mo', features: ['Multi-Channel Funnel Setup', 'Unlimited Ad Creative Assets', 'Daily Scaling & Budgets', 'Weekly Direct Synced Calls'] }
        ],
        numColor: '#d946ef',
        bar: 'linear-gradient(135deg, #d946ef, #6366f1)'
      },
      {
        num: '06',
        slug: 'video-editing',
        title: 'Video Editing',
        subtitle: 'Frame-perfect storytelling that moves audiences and triggers actions.',
        desc: 'Video editing is the art of manipulating time and emotion. We turn raw footage into high-retention stories, cinematic promotional films, or engaging short-form TikToks and Reels. Our editing hooks viewers within the first 3 seconds and holds them until the final frame.',
        image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
        videoUrl: '/videos/Video_production_studio_cinemati…_202607051942_gwr_video_mvp.mp4',
        features: [
          'High-Retention Cinematic Cuts',
          'Dynamic Sound Design & Sound Effects',
          'Custom Motion Graphics & Text Tracking',
          'Social Media Specific Hooks & Subtitles'
        ],
        process: [
          'Footage Ingestion & Script Analysis',
          'First Rough Cut Review Session',
          'Sound Design, Color Grading & VFX Overlay',
          'Final Rendering & Asset Delivery'
        ],
        pricing: [
          { name: 'Short-Form Bundle', price: '₹25k', features: ['10 Reels/TikToks/Shorts', 'Hook Development', 'Subtitles & Sound Effects', '2 Rounds of Revision'] },
          { name: 'Cinematic Promos', price: '₹60k', features: ['1 Premium Brand Video (2m)', 'Color Grading & Soundscapes', 'Motion Graphics Overlay', '3 Rounds of Revision'] }
        ],
        numColor: '#06b6d4',
        bar: 'linear-gradient(135deg, #06b6d4, #d946ef)'
      },
      {
        num: '07',
        slug: 'crm-systems',
        title: 'CRM Systems',
        subtitle: 'Bespoke customer relationship pipelines built to convert.',
        desc: 'Unlock the potential of your sales pipelines with custom Salesforce, HubSpot, or completely bespoke CRM dashboards. We map your client touchpoints, setup webhook auto-responders, and compile real-time telemetry to prevent lead leakage.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        videoUrl: '/videos/Futuristic_CRM_visualization_int…_202607051945_gwr_video_mvp.mp4',
        features: [
          'Custom Dashboard Design & API Webhooks',
          'Automated Email & WhatsApp Triggers',
          'Pipeline Analytics & Conversion Reports',
          'Seamless Third-Party API Syncing'
        ],
        process: [
          'Customer Pipeline Audit & Blueprinting',
          'Database Schema & Webhook Integration',
          'Bespoke Frontend Dashboard Development',
          'User Training & Continuous Support'
        ],
        pricing: [
          { name: 'Integration Tier', price: '₹45k', features: ['HubSpot/Salesforce Sync', 'Custom Form Webhooks', 'Basic Automation Tiers', '2 Weeks Setup'] },
          { name: 'Bespoke CRM Build', price: '₹140k', features: ['Bespoke Database & UI', 'Unlimited Lead Pipelines', 'Custom Multi-channel Alerts', '1 Month Support'] }
        ],
        numColor: '#6366f1',
        bar: 'linear-gradient(135deg, #6366f1, #d946ef)'
      },
      {
        num: '08',
        slug: 'erp-solutions',
        title: 'ERP Solutions',
        subtitle: 'Custom enterprise resources dashboards built to scale.',
        desc: 'Unify inventory tracking, employee logistics, ledger records, and operations into a high-performance custom ERP portal. Crafted with robust security protocols, Next.js, and lightweight responsive architectures to scale alongside your organization.',
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
        videoUrl: '/videos/Enterprise_resource_planning_vis…_202607051945_gwr_video_mvp.mp4',
        features: [
          'Secure Multi-Tenant DB Architectures',
          'Real-time Inventory & Logistic Tracking',
          'Dynamic Ledger & Financial Worksheets',
          'High-Fidelity Offline Syncing Features'
        ],
        process: [
          'Logistics Audit & Blueprint Mapping',
          'Architecture Design & API Mapping',
          'Next.js 16 Application Implementation',
          'Staged Rollout & Stress Verification'
        ],
        pricing: [
          { name: 'Core Operations', price: '₹110k', features: ['Inventory & Order Modules', 'Admin Access Panel', 'CSV Export Utilities', '1 Month Support'] },
          { name: 'Full Enterprise', price: '₹280k', features: ['Ledger, HR & Inventory Systems', 'Custom Real-time Analytics', 'Multi-tenant Permissions', '3 Months Support'] }
        ],
        numColor: '#d946ef',
        bar: 'linear-gradient(135deg, #d946ef, #06b6d4)'
      }
    ]
    fs.writeFileSync(SERVICES_PATH, JSON.stringify(defaultServices, null, 2))
  }

  // Seed Projects (Work) if empty or outdated
  const defaultWork: WorkProject[] = [
    {
      title: "WexLogic Launch 2024",
      slug: "wexlogic-launch",
      category: "CGI & Production",
      desc: "Immersive 3D/CGI visual branding mapping the modern frontier.",
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/CGI_VFX_showcase_luxury_car_202607051948_gwr_video_mvp.mp4",
      tags: ["CGI", "VFX", "Motion"],
      featured: true,
      about: "WexLogic Launch represents our signature visual catalog, capturing next-generation design paradigms through a series of CGI-rendered environments.",
      challenge: "Mapping highly stylized brand textures onto multi-angle physical simulations while keeping assets compressed and ready for browser execution.",
      solution: "We deployed custom WebGL rendering chains and optimized 3D coordinate mapping layers directly within serverless Next.js pages.",
      results: ["+340% User Duration Rate", "Perfect 100 PageSpeed Rating", "Featured in CSS Design Awards"]
    },
    {
      title: "Apex Brand Identity",
      slug: "identity-design",
      category: "Branding",
      desc: "Minimalist tech-driven logo patterns and core design system.",
      image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?auto=format&fit=crop&w=600&q=80",
      videoUrl: "/videos/Luxury_brand_identity_animation_202607051938_gwr_video_mvp.mp4",
      tags: ["Design", "Identity"],
      featured: true,
      about: "We created a comprehensive identity system for Apex Tech, aligning their developer-facing toolset with a sleek, minimalist aesthetic.",
      challenge: "Developing a brand voice that resonates with developers while looking premium enough to support enterprise B2B sales cycles.",
      solution: "Our team developed a custom typeface, structured typography system, and geometric logo system accompanied by an interactive brand book.",
      results: ["85-page comprehensive brand book", "+60% Brand Recall Rate", "100% Brand Assets Autogenerated"]
    },
    {
      title: "TrendHQ Platform Dev",
      slug: "ecomm-platform",
      category: "Web & Dev",
      desc: "Sub-second page speeds driving e-commerce conversions.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
      videoUrl: "/videos/Web_app_development_showcase_202607051935_gwr_video_mvp.mp4",
      tags: ["Web", "React", "Dev"],
      featured: true,
      about: "TrendHQ is a high-volume fashion retailer needing a complete frontend revamp to capture mobile conversions.",
      challenge: "The existing monolithic site suffered from a 4.2s time-to-interactive, causing a 35% cart abandonment rate.",
      solution: "Rebuilt the entire storefront with Next.js Server Components, client-side caching, and dynamic edge-rendering.",
      results: ["0.6s Time-to-Interactive", "+28% Overall Conversion Rate", "Saved $12k/mo in hosting costs"]
    },
    {
      title: "Solara CRM Dashboard",
      slug: "solara-crm-dashboard",
      category: "CRM & ERP",
      desc: "Bespoke pipeline and automation tracker generating conversions.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
      videoUrl: "/videos/Futuristic_CRM_visualization_int…_202607051945_gwr_video_mvp.mp4",
      tags: ["CRM", "React", "API"],
      featured: false,
      about: "Solara required a customized sales funnel mapping tool to support their fast-moving remote solar consultation teams.",
      challenge: "Generic CRMs failed to sync solar potential map overlays, causing sales reps to switch between three separate apps.",
      solution: "Built a bespoke CRM portal with integrated Google Maps telemetry, custom customer databases, and automated WhatsApp follow-ups.",
      results: ["Zero context-switching required", "+42% Lead Follow-up speed", "Seeded 10,000 active leads"]
    },
    {
      title: "Nova Logistics ERP",
      slug: "nova-logistics-erp",
      category: "CRM & ERP",
      desc: "Secure inventory tracking dashboard built for transport chains.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
      videoUrl: "/videos/Enterprise_resource_planning_vis…_202607051945_gwr_video_mvp.mp4",
      tags: ["ERP", "Ledger", "Security"],
      featured: false,
      about: "An enterprise fleet tracking and inventory ledger connecting 4 major regional logistics warehouses.",
      challenge: "Out-of-sync inventory databases caused duplicate cargo loading schedules and cargo delays.",
      solution: "Established a server-synchronized database ledger with offline-first capabilities using Tailwind and Next.js APIs.",
      results: ["99.98% Cargo Schedule Accuracy", "Decreased shipping delays by 2 days", "Built-in database encryption active"]
    },
    {
      title: "Vortex Google Ads Scaling",
      slug: "vortex-ads-scaling",
      category: "Paid Ads & Meta",
      desc: "Precision paid campaigns driving 12x ROI across search funnels.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
      videoUrl: "/videos/Social_media_advertising_power_c…_202607051941_gwr_video_mvp.mp4",
      tags: ["Paid Ads", "Google", "Funnel"],
      featured: false,
      about: "Vortex needed to rapidly acquire high-intent enterprise accounts for their logistics SaaS.",
      challenge: "Cost per lead on standard keywords was exceeding $120 with low search query relevance.",
      solution: "Structured multi-stage retargeting campaigns with custom landing page funnels and intent-specific keyword exclusions.",
      results: ["Reduced cost-per-lead by 55%", "12.4x ROI across Search campaigns", "Generated 800+ enterprise leads"]
    },
    {
      title: "Quantum Sneakers CGI Ad",
      slug: "quantum-sneakers-cgi",
      category: "CGI & Production",
      desc: "Futuristic footwear CGI campaign with dynamic fluid mechanics.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/CGI_VFX_showcase_luxury_car_202607051948_gwr_video_mvp.mp4",
      tags: ["CGI", "VFX", "3D"],
      featured: false,
      about: "A hyper-realistic 3D rendering project for a futurist shoe campaign.",
      challenge: "Simulating soft fabrics and complex liquid splashes around a fast-moving shoe.",
      solution: "Used Houdini fluid dynamics simulations combined with OctaneRender mapping inside a serverless asset delivery pipeline.",
      results: ["+180% ad click-through rate", "2.1M organic views", "45% reduction in production cost"]
    },
    {
      title: "FinFlow Dashboard Dev",
      slug: "finflow-dashboard",
      category: "Web & Dev",
      desc: "High-performance analytics dashboard for B2B financial systems.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/Web_app_development_showcase_202607051935_gwr_video_mvp.mp4",
      tags: ["Web", "React", "NextJS"],
      featured: false,
      about: "A fast real-time analytics dashboard for B2B financial systems.",
      challenge: "Rendering thousands of financial data points per second with zero page lag.",
      solution: "Implemented Next.js Server Components, custom WebSockets connections, and canvas-based chart plotting.",
      results: ["0.4s load speed", "99.9% uptime", "Used by 15 enterprise clients"]
    },
    {
      title: "Pulse Branding System",
      slug: "pulse-branding",
      category: "Branding",
      desc: "Cohesive visual identity system for health-tech ecosystems.",
      image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/Luxury_brand_identity_animation_202607051938_gwr_video_mvp.mp4",
      tags: ["Branding", "Identity", "Logo"],
      featured: false,
      about: "Brand identity guidelines, logos, and print layouts for a new health-tech platform.",
      challenge: "Creating a modern visual brand that bridges clinical trust and consumer accessibility.",
      solution: "Designed a clean, geometric logo mark accompanied by an interactive brand guidelines portal and assets generation tool.",
      results: ["100% brand asset adoption", "+40% user recognition rate", "Complete brand assets delivered in 10 days"]
    },
    {
      title: "Velo Corp Rebrand",
      slug: "velo-rebrand",
      category: "Branding",
      desc: "Complete visual rebranding and design system mapping for fintech API layers.",
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/Luxury_brand_identity_animation_202607051938_gwr_video_mvp.mp4",
      tags: ["Branding", "Rebrand", "Typography"],
      featured: false,
      about: "A complete global rebrand and design system for Velo Corp, mapping their financial API services.",
      challenge: "Aligning a tech-heavy developer toolset with an premium enterprise design aesthetic.",
      solution: "Designed a clean golden geometric logo, custom typeface, and an interactive digital brand guidelines handbook.",
      results: ["100% Brand adoption rate", "+70% enterprise client inquiries", "Completed rebrand in 14 days"]
    },
    {
      title: "Lumen Health Identity",
      slug: "lumen-identity",
      category: "Branding",
      desc: "Corporate identity system, logo design, and brand assets guidelines for health networks.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/Luxury_brand_identity_animation_202607051938_gwr_video_mvp.mp4",
      tags: ["Identity", "Design", "Logo"],
      featured: false,
      about: "Corporate identity system and logo design for Lumen Health ecosystems.",
      challenge: "Bridging consumer warmth with modern medical trust.",
      solution: "Designed a minimalist glowing golden typography logo accompanied by customizable print and digital stationery kits.",
      results: ["Delivered 120+ branding assets", "+50% user brand recall score", "Fully responsive brand manual website"]
    },
    {
      title: "EduSphere SEO Campaign",
      slug: "edusphere-seo",
      category: "SEO & Marketing",
      desc: "Complete organic visibility scaling for online educational portals.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/Business_growth_SEO_digital_mark…_202607051937_gwr_video_mvp.mp4",
      tags: ["SEO", "Growth", "Marketing"],
      featured: false,
      about: "Organic keyword optimization and content strategy for an online education hub.",
      challenge: "The site had stagnant search traffic and indexation errors across 1,000+ course pages.",
      solution: "Performed a complete technical SEO clean-up, automated schema injection, and built a targeted backlink pipeline.",
      results: ["+250% search visibility", "50k monthly organic visitors", "#1 ranking for 12 commercial keywords"]
    },
    {
      title: "PrimeCut Video Reels",
      slug: "primecut-video",
      category: "Video Editing",
      desc: "Frame-accurate social cuts driving sub-second hook retention.",
      image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/Video_production_studio_cinemati…_202607051942_gwr_video_mvp.mp4",
      tags: ["Video", "Reels", "TikTok"],
      featured: false,
      about: "High-retention video cuts and sound designs for social media platforms.",
      challenge: "Establishing high-tempo visual hooks within the first 3 seconds of video playback.",
      solution: "Implemented high-impact motion text overlays, sound design triggers, and frame-accurate matching cuts.",
      results: ["+300% average watch time", "10M aggregate views", "50+ content reels delivered"]
    },
    {
      title: "DevLink API Platform",
      slug: "devlink-api",
      category: "Web & Dev",
      desc: "Bespoke developer portal and API gateway designed for automated SaaS routing.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/Web_app_development_showcase_202607051935_gwr_video_mvp.mp4",
      tags: ["Web", "API", "GraphQL"],
      featured: false,
      about: "Bespoke developer portal and API gateway designed for automated SaaS routing.",
      challenge: "Optimizing request routing and keeping documentation synchronized with live API schemas.",
      solution: "Built an interactive sandbox using React components, unified GraphQL interfaces, and Edge cache engines.",
      results: ["+150% Developer signup rate", "0.2ms Gateway routing delay", "100% Type-safe SDK outputs"]
    },
    {
      title: "StackStore eCommerce",
      slug: "stackstore-ecomm",
      category: "Web & Dev",
      desc: "Headless commerce layout utilizing Next.js Server Components and serverless databases.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/Web_app_development_showcase_202607051935_gwr_video_mvp.mp4",
      tags: ["Web", "Commerce", "NextJS"],
      featured: false,
      about: "Headless commerce layout utilizing Next.js Server Components and serverless databases.",
      challenge: "Reducing cart checkout failures caused by slow database locking states.",
      solution: "Implemented queue-based checkout funnels, distributed locks, and incremental static regeneration.",
      results: ["+35% checkout conversions", "Sub-second product catalog search", "Zero transaction losses recorded"]
    },
    {
      title: "MediCore Organic Scaling",
      slug: "medicore-organic",
      category: "SEO & Marketing",
      desc: "Healthcare search visibility campaign targeting local doctor searches.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/Business_growth_SEO_digital_mark…_202607051937_gwr_video_mvp.mp4",
      tags: ["SEO", "Healthcare", "Growth"],
      featured: false,
      about: "Healthcare search visibility campaign targeting local doctor searches.",
      challenge: "Struggling with Google core updates and strict healthcare review guidelines.",
      solution: "Implemented medical schema markup, optimized medical advisor panels, and ran authority backlinks campaigns.",
      results: ["+190% new patient bookings", "First page ranking for 180 terms", "+310% mobile search clicks"]
    },
    {
      title: "TravelAura Content Engine",
      slug: "travelaura-content",
      category: "SEO & Marketing",
      desc: "Automated content hubs mapping travel guides for regional operators.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/Business_growth_SEO_digital_mark…_202607051937_gwr_video_mvp.mp4",
      tags: ["Content", "SEO", "Travel"],
      featured: false,
      about: "Automated content hubs mapping travel guides for regional operators.",
      challenge: "Inefficient content scaling and low keyword depth across regional guides.",
      solution: "Created programmatically seeded content hubs, semantic schemas, and authority backlinks pipelines.",
      results: ["500+ optimized pages indexed", "+400% organic search volume", "15,000 monthly unique referrals"]
    },
    {
      title: "FinTech Lead Pipeline",
      slug: "fintech-lead-pipeline",
      category: "SEO & Marketing",
      desc: "Targeted landing pages and technical search optimization for mortgage providers.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/Business_growth_SEO_digital_mark…_202607051937_gwr_video_mvp.mp4",
      tags: ["SEO", "LeadGen", "Finance"],
      featured: false,
      about: "Targeted landing pages and technical search optimization for mortgage providers.",
      challenge: "Extremely high PPC bid prices ($45/click) on search terms.",
      solution: "Designed organic long-tail search strategies and automated comparison calculators.",
      results: ["Saved $25k monthly paid budget", "1,200 organic lead signups monthly", "+220% conversion rate"]
    },
    {
      title: "GlowSkin Meta Funnels",
      slug: "glowskin-meta",
      category: "Paid Ads & Meta",
      desc: "D2C skincare scaling across Facebook and Instagram Paid Ads.",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/Social_media_advertising_power_c…_202607051941_gwr_video_mvp.mp4",
      tags: ["Meta", "Instagram", "Ads"],
      featured: false,
      about: "D2C skincare scaling across Facebook and Instagram Paid Ads.",
      challenge: "Increasing ad fatigue and rising customer acquisition costs (CAC).",
      solution: "Structured high-frequency creative cycles, catalog-sales ads, and structured lookalike funnels.",
      results: ["3.8x Return on Ad Spend (ROAS)", "-42% customer acquisition cost", "Generated 5,000 product sales"]
    },
    {
      title: "QuickCab Meta Scaling",
      slug: "quickcab-meta",
      category: "Paid Ads & Meta",
      desc: "Local app install campaigns scaling ridership numbers via Meta Ads.",
      image: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/Social_media_advertising_power_c…_202607051941_gwr_video_mvp.mp4",
      tags: ["Meta", "Paid Ads", "Retargeting"],
      featured: false,
      about: "Local app install campaigns scaling ridership numbers via Meta Ads.",
      challenge: "Low app retention and high cost per app install.",
      solution: "Deployed geo-targeted Meta ad campaigns combined with short-form visual hooks and localized coupon funnels.",
      results: ["+210% app installs count", "Reduced cost per install by 30%", "2.5x increase in active rides"]
    },
    {
      title: "EduClass Paid Acquisition",
      slug: "educlass-acquisition",
      category: "Paid Ads & Meta",
      desc: "Lead generation campaigns scaling course enrollments for online bootcamps.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/Social_media_advertising_power_c…_202607051941_gwr_video_mvp.mp4",
      tags: ["Paid Ads", "Meta", "Google"],
      featured: false,
      about: "Lead generation campaigns scaling course enrollments for online bootcamps.",
      challenge: "High lead drop-off rates on standard inline lead forms.",
      solution: "Built custom interactive quizzes linked with Meta Lead Ads and instant follow-up triggers.",
      results: ["+85% lead-to-booking conversions", "2.1x ROAS on Meta ads", "Enrolled 1,500 new students"]
    },
    {
      title: "Apex Cinematic Promo",
      slug: "apex-cinematic",
      category: "Video Editing",
      desc: "Cinematic launch commercial with tailored soundscapes and grading.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/Video_production_studio_cinemati…_202607051942_gwr_video_mvp.mp4",
      tags: ["VFX", "Promo", "Color"],
      featured: false,
      about: "Cinematic commercial for Apex tool launches, utilizing professional grading and pacing.",
      challenge: "Matching corporate voice with high-energy edit sequences.",
      solution: "Designed bespoke typographic overlays, custom sound effects mapping, and 4k coloring workflows.",
      results: ["1.2M organic ad views", "+40% user retention score", "Adopted for national campaigns"]
    },
    {
      title: "Vibe Short-Form Reels",
      slug: "vibe-short-form",
      category: "Video Editing",
      desc: "Short-form algorithmic cuts driving high completion retention.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/Video_production_studio_cinemati…_202607051942_gwr_video_mvp.mp4",
      tags: ["TikTok", "Reels", "Shorts"],
      featured: false,
      about: "Short-form advertising reels optimized for fast-paced social algorithms.",
      challenge: "Reducing user swipe-away rates in the first 1.5 seconds.",
      solution: "Created dynamic zoom cuts, automatic kinetic typography, and high-frequency sound triggers.",
      results: ["+195% TikTok completion rate", "Generated 80k profile visits", "Zero drop-off in first 2 seconds"]
    },
    {
      title: "Velo Corp Explainer",
      slug: "velo-corp-explainer",
      category: "Video Editing",
      desc: "Motion graphics explainer reels mapping complex backend features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/Video_production_studio_cinemati…_202607051942_gwr_video_mvp.mp4",
      tags: ["Corporate", "Explainer", "Cuts"],
      featured: false,
      about: "Corporate explainer and onboarding reels illustrating complex API systems.",
      challenge: "Explaining database logic visually without losing viewer interest.",
      solution: "Integrated detailed 2D motion graphics animations with smooth transitions and professional voiceover mapping.",
      results: ["Used by 10,000+ new hires", "+85% knowledge transfer rate", "Reduced onboarding support requests by 25%"]
    }
  ];

  if (!fs.existsSync(WORK_PATH)) {
    fs.writeFileSync(WORK_PATH, JSON.stringify(defaultWork, null, 2))
  } else {
    try {
      const data = fs.readFileSync(WORK_PATH, 'utf-8');
      const existing = JSON.parse(data);
      if (existing.length !== defaultWork.length) {
        fs.writeFileSync(WORK_PATH, JSON.stringify(defaultWork, null, 2));
      }
    } catch (e) {
      fs.writeFileSync(WORK_PATH, JSON.stringify(defaultWork, null, 2));
    }
  }
}

// Data fetching helpers
export function getBlogPosts(): BlogPost[] {
  ensureDb()
  const data = fs.readFileSync(BLOG_PATH, 'utf-8')
  return JSON.parse(data)
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const posts = getBlogPosts()
  return posts.find(p => p.slug === slug)
}

export function createBlogPost(post: BlogPost) {
  const posts = getBlogPosts()
  posts.push(post)
  fs.writeFileSync(BLOG_PATH, JSON.stringify(posts, null, 2))
}

export function getServices(): ServiceDetail[] {
  ensureDb()
  const data = fs.readFileSync(SERVICES_PATH, 'utf-8')
  return JSON.parse(data)
}

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  const services = getServices()
  return services.find(s => s.slug === slug)
}

export function createService(service: ServiceDetail) {
  const services = getServices()
  services.push(service)
  fs.writeFileSync(SERVICES_PATH, JSON.stringify(services, null, 2))
}

export function getProjects(): WorkProject[] {
  ensureDb()
  const data = fs.readFileSync(WORK_PATH, 'utf-8')
  return JSON.parse(data)
}

export function getProjectBySlug(slug: string): WorkProject | undefined {
  const projects = getProjects()
  return projects.find(p => p.slug === slug)
}

export function createProject(project: WorkProject) {
  const projects = getProjects()
  projects.push(project)
  fs.writeFileSync(WORK_PATH, JSON.stringify(projects, null, 2))
}

export function saveSubmission(submission: Omit<ContactSubmission, 'id' | 'date'>) {
  ensureDb()
  let submissions: ContactSubmission[] = []
  if (fs.existsSync(SUBMISSIONS_PATH)) {
    const data = fs.readFileSync(SUBMISSIONS_PATH, 'utf-8')
    submissions = JSON.parse(data)
  }
  const newSubmission: ContactSubmission = {
    ...submission,
    id: Math.random().toString(36).substr(2, 9),
    date: new Date().toISOString()
  }
  submissions.push(newSubmission)
  fs.writeFileSync(SUBMISSIONS_PATH, JSON.stringify(submissions, null, 2))
  return newSubmission
}
