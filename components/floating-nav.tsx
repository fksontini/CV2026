"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"
import { useT } from "@/lib/i18n"
import { LanguageToggle } from "@/components/language-toggle"

export function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isMobile = useMobile()
  const { t } = useT()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.clients"), href: "#clients" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.contact"), href: "#contact" },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-background/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 font-serif text-lg text-foreground">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-sm font-medium text-background">
              FK
            </span>
            <span className="hidden sm:inline">Firas Ksontini</span>
          </Link>

          {!isMobile && (
            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          )}

          <div className="flex items-center gap-2">
            <LanguageToggle />
            {!isMobile ? (
              <Link href="https://cv-three-umber.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="h-9 rounded-full px-4 text-sm">
                  <Download className="mr-1.5 h-3.5 w-3.5" />
                  {t("nav.cv")}
                </Button>
              </Link>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Menu"
              >
                {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            )}
          </div>
        </div>
      </motion.header>

      {isMobile && (
        <motion.div
          initial={false}
          animate={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? "auto" : "none" }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md"
        >
          <div className="flex h-full flex-col items-center justify-center gap-2 p-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 font-serif text-3xl text-foreground"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="https://cv-three-umber.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-6"
            >
              <Button size="lg" className="rounded-full">
                <Download className="mr-2 h-4 w-4" />
                {t("nav.cv")}
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </>
  )
}
