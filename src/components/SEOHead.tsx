import { Helmet } from "react-helmet-async"
import { SEO } from "../lib/seo"

interface Props {
  title?: string
  description?: string
  path?: string
  ogImage?: string
}

export const SEOHead = ({
  title = SEO.title,
  description = SEO.description,
  path = "",
  ogImage = SEO.ogImage,
}: Props) => {
  const canonical = `${SEO.siteUrl}${path}`

  return (
    <Helmet>
      {/* ── Primary ── */}
      <title>{title}</title>
      <meta name="description" content={description}/>
      <meta name="keywords" content={SEO.keywords.join(", ")}/>
      <link rel="canonical" href={canonical}/>
      <meta name="robots" content="index, follow"/>
      <meta name="author" content="Securify, Inc."/>
      <meta name="theme-color" content={SEO.themeColor}/>
      <html lang="en"/>

      {/* ── Open Graph ── */}
      <meta property="og:type" content="website"/>
      <meta property="og:site_name" content={SEO.siteName}/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <meta property="og:url" content={canonical}/>
      <meta property="og:image" content={ogImage}/>
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="630"/>
      <meta property="og:image:alt" content="Securify — enterprise data security platform"/>
      <meta property="og:locale" content={SEO.locale}/>

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content={SEO.twitterHandle}/>
      <meta name="twitter:creator" content={SEO.twitterHandle}/>
      <meta name="twitter:title" content={title}/>
      <meta name="twitter:description" content={description}/>
      <meta name="twitter:image" content={ogImage}/>
      <meta name="twitter:image:alt" content="Securify dashboard preview"/>

      {/* ── Favicon ── */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="manifest" href="/site.webmanifest"/>

      {/* ── Organization ── */}
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Securify",
        "url": "https://securify.io",
        "logo": "https://securify.io/logo.png",
        "sameAs": [
          "https://twitter.com/securify",
          "https://github.com/securify",
          "https://linkedin.com/company/securify",
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "email": "support@securify.io",
          "availableLanguage": "English",
        },
      })}</script>

      {/* ── SoftwareApplication ── */}
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Securify",
        "applicationCategory": "SecurityApplication",
        "operatingSystem": "Web",
        "description": SEO.description,
        "url": "https://securify.io",
        "offers": [
          {
            "@type": "Offer",
            "name": "Starter",
            "price": "29",
            "priceCurrency": "USD",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "billingDuration": "P1M",
            },
          },
          {
            "@type": "Offer",
            "name": "Pro",
            "price": "79",
            "priceCurrency": "USD",
          },
          {
            "@type": "Offer",
            "name": "Enterprise",
            "price": "199",
            "priceCurrency": "USD",
          },
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "12000",
          "bestRating": "5",
        },
      })}</script>

      {/* ── FAQPage ── */}
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does Securify encrypt my data?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We use AES-256 encryption for data at rest and TLS 1.3 for data in transit.",
            },
          },
          {
            "@type": "Question",
            "name": "Which compliance frameworks does Securify support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Securify supports SOC 2 Type II, ISO 27001, GDPR, HIPAA, PCI DSS, and CCPA out of the box.",
            },
          },
          {
            "@type": "Question",
            "name": "Is there a free trial?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "All plans include a 14-day free trial with full feature access. No credit card required.",
            },
          },
        ],
      })}</script>
    </Helmet>
  )
}