"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

const experiences = [
  {
    title: "Expert Power Platform & SharePoint",
    company: "NaTran (ex GRTgaz) — Freelance",
    period: "05/2025 — Aujourd'hui",
    description:
      "Intégré à l'équipe Collaboration de la DSI. Conception et développement d'applications métier sur SharePoint Online (SPFx, React), PowerApps et Power Automate. Animation d'ateliers, recueil des User Stories, sites modernes, support N3 Microsoft, gouvernance M365 (Teams, OneDrive, Viva).",
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

export function Timeline() {
  const isMobile = useMobile()

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-slate-800 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 p-6 transition-all duration-300 hover:border-sky-500/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/10 to-blue-700/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="text-slate-400 mb-4">
                  {experience.company} | {experience.period}
                </div>
                <p className="text-slate-300">{experience.description}</p>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-sky-500 to-blue-700 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
