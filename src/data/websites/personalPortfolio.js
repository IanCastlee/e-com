/**
 * Category: Personal Portfolio
 * Current count: 2 websites
 * 1. Photographer_portfolio1
 * 2. VA_portfolio1
 */
export const personalPortfolioWebsites = [
  {
    id: 'web-00',
    code: 'Photographer_portfolio1',
    title: 'Photographer Portfolio',
    slug: 'photographer-portfolio',
    category: 'personal-portfolio',
    categoryName: 'Personal Portfolio',
    shortDescription:
      'Cinematic dark-mode photographer & visual storyteller portfolio with high-resolution works gallery, camera gear showcase, and booking inquiry flow.',
    description:
      'A sleek, editorial-grade personal portfolio crafted for professional photographers, videographers, creative directors, and visual storytellers. Features a bold hero showcase with continuous light sweep on desktop and mobile, filterable campaign galleries, camera & lens gear specifications, service packages, and dark/light theme support.',
    features: [
      'Cinematic Hooded Storyteller Hero with Ping-Pong Light Sweep',
      'Studio & Creative Direction Metrics Card (12+ Years, 50+ Campaigns)',
      'High-Resolution Masonry Works & Global Campaign Gallery',
      'Camera Bodies, Medium Format & Lens Gear Breakdown Section',
      'Photography & Creative Direction Service Packages',
      'Built-In Dark / Light Mode Toggle & Mobile-First Responsive Layout',
      'Direct Shoot Booking & Client Inquiry Contact Form',
    ],
    techStack: [
      'React 18',
      'Vite',
      'Tailwind CSS',
      'Lucide React',
      'Atomic Design Architecture',
    ],
    price: 75,
    turnaround: '2–4 Business Days',
    clientType:
      'Photographers, Videographers, Visual Storytellers, Creative Directors',
    thumbnail: '/portfolio/photographer/thumbnail/photographer_thumbnail.jpg',
    gallery: ['/portfolio//photographer/photographer_thumbnail.jpg'],
    demoUrl: 'https://demo.e-yhan.ph/photographer-portfolio',
    featured: true,
    popularScore: 100,
    createdAt: '2026-11-08',
  },
  {
    id: 'web-02',
    code: 'VA_portfolio1',
    title: 'Virtual Assistant Portfolio',
    slug: 'va-portfolio',
    category: 'personal-portfolio',
    categoryName: 'Personal Portfolio',
    shortDescription:
      'High-converting executive virtual assistant & business operations portfolio with measurable ROI metrics, retainer pricing, and discovery booking flow.',
    description:
      'A sleek, editorial-grade personal portfolio engineered for executive virtual assistants, fractional COOs, and operations partners. Features in-depth client case study breakdowns, retainer vs. hourly pricing packages, software proficiency matrix, and multi-page routing with dark/light mode support.',
    features: [
      'Executive Storytelling Hero with Dynamic Monogram Seal & Metrics Card',
      'Comprehensive Client Case Studies with Measurable ROI & Time Saved',
      'Monthly Retainer & Hourly Tiered Package Comparison Cards',
      'Tools & Software Proficiency Matrix (Notion, ClickUp, Asana, Slack, HubSpot)',
      'Built-In Dark / Light Mode Toggle with Luxury Page Transitions',
      'Interactive Discovery Call Scheduler & Direct Inquiry Contact Form',
    ],
    techStack: [
      'React 18',
      'Vite',
      'Tailwind CSS',
      'Lucide React',
      'React Router v6',
    ],
    price: 75,
    turnaround: '2–4 Business Days',
    clientType:
      'Executive Virtual Assistants, Fractional Operations Partners, Remote Specialists',
    thumbnail: '/portfolio/va/thumbnail/va_thumbnail.webp',
    gallery: ['/portfolio/va/va_thumbnail.webp'],
    demoUrl: 'https://demo.e-yhan.ph/va-portfolio',
    featured: true,
    popularScore: 98,
    createdAt: '2026-11-08',
  },
];

export default personalPortfolioWebsites;
