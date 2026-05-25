"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"
import { useT } from "@/lib/i18n"

const experiencesFr = [
  {
    title: "Expert Power Platform & SharePoint",
    company: "NaTran (ex GRTgaz) — Freelance",
    period: "05/2025 — ACTIF",
    description:
      "Intégré à l'équipe Collaboration de la DSI. Conception et développement d'applications métier sur SharePoint Online (SPFx, React), PowerApps et Power Automate. Animation d'ateliers, recueil des User Stories, sites modernes, support N3 Microsoft, gouvernance M365 (Teams, OneDrive, Viva).",
    status: "ACTIVE",
  },
  {
    title: "Expert SharePoint",
    company: "Conseil Départemental 77 — Neos-SDI",
    period: "12/2024 — 03/2025",
    description:
      "Développement d'un kit de migration pour les intranets SharePoint on-premise 2016. Animation d'ateliers de structuration de contenu, simplification des processus métier et mise en place de bonnes pratiques de gouvernance.",
  },
  {
    title: "Lead Dev SharePoint Online / Power Platform",
    company: "Deloitte — Neos-SDI",
    period: "04/2024 — 03/2025",
    description:
      "Conception d'une application SharePoint Online pour la soumission et validation de consultations d'auditeurs avec Power Automate. Architecture technique, formulaires PowerApps dynamiques et gestion des permissions par étape.",
  },
  {
    title: "Consultant Sénior — GED",
    company: "TDF — Neos-SDI",
    period: "02/2024 — 03/2025",
    description:
      "Mise en place d'une GED connectée à Oracle Cloud. Site SharePoint structuré (métadonnées, sécurité), intégration PowerApps et Power Automate. Ateliers de cadrage, architecture, pilotage du backlog et réalisation.",
  },
  {
    title: "Architecte Power Platform",
    company: "Crédit Agricole - CAGIP — Avanade",
    period: "04/2023 — 07/2023",
    description:
      "Mise en œuvre de la gouvernance Power Platform : politiques DLP, déploiement du CoE Starter Kit, et automatisation du nettoyage de l'environnement via Power Automate.",
  },
  {
    title: "Lead Developer Viva / SPFx",
    company: "ENGIE — Avanade",
    period: "03/2023 — 04/2023",
    description:
      "Développement d'un Dashboard Viva Connections sur le Home Site. Configuration Teams, ACE, scripts PowerShell et intégration Active Directory.",
  },
  {
    title: "Chef de projet Technique SharePoint / O365",
    company: "Crédit Agricole Assurance — onepoint",
    period: "06/2022 — 12/2022",
    description:
      "Pilotage technique d'un projet SharePoint / O365 : suivi, revue de code, développement SPFx et choix d'architecture front et back.",
  },
  {
    title: "Développeur .NET Full Stack",
    company: "BMW — onepoint",
    period: "03/2021 — 12/2021",
    description:
      "TMA BMW : migration SVN vers Git, mise en place Jenkins, développement front Vue.js et back .NET.",
  },
  {
    title: "Consultant Sénior SharePoint",
    company: "BNP Paribas ITG — onepoint",
    period: "10/2020 — 02/2021",
    description:
      "Mise en place d'espaces SharePoint : audit, structuration, gestion des accès et personnalisation HTML/CSS via JSLINK.",
  },
  {
    title: "Consultant Sénior SharePoint",
    company: "EDF — onepoint",
    period: "10/2019 — 06/2020",
    description:
      "TMA EDF : développement SharePoint 2013/2016, scripts PowerShell, workflows, JavaScript et Angular 5.",
  },
  {
    title: "Développeur SharePoint",
    company: "Faurecia — Client final",
    period: "04/2015 — 10/2016",
    description:
      "Migration des intranets WSS 3.0 vers SharePoint 2013. Développement et support SharePoint pour le groupe.",
  },
]

const experiencesEn = [
  {
    title: "Power Platform & SharePoint Expert",
    company: "NaTran (ex GRTgaz) — Freelance",
    period: "05/2025 — ACTIVE",
    description:
      "Embedded in the IT Collaboration team. Designing and building business apps on SharePoint Online (SPFx, React), PowerApps and Power Automate. Workshops, User Stories, modern sites, Microsoft N3 support, M365 governance (Teams, OneDrive, Viva).",
    status: "ACTIVE",
  },
  {
    title: "SharePoint Expert",
    company: "Conseil Départemental 77 — Neos-SDI",
    period: "12/2024 — 03/2025",
    description:
      "Built a migration kit for on-premise SharePoint 2016 intranets. Ran content structuring workshops, simplified business processes and rolled out governance best practices.",
  },
  {
    title: "Lead Dev SharePoint Online / Power Platform",
    company: "Deloitte — Neos-SDI",
    period: "04/2024 — 03/2025",
    description:
      "Designed a SharePoint Online app to submit and validate auditor consultations with Power Automate. Technical architecture, dynamic PowerApps forms and step-based permission management.",
  },
  {
    title: "Senior Consultant — DMS",
    company: "TDF — Neos-SDI",
    period: "02/2024 — 03/2025",
    description:
      "Set up a DMS connected to Oracle Cloud. Structured SharePoint site (metadata, security), PowerApps and Power Automate integration. Scoping workshops, architecture, backlog management and delivery.",
  },
  {
    title: "Power Platform Architect",
    company: "Crédit Agricole - CAGIP — Avanade",
    period: "04/2023 — 07/2023",
    description:
      "Rolled out Power Platform governance: DLP policies, CoE Starter Kit deployment, and environment cleanup automation via Power Automate.",
  },
  {
    title: "Lead Developer Viva / SPFx",
    company: "ENGIE — Avanade",
    period: "03/2023 — 04/2023",
    description:
      "Built a Viva Connections Dashboard on the Home Site. Teams configuration, ACE, PowerShell scripts and Active Directory integration.",
  },
  {
    title: "Technical PM SharePoint / O365",
    company: "Crédit Agricole Assurance — onepoint",
    period: "06/2022 — 12/2022",
    description:
      "Technical leadership on a SharePoint / O365 project: tracking, code review, SPFx development and front/back architecture decisions.",
  },
  {
    title: ".NET Full Stack Developer",
    company: "BMW — onepoint",
    period: "03/2021 — 12/2021",
    description:
      "BMW maintenance: SVN to Git migration, Jenkins setup, Vue.js front-end and .NET back-end development.",
  },
  {
    title: "Senior SharePoint Consultant",
    company: "BNP Paribas ITG — onepoint",
    period: "10/2020 — 02/2021",
    description:
      "Set up SharePoint workspaces: audit, structuring, access management and HTML/CSS customization via JSLINK.",
  },
  {
    title: "Senior SharePoint Consultant",
    company: "EDF — onepoint",
    period: "10/2019 — 06/2020",
    description:
      "EDF maintenance: SharePoint 2013/2016 development, PowerShell scripts, workflows, JavaScript and Angular 5.",
  },
  {
    title: "SharePoint Developer",
    company: "Faurecia — Client",
    period: "04/2015 — 10/2016",
    description:
      "Migrated WSS 3.0 intranets to SharePoint 2013. SharePoint development and support for the group.",
  },
]

export function Timeline() {
  const isMobile = useMobile()
  const { lang } = useT()
  const experiences = lang === "en" ? experiencesEn : experiencesFr

  return (
    <div
      className={`space-y-10 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:border-l-2 before:border-dashed before:border-border before:h-full before:z-0"
          : "before:absolute before:left-3 before:top-0 before:bottom-0 before:border-l-2 before:border-dashed before:border-border"
      }`}
    >
      {experiences.map((experience, index) => {
        const opNum = String(experiences.length - index).padStart(2, "0")
        return (
          <div
            key={index}
            className={`relative z-10 flex items-center ${
              !isMobile ? (index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row") : "pl-10"
            }`}
          >
            <motion.div
              className={`w-full ${!isMobile ? "md:w-1/2 " + (index % 2 === 0 ? "md:pl-10" : "md:pr-10") : ""}`}
              initial={{ opacity: 0, x: !isMobile ? (index % 2 === 0 ? 50 : -50) : 0, y: isMobile ? 20 : 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-card border border-border p-5 transition-colors duration-300 hover:border-accent group">
                {/* corners */}
                <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-accent" />
                <span className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-accent" />
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-accent" />
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-accent" />

                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
                    OP-{opNum}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
                    {experience.status === "ACTIVE" && (
                      <span className="w-1.5 h-1.5 bg-destructive animate-blink rounded-full" />
                    )}
                    {experience.period}
                  </div>
                </div>
                <h3 className="font-stencil text-lg uppercase tracking-wide leading-tight mb-1">
                  {experience.title}
                </h3>
                <div className="text-xs font-mono uppercase tracking-widest text-accent/80 mb-3">
                  ► {experience.company}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{experience.description}</p>
              </div>
            </motion.div>

            {!isMobile ? (
              <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                <motion.div
                  className="w-5 h-5 bg-background border-2 border-accent z-10 flex items-center justify-center rotate-45"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="w-1.5 h-1.5 bg-accent" />
                </motion.div>
              </div>
            ) : (
              <div className="absolute left-3 -translate-x-1/2 flex items-center justify-center">
                <div className="w-3 h-3 bg-background border-2 border-accent rotate-45" />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
