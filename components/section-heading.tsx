"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  eyebrow?: string
  subtitle?: string
}

export function SectionHeading({ title, eyebrow, subtitle }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.2em] text-accent"
        >
          {eyebrow}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        viewport={{ once: true }}
        className="mt-3 text-balance font-serif text-4xl leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
