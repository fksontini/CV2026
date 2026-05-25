"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useT } from "@/lib/i18n"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  client?: string
  role?: string
  duration?: string
}

export function ProjectCard({ title, description, tags, client, role, duration }: ProjectCardProps) {
  const { t } = useT()

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background transition-colors hover:border-foreground/20"
    >
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="text-xs uppercase tracking-[0.18em] text-accent">
            {t("projects.client")} · {client}
          </div>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
        </div>

        <h3 className="mt-3 font-serif text-2xl leading-tight text-foreground">{title}</h3>

        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted-foreground">{description}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-px border-t border-border bg-border">
        <div className="bg-background p-4">
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            {t("projects.role")}
          </div>
          <div className="mt-1 text-sm font-medium text-foreground">{role ?? "—"}</div>
        </div>
        <div className="bg-background p-4">
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            {t("projects.duration")}
          </div>
          <div className="mt-1 text-sm font-medium text-foreground">{duration ?? "—"}</div>
        </div>
      </div>
    </motion.article>
  )
}
