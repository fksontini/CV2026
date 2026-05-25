"use client"

import Link from "next/link"
import { ArrowRight, Linkedin, Mail, Phone, MapPin, Shield, Target, Crosshair, Radio } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { ClientsLogos } from "@/components/clients-logos"
import { LanguageToggle } from "@/components/language-toggle"
import { AudioController } from "@/components/audio-controller"
import { useT } from "@/lib/i18n"

export default function Portfolio() {
  const { t } = useT()

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      {/* Layered tactical background */}
      <div className="pointer-events-none fixed inset-0 tactical-grid opacity-60 z-0" />
      <div className="pointer-events-none fixed inset-0 tactical-grid-fine opacity-40 z-0" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(138,154,91,0.10),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.75),transparent_70%)]" />
      {/* Heavy vignette */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.55)_100%)]" />
      {/* Page-wide scanlines */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-30 mix-blend-multiply"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.35) 0px, rgba(0,0,0,0.35) 1px, transparent 1px, transparent 3px)",
        }}
      />
      {/* CONFIDENTIEL watermark */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden"
      >
        <span className="font-stencil text-[18vw] uppercase tracking-[0.3em] text-accent/[0.04] rotate-[-18deg] whitespace-nowrap select-none">
          CLASSIFIED
        </span>
      </div>
      {/* Top frame brackets */}
      <div className="pointer-events-none fixed top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-accent/40 z-[2]" />
      <div className="pointer-events-none fixed top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-accent/40 z-[2]" />
      <div className="pointer-events-none fixed bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-accent/40 z-[2]" />
      <div className="pointer-events-none fixed bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-accent/40 z-[2]" />

      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Top status bar */}
      <div className="relative z-30 border-b border-border bg-background/80 backdrop-blur">
        <div className="container flex items-center justify-between py-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground gap-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-accent animate-blink rounded-full" />
              {t("status.active")}
            </span>
            <span className="hidden sm:inline">{t("status.dossier")}</span>
            <span className="hidden md:inline">{t("status.clearance")}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">{t("status.coords")}</span>
            <span>UTC+01:00</span>
            <AudioController />
            <LanguageToggle />
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="relative z-20 border-b border-border bg-secondary/40 overflow-hidden">
        <div className="flex animate-ticker whitespace-nowrap py-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-6 px-3">
              <span className="text-accent">►</span>
              <span>{t("ticker.years")}</span>
              <span className="text-accent">●</span>
              <span>{t("ticker.clients")}</span>
              <span className="text-accent">●</span>
              <span>{t("ticker.stack")}</span>
              <span className="text-accent">●</span>
              <span>{t("ticker.available")}</span>
              <span className="text-accent">●</span>
              <span>{t("ticker.crypto")}</span>
              <span className="text-accent">●</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden py-10">
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-7">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="inline-flex items-center gap-2 border border-accent/60 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
                <Shield className="h-3 w-3" />
                {t("hero.badge")}
              </div>
              <div className="inline-flex items-center gap-2 border border-border bg-card px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-destructive animate-blink rounded-full" />
                {t("hero.matricule")}
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground">
                {t("hero.id")}
              </div>
              <h1 className="font-stencil text-6xl md:text-8xl uppercase leading-[0.9] tracking-wider text-shadow-stencil">
                <span className="block text-foreground">FIRAS</span>
                <span className="block text-accent">KSONTINI</span>
              </h1>
              <div className="flex items-center gap-3 pt-1">
                <span className="block w-12 h-px bg-accent" />
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  {t("hero.rank")}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border border border-border">
              <div className="bg-card p-4">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  {t("hero.stat.exp")}
                </div>
                <div className="font-stencil text-2xl text-accent">{t("hero.stat.exp.value")}</div>
              </div>
              <div className="bg-card p-4">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  {t("hero.stat.missions")}
                </div>
                <div className="font-stencil text-2xl text-accent">{t("hero.stat.missions.value")}</div>
              </div>
              <div className="bg-card p-4">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  {t("hero.stat.theaters")}
                </div>
                <div className="font-stencil text-2xl text-accent">{t("hero.stat.theaters.value")}</div>
              </div>
            </div>

            <p className="text-base md:text-lg text-muted-foreground max-w-[640px] leading-relaxed border-l-2 border-accent/60 pl-4">
              <span className="text-accent font-mono text-xs uppercase tracking-widest block mb-2">
                {t("hero.briefing")}
              </span>
              {t("hero.briefing.body")}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="#experience">
                <Button className="h-12 bg-accent hover:bg-accent/90 text-accent-foreground rounded-none font-stencil uppercase tracking-widest px-6 group">
                  <Target className="mr-2 h-4 w-4" />
                  {t("hero.cta.ops")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  variant="outline"
                  className="h-12 border-accent/60 bg-transparent hover:bg-accent/10 hover:border-accent text-foreground rounded-none font-stencil uppercase tracking-widest px-6"
                >
                  <Radio className="mr-2 h-4 w-4" />
                  {t("hero.cta.contact")}
                </Button>
              </Link>
            </div>

            <div className="flex gap-2 pt-2">
              <Link href="https://www.linkedin.com/in/fksontini/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-none border border-border bg-card hover:bg-secondary hover:border-accent text-muted-foreground hover:text-accent h-10 w-10"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:firasksontini@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-none border border-border bg-card hover:bg-secondary hover:border-accent text-muted-foreground hover:text-accent h-10 w-10"
                >
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
              <Link href="tel:+33783887473">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-none border border-border bg-card hover:bg-secondary hover:border-accent text-muted-foreground hover:text-accent h-10 w-10"
                >
                  <Phone className="h-4 w-4" />
                  <span className="sr-only">Phone</span>
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">
          <span>{t("hero.scroll")}</span>
          <div className="w-px h-8 bg-accent/60 animate-pulse" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-28 relative">
        <div className="container relative z-10">
          <SectionHeading title={t("sec.about.title")} subtitle={t("sec.about.sub")} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mt-14">
            <div className="space-y-4">
              <div className="relative bg-card border border-border">
                <span className="absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2 border-accent" />
                <span className="absolute -top-1 -right-1 w-5 h-5 border-t-2 border-r-2 border-accent" />
                <span className="absolute -bottom-1 -left-1 w-5 h-5 border-b-2 border-l-2 border-accent" />
                <span className="absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2 border-accent" />

                <div className="bg-secondary/60 border-b border-border px-4 py-2 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Shield className="h-3 w-3 text-accent" /> {t("id.title")}
                  </span>
                  <span>FK-2026</span>
                </div>

                <div className="grid grid-cols-3 gap-4 p-5">
                  <div className="col-span-1 relative aspect-square bg-secondary border border-border tactical-grid-fine flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 noise scanlines" />
                    <div className="font-stencil text-5xl text-accent z-10 text-shadow-stencil">FK</div>
                    <span className="absolute top-1 left-1 w-2 h-2 border-t border-l border-accent" />
                    <span className="absolute top-1 right-1 w-2 h-2 border-t border-r border-accent" />
                    <span className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-accent" />
                    <span className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-accent" />
                  </div>

                  <div className="col-span-2 space-y-2 text-sm">
                    <Field label={t("id.field.name")} value="KSONTINI" />
                    <Field label={t("id.field.first")} value="FIRAS" />
                    <Field label={t("id.field.grade")} value={t("id.value.grade")} />
                    <Field label={t("id.field.unit")} value={t("id.value.unit")} />
                    <Field label={t("id.field.base")} value={t("id.value.base")} />
                  </div>
                </div>

                <div className="border-t border-border px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 animate-blink rounded-full" />
                    <span className="font-mono text-[11px] uppercase tracking-widest text-foreground">
                      {t("id.in.service")}
                    </span>
                  </div>
                  <Crosshair className="h-4 w-4 text-accent" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <StatBox label={t("stat.exp")} value="10+" sub={t("stat.exp.sub")} />
                <StatBox label={t("stat.accounts")} value="11" sub={t("stat.accounts.sub")} />
                <StatBox label={t("stat.stack")} value="M365" sub={t("stat.stack.sub")} />
                <StatBox label={t("stat.lang")} value="FR/EN" sub={t("stat.lang.sub")} />
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                  <p>
                    <span className="text-accent font-mono text-xs uppercase tracking-widest block mb-1">
                      {t("about.mission")}
                    </span>
                    {t("about.mission.body")}
                  </p>
                  <p>
                    <span className="text-accent font-mono text-xs uppercase tracking-widest block mb-1">
                      {t("about.scope")}
                    </span>
                    {t("about.scope.body")}
                  </p>
                  <p>
                    <span className="text-accent font-mono text-xs uppercase tracking-widest block mb-1">
                      {t("about.positions")}
                    </span>
                    {t("about.positions.body")}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-dashed border-border/60 flex items-center justify-between gap-3 flex-wrap">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {t("about.cv")}
                  </div>
                  <Link href="https://cv-three-umber.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <Button className="h-10 bg-accent hover:bg-accent/90 text-accent-foreground rounded-none font-stencil uppercase tracking-widest text-xs">
                      {t("about.cv.btn")}
                    </Button>
                  </Link>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Allied Forces / Clients */}
      <section id="allies" className="py-28 relative">
        <div className="container relative z-10">
          <SectionHeading title={t("sec.allies.title")} subtitle={t("sec.allies.sub")} />
          <div className="mt-14">
            <ClientsLogos />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-28 relative">
        <div className="container relative z-10">
          <SectionHeading title={t("sec.skills.title")} subtitle={t("sec.skills.sub")} />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-14">
            <SkillBadge name="SharePoint Online" level={95} />
            <SkillBadge name="SharePoint On-Premise" level={90} />
            <SkillBadge name="Power Platform" level={92} />
            <SkillBadge name="PowerApps" level={90} />
            <SkillBadge name="Power Automate" level={92} />
            <SkillBadge name="Power BI" level={75} />
            <SkillBadge name="SPFx" level={88} />
            <SkillBadge name="React" level={80} />
            <SkillBadge name="TypeScript" level={78} />
            <SkillBadge name="PnP / PowerShell" level={88} />
            <SkillBadge name=".NET / .NET Core" level={80} />
            <SkillBadge name="Microsoft Teams & Viva" level={85} />
            <SkillBadge name="Azure" level={70} />
            <SkillBadge name="Gouvernance M365" level={90} />
            <SkillBadge name="Agile / Scrum" level={85} />
            <SkillBadge name="Avant-vente" level={85} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-28 relative">
        <div className="container relative z-10">
          <SectionHeading title={t("sec.projects.title")} subtitle={t("sec.projects.sub")} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            <ProjectCard
              codename="OP-7421"
              title="NaTran — Digital Workplace M365"
              description="Conception et développement d'applications métier sur SharePoint Online (SPFx/React), PowerApps et Power Automate. Animation d'ateliers, support N3 et gouvernance M365."
              tags={["SharePoint Online", "SPFx", "React", "Power Platform"]}
              threatLevel="HIGH"
              duration="2025+"
            />
            <ProjectCard
              codename="OP-5198"
              title="Deloitte — App Consultations Auditeurs"
              description="Application SharePoint Online pour la soumission et validation de consultations, avec workflows Power Automate et formulaires PowerApps dynamiques."
              tags={["SharePoint Online", "PowerApps", "Power Automate"]}
              threatLevel="HIGH"
              duration="12 mois"
            />
            <ProjectCard
              codename="OP-3340"
              title="TDF — GED Oracle Cloud"
              description="Mise en place d'une GED connectée à Oracle Cloud, site SharePoint structuré (métadonnées, sécurité), intégration PowerApps et Power Automate."
              tags={["GED", "SharePoint", "Power Platform", "Oracle"]}
              threatLevel="MEDIUM"
              duration="14 mois"
            />
            <ProjectCard
              codename="OP-2087"
              title="Crédit Agricole CAGIP — Gouvernance Power Platform"
              description="Mise en œuvre des politiques DLP, déploiement du CoE Starter Kit et automatisation du nettoyage de l'environnement via Power Automate."
              tags={["Power Platform", "CoE Kit", "DLP", "Governance"]}
              threatLevel="CRITICAL"
              duration="4 mois"
            />
            <ProjectCard
              codename="OP-1903"
              title="ENGIE — Viva Connections Dashboard"
              description="Développement d'un Dashboard Viva Connections sur le Home Site, configuration Teams, ACE et scripts PowerShell pour l'intégration AD."
              tags={["Viva", "SPFx", "Teams", "PowerShell"]}
              threatLevel="MEDIUM"
              duration="2 mois"
            />
            <ProjectCard
              codename="OP-1645"
              title="CD 77 — Kit de migration SharePoint"
              description="Développement d'un kit de migration pour les intranets SharePoint on-premise 2016, animation d'ateliers et bonnes pratiques de gouvernance."
              tags={["SharePoint On-Premise", "PnP", "Migration"]}
              threatLevel="HIGH"
              duration="4 mois"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-28 relative">
        <div className="container relative z-10">
          <SectionHeading title={t("sec.exp.title")} subtitle={t("sec.exp.sub")} />

          <div className="mt-14">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 relative">
        <div className="container relative z-10">
          <SectionHeading title={t("sec.contact.title")} subtitle={t("sec.contact.sub")} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-14">
            <GlassmorphicCard>
              <h3 className="font-stencil text-2xl uppercase tracking-wide mb-1">{t("contact.coords")}</h3>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
                {t("contact.channels")}
              </p>

              <div className="space-y-3">
                <ContactRow icon={<Mail className="h-4 w-4 text-accent" />} label={t("contact.email")} value="firasksontini@gmail.com" />
                <ContactRow icon={<Phone className="h-4 w-4 text-accent" />} label={t("contact.phone")} value="+33 (0)7 83 88 74 73" />
                <ContactRow icon={<Linkedin className="h-4 w-4 text-accent" />} label={t("contact.linkedin")} value="linkedin.com/in/fksontini" />
                <ContactRow icon={<MapPin className="h-4 w-4 text-accent" />} label={t("contact.base")} value="Issy-les-Moulineaux, France" />
              </div>

              <div className="mt-6 pt-5 border-t border-dashed border-border/60">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  {t("contact.status")}
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 animate-blink rounded-full" />
                  <span className="text-sm">{t("contact.status.body")}</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-border bg-secondary/30 py-8 relative z-10">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="font-stencil text-lg uppercase tracking-widest">
              <span className="text-accent">FIRAS</span>
              <span className="text-muted-foreground mx-1">//</span>
              <span className="text-foreground">KSONTINI</span>
            </Link>
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hidden md:inline">
              {t("footer.rights")}
            </span>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {t("footer.copy", { year: new Date().getFullYear() })}
          </p>
          <div className="flex gap-2">
            {[
              { href: "https://www.linkedin.com/in/fksontini/", icon: <Linkedin className="h-4 w-4" />, label: "LinkedIn" },
              { href: "mailto:firasksontini@gmail.com", icon: <Mail className="h-4 w-4" />, label: "Email" },
              { href: "tel:+33783887473", icon: <Phone className="h-4 w-4" />, label: "Phone" },
            ].map((s) => (
              <Link key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-none border border-border bg-card hover:bg-secondary hover:border-accent text-muted-foreground hover:text-accent h-9 w-9"
                >
                  {s.icon}
                  <span className="sr-only">{s.label}</span>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-2 border-b border-dashed border-border/60 pb-1">
      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground w-16 shrink-0">
        {label}
      </span>
      <span className="font-stencil text-sm uppercase tracking-wide text-foreground truncate">{value}</span>
    </div>
  )
}

function StatBox({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="bg-card border border-border p-4 relative">
      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent" />
      <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-accent" />
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{label}</div>
      <div className="font-stencil text-xl text-accent">{value}</div>
      <div className="font-mono text-[10px] text-muted-foreground mt-0.5">{sub}</div>
    </div>
  )
}

function ContactRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-center gap-3 border border-border bg-secondary/30 p-3 hover:border-accent transition-colors">
      <div className="w-10 h-10 bg-card border border-border flex items-center justify-center shrink-0">{icon}</div>
      <div className="min-w-0 flex-1">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="font-medium text-sm break-all">{value}</div>
      </div>
    </div>
  )
}
