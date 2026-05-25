"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Send,
  Sparkles,
  Paperclip,
  X,
  FileText,
  Wand2,
  Loader2,
  RefreshCcw,
  Wand,
  PencilLine,
  ListChecks,
  CheckCircle2,
  AlertCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { useT } from "@/lib/i18n"
import { cn } from "@/lib/utils"

type Mode = "free" | "guided"

const MAX_FILES = 3
const MAX_FILE_SIZE = 5 * 1024 * 1024

export function ContactForm() {
  const { toast } = useToast()
  const { t, lang } = useT()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mode, setMode] = useState<Mode>("free")

  // Captcha
  const [captcha, setCaptcha] = useState<{ question: string; token: string } | null>(null)
  const [captchaAnswer, setCaptchaAnswer] = useState("")

  // Files
  const [files, setFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Guided mode answers
  const [guided, setGuided] = useState({ context: "", need: "", stack: "", deadline: "" })

  // Free mode message
  const [message, setMessage] = useState("")
  const [aiBusy, setAiBusy] = useState(false)
  const [originalMessage, setOriginalMessage] = useState<string | null>(null)

  // Inline status banner
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)

  useEffect(() => {
    void refreshCaptcha()
  }, [])

  async function refreshCaptcha() {
    try {
      const res = await fetch("/api/captcha", { cache: "no-store" })
      const data = await res.json()
      setCaptcha(data)
      setCaptchaAnswer("")
    } catch {
      setCaptcha(null)
    }
  }

  function addFiles(list: FileList | File[]) {
    const incoming = Array.from(list)
    const next: File[] = [...files]
    for (const f of incoming) {
      if (next.length >= MAX_FILES) break
      const lower = f.name.toLowerCase()
      if (!lower.endsWith(".pdf")) {
        toast({
          title: lang === "fr" ? "Fichier rejeté" : "File rejected",
          description: lang === "fr" ? `${f.name} : seuls les PDF sont acceptés.` : `${f.name}: PDF only.`,
          variant: "destructive",
        })
        continue
      }
      if (f.type && f.type !== "application/pdf") {
        toast({
          title: lang === "fr" ? "Type invalide" : "Invalid type",
          description: f.name,
          variant: "destructive",
        })
        continue
      }
      if (f.size > MAX_FILE_SIZE) {
        toast({
          title: lang === "fr" ? "Trop volumineux" : "Too large",
          description: `${f.name} > 5 Mo`,
          variant: "destructive",
        })
        continue
      }
      next.push(f)
    }
    setFiles(next.slice(0, MAX_FILES))
  }

  function removeFile(idx: number) {
    setFiles(files.filter((_, i) => i !== idx))
  }

  function buildMessageFromGuided(): string {
    const labels = lang === "fr"
      ? {
          context: "Contexte",
          need: "Besoin",
          stack: "Stack / environnement",
          deadline: "Échéance / contraintes",
        }
      : {
          context: "Context",
          need: "Need",
          stack: "Stack / environment",
          deadline: "Deadline / constraints",
        }
    const parts: string[] = []
    if (guided.context) parts.push(`${labels.context} :\n${guided.context}`)
    if (guided.need) parts.push(`${labels.need} :\n${guided.need}`)
    if (guided.stack) parts.push(`${labels.stack} :\n${guided.stack}`)
    if (guided.deadline) parts.push(`${labels.deadline} :\n${guided.deadline}`)
    return parts.join("\n\n")
  }

  async function handleAiRewrite() {
    const source = mode === "free" ? message : buildMessageFromGuided()
    if (source.trim().length < 10) {
      toast({
        title: lang === "fr" ? "Texte trop court" : "Text too short",
        description: lang === "fr" ? "Écrivez au moins quelques phrases." : "Write a few sentences first.",
        variant: "destructive",
      })
      return
    }
    setAiBusy(true)
    try {
      const res = await fetch("/api/ai-rewrite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: source, lang }),
      })
      if (!res.ok) {
        const e = await res.json().catch(() => ({}))
        throw new Error(e.error || "AI error")
      }
      const data = await res.json()
      if (mode === "guided") {
        setMode("free")
      }
      setOriginalMessage(source)
      setMessage(data.text)
      toast({
        title: lang === "fr" ? "Reformulé" : "Rewritten",
        description: lang === "fr" ? "Vous pouvez encore modifier le texte avant l'envoi." : "You can still edit before sending.",
      })
    } catch (err) {
      toast({
        title: lang === "fr" ? "Reformulation indisponible" : "Rewrite unavailable",
        description: err instanceof Error ? err.message : "",
        variant: "destructive",
      })
    } finally {
      setAiBusy(false)
    }
  }

  function revertAi() {
    if (originalMessage !== null) {
      setMessage(originalMessage)
      setOriginalMessage(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isSubmitting) return
    setIsSubmitting(true)
    setStatus(null)

    const form = e.currentTarget
    const fd = new FormData(form)

    const finalMessage = mode === "guided" ? buildMessageFromGuided() : message
    fd.set("message", finalMessage)

    if (!captcha) {
      setStatus({
        type: "error",
        message: lang === "fr" ? "Captcha indisponible. Réessayez." : "Captcha unavailable. Try again.",
      })
      setIsSubmitting(false)
      return
    }
    fd.set("captchaToken", captcha.token)
    fd.set("captchaAnswer", captchaAnswer)

    // Strip default file input (we'll re-add curated list)
    fd.delete("attachments")
    for (const f of files) fd.append("attachments", f, f.name)

    try {
      const res = await fetch("/api/contact", { method: "POST", body: fd })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        await refreshCaptcha()
        throw new Error(data.error || (lang === "fr" ? "Erreur lors de l'envoi." : "Sending failed."))
      }
      setStatus({
        type: "success",
        message:
          lang === "fr"
            ? "Message envoyé avec succès. Je reviens vers vous très vite."
            : "Message sent successfully. I'll get back to you shortly.",
      })
      toast({
        title: t("contact.toast.title"),
        description: t("contact.toast.desc"),
      })
      form.reset()
      setFiles([])
      setMessage("")
      setOriginalMessage(null)
      setGuided({ context: "", need: "", stack: "", deadline: "" })
      void refreshCaptcha()

      // Scroll into view so the user sees the success state
      requestAnimationFrame(() => {
        document.getElementById("contact-status")?.scrollIntoView({ behavior: "smooth", block: "center" })
      })
    } catch (err) {
      const msg = err instanceof Error ? err.message : lang === "fr" ? "Impossible d'envoyer le message." : "Could not send message."
      setStatus({ type: "error", message: msg })
      toast({
        title: lang === "fr" ? "Erreur" : "Error",
        description: msg,
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
        <AnimatePresence>
          {status && (
            <motion.div
              key={status.type + status.message}
              id="contact-status"
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.25 }}
              role={status.type === "error" ? "alert" : "status"}
              aria-live={status.type === "error" ? "assertive" : "polite"}
              className={cn(
                "flex items-start gap-3 overflow-hidden rounded-xl border p-4",
                status.type === "success"
                  ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                  : "border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-300",
              )}
            >
              {status.type === "success" ? (
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
              ) : (
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
              )}
              <div className="flex-1 text-sm leading-relaxed">
                <p className="font-medium">
                  {status.type === "success"
                    ? lang === "fr"
                      ? "Message envoyé"
                      : "Message sent"
                    : lang === "fr"
                      ? "Envoi impossible"
                      : "Sending failed"}
                </p>
                <p className="mt-0.5 text-[13px] opacity-90">{status.message}</p>
              </div>
              <button
                type="button"
                onClick={() => setStatus(null)}
                className="rounded-full p-1 hover:bg-foreground/10"
                aria-label={lang === "fr" ? "Fermer" : "Close"}
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Honeypot — hidden from humans */}
        <input
          type="text"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field label={t("contact.form.name")}>
            <Input
              name="name"
              required
              maxLength={120}
              placeholder={t("contact.form.name.ph")}
              className="h-11 rounded-lg border-border bg-background"
            />
          </Field>
          <Field label={t("contact.form.email")}>
            <Input
              name="email"
              type="email"
              required
              maxLength={200}
              placeholder={t("contact.form.email.ph")}
              className="h-11 rounded-lg border-border bg-background"
            />
          </Field>
        </div>

        <Field label={t("contact.form.subject")}>
          <Input
            name="subject"
            required
            maxLength={200}
            placeholder={t("contact.form.subject.ph")}
            className="h-11 rounded-lg border-border bg-background"
          />
        </Field>

        {/* Mode toggle */}
        <div className="flex flex-wrap items-center gap-2 rounded-full border border-border bg-muted/40 p-1 w-fit">
          <ModeButton active={mode === "free"} onClick={() => setMode("free")} icon={<PencilLine className="h-3.5 w-3.5" />}>
            {lang === "fr" ? "Écriture libre" : "Free writing"}
          </ModeButton>
          <ModeButton active={mode === "guided"} onClick={() => setMode("guided")} icon={<ListChecks className="h-3.5 w-3.5" />}>
            {lang === "fr" ? "Mode guidé" : "Guided mode"}
          </ModeButton>
        </div>

        <AnimatePresence mode="wait">
          {mode === "free" ? (
            <motion.div
              key="free"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <Field label={t("contact.form.message")}>
                <Textarea
                  required
                  rows={7}
                  maxLength={6000}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t("contact.form.message.ph")}
                  className="resize-none rounded-lg border-border bg-background"
                />
                <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
                  <span>{message.length} / 6000</span>
                  <div className="flex items-center gap-2">
                    {originalMessage !== null && (
                      <button
                        type="button"
                        onClick={revertAi}
                        className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-[11px] font-medium hover:bg-muted"
                      >
                        <RefreshCcw className="h-3 w-3" />
                        {lang === "fr" ? "Restaurer l'original" : "Restore original"}
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={handleAiRewrite}
                      disabled={aiBusy || message.trim().length < 10}
                      className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1 text-[11px] font-medium text-background hover:opacity-90 disabled:opacity-40"
                    >
                      {aiBusy ? <Loader2 className="h-3 w-3 animate-spin" /> : <Sparkles className="h-3 w-3" />}
                      {lang === "fr" ? "Reformuler avec l'IA" : "Rewrite with AI"}
                    </button>
                  </div>
                </div>
              </Field>
            </motion.div>
          ) : (
            <motion.div
              key="guided"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="space-y-4 rounded-xl border border-dashed border-border bg-muted/30 p-4"
            >
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <Wand className="h-3.5 w-3.5" />
                {lang === "fr"
                  ? "Répondez aux 4 questions, je structure le message à votre place."
                  : "Answer 4 questions, I'll structure the message for you."}
              </p>
              <GuidedField
                label={lang === "fr" ? "1. Quel est le contexte ?" : "1. What's the context?"}
                hint={lang === "fr" ? "Votre entreprise, votre rôle, l'environnement actuel." : "Your company, role, current setup."}
                value={guided.context}
                onChange={(v) => setGuided({ ...guided, context: v })}
              />
              <GuidedField
                label={lang === "fr" ? "2. Quel est votre besoin ?" : "2. What's your need?"}
                hint={lang === "fr" ? "Quel problème ou objectif ? Quel livrable attendu ?" : "What problem or goal? Expected deliverable?"}
                value={guided.need}
                onChange={(v) => setGuided({ ...guided, need: v })}
              />
              <GuidedField
                label={lang === "fr" ? "3. Stack / environnement ?" : "3. Stack / environment?"}
                hint={lang === "fr" ? "M365, SharePoint, Power Platform, .NET, Azure…" : "M365, SharePoint, Power Platform, .NET, Azure…"}
                value={guided.stack}
                onChange={(v) => setGuided({ ...guided, stack: v })}
                rows={2}
              />
              <GuidedField
                label={lang === "fr" ? "4. Échéance ou contraintes ?" : "4. Deadline or constraints?"}
                hint={lang === "fr" ? "Date cible, durée, budget, prérequis…" : "Target date, duration, budget, prerequisites…"}
                value={guided.deadline}
                onChange={(v) => setGuided({ ...guided, deadline: v })}
                rows={2}
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleAiRewrite}
                  disabled={aiBusy || buildMessageFromGuided().trim().length < 10}
                  className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-background hover:opacity-90 disabled:opacity-40"
                >
                  {aiBusy ? <Loader2 className="h-3 w-3 animate-spin" /> : <Wand2 className="h-3 w-3" />}
                  {lang === "fr" ? "Synthétiser avec l'IA" : "Synthesize with AI"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Attachments */}
        <div>
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            {lang === "fr" ? "Pièces jointes (PDF, max 3 × 5 Mo)" : "Attachments (PDF, up to 3 × 5 MB)"}
          </span>
          <div
            onDragOver={(e) => {
              e.preventDefault()
              e.currentTarget.dataset.drag = "true"
            }}
            onDragLeave={(e) => {
              delete e.currentTarget.dataset.drag
            }}
            onDrop={(e) => {
              e.preventDefault()
              delete e.currentTarget.dataset.drag
              if (e.dataTransfer.files) addFiles(e.dataTransfer.files)
            }}
            className="rounded-lg border border-dashed border-border bg-muted/30 p-4 transition-colors data-[drag=true]:border-foreground/40 data-[drag=true]:bg-muted/60"
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="application/pdf,.pdf"
              multiple
              hidden
              onChange={(e) => e.target.files && addFiles(e.target.files)}
            />
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-muted-foreground">
                {lang === "fr"
                  ? "Glissez-déposez ou ajoutez vos fichiers."
                  : "Drag & drop or pick files."}
              </p>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={files.length >= MAX_FILES}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium hover:bg-muted disabled:opacity-40"
              >
                <Paperclip className="h-3 w-3" />
                {lang === "fr" ? "Ajouter un PDF" : "Add a PDF"}
              </button>
            </div>

            {files.length > 0 && (
              <ul className="mt-3 space-y-1.5">
                {files.map((f, i) => (
                  <li
                    key={`${f.name}-${i}`}
                    className="flex items-center justify-between gap-2 rounded-md border border-border bg-background px-2.5 py-1.5"
                  >
                    <div className="flex min-w-0 items-center gap-2">
                      <FileText className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                      <span className="truncate text-xs">{f.name}</span>
                      <span className="shrink-0 text-[11px] text-muted-foreground">
                        {(f.size / 1024 / 1024).toFixed(2)} Mo
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(i)}
                      className="rounded-full p-1 hover:bg-muted"
                      aria-label="Remove"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Captcha */}
        <div className="flex flex-wrap items-end gap-3 rounded-lg border border-border bg-muted/30 p-3">
          <div className="flex-1 min-w-[180px]">
            <span className="mb-1.5 block text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {lang === "fr" ? "Vérification anti-bot" : "Anti-bot check"}
            </span>
            <div className="flex items-center gap-2">
              <span className="rounded-md border border-border bg-background px-3 py-2 font-mono text-sm">
                {captcha?.question ?? "…"} = ?
              </span>
              <Input
                inputMode="numeric"
                pattern="[0-9]*"
                required
                value={captchaAnswer}
                onChange={(e) => setCaptchaAnswer(e.target.value.replace(/[^\d-]/g, ""))}
                placeholder="?"
                className="h-9 w-20 rounded-md border-border bg-background text-center"
              />
              <button
                type="button"
                onClick={refreshCaptcha}
                className="rounded-md border border-border bg-background p-2 hover:bg-muted"
                aria-label={lang === "fr" ? "Régénérer" : "Refresh"}
              >
                <RefreshCcw className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className={cn("h-12 w-full rounded-full text-sm font-medium")}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t("contact.form.submitting")}
            </>
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

function ModeButton({
  active,
  onClick,
  icon,
  children,
}: {
  active: boolean
  onClick: () => void
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
        active ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
      )}
    >
      {icon}
      {children}
    </button>
  )
}

function GuidedField({
  label,
  hint,
  value,
  onChange,
  rows = 3,
}: {
  label: string
  hint: string
  value: string
  onChange: (v: string) => void
  rows?: number
}) {
  return (
    <label className="block">
      <span className="mb-0.5 block text-sm font-medium text-foreground">{label}</span>
      <span className="mb-1.5 block text-xs text-muted-foreground">{hint}</span>
      <Textarea
        rows={rows}
        value={value}
        maxLength={1500}
        onChange={(e) => onChange(e.target.value)}
        className="resize-none rounded-lg border-border bg-background"
      />
    </label>
  )
}
