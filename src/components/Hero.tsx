import { motion, useScroll, useTransform } from 'framer-motion'

const navLinks = ['platform', 'solutions', 'company', 'support'] as const

const headlineWords = [
  { text: 'Protect', className: 'absolute left-4 top-[18%] md:left-10', delay: 0.2 },
  { text: 'Your', className: 'absolute right-4 top-[38%] md:right-10', delay: 0.35 },
  {
    text: 'Data',
    className: 'absolute left-[18%] top-[58%] md:left-[28%]',
    delay: 0.5,
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

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between gap-4 px-6 pt-6 md:px-10"
    >
      <div className="flex items-center gap-2 rounded-full bg-neutral-900/90 py-3 pl-4 pr-6 backdrop-blur">
        <SecurifyLogo />
        <span className="text-sm font-normal tracking-tight text-white">Securify</span>
      </div>

      <div className="hidden items-center gap-1 rounded-full bg-neutral-900/90 px-3 py-2 backdrop-blur md:flex">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className="rounded-full px-5 py-2 text-sm text-neutral-300 transition-colors hover:text-white"
          >
            {link}
          </a>
        ))}
      </div>

      <button
        type="button"
        className="rounded-full bg-white px-6 py-3 text-sm font-normal text-black transition-colors hover:bg-neutral-200"
      >
        Get Started
      </button>
    </motion.nav>
  )
}

export default function Hero() {
  const { scrollY } = useScroll()
  const videoY = useTransform(scrollY, [0, 600], [0, 120])
  const headlineY = useTransform(scrollY, [0, 600], [0, -60])
  const statsY = useTransform(scrollY, [0, 600], [0, -30])
  const overlayO = useTransform(scrollY, [0, 400], [0, 0.6])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <motion.div className="absolute inset-0 h-full w-full" style={{ y: videoY }}>
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_063509_7d167302-4fd4-480b-8260-18ab572333d4.mp4"
        />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute inset-0 bg-black"
        style={{ opacity: overlayO }}
      />

      <Navbar />

      <div className="relative h-full w-full">
        {headlineWords.map((word) => (
          <motion.div
            key={word.text}
            className={word.className}
            style={{ y: headlineY }}
          >
            <motion.h1
              className="hero-title text-[14vw] font-medium text-white md:text-[13vw]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                delay: word.delay,
              }}
            >
              {word.text}
            </motion.h1>
          </motion.div>
        ))}

        <motion.p
          className="absolute left-6 top-[46%] max-w-[240px] text-[15px] leading-snug text-white/90 md:left-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          We Guard Your Data with utmost care, empowering you with privacy everywhere
        </motion.p>

        <motion.div
          className="absolute right-6 top-[14%] md:right-24"
          style={{ y: statsY }}
        >
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="flex items-center justify-end gap-3">
              <div className="hidden h-px w-24 rotate-[20deg] bg-white/40 md:block" />
              <span className="text-4xl font-medium tracking-tight md:text-5xl">+65k</span>
            </div>
            <p className="mt-1 text-right text-xs text-white/70 md:text-sm">Startups Use</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-6 md:bottom-24 md:left-20"
          style={{ y: statsY }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl font-medium tracking-tight md:text-5xl">+1.5b</span>
              <div className="hidden h-px w-24 rotate-[-20deg] bg-white/40 md:block" />
            </div>
            <p className="mt-1 text-xs text-white/70 md:text-sm">GB Data Was Protected</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-16 right-6 md:bottom-20 md:right-20"
          style={{ y: statsY }}
        >
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="flex items-center justify-end gap-3">
              <div className="hidden h-px w-24 rotate-[-20deg] bg-white/40 md:block" />
              <span className="text-4xl font-medium tracking-tight md:text-5xl">+300k</span>
            </div>
            <p className="mt-1 text-right text-xs text-white/70 md:text-sm">Downloads</p>
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black" />
    </section>
  )
}
