import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ScrollReveal } from './ScrollReveal'
import { fadeIn, slideInLeft, staggerContainer, staggerItem } from '../lib/animations'

const links = [
  {
    heading: 'Product',
    items: ['Platform', 'Solutions', 'pricing', 'Changelog', 'Roadmap'],
  },
  {
    heading: 'Company',
    items: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  },
  {
    heading: 'Security',
    items: [
      'Trust Center',
      'compliance',
      'Bug Bounty',
      'Penetration Tests',
      'Audit Logs',
    ],
  },
  {
    heading: 'Legal',
    items: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'DPA', 'GDPR'],
  },
] as const

const badges = ['SOC2', 'ISO', 'GDPR', 'HIPAA', 'PCI'] as const

const LegalLinks = ['Privacy', 'Terms', 'Cookies', 'Sitemap'] as const

const socials = [
  {
    name: 'twitter / x',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    name: 'github',
    path: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
  },
  {
    name: 'linkedin',
    path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z',
  },
] as const

function SecurifyLogo() {
  return (
    <svg viewBox="0 0 256 256" className="h-5 w-5" aria-hidden="true">
      <path
        fill="#ffffff"
        d="M 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 128 L 64 128 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z M 128 64 L 128 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 Z M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 128 0 L 192 0 Z"
      />
    </svg>
  )
}

export default function Footer() {
  const navRef = useRef<HTMLDivElement>(null)
  const navInView = useInView(navRef, { once: true, margin: '-80px' })

  return (
    <footer className="relative overflow-hidden bg-black px-6 pb-8 pt-12 md:pt-16 md:px-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 border-b border-white/[0.06] pb-16 md:grid-cols-12">
          <ScrollReveal variants={slideInLeft} delay={0.1} className="md:col-span-4">
            <div className="mb-5 flex items-center gap-2">
              <SecurifyLogo />
              <span className="text-sm font-normal tracking-tight text-white">
                securify
              </span>
            </div>

            <p className="mb-8 max-w-xs text-sm leading-relaxed text-white/35">
              enterprise-grade data Security for teams of every size. protect,
              monitor, and comply — without the complexity.
            </p>

            <p className="mb-3 text-xs uppercase tracking-[0.15em] text-white/30">
              Stay in the Loop
            </p>
            <div className="flex items-center gap-0">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 rounded-l-full border border-r-0 border-white/[0.08] bg-white/[0.04] px-5 py-2.5 text-sm text-white/60 outline-none transition-colors duration-200 placeholder:text-white/20 focus:border-white/20"
              />
              <button
                type="button"
                className="whitespace-nowrap rounded-r-full border border-white/[0.08] bg-white/[0.08] px-5 py-2.5 text-sm text-white/50 transition-all duration-200 hover:bg-white/[0.15] hover:text-white/80"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-2 text-[10px] text-white/20">
              No Spam. UnSubscribe Anytime.
            </p>
          </ScrollReveal>

          <motion.div
            ref={navRef}
            variants={staggerContainer}
            initial="hidden"
            animate={navInView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 gap-8 md:col-span-8 md:grid-cols-4"
          >
            {links.map((column) => (
              <motion.div key={column.heading} variants={staggerItem}>
                <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-white/25">
                  {column.heading}
                </p>
                {column.items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="mb-3 block cursor-pointer text-sm text-white/45 transition-colors duration-200 hover:text-white/80"
                  >
                    {item}
                  </a>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/[0.06] py-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white/80" />
            </span>
            <span className="text-xs text-white/40">All Systems Operational</span>
            <span className="h-3 w-px bg-white/[0.08]" />
            <a
              href="#"
              className="text-xs text-white/25 transition-colors duration-200 hover:text-white/50"
            >
              View Status Page →
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-md border border-white/[0.08] px-2.5 py-1 text-[10px] font-medium tracking-widest text-white/25 transition-all duration-200 hover:border-white/15 hover:text-white/40"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <ScrollReveal variants={fadeIn} delay={0.3}>
          <div className="flex flex-col items-center justify-between gap-4 pt-8 md:flex-row">
            <p className="text-xs text-white/20">
              © 2024 Securify, Inc. All Rights Reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {LegalLinks.map((link, index) => (
                <div key={link} className="flex items-center gap-4">
                  <a
                    href="#"
                    className="cursor-pointer text-xs text-white/20 transition-colors duration-200 hover:text-white/40"
                  >
                    {link}
                  </a>
                  {index < LegalLinks.length - 1 && (
                    <span className="h-0.5 w-0.5 rounded-full bg-white/[0.12]" />
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  className="group flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] transition-all duration-200 hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 fill-current text-white/30 transition-colors duration-200 group-hover:text-white/60"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  )
}
