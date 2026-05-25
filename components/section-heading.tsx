"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle: string
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="inline-block">
          <div className="relative px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] rounded-sm bg-white/5 backdrop-blur-sm border-l-2 border-r-2 border-amber-400/70 mb-2">
            <span className="relative z-10 text-slate-200">{subtitle}</span>
          </div>
        </div>
      </motion.div>

      <motion.h2
        className="text-4xl md:text-5xl font-bold tracking-tight text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>

      <motion.div
        className="flex items-center justify-center gap-2 mt-6"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <span className="block w-10 h-px bg-slate-600" />
        <span className="block w-2 h-2 rotate-45 bg-amber-400" />
        <span className="block w-10 h-px bg-slate-600" />
      </motion.div>
    </div>
  )
}
