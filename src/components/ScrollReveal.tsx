import type { ReactNode } from 'react'
import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'

interface Props {
  children: ReactNode
  variants?: Variants
  delay?: number
  className?: string
  once?: boolean
}

export const ScrollReveal = ({
  children,
  variants,
  delay = 0,
  className,
  once = true,
}: Props) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
