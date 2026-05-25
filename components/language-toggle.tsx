"use client"

import { useT } from "@/lib/i18n"

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useT()
  const isFr = lang === "fr"
  return (
    <div
      className={`inline-flex items-center rounded-full border border-border bg-background p-0.5 text-xs font-medium ${className}`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLang("fr")}
        aria-pressed={isFr}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          isFr ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        FR
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={!isFr}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          !isFr ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  )
}
