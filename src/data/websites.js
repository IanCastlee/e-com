/**
 * Ready-Made & Customisable Website Solutions offered by e-yhan
 * Mapped across the 9 official categories:
 * Personal Portfolio, Business, Resort & Hotel, Government & Community,
 * School & Portal, Real Estate, Tourism & Eco-tourism, Events & Invitations, Others / Custom.
 */
export const websites = [
  {
    id: "web-00",
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
    demoUrl: "https://demo.e-yhan.ph/eyhan-luxury-resort",
    featured: true,
    popularScore: 98,
    createdAt: "2026-11-08",
  },

  // ==========================================
  // WEBSITE 03: Tropical Eco-Luxury Coastal Sanctuary
  // ==========================================
  {
    id: "web-04",
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

  {
    id: "web-06",
    title: "Discover Bulusan & Eco-Tourism Travel Portal",
    slug: "discover-bulusan-tourism",
    category: "tourism-ecotourism",
    categoryName: "Tourism & Eco-tourism",
    shortDescription:
      "Destination guide and accredited eco-tour operator portal featuring volcano treks, coastal tours, and curated travel packages.",
    description:
      "Built for municipal tourism offices, eco-parks, travel agencies, and accredited tour operators. Visitors can explore curated multi-day itineraries, book certified local mountain and coastal guides, check environmental fee schedules, and read verified traveler reviews.",
    features: [
      "Interactive Destination Map & Scenic Eco-Spot Directory",
      "Customizable Day-Tour & Multi-Day Itinerary Builder",
      "Accredited Tour Guide & Van Rental Booking Directory",
      "Environmental & Entrance Fee Transparency Calculator",
      "Travel Advisory & Seasonal Best-Time-to-Visit Guide",
      "Multilingual & Multi-Currency Display Helper for International Guests",
    ],
    techStack: [
      "React 18",
      "Tailwind CSS",
      "Framer Motion",
      "Itinerary Engine",
      "OpenGraph SEO",
    ],
    price: 375,
    turnaround: "6–9 Business Days",
    clientType: "Tourism Offices, Eco-Parks, Travel Agencies, Tour Operators",
    thumbnail:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=85",
    ],
    demoUrl: "https://demo.e-yhan.ph/discover-bulusan",
    featured: false,
    popularScore: 91,
    createdAt: "2026-10-04",
  },
  {
    id: "web-07",
    title: "Bicol Builders & Civil Engineering Corp.",
    slug: "bicol-builders-corporate",
    category: "business",
    categoryName: "Business",
    shortDescription:
      "Authoritative corporate profile for construction contractors, hardware suppliers, and architectural firms with project estimator.",
    description:
      "Establish rock-solid B2B and enterprise bidding credibility. This corporate website highlights license credentials, completed infrastructure and residential builds, safety milestones, and an interactive Request-for-Quotation (RFQ) calculator.",
    features: [
      "Filterable Completed & Ongoing Infrastructure Project Portfolio",
      "Interactive Construction Cost & Lot Area Initial Estimator",
      "License, ISO & Industry Accreditation Trust Showcase",
      "Heavy Equipment Rental & Civil Works Service Catalog",
      "Downloadable Company Profile PDF & Capability Statement",
      "Direct RFQ Bid Invitation Upload Form",
    ],
    techStack: [
      "React 18",
      "Tailwind CSS",
      "Estimator Hook",
      "Corporate UI",
      "Lead Capture",
    ],
    price: 180,
    turnaround: "5–7 Business Days",
    clientType: "Construction Firms, Engineering Consultants, Corporate SMEs",
    thumbnail:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
    ],
    demoUrl: "https://demo.e-yhan.ph/bicol-builders",
    featured: false,
    popularScore: 89,
    createdAt: "2026-09-27",
  },
  {
    id: "web-08",
    title: "EverAfter Digital Wedding & Event RSVP Suite",
    slug: "everafter-wedding-invitation",
    category: "events-invitations",
    categoryName: "Events & Invitations",
    shortDescription:
      "Elegant interactive digital invitation for weddings, debuts, and gala events with live countdown, seat finder, and online RSVP.",
    description:
      "Replace paper invitations with an unforgettable interactive event website. Guests can view your prenup photo/video story, check dress code palettes, find their ceremony & reception directions, search their table assignment, and confirm their attendance (RSVP) with meal preferences in seconds.",
    features: [
      "Live Event Countdown Timer & Add-to-Google/Apple Calendar Button",
      "Interactive Online RSVP Form with Guest Count & Dietary Notes",
      "Prenup Photo Gallery, Love Story Timeline & Background Music Toggle",
      "Entourage List, Dress Code Color Palette & Gift Registry / Monetary QR",
      "Waze & Google Maps Ceremony + Reception Venue Pins",
      "QR Code Pass Generator & Guest Table Seat Lookup",
    ],
    techStack: [
      "React 18",
      "Tailwind CSS",
      "Framer Motion",
      "RSVP Tracker",
      "Audio Toggle",
    ],
    price: 65,
    turnaround: "2–3 Business Days",
    clientType: "Weddings, 18th Debuts, Anniversaries, Corporate Conferences",
    thumbnail:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
    ],
    demoUrl: "https://demo.e-yhan.ph/everafter-rsvp",
    featured: false,
    popularScore: 92,
    createdAt: "2026-09-19",
  },
  {
    id: "web-09",
    title: "Dancalan Coastal Surf Camp & Beach Hotel",
    slug: "dancalan-surf-camp",
    category: "resort-hotel",
    categoryName: "Resort & Hotel",
    shortDescription:
      "Vibrant coastal resort & surf hotel website featuring wave reports, board rentals, glamping tents, and group packages.",
    description:
      "Tailored for surf camps, coastal hotels, and island glamping destinations. Combines laid-back coastal aesthetics with a fast booking funnel for surf lessons, beachfront cabanas, and weekend group packages.",
    features: [
      "Group & Family Package Rate Calculator",
      "Surf Lesson & Instructor Slot Booking with Tide Times",
      "Beachfront Cabana, Hotel Room & Glamping Tent Selector",
      "Live Coastal Weather & Swell Condition Indicator",
      "Acoustic Sunset Session & Event Calendar",
      "Instant Direct Messaging & Booking Integration",
    ],
    techStack: ["React 18", "Tailwind CSS", "Framer Motion", "Package Builder"],
    price: 170,
    turnaround: "4–6 Business Days",
    clientType: "Surf Camps, Beach Hotels, Dive Resorts, Glamping Sites",
    thumbnail:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
    ],
    demoUrl: "https://demo.e-yhan.ph/dancalan-surf",
    featured: false,
    popularScore: 87,
    createdAt: "2026-09-12",
  },
  {
    id: "web-10",
    title: "Disaster Safety & Offline-First Community Alert System",
    slug: "disaster-safety-community-system",
    category: "government-community",
    categoryName: "Government & Community",
    shortDescription:
      "Resilient community disaster response & evacuation center locator designed to work even during low-signal typhoon conditions.",
    description:
      "Engineered for MDRRMO offices, provincial disaster response teams, and coastal/volcanic communities. Provides real-time evacuation center capacity tracking, offline-cached emergency protocols, family safety check-ins, and instant distress reporting.",
    features: [
      "Offline-First PWA Architecture (Works When Signal Drops)",
      "Interactive Evacuation Center Map & Capacity Status Board",
      "One-Tap Emergency Hotline & Rescue Dispatch Coordinates",
      "Typhoon, Flood & Volcano Advisory Broadcast Banner",
      "Community Volunteer & Relief Goods Transparency Tracker",
      "Low-Battery Dark UI Mode for Emergency Situations",
    ],
    techStack: [
      "React 18",
      "Tailwind CSS",
      "Offline-First PWA",
      "Geolocation UI",
    ],
    price: 350,
    turnaround: "6–10 Business Days",
    clientType: "DRRM Offices, LGUs, Community Rescue Groups, NGOs",
    thumbnail:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85",
    ],
    demoUrl: "https://demo.e-yhan.ph/disaster-safety",
    featured: false,
    popularScore: 94,
    createdAt: "2026-09-02",
  },

  {
    id: "web-12",
    title: "Custom Web Application, SaaS & Internal Operations Portal",
    slug: "custom-web-application-system",
    category: "others-custom",
    categoryName: "Others / Custom",
    shortDescription:
      "Bespoke web system engineered from scratch—including custom dashboards, loan/inventory ledgers, POS, or specialized workflows.",
    description:
      "Have a unique idea or internal business workflow that doesn’t fit a standard template? We architect custom static tools and full-stack database applications—from loan ledger systems and cemetery locators to custom booking engines and analytics dashboards.",
    features: [
      "100% Bespoke UI/UX & Database Schema Tailored to Your Workflow",
      "Role-Based Admin, Staff & Client Portal Dashboards",
      "Custom Calculators, Automated Reports & Printable PDF Receipts",
      "REST API Integrations, Webhooks & Third-Party Service Sync",
      "Scalable Modular Atomic Design Codebase",
      "Full Source Code Handover & Dedicated Engineering Support",
    ],
    techStack: [
      "React 18",
      "Tailwind CSS",
      "Custom Architecture",
      "Full-Stack Ready",
    ],
    price: 250,
    turnaround: "Custom Timeline",
    clientType: "Startups, Enterprises, Specialized Community & Business Tools",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    ],
    demoUrl: "https://demo.e-yhan.ph/custom-system",
    featured: false,
    popularScore: 88,
    createdAt: "2026-08-15",
  },
];

export default websites;
