import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ScrollReveal } from './ScrollReveal'
import { fadeUp, staggerContainer, staggerItem } from '../lib/animations'

const faqs = [
  {
    category: 'security',
    q: 'how does securify encrypt my data?',
    a: 'we use AES-256 encryption for data at rest and TLS 1.3 for data in transit. encryption keys are unique per customer and rotated automatically every 90 days. even securify employees cannot access your raw data.',
  },
  {
    category: 'security',
    q: 'what happens if securify detects a threat?',
    a: 'our system responds in under 200ms — automatically isolating the affected resource, alerting your team via slack, email, or pagerduty, and logging the full event in your audit trail. you can configure custom response playbooks per threat level.',
  },
  {
    category: 'compliance',
    q: 'which compliance frameworks does securify support?',
    a: 'securify supports SOC 2 Type II, ISO 27001, GDPR, HIPAA, PCI DSS, and CCPA out of the box. compliance dashboards, automated evidence collection, and audit-ready reports are included in all plans.',
  },
  {
    category: 'compliance',
    q: 'can i get a signed BAA for HIPAA compliance?',
    a: "yes. a business associate agreement is available on the pro and enterprise plans. reach out to our compliance team and we'll have it signed within one business day.",
  },
  {
    category: 'pricing',
    q: 'is there a free trial?',
    a: "all plans include a 14-day free trial with full feature access. no credit card required to start. if you need more time to evaluate, contact us and we'll extend your trial.",
  },
  {
    category: 'pricing',
    q: 'can i change plans at any time?',
    a: 'yes. you can upgrade, downgrade, or cancel at any time from your billing dashboard. upgrades take effect immediately. downgrades apply at the end of your current billing cycle.',
  },
  {
    category: 'setup',
    q: 'how long does onboarding take?',
    a: 'most teams are fully set up in under a day. our integration library covers 200+ tools including AWS, GCP, Azure, GitHub, and Vercel. enterprise customers get a dedicated onboarding engineer.',
  },
  {
    category: 'setup',
    q: 'do i need a dedicated security team to use securify?',
    a: 'no. securify is designed for engineering teams without dedicated security staff. automated policies, one-click compliance, and smart defaults mean you get enterprise-grade security without hiring a ciso.',
  },
] as const

const categories = ['all', 'security', 'compliance', 'pricing', 'setup'] as const

type Faq = (typeof faqs)[number]
type Category = (typeof categories)[number]

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: Faq
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className="group cursor-pointer py-6"
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onToggle()
        }
      }}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
    >
      <div className="flex items-center justify-between gap-6">
        <p
          className={`text-base font-medium tracking-tight transition-colors duration-200 ${
            isOpen ? 'text-white' : 'text-white/70 group-hover:text-white'
          }`}
        >
          {item.q}
        </p>

        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-white/20">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="h-3.5 w-3.5 text-white/40 transition-transform duration-300"
            style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>
      </div>

      <div
        style={{
          maxHeight: isOpen ? '400px' : '0px',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          transition:
            'max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease',
        }}
      >
        <p className="max-w-2xl pb-2 pt-4 text-sm leading-relaxed text-white/40">
          {item.a}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const accordionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(accordionRef, { once: true, margin: '-80px' })

  const filtered = faqs.filter(
    (f) => activeCategory === 'all' || f.category === activeCategory,
  )

  useEffect(() => {
    setOpenIndex(0)
  }, [activeCategory])

  return (
    <section className="overflow-hidden bg-black px-6 py-24 md:px-16">
      <ScrollReveal variants={fadeUp} className="mb-16 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
          FAQ
        </p>
        <h2 className="text-center text-4xl font-medium leading-[1.1] tracking-[-0.03em] text-white md:text-5xl">
          Everything You Need to Know
        </h2>
        <p className="mt-4 text-center text-sm text-white/40">
          Can&apos;t Find Your Answer? Reach Out to Our Team.
        </p>
      </ScrollReveal>

      <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`cursor-pointer rounded-full border px-5 py-2 text-xs uppercase tracking-[0.15em] transition-all duration-200 ${
              activeCategory === category
                ? 'border-white/25 bg-white/[0.06] text-white/80'
                : 'border-white/[0.08] text-white/30 hover:border-white/15 hover:text-white/50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        key={activeCategory}
        ref={accordionRef}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="mx-auto flex max-w-3xl flex-col divide-y divide-white/[0.06]"
      >
        {filtered.map((item, index) => (
          <motion.div key={item.q} variants={staggerItem}>
            <AccordionItem
              item={item}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          </motion.div>
        ))}
      </motion.div>

      <ScrollReveal variants={fadeUp} delay={0.2}>
        <div className="mx-auto mt-16 flex max-w-3xl flex-col items-center justify-between gap-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 md:flex-row">
          <div>
            <p className="text-base font-medium text-white/70">
              Still Have Questions?
            </p>
            <p className="mt-1 text-sm text-white/30">
              Our Security Team Responds Within 2 Hours on Business Days.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="rounded-full border border-white/10 px-6 py-2.5 text-sm text-white/50 transition-all duration-300 hover:border-white/25 hover:text-white/80"
            >
              Read the Docs
            </button>
            <button
              type="button"
              className="rounded-full bg-white px-6 py-2.5 text-sm text-black transition-all duration-300 hover:bg-white/90"
            >
              Talk to Us
            </button>
          </div>
        </div>
      </ScrollReveal>

      <div className="mt-24 border-t border-white/[0.06]" />
    </section>
  )
}
