"use client"

import { createContext, useCallback, useContext, useEffect, useState } from "react"

export type Lang = "fr" | "en"

type Dict = Record<string, string>

const fr: Dict = {
  // Status bar
  "status.active": "SYSTÈME ACTIF",
  "status.dossier": "DOSSIER FK-2026",
  "status.clearance": "CLEARANCE: NIVEAU 3",
  "status.coords": "48.823°N 02.270°E",

  // Ticker
  "ticker.years": "+10 ANS DE SERVICE OPÉRATIONNEL",
  "ticker.clients": "CRÉDIT AGRICOLE / BNP PARIBAS / EDF / ENGIE / BMW / DELOITTE / NATRAN",
  "ticker.stack": "MICROSOFT 365 — SHAREPOINT — POWER PLATFORM",
  "ticker.available": "STATUT : DISPONIBLE POUR NOUVELLES MISSIONS",
  "ticker.crypto": "CHIFFREMENT TRANSMISSION : AES-256",

  // Hero
  "hero.badge": "DOSSIER OPÉRATIONNEL // CONFIDENTIEL",
  "hero.matricule": "MATRICULE FK-2026",
  "hero.id": "// IDENTIFICATION DU SUJET",
  "hero.rank": "RANG : CONSULTANT SÉNIOR — SPÉCIALISTE M365",
  "hero.stat.exp": "ANCIENNETÉ",
  "hero.stat.exp.value": "10+ ANS",
  "hero.stat.missions": "MISSIONS",
  "hero.stat.missions.value": "11 OPS",
  "hero.stat.theaters": "THÉÂTRES",
  "hero.stat.theaters.value": "ENTREPRISE",
  "hero.briefing": "// BRIEFING",
  "hero.briefing.body":
    "Opérateur sénior déployé sur l'écosystème Microsoft 365, SharePoint et Power Platform. Spécialisé en gestion de projet technique, avant-vente et architecture Digital Workplace pour cibles stratégiques.",
  "hero.cta.ops": "Voir les opérations",
  "hero.cta.contact": "Établir contact",
  "hero.scroll": "► DÉPLOYER LE DOSSIER",

  // Sections
  "sec.about.title": "DOSSIER",
  "sec.about.sub": "01 // PROFIL OPÉRATEUR",
  "sec.allies.title": "FORCES ALLIÉES",
  "sec.allies.sub": "02 // GRANDS COMPTES DÉPLOYÉS",
  "sec.skills.title": "ARSENAL",
  "sec.skills.sub": "03 // ÉQUIPEMENT TECHNIQUE",
  "sec.projects.title": "OPÉRATIONS",
  "sec.projects.sub": "04 // MISSIONS DÉCLASSIFIÉES",
  "sec.exp.title": "CARRIÈRE",
  "sec.exp.sub": "05 // CHRONOLOGIE DES DÉPLOIEMENTS",
  "sec.contact.title": "CONTACT",
  "sec.contact.sub": "06 // ÉTABLIR UNE TRANSMISSION",
  "sec.classified": "SECTION CLASSIFIÉE — NIVEAU 3",

  // ID card
  "id.title": "CARTE D'IDENTITÉ",
  "id.field.name": "NOM",
  "id.field.first": "PRÉNOM",
  "id.field.grade": "GRADE",
  "id.field.unit": "UNITÉ",
  "id.field.base": "BASE",
  "id.value.grade": "CONSULTANT SÉNIOR",
  "id.value.unit": "DIGITAL WORKPLACE",
  "id.value.base": "ISSY-LES-MOULINEAUX, FR",
  "id.in.service": "EN SERVICE — DISPONIBLE",

  "stat.exp": "EXP. MISSION",
  "stat.exp.sub": "ans déployés",
  "stat.accounts": "GRANDS COMPTES",
  "stat.accounts.sub": "références",
  "stat.stack": "STACK PRIMARY",
  "stat.stack.sub": "SP / Power",
  "stat.lang": "LANGUES",
  "stat.lang.sub": "opérationnel",

  // About body
  "about.mission": "// MISSION ACTUELLE",
  "about.mission.body":
    "Expert M365, SharePoint et Power Platform — j'accompagne depuis plus de dix ans des grands comptes (Crédit Agricole, BNP Paribas, EDF, ENGIE, BMW, Deloitte, NaTran) dans la conception et la mise en œuvre de leur Digital Workplace.",
  "about.scope": "// PÉRIMÈTRE OPÉRATIONNEL",
  "about.scope.body":
    "Couverture du cycle complet : avant-vente et chiffrage, ateliers de cadrage, architecture technique, développement (SPFx / React, PowerApps, Power Automate, .NET), gouvernance et accompagnement au changement.",
  "about.positions": "// POSITIONS",
  "about.positions.body":
    "Lead Tech, Architecte ou Chef de projet — interface directe avec les métiers et la DSI pour livrer des solutions robustes, gouvernées et adoptées sur le terrain.",
  "about.cv": "// DOCUMENT.PDF — DOSSIER COMPLET DE L'OPÉRATEUR",
  "about.cv.btn": "► CV COMPLET",

  // Allies
  "allies.intro": "Théâtres opérationnels couverts depuis 2014. Cibles stratégiques engagées et neutralisées avec succès.",
  "allies.engagement": "ENGAGEMENT CONFIRMÉ",

  // Projects
  "projects.dossier": "MISSION DOSSIER",
  "projects.classified": "CLASSIFIED",
  "projects.threat": "MENACE",
  "projects.duration": "DURÉE",
  "projects.outcome": "RÉSULTAT",
  "projects.outcome.value": "OBJECTIF ATTEINT",

  // Contact
  "contact.coords": "► Coordonnées",
  "contact.channels": "Canaux de communication autorisés",
  "contact.email": "EMAIL",
  "contact.phone": "TÉLÉPHONE",
  "contact.linkedin": "LINKEDIN",
  "contact.base": "BASE",
  "contact.status": "// STATUT OPÉRATIONNEL",
  "contact.status.body": "Disponible — missions freelance et opportunités long terme",
  "contact.form.title": "► Transmission",
  "contact.form.sub": "Établir le contact — voie sécurisée",
  "contact.form.channel": "CANAL CHIFFRÉ // AES-256",
  "contact.form.id": "// IDENTIFIANT_OPÉRATEUR",
  "contact.form.id.ph": "Votre nom",
  "contact.form.return": "// CANAL_RETOUR",
  "contact.form.return.ph": "vous@exemple.com",
  "contact.form.subject": "// OBJET_MISSION",
  "contact.form.subject.ph": "Sujet",
  "contact.form.body": "// CONTENU_TRANSMISSION",
  "contact.form.body.ph": "Détails de la mission...",
  "contact.form.submit": "► ENVOYER LA TRANSMISSION",
  "contact.form.submitting": "► CHIFFREMENT EN COURS...",
  "contact.toast.title": "TRANSMISSION CHIFFRÉE ENVOYÉE",
  "contact.toast.desc": "Message reçu sur le canal sécurisé. Réponse sous 24h.",

  // Footer
  "footer.copy": "► © {year} — DOSSIER CHIFFRÉ — UTILISATION RÉGLEMENTÉE",
  "footer.rights": "FK-2026 // ALL RIGHTS RESERVED",

  // Nav
  "nav.dossier": "DOSSIER",
  "nav.allies": "ALLIÉS",
  "nav.arsenal": "ARSENAL",
  "nav.ops": "OPÉRATIONS",
  "nav.career": "CARRIÈRE",
  "nav.contact": "CONTACT",
  "nav.cv": "► DOSSIER COMPLET",

  // Timeline status
  "timeline.active": "ACTIF",

  // Audio
  "audio.on": "AUDIO ON",
  "audio.off": "AUDIO OFF",
}

const en: Dict = {
  "status.active": "SYSTEM ONLINE",
  "status.dossier": "FILE FK-2026",
  "status.clearance": "CLEARANCE: LEVEL 3",
  "status.coords": "48.823°N 02.270°E",

  "ticker.years": "+10 YEARS OF OPERATIONAL SERVICE",
  "ticker.clients": "CRÉDIT AGRICOLE / BNP PARIBAS / EDF / ENGIE / BMW / DELOITTE / NATRAN",
  "ticker.stack": "MICROSOFT 365 — SHAREPOINT — POWER PLATFORM",
  "ticker.available": "STATUS: AVAILABLE FOR NEW MISSIONS",
  "ticker.crypto": "TRANSMISSION ENCRYPTION: AES-256",

  "hero.badge": "OPERATIONAL FILE // CONFIDENTIAL",
  "hero.matricule": "ID FK-2026",
  "hero.id": "// SUBJECT IDENTIFICATION",
  "hero.rank": "RANK: SENIOR CONSULTANT — M365 SPECIALIST",
  "hero.stat.exp": "SENIORITY",
  "hero.stat.exp.value": "10+ YEARS",
  "hero.stat.missions": "MISSIONS",
  "hero.stat.missions.value": "11 OPS",
  "hero.stat.theaters": "THEATERS",
  "hero.stat.theaters.value": "ENTERPRISE",
  "hero.briefing": "// BRIEFING",
  "hero.briefing.body":
    "Senior operator deployed across the Microsoft 365, SharePoint and Power Platform ecosystem. Specialized in technical project management, pre-sales and Digital Workplace architecture for strategic targets.",
  "hero.cta.ops": "View operations",
  "hero.cta.contact": "Establish contact",
  "hero.scroll": "► DEPLOY THE FILE",

  "sec.about.title": "FILE",
  "sec.about.sub": "01 // OPERATOR PROFILE",
  "sec.allies.title": "ALLIED FORCES",
  "sec.allies.sub": "02 // ENGAGED ENTERPRISE TARGETS",
  "sec.skills.title": "ARSENAL",
  "sec.skills.sub": "03 // TECHNICAL LOADOUT",
  "sec.projects.title": "OPERATIONS",
  "sec.projects.sub": "04 // DECLASSIFIED MISSIONS",
  "sec.exp.title": "SERVICE RECORD",
  "sec.exp.sub": "05 // DEPLOYMENT TIMELINE",
  "sec.contact.title": "CONTACT",
  "sec.contact.sub": "06 // OPEN A TRANSMISSION",
  "sec.classified": "CLASSIFIED SECTION — LEVEL 3",

  "id.title": "ID CARD",
  "id.field.name": "LAST NAME",
  "id.field.first": "FIRST NAME",
  "id.field.grade": "GRADE",
  "id.field.unit": "UNIT",
  "id.field.base": "BASE",
  "id.value.grade": "SENIOR CONSULTANT",
  "id.value.unit": "DIGITAL WORKPLACE",
  "id.value.base": "ISSY-LES-MOULINEAUX, FR",
  "id.in.service": "ON DUTY — AVAILABLE",

  "stat.exp": "MISSION EXP.",
  "stat.exp.sub": "years deployed",
  "stat.accounts": "KEY ACCOUNTS",
  "stat.accounts.sub": "references",
  "stat.stack": "PRIMARY STACK",
  "stat.stack.sub": "SP / Power",
  "stat.lang": "LANGUAGES",
  "stat.lang.sub": "operational",

  "about.mission": "// CURRENT MISSION",
  "about.mission.body":
    "M365, SharePoint and Power Platform expert — for over a decade I have supported key accounts (Crédit Agricole, BNP Paribas, EDF, ENGIE, BMW, Deloitte, NaTran) in designing and rolling out their Digital Workplace.",
  "about.scope": "// OPERATIONAL SCOPE",
  "about.scope.body":
    "Full lifecycle coverage: pre-sales and scoping, framing workshops, technical architecture, development (SPFx / React, PowerApps, Power Automate, .NET), governance and change enablement.",
  "about.positions": "// POSITIONS",
  "about.positions.body":
    "Tech Lead, Architect or Project Manager — direct interface with business and IT to deliver robust, governed and adopted solutions on the ground.",
  "about.cv": "// DOCUMENT.PDF — FULL OPERATOR DOSSIER",
  "about.cv.btn": "► FULL CV",

  "allies.intro": "Operational theaters covered since 2014. Strategic targets successfully engaged and neutralized.",
  "allies.engagement": "ENGAGEMENT CONFIRMED",

  "projects.dossier": "MISSION FILE",
  "projects.classified": "CLASSIFIED",
  "projects.threat": "THREAT",
  "projects.duration": "DURATION",
  "projects.outcome": "OUTCOME",
  "projects.outcome.value": "OBJECTIVE ACHIEVED",

  "contact.coords": "► Coordinates",
  "contact.channels": "Authorized communication channels",
  "contact.email": "EMAIL",
  "contact.phone": "PHONE",
  "contact.linkedin": "LINKEDIN",
  "contact.base": "BASE",
  "contact.status": "// OPERATIONAL STATUS",
  "contact.status.body": "Available — freelance missions and long-term opportunities",
  "contact.form.title": "► Transmission",
  "contact.form.sub": "Establish contact — secure channel",
  "contact.form.channel": "ENCRYPTED CHANNEL // AES-256",
  "contact.form.id": "// OPERATOR_ID",
  "contact.form.id.ph": "Your name",
  "contact.form.return": "// RETURN_CHANNEL",
  "contact.form.return.ph": "you@example.com",
  "contact.form.subject": "// MISSION_OBJECT",
  "contact.form.subject.ph": "Subject",
  "contact.form.body": "// TRANSMISSION_PAYLOAD",
  "contact.form.body.ph": "Mission details...",
  "contact.form.submit": "► SEND TRANSMISSION",
  "contact.form.submitting": "► ENCRYPTING...",
  "contact.toast.title": "ENCRYPTED TRANSMISSION SENT",
  "contact.toast.desc": "Message received on secure channel. Response within 24h.",

  "footer.copy": "► © {year} — ENCRYPTED FILE — REGULATED USE",
  "footer.rights": "FK-2026 // ALL RIGHTS RESERVED",

  "nav.dossier": "FILE",
  "nav.allies": "ALLIES",
  "nav.arsenal": "ARSENAL",
  "nav.ops": "OPS",
  "nav.career": "RECORD",
  "nav.contact": "CONTACT",
  "nav.cv": "► FULL DOSSIER",

  "timeline.active": "ACTIVE",

  "audio.on": "AUDIO ON",
  "audio.off": "AUDIO OFF",
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
