import { BRAND_INFO } from '../utils/constants';

/**
 * Company-level content, navigation, metrics, and about data for e-yhan
 * Ensures zero hardcoded text inside UI components.
 */
export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Storefront & Portfolio', path: '/portfolio' },
  { label: 'Solutions & Pricing', path: '/services' },
  { label: 'About Company', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
];

export const heroData = {
  originBadge: 'Proudly Engineered in Bulusan, Sorsogon • Serving Clients Worldwide',
  headline: 'Enterprise-Grade Websites & Digital Storefronts for Modern Growth.',
  highlightedText: 'Ready to Launch in Days.',
  subheadline:
    'e-yhan is a Bicolano web engineering studio building high-converting ready-made and custom websites for resorts, communities, schools, cafes, and growing businesses locally and worldwide.',
  primaryCta: {
    label: 'Explore Website Catalog',
    path: '/portfolio',
    icon: 'LayoutGrid',
  },
  secondaryCta: {
    label: 'Get a Custom Website',
    path: '/contact',
    icon: 'ArrowUpRight',
  },
  trustBadges: [
    { icon: 'ShieldCheck', label: '99.9% Uptime Cloud Architecture' },
    { icon: 'Smartphone', label: '100% Mobile-First & Responsive' },
  ],
  heroImage: {
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85',
    secondarySrc: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    alt: 'e-yhan Web Engineering Studio — Modern Multi-Device Websites and Digital Storefronts',
    floatingTopBadge: 'Production-Ready Web Systems',
    floatingBottomTitle: 'Custom & Ready-Made Architecture',
    floatingBottomSubtitle: 'Built with React, Tailwind CSS & Enterprise SEO',
  },
  companyStats: [
    { value: '100% Free', label: 'Customization Included', detail: 'Tailored based on user needs' },
    { value: 'Direct Support', label: 'Developer Consultation', detail: 'No middlemen or agency bloat' },
    { value: '2–7 Days', label: 'Fast Turnaround', detail: 'From inquiry to live domain' },
    { value: '98/100', label: 'Performance Score', detail: 'Fast Core Web Vitals' },
  ],
};

export const companyHighlights = [
  {
    id: 'hl-01',
    icon: 'Zap',
    title: 'Engineered for Speed & Mobile Data',
    description:
      'Over 85% of Filipino customers browse on smartphones. Every e-yhan system is built with lightweight React & Tailwind architecture for sub-second page loads.',
  },
  {
    id: 'hl-02',
    icon: 'Layers',
    title: 'Strict Atomic Design Modularity',
    description:
      'Our codebase follows strict Atomic Design standards—meaning your website can seamlessly scale from a starter brochure site to a full API-driven enterprise portal.',
  },
  {
    id: 'hl-03',
    icon: 'HeartHandshake',
    title: 'Direct Bicolano Craftsmanship & Support',
    description:
      'Work directly with a senior frontend engineer based in Bulusan, Sorsogon. No middlemen, no bloated agency retainers—just honest, responsive partnership.',
  },
];

export const aboutPageData = {
  badge: 'About e-yhan Digital Solutions',
  headline: 'World-Class Web Engineering, Rooted in Bulusan, Sorsogon.',
  leadParagraph:
    'Founded at the foothills of Mt. Bulusan in Sorsogon, e-yhan started with a clear observation: local resorts, barangays, schools, and small businesses in the Philippines deserve the same modern, reliable web systems used by top corporations in Manila and abroad—without the intimidating six-figure agency price tag.',
  missionTitle: 'Our Company Mission',
  missionStatement:
    'To bridge the digital divide for Philippine SMEs, local government units, hospitality brands, and community institutions by delivering production-ready, accessible, and high-performing websites that generate real bookings, trust, and public service impact.',
  visionTitle: 'The e-yhan Standard',
  visionStatement:
    'Every website we ship—whether a ₱3,000–₱10,000 static website or a custom municipal portal—is built with strict Atomic Design engineering, mobile-first ergonomics, and genuine pride in Bicolano craftsmanship.',
  founderProfile: {
    name: 'Eyhan',
    role: 'Founder & Lead Frontend Architect',
    location: 'Bulusan, Sorsogon, Philippines (Region V - Bicol)',
    bio: 'A senior frontend engineer and UI/UX designer passionate about modular React architectures, design systems, and helping local entrepreneurs and communities thrive online. Combining enterprise software standards with deep knowledge of how Filipino customers browse, book, and buy.',
    quote:
      '"Good software shouldn’t be exclusive to mega-corporations. When a local resort in Bulusan, a coffee shop in Sorsogon City, or a barangay hall goes online with a world-class website, the entire community grows."',
  },
  coreValues: [
    {
      icon: 'Award',
      title: 'Uragon Engineering Quality',
      description:
        'Resilient, clean, and maintainable code built with modern React, Tailwind CSS, and accessibility best practices.',
    },
    {
      icon: 'Scale',
      title: 'Transparent PHP Pricing',
      description:
        'Clear package deliverables and upfront Philippine Peso pricing with zero surprise monthly lock-in fees.',
    },
    {
      icon: 'Users',
      title: 'Human-Centered Local UX',
      description:
        'Designed around real Philippine user behaviors—GCash payments, Messenger handoffs, QR menus, and mobile-first screens.',
    },
    {
      icon: 'Compass',
      title: 'Long-Term Partnership',
      description:
        'From domain registration to post-launch training in Bicol, Tagalog, or English, we stay beside your team.',
    },
  ],
  skillGroups: [
    {
      category: 'Frontend & UI Engineering',
      skills: ['React 18 / Next.js', 'JavaScript (ES2024) & TypeScript', 'Tailwind CSS & Design Tokens', 'Framer Motion Animations', 'Atomic Design Systems', 'Responsive & WCAG Accessibility'],
    },
    {
      category: 'Backend, Data & Integrations',
      skills: ['RESTful APIs & JSON Schemas', 'Node.js / Express / PHP', 'PostgreSQL, MySQL & Firebase', 'GCash / Maya Checkout Flows', 'SEO, OpenGraph & Schema.org', 'Vercel / Netlify / Cloud Deployment'],
    },
  ],
  milestones: [
    {
      year: 'Origin',
      title: 'Born in Bulusan, Sorsogon',
      description: 'Started building custom digital tools for local schools, barangay offices, and community initiatives in Sorsogon.',
    },
    {
      year: 'Storefront Launch',
      title: 'Productized Ready-Made Web Catalog',
      description: 'Engineered 12+ industry-specific web templates so small businesses can launch in days instead of months.',
    },
    {
      year: 'Today',
      title: 'Serving Clients Locally & Worldwide',
      description: 'Helping resorts, cooperatives, clinics, and startups locally and globally modernize their digital presence.',
    },
  ],
};

export const ctaBannerData = {
  badge: 'Proudly Made in Bulusan, Sorsogon',
  headline: 'Ready to Launch Your Website in as Fast as 5 Days?',
  subheadline:
    'Pick a ready-made system from our catalog or request a custom architecture quote. Let’s build a digital presence your customers and community will be proud of.',
  primaryCta: {
    label: 'Request a Website Today',
    path: '/contact',
  },
  secondaryCta: {
    label: 'Browse Ready-Made Websites',
    path: '/portfolio',
  },
};

export const footerData = {
  brand: BRAND_INFO,
  columns: [
    {
      title: 'Solutions Catalog',
      links: [
        { label: 'Personal Portfolio', path: '/category/personal-portfolio' },
        { label: 'Business', path: '/category/business' },
        { label: 'Resort & Hotel', path: '/category/resort-hotel' },
        { label: 'Government & Community', path: '/category/government-community' },
        { label: 'School & Portal', path: '/category/school-portal' },
        { label: 'Real Estate', path: '/category/real-estate' },
        { label: 'Tourism & Eco-tourism', path: '/category/tourism-ecotourism' },
        { label: 'Events & Invitations', path: '/category/events-invitations' },
        { label: 'Others / Custom', path: '/category/others-custom' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'All Ready-Made Websites', path: '/portfolio' },
        { label: 'Packages & Pricing', path: '/services' },
        { label: 'About e-yhan (Bulusan)', path: '/about' },
        { label: 'Start a Project / Contact', path: '/contact' },
      ],
    },
  ],
  socialLinks: [
    { id: 'soc-fb', platform: 'Facebook', url: BRAND_INFO.facebookUrl, icon: 'Facebook' },
    { id: 'soc-msg', platform: 'Messenger', url: BRAND_INFO.messengerUrl, icon: 'MessageCircle' },
    { id: 'soc-mail', platform: 'Email', url: `mailto:${BRAND_INFO.email}`, icon: 'Mail' },
    { id: 'soc-gh', platform: 'GitHub', url: BRAND_INFO.githubUrl, icon: 'Globe' },
  ],
  copyright: `© ${new Date().getFullYear()} e-yhan Web Engineering & Digital Solutions. All rights reserved.`,
  madeInBadge: 'Proudly made in Bulusan, Sorsogon, Philippines 🇵🇭',
};
