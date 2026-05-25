"use client"

import Link from "next/link"
import { ArrowRight, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { FloatingNav } from "@/components/floating-nav"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { ClientsLogos } from "@/components/clients-logos"
import { LanguageToggle } from "@/components/language-toggle"
import { useT } from "@/lib/i18n"

export default function Portfolio() {
  const { t } = useT()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <FloatingNav />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, hsl(221 83% 53% / 0.06), transparent 70%)",
          }}
        />
        <div className="container relative z-10 pt-32 pb-24 lg:pt-40 lg:pb-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {t("status.available")}
            </div>

            <p className="mt-6 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              {t("hero.eyebrow")}
            </p>

            <h1 className="mt-6 text-balance font-serif text-5xl leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-[5.5rem]">
              {t("hero.title.pre")}{" "}
              <span className="italic text-accent">{t("hero.title.accent")}</span>{" "}
              {t("hero.title.post")}
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              {t("hero.subtitle")}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link href="#projects">
                <Button size="lg" className="h-12 rounded-full px-6 text-sm font-medium">
                  {t("hero.cta.work")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-border bg-background px-6 text-sm font-medium hover:bg-muted"
                >
                  {t("hero.cta.contact")}
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-20 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border">
              <Stat value="10+" label={t("hero.stat.experience")} />
              <Stat value="11" label={t("hero.stat.clients")} />
              <Stat value="20+" label={t("hero.stat.projects")} />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-24 lg:py-32">
        <div className="container">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow={t("sec.about.eyebrow")} title={t("sec.about.title")} />
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>{t("about.p1")}</p>
                <p>{t("about.p2")}</p>
                <p>{t("about.p3")}</p>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {[t("about.role.lead"), t("about.role.arch"), t("about.role.pm")].map((r) => (
                  <span
                    key={r}
                    className="rounded-full border border-border bg-muted px-3 py-1 text-sm text-foreground"
                  >
                    {r}
                  </span>
                ))}
              </div>

              <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
                <InfoCell label={t("about.based")} value={t("about.location")} />
                <InfoCell label={t("about.languages")} value={t("about.languages.value")} />
                <InfoCell label={t("about.availability")} value={t("about.availability.value")} />
              </dl>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="https://cv-three-umber.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="h-11 rounded-full border-border">
                    <Download className="mr-2 h-4 w-4" />
                    {t("nav.cv")}
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/fksontini/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" className="h-11 rounded-full">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                    <ExternalLink className="ml-2 h-3.5 w-3.5 opacity-60" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="relative border-t border-border bg-muted/40 py-24 lg:py-32">
        <div className="container">
          <SectionHeading
            eyebrow={t("sec.clients.eyebrow")}
            title={t("sec.clients.title")}
            subtitle={t("sec.clients.subtitle")}
          />
          <div className="mt-16">
            <ClientsLogos />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative border-t border-border py-24 lg:py-32">
        <div className="container">
          <SectionHeading
            eyebrow={t("sec.skills.eyebrow")}
            title={t("sec.skills.title")}
            subtitle={t("sec.skills.subtitle")}
          />

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            <SkillCategory
              title={t("skills.cat.platform")}
              skills={[
                "SharePoint Online",
                "SharePoint On-Premise",
                "Microsoft Teams & Viva",
                "Power Platform",
                "PowerApps",
                "Power Automate",
                "Power BI",
                "Azure",
              ]}
            />
            <SkillCategory
              title={t("skills.cat.dev")}
              skills={[
                "SPFx",
                "React",
                "TypeScript",
                ".NET / .NET Core",
                "PnP / PowerShell",
                "REST / Graph API",
              ]}
            />
            <SkillCategory
              title={t("skills.cat.governance")}
              skills={[
                "Gouvernance M365",
                "DLP & Sécurité",
                "CoE Starter Kit",
                "Avant-vente",
                "Agile / Scrum",
                "Conduite du changement",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="relative border-t border-border bg-muted/40 py-24 lg:py-32"
      >
        <div className="container">
          <SectionHeading
            eyebrow={t("sec.projects.eyebrow")}
            title={t("sec.projects.title")}
            subtitle={t("sec.projects.subtitle")}
          />

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              client="NaTran"
              title="Digital Workplace Microsoft 365"
              description="Conception et développement d'applications métier sur SharePoint Online (SPFx/React), PowerApps et Power Automate. Animation d'ateliers, support N3 et gouvernance M365."
              tags={["SharePoint Online", "SPFx", "React", "Power Platform"]}
              role="Expert M365"
              duration="2025 — En cours"
            />
            <ProjectCard
              client="Deloitte"
              title="Application Consultations Auditeurs"
              description="Application SharePoint Online pour la soumission et la validation de consultations, avec workflows Power Automate et formulaires PowerApps dynamiques."
              tags={["SharePoint Online", "PowerApps", "Power Automate"]}
              role="Lead Dev"
              duration="12 mois"
            />
            <ProjectCard
              client="TDF"
              title="GED Oracle Cloud"
              description="Mise en place d'une GED connectée à Oracle Cloud, site SharePoint structuré (métadonnées, sécurité), intégration PowerApps et Power Automate."
              tags={["GED", "SharePoint", "Power Platform", "Oracle"]}
              role="Consultant Senior"
              duration="14 mois"
            />
            <ProjectCard
              client="Crédit Agricole CAGIP"
              title="Gouvernance Power Platform"
              description="Mise en œuvre des politiques DLP, déploiement du CoE Starter Kit et automatisation du nettoyage de l'environnement via Power Automate."
              tags={["Power Platform", "CoE Kit", "DLP", "Governance"]}
              role="Architecte"
              duration="4 mois"
            />
            <ProjectCard
              client="ENGIE"
              title="Viva Connections Dashboard"
              description="Développement d'un Dashboard Viva Connections sur le Home Site, configuration Teams, ACE et scripts PowerShell pour l'intégration Active Directory."
              tags={["Viva", "SPFx", "Teams", "PowerShell"]}
              role="Lead Developer"
              duration="2 mois"
            />
            <ProjectCard
              client="CD 77"
              title="Kit de migration SharePoint"
              description="Développement d'un kit de migration pour les intranets SharePoint on-premise 2016, animation d'ateliers et bonnes pratiques de gouvernance."
              tags={["SharePoint On-Premise", "PnP", "Migration"]}
              role="Expert SharePoint"
              duration="4 mois"
            />
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="relative border-t border-border py-24 lg:py-32">
        <div className="container">
          <SectionHeading
            eyebrow={t("sec.exp.eyebrow")}
            title={t("sec.exp.title")}
            subtitle={t("sec.exp.subtitle")}
          />
          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative border-t border-border bg-muted/40 py-24 lg:py-32"
      >
        <div className="container">
          <SectionHeading
            eyebrow={t("sec.contact.eyebrow")}
            title={t("sec.contact.title")}
            subtitle={t("sec.contact.subtitle")}
          />

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="space-y-3">
                <ContactRow
                  icon={<Mail className="h-4 w-4" />}
                  label={t("contact.email")}
                  value="firasksontini@gmail.com"
                  href="mailto:firasksontini@gmail.com"
                />
                <ContactRow
                  icon={<Phone className="h-4 w-4" />}
                  label={t("contact.phone")}
                  value="+33 (0)7 83 88 74 73"
                  href="tel:+33783887473"
                />
                <ContactRow
                  icon={<Linkedin className="h-4 w-4" />}
                  label={t("contact.linkedin")}
                  value="linkedin.com/in/fksontini"
                  href="https://www.linkedin.com/in/fksontini/"
                />
                <ContactRow
                  icon={<MapPin className="h-4 w-4" />}
                  label={t("contact.location")}
                  value="Issy-les-Moulineaux, France"
                />
              </div>

              <div className="mt-6 rounded-2xl border border-border bg-background p-5">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Check className="h-4 w-4 text-emerald-600" />
                  {t("status.available")}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t("about.availability.value")}
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <Link href="/" className="font-serif text-lg text-foreground">
              Firas Ksontini
            </Link>
            <span className="hidden text-sm text-muted-foreground md:inline">
              · {t("footer.tagline")}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">
              {t("footer.copy", { year: new Date().getFullYear() })}
            </p>
            <LanguageToggle />
          </div>
        </div>
      </footer>
    </div>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-background p-6 text-left md:p-8">
      <div className="font-serif text-4xl text-foreground md:text-5xl">{value}</div>
      <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground md:text-sm">
        {label}
      </div>
    </div>
  )
}

function InfoCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-background p-5">
      <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</dt>
      <dd className="mt-1.5 text-sm font-medium text-foreground">{value}</dd>
    </div>
  )
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-background p-6 transition-colors hover:border-foreground/20">
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <ul className="mt-5 space-y-3">
        {skills.map((s) => (
          <li key={s} className="flex items-center gap-3 text-sm text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {s}
          </li>
        ))}
      </ul>
    </div>
  )
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
}) {
  const content = (
    <div className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-4 transition-colors hover:border-foreground/20">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-foreground">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
        <div className="truncate text-sm font-medium text-foreground">{value}</div>
      </div>
      {href && (
        <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
      )}
    </div>
  )
  if (href) {
    return (
      <Link href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
        {content}
      </Link>
    )
  }
  return content
}
