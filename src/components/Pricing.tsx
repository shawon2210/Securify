import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ScrollReveal } from './ScrollReveal'
import { fadeUp, staggerContainer, staggerItem } from '../lib/animations'

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 29,
    annualPrice: 23,
    desc: 'Perfect for Small Teams and Early-Stage Startups.',
    features: [
      'Up to 5 Users',
      '10GB Encrypted Storage',
      'Real-Time Threat Alerts',
      'SOC 2 Compliance Report',
      'Email Support',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Pro',
    monthlyPrice: 79,
    annualPrice: 63,
    desc: 'For Growing Teams That Need Full Protection.',
    features: [
      'Up to 50 Users',
      '500GB Encrypted Storage',
      'Zero-Trust Architecture',
      'ISO 27001 + GDPR Ready',
      'Audit Logs (1 Year)',
      'Slack + PagerDuty Integration',
      'Priority Support',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: 199,
    annualPrice: 159,
    desc: 'Custom Security Policies for Large Organizations.',
    features: [
      'Unlimited Users',
      'Unlimited Storage',
      'Custom Retention Policies',
      'Dedicated Security Engineer',
      'SLA 99.99% Uptime',
      'SSO + SAML Support',
      '24/7 Phone Support',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
] as const

function AnimatedPrice({ price }: { price: number }) {
  const [visible, setVisible] = useState(true)
  const [displayPrice, setDisplayPrice] = useState(price)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      setDisplayPrice(price)
      return
    }

    setVisible(false)
    const timer = window.setTimeout(() => {
      setDisplayPrice(price)
      setVisible(true)
    }, 150)

    return () => window.clearTimeout(timer)
  }, [price])

  return (
    <span
      className={`text-5xl font-medium tracking-[-0.04em] text-white transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
      }`}
    >
      {displayPrice}
    </span>
  )
}

function PricingCard({
  plan,
  annual,
}: {
  plan: (typeof plans)[number]
  annual: boolean
}) {
  const price = annual ? plan.annualPrice : plan.monthlyPrice

  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
        plan.popular
          ? 'border-white/25 bg-white/[0.05]'
          : 'border-white/[0.08] bg-white/[0.02] hover:border-white/20'
      }`}
      style={
        plan.popular
          ? {
              boxShadow:
                '0 0 0 1px rgba(255,255,255,0.15), 0 0 40px rgba(255,255,255,0.04)',
            }
          : undefined
      }
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-[10px] uppercase tracking-[0.2em] text-white/60">
          most popular
        </span>
      )}

      <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">{plan.name}</p>

      <div className="mb-2 flex items-end gap-1">
        <span className="mb-1 text-lg text-white/50">$</span>
        <AnimatedPrice price={price} />
        <span className="mb-2 text-sm text-white/30">/mo</span>
      </div>

      {annual && (
        <p className="mb-6 text-[11px] text-white/30">Billed Annually</p>
      )}
      {!annual && <p className="mb-6 text-[11px] text-white/30 invisible">Billed Annually</p>}

      <p className="mb-8 text-sm leading-relaxed text-white/40">{plan.desc}</p>

      <div className="mb-8 border-t border-white/[0.06]" />

      <ul className="mb-10 flex flex-1 flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04]">
              <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
            </span>
            <span className="text-sm text-white/60">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className={
          plan.popular
            ? 'w-full rounded-full bg-white py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90'
            : 'w-full rounded-full border border-white/15 py-3 text-sm text-white/70 transition-all duration-300 hover:border-white/30 hover:text-white'
        }
      >
        {plan.cta}
      </button>
    </div>
  )
}

export default function Pricing() {
  const [annual, setAnnual] = useState(true)
  const gridRef = useRef<HTMLDivElement>(null)
  const inView = useInView(gridRef, { once: true, margin: '-80px' })

  return (
    <section className="overflow-hidden bg-black px-6 py-24 md:px-16">
      <ScrollReveal variants={fadeUp} className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">Pricing</p>
        <h2 className="text-3xl font-medium leading-[1.15] tracking-[-0.03em] text-white md:text-4xl lg:text-5xl">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-4 text-center text-sm text-white/40 md:text-base">No Hidden Fees. Cancel Anytime.</p>
      </ScrollReveal>

      <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
        <span className={`text-sm ${annual ? 'text-white/40' : 'text-white/70'}`}>Monthly</span>
        <button
          type="button"
          role="switch"
          aria-checked={annual}
          aria-label="toggle annual billing"
          onClick={() => setAnnual((prev) => !prev)}
          className="relative h-6 w-12 shrink-0 cursor-pointer rounded-full bg-white/10"
        >
          <span
            className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-all duration-300 ${
              annual ? 'left-6' : 'left-0.5'
            }`}
          />
        </button>
        <span className={`text-sm ${annual ? 'text-white/70' : 'text-white/40'}`}>Annual</span>
        <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] uppercase tracking-widest text-white/40 md:ml-1">
          Save 20%
        </span>
      </div>

      <motion.div
        ref={gridRef}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-4 md:grid-cols-3"
      >
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            variants={staggerItem}
            transition={
              plan.popular
                ? { duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }
                : undefined
            }
          >
            <PricingCard plan={plan} annual={annual} />
          </motion.div>
        ))}
      </motion.div>

      <p className="mt-10 text-center text-xs text-white/25 md:mt-12 md:text-sm">
        All plans include a 14-day free trial. No credit card required.
      </p>

      <div className="mt-24 border-t border-white/[0.06]" />
    </section>
  )
}
