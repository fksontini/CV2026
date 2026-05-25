"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { getCompanyLogoUrl, getCompanyInitials } from "@/lib/company-logos"

type Props = {
  company: string
  size?: number
  className?: string
  rounded?: "md" | "lg" | "full"
}

export function CompanyLogo({ company, size = 40, className, rounded = "lg" }: Props) {
  const url = getCompanyLogoUrl(company, 128)
  const initials = getCompanyInitials(company)
  const [errored, setErrored] = useState(false)

  const radius =
    rounded === "full" ? "rounded-full" : rounded === "md" ? "rounded-md" : "rounded-lg"

  const showFallback = !url || errored

  return (
    <div
      aria-hidden="true"
      style={{ width: size, height: size }}
      className={cn(
        "relative flex shrink-0 items-center justify-center overflow-hidden border border-border bg-background",
        radius,
        className,
      )}
    >
      {showFallback ? (
        <span
          className="font-serif font-semibold text-foreground/70"
          style={{ fontSize: Math.max(11, Math.round(size * 0.36)) }}
        >
          {initials}
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={url || "/placeholder.svg"}
          alt=""
          width={size}
          height={size}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setErrored(true)}
          className="h-full w-full object-contain p-1"
        />
      )}
    </div>
  )
}
