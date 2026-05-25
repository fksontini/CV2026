"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface GlassmorphicCardProps {
  children: ReactNode
}

export function GlassmorphicCard({ children }: GlassmorphicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative">
        {/* corner brackets */}
        <span className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-accent z-10" />
        <span className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-accent z-10" />
        <span className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-accent z-10" />
        <span className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-accent z-10" />

        <div className="relative bg-card/80 backdrop-blur-sm border border-border/80 p-6 transition-colors duration-300 hover:border-accent/60 tactical-grid-fine">
          <div className="absolute top-0 left-0 right-0 h-7 bg-secondary/60 border-b border-border/60 flex items-center justify-between px-3 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent animate-blink" />
              FILE.DAT
            </span>
            <span>CLASSIFIED // FK-2026</span>
          </div>
          <div className="relative pt-6">{children}</div>
        </div>
      </div>
    </motion.div>
  )
}
