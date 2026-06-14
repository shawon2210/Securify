 <div align="center">
  <img src="https://raw.githubusercontent.com/<username>/<repo>/<branch>/public/logo.svg?sanitize=true"
    width="48"
    height="48"
    alt="Securify Logo"/>
  </div>
  
  ## Securify

  **Enterprise Data Security for Modern Teams**

  End-to-end encryption, zero-trust architecture, and real-time threat detection — all in one platform. SOC 2 certified. Trusted by 65,000+ startups.

  [![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS 4](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
  [![Vite 8](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
  [![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Latest-FF0066?logo=framer&logoColor=white)](https://www.framer.com/motion/)
  [![License](https://img.shields.io/badge/License-MIT-white.svg)](./LICENSE)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Performance Budget](#performance-budget)
- [Key Metrics](#key-metrics)
- [Compliance & Certifications](#compliance--certifications)
- [Pricing](#pricing)
- [SEO & Structured Data](#seo--structured-data)
- [Deployment](#deployment)

---

## Overview

Securify is a modern, high-performance marketing website and product landing page for an enterprise data security SaaS platform. Built with React 19, TypeScript, Tailwind CSS 4, and Vite 8, it showcases the platform's security capabilities, compliance certifications, pricing plans, and customer testimonials in a visually striking dark-themed interface.

The site is designed as a single-page application (SPA) with smooth scroll-triggered animations powered by Framer Motion, lazy-loaded sections for optimal performance, and comprehensive SEO metadata with structured data (JSON-LD) for Organization, SoftwareApplication, and FAQPage schemas.

---

## Features

| # | Feature | Description |
|---|---------|-------------|
| 🔐 | **End-to-End Encryption** | AES-256 at rest, TLS 1.3 in transit. Keys unique per customer, rotated every 90 days. |
| 🛡️ | **Zero-Trust Architecture** | Every request verified. No implicit trust, no open doors. |
| ⚡ | **Real-Time Threat Alerts** | Detect and respond to anomalies in under 200ms. |
| 📋 | **Compliance Ready** | SOC 2 Type II, ISO 27001, GDPR, HIPAA, PCI DSS, CCPA out of the box. |
| 🔍 | **Full Audit Logs** | Every action tracked, timestamped, and exportable. |
| 🌐 | **Global Edge Network** | 99.99% uptime SLA with 35+ PoPs worldwide. |

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [React 19](https://react.dev/) | UI Framework with latest concurrent features |
| [TypeScript 6](https://www.typescriptlang.org/) | Strict type safety (ES2023 target) |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first CSS via `@tailwindcss/vite` plugin |
| [Vite 8](https://vitejs.dev/) | Build tool with manual code-splitting (react-vendor, motion chunks) |
| [Framer Motion](https://www.framer.com/motion/) | Scroll-triggered animations, parallax, marquee effects |
| [React Helmet Async](https://github.com/staylor/react-helmet-async) | Document head management for SEO & meta tags |
| [Readex Pro](https://fonts.google.com/specimen/Readex+Pro) | Primary typeface via Google Fonts |
| [LazyMotion](https://www.framer.com/motion/lazy-motion/) | Framer Motion code-splitting for reduced bundle size |

---

## Project Structure

```
securify/
├── .gitignore                         # Node, dist, editor ignores
├── index.html                         # Entry HTML with font preconnect
├── package.json                       # Dependencies & scripts
├── tsconfig.json                      # Strict TS config (ES2023)
├── vite.config.ts                     # Vite + React + Tailwind + manual chunks
├── performance.config.ts              # Lighthouse & Web Vitals budgets
│
├── public/
│   ├── favicon.svg                    # Securify logo favicon
│   ├── icons.svg                      # SVG icon sprite
│   ├── robots.txt                     # Crawler rules (block api, dashboard, admin)
│   ├── sitemap.xml                    # XML sitemap (6 URLs)
│   └── site.webmanifest               # PWA manifest
│
└── src/
    ├── main.tsx                       # React root + HelmetProvider + LazyMotion
    ├── App.tsx                        # Section composition with lazy loading
    ├── index.css                      # Tailwind import + custom keyframe animations
    ├── vite-env.d.ts                  # Vite client types reference
    │
    ├── components/
    │   ├── Hero.tsx                   # Full-screen video hero with parallax scroll
    │   ├── TrustedBy.tsx              # Marquee company logo carousel (8 logos)
    │   ├── FeaturesGrid.tsx           # 6-card Bento-style feature grid
    │   ├── HowItWorks.tsx             # 3-step process with connecting lines
    │   ├── DashboardPreview.tsx       # Interactive dashboard mockup with 3D tilt
    │   ├── Testimonials.tsx            # Dual-row marquee + dot navigation (6 reviews)
    │   ├── Compliance.tsx             # 6 compliance certification cards (2×3 grid)
    │   ├── Stats.tsx                   # Animated count-up statistics (6 metrics)
    │   ├── Pricing.tsx                # 3-tier pricing with monthly/annual toggle
    │   ├── FAQ.tsx                     # Filterable accordion FAQ (5 categories, 8 items)
    │   ├── FinalCTA.tsx                # Bottom CTA with grid background effect
    │   ├── Footer.tsx                  # 4-col links, newsletter, socials, status badges
    │   ├── ScrollReveal.tsx            # Reusable scroll-triggered animation wrapper
    │   └── SEOHead.tsx                 # Full SEO meta + JSON-LD structured data
    │
    ├── lib/
    │   ├── animations.ts              # Shared Framer Motion variants (7 variants)
    │   └── seo.ts                     # Centralized SEO constants & keywords
    │
    └── assets/
        ├── hero.png                   # Hero section background image
        ├── typescript.svg             # TypeScript logo asset
        └── vite.svg                   # Vite logo asset
```

---

## Getting Started

**Prerequisites:** Node.js 18+ and npm.

### Clone & Install

```bash
git clone git@github.com:shawon2210/securify.git
cd securify
npm install
```

### Development

```bash
# Start dev server at http://localhost:5173
npm run dev
```

### Production Build

```bash
# TypeScript check + Vite production build
npm run build

# Preview production build locally
npm run preview
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | TypeScript type-check + Vite production build |
| `npm run preview` | Serve built assets locally |

---

## Performance Budget

Defined in [`performance.config.ts`](/performance.config.ts) — targets set for Lighthouse CI and Web Vitals monitoring.

| Metric | Target | Category |
|--------|--------|----------|
| Performance Score | 95+ | Lighthouse |
| Accessibility | 100 | Lighthouse |
| Best Practices | 100 | Lighthouse |
| SEO | 100 | Lighthouse |
| Largest Contentful Paint (LCP) | < 2.5s | Web Vitals |
| First Input Delay (FID) | < 100ms | Web Vitals |
| Cumulative Layout Shift (CLS) | < 0.1 | Web Vitals |
| First Contentful Paint (FCP) | < 1.8s | Web Vitals |
| Time to First Byte (TTFB) | < 800ms | Web Vitals |
| JS Initial (parsed) | 150 KB | Bundle Budget |
| JS Total (parsed) | 400 KB | Bundle Budget |
| CSS Total | 30 KB | Bundle Budget |
| Image per file | 200 KB | Asset Budget |

Code-splitting is handled via Vite's `manualChunks`:
- `react-vendor` — React + React DOM
- `motion` — Framer Motion
- Non-critical sections are lazy-loaded via `React.lazy()` + `Suspense`

---

## Key Metrics

Displayed on the site with animated count-up triggers (eased cubic, 2s duration) on scroll into view.

| Metric | Value | Detail |
|--------|-------|--------|
| Uptime SLA | 99.99% | Across all regions, 24/7/365 |
| Data Protected | 1.5B+ GB | And growing every second |
| Startups Trust Us | 65K+ | From seed to Series C |
| Threat Response | 200ms avg | Detect, alert, and act |
| Downloads | 300K+ | Across all platforms |
| Average Rating | 4.9/5 | From 12,000+ reviews |

---

## Compliance & Certifications

Independently audited and certified annually. BAA (Business Associate Agreement) available on Pro and Enterprise plans.

| Certification | Status | Description |
|---------------|--------|-------------|
| SOC 2 Type II | ✅ Certified | Audited annually by a Big 4 firm. Security, availability, confidentiality. |
| ISO 27001 | ✅ Certified | Internationally recognized information security management standard. |
| GDPR | ✅ Compliant | Full compliance with EU data protection regulations. Data residency options. |
| HIPAA | ✅ Compliant | Full HIPAA safeguards. Signed BAA available. |
| PCI DSS | ✅ Certified | Payment card data protected to Level 1 PCI DSS standards. |
| CCPA | ✅ Compliant | California Consumer Privacy Act compliant. Full DSR support. |

---

## Pricing

Three tiers with monthly/annual billing toggle (20% savings on annual). All plans include a 14-day free trial with no credit card required.

| | **Starter** | **Pro** | **Enterprise** |
|--|------------|---------|----------------|
| **Price** | $29/mo ($23/yr) | $79/mo ($63/yr) | $199/mo ($159/yr) |
| **Users** | Up to 5 | Up to 50 | Unlimited |
| **Storage** | 10 GB | 500 GB | Unlimited |
| **Encryption** | ✅ | ✅ | ✅ |
| **Zero-Trust** | — | ✅ | ✅ |
| **Compliance** | SOC 2 | SOC 2 + ISO + GDPR | All frameworks |
| **Audit Logs** | — | 1 Year | Unlimited |
| **Integrations** | Email | Slack + PagerDuty | SSO + SAML |
| **Support** | Email | Priority | 24/7 Phone + Dedicated Engineer |
| **CTA** | Start Free Trial | Start Free Trial | Contact Sales |

---

## SEO & Structured Data

Comprehensive SEO implementation via `react-helmet-async` with centralized configuration in `src/lib/seo.ts`.

### Primary Meta Tags
- `<title>`, `<meta name="description">`, `<meta name="keywords">`
- `<link rel="canonical">`, `<meta name="robots">`, `<meta name="author">`, `<meta name="theme-color">`

### Open Graph
- `og:type`, `og:site_name`, `og:title`, `og:description`
- `og:url`, `og:image` (1200×630), `og:image:alt`, `og:locale`

### Twitter Cards
- `twitter:card` (summary_large_image), `twitter:site`, `twitter:creator`
- `twitter:title`, `twitter:description`, `twitter:image`, `twitter:image:alt`

### JSON-LD Structured Data
- **Organization** — Name, URL, logo, sameAs (Twitter, GitHub, LinkedIn), contactPoint
- **SoftwareApplication** — Name, category, description, 3 offers (Starter/Pro/Enterprise), aggregate rating (4.9/5 from 12K reviews)
- **FAQPage** — 3 main entities with Question/Answer pairs

### Favicon & Manifest
- SVG favicon, Apple touch icon, PWA site.webmanifest
- Sitemap.xml (6 URLs) and robots.txt (/api/, /dashboard/, /admin/ disallowed)

---

## Deployment

The project builds to a static `dist/` folder and can be deployed to any static host or CDN.

### Recommended Platforms

| Platform | Best For |
|----------|----------|
| **Vercel** | Zero-config, automatic HTTPS, edge network, preview deployments |
| **Netlify** | Continuous deployment, form handling, split testing |
| **AWS CloudFront** | Enterprise with custom cache policies and S3 origin |
| **Cloudflare Pages** | Unlimited bandwidth, instant cache purges, Workers integration |

### Deploy to Vercel Example

```bash
# Install Vercel CLI
npm i -g vercel

# Build and deploy to production
vercel --prod
```

---

## License

Securify is released under the [MIT License](./LICENSE).

---

<div align="center">

  Built with ♥ using React, TypeScript, Tailwind CSS & Vite.

  © 2024 Securify, Inc. All Rights Reserved.

</div>
