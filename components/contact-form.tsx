"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { useT } from "@/lib/i18n"

export function ContactForm() {
  const { toast } = useToast()
  const { t } = useT()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: t("contact.toast.title"),
      description: t("contact.toast.desc"),
    })

    setIsSubmitting(false)
    e.currentTarget.reset()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative bg-card border border-border">
        <span className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-accent" />
        <span className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-accent" />
        <span className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-accent" />
        <span className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-accent" />

        <div className="bg-secondary/60 border-b border-border px-4 py-2 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-destructive animate-blink rounded-full" />
            {t("contact.form.channel")}
          </span>
          <span>FREQ.443.92</span>
        </div>

        <div className="p-6">
          <h3 className="font-stencil text-2xl uppercase tracking-wide mb-1">{t("contact.form.title")}</h3>
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
            {t("contact.form.sub")}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-[10px] font-mono uppercase tracking-widest text-accent">
                {t("contact.form.id")}
              </label>
              <Input
                placeholder={t("contact.form.id.ph")}
                required
                className="bg-background border-border focus:border-accent rounded-none font-mono"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-[10px] font-mono uppercase tracking-widest text-accent">
                {t("contact.form.return")}
              </label>
              <Input
                type="email"
                placeholder={t("contact.form.return.ph")}
                required
                className="bg-background border-border focus:border-accent rounded-none font-mono"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-[10px] font-mono uppercase tracking-widest text-accent">
                {t("contact.form.subject")}
              </label>
              <Input
                placeholder={t("contact.form.subject.ph")}
                required
                className="bg-background border-border focus:border-accent rounded-none font-mono"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-[10px] font-mono uppercase tracking-widest text-accent">
                {t("contact.form.body")}
              </label>
              <Textarea
                placeholder={t("contact.form.body.ph")}
                rows={5}
                required
                className="bg-background border-border focus:border-accent rounded-none font-mono resize-none"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-none font-stencil uppercase tracking-widest h-11"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>{t("contact.form.submitting")}</>
              ) : (
                <>
                  {t("contact.form.submit")} <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}
