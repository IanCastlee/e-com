/**
 * Generates high-resolution, crisp SVG UI Mockup Data URIs for website thumbnails & galleries.
 * Ensures 100% instant, zero-latency rendering even in offline environments.
 */
export function createMockupThumbnail({
  title,
  subtitle,
  categoryLabel,
  primaryColor = '#0d9488',
  secondaryColor = '#0f172a',
  accentColor = '#f59e0b',
}) {
  const safeTitle = String(title).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const safeSub = String(subtitle).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const safeCat = String(categoryLabel).replace(/&/g, '&amp;').replace(/</g, '&lt;');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${secondaryColor}" />
        <stop offset="55%" stop-color="#112239" />
        <stop offset="100%" stop-color="${primaryColor}" />
      </linearGradient>
      <linearGradient id="card" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.14)" />
        <stop offset="100%" stop-color="rgba(255,255,255,0.04)" />
      </linearGradient>
    </defs>
    <rect width="800" height="500" fill="url(#bg)" />
    <circle cx="710" cy="80" r="180" fill="${primaryColor}" opacity="0.22" />
    <circle cx="90" cy="440" r="160" fill="${accentColor}" opacity="0.14" />
    <!-- Browser Window Frame -->
    <rect x="44" y="38" width="712" height="424" rx="16" fill="#0b1324" stroke="rgba(255,255,255,0.16)" stroke-width="1.5" />
    <rect x="44" y="38" width="712" height="38" rx="16" fill="#16213a" />
    <circle cx="68" cy="57" r="5.5" fill="#ef4444" />
    <circle cx="86" cy="57" r="5.5" fill="#f59e0b" />
    <circle cx="104" cy="57" r="5.5" fill="#10b981" />
    <rect x="220" y="48" width="360" height="18" rx="9" fill="#0b1324" opacity="0.7" />
    <!-- Mockup Content -->
    <rect x="76" y="106" width="145" height="26" rx="13" fill="${primaryColor}" opacity="0.28" />
    <text x="92" y="124" fill="#5eead4" font-family="Inter, system-ui, sans-serif" font-size="12" font-weight="700" letter-spacing="0.8">${safeCat.toUpperCase()}</text>
    <text x="76" y="176" fill="#ffffff" font-family="Plus Jakarta Sans, Inter, sans-serif" font-size="30" font-weight="800">${safeTitle}</text>
    <text x="76" y="208" fill="#94a3b8" font-family="Inter, system-ui, sans-serif" font-size="15" font-weight="500">${safeSub}</text>
    <!-- CTA Pill -->
    <rect x="76" y="234" width="136" height="38" rx="10" fill="${primaryColor}" />
    <text x="102" y="258" fill="#ffffff" font-family="Inter, sans-serif" font-size="13" font-weight="700">Live System</text>
    <rect x="224" y="234" width="124" height="38" rx="10" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" />
    <text x="250" y="258" fill="#e2e8f0" font-family="Inter, sans-serif" font-size="13" font-weight="600"> Responsive</text>
    <!-- Metric / Feature Cards -->
    <rect x="76" y="302" width="200" height="124" rx="12" fill="url(#card)" stroke="rgba(255,255,255,0.12)" />
    <rect x="94" y="322" width="38" height="8" rx="4" fill="${accentColor}" />
    <rect x="94" y="342" width="130" height="12" rx="6" fill="rgba(255,255,255,0.85)" />
    <rect x="94" y="364" width="95" height="9" rx="4.5" fill="rgba(255,255,255,0.35)" />
    <rect x="94" y="392" width="70" height="16" rx="8" fill="${primaryColor}" opacity="0.45" />

    <rect x="296" y="302" width="200" height="124" rx="12" fill="url(#card)" stroke="rgba(255,255,255,0.12)" />
    <rect x="314" y="322" width="38" height="8" rx="4" fill="#38bdf8" />
    <rect x="314" y="342" width="140" height="12" rx="6" fill="rgba(255,255,255,0.85)" />
    <rect x="314" y="364" width="110" height="9" rx="4.5" fill="rgba(255,255,255,0.35)" />
    <rect x="314" y="392" width="84" height="16" rx="8" fill="#38bdf8" opacity="0.35" />

    <rect x="516" y="110" width="208" height="316" rx="14" fill="url(#card)" stroke="rgba(255,255,255,0.15)" />
    <circle cx="620" cy="175" r="38" fill="${primaryColor}" opacity="0.25" />
    <circle cx="620" cy="175" r="20" fill="${accentColor}" opacity="0.85" />
    <rect x="544" y="234" width="152" height="12" rx="6" fill="rgba(255,255,255,0.8)" />
    <rect x="562" y="256" width="116" height="9" rx="4.5" fill="rgba(255,255,255,0.4)" />
    <rect x="544" y="290" width="152" height="42" rx="8" fill="rgba(15,23,42,0.55)" />
    <rect x="544" y="346" width="152" height="42" rx="8" fill="rgba(15,23,42,0.55)" />
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
