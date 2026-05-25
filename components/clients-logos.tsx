"use client"

import { motion } from "framer-motion"
import { useT } from "@/lib/i18n"

interface Client {
  name: string
  short: string
  sector: string
  code: string
  natoCode: string
  years: string
}

const clients: Client[] = [
  { name: "Crédit Agricole", short: "CA", sector: "BANKING", code: "TGT-001", natoCode: "ALPHA-01", years: "2022-23" },
  { name: "BNP Paribas", short: "BNP", sector: "BANKING", code: "TGT-002", natoCode: "BRAVO-02", years: "2020-21" },
  { name: "EDF", short: "EDF", sector: "ENERGY", code: "TGT-003", natoCode: "ECHO-03", years: "2019-20" },
  { name: "ENGIE", short: "ENGIE", sector: "ENERGY", code: "TGT-004", natoCode: "ECHO-04", years: "2023" },
  { name: "BMW", short: "BMW", sector: "AUTOMOTIVE", code: "TGT-005", natoCode: "MIKE-05", years: "2021" },
  { name: "Deloitte", short: "DLT", sector: "CONSULTING", code: "TGT-006", natoCode: "DELTA-06", years: "2024-25" },
  { name: "NaTran", short: "NTR", sector: "ENERGY", code: "TGT-007", natoCode: "NOVEMBER-07", years: "2025-▶" },
  { name: "Avanade", short: "AVN", sector: "CONSULTING", code: "TGT-008", natoCode: "ALPHA-08", years: "2023" },
  { name: "Onepoint", short: "1PT", sector: "CONSULTING", code: "TGT-009", natoCode: "OSCAR-09", years: "2020-22" },
  { name: "Neos-SDI", short: "NEO", sector: "CONSULTING", code: "TGT-010", natoCode: "NOVEMBER-10", years: "2024-25" },
  { name: "TDF", short: "TDF", sector: "TELECOM", code: "TGT-011", natoCode: "TANGO-11", years: "2024-25" },
  { name: "Faurecia", short: "FRC", sector: "AUTOMOTIVE", code: "TGT-012", natoCode: "FOXTROT-12", years: "2015-16" },
]

export function ClientsLogos() {
  const { t } = useT()

  return (
    <div className="space-y-6">
      {/* Top metrics bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
        <div className="bg-card p-4">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
            {"// TARGETS ENGAGED"}
          </div>
          <div className="font-stencil text-2xl text-accent">{clients.length.toString().padStart(3, "0")}</div>
        </div>
        <div className="bg-card p-4">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
            {"// SECTORS"}
          </div>
          <div className="font-stencil text-2xl text-accent">05</div>
        </div>
        <div className="bg-card p-4">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
            {"// SUCCESS RATE"}
          </div>
          <div className="font-stencil text-2xl text-accent">100%</div>
        </div>
        <div className="bg-card p-4 flex items-center justify-between gap-2">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
              {"// STATUS"}
            </div>
            <div className="font-stencil text-base text-accent">{t("allies.engagement")}</div>
          </div>
          <span className="w-2 h-2 bg-accent animate-blink rounded-full" />
        </div>
      </div>

      {/* Redacted intro line */}
      <div className="relative border border-border bg-card/60 p-4 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-40" />
        <div className="flex items-center gap-3 flex-wrap font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <span className="bg-foreground/80 text-background px-2 py-0.5">CLASSIFIED</span>
          <span className="text-accent">►</span>
          <span>{t("allies.intro")}</span>
          <span className="ml-auto inline-block bg-foreground/70 h-2.5 w-24" aria-hidden />
        </div>
      </div>

      {/* Client dossier grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {clients.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
            viewport={{ once: true }}
            className="group relative bg-card border border-border hover:border-accent/70 transition-colors"
          >
            {/* Corner brackets */}
            <span className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-accent" />
            <span className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-accent" />
            <span className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-accent" />
            <span className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-accent" />

            {/* Header strip */}
            <div className="flex items-center justify-between px-3 py-1.5 border-b border-dashed border-border bg-secondary/40">
              <span className="font-mono text-[9px] uppercase tracking-widest text-accent flex items-center gap-1.5">
                <span className="w-1 h-1 bg-accent" />
                {c.code}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                {c.natoCode}
              </span>
            </div>

            {/* Body — stencil shortname + redacted bars */}
            <div className="p-4">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-stencil text-3xl tracking-wider text-foreground group-hover:text-accent transition-colors">
                  {c.short}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {c.sector}
                </span>
              </div>

              <div className="space-y-1.5 mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground w-14">UNIT</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-foreground/85">
                    {c.name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground w-14">OPS</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-foreground/85">
                    {c.years}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground w-14">INTEL</span>
                  <span className="inline-block bg-foreground/70 h-2 w-32" aria-hidden />
                </div>
              </div>
            </div>

            {/* Footer stamp */}
            <div className="flex items-center justify-between px-3 py-1.5 border-t border-dashed border-border bg-secondary/30">
              <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                STATUS
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-accent flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-accent animate-blink" />
                NEUTRALIZED
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
