"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
  level: number
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  const grade =
    level >= 90 ? "S-CLASS" : level >= 80 ? "A-CLASS" : level >= 70 ? "B-CLASS" : "C-CLASS"

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <div className="relative bg-card border border-border p-5 h-full transition-colors duration-300 group-hover:border-accent corner-cut-sm">
        <div className="flex items-start justify-between mb-3">
          <div className="font-stencil text-base uppercase tracking-wide text-foreground leading-tight">
            {name}
          </div>
          <span className="font-mono text-[9px] text-accent border border-accent/60 px-1.5 py-0.5 shrink-0 ml-2">
            {grade}
          </span>
        </div>

        {/* tick marks */}
        <div className="flex gap-px mb-2">
          {Array.from({ length: 20 }).map((_, i) => {
            const filled = i < Math.round(level / 5)
            return (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                viewport={{ once: true }}
                className={`flex-1 h-2 ${filled ? "bg-primary" : "bg-secondary"}`}
              />
            )
          })}
        </div>

        <div className="flex justify-between items-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <span>OPS.LEVEL</span>
          <span className="text-accent">{level.toString().padStart(2, "0")} / 100</span>
        </div>
      </div>
    </motion.div>
  )
}
