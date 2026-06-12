import { Project, Service, Advantage, Testimonial } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "LuxEstate — Premium Real Estate Portal",
    category: "Real Estate Website",
    description: "Ultra-luxury real estate application featuring glassmorphic search interfaces, interactive neighborhood map elements, and organic slider galleries designed for high-end clientele.",
    image: "/src/assets/images/real_estate_screenshot_1781251443341.jpg",
    liveUrl: "#",
    tags: ["React", "Vite", "Tailwind CSS", "Motion", "MapBox API"]
  },
  {
    id: "proj-2",
    title: "ApexWear — High-End Fashion E-Commerce",
    category: "E-Commerce Website",
    description: "Sleek, lightning-fast digital storefront with bespoke cart states, beautiful page transition animations, robust filtering workflows, and premium interactive product details pages.",
    image: "/src/assets/images/ecommerce_screenshot_1781251464094.jpg",
    liveUrl: "#",
    tags: ["React", "GraphQL", "Tailwind CSS", "Framer Motion", "Stripe"]
  },
  {
    id: "proj-3",
    title: "VertexBuild — Architecture & Construction Showcase",
    category: "Construction Website",
    description: "Stunning corporate showcase for commercial architecture, utilizing geometric dark grids, immersive project blueprint overlays, and seamless inquiry workflows.",
    image: "/src/assets/images/construction_screenshot_1781251483374.jpg",
    liveUrl: "#",
    tags: ["TypeScript", "React", "Tailwind v4", "Lucide Icons"]
  },
  {
    id: "proj-4",
    title: "Umami — Luxury Dine-In & Digital Ordering",
    category: "Restaurant Website",
    description: "Sleek gastronomy experience portal featuring interactive reservation schedulers, scroll-indexed dish lookups, and visual product presentation engineered for conversion.",
    image: "/src/assets/images/restaurant_screenshot_1781251503301.jpg",
    liveUrl: "#",
    tags: ["React SPA", "CSS Gradients", "Vite", "Motion API"]
  },
  {
    id: "proj-5",
    title: "NovaCare — Clinical Operations & Telehealth",
    category: "Hospital Website",
    description: "Sleek digital gateway for modern healthcare clinics, engineered with intuitive scheduling forms, interactive staff listings, and mobile-first telemetry layouts.",
    image: "/src/assets/images/hospital_screenshot_1781251517459.jpg",
    liveUrl: "#",
    tags: ["React", "Tailwind CSS", "Lucide Icons", "Web Booking"]
  },
  {
    id: "proj-6",
    title: "SaaSify — B2B Marketing & Operations Hub",
    category: "Business Website",
    description: "Advanced corporate platform with responsive analytical charts, key performance metrics panels, and glassmorphic pricing models tailored for high-growth tech firms.",
    image: "/src/assets/images/saas_screenshot_1781251535367.jpg",
    liveUrl: "#",
    tags: ["Vite", "React TS", "Recharts", "Tailwind v4", "Glassmorphism"]
  }
];

export const SERVICES: Service[] = [
  {
    id: "srv-1",
    title: "Business Website Development",
    description: "Bespoke corporate websites custom-tailored to represent your services and establish market authority. Engineered for load-speeds, lead generation, and structural integrity.",
    iconName: "Briefcase",
    priceStart: "$1,499",
    features: [
      "Bespoke wireframes",
      "SEO semantic structuring",
      "High-converting Lead Funnel",
      "Interactive Contact/RFQ Forms",
      "Domain & Analytics integration"
    ]
  },
  {
    id: "srv-2",
    title: "E-Commerce Website Development",
    description: "High-performance digital flagship shops built to convert browsers into lifelong customers. Fully integrated, accessible, and fast desktop-and-mobile checkout systems.",
    iconName: "ShoppingBag",
    priceStart: "$2,999",
    features: [
      "Custom shopping carts & mini-cart",
      "Secure Stripe/PayPal Integration",
      "Inventory & Order Management admin",
      "Custom discount & shipping rules",
      "Tailored UI checkout steps"
    ]
  },
  {
    id: "srv-3",
    title: "High-Impact Landing Pages",
    description: "Ultra-focused single-page frameworks built for paid campaigns (Google/Facebook Ads). Laser-targeted layouts optimized to drive direct actions and maximize sales.",
    iconName: "Target",
    priceStart: "$799",
    features: [
      "Guaranteed load time < 1.2s",
      "Strong A/B tested copy layout",
      "Heatmap tracking configurations",
      "Perfect mobile layout alignment",
      "Seamless CRM tool hookups"
    ]
  },
  {
    id: "srv-4",
    title: "Premium Website Redesign",
    description: "Breathe new life into your outdated legacy platforms. I rebuild your digital face from scratch into a modern, fast, responsive asset that fits your current market standing.",
    iconName: "Sparkles",
    priceStart: "$1,199",
    features: [
      "Existing structure and SEO analysis",
      "Complete modern layout overhaul",
      "Responsiveness fixing",
      "Core Web Vitals stabilization",
      "Transition mechanics upgrading"
    ]
  },
  {
    id: "srv-5",
    title: "Bespoke Portfolio Websites",
    description: "Custom digital showrooms for design studios, premium architects, luxury realtors, and expert creators. Present your assets with fluid visual interactions that command premium rates.",
    iconName: "FolderHeart",
    priceStart: "$999",
    features: [
      "Unique layout interactions",
      "Stunning image showcase setups",
      "High-fidelity hover animations",
      "Custom loading screens",
      "Inquiry routing forms"
    ]
  }
];

export const ADVANTAGES: Advantage[] = [
  {
    id: "adv-1",
    title: "Fast Delivery",
    description: "No endless back-and-forth. I work with rigid development milestones and lightning execution to deliver pixel-perfect websites on or ahead of time.",
    iconName: "Zap",
    metric: "14-Day Avg"
  },
  {
    id: "adv-2",
    title: "Mobile Responsive Design",
    description: "Over 60% of web traffic is mobile. Every layout is developed with a strict responsive architecture to guarantee flawless rendering on desktops, tablets, and phones.",
    iconName: "Smartphone",
    metric: "100% Fluid"
  },
  {
    id: "adv-3",
    title: "Modern UI/UX Showcase",
    description: "No outdated pre-made templates. I build handcrafted, cutting-edge interfaces using premium typography, custom spacing rhythms, and subtle micro-interactions.",
    iconName: "Layout",
    metric: "Premium Custom"
  },
  {
    id: "adv-4",
    title: "SEO-First Architecture",
    description: "A beautiful website is useless if no one can find it. I write semantic, light, optimized code structure that ranks high on Google from day one.",
    iconName: "Search",
    metric: "Google Verified"
  },
  {
    id: "adv-5",
    title: "Affordable & Fair Pricing",
    description: "High-end quality without the massive agency markup. Clear flat-rate pricing structures with zero hidden fees. You know exactly what you are paying for.",
    iconName: "DollarSign",
    metric: "Flat Rates"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Marcus Vance",
    role: "Managing Director",
    company: "Vance & Co. Holdings",
    content: "Daman did what an entire mid-sized agency couldn't. He rebuilt our real estate portal in under three weeks. Our page speed increased by 300%, and we received 42 high-ticket consultation requests in our very first week online. Absolute master of web development.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: "test-2",
    name: "Dr. Elena Rostov",
    role: "Chief of Operations",
    company: "NovaCare Clinics",
    content: "We hired Daman to design our medical booking interface. Our patients are constantly complimenting how easy, elegant, and secure the portal feels. He communicated perfectly throughout the process and exceeded all security requirements.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: "test-3",
    name: "Chef Kenji Sato",
    role: "Executive Creator",
    company: "Umami Group",
    content: "Our online table booking and dining catalog were outdated. Daman created a gorgeous, dark, interactive website that fits our dining room aesthetic perfectly. Online bookings rose by 35% within the first month. He combines visual genius with technical speed.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200"
  }
];
