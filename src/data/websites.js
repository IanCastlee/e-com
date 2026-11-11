/**
 * Ready-Made & Customisable Website Solutions offered by e-yhan
 * Mapped across the 9 official categories:
 * Personal Portfolio, Business, Resort & Hotel, Government & Community,
 * School & Portal, Real Estate, Tourism & Eco-tourism, Events & Invitations, Others / Custom.
 */
export const websites = [
  {
    id: "web-00",
    code: "Photographer_portfolio1",
    title: "Photographer Portfolio",
    slug: "photographer-portfolio",
    category: "personal-portfolio",
    categoryName: "Personal Portfolio",
    shortDescription:
      "Cinematic dark-mode photographer & visual storyteller portfolio with high-resolution works gallery, camera gear showcase, and booking inquiry flow.",
    description:
      "A sleek, editorial-grade personal portfolio crafted for professional photographers, videographers, creative directors, and visual storytellers. Features a bold hero showcase with continuous light sweep on desktop and mobile, filterable campaign galleries, camera & lens gear specifications, service packages, and dark/light theme support.",
    features: [
      "Cinematic Hooded Storyteller Hero with Ping-Pong Light Sweep",
      "Studio & Creative Direction Metrics Card (12+ Years, 50+ Campaigns)",
      "High-Resolution Masonry Works & Global Campaign Gallery",
      "Camera Bodies, Medium Format & Lens Gear Breakdown Section",
      "Photography & Creative Direction Service Packages",
      "Built-In Dark / Light Mode Toggle & Mobile-First Responsive Layout",
      "Direct Shoot Booking & Client Inquiry Contact Form",
    ],
    techStack: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Lucide React",
      "Atomic Design Architecture",
    ],
    price: 75,
    turnaround: "2–4 Business Days",
    clientType:
      "Photographers, Videographers, Visual Storytellers, Creative Directors",
    thumbnail: "/portfolio/photographer/thumbnail/photographer_thumbnail.jpg",
    gallery: ["/portfolio//photographer/photographer_thumbnail.jpg"],
    demoUrl: "https://demo.e-yhan.ph/photographer-portfolio",
    featured: true,
    popularScore: 100,
    createdAt: "2026-11-08",
  },
  {
    id: "web-01",
    code: "Resort1",
    title: "Luxury Resort & Hotel Booking Website",
    slug: "resort-website",
    category: "resort-hotel",
    categoryName: "Resort & Hotel",
    shortDescription:
      "A high-converting, luxury resort & hotel booking website built with React and Tailwind CSS, featuring streamlined reservation workflows, immersive photo galleries, and zero-commission direct guest inquiries.",
    description:
      "Engineered specifically for boutique resorts, hot spring retreats, private villas, and eco-lodges. This production-ready hospitality web system delivers an editorial, upscale guest experience with direct booking inquiry pipelines, interactive room/cottage showcases, dynamic amenities breakdown, and responsive mobile-first navigation—eliminating expensive third-party booking commissions.",
    features: [
      "Streamlined Reservation & Inquiry Workflow (Direct to Front Desk / Email)",
      "Interactive Room, Villa & Day-Use Cabana Showcase with Feature Badges",
      "Full-Screen 100vh Hero Showcase with High-Contrast CTA & Floating Direct Chat",
      "Categorized Masonry Photo Gallery with Keyboard-Accessible Lightbox",
      "Atomic Design Architecture (100% Data-Driven & Zero Hardcoded Content)",
      "SEO-Ready OpenGraph Meta Tags & Route-Based Code Splitting",
      "Embedded Interactive Google Maps & Nearby Tourist Attractions Guide",
    ],
    techStack: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "React Router v6",
      "React Helmet Async",
      "Atomic Design Architecture",
    ],
    price: 330,
    turnaround: "5–7 Business Days",
    clientType: "Beach & Mountain Resorts, Boutique Hotels, Staycation Villas",
    thumbnail: "/resort_and_hotel/resort1/thumbnail/resort_thumbnail1.jpg",
    gallery: [
      "/resort_and_hotel/resort1/resort1.webp",
      "/resort_and_hotel/resort1/resort2.webp",
      "/resort_and_hotel/resort1/resort3.webp",
      "/resort_and_hotel/resort1/resort4.webp",
      "/resort_and_hotel/resort1/resort5.webp",
    ],
    demoUrl: "https://demo.e-yhan.ph/bulusan-lake-resort",
    featured: true,
    popularScore: 99,
    createdAt: "2026-10-28",
  },
  {
    id: "web-02",
    code: "VA_portfolio1",
    title: "Virtual Assistant Portfolio",
    slug: "va-portfolio",
    category: "personal-portfolio",
    categoryName: "Personal Portfolio",
    shortDescription:
      "High-converting executive virtual assistant & business operations portfolio with measurable ROI metrics, retainer pricing, and discovery booking flow.",
    description:
      "A sleek, editorial-grade personal portfolio engineered for executive virtual assistants, fractional COOs, and operations partners. Features in-depth client case study breakdowns, retainer vs. hourly pricing packages, software proficiency matrix, and multi-page routing with dark/light mode support.",
    features: [
      "Executive Storytelling Hero with Dynamic Monogram Seal & Metrics Card",
      "Comprehensive Client Case Studies with Measurable ROI & Time Saved",
      "Monthly Retainer & Hourly Tiered Package Comparison Cards",
      "Tools & Software Proficiency Matrix (Notion, ClickUp, Asana, Slack, HubSpot)",
      "Built-In Dark / Light Mode Toggle with Luxury Page Transitions",
      "Interactive Discovery Call Scheduler & Direct Inquiry Contact Form",
    ],
    techStack: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Lucide React",
      "React Router v6",
    ],
    price: 75,
    turnaround: "2–4 Business Days",
    clientType:
      "Executive Virtual Assistants, Fractional Operations Partners, Remote Specialists",
    thumbnail: "/portfolio/va/thumbnail/va_thumbnail.webp",
    gallery: ["/portfolio/va/va_thumbnail.webp"],
    demoUrl: "https://demo.e-yhan.ph/va-portfolio",
    featured: true,
    popularScore: 98,
    createdAt: "2026-11-08",
  },

  // ==========================================
  // WEBSITE 02: Ultra-Luxury Dark Resort & Private Reserve
  // ==========================================
  {
    id: "web-03",
    code: "Resort3",
    title: "Ultra-Luxury Dark Resort & Private Reserve Website",
    slug: "ultra-luxury-resort-website",
    category: "resort-hotel",
    categoryName: "Resort & Hotel",
    shortDescription:
      "A cinematic, high-end dark luxury resort web system featuring a 100vh viewport hero with an integrated 5-column availability picker, VIP concierge inquiries, and fluid micro-interactions.",
    description:
      "Crafted for presidential estates, ultra-exclusive island retreats, clifftop private reserves, and 5-star boutique hotels. This dark-aesthetic hospitality platform commands immediate prestige with an exact 100vh hero viewport, an overlapping quick-date & guest check-in widget, adaptive glassmorphism sticky navigation, and bespoke booking inquiry pipelines tailored for high-net-worth guests.",
    features: [
      "Exact 100vh Cinematic Hero Viewport with Zero-Scroll Quick Availability Picker",
      "5-Column Live Date & Guest Reservation Engine (Arrival, Departure, Adults, Children)",
      "Adaptive Glassmorphism Sticky Navbar with Dynamic Scroll-Collapse Header",
      "Subtle GPU-Accelerated Staggered Card Scroll Animations (Cubic-Bezier Easing)",
      "Private Villa, Presidential Estate & Oceanfront Pavilion Showcase",
      "Haute Expedition & Subterranean Hydrothermal Spa Treatment Portfolios",
      "100% Centralized Data Architecture (Instant Single-File Rebranding)",
      "Compact 8px Mobile-Optimized Edge Margins for Frictionless Smartphone Browsing",
    ],
    techStack: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "React Router v6",
      "React Helmet Async",
      "IntersectionObserver Engine",
      "Glassmorphism UI",
    ],
    price: 360,
    turnaround: "5–7 Business Days",
    clientType:
      "Ultra-Luxury Private Reserves, Clifftop Villas, 5-Star Boutique Hotels, Island Retreats",
    thumbnail: "/resort_and_hotel/resort3/thumbnail/resort_thumbnail3.webp",
    gallery: [
      "/resort_and_hotel/dark_resort1.webp",
      "/resort_and_hotel/dark_resort2.webp",
      "/resort_and_hotel/dark_resort3.webp",
      "/resort_and_hotel/dark_resort4.webp",
      "/resort_and_hotel/dark_resort5.webp",
    ],
    demoUrl: "https://e-yhan-resort1.onrender.com",
    featured: true,
    popularScore: 98,
    createdAt: "2026-11-08",
  },

  // ==========================================
  // WEBSITE 03: Tropical Eco-Luxury Coastal Sanctuary
  // ==========================================
  {
    id: "web-04",
    code: "Resort2",
    title: "Tropical Coastal Eco-Sanctuary & Pool Villa Website",
    slug: "eco-luxury-sanctuary-website",
    category: "resort-hotel",
    categoryName: "Resort & Hotel",
    shortDescription:
      "An editorial, warm-stone eco-luxury resort website inspired by top architectural retreats, featuring signature arched commitment cards, horizontal feature ribbons, and retreat journal stories.",
    description:
      "Designed specifically for beachfront pool villas, sustainable eco-sanctuaries, wellness retreat centers, and tropical island hideaways. Featuring an organic cream, sand, and ocean slate palette, this website pairs an edge-to-edge daytime tropical pool hero with modern arched philosophy cards, a horizontal icon ribbon, magazine-style retreat guides, and a zero-commission direct reservation pipeline.",
    features: [
      "Full-Bleed Edge-to-Edge Daytime Tropical Pool Hero with Animated Down-Indicator",
      "Minimalist Horizontal Feature Ticker Ribbon with Custom SVG Line Icons",
      "Signature 4 Arched Commitment Cards (People, Places, Experiences, Sustainable Living)",
      "Editorial Magazine Journal Section ('Inspiration for your Next Retreat')",
      "Private Pool Villa Spec Cards with Price Pills, Amenity Badges & Zoom Micro-Interactions",
      "Direct Reservation Inquiry Pipeline with Instant Reference Code Generator",
      "Seamless Mobile-First Layout with 8px Screen-Edge Optimization",
      "100% Dynamic Brand Name & Location Data Binding (Zero Hardcoded References)",
    ],
    techStack: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "React Router v6",
      "React Helmet Async",
      "Custom Arch Layouts",
      "Editorial Typography",
    ],
    price: 350,
    turnaround: "5–7 Business Days",
    clientType:
      "Eco-Luxury Beachfront Villas, Tropical Wellness Retreats, Sustainable Nature Sanctuaries",
    thumbnail: "/resort_and_hotel/resort2/thumbnail/resort_thumbnail2.webp",
    gallery: [
      "/resort_and_hotel/haven_resort1.webp",
      "/resort_and_hotel/haven_resort2.webp",
      "/resort_and_hotel/haven_resort3.webp",
      "/resort_and_hotel/haven_resort4.webp",
      "/resort_and_hotel/haven_resort5.webp",
    ],
    demoUrl: "https://demo.e-yhan.ph/eyhan-haven",
    featured: true,
    popularScore: 97,
    createdAt: "2026-11-09",
  },
];
export default websites;
