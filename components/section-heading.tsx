"use client"

import { motion } from "framer-motion"
import { useT } from "@/lib/i18n"

interface SectionHeadingProps {
  title: string
  subtitle: string
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  const { t } = useT()
  return (
    <div className="text-center space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-accent font-mono">
          <span className="block w-8 h-px bg-accent" />
          <span>// {subtitle}</span>
          <span className="block w-8 h-px bg-accent" />
        </div>
      </motion.div>

      <motion.h2
        className="font-stencil text-5xl md:text-7xl tracking-wider text-foreground uppercase text-shadow-stencil"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>

      <motion.div
        className="flex items-center justify-center gap-3 mt-4 font-mono text-[10px] tracking-widest text-muted-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <span className="text-accent">[</span>
        <span>{t("sec.classified")}</span>
        <span className="text-accent">]</span>
      </motion.div>
    </div>
  )
}
