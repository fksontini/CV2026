import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Firas KSONTINI — Consultant Sénior M365 / SharePoint / Power Platform',
  description:
    'Portfolio de Firas KSONTINI — Consultant Sénior (+10 ans d’expérience), Chef de projet Technique spécialisé en Microsoft 365, SharePoint et Power Platform.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
