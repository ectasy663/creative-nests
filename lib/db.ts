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
At Creative Nests, we don't believe in one-size-fits-all. We audit your existing pipelines, integrate custom hooks to capture leads, and automate client follow-ups to maximize operational velocity.`,
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
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-futuristic-subway-station-with-neon-lights-43958-large.mp4',
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
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-screen-of-a-computer-with-running-code-42231-large.mp4',
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
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-render-of-floating-colors-43224-large.mp4',
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
        desc: 'Getting traffic is easy; getting high-intent, converting traffic is the challenge. We run technical SEO campaigns, content strategies, and link building programs that position your brand at the absolute top of search results. Dominate your market share and capture leads organicially.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-financial-graphics-running-on-a-computer-screen-42229-large.mp4',
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
        desc: 'Stop wasting money on campaigns that don\'t convert. We construct strategic funnel-based ads on Meta (Facebook, Instagram), Google, and LinkedIn. We combine highly engaging ad creatives with hyper-targeted audience testing to scale your acquisition profitabilty.',
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hand-holding-a-smartphone-displaying-social-media-41618-large.mp4',
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
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-timeline-of-a-video-editing-software-42352-large.mp4',
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
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-working-on-a-laptop-at-home-42337-large.mp4',
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
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-server-room-racks-in-a-datacenter-41584-large.mp4',
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

  // Seed Projects (Work) if empty
  if (!fs.existsSync(WORK_PATH)) {
    const defaultWork: WorkProject[] = [
      {
        title: "Creative Nests Launch 2024",
        slug: "creative-nests-launch",
        category: "CGI & Production",
        desc: "Immersive 3D/CGI visual branding mapping the modern frontier.",
        image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-futuristic-subway-station-with-neon-lights-43958-large.mp4",
        tags: ["CGI", "VFX", "Motion"],
        featured: true,
        about: "Creative Nests Launch represents our signature visual catalog, capturing next-generation design paradigms through a series of CGI-rendered environments.",
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
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-abstract-render-of-floating-colors-43224-large.mp4",
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
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-screen-of-a-computer-with-running-code-42231-large.mp4",
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
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-working-on-a-laptop-at-home-42337-large.mp4",
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
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-server-room-racks-in-a-datacenter-41584-large.mp4",
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
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hand-holding-a-smartphone-displaying-social-media-41618-large.mp4",
        tags: ["Paid Ads", "Google", "Funnel"],
        featured: false,
        about: "Vortex needed to rapidly acquire high-intent enterprise accounts for their logistics SaaS.",
        challenge: "Cost per lead on standard keywords was exceeding $120 with low search query relevance.",
        solution: "Structured multi-stage retargeting campaigns with custom landing page funnels and intent-specific keyword exclusions.",
        results: ["Reduced cost-per-lead by 55%", "12.4x ROI across Search campaigns", "Generated 800+ enterprise leads"]
      }
    ]
    fs.writeFileSync(WORK_PATH, JSON.stringify(defaultWork, null, 2))
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
