/**
 * Unified Pricing Tiers (Static Website vs. Website with Database),
 * Feature Comparison Matrix, and Delivery Process Steps
 */
export const pricingTiers = [
  {
    id: 'tier-static',
    name: 'Static Website',
    badge: 'Output First Before Payment',
    price: '$55 – $180',
    phpEquivalent: '₱3,000 – ₱10,000 PHP',
    paymentPolicy: 'Output First Before Payment • $0 Downpayment Required',
    paymentPolicyDetail:
      'We build and show you the working static website preview first. You only pay once you are satisfied with the output.',
    billingNote: 'One-time build fee • No hidden monthly lock-in',
    turnaround: '2–4 Business Days',
    description:
      'Ideal for personal portfolios, company profiles, landing pages, cafes, and small businesses needing a fast, modern static website without a complex backend database.',
    popular: false,
    ctaLabel: 'Request Static Website (Output First)',
    features: [
      'Output First Guarantee — Review the Live Website Before Paying',
      '1 to 10 Responsive Static Pages (Home, About, Services/Menu, Gallery, Contact)',
      'Custom Brand Styling (Your Logo, Colors, Typography & Photos)',
      'Mobile-First Optimization (Fast on Smartphones, Tablets & Desktop)',
      'Direct Messenger, WhatsApp, Email & Click-to-Call Integration',
      'Google Maps Location Pin, On-Page SEO & OpenGraph Social Preview',
      'Free SSL Security Certificate Setup (HTTPS)',
      '14 Days Post-Launch Technical Support',
    ],
  },
  {
    id: 'tier-database',
    name: 'Website with Database (Full-Stack System)',
    badge: 'Dynamic & Full-Stack',
    price: '$215 – $1,450',
    phpEquivalent: '₱12,000 – ₱80,000 PHP',
    paymentPolicy: 'At Least $90 (₱5,000) Downpayment to Start',
    paymentPolicyDetail:
      'Requires at least $90 USD (₱5,000 PHP) initial downpayment to provision the database & backend architecture; remaining balance upon completion.',
    billingNote: 'One-time build fee • Complete full-stack deployment',
    turnaround: '5–14 Business Days',
    description:
      'Built for resorts, online stores, schools, barangays/LGUs, clinics, and enterprises that require a real database, admin dashboard, booking engine, user accounts, or automated workflows.',
    popular: true,
    ctaLabel: 'Start Database Website Project',
    features: [
      'Full Database & Backend Architecture',
      'Admin Dashboard / CMS to Manage Bookings, Products, Users & Records',
      'Interactive Resort Booking Engine, E-Commerce Cart, or Portal System',
      'User Login, Role-Based Access Control & Automated Email/SMS Alerts',
      'Search, Category Filtering, Dynamic Reports & Data Export',
      'Custom Domain Name (.com or .ph) + Cloud Hosting & Database Setup',
      '1-on-1 Live Admin & Staff Handover Training Session',
      '60 Days Priority Maintenance & Technical Support SLA',
    ],
  },
];

export const customEnterprisePackage = null;

export const comparisonFeatures = [
  {
    feature: 'Price Range (USD / PHP)',
    staticSite: '$55 – $180 (₱3k – ₱10k)',
    databaseSite: '$215 – $1,450 (₱12k – ₱80k)',
  },
  {
    feature: 'Payment Terms & Downpayment Policy',
    staticSite: 'Output First Before Payment ($0 Down)',
    databaseSite: 'At Least $90 (₱5,000) Downpayment',
  },
  {
    feature: 'Architecture Type',
    staticSite: 'Fast Static Frontend (No DB)',
    databaseSite: 'Dynamic Full-Stack + Database',
  },
  {
    feature: 'Admin Dashboard & Content Management',
    staticSite: 'Code / JSON Config',
    databaseSite: 'Full Admin Panel & Database CRUD',
  },
  {
    feature: 'Bookings, Cart, User Accounts & Records',
    staticSite: 'Direct Contact / Inquiry Links',
    databaseSite: 'Automated Database Storage & Tracking',
  },
  {
    feature: 'Turnaround Delivery Time',
    staticSite: '2–4 Business Days',
    databaseSite: '5–14 Business Days',
  },
  {
    feature: 'Post-Launch Warranty & Support',
    staticSite: '14 Days Included',
    databaseSite: '60 Days Priority SLA',
  },
];

export const processSteps = [
  {
    stepNumber: '01',
    title: 'Choose Static or Database System',
    subtitle: 'Clear Scope & Payment Terms',
    icon: 'LayoutGrid',
    description:
      'Pick a Static Website ($55–$180 / ₱3k–₱10k with Output First before payment) or a Dynamic Website with Database ($215–$1,450 / ₱12k–₱80k with at least $90 / ₱5k downpayment).',
    deliverable: 'Confirmed scope & transparent quote',
  },
  {
    stepNumber: '02',
    title: 'Customize & Engineer',
    subtitle: 'Live Preview & Database Build',
    icon: 'Sliders',
    description:
      'For static websites, we build your live output first so you can review it before paying. For database websites, we engineer your backend, admin dashboard, and custom workflows on a staging link.',
    deliverable: 'Interactive staging preview link',
  },
  {
    stepNumber: '03',
    title: 'Approve & Launch Live',
    subtitle: 'Domain, SSL & Handover',
    icon: 'Rocket',
    description:
      'Once you approve the finished website, we connect your custom domain, activate SSL security, deploy to production, and guide your team on managing your new system.',
    deliverable: 'Live production website + training',
  },
];

export default {
  pricingTiers,
  customEnterprisePackage,
  comparisonFeatures,
  processSteps,
};
