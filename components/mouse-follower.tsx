"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block"
      animate={{
        x: mousePosition.x - 24,
        y: mousePosition.y - 24,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ type: "spring", damping: 25, stiffness: 350, mass: 0.4 }}
    >
      {/* Tactical reticle / crosshair */}
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border border-accent/80 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-accent rounded-full" />
        <div className="absolute top-1/2 left-0 w-3 h-px bg-accent/80" />
        <div className="absolute top-1/2 right-0 w-3 h-px bg-accent/80" />
        <div className="absolute left-1/2 top-0 h-3 w-px bg-accent/80" />
        <div className="absolute left-1/2 bottom-0 h-3 w-px bg-accent/80" />
      </div>
    </motion.div>
  )
}
