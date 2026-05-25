"use client"

import { createContext, useCallback, useContext, useEffect, useState } from "react"

export type Lang = "fr" | "en"

type Dict = Record<string, string>

const fr: Dict = {
  // Nav
  "nav.about": "À propos",
  "nav.experience": "Expérience",
  "nav.projects": "Réalisations",
  "nav.skills": "Compétences",
  "nav.clients": "Clients",
  "nav.contact": "Contact",
  "nav.cv": "Télécharger CV",

  // Status
  "status.available": "Disponible pour de nouvelles missions",

  // Hero
  "hero.eyebrow": "Consultant indépendant — Paris, France",
  "hero.title.pre": "Je conçois des",
  "hero.title.accent": "Digital Workplaces",
  "hero.title.post": "robustes pour les grands comptes.",
  "hero.subtitle":
    "Plus de 10 ans d'expertise Microsoft 365, SharePoint et Power Platform au service de Crédit Agricole, BNP Paribas, EDF, ENGIE, BMW, Deloitte et NaTran.",
  "hero.cta.work": "Voir mes réalisations",
  "hero.cta.contact": "Me contacter",
  "hero.stat.experience": "Années d'expérience",
  "hero.stat.clients": "Grands comptes",
  "hero.stat.projects": "Projets livrés",

  // About
  "sec.about.eyebrow": "À propos",
  "sec.about.title": "Architecte de la Digital Workplace.",
  "about.p1":
    "Expert M365, SharePoint et Power Platform, j'accompagne depuis plus de dix ans les grands comptes français dans la conception, la mise en œuvre et la gouvernance de leur Digital Workplace.",
  "about.p2":
    "Je couvre l'intégralité du cycle projet : avant-vente et chiffrage, ateliers de cadrage, architecture technique, développement (SPFx / React, PowerApps, Power Automate, .NET), gouvernance et accompagnement au changement.",
  "about.p3":
    "Lead Tech, Architecte ou Chef de projet : j'interviens à l'interface du métier et de la DSI pour livrer des solutions robustes, gouvernées et adoptées sur le terrain.",
  "about.role.lead": "Lead Tech",
  "about.role.arch": "Architecte",
  "about.role.pm": "Chef de projet",
  "about.based": "Basé à",
  "about.location": "Issy-les-Moulineaux, France",
  "about.languages": "Langues",
  "about.languages.value": "Français · Anglais",
  "about.availability": "Disponibilité",
  "about.availability.value": "Immédiate — freelance & long terme",

  // Clients
  "sec.clients.eyebrow": "Ils m'ont fait confiance",
  "sec.clients.title": "Des grands comptes engagés depuis 2014.",
  "sec.clients.subtitle":
    "De la banque à l'énergie en passant par l'automobile et le conseil — j'ai contribué à structurer la Digital Workplace de leaders sectoriels exigeants.",

  // Skills
  "sec.skills.eyebrow": "Compétences",
  "sec.skills.title": "Un stack maîtrisé de bout en bout.",
  "sec.skills.subtitle":
    "Architecture, développement, gouvernance et accompagnement : un savoir-faire complet sur l'écosystème Microsoft.",
  "skills.cat.platform": "Plateformes Microsoft",
  "skills.cat.dev": "Développement",
  "skills.cat.governance": "Gouvernance & Méthodes",

  // Projects
  "sec.projects.eyebrow": "Réalisations",
  "sec.projects.title": "Une sélection de missions récentes.",
  "sec.projects.subtitle":
    "Projets livrés en environnement grand compte, du cadrage à la mise en production.",
  "projects.duration": "Durée",
  "projects.role": "Rôle",
  "projects.client": "Client",

  // Experience
  "sec.exp.eyebrow": "Expérience",
  "sec.exp.title": "Parcours.",
  "sec.exp.subtitle": "Plus de dix ans de missions sur des environnements stratégiques.",
  "exp.current": "En cours",

  // Contact
  "sec.contact.eyebrow": "Contact",
  "sec.contact.title": "Discutons de votre prochain projet.",
  "sec.contact.subtitle":
    "Disponible pour des missions de conseil, d'architecture ou de delivery sur l'écosystème Microsoft 365.",
  "contact.email": "Email",
  "contact.phone": "Téléphone",
  "contact.linkedin": "LinkedIn",
  "contact.location": "Localisation",
  "contact.form.name": "Nom",
  "contact.form.name.ph": "Votre nom",
  "contact.form.email": "Email",
  "contact.form.email.ph": "vous@entreprise.com",
  "contact.form.subject": "Sujet",
  "contact.form.subject.ph": "Objet de votre message",
  "contact.form.message": "Message",
  "contact.form.message.ph": "Décrivez votre besoin, votre contexte ou votre projet…",
  "contact.form.submit": "Envoyer le message",
  "contact.form.submitting": "Envoi en cours…",
  "contact.toast.title": "Message envoyé",
  "contact.toast.desc": "Merci pour votre message. Je reviens vers vous sous 24 heures.",

  // Footer
  "footer.tagline": "Consultant senior Microsoft 365 & Power Platform.",
  "footer.copy": "© {year} Firas Ksontini. Tous droits réservés.",
}

const en: Dict = {
  "nav.about": "About",
  "nav.experience": "Experience",
  "nav.projects": "Work",
  "nav.skills": "Skills",
  "nav.clients": "Clients",
  "nav.contact": "Contact",
  "nav.cv": "Download CV",

  "status.available": "Available for new engagements",

  "hero.eyebrow": "Independent consultant — Paris, France",
  "hero.title.pre": "I design robust",
  "hero.title.accent": "Digital Workplaces",
  "hero.title.post": "for enterprise organizations.",
  "hero.subtitle":
    "10+ years of Microsoft 365, SharePoint and Power Platform expertise delivered to Crédit Agricole, BNP Paribas, EDF, ENGIE, BMW, Deloitte and NaTran.",
  "hero.cta.work": "View selected work",
  "hero.cta.contact": "Get in touch",
  "hero.stat.experience": "Years of experience",
  "hero.stat.clients": "Key accounts",
  "hero.stat.projects": "Projects delivered",

  "sec.about.eyebrow": "About",
  "sec.about.title": "Digital Workplace architect.",
  "about.p1":
    "M365, SharePoint and Power Platform expert — for over a decade I have supported leading French enterprises in designing, building and governing their Digital Workplace.",
  "about.p2":
    "I cover the full project lifecycle: pre-sales and scoping, framing workshops, technical architecture, development (SPFx / React, PowerApps, Power Automate, .NET), governance and change enablement.",
  "about.p3":
    "Tech Lead, Architect or Project Manager — I sit at the interface between business and IT to deliver solutions that are robust, governed and adopted on the ground.",
  "about.role.lead": "Tech Lead",
  "about.role.arch": "Architect",
  "about.role.pm": "Project Manager",
  "about.based": "Based in",
  "about.location": "Issy-les-Moulineaux, France",
  "about.languages": "Languages",
  "about.languages.value": "French · English",
  "about.availability": "Availability",
  "about.availability.value": "Immediate — freelance & long-term",

  "sec.clients.eyebrow": "Trusted by",
  "sec.clients.title": "Enterprise clients engaged since 2014.",
  "sec.clients.subtitle":
    "From banking to energy, automotive and consulting — I have helped shape the Digital Workplace of demanding sector leaders.",

  "sec.skills.eyebrow": "Skills",
  "sec.skills.title": "An end-to-end mastered stack.",
  "sec.skills.subtitle":
    "Architecture, development, governance and enablement — a complete craft on the Microsoft ecosystem.",
  "skills.cat.platform": "Microsoft platforms",
  "skills.cat.dev": "Development",
  "skills.cat.governance": "Governance & Methods",

  "sec.projects.eyebrow": "Selected work",
  "sec.projects.title": "A selection of recent engagements.",
  "sec.projects.subtitle": "Projects delivered in enterprise environments, from scoping to production.",
  "projects.duration": "Duration",
  "projects.role": "Role",
  "projects.client": "Client",

  "sec.exp.eyebrow": "Experience",
  "sec.exp.title": "Career path.",
  "sec.exp.subtitle": "10+ years of missions on strategic environments.",
  "exp.current": "Current",

  "sec.contact.eyebrow": "Contact",
  "sec.contact.title": "Let's discuss your next project.",
  "sec.contact.subtitle":
    "Available for consulting, architecture or delivery engagements on the Microsoft 365 ecosystem.",
  "contact.email": "Email",
  "contact.phone": "Phone",
  "contact.linkedin": "LinkedIn",
  "contact.location": "Location",
  "contact.form.name": "Name",
  "contact.form.name.ph": "Your name",
  "contact.form.email": "Email",
  "contact.form.email.ph": "you@company.com",
  "contact.form.subject": "Subject",
  "contact.form.subject.ph": "Subject of your message",
  "contact.form.message": "Message",
  "contact.form.message.ph": "Describe your need, context or project…",
  "contact.form.submit": "Send message",
  "contact.form.submitting": "Sending…",
  "contact.toast.title": "Message sent",
  "contact.toast.desc": "Thanks for your message. I'll get back to you within 24 hours.",

  "footer.tagline": "Senior Microsoft 365 & Power Platform consultant.",
  "footer.copy": "© {year} Firas Ksontini. All rights reserved.",
}

const dicts: Record<Lang, Dict> = { fr, en }

interface Ctx {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string, vars?: Record<string, string | number>) => string
}

const LangCtx = createContext<Ctx | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr")

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("fk-lang")) as Lang | null
    if (stored === "fr" || stored === "en") setLangState(stored)
  }, [])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    if (typeof window !== "undefined") localStorage.setItem("fk-lang", l)
    if (typeof document !== "undefined") document.documentElement.lang = l
  }, [])

  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      let str = dicts[lang][key] ?? dicts.fr[key] ?? key
      if (vars) {
        for (const [k, v] of Object.entries(vars)) {
          str = str.replace(`{${k}}`, String(v))
        }
      }
      return str
    },
    [lang],
  )

  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>
}

export function useT() {
  const ctx = useContext(LangCtx)
  if (!ctx) throw new Error("useT must be used within LanguageProvider")
  return ctx
}
