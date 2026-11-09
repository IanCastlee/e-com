# e-yhan Digital Solutions — Corporate Portfolio & Website Storefront

**Proudly Engineered in Bulusan, Sorsogon (Bicol Region), Philippines**

`e-yhan` is a production-ready React (Vite) + Tailwind CSS portfolio and digital storefront designed for a web engineering company offering ready-made and custom websites to resorts, barangays/LGUs, schools, online stores, cafes, tourism operators, and SMEs across the Philippines.

---

## Architecture: Strict Atomic Design

```text
e-yhan/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── assets/
    │   ├── brandAssets.js
    │   └── index.js
    ├── components/
    │   ├── atoms/
    │   │   ├── Avatar/          (Avatar.jsx, index.js)
    │   │   ├── Badge/           (Badge.jsx, index.js)
    │   │   ├── Button/          (Button.jsx, index.js)
    │   │   ├── Heading/         (Heading.jsx, index.js)
    │   │   ├── Icon/            (Icon.jsx, index.js)
    │   │   ├── Input/           (Input.jsx, index.js)
    │   │   ├── Logo/            (Logo.jsx, index.js)
    │   │   ├── Spinner/         (Spinner.jsx, index.js)
    │   │   ├── Tag/             (Tag.jsx, index.js)
    │   │   ├── Text/            (Text.jsx, index.js)
    │   │   └── index.js
    │   ├── molecules/
    │   │   ├── CategoryChip/    (CategoryChip.jsx, index.js)
    │   │   ├── FilterDropdown/  (FilterDropdown.jsx, index.js)
    │   │   ├── FormField/       (FormField.jsx, index.js)
    │   │   ├── NavLink/         (NavLink.jsx, index.js)
    │   │   ├── PriceTag/        (PriceTag.jsx, index.js)
    │   │   ├── SearchBar/       (SearchBar.jsx, index.js)
    │   │   ├── SectionTitle/    (SectionTitle.jsx, index.js)
    │   │   ├── SocialLinks/     (SocialLinks.jsx, index.js)
    │   │   ├── WebsiteCard/     (WebsiteCard.jsx, index.js)
    │   │   └── index.js
    │   ├── organisms/
    │   │   ├── CategoryTabs/       (CategoryTabs.jsx, index.js)
    │   │   ├── ContactForm/        (ContactForm.jsx, index.js)
    │   │   ├── CTABanner/          (CTABanner.jsx, index.js)
    │   │   ├── FAQAccordion/       (FAQAccordion.jsx, index.js)
    │   │   ├── FeaturedSlider/     (FeaturedSlider.jsx, index.js)
    │   │   ├── Footer/             (Footer.jsx, index.js)
    │   │   ├── Hero/               (Hero.jsx, index.js)
    │   │   ├── Navbar/             (Navbar.jsx, index.js)
    │   │   ├── PricingTable/       (PricingTable.jsx, index.js)
    │   │   ├── ProcessSteps/       (ProcessSteps.jsx, index.js)
    │   │   ├── TestimonialSection/ (TestimonialSection.jsx, index.js)
    │   │   ├── WebsiteGrid/        (WebsiteGrid.jsx, index.js)
    │   │   └── index.js
    │   └── templates/
    │       ├── MainLayout/      (MainLayout.jsx, index.js)
    │       ├── PageLayout/      (PageLayout.jsx, index.js)
    │       └── index.js
    ├── data/
    │   ├── categories.js
    │   ├── company.js
    │   ├── faqs.js
    │   ├── services.js
    │   ├── testimonials.js
    │   ├── websites.js
    │   └── index.js
    ├── hooks/
    │   ├── useContactForm.js
    │   ├── useFilter.js
    │   ├── useMediaQuery.js
    │   ├── useScrollTop.js
    │   ├── useSearch.js
    │   ├── useTheme.js
    │   └── index.js
    ├── pages/
    │   ├── About/               (About.jsx, index.js)
    │   ├── CategoryPage/        (CategoryPage.jsx, index.js)
    │   ├── Contact/             (Contact.jsx, index.js)
    │   ├── Home/                (Home.jsx, index.js)
    │   ├── NotFound/            (NotFound.jsx, index.js)
    │   ├── Portfolio/           (Portfolio.jsx, index.js)
    │   ├── Services/            (Services.jsx, index.js)
    │   ├── WebsiteDetails/      (WebsiteDetails.jsx, index.js)
    │   └── index.js
    ├── routes/
    │   ├── AppRoutes.jsx
    │   └── index.js
    ├── styles/
    │   ├── index.css
    │   └── tokens.js
    └── utils/
        ├── constants.js
        ├── formatters.js
        └── index.js
```

---

## Setup & Running Locally

```bash
# 1. Navigate to the project folder
cd C:\Users\Eyhan\.gemini\antigravity\scratch\e-yhan

# 2. Install dependencies
npm install

# 3. Start the Vite development server
npm run dev

# 4. Build for production
npm run build
```

---

## How to Add a New Website or Category

1. **Add a New Category**: Open `src/data/categories.js` and append an object with `id`, `slug`, `name`, `shortName`, `icon` (any Lucide icon name), `description`, and `highlight`.
2. **Add a New Website**: Open `src/data/websites.js` and append a website entry with `id`, `title`, `slug`, `category` (matching a category `slug`), `categoryName`, `shortDescription`, `description`, `features[]`, `techStack[]`, `price` (numeric PHP value), `thumbnail`, `gallery[]`, `demoUrl`, `featured`, and `createdAt`.
   - No UI component edits are required; `Portfolio`, `CategoryPage`, `FeaturedSlider`, and `WebsiteDetails` update automatically.
