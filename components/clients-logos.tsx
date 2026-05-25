"use client"

import { motion } from "framer-motion"

interface Client {
  name: string
  sector: string
  years: string
}

const clients: Client[] = [
  { name: "Crédit Agricole", sector: "Banque", years: "2022 — 2023" },
  { name: "BNP Paribas", sector: "Banque", years: "2020 — 2021" },
  { name: "EDF", sector: "Énergie", years: "2019 — 2020" },
  { name: "ENGIE", sector: "Énergie", years: "2023" },
  { name: "BMW", sector: "Automobile", years: "2021" },
  { name: "Deloitte", sector: "Conseil", years: "2024 — 2025" },
  { name: "NaTran", sector: "Énergie", years: "2025 →" },
  { name: "Avanade", sector: "Conseil", years: "2023" },
  { name: "Onepoint", sector: "Conseil", years: "2020 — 2022" },
  { name: "Neos-SDI", sector: "Conseil", years: "2024 — 2025" },
  { name: "TDF", sector: "Télécom", years: "2024 — 2025" },
  { name: "Faurecia", sector: "Automobile", years: "2015 — 2016" },
]

export function ClientsLogos() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-4">
      {clients.map((c, i) => (
        <motion.div
          key={c.name}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: (i % 8) * 0.03 }}
          viewport={{ once: true }}
          className="group relative flex flex-col justify-between bg-background p-6 transition-colors hover:bg-muted/50"
        >
          <div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {c.sector}
            </div>
            <div className="mt-3 font-serif text-xl leading-tight text-foreground">{c.name}</div>
          </div>
          <div className="mt-6 text-xs text-muted-foreground">{c.years}</div>
        </motion.div>
      ))}
    </div>
  )
}
