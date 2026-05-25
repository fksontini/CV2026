"use client"

import { motion } from "framer-motion"
import { useT } from "@/lib/i18n"

interface Client {
  name: string
  // Tactical wordmark rendered as text — keeps the military "stamp" aesthetic
  wordmark: React.ReactNode
  sector: string
  code: string
}

const clients: Client[] = [
  {
    name: "Crédit Agricole",
    code: "CA-001",
    sector: "BANKING",
    wordmark: (
      <div className="flex items-center gap-2">
        <span className="font-stencil text-2xl tracking-tight">CA</span>
        <span className="font-serif italic text-base tracking-tight">Crédit Agricole</span>
      </div>
    ),
  },
  {
    name: "BNP Paribas",
    code: "BNP-002",
    sector: "BANKING",
    wordmark: (
      <div className="flex items-center gap-1.5">
        <span className="grid grid-cols-3 gap-[2px]">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="w-1 h-1 bg-current" />
          ))}
        </span>
        <span className="font-sans font-bold text-base tracking-tight">BNP PARIBAS</span>
      </div>
    ),
  },
  {
    name: "EDF",
    code: "EDF-003",
    sector: "ENERGY",
    wordmark: (
      <div className="flex items-center gap-1">
        <span className="font-sans font-black italic text-3xl tracking-tighter">EDF</span>
      </div>
    ),
  },
  {
    name: "ENGIE",
    code: "ENG-004",
    sector: "ENERGY",
    wordmark: <span className="font-sans font-bold text-2xl tracking-[0.15em]">ENGIE</span>,
  },
  {
    name: "BMW",
    code: "BMW-005",
    sector: "AUTOMOTIVE",
    wordmark: (
      <div className="flex items-center gap-2">
        <span className="relative w-7 h-7 rounded-full border-2 border-current flex items-center justify-center overflow-hidden">
          <span className="absolute top-0 left-0 w-1/2 h-1/2 bg-current/20" />
          <span className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-current/20" />
          <span className="absolute inset-1 rounded-full border border-current" />
        </span>
        <span className="font-sans font-bold text-2xl tracking-[0.2em]">BMW</span>
      </div>
    ),
  },
  {
    name: "Deloitte",
    code: "DLT-006",
    sector: "CONSULTING",
    wordmark: (
      <div className="flex items-baseline gap-0.5">
        <span className="font-sans font-bold text-2xl tracking-tight">Deloitte</span>
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
      </div>
    ),
  },
  {
    name: "NaTran",
    code: "NAT-007",
    sector: "ENERGY",
    wordmark: (
      <div className="flex items-center gap-1.5">
        <span className="w-3 h-3 rotate-45 border-2 border-current" />
        <span className="font-sans font-bold text-xl tracking-tight">NaTran</span>
      </div>
    ),
  },
  {
    name: "Avanade",
    code: "AVN-008",
    sector: "CONSULTING",
    wordmark: (
      <div className="flex items-center gap-1.5">
        <span className="font-sans font-black italic text-2xl tracking-tight">avanade</span>
      </div>
    ),
  },
  {
    name: "Onepoint",
    code: "1PT-009",
    sector: "CONSULTING",
    wordmark: (
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-current" />
        <span className="font-sans font-bold text-xl tracking-tight lowercase">onepoint</span>
      </div>
    ),
  },
  {
    name: "Neos-SDI",
    code: "NEO-010",
    sector: "CONSULTING",
    wordmark: (
      <div className="flex items-baseline gap-1">
        <span className="font-sans font-black text-2xl italic tracking-tighter">neos</span>
        <span className="font-mono text-[10px] tracking-widest opacity-70">— SDI</span>
      </div>
    ),
  },
  {
    name: "TDF",
    code: "TDF-011",
    sector: "TELECOM",
    wordmark: <span className="font-stencil text-3xl tracking-[0.15em]">TDF</span>,
  },
  {
    name: "Faurecia",
    code: "FRC-012",
    sector: "AUTOMOTIVE",
    wordmark: (
      <div className="flex items-center gap-1.5">
        <span className="block w-1 h-5 bg-current" />
        <span className="font-sans font-bold text-xl tracking-tight">FAURECIA</span>
      </div>
    ),
  },
]

export function ClientsLogos() {
  const { t } = useT()

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
        <div className="bg-card p-4">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
            {"// TARGETS"}
          </div>
          <div className="font-stencil text-2xl text-accent">{clients.length}</div>
        </div>
        <div className="bg-card p-4">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
            {"// SECTORS"}
          </div>
          <div className="font-stencil text-2xl text-accent">5</div>
        </div>
        <div className="bg-card p-4 flex items-center justify-between gap-2">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
              {"// STATUS"}
            </div>
            <div className="font-stencil text-lg text-accent">{t("allies.engagement")}</div>
          </div>
          <span className="w-2 h-2 bg-accent animate-blink rounded-full" />
        </div>
      </div>

      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground border-l-2 border-accent/60 pl-3">
        {t("allies.intro")}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-border border border-border">
        {clients.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
            viewport={{ once: true }}
            className="group relative bg-card hover:bg-secondary/50 transition-colors p-5 min-h-[130px] flex flex-col justify-between"
          >
            <span className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l border-accent/0 group-hover:border-accent transition-colors" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 border-t border-r border-accent/0 group-hover:border-accent transition-colors" />
            <span className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b border-l border-accent/0 group-hover:border-accent transition-colors" />
            <span className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r border-accent/0 group-hover:border-accent transition-colors" />

            <div className="flex items-center justify-between text-[9px] font-mono uppercase tracking-widest text-muted-foreground mb-3">
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 bg-accent" />
                {c.code}
              </span>
              <span>{c.sector}</span>
            </div>

            <div className="flex-1 flex items-center justify-center text-foreground/85 group-hover:text-accent transition-colors">
              {c.wordmark}
            </div>

            <div className="mt-3 pt-2 border-t border-dashed border-border/60 flex items-center justify-between text-[9px] font-mono uppercase tracking-widest text-muted-foreground">
              <span>{c.name}</span>
              <span className="text-accent">►</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
