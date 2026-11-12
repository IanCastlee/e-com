/**
 * Category: Personal Portfolio
 * Current count: 2 websites
 * 1. Photographer_portfolio1
 * 2. VA_portfolio1
 */
export const personalPortfolioWebsites = [
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
    pricing: {
      basic: {
        name: "Basic (Static Website)",
        usd: 55,
        php: 3000,
        formatted: "$55 (₱3,000)",
      },
      premium: {
        name: "Premium (Dynamic Website + Admin Panel)",
        usd: 150,
        php: 8500,
        formatted: "$150 (₱8,500)",
      },
    },
    price: 55,
    turnaround: "2–4 Business Days",
    clientType:
      "Photographers, Videographers, Visual Storytellers, Creative Directors",
    thumbnail: "/portfolio/photographer/thumbnail/photographer_thumbnail.webp",
    gallery: ["/portfolio//photographer/photographer_thumbnail.webp"],
    demoUrl: "https://demo.e-yhan.ph/photographer-portfolio",
    featured: true,
    popularScore: 100,
    createdAt: "2026-11-08",
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
    pricing: {
      basic: {
        name: "Basic (Static Website)",
        usd: 55,
        php: 3000,
        formatted: "$55 (₱3,000)",
      },
      premium: {
        name: "Premium (Dynamic Website + Admin Panel)",
        usd: 150,
        php: 8500,
        formatted: "$150 (₱8,500)",
      },
    },
    price: 55,
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

  {
    id: "006",
    code: "Band1",
    title:
      "Official Rock Band Portfolio, Tour Schedule & Music Showcase Website",
    slug: "band-portfolio-music-showcase-website",
    category: "personal-portfolio",
    categoryName: "Personal Portfolio",
    shortDescription:
      "An electric, crimson-glow rock band portfolio and booking platform inspired by top music showcase architectures, featuring full-bleed hero sliders, album streaming hubs, tour schedule calendars, and direct gig booking pipelines.",
    description:
      "Designed specifically for rock bands, indie musicians, recording artists, festival headliners, and touring acts. Featuring a cinematic dark navy and crimson concert lighting palette, this website pairs an edge-to-edge interactive rock frontman carousel with official album release showcases, dynamic tour date calendars, electronic press kit (EPK) downloads, and a zero-commission direct event booking pipeline.",
    features: [
      "Full-Bleed Edge-to-Edge Rock Frontman Hero Carousel with Animated Controls",
      "Official New Release & Album Streaming Hub (Spotify, Apple Music, YouTube Music)",
      "Interactive Tour Schedule Calendar with Live Ticket Booking & Venue Routing",
      "Lightweight YouTube & Spotify Video Facades for Maximum Page Speed & SEO Score",
      "Comprehensive Band Bio & Member Profiles (Photo, Instruments, Short Bio)",
      "Electronic Press Kit (EPK) Download Hub for Promoters, Festivals & Media Outlets",
      "Direct Gig & Event Booking Inquiry Pipeline with Venue & Budget Specifiers",
      "100% Static Site Generation (SSG Prerender) with Schema.org MusicGroup SEO",
    ],
    techStack: [
      "React 18",
      "Vite",
      "vite-react-ssg",
      "Tailwind CSS",
      "React Router v6",
      "Framer Motion",
      "Self-Hosted Typography (@fontsource)",
      "Atomic Design Architecture",
    ],
    pricing: {
      basic: {
        name: "Basic (Static Website)",
        usd: 55,
        php: 3000,
        formatted: "$55 (₱3,000)",
      },
      premium: {
        name: "Premium (Dynamic Website + Admin Panel)",
        usd: 350,
        php: 19500,
        formatted: "$350 (₱19,500)",
      },
    },
    price: 55,
    turnaround: "5–7 Business Days",
    clientType:
      "Rock Bands, Indie Artists, Solo Musicians, Touring Acts, Recording Artists",
    thumbnail: "/portfolio/band/thumbnail/band1.webp",
    gallery: [
      "/portfolio/band/band1.webp",
      "/portfolio/band/band2.jpg",
      "/portfolio/band/band3.jpg",
      "/portfolio/band/band4.jpg",
      "/portfolio/band/band5.jpg",
    ],
    demoUrl: "https://demo.e-yhan.ph/e-yhan-band",
    featured: true,
    popularScore: 98,
    createdAt: "2026-11-11",
  },
  {
    id: "007",
    code: "Coach1",
    title:
      "Mindful Life & Leadership Coaching, Scrollytelling Portfolio & Consultation Booking Website",
    slug: "mindful-life-coach-leadership-mentorship-website",
    category: "personal-portfolio",
    categoryName: "Personal Portfolio",
    shortDescription:
      "A warm-minimalist, editorial luxury life coach and executive leadership portfolio featuring interactive 4-stage scrollytelling narratives, 1-on-1 coaching program showcases, client testimonial carousels, and direct consultation booking pipelines.",
    description:
      "Tailored specifically for transformational life coaches, executive mentors, holistic wellness practitioners, and personal development speakers. Featuring an organic warm sand and espresso editorial palette, this website pairs an immersive 4-stage scrollytelling journey with dynamic program curriculums, interactive FAQ accordions, thought leadership journal essays, and a direct consultation scheduling pipeline in Sorsogon, Philippines.",
    features: [
      "Interactive 4-Stage Scrollytelling Narrative & Scroll-Driven Reading Progress Bar",
      "Curated 1-on-1 Coaching Program Showcase with Detailed 4-Phase Curriculums",
      "Interactive Client Testimonial Selector with Circular Avatar Thumbnails",
      "Dynamic FAQ Accordion with Schema.org FAQPage Rich Snippet Integration",
      "Thought Leadership Journal & Essay Hub with 300+ Word Structured Content",
      "Direct Consultation & Discovery Call Booking Pipeline with Real-Time Validation",
      "Local SEO Architecture with Semantic Schema.org ProfessionalService & Address Text",
      "100% Static Site Generation (SSG Prerender) with vite-react-ssg for 90+ Lighthouse Score",
    ],
    techStack: [
      "React 18",
      "Vite",
      "vite-react-ssg",
      "Tailwind CSS",
      "React Router v6",
      "Framer Motion",
      "Self-Hosted Typography (@fontsource)",
      "Atomic Design Architecture",
    ],
    pricing: {
      basic: {
        name: "Basic (Static Website)",
        usd: 55,
        php: 3000,
        formatted: "$55 (₱3,000)",
      },
      premium: {
        name: "Premium (Dynamic Website + Admin Panel)",
        usd: 350,
        php: 19500,
        formatted: "$350 (₱19,500)",
      },
    },
    price: 55,
    turnaround: "5–7 Business Days",
    clientType:
      "Life Coaches, Executive Mentors, Holistic Wellness Practitioners, Therapists, Leadership Consultants",
    thumbnail: "/portfolio/coach/thumbnail/coach1.webp",
    gallery: [
      "/portfolio/coach/coach1.webp",
      "/portfolio/coach/coach2.jpg",
      "/portfolio/coach/coach3.jpg",
      "/portfolio/coach/coach4.jpg",
      "/portfolio/coach/coach5.jpg",
    ],
    demoUrl: "https://demo.e-yhan.ph/e-yhan-coaching",
    featured: true,
    popularScore: 99,
    createdAt: "2026-11-11",
  },
];

export default personalPortfolioWebsites;
