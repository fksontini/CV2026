"use client"

import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { useT } from "@/lib/i18n"

/**
 * Generates an ambient "military command" soundscape using Web Audio API:
 *  - low drone (military pad)
 *  - slow heartbeat-like kick pulse (courage / tension)
 *  - radio chatter sweeps
 *  - subtle radar ping
 * No external assets needed.
 */
export function AudioController() {
  const { t } = useT()
  const [enabled, setEnabled] = useState(false)
  const [ready, setReady] = useState(false)
  const ctxRef = useRef<AudioContext | null>(null)
  const masterRef = useRef<GainNode | null>(null)
  const stopFnsRef = useRef<Array<() => void>>([])

  useEffect(() => {
    return () => {
      stopFnsRef.current.forEach((s) => s())
      stopFnsRef.current = []
      if (ctxRef.current) {
        ctxRef.current.close().catch(() => {})
        ctxRef.current = null
      }
    }
  }, [])

  const startAudio = async () => {
    if (typeof window === "undefined") return
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext
    if (!AudioCtx) return

    const ctx: AudioContext = ctxRef.current ?? new AudioCtx()
    ctxRef.current = ctx
    if (ctx.state === "suspended") await ctx.resume()

    const master = ctx.createGain()
    master.gain.value = 0
    master.connect(ctx.destination)
    masterRef.current = master
    // fade in
    master.gain.linearRampToValueAtTime(0.18, ctx.currentTime + 1.5)

    // ----- DRONE: two detuned saws through low-pass -----
    const droneGain = ctx.createGain()
    droneGain.gain.value = 0.35
    const lp = ctx.createBiquadFilter()
    lp.type = "lowpass"
    lp.frequency.value = 380
    lp.Q.value = 0.7
    droneGain.connect(lp).connect(master)

    const osc1 = ctx.createOscillator()
    osc1.type = "sawtooth"
    osc1.frequency.value = 55 // A1
    const osc2 = ctx.createOscillator()
    osc2.type = "sawtooth"
    osc2.frequency.value = 55 * 1.005
    const osc3 = ctx.createOscillator()
    osc3.type = "sine"
    osc3.frequency.value = 110
    const osc3Gain = ctx.createGain()
    osc3Gain.gain.value = 0.4
    osc1.connect(droneGain)
    osc2.connect(droneGain)
    osc3.connect(osc3Gain).connect(droneGain)
    osc1.start()
    osc2.start()
    osc3.start()

    // slow filter sweep for movement
    const lfo = ctx.createOscillator()
    lfo.frequency.value = 0.07
    const lfoGain = ctx.createGain()
    lfoGain.gain.value = 180
    lfo.connect(lfoGain).connect(lp.frequency)
    lfo.start()

    stopFnsRef.current.push(() => {
      try {
        osc1.stop()
        osc2.stop()
        osc3.stop()
        lfo.stop()
      } catch {}
    })

    // ----- HEARTBEAT KICK: slow military pulse every ~1.6s -----
    let kickTimer: ReturnType<typeof setInterval> | null = null
    const playKick = () => {
      if (!ctxRef.current) return
      const c = ctxRef.current
      const o = c.createOscillator()
      const g = c.createGain()
      o.type = "sine"
      o.frequency.setValueAtTime(120, c.currentTime)
      o.frequency.exponentialRampToValueAtTime(40, c.currentTime + 0.18)
      g.gain.setValueAtTime(0.0001, c.currentTime)
      g.gain.exponentialRampToValueAtTime(0.6, c.currentTime + 0.01)
      g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 0.35)
      o.connect(g).connect(master)
      o.start()
      o.stop(c.currentTime + 0.4)
    }
    kickTimer = setInterval(playKick, 1600)
    stopFnsRef.current.push(() => {
      if (kickTimer) clearInterval(kickTimer)
    })

    // ----- RADAR PING: high sine every ~5s -----
    let pingTimer: ReturnType<typeof setInterval> | null = null
    const playPing = () => {
      if (!ctxRef.current) return
      const c = ctxRef.current
      const o = c.createOscillator()
      const g = c.createGain()
      o.type = "sine"
      o.frequency.value = 880
      g.gain.setValueAtTime(0.0001, c.currentTime)
      g.gain.exponentialRampToValueAtTime(0.06, c.currentTime + 0.02)
      g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 0.6)
      o.connect(g).connect(master)
      o.start()
      o.stop(c.currentTime + 0.7)
    }
    pingTimer = setInterval(playPing, 5200)
    stopFnsRef.current.push(() => {
      if (pingTimer) clearInterval(pingTimer)
    })

    // ----- RADIO CHATTER: filtered noise burst every ~7s -----
    const noiseBuffer = (() => {
      const len = ctx.sampleRate * 1.2
      const buf = ctx.createBuffer(1, len, ctx.sampleRate)
      const data = buf.getChannelData(0)
      for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1
      return buf
    })()

    let chatterTimer: ReturnType<typeof setInterval> | null = null
    const playChatter = () => {
      if (!ctxRef.current) return
      const c = ctxRef.current
      const src = c.createBufferSource()
      src.buffer = noiseBuffer
      const bp = c.createBiquadFilter()
      bp.type = "bandpass"
      bp.frequency.value = 1600
      bp.Q.value = 8
      const g = c.createGain()
      g.gain.setValueAtTime(0.0001, c.currentTime)
      g.gain.exponentialRampToValueAtTime(0.05, c.currentTime + 0.05)
      g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 0.9)
      src.connect(bp).connect(g).connect(master)
      src.start()
      src.stop(c.currentTime + 1.0)
    }
    chatterTimer = setInterval(playChatter, 7400)
    stopFnsRef.current.push(() => {
      if (chatterTimer) clearInterval(chatterTimer)
    })

    setReady(true)
  }

  const stopAudio = () => {
    stopFnsRef.current.forEach((s) => s())
    stopFnsRef.current = []
    const ctx = ctxRef.current
    const master = masterRef.current
    if (master && ctx) {
      master.gain.cancelScheduledValues(ctx.currentTime)
      master.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.4)
    }
    setTimeout(() => {
      if (ctxRef.current) {
        ctxRef.current.close().catch(() => {})
        ctxRef.current = null
      }
      masterRef.current = null
    }, 500)
    setReady(false)
  }

  const toggle = async () => {
    if (enabled) {
      stopAudio()
      setEnabled(false)
    } else {
      await startAudio()
      setEnabled(true)
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={enabled ? t("audio.off") : t("audio.on")}
      className={`group inline-flex items-center gap-1.5 border px-2 py-1 font-mono text-[10px] uppercase tracking-widest transition-colors ${
        enabled
          ? "border-accent/70 text-accent bg-accent/10"
          : "border-border text-muted-foreground hover:text-accent hover:border-accent/60"
      }`}
    >
      {enabled ? <Volume2 className="h-3 w-3" /> : <VolumeX className="h-3 w-3" />}
      <span className="hidden sm:inline">{enabled ? t("audio.on") : t("audio.off")}</span>
      {enabled && ready && <span className="w-1.5 h-1.5 bg-accent animate-blink rounded-full ml-0.5" />}
    </button>
  )
}
