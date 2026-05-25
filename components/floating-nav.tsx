"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"
import { useT } from "@/lib/i18n"
import { LanguageToggle } from "@/components/language-toggle"

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMobile()
  const { t } = useT()

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 100)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: t("nav.dossier"), href: "#about", code: "01" },
    { name: t("nav.allies"), href: "#allies", code: "02" },
    { name: t("nav.arsenal"), href: "#skills", code: "03" },
    { name: t("nav.ops"), href: "#projects", code: "04" },
    { name: t("nav.career"), href: "#experience", code: "05" },
    { name: t("nav.contact"), href: "#contact", code: "06" },
  ]

  const handleNavClick = () => {
    if (isMobile) setIsOpen(false)
  }

  return (
    <>
      <motion.div
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1100px,calc(100vw-2rem))] ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative bg-card/95 backdrop-blur-md border border-border shadow-[0_0_0_1px_rgba(0,0,0,0.4)]">
          <span className="absolute -top-[3px] -left-[3px] w-3 h-3 border-t-2 border-l-2 border-accent" />
          <span className="absolute -top-[3px] -right-[3px] w-3 h-3 border-t-2 border-r-2 border-accent" />
          <span className="absolute -bottom-[3px] -left-[3px] w-3 h-3 border-b-2 border-l-2 border-accent" />
          <span className="absolute -bottom-[3px] -right-[3px] w-3 h-3 border-b-2 border-r-2 border-accent" />

          {isMobile ? (
            <div className="flex items-center justify-between px-3 py-2.5 gap-2">
              <Link href="/" className="font-stencil text-sm tracking-widest uppercase">
                <span className="text-accent">FK</span>
                <span className="text-muted-foreground mx-1">//</span>
                <span>26</span>
              </Link>
              <div className="flex items-center gap-2">
                <LanguageToggle />
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-foreground hover:text-accent hover:bg-transparent"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex items-stretch">
              <Link
                href="/"
                className="font-stencil text-sm tracking-widest uppercase px-4 py-3 border-r border-border flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-accent animate-blink" />
                <span className="text-accent">FK</span>
                <span className="text-muted-foreground">//</span>
                <span>26</span>
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.code}
                  href={item.href}
                  className="px-3 py-3 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground hover:text-accent hover:bg-secondary/40 transition-colors border-r border-border flex items-center gap-2"
                  onClick={handleNavClick}
                >
                  <span className="text-[9px] text-accent/60">{item.code}</span>
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center px-2 border-r border-border">
                <LanguageToggle />
              </div>
              <Link
                href="https://cv-three-umber.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 text-xs font-mono uppercase tracking-[0.2em] bg-accent text-accent-foreground hover:bg-accent/90 transition-colors flex items-center gap-2"
              >
                {t("nav.cv")}
              </Link>
            </div>
          )}
        </div>
      </motion.div>

      {isMobile && (
        <motion.div
          className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-md tactical-grid ${isOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-2">
            {navItems.map((item) => (
              <Link
                key={item.code}
                href={item.href}
                className="px-8 py-3 font-stencil text-2xl uppercase tracking-widest text-foreground hover:text-accent transition-colors flex items-center gap-3"
                onClick={handleNavClick}
              >
                <span className="text-xs text-accent font-mono">{item.code} //</span>
                {item.name}
              </Link>
            ))}
            <Link
              href="https://cv-three-umber.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
            >
              <Button className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90 font-mono uppercase tracking-widest rounded-none">
                {t("nav.cv")}
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </>
  )
}
