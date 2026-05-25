"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function CreativeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let rafId = 0
    let dpr = 1
    let w = 0
    let h = 0

    const resize = () => {
      dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener("resize", resize)

    // Targets ("blips") on radar
    const blips: { angle: number; radius: number; size: number; phase: number }[] = []
    for (let i = 0; i < 14; i++) {
      blips.push({
        angle: Math.random() * Math.PI * 2,
        radius: Math.random() * 0.85 + 0.1,
        size: Math.random() * 2 + 1,
        phase: Math.random() * Math.PI * 2,
      })
    }

    let sweep = 0
    const start = performance.now()

    const draw = (now: number) => {
      const t = (now - start) / 1000
      ctx.clearRect(0, 0, w, h)

      const cx = w / 2
      const cy = h / 2
      const maxR = Math.min(w, h) * 0.45

      // Background tactical grid
      ctx.strokeStyle = "rgba(138, 154, 91, 0.08)"
      ctx.lineWidth = 1
      const step = 24
      for (let x = 0; x < w; x += step) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, h)
        ctx.stroke()
      }
      for (let y = 0; y < h; y += step) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(w, y)
        ctx.stroke()
      }

      // Radar concentric circles
      ctx.strokeStyle = "rgba(184, 156, 96, 0.45)"
      ctx.lineWidth = 1
      for (let i = 1; i <= 4; i++) {
        ctx.beginPath()
        ctx.arc(cx, cy, (maxR * i) / 4, 0, Math.PI * 2)
        ctx.stroke()
      }
      // Crosshair lines
      ctx.beginPath()
      ctx.moveTo(cx - maxR, cy)
      ctx.lineTo(cx + maxR, cy)
      ctx.moveTo(cx, cy - maxR)
      ctx.lineTo(cx, cy + maxR)
      ctx.stroke()

      // Diagonal compass lines
      ctx.strokeStyle = "rgba(184, 156, 96, 0.18)"
      ctx.beginPath()
      ctx.moveTo(cx - maxR * 0.71, cy - maxR * 0.71)
      ctx.lineTo(cx + maxR * 0.71, cy + maxR * 0.71)
      ctx.moveTo(cx - maxR * 0.71, cy + maxR * 0.71)
      ctx.lineTo(cx + maxR * 0.71, cy - maxR * 0.71)
      ctx.stroke()

      // Sweep arm
      sweep = (t * 0.9) % (Math.PI * 2)
      const grad = ctx.createConicGradient
        ? ctx.createConicGradient(sweep - Math.PI / 2, cx, cy)
        : null
      if (grad) {
        grad.addColorStop(0, "rgba(138, 154, 91, 0.55)")
        grad.addColorStop(0.08, "rgba(138, 154, 91, 0.15)")
        grad.addColorStop(0.25, "rgba(138, 154, 91, 0)")
        grad.addColorStop(1, "rgba(138, 154, 91, 0)")
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(cx, cy, maxR, 0, Math.PI * 2)
        ctx.fill()
      } else {
        // Fallback line sweep
        ctx.strokeStyle = "rgba(138, 154, 91, 0.6)"
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(cx + Math.cos(sweep) * maxR, cy + Math.sin(sweep) * maxR)
        ctx.stroke()
      }

      // Blips
      for (const b of blips) {
        const x = cx + Math.cos(b.angle) * maxR * b.radius
        const y = cy + Math.sin(b.angle) * maxR * b.radius
        // Distance from sweep angle
        let diff = b.angle - sweep
        while (diff < 0) diff += Math.PI * 2
        while (diff > Math.PI * 2) diff -= Math.PI * 2
        const intensity = Math.max(0, 1 - diff / (Math.PI / 3))
        const pulse = (Math.sin(t * 2 + b.phase) + 1) / 2
        const alpha = Math.max(0.15, intensity * (0.6 + pulse * 0.4))

        ctx.fillStyle = `rgba(184, 220, 120, ${alpha})`
        ctx.beginPath()
        ctx.arc(x, y, b.size + intensity * 2.5, 0, Math.PI * 2)
        ctx.fill()

        if (intensity > 0.5) {
          ctx.strokeStyle = `rgba(184, 220, 120, ${alpha * 0.5})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.arc(x, y, b.size + 6 + intensity * 4, 0, Math.PI * 2)
          ctx.stroke()
        }
      }

      // Compass labels
      ctx.fillStyle = "rgba(184, 156, 96, 0.7)"
      ctx.font = "10px ui-monospace, Menlo, monospace"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("N", cx, cy - maxR - 12)
      ctx.fillText("S", cx, cy + maxR + 12)
      ctx.fillText("E", cx + maxR + 14, cy)
      ctx.fillText("W", cx - maxR - 14, cy)

      // HUD readout
      ctx.fillStyle = "rgba(138, 154, 91, 0.85)"
      ctx.font = "bold 10px ui-monospace, Menlo, monospace"
      ctx.textAlign = "left"
      ctx.fillText(`AZIMUT  ${((sweep * 180) / Math.PI).toFixed(1).padStart(5, "0")}°`, 12, 18)
      ctx.fillText(`TRACK   ${blips.length} CONTACTS`, 12, 32)
      ctx.textAlign = "right"
      ctx.fillText(`LAT 48.823  LON 02.270`, w - 12, 18)
      ctx.fillText(`STATUS  OPÉRATIONNEL`, w - 12, 32)

      rafId = requestAnimationFrame(draw)
    }

    rafId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <motion.div
      className="relative w-full h-[420px] md:h-[520px] bg-card border border-border"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <span className="absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2 border-accent z-10" />
      <span className="absolute -top-1 -right-1 w-5 h-5 border-t-2 border-r-2 border-accent z-10" />
      <span className="absolute -bottom-1 -left-1 w-5 h-5 border-b-2 border-l-2 border-accent z-10" />
      <span className="absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2 border-accent z-10" />

      <canvas ref={canvasRef} className="block w-full h-full" />

      <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-muted-foreground z-10 pointer-events-none">
        <span>RADAR.MK-IV</span>
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-accent animate-blink rounded-full" />
          LIVE FEED
        </span>
      </div>
    </motion.div>
  )
}
