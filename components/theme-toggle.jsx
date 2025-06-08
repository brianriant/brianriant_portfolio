"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { assets } from "@/assets/assets"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "p-2 rounded-full",
        "hover:bg-accent",
        "transition-colors duration-200"
      )}>
      <Image
        src={theme === "dark" ? assets.sun_icon : assets.moon_icon}
        alt="Toggle theme"
        className="w-6"
        priority
        quality={75}
        sizes="100vw"
      />
    </button>
  )
}
