import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"

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

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#0a1628] to-[#050b14] text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sky-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] rounded-sm bg-white/5 backdrop-blur-sm border-l-2 border-r-2 border-amber-400/70 mb-4 mt-4">
                <span className="relative z-10 text-slate-200">Consultant Sénior — M365 / SharePoint / Power Platform</span>
              </div>
            </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Bonjour, je suis</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-blue-500">
                Firas KSONTINI
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-[600px] text-pretty">
              Plus de 10 ans d&apos;expérience en gestion de projet technique, avant-vente et digital workplace
              autour de l&apos;écosystème Microsoft 365, SharePoint et Power Platform.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="#experience">
                <Button className="relative overflow-hidden group bg-gradient-to-r from-sky-500 to-blue-700 border-0">
                  <span className="relative z-10 flex items-center">
                    Voir mes missions{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  variant="outline"
                  className="border-slate-800 text-sky-400 hover:text-sky-300 hover:border-slate-500"
                >
                  Me contacter
                </Button>
              </Link>
            </div>
            <div className="flex gap-4 pt-4">
              <Link href="https://www.linkedin.com/in/fksontini/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-slate-900/50 hover:bg-slate-900 text-slate-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:firasksontini@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-slate-900/50 hover:bg-slate-900 text-slate-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
              <Link href="tel:+33783887473">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-slate-900/50 hover:bg-slate-900 text-slate-400 hover:text-white"
                >
                  <Phone className="h-5 w-5" />
                  <span className="sr-only">Téléphone</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-sky-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="À propos" subtitle="Mon parcours et mon approche" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-sky-500/15 to-blue-700/15 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-slate-900 bg-slate-950 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-blue-500">
                    FK
                  </div>
                  <div className="mt-4 text-slate-400 font-mono text-sm">Firas KSONTINI</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Disponible pour de nouvelles missions</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-slate-300">
                  Expert Microsoft 365, SharePoint et Power Platform, j&apos;accompagne depuis plus de dix ans des
                  grands comptes (Crédit Agricole, BNP Paribas, EDF, ENGIE, BMW, Deloitte, NaTran…) dans la
                  conception et la mise en œuvre de leur Digital Workplace.
                </p>
                <p className="text-lg text-slate-300 mt-4">
                  Mon approche couvre l&apos;ensemble du cycle projet : avant-vente et chiffrage, ateliers de
                  cadrage, architecture technique, développement (SPFx / React, PowerApps, Power Automate, .NET),
                  mise en place de la gouvernance et accompagnement au changement.
                </p>
                <p className="text-lg text-slate-300 mt-4">
                  Je travaille aussi bien comme Lead Tech, Architecte ou Chef de projet, en interaction directe
                  avec les métiers et la DSI pour livrer des solutions robustes, gouvernées et adoptées.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-slate-500">Nom</div>
                    <div className="font-medium">Firas KSONTINI</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-slate-500">Email</div>
                    <div className="font-medium break-all">firasksontini@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-slate-500">Localisation</div>
                    <div className="font-medium">Issy-les-Moulineaux, France</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-slate-500">Disponibilité</div>
                    <div className="font-medium text-green-500">Ouvert aux opportunités</div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="https://cv-three-umber.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-slate-900 hover:bg-slate-800 text-white">Voir le CV complet</Button>
                  </Link>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-slate-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-sky-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Compétences" subtitle="Les technologies que je maîtrise" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
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
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Missions phares" subtitle="Quelques réalisations clients" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="NaTran — Digital Workplace M365"
              description="Conception et développement d'applications métier sur SharePoint Online (SPFx/React), PowerApps et Power Automate. Animation d'ateliers, support N3 et gouvernance M365."
              tags={["SharePoint Online", "SPFx", "React", "Power Platform"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://cv-three-umber.vercel.app/"
              repoUrl="https://www.linkedin.com/in/fksontini/"
            />
            <ProjectCard
              title="Deloitte — App Consultations Auditeurs"
              description="Application SharePoint Online pour la soumission et validation de consultations, avec workflows Power Automate et formulaires PowerApps dynamiques."
              tags={["SharePoint Online", "PowerApps", "Power Automate"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://cv-three-umber.vercel.app/"
              repoUrl="https://www.linkedin.com/in/fksontini/"
            />
            <ProjectCard
              title="TDF — GED Oracle Cloud"
              description="Mise en place d'une GED connectée à Oracle Cloud, site SharePoint structuré (métadonnées, sécurité), intégration PowerApps et Power Automate."
              tags={["GED", "SharePoint", "Power Platform", "Oracle"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://cv-three-umber.vercel.app/"
              repoUrl="https://www.linkedin.com/in/fksontini/"
            />
            <ProjectCard
              title="Crédit Agricole CAGIP — Gouvernance Power Platform"
              description="Mise en œuvre des politiques DLP, déploiement du CoE Starter Kit et automatisation du nettoyage de l'environnement via Power Automate."
              tags={["Power Platform", "CoE Kit", "DLP", "Governance"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://cv-three-umber.vercel.app/"
              repoUrl="https://www.linkedin.com/in/fksontini/"
            />
            <ProjectCard
              title="ENGIE — Viva Connections Dashboard"
              description="Développement d'un Dashboard Viva Connections sur le Home Site, configuration Teams, ACE et scripts PowerShell pour l'intégration AD."
              tags={["Viva", "SPFx", "Teams", "PowerShell"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://cv-three-umber.vercel.app/"
              repoUrl="https://www.linkedin.com/in/fksontini/"
            />
            <ProjectCard
              title="CD 77 — Kit de migration SharePoint"
              description="Développement d'un kit de migration pour les intranets SharePoint on-premise 2016, animation d'ateliers et bonnes pratiques de gouvernance."
              tags={["SharePoint On-Premise", "PnP", "Migration"]}
              image="/placeholder.svg?height=400&width=600"
              demoUrl="https://cv-three-umber.vercel.app/"
              repoUrl="https://www.linkedin.com/in/fksontini/"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-sky-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-slate-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Expérience" subtitle="Mon parcours professionnel" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-sky-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Me contacter" subtitle="Travaillons ensemble" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Coordonnées</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-sky-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-slate-500">Email</div>
                    <div className="font-medium break-all">firasksontini@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Téléphone</div>
                    <div className="font-medium">+33 (0) 7 83 88 74 73</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                    <Linkedin className="h-5 w-5 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">LinkedIn</div>
                    <div className="font-medium">linkedin.com/in/fksontini</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Localisation</div>
                    <div className="font-medium">Issy-les-Moulineaux, France</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-900">
                <h4 className="text-lg font-medium mb-4">Statut actuel</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Disponible pour missions freelance et opportunités long terme</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-blue-500">Firas</span>
              <span className="text-white">KSONTINI</span>
            </Link>
            <p className="text-sm text-slate-500 mt-2">
              © {new Date().getFullYear()} Firas KSONTINI. Tous droits réservés.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://www.linkedin.com/in/fksontini/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-slate-900/50 hover:bg-slate-900 text-slate-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:firasksontini@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-slate-900/50 hover:bg-slate-900 text-slate-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
            <Link href="tel:+33783887473">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-slate-900/50 hover:bg-slate-900 text-slate-400 hover:text-white"
              >
                <Phone className="h-5 w-5" />
                <span className="sr-only">Téléphone</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
