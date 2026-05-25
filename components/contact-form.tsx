"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "TRANSMISSION CHIFFRÉE ENVOYÉE",
      description: "Message reçu sur le canal sécurisé. Réponse sous 24h.",
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
            CANAL CHIFFRÉ // AES-256
          </span>
          <span>FREQ.443.92</span>
        </div>

        <div className="p-6">
          <h3 className="font-stencil text-2xl uppercase tracking-wide mb-1">► Transmission</h3>
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
            Établir le contact — voie sécurisée
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="block text-[10px] font-mono uppercase tracking-widest text-accent">
                {"// IDENTIFIANT_OPÉRATEUR"}
              </label>
              <Input
                placeholder="Votre nom"
                required
                className="bg-background border-border focus:border-accent rounded-none font-mono"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-[10px] font-mono uppercase tracking-widest text-accent">
                {"// CANAL_RETOUR"}
              </label>
              <Input
                type="email"
                placeholder="vous@exemple.com"
                required
                className="bg-background border-border focus:border-accent rounded-none font-mono"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-[10px] font-mono uppercase tracking-widest text-accent">
                {"// OBJET_MISSION"}
              </label>
              <Input
                placeholder="Sujet"
                required
                className="bg-background border-border focus:border-accent rounded-none font-mono"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-[10px] font-mono uppercase tracking-widest text-accent">
                {"// CONTENU_TRANSMISSION"}
              </label>
              <Textarea
                placeholder="Détails de la mission..."
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
                <>► CHIFFREMENT EN COURS...</>
              ) : (
                <>
                  ► ENVOYER LA TRANSMISSION <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}
