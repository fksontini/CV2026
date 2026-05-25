"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, FileText } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  demoUrl: string
  repoUrl: string
  codename?: string
}

export function ProjectCard({ title, description, tags, demoUrl, repoUrl, codename }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const opCode = codename ?? `OP-${Math.floor(Math.random() * 9000 + 1000)}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <div
        className="relative h-full bg-card border border-border transition-colors duration-300 group-hover:border-accent flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* corner brackets */}
        <span className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-accent/0 group-hover:border-accent transition-colors" />
        <span className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-accent/0 group-hover:border-accent transition-colors" />
        <span className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-accent/0 group-hover:border-accent transition-colors" />
        <span className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-accent/0 group-hover:border-accent transition-colors" />

        {/* dossier header */}
        <div className="relative h-44 border-b border-border bg-secondary/40 tactical-grid overflow-hidden">
          <div className="absolute inset-0 noise scanlines" />
          <div className="absolute top-2 left-2 right-2 flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-muted-foreground z-10">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-destructive animate-blink" />
              REC
            </span>
            <span>{opCode}</span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="font-stencil text-3xl md:text-4xl text-accent uppercase tracking-widest text-shadow-stencil">
                {opCode}
              </div>
              <div className="font-mono text-[10px] text-muted-foreground mt-1 tracking-widest">
                MISSION DOSSIER
              </div>
            </div>
          </div>

          {/* crosshair on hover */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
          >
            <div className="relative w-32 h-32 border border-accent/70 rounded-full">
              <div className="absolute top-1/2 left-0 w-full h-px bg-accent/70" />
              <div className="absolute left-1/2 top-0 h-full w-px bg-accent/70" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-accent" />
            </div>
          </div>

          {/* CLASSIFIED stamp */}
          <div className="absolute top-3 right-3 z-20 stamp text-destructive font-stencil text-xs">
            CLASSIFIED
          </div>
        </div>

        <div className="p-5 flex-grow flex flex-col">
          <div className="flex items-start gap-2 mb-2">
            <FileText className="h-4 w-4 text-accent mt-1 shrink-0" />
            <h3 className="font-stencil text-lg uppercase tracking-wide leading-tight">{title}</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-[10px] font-mono uppercase tracking-widest border border-border bg-secondary/50 text-foreground px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center mt-auto pt-3 border-t border-dashed border-border/60">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent hover:bg-transparent font-mono px-0"
              asChild
            >
              <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                {"// SOURCE"}
              </Link>
            </Button>
            <Button
              size="sm"
              className="h-8 text-[10px] uppercase tracking-widest font-mono bg-primary hover:bg-primary/80 text-primary-foreground border border-accent/40"
              asChild
            >
              <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                ENGAGE <ArrowUpRight className="ml-1 h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
