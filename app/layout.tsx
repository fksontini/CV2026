import type { Metadata } from "next"
import { Inter, Instrument_Serif } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/lib/i18n"

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Firas Ksontini — Consultant Senior Microsoft 365 & Power Platform",
  description:
    "Consultant senior Microsoft 365, SharePoint et Power Platform. +10 ans au service de grands comptes (Crédit Agricole, BNP Paribas, EDF, ENGIE, BMW, Deloitte, NaTran). Architecte Digital Workplace.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${sans.variable} ${serif.variable} bg-background`}>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
