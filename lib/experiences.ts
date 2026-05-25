export type Experience = {
  title: string
  company: string
  period: string
  description: string
  tags?: string[]
  active?: boolean
}

// Source de vérité : CV Firas Ksontini — toutes les missions, sans suppression.
export const experiencesFr: Experience[] = [
  {
    title: "Expert Power Platform & SharePoint",
    company: "NaTran (ex GRTgaz) — Freelance",
    period: "05/2025 — En cours",
    description:
      "Intégré à l'équipe Collaboration de la DSI NaTran. Conception et développement d'applications métier sur SharePoint Online (SPFx, React), PowerApps et Power Automate. Animation d'ateliers métiers, recueil et validation des User Stories. Création de sites modernes SharePoint, rédaction de procédures techniques et gestion du support de niveau 3 en lien avec Microsoft. Réalisation de chiffrages (macro/micro), participation aux rituels Agile. Contribution à la gouvernance des outils collaboratifs Microsoft 365 (Teams, OneDrive, Viva, etc.).",
    tags: ["SharePoint Online", "Power Platform", "SPFx", "React"],
    active: true,
  },
  {
    title: "Expert SharePoint",
    company: "Conseil Départemental 77 (Seine-et-Marne) — Neos-SDI",
    period: "12/2024 — 03/2025",
    description:
      "Développement d'un kit de migration pour les intranets SharePoint on-premise 2016. Animation d'ateliers pratiques sur la structuration de contenu, l'organisation des espaces de travail et l'utilisation des fonctionnalités avancées. Simplification des processus métier avec SharePoint, adoption fluide par les équipes. Mise en place de bonnes pratiques pour une gouvernance efficace et une meilleure collaboration.",
    tags: ["SharePoint On-Premise", "PnP", "VBA", "Migration"],
  },
  {
    title: "Formateur SharePoint Online / Power Platform",
    company: "CAT Group — Neos-SDI",
    period: "11/2024 — 01/2025",
    description:
      "Formation des équipes de communication sur les fondamentaux de SharePoint Online pour une utilisation optimale et collaborative. Accompagnement dans la création, la gestion et la personnalisation de l'intranet, hubs, bibliothèques de documents et listes SharePoint. Animation d'ateliers pratiques pour développer les compétences en structuration de contenu et utilisation des fonctionnalités avancées. Mise en place de bonnes pratiques pour garantir une gouvernance efficace.",
    tags: ["Formation", "SharePoint Online", "Power Platform"],
  },
  {
    title: "Lead Dev SharePoint Online / Power Platform",
    company: "Deloitte — Neos-SDI",
    period: "04/2024 — 03/2025",
    description:
      "Conception et développement d'une application sur SharePoint Online permettant aux auditeurs de soumettre des consultations, avec un processus de validation automatisé via Power Automate. Application de permissions spécifiques selon les étapes. Utilisation de PowerApps pour créer des formulaires dynamiques. Architecture technique, développement UI PowerApps, configuration des workflows Power Automate.",
    tags: ["SharePoint Online", "PowerApps", "Power Automate"],
  },
  {
    title: "Consultant Sénior — GED",
    company: "TDF — Neos-SDI",
    period: "02/2024 — 03/2025",
    description:
      "Mise en place d'une GED connectée à Oracle Cloud. Site SharePoint structuré avec métadonnées et sécurité, intégration de PowerApps et Power Automate. Ateliers de cadrage, conception de l'architecture technique, pilotage du backlog, réalisation de la solution.",
    tags: ["GED", "SharePoint", "Power Platform", "Oracle"],
  },
  {
    title: "Expert SharePoint",
    company: "Centre Hospitalier Georges Daumézon — Neos-SDI",
    period: "05/2024 — 05/2024",
    description:
      "Audit et préconisations sur une ferme SharePoint 2013. Analyse des mises à jour, résolution de bugs et optimisation des applications métiers.",
    tags: ["SharePoint 2013", "Audit"],
  },
  {
    title: "Expert Technique SharePoint Online",
    company: "Conseil Départemental 91 (Essonne) — Neos-SDI",
    period: "11/2023 — 01/2024",
    description:
      "Modernisation et migration des espaces SharePoint vers SharePoint Online. Architecture technique et mise en place des Hubs.",
    tags: ["SharePoint Online", "Migration", "Hubs"],
  },
  {
    title: "Expert Technique Power Platform",
    company: "Métropole de Nice — Neos-SDI",
    period: "11/2023 — 12/2023",
    description:
      "Déploiement de plus de 19 workflows Power Automate. Architecture technique, List-Formatting et automatisation.",
    tags: ["Power Platform", "Power Automate", "List Formatting"],
  },
  {
    title: "Lead Technique SharePoint Online",
    company: "Colas — Neos-SDI",
    period: "11/2023 — 11/2023",
    description:
      "Mise en place d'une base de connaissance SharePoint. Animation de workshops pour l'accompagnement au changement.",
    tags: ["SharePoint Online", "Knowledge Base"],
  },
  {
    title: "Expert Technique SharePoint Online",
    company: "Harmonie Mutuelle — Neos-SDI",
    period: "10/2023 — 11/2023",
    description:
      "POC migration d'un Intranet classique vers SharePoint moderne.",
    tags: ["SharePoint Online", "POC", "Migration"],
  },
  {
    title: "Expert Technique SharePoint Online / Powell",
    company: "Artelia — Neos-SDI",
    period: "08/2023 — 10/2023",
    description:
      "Maintenance SharePoint, développement SPFx/React, scripts PowerShell, automatisation avec Jenkins.",
    tags: ["SharePoint Online", "SPFx", "React", "Jenkins"],
  },
  {
    title: "Expert Technique – Chef de projet Technique SharePoint Online",
    company: "Mayoly — Neos-SDI",
    period: "08/2023 — 09/2023",
    description:
      "Mise en place d'une application de base de connaissance (FAQ) sur SharePoint Online. Architecture technique, coordination client, développement SPFx/React, workshop Virtual Agent, chiffrage et backlog.",
    tags: ["SPFx", "React", "SharePoint Online", "Virtual Agent"],
  },
  {
    title: "Architecte Power Platform",
    company: "Crédit Agricole - CAGIP — Avanade",
    period: "04/2023 — 07/2023",
    description:
      "Mise en œuvre de la gouvernance Power Platform avec DLP, CoE Starter Kit et automatisation du nettoyage via Power Automate.",
    tags: ["Power Platform", "Governance", "CoE Kit", "DLP"],
  },
  {
    title: "Lead Developer Viva / SPFx",
    company: "ENGIE — Avanade",
    period: "03/2023 — 04/2023",
    description:
      "Développement d'un Dashboard Viva Connections dans le Home Site. Configuration Teams, ACE, scripts PowerShell, intégration Active Directory.",
    tags: ["Viva", "SPFx", "Teams", "PowerShell"],
  },
  {
    title: "Lead Developer Power BI / SMAT",
    company: "Avanade",
    period: "03/2023 — 04/2023",
    description:
      "Analyse et automatisation SMAT. Création de rapports Power BI sur l'effort de migration (site owner).",
    tags: ["Power BI", "SMAT"],
  },
  {
    title: "Lead Developer Power Automate / SharePoint",
    company: "Elior — Avanade",
    period: "01/2023 — 03/2023",
    description:
      "Solution de gestion et suivi de contrats. Utilisation de Power Automate, Documents Sets, scripts PowerShell.",
    tags: ["Power Automate", "SharePoint Online", "PowerShell"],
  },
  {
    title: "Chef de projet Technique SharePoint / O365",
    company: "Crédit Agricole Assurance — onepoint",
    period: "06/2022 — 12/2022",
    description:
      "Gestion de projet technique SharePoint/O365. Suivi, revue de code, développement SPFx, choix techniques front et back.",
    tags: ["SPFx", "O365", "Gestion de projet"],
  },
  {
    title: "Développeur .NET",
    company: "Maison Goyard — onepoint",
    period: "01/2022 — 06/2022",
    description:
      "Développement MVC / VB.NET / .NET Core. Connexion Salesforce via Azure Bus et API CASE.",
    tags: [".NET", "Salesforce", "Azure"],
  },
  {
    title: "Développeur .NET Full Stack",
    company: "BMW — onepoint",
    period: "03/2021 — 12/2021",
    description:
      "TMA BMW : migration SVN vers Git, mise en place Jenkins, développement front Vue.js et back .NET.",
    tags: [".NET", "Vue.js", "Jenkins"],
  },
  {
    title: "Consultant Sénior SharePoint",
    company: "BNP Paribas ITG — onepoint",
    period: "10/2020 — 02/2021",
    description:
      "Mise en place d'espaces SharePoint : audit, structure, gestion des accès, customisation HTML/CSS avec JSLINK.",
    tags: ["SharePoint", "JSLINK"],
  },
  {
    title: "Consultant M365",
    company: "Banque Nationale du Canada — onepoint",
    period: "09/2020 — 10/2020",
    description:
      "POC Teams : application .NET Core publiée sur Azure, export Teams.",
    tags: ["M365", ".NET Core", "Azure"],
  },
  {
    title: "Consultant Power Platform",
    company: "SNCF — onepoint",
    period: "07/2020 — 10/2020",
    description:
      "POC PowerApps : écrans PowerApps, structure SharePoint, interfaces, déploiement.",
    tags: ["Power Platform", "PowerApps"],
  },
  {
    title: "Consultant Sénior SharePoint",
    company: "EDF — onepoint",
    period: "10/2019 — 06/2020",
    description:
      "TMA EDF : développement SharePoint 2013/2016, PowerShell, workflows, JavaScript et Angular 5.",
    tags: ["SharePoint", "Angular", "PowerShell"],
  },
  {
    title: "Expert SharePoint",
    company: "Université de Limoges — onepoint",
    period: "05/2019 — 11/2019",
    description:
      "Formation DSI à SharePoint 2016, analyse de ferme, sécurité, architecture logique.",
    tags: ["SharePoint 2016", "Formation"],
  },
  {
    title: "Expert SharePoint / Nintex",
    company: "BMW Finance France — onepoint",
    period: "05/2019 — 11/2019",
    description:
      "Formation Nintex, analyse de la ferme SharePoint, export des workflows.",
    tags: ["Nintex", "SharePoint"],
  },
  {
    title: "Expert SharePoint",
    company: "Enedis — onepoint",
    period: "05/2019 — 09/2019",
    description:
      "Migration d'un espace collaboratif SharePoint, structuration et accompagnement utilisateurs.",
    tags: ["SharePoint", "Migration"],
  },
  {
    title: "Consultant SharePoint Confirmé",
    company: "Business & Décision Tunisie",
    period: "06/2018 — 09/2018",
    description:
      "Développement d'une application SharePoint ITIL avec Angular, web services ISAPI, REST.",
    tags: ["SharePoint", "ITIL", "Angular"],
  },
  {
    title: "Consultant SharePoint Confirmé",
    company: "CICR — Business & Decision",
    period: "11/2016 — 09/2018",
    description:
      "3 missions SharePoint et MVC : IMP, SMIP, SG. Maintenance, sécurité, gestion AD, MVC.",
    tags: ["SharePoint", "MVC", "PowerShell", "REST API"],
  },
  {
    title: "Développeur SharePoint",
    company: "Faurecia — Client final",
    period: "04/2015 — 10/2016",
    description:
      "Migration des intranets WSS 3.0 vers SharePoint 2013. Développement et support SharePoint pour le groupe.",
    tags: ["SharePoint", "Migration"],
  },
  {
    title: "Administrateur Système",
    company: "Faurecia — Client final",
    period: "08/2014 — 03/2015",
    description:
      "Administration niveau 2 : SAP, EDI, serveurs Windows/Unix, surveillance Orion.",
    tags: ["Administration Système", "SAP", "Orion"],
  },
]

export const experiencesEn: Experience[] = [
  {
    title: "Power Platform & SharePoint Expert",
    company: "NaTran (ex GRTgaz) — Freelance",
    period: "05/2025 — Current",
    description:
      "Embedded in NaTran's IT Collaboration team. Designing and building business apps on SharePoint Online (SPFx, React), PowerApps and Power Automate. Workshops, User Stories gathering and validation, modern SharePoint sites, technical procedures, and N3 support with Microsoft. Macro/micro estimations, Agile rituals. Governance of Microsoft 365 collaboration tools (Teams, OneDrive, Viva).",
    tags: ["SharePoint Online", "Power Platform", "SPFx", "React"],
    active: true,
  },
  {
    title: "SharePoint Expert",
    company: "Conseil Départemental 77 — Neos-SDI",
    period: "12/2024 — 03/2025",
    description:
      "Built a migration kit for on-premise SharePoint 2016 intranets. Hands-on workshops on content structuring, workspaces and advanced features. Simplified business processes and rolled out governance best practices.",
    tags: ["SharePoint On-Premise", "PnP", "VBA", "Migration"],
  },
  {
    title: "SharePoint Online / Power Platform Trainer",
    company: "CAT Group — Neos-SDI",
    period: "11/2024 — 01/2025",
    description:
      "Trained communication teams on SharePoint Online fundamentals for collaborative use. Supported intranet, hubs, document libraries and lists creation and customization. Hands-on workshops on content structuring and advanced features. Governance best practices.",
    tags: ["Training", "SharePoint Online", "Power Platform"],
  },
  {
    title: "Lead Dev SharePoint Online / Power Platform",
    company: "Deloitte — Neos-SDI",
    period: "04/2024 — 03/2025",
    description:
      "Designed and built a SharePoint Online app for auditors to submit consultations with an automated validation process via Power Automate. Step-based permissions. Dynamic PowerApps forms. Technical architecture, PowerApps UI, Power Automate workflows.",
    tags: ["SharePoint Online", "PowerApps", "Power Automate"],
  },
  {
    title: "Senior Consultant — DMS",
    company: "TDF — Neos-SDI",
    period: "02/2024 — 03/2025",
    description:
      "Set up a DMS connected to Oracle Cloud. Structured SharePoint site (metadata, security), PowerApps and Power Automate integration. Scoping workshops, technical architecture, backlog management and delivery.",
    tags: ["DMS", "SharePoint", "Power Platform", "Oracle"],
  },
  {
    title: "SharePoint Expert",
    company: "Centre Hospitalier Georges Daumézon — Neos-SDI",
    period: "05/2024 — 05/2024",
    description:
      "Audit and recommendations on a SharePoint 2013 farm. Update analysis, bug fixing and business app optimization.",
    tags: ["SharePoint 2013", "Audit"],
  },
  {
    title: "SharePoint Online Technical Expert",
    company: "Conseil Départemental 91 — Neos-SDI",
    period: "11/2023 — 01/2024",
    description:
      "Modernization and migration of SharePoint workspaces to SharePoint Online. Technical architecture and Hubs setup.",
    tags: ["SharePoint Online", "Migration", "Hubs"],
  },
  {
    title: "Power Platform Technical Expert",
    company: "Métropole de Nice — Neos-SDI",
    period: "11/2023 — 12/2023",
    description:
      "Deployed 19+ Power Automate workflows. Technical architecture, List Formatting and automation.",
    tags: ["Power Platform", "Power Automate", "List Formatting"],
  },
  {
    title: "SharePoint Online Tech Lead",
    company: "Colas — Neos-SDI",
    period: "11/2023 — 11/2023",
    description:
      "Set up a SharePoint knowledge base. Change-management workshops.",
    tags: ["SharePoint Online", "Knowledge Base"],
  },
  {
    title: "SharePoint Online Technical Expert",
    company: "Harmonie Mutuelle — Neos-SDI",
    period: "10/2023 — 11/2023",
    description:
      "PoC migration of a classic intranet to modern SharePoint.",
    tags: ["SharePoint Online", "PoC", "Migration"],
  },
  {
    title: "SharePoint Online / Powell Technical Expert",
    company: "Artelia — Neos-SDI",
    period: "08/2023 — 10/2023",
    description:
      "SharePoint maintenance, SPFx/React development, PowerShell scripts, Jenkins automation.",
    tags: ["SharePoint Online", "SPFx", "React", "Jenkins"],
  },
  {
    title: "Technical Expert / Tech PM SharePoint Online",
    company: "Mayoly — Neos-SDI",
    period: "08/2023 — 09/2023",
    description:
      "Built a knowledge base / FAQ app on SharePoint Online. Technical architecture, client coordination, SPFx/React development, Virtual Agent workshop, estimations and backlog.",
    tags: ["SPFx", "React", "SharePoint Online", "Virtual Agent"],
  },
  {
    title: "Power Platform Architect",
    company: "Crédit Agricole - CAGIP — Avanade",
    period: "04/2023 — 07/2023",
    description:
      "Power Platform governance: DLP, CoE Starter Kit, environment cleanup automation via Power Automate.",
    tags: ["Power Platform", "Governance", "CoE Kit", "DLP"],
  },
  {
    title: "Lead Developer Viva / SPFx",
    company: "ENGIE — Avanade",
    period: "03/2023 — 04/2023",
    description:
      "Built a Viva Connections Dashboard on the Home Site. Teams configuration, ACE, PowerShell scripts and Active Directory integration.",
    tags: ["Viva", "SPFx", "Teams", "PowerShell"],
  },
  {
    title: "Lead Developer Power BI / SMAT",
    company: "Avanade",
    period: "03/2023 — 04/2023",
    description:
      "SMAT analysis and automation. Power BI reports on migration effort (site owner).",
    tags: ["Power BI", "SMAT"],
  },
  {
    title: "Lead Developer Power Automate / SharePoint",
    company: "Elior — Avanade",
    period: "01/2023 — 03/2023",
    description:
      "Contract management and tracking solution. Power Automate, Document Sets, PowerShell scripts.",
    tags: ["Power Automate", "SharePoint Online", "PowerShell"],
  },
  {
    title: "Technical PM SharePoint / O365",
    company: "Crédit Agricole Assurance — onepoint",
    period: "06/2022 — 12/2022",
    description:
      "Technical project management on SharePoint / O365: tracking, code review, SPFx development, front/back tech choices.",
    tags: ["SPFx", "O365", "Project Management"],
  },
  {
    title: ".NET Developer",
    company: "Maison Goyard — onepoint",
    period: "01/2022 — 06/2022",
    description:
      "MVC / VB.NET / .NET Core development. Salesforce connection via Azure Bus and CASE API.",
    tags: [".NET", "Salesforce", "Azure"],
  },
  {
    title: ".NET Full Stack Developer",
    company: "BMW — onepoint",
    period: "03/2021 — 12/2021",
    description:
      "BMW maintenance: SVN to Git migration, Jenkins setup, Vue.js front-end and .NET back-end.",
    tags: [".NET", "Vue.js", "Jenkins"],
  },
  {
    title: "Senior SharePoint Consultant",
    company: "BNP Paribas ITG — onepoint",
    period: "10/2020 — 02/2021",
    description:
      "SharePoint workspaces: audit, structure, access management, HTML/CSS customization via JSLINK.",
    tags: ["SharePoint", "JSLINK"],
  },
  {
    title: "M365 Consultant",
    company: "National Bank of Canada — onepoint",
    period: "09/2020 — 10/2020",
    description:
      "Teams PoC: .NET Core app published on Azure, Teams export.",
    tags: ["M365", ".NET Core", "Azure"],
  },
  {
    title: "Power Platform Consultant",
    company: "SNCF — onepoint",
    period: "07/2020 — 10/2020",
    description:
      "PowerApps PoC: PowerApps screens, SharePoint structure, interfaces, deployment.",
    tags: ["Power Platform", "PowerApps"],
  },
  {
    title: "Senior SharePoint Consultant",
    company: "EDF — onepoint",
    period: "10/2019 — 06/2020",
    description:
      "EDF maintenance: SharePoint 2013/2016, PowerShell, workflows, JavaScript and Angular 5.",
    tags: ["SharePoint", "Angular", "PowerShell"],
  },
  {
    title: "SharePoint Expert",
    company: "Université de Limoges — onepoint",
    period: "05/2019 — 11/2019",
    description:
      "IT training on SharePoint 2016, farm analysis, security, logical architecture.",
    tags: ["SharePoint 2016", "Training"],
  },
  {
    title: "SharePoint / Nintex Expert",
    company: "BMW Finance France — onepoint",
    period: "05/2019 — 11/2019",
    description:
      "Nintex training, SharePoint farm analysis, workflow export.",
    tags: ["Nintex", "SharePoint"],
  },
  {
    title: "SharePoint Expert",
    company: "Enedis — onepoint",
    period: "05/2019 — 09/2019",
    description:
      "Migration of a SharePoint collaborative space, structuring and user enablement.",
    tags: ["SharePoint", "Migration"],
  },
  {
    title: "Confirmed SharePoint Consultant",
    company: "Business & Décision Tunisia",
    period: "06/2018 — 09/2018",
    description:
      "ITIL SharePoint app development with Angular, ISAPI web services, REST.",
    tags: ["SharePoint", "ITIL", "Angular"],
  },
  {
    title: "Confirmed SharePoint Consultant",
    company: "ICRC — Business & Decision",
    period: "11/2016 — 09/2018",
    description:
      "3 SharePoint and MVC missions: IMP, SMIP, SG. Maintenance, security, AD management, MVC.",
    tags: ["SharePoint", "MVC", "PowerShell", "REST API"],
  },
  {
    title: "SharePoint Developer",
    company: "Faurecia — Client",
    period: "04/2015 — 10/2016",
    description:
      "Migration of WSS 3.0 intranets to SharePoint 2013. SharePoint development and support for the group.",
    tags: ["SharePoint", "Migration"],
  },
  {
    title: "System Administrator",
    company: "Faurecia — Client",
    period: "08/2014 — 03/2015",
    description:
      "L2 admin: SAP, EDI, Windows/Unix servers, Orion monitoring.",
    tags: ["System Administration", "SAP", "Orion"],
  },
]

export const educationFr = [
  {
    school: "ESPRIT, Tunisie",
    degree: "Ingénieur Informatique (Génie Logiciel) — cours du soir",
    period: "09/2014 — 08/2018",
  },
  {
    school: "ISI, Tunisie",
    degree: "Licence en Informatique Appliquée",
    period: "09/2013 — 08/2014",
  },
]

export const educationEn = [
  {
    school: "ESPRIT, Tunisia",
    degree: "Computer Engineering (Software Engineering) — evening program",
    period: "09/2014 — 08/2018",
  },
  {
    school: "ISI, Tunisia",
    degree: "Bachelor in Applied Computer Science",
    period: "09/2013 — 08/2014",
  },
]

export const skillsAll = [
  "Microsoft Power Platform",
  "Microsoft SharePoint Online",
  "Microsoft SharePoint Server",
  "Power Apps",
  "Power Automate",
  "Power BI",
  ".NET",
  "TypeScript",
  "React.js",
  "SPFx",
  "Workflow Automation & Digital Transformation",
  "Gestion de projet",
  "Scrum",
  "ITIL",
  "Avant-vente et suivi de projet",
  "Architecture de données",
  "Administration système",
  "JIRA",
  "Git",
  "Jenkins",
  "PnP PowerShell",
  "Nintex",
  "AvePoint DocAve",
]
