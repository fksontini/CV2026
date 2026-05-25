"use client"

import { useT } from "@/lib/i18n"

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useT()
  const isFr = lang === "fr"
  return (
    <div
      className={`inline-flex items-stretch border border-border bg-card font-mono text-[10px] uppercase tracking-widest ${className}`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLang("fr")}
        aria-pressed={isFr}
        className={`px-2.5 py-1.5 transition-colors ${
          isFr ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-accent"
        }`}
      >
        FR
      </button>
      <span className="w-px bg-border" aria-hidden />
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={!isFr}
        className={`px-2.5 py-1.5 transition-colors ${
          !isFr ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-accent"
        }`}
      >
        EN
      </button>
    </div>
  )
}
