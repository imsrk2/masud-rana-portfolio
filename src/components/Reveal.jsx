import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * Fade + rise reveal on scroll. Wrap any content with <Reveal>.
 */
export default function Reveal({ children, delay = 0, y = 28, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px 0px -80px 0px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
