"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"
import { useT } from "@/lib/i18n"

const experiencesFr = [
  {
    title: "Expert Power Platform & SharePoint",
    company: "NaTran (ex GRTgaz) — Freelance",
    period: "05/2025 — En cours",
    description:
      "Intégré à l'équipe Collaboration de la DSI. Conception et développement d'applications métier sur SharePoint Online (SPFx, React), PowerApps et Power Automate. Animation d'ateliers, recueil des User Stories, sites modernes, support N3 Microsoft, gouvernance M365 (Teams, OneDrive, Viva).",
    active: true,
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
    period: "05/2025 — Current",
    description:
      "Embedded in the IT Collaboration team. Designing and building business apps on SharePoint Online (SPFx, React), PowerApps and Power Automate. Workshops, User Stories, modern sites, Microsoft N3 support, M365 governance (Teams, OneDrive, Viva).",
    active: true,
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
  const { lang, t } = useT()
  const experiences = lang === "en" ? experiencesEn : experiencesFr

  return (
    <ol className="relative mx-auto max-w-3xl">
      {/* vertical rail */}
      <div
        aria-hidden
        className="absolute bottom-0 left-3 top-2 w-px bg-border md:left-[7.5rem]"
      />

      {experiences.map((exp, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.2) }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative pb-10 pl-10 md:pl-40"
        >
          {/* period (left rail on desktop) */}
          {!isMobile && (
            <div className="absolute left-0 top-1 hidden w-[6.5rem] text-right text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground md:block">
              {exp.period}
            </div>
          )}

          {/* dot */}
          <span
            className={`absolute left-[7px] top-2 flex h-3 w-3 items-center justify-center md:left-[7.5rem] md:-translate-x-1/2 ${
              exp.active ? "" : ""
            }`}
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
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
          </div>
        </motion.li>
      ))}
    </ol>
  )
}
