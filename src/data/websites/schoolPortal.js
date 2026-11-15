/**
 * Category: School & Portal
 * Current count: 0 websites (Ready for new releases)
 * Ideal for: Schools, academies, colleges, training centers, and campus portals.
 */
export const schoolPortalWebsites = [
  // ==========================================
  // WEBSITE 09: School1
  // ==========================================
  {
    id: "web-009",
    code: "School1",
    title: "School Website",
    slug: "deped-national-high-school-portal",
    category: "school-portal",
    categoryName: "School & Portal",
    shortDescription:
      "An authoritative, SEO-ready DepEd public high school web portal featuring official institutional seal branding, K-12 track showcases, athletic & sci-tech honors, full MOOE transparency reporting, and interactive admissions inquiry pipelines.",
    description:
      "Purpose-built for Philippine National High Schools, public secondary academies, private learning institutes, and technical-vocational campus systems under the Department of Education (DepEd). Engineered with Atomic Design architecture and full Static Site Generation (SSG), this portal elevates public institutional trust with a dignified green-and-gold aesthetic, an illuminated crest showcase, interactive K-12 curriculum explorer, School Improvement Plan (SIP) trackers, full COA-compliant MOOE transparency tables, and multi-channel student admissions helpdesks.",
    features: [
      "Full Static Site Generation (SSG via vite-react-ssg) for 100% Crawlable, Pre-Rendered HTML",
      "Dignified Hero Banner with Official Scalloped Crest, Laurel Wreath & DepEd ID Badges",
      "DepEd Transparency Seal & FOI Board with Audited MOOE Financial Allocation Tables",
      "K-12 Curricular Pathways Explorer (Junior High School, Senior High STEM & TVL Tracks)",
      "Palaro & Sci-Tech Achievement Showcases with Filterable Category Badges",
      "Student & Community Eco-Advocacy Project Trackers (Tree Planting, SAGIP-BASA Literacy)",
      "Carrier-Tagged Multi-Line Hotline Directory (Smart, Globe, PLDT) & Interactive Map Facade",
      "Floating Multi-Channel Student Helpdesk (Instant Voice Hotline, Messenger, WhatsApp, Viber)",
      "100% Centralized Data Architecture in dummyData.js (Zero Hardcoded Content)",
      "Embedded HighSchool Schema.org JSON-LD, Automated Sitemap.xml & Robots.txt",
    ],
    techStack: [
      "React 18",
      "Vite 6",
      "Tailwind CSS",
      "React Router v6",
      "vite-react-ssg (Static Site Generation)",
      "Framer Motion",
      "Schema.org JSON-LD",
      "Atomic Design Architecture",
    ],
    pricing: {
      basic: {
        name: "Basic (Static SSG Website)",
        usd: 55,
        php: 3000,
        formatted: "$55 (₱3,000)",
      },
      premium: {
        name: "Premium (Dynamic Portal + DepEd Admin Panel)",
        usd: 360,
        php: 20000,
        formatted: "$360 (₱20,000)",
      },
    },
    price: 55,
    turnaround: "5–7 Business Days",
    clientType:
      "DepEd National High Schools, Science High Schools, Private Academies, Vocational Institutes, Colleges",
    thumbnail: "/school/school1/thumbnail/school_thumbnail1.webp",
    gallery: [
      "/school/school1/thumbnail/school_thumbnail1.webp",
    ],
    demoUrl: "https://school-portal.eyhan-webdesign.workers.dev",
    featured: true,
    popularScore: 99,
    createdAt: "2026-11-15",
  },
];

export default schoolPortalWebsites;
