import type { Metadata } from "next"
import { JetBrains_Mono, Oswald, Black_Ops_One } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/lib/i18n"

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const stencil = Black_Ops_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-stencil",
  display: "swap",
})

export const metadata: Metadata = {
  title: "DOSSIER FK-2026 // F. KSONTINI — Opérateur Sénior M365 / SharePoint / Power Platform",
  description:
    "Fiche opérationnelle de Firas KSONTINI — Consultant Sénior M365, SharePoint et Power Platform. +10 ans de missions critiques en Digital Workplace.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`${mono.variable} ${oswald.variable} ${stencil.variable} bg-background dark`}
    >
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
