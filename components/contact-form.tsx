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

    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || "Erreur lors de l'envoi.")
      }

      toast({
        title: t("contact.toast.title"),
        description: t("contact.toast.desc"),
      })
      form.reset()
    } catch (err) {
      toast({
        title: "Erreur",
        description: err instanceof Error ? err.message : "Impossible d'envoyer le message.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-border bg-background p-6 md:p-8"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label={t("contact.form.name")}>
            <Input
              name="name"
              required
              placeholder={t("contact.form.name.ph")}
              className="h-11 rounded-lg border-border bg-background"
            />
          </Field>
          <Field label={t("contact.form.email")}>
            <Input
              name="email"
              type="email"
              required
              placeholder={t("contact.form.email.ph")}
              className="h-11 rounded-lg border-border bg-background"
            />
          </Field>
        </div>

        <Field label={t("contact.form.subject")}>
          <Input
            name="subject"
            required
            placeholder={t("contact.form.subject.ph")}
            className="h-11 rounded-lg border-border bg-background"
          />
        </Field>

        <Field label={t("contact.form.message")}>
          <Textarea
            name="message"
            required
            rows={6}
            placeholder={t("contact.form.message.ph")}
            className="resize-none rounded-lg border-border bg-background"
          />
        </Field>

        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className="h-12 w-full rounded-full text-sm font-medium"
        >
          {isSubmitting ? (
            t("contact.form.submitting")
          ) : (
            <>
              {t("contact.form.submit")}
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </motion.div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  )
}
