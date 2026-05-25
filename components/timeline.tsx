"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { useT } from "@/lib/i18n"
import { experiencesFr, experiencesEn } from "@/lib/experiences"
import { Button } from "@/components/ui/button"
import { CompanyLogo } from "@/components/company-logo"

const INITIAL_COUNT = 8

export function Timeline() {
  const isMobile = useMobile()
  const { lang, t } = useT()
  const experiences = lang === "en" ? experiencesEn : experiencesFr
  const [showAll, setShowAll] = useState(false)

  const visible = showAll ? experiences : experiences.slice(0, INITIAL_COUNT)
  const remaining = experiences.length - INITIAL_COUNT

  return (
    <div className="mx-auto max-w-3xl">
      <ol className="relative">
        {/* vertical rail */}
        <div
          aria-hidden
          className="absolute bottom-0 left-3 top-2 w-px bg-border md:left-[7.5rem]"
        />

        {visible.map((exp, index) => (
          <motion.li
            key={`${exp.company}-${exp.period}-${index}`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.2) }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative pb-10 pl-10 md:pl-40"
          >
            {!isMobile && (
              <div className="absolute left-0 top-1 hidden w-[6.5rem] text-right text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground md:block">
                {exp.period}
              </div>
            )}

            <span
              className="absolute left-[7px] top-2 flex h-3 w-3 items-center justify-center md:left-[7.5rem] md:-translate-x-1/2"
            >
              {exp.active && (
                <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-emerald-500 opacity-50" />
              )}
              <span
                className={`relative h-2.5 w-2.5 rounded-full ring-4 ring-background ${
                  exp.active ? "bg-emerald-500" : "bg-foreground"
                }`}
              />
            </span>

            <div className="rounded-2xl border border-border bg-background p-5 transition-colors hover:border-foreground/20">
              <div className="flex items-start gap-4">
                <CompanyLogo company={exp.company} size={44} />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-serif text-xl text-foreground">{exp.title}</h3>
                    {exp.active && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        {t("exp.current")}
                      </span>
                    )}
                  </div>
                  <div className="mt-1 text-sm font-medium text-accent">{exp.company}</div>
                  {isMobile && (
                    <div className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {exp.period}
                    </div>
                  )}
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
              {exp.tags && exp.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.li>
        ))}
      </ol>

      {!showAll && remaining > 0 && (
        <div className="mt-2 flex justify-center">
          <Button
            variant="outline"
            onClick={() => setShowAll(true)}
            className="h-11 rounded-full border-border"
          >
            {lang === "en"
              ? `Show ${remaining} more experiences`
              : `Voir ${remaining} expériences supplémentaires`}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
