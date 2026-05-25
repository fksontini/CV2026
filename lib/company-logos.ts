// Mapping entreprise -> domaine officiel pour récupérer le logo via favicon.
// Pour les missions au format "Client — Cabinet", on privilégie le domaine du CLIENT
// (la société chez qui la mission a eu lieu).

const DOMAIN_MAP: Record<string, string> = {
  // Mission en cours
  natran: "natran.com",
  grtgaz: "grtgaz.com",

  // Neos-SDI clients
  "conseil départemental 77": "seine-et-marne.fr",
  "seine-et-marne": "seine-et-marne.fr",
  "cat group": "cat.com",
  deloitte: "deloitte.com",
  tdf: "tdf.fr",
  daumézon: "ch-daumezon.fr",
  daumezon: "ch-daumezon.fr",
  "conseil départemental 91": "essonne.fr",
  essonne: "essonne.fr",
  "métropole de nice": "nicecotedazur.org",
  nice: "nicecotedazur.org",
  colas: "colas.com",
  "harmonie mutuelle": "harmonie-mutuelle.fr",
  artelia: "arteliagroup.com",
  mayoly: "mayoly.com",

  // Avanade clients
  "crédit agricole - cagip": "credit-agricole.com",
  "credit agricole - cagip": "credit-agricole.com",
  cagip: "credit-agricole.com",
  engie: "engie.com",
  avanade: "avanade.com",
  elior: "elior.com",

  // onepoint clients
  "crédit agricole assurance": "ca-assurances.com",
  "credit agricole assurance": "ca-assurances.com",
  "maison goyard": "goyard.com",
  goyard: "goyard.com",
  bmw: "bmw.com",
  "bnp paribas": "bnpparibas.com",
  "banque nationale du canada": "bnc.ca",
  "national bank of canada": "bnc.ca",
  sncf: "sncf.com",
  edf: "edf.fr",
  "université de limoges": "unilim.fr",
  "universite de limoges": "unilim.fr",
  "university of limoges": "unilim.fr",
  "bmw finance": "bmw.com",
  enedis: "enedis.fr",

  // Plus anciens
  "business & décision": "businessdecision.com",
  "business & decision": "businessdecision.com",
  cicr: "icrc.org",
  faurecia: "faurecia.com",
}

/**
 * Détecte le domaine le plus pertinent pour une chaîne "Société — Cabinet".
 * Stratégie :
 *  1. On split sur "—" / "-" pour isoler la partie client (avant le tiret cadratin).
 *  2. On normalise (lowercase, sans accents partiels) et on cherche un match dans la map.
 *  3. Si rien dans la partie client, on essaie la partie cabinet, puis la chaîne complète.
 */
export function getCompanyDomain(company: string): string | null {
  if (!company) return null
  const parts = company.split(/—|–/).map((p) => p.trim())
  const candidates = [...parts, company].filter(Boolean)

  for (const candidate of candidates) {
    const normalized = candidate.toLowerCase()
    // match exact
    if (DOMAIN_MAP[normalized]) return DOMAIN_MAP[normalized]
    // match par inclusion : "BNP Paribas ITG" contient "bnp paribas"
    for (const key of Object.keys(DOMAIN_MAP)) {
      if (normalized.includes(key)) return DOMAIN_MAP[key]
    }
  }

  return null
}

export function getCompanyInitials(company: string): string {
  // On prend la partie avant le tiret cadratin (le client) pour l'initiale.
  const main = company.split(/—|–/)[0].trim()
  const words = main
    .replace(/\(.+?\)/g, "")
    .split(/\s+/)
    .filter((w) => w && !["de", "du", "des", "la", "le", "les", "of", "the", "et", "and"].includes(w.toLowerCase()))
  const letters = words.slice(0, 2).map((w) => w[0]?.toUpperCase() ?? "")
  return letters.join("") || "·"
}

/**
 * URL du logo via le service Google Favicon (très fiable, gratuit, public).
 * size = 64 | 128 | 256 (Google supporte ces valeurs).
 */
export function getCompanyLogoUrl(company: string, size = 128): string | null {
  const domain = getCompanyDomain(company)
  if (!domain) return null
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`
}
