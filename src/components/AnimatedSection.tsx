import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type AnimationVariant = 'fadeUp' | 'slideLeft' | 'slideRight' | 'scale' | 'fadeIn'

interface AnimatedSectionProps {
  children: ReactNode
  variant?: AnimationVariant
  delay?: number
  className?: string
}

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
}

const AnimatedSection = ({ children, variant = 'fadeUp', delay = 0, className = '' }: AnimatedSectionProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      variants={variants[variant]}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection
