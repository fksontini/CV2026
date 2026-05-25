"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Printer, Mail, Phone, MapPin, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useT } from "@/lib/i18n"
import {
  experiencesFr,
  experiencesEn,
  educationFr,
  educationEn,
  skillsAll,
} from "@/lib/experiences"

export default function CVPage() {
  const { lang, t } = useT()
  const experiences = lang === "en" ? experiencesEn : experiencesFr
  const education = lang === "en" ? educationEn : educationFr

  useEffect(() => {
    document.title =
      lang === "en"
        ? "Firas Ksontini — Resume"
        : "Firas Ksontini — Curriculum Vitae"
  }, [lang])

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-muted/30 print:bg-white">
      {/* Top toolbar (hidden in print) */}
      <div className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur print:hidden">
        <div className="container flex h-14 items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {lang === "en" ? "Back to portfolio" : "Retour au portfolio"}
          </Link>
          <div className="flex items-center gap-2">
            <Button onClick={handlePrint} className="h-9 rounded-full px-4 text-sm">
              <Printer className="mr-1.5 h-3.5 w-3.5" />
              {lang === "en" ? "Print / Save as PDF" : "Imprimer / PDF"}
            </Button>
          </div>
        </div>
      </div>

      {/* Document */}
      <main className="mx-auto my-8 max-w-[820px] bg-white text-[#111] shadow-sm print:my-0 print:max-w-none print:shadow-none">
        <article className="cv-doc px-10 py-10 print:px-12 print:py-10">
          {/* Header */}
          <header className="mb-8 border-b border-neutral-200 pb-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h1 className="font-serif text-4xl leading-tight tracking-tight text-neutral-900">
                  Firas Ksontini
                </h1>
                <p className="mt-2 max-w-2xl text-[15px] leading-snug text-neutral-700">
                  {lang === "en"
                    ? "Senior Consultant (10+ yrs), Technical Project Manager — specialized in Microsoft 365, SharePoint and Power Platform."
                    : "Consultant Sénior (+10 ans EXP), Chef de projet Technique spécialisé en Microsoft 365, SharePoint et Power Platform."}
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-1.5 text-[13px] text-neutral-700 sm:grid-cols-2">
              <ContactLine
                icon={<MapPin className="h-3.5 w-3.5" />}
                value="Issy-les-Moulineaux, France"
              />
              <ContactLine
                icon={<Mail className="h-3.5 w-3.5" />}
                value="firasksontini@gmail.com"
                href="mailto:firasksontini@gmail.com"
              />
              <ContactLine
                icon={<Phone className="h-3.5 w-3.5" />}
                value="+33 (0)7 83 88 74 73"
                href="tel:+33783887473"
              />
              <ContactLine
                icon={<Linkedin className="h-3.5 w-3.5" />}
                value="linkedin.com/in/fksontini"
                href="https://www.linkedin.com/in/fksontini/"
              />
            </div>
          </header>

          {/* About */}
          <Section title={lang === "en" ? "Profile" : "Profil"}>
            <p className="text-[13.5px] leading-relaxed text-neutral-700">
              {lang === "en"
                ? "Microsoft 365, SharePoint and Power Platform expert with strong experience in technical project management, pre-sales and digital workplace. I cover the full lifecycle: scoping, architecture, development (SPFx/React, PowerApps, Power Automate, .NET), governance and change enablement."
                : "Expert en Microsoft 365, SharePoint et Power Platform, avec une forte expérience en gestion de projet technique, avant-vente et digital workplace. Je couvre l'intégralité du cycle projet : cadrage, architecture, développement (SPFx/React, PowerApps, Power Automate, .NET), gouvernance et accompagnement au changement."}
            </p>
          </Section>

          {/* Experience */}
          <Section title={lang === "en" ? "Work Experience" : "Expériences professionnelles"}>
            <div className="space-y-4">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className="break-inside-avoid border-l-2 border-neutral-200 pl-4"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                    <h3 className="text-[14px] font-semibold text-neutral-900">
                      {exp.title}
                    </h3>
                    <span className="text-[12px] font-medium uppercase tracking-wide text-neutral-500">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-[13px] font-medium text-neutral-700">
                    {exp.company}
                  </div>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-neutral-600">
                    {exp.description}
                  </p>
                  {exp.tags && exp.tags.length > 0 && (
                    <div className="mt-1.5 text-[11.5px] text-neutral-500">
                      {exp.tags.join(" · ")}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Section>

          {/* Education */}
          <Section title={lang === "en" ? "Education" : "Formation"}>
            <div className="space-y-2">
              {education.map((ed, i) => (
                <div key={i} className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <div>
                    <div className="text-[13.5px] font-semibold text-neutral-900">
                      {ed.degree}
                    </div>
                    <div className="text-[12.5px] text-neutral-700">{ed.school}</div>
                  </div>
                  <span className="text-[12px] font-medium uppercase tracking-wide text-neutral-500">
                    {ed.period}
                  </span>
                </div>
              ))}
            </div>
          </Section>

          {/* Skills */}
          <Section title={lang === "en" ? "Skills" : "Compétences"}>
            <div className="flex flex-wrap gap-1.5">
              {skillsAll.map((s) => (
                <span
                  key={s}
                  className="rounded border border-neutral-300 bg-neutral-50 px-2 py-0.5 text-[11.5px] text-neutral-700 print:bg-white"
                >
                  {s}
                </span>
              ))}
            </div>
          </Section>

          {/* Languages */}
          <Section title={lang === "en" ? "Languages" : "Langues"}>
            <p className="text-[13px] text-neutral-700">
              {lang === "en" ? "French · English · Arabic" : "Français · Anglais · Arabe"}
            </p>
          </Section>
        </article>
      </main>

      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 12mm 14mm;
          }
          html,
          body {
            background: #fff !important;
          }
          .cv-doc {
            font-size: 11.5px;
          }
        }
      `}</style>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-7">
      <h2 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
        {title}
      </h2>
      {children}
    </section>
  )
}

function ContactLine({
  icon,
  value,
  href,
}: {
  icon: React.ReactNode
  value: string
  href?: string
}) {
  const inner = (
    <span className="inline-flex items-center gap-1.5">
      <span className="text-neutral-500">{icon}</span>
      <span>{value}</span>
    </span>
  )
  return href ? (
    <a href={href} className="hover:text-neutral-900" target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    inner
  )
}
